/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
 * This program is free software: you can redistribute it and/or modify             *
 * it under the terms of the GNU General Public License as published by             *
 * the Free Software Foundation, either version 2 of the License, or                *
 * (at your option) any later version.                                              *
 * This program is distributed in the hope that it will be useful,                  *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
 * GNU General Public License for more details.                                     *
 * You should have received a copy of the GNU General Public License                *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

import { Router } from 'express';
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

import { getDecimalFromGRPC } from '@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js';

function getBusinessPartnerFromGRPC (businessPartnerToConvert) {
  if (!businessPartnerToConvert) {
    return undefined;
  }
  return {
    id: businessPartnerToConvert.getId(),
    uuid: businessPartnerToConvert.getUuid(),
    value: businessPartnerToConvert.getValue(),
    tax_id: businessPartnerToConvert.getTaxId(),
    name: businessPartnerToConvert.getName(),
    description: businessPartnerToConvert.getDescription()
  };
}

function getPurchaseOrderFromGRPC (purchaseOrdertoConvert) {
  if (!purchaseOrdertoConvert) {
    return undefined;
  }
  return {
    id: purchaseOrdertoConvert.getId(),
    uuid: purchaseOrdertoConvert.getUuid(),
    document_no: purchaseOrdertoConvert.getDocumentNo(),
    date_ordered: purchaseOrdertoConvert.getDateOrdered()
  };
}

function getReceiptFromGRPC (receiptToConvert) {
  if (!receiptToConvert) {
    return undefined;
  }
  return {
    id: receiptToConvert.getId(),
    uuid: receiptToConvert.getUuid(),
    document_no: receiptToConvert.getDocumentNo(),
    date_ordered: receiptToConvert.getDateOrdered(),
    movement_date: receiptToConvert.getMovementDate(),
    order_id: receiptToConvert.getOrderId(),
    order_uuid: receiptToConvert.getOrderUuid(),
    is_completed: receiptToConvert.getIsCompleted()
  };
}

function getProductFromGRPC (productToConvert) {
  if (!productToConvert) {
    return undefined;
  }
  return {
    id: productToConvert.getId(),
    uuid: productToConvert.getUuid(),
    upc: productToConvert.getUpc(),
    sku: productToConvert.getSku(),
    value: productToConvert.getValue(),
    name: productToConvert.getName()
  };
}

function getReceiptLineFromGRPC (receiptLineToConvert) {
  if (!receiptLineToConvert) {
    return undefined;
  }

  return {
    id: receiptLineToConvert.getId(),
    uuid: receiptLineToConvert.getUuid(),
    order_line_id: receiptLineToConvert.getOrderLineId(),
    order_Line_uuid: receiptLineToConvert.getOrderLineUuid(),
    description: receiptLineToConvert.getDescription(),
    product: getProductFromGRPC(
      receiptLineToConvert.getProduct()
    ),
    quantity: getDecimalFromGRPC(
      receiptLineToConvert.getQuantity()
    ),
    line: receiptLineToConvert.getLine()
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/expressReceipt');
  const service = new ServiceApi(config);

  api.get('/business-partners', (req, res) => {
    if (req.query) {
      service.listBusinessPartners({
        token: req.headers.authorization,
        // DSL Query
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(businessPartner => {
                return getBusinessPartnerFromGRPC(businessPartner);
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  api.get('/purchase-orders', (req, res) => {
    if (req.query) {
      service.listPurchaseOrders({
        token: req.headers.authorization,
        // DSL Query
        businessPartnerId: req.query.business_partner_id,
        businessPartnerUuid: req.query.business_partner_uuid,
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(purchaseOrder => {
                return getPurchaseOrderFromGRPC(purchaseOrder);
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  api.get('/product', (req, res) => {
    service.listProducts({
      token: req.headers.authorization,
      //  DSL Query
      orderId: req.query.order_id,
      orderUuid: req.query.order_uuid,
      searchValue: req.query.search_value,
      upc: req.query.id,
      sku: req.query.sku,
      value: req.query.value,
      name: req.query.name,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(product => {
              return getProductFromGRPC(product);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/receipt', (req, res) => {
    service.createReceipt({
      token: req.headers.authorization,
      // DSL Query
      orderId: req.body.order_id,
      orderUuid: req.body.order_uuid,
      isCreateLinesFromOrder: req.body.is_create_lines_from_order
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getReceiptFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.delete('/receipt', (req, res) => {
    service.deleteReceipt({
      token: req.headers.authorization,
      // DSL Query
      id: req.query.id,
      uuid: req.query.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: 'ok'
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/process-receipt', (req, res) => {
    service.processReceipt({
      token: req.headers.authorization,
      // DSL Query
      id: req.body.id,
      uuid: req.body.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getReceiptFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/receipt-line', (req, res) => {
    service.createReceiptLine({
      token: req.headers.authorization,
      // DSL Query
      receiptId: req.body.receipt_id,
      receiptUuid: req.body.receipt_uuid,
      description: req.body.description,
      productId: req.body.product_id,
      productUuid: req.body.product_uuid,
      quantity: req.body.quantity,
      isQuantityFromOrderLine: req.body.is_quantity_from_order_line
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getReceiptLineFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/receipt-line', (req, res) => {
    service.listReceiptLines({
      token: req.headers.authorization,
      // DSL Query
      receiptId: req.query.receipt_id,
      receiptUuid: req.query.receipt_uuid,
      searchValue: req.query.searchValue,
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(receiptLine => {
              return getReceiptLineFromGRPC(receiptLine);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.delete('/receipt-line', (req, res) => {
    service.deleteReceiptLine({
      token: req.headers.authorization,
      // DSL Query
      id: req.query.id,
      uuid: req.query.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: 'ok'
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.put('/receipt-line', (req, res) => {
    service.updateReceiptLine({
      token: req.headers.authorization,
      // DSL Query
      id: req.body.id,
      uuid: req.body.uuid,
      description: req.body.description,
      quantity: req.body.quantity
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getReceiptLineFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  return api;
};
