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

function getWarehouseFromGRPC (warehouseToConvert) {
  if (!warehouseToConvert) {
    return undefined;
  }
  return {
    id: warehouseToConvert.getId(),
    uuid: warehouseToConvert.getUuid(),
    value: warehouseToConvert.getValue(),
    name: warehouseToConvert.getName(),
    description: warehouseToConvert.getDescription()
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

function getMovementFromGRPC (movementToConvert) {
  if (!movementToConvert) {
    return undefined;
  }
  return {
    id: movementToConvert.getId(),
    uuid: movementToConvert.getUuid(),
    document_no: movementToConvert.getDocumentNo(),
    movement_date: movementToConvert.getMovementDate(),
    description: movementToConvert.getDescription(),
    is_completed: movementToConvert.getIsCompleted()
  };
}

function getMovementLineFromGRPC (movementLineToConvert) {
  if (!movementLineToConvert) {
    return undefined;
  }

  return {
    id: movementLineToConvert.getId(),
    uuid: movementLineToConvert.getUuid(),
    warehouse_id: movementLineToConvert.getWarehouseId(),
    warehouse_uuid: movementLineToConvert.getWarehouseUuid(),
    warehouse_to_id: movementLineToConvert.getWarehouseToId(),
    warehouse_to_uuid: movementLineToConvert.getWarehouseToUuid(),
    description: movementLineToConvert.getDescription(),
    product: getProductFromGRPC(
      movementLineToConvert.getProduct()
    ),
    quantity: getDecimalFromGRPC(
      movementLineToConvert.getQuantity()
    ),
    line: movementLineToConvert.getLine()
  };
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/expressMovement');
  const service = new ServiceApi(config);

  api.get('/warehouses', (req, res) => {
    if (req.query) {
      service.listWarehouses({
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
              records: response.getRecordsList().map(warehouse => {
                return getWarehouseFromGRPC(warehouse);
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

  api.post('/movement', (req, res) => {
    service.createReceipt({
      token: req.headers.authorization
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getMovementFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.delete('/movement', (req, res) => {
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

  api.post('/process-movement', (req, res) => {
    service.processReceipt({
      token: req.headers.authorization,
      // DSL Query
      id: req.body.id,
      uuid: req.body.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getMovementFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/movement-line', (req, res) => {
    service.createMovementLine({
      token: req.headers.authorization,
      // DSL Query
      receiptId: req.body.receipt_id,
      receiptUuid: req.body.receipt_uuid,
      warehouseId: req.body.warehouse_id,
      warehouseUuid: req.body.warehouse_uuid,
      warehouseToId: req.body.warehouse_to_id,
      warehouseToUuid: req.body.warehouse_to_uuid,
      description: req.body.description,
      productId: req.body.product_id,
      productUuid: req.body.product_uuid,
      quantity: req.body.quantity
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getMovementLineFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/movement-lines', (req, res) => {
    service.listMovementLines({
      token: req.headers.authorization,
      // DSL Query
      movementId: req.query.movement_id,
      movementUuid: req.query.movement_uuid,
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
              return getMovementLineFromGRPC(receiptLine);
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

  api.delete('/movement-line', (req, res) => {
    service.deleteMovementLine({
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

  api.put('/receipt-line', (req, res) => {
    service.updateMovementLine({
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
          result: getMovementLineFromGRPC(response)
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
