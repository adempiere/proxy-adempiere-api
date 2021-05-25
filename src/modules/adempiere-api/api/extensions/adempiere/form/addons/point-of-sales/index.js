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

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)
  service.initService()

  /**
   * GET Selling Points
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.user_uuid - User UUID reference
   *
   * Details:
   */
  api.get('/selling-points', (req, res) => {
    if (req.query) {
      service.listPointOfSales({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.query.user_uuid,
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
   * GET Point of Sales
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   *
   * Details:
   */
  api.get('/point-of-sales', (req, res) => {
    if (req.query) {
      service.getPointOfSales({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.query.pos_uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
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
   * GET product price
   *
   * req.query.token - user token
   * req.query.search_value - product search value
   * req.query.upc - product UPC
   * req.query.value - product value
   * req.query.name - product name
   * req.query.price_list_uuid - price list UUID reference
   * req.query.business_partner_uuid - Business partner UUID reference
   * req.query.warehouse_uuid - Warehouse UUID reference
   * req.query.valid_from - Prioce List Valid From
   *
   * Details:
   */
  api.get('/product-price', (req, res) => {
    if (req.query) {
      service.getProductPrice({
        token: req.query.token,
        language: req.query.language,
        searchValue: req.query.search_value,
        upc: req.query.upc,
        value: req.query.value,
        name: req.query.name,
        priceListUuid: req.query.price_list_uuid,
        businessPartnerUuid: req.query.business_partner_uuid,
        warehouseUuid: req.query.warehouse_uuid,
        validFrom: req.query.valid_from,
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
   * GET List product price
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
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/product-prices', (req, res) => {
    if (req.query) {
      service.listProductPrice({
        token: req.query.token,
        language: req.query.language,
        searchValue: req.query.search_value,
        priceListUuid: req.query.price_list_uuid,
        businessPartnerUuid: req.query.business_partner_uuid,
        warehouseUuid: req.query.warehouse_uuid,
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
   * POST Create Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details:
   */
  api.post('/create-order', (req, res) => {
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
   * POST Create Payment
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
   * Details:
   */
  api.post('/create-payment', (req, res) => {
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
   * POST Delete Payment
   *
   * req.query.token - user token
   * req.query.language - user language
   * Body:
   * req.body.payment_uuid - Payment UUID reference
   *
   * Details:
   */
  api.post('/delete-payment', (req, res) => {
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
   * POST Update Sales Order
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
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.post('/update-payment', (req, res) => {
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
   * GET List Payments
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.order_uuid - Order UUID reference
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/payments', (req, res) => {
    if (req.query) {
      service.listPayments({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.query.order_uuid,
        posUuid: req.query.pos_uuid,
        tableName: req.query.table_name,
        //  DSL Query
        filters: req.query.filters,
        columns: req.query.columns,
        //  Custom Query
        query: req.query.query,
        whereClause: req.query.where_clause,
        orderByClause: req.query.order_by_clause,
        limit: req.query.limit,
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
   * POST Delete Sales Order
   *
   * req.query.token - user token
   * req.query.language - user language
   * Body:
   * req.body.order_uuid - Sales Order UUID reference
   *
   * Details:
   */
  api.post('/delete-order', (req, res) => {
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
   * POST Create Sales Order Line
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
   * Details:
   */
  api.post('/create-order-line', (req, res) => {
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
   * POST Delete Sales Order Line
   *
   * req.query.token - user token
   * req.query.language - user language
   * Body:
   * req.body.order_line_uuid - Sales Order Line UUID reference
   *
   * Details:
   */
  api.post('/delete-order-line', (req, res) => {
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
   * POST Update Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details:
   */
  api.post('/update-order', (req, res) => {
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
   * POST Update Sales Order Line
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
   * Details:
   */
  api.post('/update-order-line', (req, res) => {
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
   * POST Validate User PIN
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.pin - User PIN
   *
   * Details:
   */
  api.post('/validate-pin', (req, res) => {
    if (req.body) {
      service.validatePIN({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.body.pos_uuid,
        pin: req.body.pin
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
   * GET Sales Order
   *
   * req.query.token - user token
   * req.query.order_uuid - Order UUID reference
   * req.query.pos_uuid - POS UUID reference
   * req.query.customer_uuid - Customer UUID reference
   * req.query.document_type_uuid - Document Type UUID reference
   * req.query.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details:
   */
  api.get('/order', (req, res) => {
    if (req.query) {
      service.getOrder({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.query.order_uuid
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
   * POST Process Order
   * This request allows process a draft order with payments
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.create_payments - Optional create payments (if is true then hope payments array)
   * req.body.payments
   * [
   * invoice_uuid - Invoice UUID reference
   * bank_uuid - Bank UUID reference
   * reference_no - Reference no
   * description - Description for Payment
   * amount - Payment Amount
   * tender_type_code - Tender Type
   * payment_date - Payment Date (default now)
   * currency_uuid - Currency UUID reference
   * ]
   *
   * Details:
   */
  api.post('/process-order', (req, res) => {
    if (req.body) {
      let payments = []
      if (req.body.payments) {
        payments = req.body.payments
      }
      service.processOrder({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        createPayments: req.body.create_payments,
        payments: payments.map(payment => {
          return {
            invoiceUuid: payment.invoice_uuid,
            bankUuid: payment.bank_uuid,
            referenceNo: payment.reference_no,
            description: payment.description,
            amount: payment.amount,
            tenderTypeCode: payment.tender_type_code,
            paymentDate: payment.payment_date,
            currencyUuid: payment.currency_uuid
          }
        })
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
   * GET Sales Orders
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
   * Details:
   */
  api.get('/orders', (req, res) => {
    if (req.query) {
      service.listOrders({
        token: req.query.token,
        language: req.query.language,
        posUuid: req.query.pos_uuid,
        documentNo: req.query.document_no,
        businessPartnerUuid: req.query.business_partner_uuid,
        grandTotal: req.query.grand_total,
        openAmount: req.query.open_amount,
        isPaid: req.query.is_paid,
        isProcessed: req.query.is_processed,
        isAisleSeller: req.query.is_aisle_seller,
        isInvoiced: req.query.is_invoiced,
        dateOrderedFrom: req.query.date_ordered_from,
        dateOrderedTo: req.query.date_ordered_to,
        salesRepresentativeUuid: req.query.sales_representative_uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_toke
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
   * GET List Sales Orders Lines
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.order_uuid - Order UUID reference
   * Details:
   */
  api.get('/order-lines', (req, res) => {
    if (req.query) {
      service.listOrderLines({
        token: req.query.token,
        language: req.query.language,
        orderUuid: req.query.order_uuid,
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
   * req.query.key_layout_uuid - Key Layout UUID reference
   *
   * Details:
   */
  api.get('/key-layout', (req, res) => {
    if (req.query) {
      service.getKeyLayout({
        token: req.query.token,
        language: req.query.language,
        keyLayoutUuid: req.query.key_layout_uuid
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

  return api;
};
