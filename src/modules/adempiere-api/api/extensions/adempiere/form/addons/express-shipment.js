/************************************************************************************
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
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

function getSalesOrderFromGRPC (salesOrdertoConvert) {
  if (!salesOrdertoConvert) {
    return undefined;
  }
  return {
    id: salesOrdertoConvert.getId(),
    uuid: salesOrdertoConvert.getUuid(),
    document_no: salesOrdertoConvert.getDocumentNo(),
    date_ordered: salesOrdertoConvert.getDateOrdered()
  };
}

function getShipmentFromGRPC (shipmentToConvert) {
  if (!shipmentToConvert) {
    return undefined;
  }
  return {
    id: shipmentToConvert.getId(),
    uuid: shipmentToConvert.getUuid(),
    document_no: shipmentToConvert.getDocumentNo(),
    date_ordered: shipmentToConvert.getDateOrdered(),
    movement_date: shipmentToConvert.getMovementDate(),
    order_id: shipmentToConvert.getOrderId(),
    order_uuid: shipmentToConvert.getOrderUuid(),
    is_completed: shipmentToConvert.getIsCompleted()
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

function getShipmentLineFromGRPC (shipmentLineToConvert) {
  if (!shipmentLineToConvert) {
    return undefined;
  }

  return {
    id: shipmentLineToConvert.getId(),
    uuid: shipmentLineToConvert.getUuid(),
    order_line_id: shipmentLineToConvert.getOrderLineId(),
    order_Line_uuid: shipmentLineToConvert.getOrderLineUuid(),
    description: shipmentLineToConvert.getDescription(),
    product: getProductFromGRPC(
      shipmentLineToConvert.getProduct()
    ),
    quantity: getDecimalFromGRPC(
      shipmentLineToConvert.getQuantity()
    ),
    line: shipmentLineToConvert.getLine()
  };
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/expressShipment');
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

  api.get('/sales-orders', (req, res) => {
    if (req.query) {
      service.listSalesOrders({
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
              records: response.getRecordsList().map(salesOrder => {
                return getSalesOrderFromGRPC(salesOrder)
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

  api.post('/shipment', (req, res) => {
    service.createShipment({
      token: req.headers.authorization,
      // DSL Query
      orderId: req.body.order_id,
      orderUuid: req.body.order_uuid,
      isCreateLinesFromOrder: req.body.is_create_lines_from_order
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getShipmentFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.delete('/shipment', (req, res) => {
    service.deleteShipment({
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

  api.post('/process-shipment', (req, res) => {
    service.processShipment({
      token: req.headers.authorization,
      // DSL Query
      id: req.body.id,
      uuid: req.body.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getShipmentFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/shipment-line', (req, res) => {
    service.createShipmentLine({
      token: req.headers.authorization,
      // DSL Query
      shipmentId: req.body.shipment_id,
      shipmentUuid: req.body.shipment_uuid,
      description: req.body.description,
      productId: req.body.product_id,
      productUuid: req.body.product_uuid,
      quantity: req.body.quantity,
      isQuantityFromOrderLine: req.body.is_quantity_from_order_line
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getShipmentLineFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/shipment-line', (req, res) => {
    service.listShipmentLines({
      token: req.headers.authorization,
      // DSL Query
      shipmentId: req.query.shipment_id,
      shipmentUuid: req.query.shipment_uuid,
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
            records: response.getRecordsList().map(shipmentLine => {
              return getShipmentLineFromGRPC(shipmentLine);
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

  api.delete('/shipment-line', (req, res) => {
    service.deleteShipmentLine({
      token: req.headers.authorization,
      // DSL Query
      id: req.body.id,
      uuid: req.body.uuid
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

  api.put('/shipment-line', (req, res) => {
    service.updateShipmentLine({
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
          result: getShipmentLineFromGRPC(response)
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
