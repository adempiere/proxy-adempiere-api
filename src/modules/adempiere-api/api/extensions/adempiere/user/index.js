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

/**
 * convert the value obtained from gRPC according to the type of value
 * @param {object} valueToConvert
 * @returns {mixed}
 */
function convertContextValue (valueToConvert) {
  if (valueToConvert === undefined || valueToConvert === null) {
    return undefined;
  }
  const { ValueType } = require('@adempiere/grpc-api/src/grpc/proto/security_pb.js');

  let returnValue;
  switch (valueToConvert.getValueType()) {
    // data type Null or undefined
    default:
    case ValueType.NULL:
      returnValue = undefined;
      break;
    // data type Number (integer)
    case ValueType.INTEGER:
      returnValue = valueToConvert.getIntValue();
      break;
    // data type Number (integer)
    case ValueType.LONG:
      returnValue = valueToConvert.getLongValue();
      break;
    // data type Number (float)
    case ValueType.DOUBLE:
      returnValue = valueToConvert.getDoubleValue();
      break;
    // data type Boolean
    case ValueType.BOOLEAN:
      returnValue = valueToConvert.getBooleanValue();
      break;
    // data type String
    case ValueType.STRING:
      returnValue = valueToConvert.getStringValue();
      break;
    // data type Date
    case ValueType.DATE:
      returnValue = new Date(valueToConvert.getLongValue());
      break;
  }
  return returnValue;
}

// get Context
function getContext (context) {
  const values = []
  if (!context) {
    return values;
  }
  context.forEach((value, key) => {
    values.push({
      key: key,
      value: convertContextValue(value)
    });
  });
  return values;
}

// get user info
function getUserInfo (userInfo) {
  if (!userInfo) {
    return undefined;
  }
  return {
    id: userInfo.getId(),
    uuid: userInfo.getUuid(),
    name: userInfo.getName(),
    description: userInfo.getDescription(),
    comments: userInfo.getComments(),
    image: userInfo.getImage(),
    connection_timeout: userInfo.getConnectionTimeout()
  };
}

// get Role
function getRole (role) {
  if (!role) {
    return undefined;
  }
  return {
    id: role.getId(),
    uuid: role.getUuid(),
    name: role.getName(),
    description: role.getDescription(),
    client_id: role.getClientId(),
    client_name: role.getClientName(),
    is_can_report: role.getIsCanReport(),
    is_can_export: role.getIsCanExport(),
    is_personal_lock: role.getIsPersonalLock(),
    is_personal_access: role.getIsPersonalAccess(),
    is_allow_info_account: role.getIsAllowInfoAccount(),
    is_allow_info_business_partner: role.getIsAllowInfoBusinessPartner(),
    is_allow_info_in_out: role.getIsAllowInfoInOut(),
    is_allow_info_order: role.getIsAllowInfoOrder(),
    is_allow_info_product: role.getIsAllowInfoProduct(),
    is_allow_info_schedule: role.getIsAllowInfoSchedule(),
    is_allow_info_mrp: role.getIsAllowInfoMrp(),
    is_allow_html_view: role.getIsAllowHtmlView(),
    is_allow_info_asset: role.getIsAllowInfoAsset(),
    is_allow_info_cash_journal: role.getIsAllowInfoCashJournal(),
    is_allow_info_invoice: role.getIsAllowInfoInvoice(),
    is_allow_info_payment: role.getIsAllowInfoPayment(),
    is_allow_info_resource: role.getIsAllowInfoResource(),
    is_allow_info_crp: role.getIsAllowInfoCrp(),
    is_allow_xls_view: role.getIsAllowXlsView()
  };
}

// Convert session
function getSession (session) {
  if (!session) {
    return undefined;
  }
  return {
    id: session.getId(),
    uuid: session.getUuid(),
    name: session.getName(),
    user_info: getUserInfo(session.getUserInfo()),
    role: getRole(session.getRole()),
    processed: session.getProcessed(),
    language: session.getLanguage(),
    country_id: session.getCountryId(),
    country_code: session.getCountryCode(),
    country_name: session.getCountryName(),
    display_sequence: session.getDisplaySequence(),
    currency_iso_code: session.getCurrencyIsoCode(),
    currency_name: session.getCurrencyName(),
    currency_symbol: session.getCurrencySymbol(),
    standard_precision: session.getStandardPrecision(),
    costing_precision: session.getCostingPrecision(),
    default_context: getContext(session.getDefaultContextMap())
  };
}

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

module.exports = ({ config }) => {
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
          result: getSession(response)
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
          result: getUserInfo(response)
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
            return getRole(role)
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
