import { StorefrontApiModule, registerExtensions } from '@storefront-api/lib/module';
import { StorefrontApiContext } from '@storefront-api/lib/module/types';
import { Router } from 'express';
import img from './api/extensions/adempiere/img';
import resource from './api/extensions/adempiere/resource';
import { version } from '../../../package.json';
import path from 'path';

export const ADempiereApi: StorefrontApiModule = new StorefrontApiModule({
  key: 'adempiere-api',
  initApi: ({ config, db, app }: StorefrontApiContext): void => {
    const api = Router();
    const Api = require('@adempiere/grpc-api');
    const service = new Api(config);

    // Mount the services
    // Image
    api.use('/img', img({ config, db, service }));
    api.use('/img/:width/:height/:action/:image', (req, res, next) => {
      console.log(req.params);
    });
    //  Resource
    api.use('/resource', resource({ config, db, service }));
    // version
    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
      res.json({ version });
    });

    registerExtensions({
      app,
      config,
      db,
      registeredExtensions: config.get('modules.adempiereApi.registeredExtensions'),
      rootPath: path.join(__dirname, 'api', 'extensions')
    });

    // api router
    app.use('/adempiere-api', api);
  }

});
