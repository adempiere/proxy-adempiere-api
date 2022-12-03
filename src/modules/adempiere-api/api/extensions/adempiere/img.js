import { downloadImage, fit, identify, resize } from '@storefront-api/lib/image';
import mime from 'mime-types';
import URL from 'url';

const SUPPORTED_ACTIONS = ['fit', 'resize', 'identify'];
const SUPPORTED_MIMETYPES = [
  'image/gif',
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/svg+xml'
];
const ONE_YEAR = 31557600000;

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

//  Get Image from gRPC
function getResource (service, resourceName, token) {
  return new Promise((resolve, reject) => {
    service.getResource({
      resourceName,
      token
    }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.buffer)
      }
    })
  })
}

/**
 * Image resizer
 *
 * ```bash
 *  curl https://api.erpya.com/img/310/300/resize/w/p/wp07-black_main.jpg
 * ```
 *
 * or
 *
 * ```bash
 *  curl http://localhost:8080/sample-api/img/600/744/resize/m/p/mp10-black_main.jpg
 * ```
 *
 * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#img
 */
export default ({ config, db, service: parentService }) => {
  return asyncMiddleware(async (req, res, body) => {
    if (!(req.method === 'GET')) {
      res.set('Allow', 'GET');
      return res.status(405).send('Method Not Allowed');
    }
    const ServiceApi = require('@adempiere/grpc-api/src/services/fileManagement');
    const service = new ServiceApi(config);

    req.socket.setMaxListeners(config.imageable.maxListeners || 50);

    let width;
    let height;
    let action;
    let imgUrl;
    let resourceName;
    let token;
    if (req.query.url) {
      // url provided as the query param
      imgUrl = decodeURIComponent(req.query.url);
      width = parseInt(req.query.width);
      height = parseInt(req.query.height);
      action = req.query.action;
      resourceName = req.query.url;
      token = req.query.token;
    } else {
      let urlParts = req.url.split('/');
      width = parseInt(urlParts[1]);
      height = parseInt(urlParts[2]);
      action = urlParts[3];
      resourceName = urlParts[4];
      imgUrl = `${config.modules.adempiereApi.images.baseUrl}/${urlParts
        .slice(4)
        .join('/')}`; // full original image url
      if (urlParts.length < 4) {
        return res.status(400).send({
          code: 400,
          result:
            'Please provide following parameters: /img/<width>/<height>/<action:fit,resize,identify>/<relative_url>'
        });
      }
    }
    if (isNaN(width) || isNaN(height) || !SUPPORTED_ACTIONS.includes(action)) {
      return res.status(400).send({
        code: 400,
        result:
          'Please provide following parameters: /img/<width>/<height>/<action:fit,resize,identify>/<relative_url> OR ?url=&width=&height=&action='
      });
    }
    if (
      width > config.imageable.imageSizeLimit ||
      width < 0 ||
      height > config.imageable.imageSizeLimit ||
      height < 0
    ) {
      return res.status(400).send({
        code: 400,
        result: `Width and height must have a value between 0 and ${config.imageable.imageSizeLimit}`
      });
    }
    const mimeType = mime.lookup(imgUrl);
    if (mimeType === false || !SUPPORTED_MIMETYPES.includes(mimeType)) {
      return res.status(400).send({
        code: 400,
        result: 'Unsupported file type'
      });
    }
    console.log(
      `[URL]: ${imgUrl} - [ACTION]: ${action} - [WIDTH]: ${width} - [HEIGHT]: ${height}`
    );

    let buffer;
    if (config.modules.adempiereApi.images.httpBased) {
      try {
        buffer = await downloadImage(imgUrl);
      } catch (err) {
        return res.status(400).send({
          code: 400,
          result: `Unable to download the requested image ${imgUrl}`
        });
      }
    } else {
      try {
        buffer = Buffer.from(await getResource(service, resourceName, token));
      } catch (err) {
        return res.status(400).send({
          code: 400,
          result: `Unable to download the requested image ${imgUrl}`
        });
      }
    }
    //  Process image
    switch (action) {
      case 'resize':
        return res
          .type(mimeType)
          .set({ 'Cache-Control': `max-age=${ONE_YEAR}` })
          .send(await resize(buffer, width, height));
      case 'fit':
        return res
          .type(mimeType)
          .set({ 'Cache-Control': `max-age=${ONE_YEAR}` })
          .send(await fit(buffer, width, height));
      case 'identify':
        return res
          .set({ 'Cache-Control': `max-age=${ONE_YEAR}` })
          .send(await identify(buffer));
      default:
        throw new Error('Unknown action');
    }
  });
}

function _isUrlWhitelisted (url, whitelistType, defaultValue, whitelist) {
  if (arguments.length !== 4) throw new Error('params are not optional!');

  if (whitelist && whitelist.hasOwnProperty(whitelistType)) {
    const requestedHost = URL.parse(url).host;
    const matches = whitelist[whitelistType].map(allowedHost => {
      allowedHost =
        allowedHost instanceof RegExp ? allowedHost : new RegExp(allowedHost);
      return !!requestedHost.match(allowedHost);
    });

    return matches.indexOf(true) > -1;
  } else {
    return defaultValue;
  }
}

function isImageSourceHostAllowed (url, whitelist) {
  return _isUrlWhitelisted(url, 'allowedHosts', true, whitelist);
}
