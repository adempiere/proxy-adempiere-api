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

import {
  getRMAFromGRPC
} from '../pointOfSalesFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/pointOfSales');
  const service = new ServiceApi(config);

  /**
   * GET Open Return Material Authorization
   */
  api.get('/open-rma', (req, res) => {
    if (req.query) {
      service.getOpenRMA({
        token: req.headers.authorization,
        posId: req.query.pos_id,
        sourceOrderId: req.query.source_order_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getRMAFromGRPC(response)
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
   * POST Create Return Material Authorization
   */
  api.post('/', (req, res) => {
    if (req.body) {
      service.createRMA({
        token: req.headers.authorization,
        posId: req.body.pos_id,
        sourceOrderId: req.body.source_order_id,
        salesRepresentativeId: req.body.sales_representative_id,
        isCreateLinesFromOrder: req.body.is_create_lines_from_order
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getRMAFromGRPC(response)
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
   * DELETE Return Material Authorization
   */
  api.delete('/', (req, res) => {
    if (req.query) {
      service.deleteRMA({
        token: req.headers.authorization,
        posId: req.query.pos_id,
        id: req.query.id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * POST Process Return Material Authorization
   */
  api.post('/process-rma', (req, res) => {
    if (req.body) {
      service.processRMA({
        token: req.headers.authorization,
        posId: req.body.pos_id,
        id: req.body.id,
        description: req.body.description,
        documentAction: req.body.document_action
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getRMAFromGRPC(response)
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
