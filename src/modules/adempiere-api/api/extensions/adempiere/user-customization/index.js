/************************************************************************************
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
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
  getUserFromGRPC,
  getRoleFromGRPC,
  getLevelCustomizationFromGRPC
} from '@adempiere/grpc-api/src/utils/userCustomizationFromGRPC';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userCustomization');
  const service = new ServiceApi(config);

  /**
   * GET List Users
   *
   * @param {string} token - user token
   * @param {number} search_value - value to filter list
   * @param {number} page_size - size of page (customized)
   * @param {string} page_token - token of page (optional for get a specific page)
   */
  api.get('/list-users', (req, res) => {
    if (req.query) {
      service.listUsers({
        token: req.headers.authorization,
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
              records: response.getRecordsList().map(user => {
                return getUserFromGRPC(user);
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

  /**
   * GET List Roles
   *
   * @param {string} token - user token
   * @param {number} search_value - value to filter list
   * @param {number} page_size - size of page (customized)
   * @param {string} page_token - token of page (optional for get a specific page)
   */
  api.get('/list-roles', (req, res) => {
    if (req.query) {
      service.listRoles({
        token: req.headers.authorization,
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
              records: response.getRecordsList().map(role => {
                return getRoleFromGRPC(role);
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      })
    }
  });

  /**
   * GET List Customizations Level
   *
   * @param {string} token - user token
   * @param {number} search_value - value to filter list
   * @param {number} page_size - size of page (customized)
   * @param {string} page_token - token of page (optional for get a specific page)
   */
  api.get('/list-customizations-level', (req, res) => {
    if (req.query) {
      service.listCustomizationsLevel({
        token: req.headers.authorization,
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
              records: response.getRecordsList().map(user => {
                return getLevelCustomizationFromGRPC(user)
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

  return api
}
