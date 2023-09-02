/************************************************************************************
 * Copyright (C) 2018-2022 E.R.P. Consultores y Asociados, C.A.                     *
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

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('./grpc-api/services/recordManagement');
  const service = new ServiceApi(config);

  /**
   * PUT Workflow
   *
   * req.query.token - user token
   * req.body.id - id of workflow
   * req.body.uuid - uuid of workflow
   * Details:
   */
  api.put('/toggle-is-active-records', (req, res) => {
    if (!req.body) {
      res.json({
        code: 400,
        result: 'Without Body'
      });
      return;
    }
    service.toggleIsActiveRecords({
      token: req.headers.authorization,
      // identifiers
      tableName: req.body.table_name,
      recordId: req.body.record_id,
      recordIUuid: req.body.record_uuid,
      recordsIdsList: req.body.records_ids,
      recordsUuidsList: req.body.records_uuids
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            message: response.getMessage(),
            total_changes: response.getTotalChanges()
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

  return api;
};
