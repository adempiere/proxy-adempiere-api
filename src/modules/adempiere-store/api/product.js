import { Router } from 'express';

export default ({ config, db, service }) => {
  let api = Router();

  /**
   * GET get product list
   *
   * req.params.sku - sku of the prodduct to check separed by comma
   *
   * Details: curl https://api.erpya.com/api/product/list?skus=WP07
   *
   */
  api.get('/list', (req, res) => {
    if (req.body) {
      service.listProducts({
        skus: req.query.skus.split(',')
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              items: response.getProductsList().map(product => {
                return {
                  id: product.getId(),
                  sku: product.getSku(),
                  name: product.getName(),
                  price: product.getPrice(),
                  status: product.getStatus(),
                  visibility: product.getVisibility(),
                  type_id: product.getProductGroupId(),
                  created_at: product.getCreated(),
                  updated_at: product.getUpdated(),
                  product_links: [],
                  tier_prices: [],
                  custom_attributes: product.getCustomAttributesList().map(attribute => {
                    return {
                      attribute_code: attribute.getAttributeCode(),
                      value: (attribute.getValue() ? attribute.getValue() : attribute.getValuesList())
                    }
                  })
                }
              }),
              total_count: response.getRecordCount()
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET get render product list
   *
   * req.params.sku - sku of the prodduct to check separed by comma
   *
   * Details: curl https://api.erpya.com/api/product/render-list?skus=WP07
   *
   */
  api.get('/render-list', (req, res) => {
    if (req.body) {
      service.listRenderProducts({
        skus: req.query.skus.split(',')
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              items: response.getRenderProductsList().map(product => {
                return {
                  id: product.getId(),
                  name: product.getName(),
                  type: 'configurable',
                  store_id: product.getStoreId(),
                  currency_code: product.getPriceInfo().getCurrencyCode(),
                  url: product.getUrl(),
                  price_info: {
                    final_price: product.getPriceInfo().getFinalPrice(),
                    max_price: product.getPriceInfo().getMaxPrice(),
                    max_regular_price: product.getPriceInfo().getMaxRegularPrice(),
                    minimal_regular_price: product.getPriceInfo().getMinimalRegularPrice(),
                    special_price: product.getPriceInfo().getSpecialPrice(),
                    minimal_price: product.getPriceInfo().getMinimalPrice(),
                    regular_price: product.getPriceInfo().getRegularPrice(),
                    formatted_prices: {
                      final_price: product.getPriceInfo().getFormattedPrice().getFinalPrice(),
                      max_price: product.getPriceInfo().getFormattedPrice().getMaxPrice(),
                      minimal_price: product.getPriceInfo().getFormattedPrice().getMinimalPrice(),
                      max_regular_price: product.getPriceInfo().getFormattedPrice().getMaxRegularPrice(),
                      minimal_regular_price: product.getPriceInfo().getFormattedPrice().getMinimalRegularPrice(),
                      special_price: product.getPriceInfo().getFormattedPrice().getSpecialPrice(),
                      regular_price: product.getPriceInfo().getFormattedPrice().getRegularPrice()
                    },
                    extension_attributes: {
                      tax_adjustments: {
                        final_price: product.getPriceInfo().getTaxAdjustment().getFinalPrice(),
                        max_price: product.getPriceInfo().getTaxAdjustment().getMaxPrice(),
                        max_regular_price: product.getPriceInfo().getTaxAdjustment().getMaxRegularPrice(),
                        minimal_regular_price: product.getPriceInfo().getTaxAdjustment().getMinimalRegularPrice(),
                        special_price: product.getPriceInfo().getTaxAdjustment().getSpecialPrice(),
                        minimal_price: product.getPriceInfo().getTaxAdjustment().getMinimalPrice(),
                        regular_price: product.getPriceInfo().getTaxAdjustment().getRegularPrice(),
                        formatted_prices: {
                          final_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getFinalPrice(),
                          max_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getMaxPrice(),
                          minimal_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getMinimalPrice(),
                          max_regular_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getMaxRegularPrice(),
                          minimal_regular_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getMinimalRegularPrice(),
                          special_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getSpecialPrice(),
                          regular_price: product.getPriceInfo().getTaxAdjustment().getFormattedPrice().getRegularPrice()
                        }
                      },
                      weee_attributes: [],
                      weee_adjustment: product.getPriceInfo().getTaxAdjustment().getWeeeAdjustment()
                    }
                  }
                }
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  return api;
};
