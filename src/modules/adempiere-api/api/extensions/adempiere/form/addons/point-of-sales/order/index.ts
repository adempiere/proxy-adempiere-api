/************************************************************************************
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                  *
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

import { getOrderFromGRPC } from '../pointOfSalesFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/pointOfSales');
  const service = new ServiceApi(config)

  /**
   * GET Sales Order
   *
   * req.headers.authorization - user token
   * req.query.order_uuid - Order UUID reference
   * req.query.pos_uuid - POS UUID reference
   * req.query.customer_uuid - Customer UUID reference
   * req.query.document_type_uuid - Document Type UUID reference
   * req.query.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details:
   */
  api.get('/', (req, res) => {
    if (req.query) {
      service.getOrder({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        orderUuid: req.query.order_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getOrderFromGRPC(response)
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

  /**
   * POST Copy Order
   *
   * req.headers.authorization - user token
   * req.body.pos_id - point of sales terminal
   * req.body.source_order_id - source order to copy
   *
   * Details:
   */
  api.post('/copy-order', (req, res) => {
    if (req.query) {
      service.copyOrder({
        token: req.headers.authorization,
        posId: req.body.pos_id,
        sourceOrderId: req.body.source_order_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getOrderFromGRPC(response)
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

  return api;
};
