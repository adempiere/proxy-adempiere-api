/*************************************************************************************
 * Product: ADempiere gRPC Issue Management Client                                   *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
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
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

import {
  convertPreferenceFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api');
  const service = new ServiceApi(config);

  /**
   * POST Set User Preference
   *
   * req.query.token - user token
   * req.body.container_uuid - Container UUID, usually is a window
   * req.body.column_name - attribute or column name
   * req.body.is_for_current_user  - apply for current user (boolean)
   * req.body.is_for_current_client - apply for current client (boolean)
   * req.body.is_for_current_organization - apply for current organization (boolean)
   * req.body.is_for_current_container - apply for current container (boolean)
   * req.body.value - value for set on preference
   *
   */
  api.post('/set-preference', (req, res) => {
    if (req.body) {
      service.setPreference({
        token: req.headers.authorization,
        containerUuid: req.body.container_uuid,
        columnName: req.body.column_name,
        isForCurrentUser: req.body.is_for_current_user,
        isForCurrentClient: req.body.is_for_current_client,
        isForCurrentOrganization: req.body.is_for_current_organization,
        isForCurrentContainer: req.body.is_for_current_container,
        value: req.body.value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertPreferenceFromGRPC(response)
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
   * DELETE Delete User Preference
   *
   * req.query.token - user token
   * req.query.container_uuid - Container UUID, usually is a window
   * req.query.column_name - attribute or column name
   * req.query.is_for_current_user  - apply for current user (boolean)
   * req.query.is_for_current_client - apply for current client (boolean)
   * req.query.is_for_current_organization - apply for current organization (boolean)
   * req.query.is_for_current_container - apply for current container (boolean)
   *
   */
  api.delete('/delete-preference', (req, res) => {
    if (req.query) {
      service.deletePreference({
        token: req.headers.authorization,
        containerUuid: req.query.container_uuid,
        columnName: req.query.column_name,
        isForCurrentUser: req.query.is_for_current_user,
        isForCurrentClient: req.query.is_for_current_client,
        isForCurrentOrganization: req.query.is_for_current_organization,
        isForCurrentContainer: req.query.is_for_current_container
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
