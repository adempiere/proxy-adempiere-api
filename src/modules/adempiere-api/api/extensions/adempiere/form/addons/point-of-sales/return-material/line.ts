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

import { getRMALineFromGRPC } from '../pointOfSalesFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('../../../.././grpc-api/services/pointOfSales');
  const service = new ServiceApi(config);

  /**
   * GET List Return Material Authorization
   */
  api.get('/list', (req, res) => {
    if (req.query) {
      service.listRMALines({
        token: req.headers.authorization,
        posId: req.query.pos_id,
        rmaId: req.query.rma_id,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              records: response.getRmaLinesList().map(rmaLine => {
                return getRMALineFromGRPC(rmaLine);
              }),
              next_page_token: response.getNextPageToken()
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

  /**
   * POST Create Return Material Authorization
   */
  api.post('/', (req, res) => {
    if (req.body) {
      service.createRMALine({
        token: req.headers.authorization,
        posId: req.body.pos_id,
        rmaId: req.body.rma_id,
        sourceOrderLineId: req.body.source_order_line_id,
        description: req.body.description,
        quantity: req.body.quantity
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getRMALineFromGRPC(response)
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
   * PUT Update Return Material Authorization Line
   */
  api.put('/', (req, res) => {
    if (req.body) {
      service.updateRMALine({
        token: req.headers.authorization,
        posId: req.body.pos_id,
        id: req.body.id,
        description: req.body.description,
        quantity: req.body.quantity
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getRMALineFromGRPC(response)
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
   * DELETE Remove Return Material Authorization
   */
  api.delete('/', (req, res) => {
    if (req.query) {
      service.deleteRMALine({
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

  return api;
};
