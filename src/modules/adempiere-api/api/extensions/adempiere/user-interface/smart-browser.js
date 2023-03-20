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

import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api');
  const service = new ServiceApi(config);

  /**
   * GET Browser Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.body.uuid - browser uuid
   * req.body.filters - query filters
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   *
   * Details:
   */
  api.post('/browser-items', (req, res) => {
    service.listBrowserItems({
      token: req.headers.authorization,
      language: req.query.language,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token,
      // Running parameters
      uuid: req.body.uuid,
      tableName: req.body.table_name,
      // DSL Query
      filters: req.body.filters,
      // Custom Query
      contextAttributes: req.body.context_attributes
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(entity => {
              return convertEntityFromGRPC(entity)
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

  /**
   * POST Browser Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - browser id
   * req.body.record_id - record id
   * req.body.attributes - attributes changes
   *
   * Details:
   */
  api.post('/update-browser-entity', (req, res) => {
    service.updateBrowserEntity({
      token: req.headers.authorization,
      language: req.query.language,
      id: req.body.id,
      uuid: req.body.uuid,
      recordId: req.body.record_id,
      attributes: req.body.attributes
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: convertEntityFromGRPC(response)
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
