import { Router } from 'express';

export default ({ config, db, service }) => {
  let api = Router();

  /**
   * GET get stock item
   *
   * req.params.sku - sku of the prodduct to check
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgestockchecksku
   *
   */
  api.get('/check/:sku', (req, res) => {
    res.json({
      code: 200,
      result: {
        item_id: 580,
        product_id: 580, // required field
        stock_id: 1,
        qty: 53, // required field
        is_in_stock: true, // required field
        is_qty_decimal: false,
        show_default_notification_message: false,
        use_config_min_qty: true,
        min_qty: 0,
        use_config_min_sale_qty: 1,
        min_sale_qty: 1,
        use_config_max_sale_qty: true,
        max_sale_qty: 10000,
        use_config_backorders: true,
        backorders: 0,
        use_config_notify_stock_qty: true,
        notify_stock_qty: 1,
        use_config_qty_increments: true,
        qty_increments: 0,
        use_config_enable_qty_inc: true,
        enable_qty_increments: false,
        use_config_manage_stock: true,
        manage_stock: true,
        low_stock_date: null,
        is_decimal_divided: false,
        stock_status_changed_auto: 0
      }
    });
  });

  /**
   * GET get stock item - 2nd version with the query url parameter
   *
   * req.query.url  - sku of the product to check
   */
  api.get('/check', (req, res) => {
    if (req.body) {
      service.getStock({
        sku: req.query.sku,
        storeCode: req.query.storeCode
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              item_id: response.getProductId(),
              product_id: response.getProductId(), // required field
              stock_id: response.getStoreId(),
              qty: response.getQuantity(), // required field
              is_in_stock: response.getIsInStock(), // required field
              is_qty_decimal: response.getIsDecimalQuantity(),
              show_default_notification_message: response.getIsShowDefaultNotificationMessage(),
              use_config_min_qty: response.getIsUseConfigMinimumQuantity(),
              min_qty: response.getMinimumQuantity(),
              use_config_min_sale_qty: response.getIsUseConfigMinimumSaleQuantity(),
              min_sale_qty: response.getMinimumSaleQuantity(),
              use_config_max_sale_qty: response.getIsUseConfigMaximumSaleQuantity(),
              max_sale_qty: response.getMaximumSaleQuantity(),
              use_config_backorders: response.getIsUseConfigBackorders(),
              backorders: response.getBackorders(),
              use_config_notify_stock_qty: response.getIsUseConfigNotifyStockQuantity(),
              notify_stock_qty: response.getNotifyStockQuantity(),
              use_config_qty_increments: response.getIsUseConfigQuantityIncrements(),
              qty_increments: response.getQuantityIncrements(),
              use_config_enable_qty_inc: response.getIsUseConfigEnableQuantityIncrements(),
              enable_qty_increments: response.getIsEnableQuantityIncrements(),
              use_config_manage_stock: response.getIsUseConfigManageStock(),
              manage_stock: response.getIsManageStock(),
              low_stock_date: response.getLowStockDate(),
              is_decimal_divided: response.getIsDecimalDivided(),
              stock_status_changed_auto: response.getStockStatusChangedAuto()
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
   * GET get stock item list by skus (comma separated)
   *
   * req.query.skus = url encoded list of the SKUs
   */
  api.get('/list', (req, res) => {
    if (req.body) {
      service.listStock({
        sku: req.query.sku,
        storeCode: req.query.storeCode
      }, (err, response) => {
        if (response) {
          const stockResult = []
          response.getStocksList().forEach(stock => {
            stockResult.push({
              item_id: stock.getProductId(),
              product_id: stock.getProductId(), // required field
              stock_id: stock.getStoreId(),
              qty: stock.getQuantity(), // required field
              is_in_stock: stock.getIsInStock(), // required field
              is_qty_decimal: stock.getIsDecimalQuantity(),
              show_default_notification_message: stock.getIsShowDefaultNotificationMessage(),
              use_config_min_qty: stock.getIsUseConfigMinimumQuantity(),
              min_qty: stock.getMinimumQuantity(),
              use_config_min_sale_qty: stock.getIsUseConfigMinimumSaleQuantity(),
              min_sale_qty: stock.getMinimumSaleQuantity(),
              use_config_max_sale_qty: stock.getIsUseConfigMaximumSaleQuantity(),
              max_sale_qty: stock.getMaximumSaleQuantity(),
              use_config_backorders: stock.getIsUseConfigBackorders(),
              backorders: stock.getBackorders(),
              use_config_notify_stock_qty: stock.getIsUseConfigNotifyStockQuantity(),
              notify_stock_qty: stock.getNotifyStockQuantity(),
              use_config_qty_increments: stock.getIsUseConfigQuantityIncrements(),
              qty_increments: stock.getQuantityIncrements(),
              use_config_enable_qty_inc: stock.getIsUseConfigEnableQuantityIncrements(),
              enable_qty_increments: stock.getIsEnableQuantityIncrements(),
              use_config_manage_stock: stock.getIsUseConfigManageStock(),
              manage_stock: stock.getIsManageStock(),
              low_stock_date: stock.getLowStockDate(),
              is_decimal_divided: stock.getIsDecimalDivided(),
              stock_status_changed_auto: stock.getStockStatusChangedAuto()
            })
          })
          res.json({
            code: 200,
            result: stockResult
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
