const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

//  Get Resource from gRPC
function getResource ({
  token,
  language,
  resourceUuid,
  resourceName,
  service
}) {
  return new Promise((resolve, reject) => {
    service.getResource({
      token,
      language,
      resourceUuid,
      resourceName
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
 * GET Resource
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
export default ({ config, db, service }) =>
  asyncMiddleware(async (req, res, body) => {
    if (!(req.method === 'GET')) {
      res.set('Allow', 'GET');
      return res.status(405).send('Method Not Allowed');
    }
    //
    try {
      let buffer = Buffer.from(await getResource({
        token: req.query.token,
        language: req.query.language,
        resourceUuid: req.query.resource_uuid,
        resourceName: req.query.resource_name,
        service
      }))
      return res.status(200).send({
        code: 200,
        result: buffer
      });
    } catch (err) {
      return res.status(400).send({
        code: 400,
        result: 'Unable to download the requested resource'
      })
    }
  });
