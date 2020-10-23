import { StorefrontApiModule, registerExtensions } from '@storefront-api/lib/module'
import { StorefrontApiContext } from '@storefront-api/lib/module/types'
import { Router } from 'express';
import order from './api/order';
import user from './api/user';
import stock from './api/stock';
import cart from './api/cart';
import product from './api/product';
import img from './api/img'
import { version } from '../../../package.json';
import path from 'path'

export const ADempiereStore: StorefrontApiModule = new StorefrontApiModule({
  key: 'adempiere-store',
  initApi: ({ config, db, app }: StorefrontApiContext): void => {
    let api = Router();
    const WebStore = require('@adempiere/grpc-web-store-api')
    // console.log('Config: ', config)
    let service = new WebStore(config)
    service.initService()

    // mount the order resource
    api.use('/order', order({ config, db, service }));

    // mount the user resource
    api.use('/user', user({ config, db, service }));

    // mount the stock resource
    api.use('/stock', stock({ config, db, service }));

    // mount the product list
    api.use('/product', product({ config, db, service }));

    // mount the cart resource
    api.use('/cart', cart({ config, db, service }));
    api.use('/img', img({ config, db, service }));
    api.use('/img/:width/:height/:action/:image', (req, res, next) => {
      console.log(req.params)
    });

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
      res.json({ version });
    });

    registerExtensions({ app, config, db, registeredExtensions: config.get('modules.adempiereStore.registeredExtensions'), rootPath: path.join(__dirname, 'api', 'extensions') })

    // api router
    app.use('/adempiere-store', api);
  }

})
