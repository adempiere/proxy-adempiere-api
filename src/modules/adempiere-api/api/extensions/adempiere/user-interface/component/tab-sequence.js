/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client                                     *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

import { Router } from 'express';

import { convertEntitiesListFromGRPC } from '../../util/convertData';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userInterface')
  const service = new ServiceApi(config)

  /**
   * POST List Tab Sequences
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.body.tab_uuid - Tab Uuid
   * req.body.context_attributes - custom query instead a table name based on SQL
   * Details:
   */
  api.post('/list-tab-sequences', (req, res) => {
    if (req.body) {
      service.listTabSequences({
        token: req.query.token,
        language: req.query.language,
        //
        tabUuid: req.body.tab_uuid,
        contextAttributes: req.body.context_attributes,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntitiesListFromGRPC(response)
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
   * POST Update Tab Sequences
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.tab_uuid - Tab Uuid
   * req.body.table_name - Table Name
   * req.body.context_attributes - custom query instead a table name based on SQL
   * req.body.entities_list - custom query instead a table name based on SQL
   * Details:
   */
  api.post('/save-tab-sequences', (req, res) => {
    if (req.body) {
      service.saveTabSequences({
        token: req.query.token,
        language: req.query.language,
        //
        tabUuid: req.body.tab_uuid,
        contextAttributes: req.body.context_attributes,
        entitiesList: req.body.entities_list
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntitiesListFromGRPC(response)
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
