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
  convertListAvailableWarehouses,
  convertListLocators
} from '../util/convertMaterialManagement';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/materialManagement');
  const service = new ServiceApi(config);

  /**
   * POST List Available Warehouses
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.body.warehouse_id
   * req.body.warehouse_uuid
   */
  api.post('/list-available-warehouses', (req, res) => {
    if (req.body) {
      service.listAvailableWarehouses({
        token: req.query.token,
        language: req.query.language,
        // DSL Query
        searchValue: req.query.search_value,
        warehouseId: req.body.warehouse_id,
        warehouseUuid: req.body.warehouse_uuid,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertListAvailableWarehouses(response)
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
   * POST List Warehouses Locators
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.body.warehouse_id
   * req.body.warehouse_uuid
   */
  api.post('/list-warehouse-locators', (req, res) => {
    if (req.body) {
      service.listLocators({
        token: req.query.token,
        language: req.query.language,
        // DSL Query
        searchValue: req.query.search_value,
        warehouseId: req.body.warehouse_id,
        warehouseUuid: req.body.warehouse_uuid,
        contextAttributes: req.body.context_attributes,
        // Dynamic Validation Query
        fieldUuid: req.body.field_uuid,
        processParameterUuid: req.body.process_parameter_uuid,
        browseFieldUuid: req.body.browse_field_uuid,
        referenceUuid: req.body.reference_uuid,
        columnUuid: req.body.column_uuid,
        tableName: req.body.table_name,
        columnName: req.body.column_name,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertListLocators(response)
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
