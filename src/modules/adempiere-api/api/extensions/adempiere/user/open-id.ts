/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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

// get user info
function getServiceFromGRPC (serviceToConvert) {
  if (!serviceToConvert) {
    return undefined;
  }
  return {
    id: serviceToConvert.getId(),
    display_name: serviceToConvert.getDisplayName(),
    authorization_uri: serviceToConvert.getAuthorizationUri()
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('.././grpc-api/services/security.js');
  const service = new ServiceApi(config)

  /**
   * GET list services
   *
   * req.headers.authorization - user token
   * req.query.language - login language
   */
  api.get('/services', (req, res) => {
    service.getServices({}, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: response.getServicesList().map(service => {
            return getServiceFromGRPC(service);
          })
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
   * POST login an user
   */
  api.post('/login', (req, res) => {
    if (req.body) {
      service.runLoginOpenID({
        codeParameter: req.body.code_parameter,
        stateParameter: req.body.state_parameter,
        language: req.body.language,
        clientVersion: req.body.client_version
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getToken()
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
