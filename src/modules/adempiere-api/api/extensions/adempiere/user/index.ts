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

import {
  getRoleFromGRPC,
  getUserInfoFromGRPC,
  getSessionFromGRPC
} from './securityFromGRPC'

// recursive function for get menu
function getMenu (menu) {
  if (!menu) {
    return undefined;
  }
  return {
    id: menu.getId(),
    uuid: menu.getUuid(),
    parent_uuid: menu.getParentUuid(),
    name: menu.getName(),
    description: menu.getDescription(),
    sequence: menu.getSequence(),
    is_read_only: menu.getIsReadOnly(),
    is_summary: menu.getIsSummary(),
    is_sales_transaction: menu.getIsSOTrx(),
    action: menu.getAction(),
    reference_id: menu.getReferenceId(),
    reference_uuid: menu.getReferenceUuid(),
    childs: menu.getChildsList().map(child => {
      return getMenu(child);
    }),
    is_active: menu.getIsActive()
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/security.js');
  const service = new ServiceApi(config)

  /**
   * POST login an user
   * req.query.language - login language
   *
   * Request body:
   * {
   * "username":"pkarwatka102@divante.pl",
   * "password":"TopSecretPassword"
   * }
   */
  api.post('/login', (req, res) => {
    if (req.body) {
      service.login({
        user: req.body.username,
        password: req.body.password,
        token: req.body.token,
        roleUuid: req.body.role_uuid,
        organizationUuid: req.body.organization_uuid,
        warehouseUuid: req.body.warehouse_uuid,
        language: req.query.language
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

  /**
   * POST logout session
   *
   * req.headers.authorization - user token obtained from the `/api/user/login`
   */
  api.post('/logout', (req, res) => {
    service.logout({
      token: req.headers.authorization
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
  });

  /**
   * POST change role
   *
   * req.body.token - user token obtained from the `/api/user/login`
   * req.body.role - user token obtained from the `/api/user/session`
   * req.body.organization - user token obtained from the `/api/user/session`
   * req.body.warehouse - user token obtained from the `/api/user/session`
   * req.query.language - login language
   */
  api.post('/change-role', (req, res) => {
    service.changeRole({
      token: req.headers.authorization,
      roleUuid: req.body.role,
      organizationUuid: req.body.organization,
      warehouseUuid: req.body.warehouse,
      language: req.query.language
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
  });

  /**
   * GET  an user menu
   *
   * req.headers.authorization - user token
   */
  api.get('/menu', (req, res) => {
    service.getMenu({
      token: req.headers.authorization
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getMenu(response)
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
   * GET Session Info
   *
   * req.headers.authorization - user token
   */
  api.get('/session', (req, res) => {
    service.getSessionInfo({
      token: req.headers.authorization
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getSessionFromGRPC(response)
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
   * GET user info
   *
   * req.headers.authorization - user token
   */
  api.get('/info', (req, res) => {
    service.getUserInfo({
      token: req.headers.authorization
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getUserInfoFromGRPC(response)
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
   * GET list roles
   *
   * req.headers.authorization - user token
   * req.query.language - login language
   */
  api.get('/roles', (req, res) => {
    service.getUserRoles({
      token: req.headers.authorization,
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: response.getRolesList().map(role => {
            return getRoleFromGRPC(role);
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

  api.put('/set-session-attribute', (req, res) => {
    service.setSessionAttribute({
      token: req.headers.authorization,
      language: req.body.language,
      warehouseId: req.body.warehouse_id,
      warehouseUuid: req.body.warehouse_uuid
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
  });

  return api;
};
