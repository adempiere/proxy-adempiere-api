import { Router } from 'express';
import {
  convertPointOfSalesFromGRPC,
  convertOrderFromGRPC,
  convertOrderLineFromGRPC,
  convertKeyLayoutFromGRPC,
  convertPaymentFromGRPC
} from '@adempiere/grpc-api/lib/convertPointOfSales'
import {
  convertProductPriceFromGRPC
} from '@adempiere/grpc-api/lib/convertCoreFunctionality'

export default ({ config, db, service }) => {
  let posService = Router();

  /**
   * List Point of Sales
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.user_uuid - User UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/list-point-of-sales', (req, res) => {
    if (req.body) {
      service.listPointOfSales({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.body.user_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getSellingPointsList().map(pos => {
                return convertPointOfSalesFromGRPC(pos)
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

  /**
   * List Point of Sales
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/get-point-of-sales', (req, res) => {
    if (req.body) {
      service.getPointOfSales({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.body.pos_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPointOfSalesFromGRPC(response)
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
   * POST Get product price
   *
   * req.query.token - user token
   * Body:
   * req.body.search_value - product search value
   * req.body.upc - product UPC
   * req.body.value - product value
   * req.body.name - product name
   * req.body.price_list_uuid - price list UUID reference
   * req.body.business_partner_uuid - Business partner UUID reference
   * req.body.warehouse_uuid - Warehouse UUID reference
   * req.body.valid_from - Prioce List Valid From
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/get-product-price', (req, res) => {
    if (req.body) {
      service.getProductPrice({
        token: req.query.token,
        language: req.query.language,
        searchValue: req.body.search_value,
        upc: req.body.upc,
        value: req.body.value,
        name: req.body.name,
        priceListUuid: req.body.price_list_uuid,
        businessPartnerUuid: req.body.business_partner_uuid,
        warehouseUuid: req.body.warehouse_uuid,
        validFrom: req.body.valid_from,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertProductPriceFromGRPC(response)
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
   * POST List product price
   *
   * req.query.token - user token
   * Body:
   * req.body.search_value - product search value
   * req.body.price_list_uuid - price list UUID reference
   * req.body.business_partner_uuid - Business partner UUID reference
   * req.body.warehouse_uuid - Warehouse UUID reference
   * req.body.valid_from - Prioce List Valid From
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.filters - query filters
   [
     {
       column_name: 'DocStatus',
       operator: 'EQUAL',
       value: 'CO'
     },
     {
       column_name: 'DateInvoiced',
       operator: 'BETWEEN',
       value: '2020-01-01'
       value_to: '2020-09-01'
     },
     {
       column_name: 'C_DocType_ID',
       operator: 'IN',
       values: [
         1000000,
         1000562
       ]
     }
   ],
   value: condition.value,
   valueTo: condition.value_to,
   values: condition.values,
   operator: condition.operator
   * req.body.columns - query columns
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/list-product-prices', (req, res) => {
    if (req.body) {
      service.listProductPrice({
        token: req.query.token,
        language: req.query.language,
        searchValue: req.body.search_value,
        priceListUuid: req.body.price_list_uuid,
        businessPartnerUuid: req.body.business_partner_uuid,
        warehouseUuid: req.body.warehouse_uuid,
        validFrom: req.body.valid_from,
        tableName: req.body.table_name,
        //  DSL Query
        filters: req.body.filters,
        columns: req.body.columns,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getProductPricesList().map(productPrice => {
                return convertProductPriceFromGRPC(productPrice)
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

  /**
   * Create Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/create-order', (req, res) => {
    if (req.body) {
      service.createOrder({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.body.pos_uuid,
        customerUuid: req.body.customer_uuid,
        documentTypeUuid: req.body.document_type_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
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
   * Create Payment
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.invoice_uuid - Invoice UUID reference
   * req.body.bank_uuid - Bank UUID reference
   * req.body.reference_no - Reference no
   * req.body.description - Description for Payment
   * req.body.amount - Payment Amount
   * req.body.tender_type_code - Tender Type
   * req.body.currency_uuid - Currency UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/create-payment', (req, res) => {
    if (req.body) {
      service.createPayment({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        invoiceUuid: req.body.invoice_uuid,
        bankUuid: req.body.bank_uuid,
        referenceNo: req.body.reference_no,
        description: req.body.description,
        amount: req.body.amount,
        tenderTypeCode: req.body.tender_type_code,
        paymentDate: req.body.payment_date,
        currencyUuid: req.body.currency_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPaymentFromGRPC(response)
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
   * Delete Payment
   *
   * req.query.token - user token
   * req.query.language - user language
   * Body:
   * req.body.payment_uuid - Payment UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/delete-payment', (req, res) => {
    if (req.body) {
      service.deletePayment({
        token: req.query.token,
        language: req.query.language,
        paymentUuid: req.body.payment_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * Update Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.payment_uuid - Payment UUID reference
   * req.body.bank_uuid - Bank UUID reference
   * req.body.reference_no - Reference No
   * req.body.description - Document Description
   * req.body.amount - Amount of Document
   * req.body.payment_date - Payment Date
   * req.body.tender_type_code - tender Type
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/update-payment', (req, res) => {
    if (req.body) {
      service.updatePayment({
        token: req.query.token,
        language: req.query.language,
        paymentUuid: req.body.payment_uuid,
        bankUuid: req.body.bank_uuid,
        referenceNo: req.body.reference_no,
        description: req.body.description,
        amount: req.body.amount,
        paymentDate: req.body.payment_date,
        tenderTypeCode: req.body.tender_type_code
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPaymentFromGRPC(response)
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
   * POST List Payments
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.pos_uuid - POS UUID reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/list-payments', (req, res) => {
    if (req.body) {
      service.listPayments({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.body.order_uuid,
        posUuid: req.body.pos_uuid,
        tableName: req.body.table_name,
        //  DSL Query
        filters: req.body.filters,
        columns: req.body.columns,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getPaymentsList().map(payment => {
                return convertPaymentFromGRPC(payment)
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

  /**
   * Delete Sales Order
   *
   * req.query.token - user token
   * req.query.language - user language
   * Body:
   * req.body.order_uuid - Sales Order UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/delete-order', (req, res) => {
    if (req.body) {
      service.deleteOrder({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.body.order_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * Create Sales Order Line
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.product_uuid - Product UUID reference
   * req.body.charge_uuid - Charge UUID reference
   * req.body.description - Description UUID reference
   * req.body.quantity - Quantity UUID reference
   * req.body.price - Price UUID reference
   * req.body.discount_rate - Discount UUID reference
   * req.body.warehouse_uuid - Warehouse UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/create-order-line', (req, res) => {
    if (req.body) {
      service.createOrderLine({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.body.order_uuid,
        productUuid: req.body.product_uuid,
        chargeUuid: req.body.charge_uuid,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        discountRate: req.body.discount_rate,
        warehouseUuid: req.body.warehouse_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderLineFromGRPC(response)
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
   * Delete Sales Order Line
   *
   * req.query.token - user token
   * req.query.language - user language
   * Body:
   * req.body.order_line_uuid - Sales Order Line UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/delete-order-line', (req, res) => {
    if (req.body) {
      service.deleteOrderLine({
        token: req.query.token,
        language: req.query.language,
        orderLineUuid: req.body.order_line_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * Update Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/update-order', (req, res) => {
    if (req.body) {
      service.updateOrder({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.body.order_uuid,
        posUuid: req.body.pos_uuid,
        customerUuid: req.body.customer_uuid,
        documentTypeUuid: req.body.document_type_uuid,
        description: req.body.description
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
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
   * Update Sales Order Line
   *
   * req.query.token - user token
   * Body:
   * req.body.order_line_uuid - Order UUID reference
   * req.body.description - Description
   * req.body.quantity - Quantity UUID reference
   * req.body.price - Price UUID reference
   * req.body.discount_rate - Discount UUID reference
   * req.body.is_add_quantity - Only add quantity
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/update-order-line', (req, res) => {
    if (req.body) {
      service.updateOrderLine({
        token: req.query.token,
        language: req.query.language,
        orderLineUuid: req.body.order_line_uuid,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        discountRate: req.body.discount_rate,
        isAddQuantity: req.body.is_add_quantity
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderLineFromGRPC(response)
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
   * Get Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/get-order', (req, res) => {
    if (req.body) {
      service.getOrder({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.body.order_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
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
   * POST List Sales Orders
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.document_no - Document No
   * req.body.business_partner_uuid - Business Partner UUID reference
   * req.body.grand_total - Grand Total
   * req.body.open_amount - Open Amount
   * req.body.is_paid - Is Paid
   * req.body.is_processed - Is Processed
   * req.body.is_aisle_seller - Is from Aisle Seller
   * req.body.is_invoiced - Is Invoiced
   * req.body.date_ordered_from - Date Ordered From
   * req.body.date_ordered_to - Date Ordered To
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.filters - query filters
   [
     {
       column_name: 'DocStatus',
       operator: 'EQUAL',
       value: 'CO'
     },
     {
       column_name: 'DateInvoiced',
       operator: 'BETWEEN',
       value: '2020-01-01'
       value_to: '2020-09-01'
     },
     {
       column_name: 'C_DocType_ID',
       operator: 'IN',
       values: [
         1000000,
         1000562
       ]
     }
   ],
   value: condition.value,
   valueTo: condition.value_to,
   values: condition.values,
   operator: condition.operator
   * req.body.columns - query columns
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/list-orders', (req, res) => {
    if (req.body) {
      service.listOrders({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.body.pos_uuid,
        documentNo: req.body.document_no,
        businessPartnerUuid: req.body.business_partner_uuid,
        grandTotal: req.body.grand_total,
        openAmount: req.body.open_amount,
        isPaid: req.body.is_paid,
        isProcessed: req.body.is_processed,
        isAisleSeller: req.body.is_aisle_seller,
        isInvoiced: req.body.is_invoiced,
        dateOrderedFrom: req.body.date_ordered_from,
        dateOrderedTo: req.body.date_ordered_to,
        salesRepresentativeUuid: req.body.sales_representative_uuid,
        tableName: req.body.table_name,
        //  DSL Query
        filters: req.body.filters,
        columns: req.body.columns,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getOrdersList().map(order => {
                return convertOrderFromGRPC(order)
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

  /**
   * POST List Sales Orders Lines
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/list-order-lines', (req, res) => {
    if (req.body) {
      service.listOrderLines({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.body.order_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getOrderLinesList().map(orderLine => {
                return convertOrderLineFromGRPC(orderLine)
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

  /**
   * Get Key Layout
   *
   * req.query.token - user token
   * Body:
   * req.body.key_layout_uuid - Key Layout UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/get-key-layout', (req, res) => {
    if (req.body) {
      service.getKeyLayout({
        token: req.query.token,
        language: req.query.language,
        keyLayoutUuid: req.body.key_layout_uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertKeyLayoutFromGRPC(response)
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

  return posService;
};
