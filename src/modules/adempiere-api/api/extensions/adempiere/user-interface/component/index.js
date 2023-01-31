/*************************************************************************************
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

import { Router } from 'express';

import {
  getMailTemplateFromGRPC
} from '@adempiere/grpc-api/src/utils/userInterfaceFromGRPC';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userInterface')
  const service = new ServiceApi(config)

  /**
   * POST List Mail Templates
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value to filter
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Details:
   */
  api.post('/list-mail-templates', (req, res) => {
    if (req.query) {
      service.listMailTemplates({
        token: req.query.token,
        language: req.query.language,
        //
        searchValue: req.query.search_value,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(mailTemplate => {
                return getMailTemplateFromGRPC(mailTemplate);
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

  return api;
};
