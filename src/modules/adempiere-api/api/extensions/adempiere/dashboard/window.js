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
  getWindowChartFromGRPC,
  getWindowMetricsFromGRPC
} from '@adempiere/grpc-api/src/utils/dashboardingFromGRPC';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/dashboarding');
  const service = new ServiceApi(config);

  /**
   * GET Window Charts
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.role_uuid - uuid of current role
   * req.query.role_id - id of current role
   * Details:
   */
  api.get('/charts', (req, res) => {
    service.listWindowCharts({
      token: req.headers.authorization,
      windowId: req.query.window_id,
      windowUuid: req.query.window_uuid,
      tabId: req.query.tab_id,
      tabUuid: req.query.tab_uuid,
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
            records: response.getRecordsList().map(dadshboard => {
              return getWindowChartFromGRPC(dadshboard)
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
   * GET Chart Data
   *
   * req.query.token - user token
   * req.query.uuid - uuid of chart
   * req.query.id - id of chart
   * Details:
   */
  api.post('/metrics', (req, res) => {
    service.getWindowMetrics({
      token: req.headers.authorization,
      uuid: req.body.uuid,
      id: req.body.id,
      tableName: req.body.table_name,
      recordId: req.body.record_id,
      recordUuid: req.body.record_uuid,
      contextAttributes: req.body.context_attributes
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getWindowMetricsFromGRPC(response)
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
}
