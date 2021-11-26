import { Router } from 'express';
import { convertContextValue } from '@adempiere/grpc-api/lib/convertValues';

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

  /**
   * POST login an user
   * req.query.language - login language
   *
   * Request body:
   *
   * {
   * "username":"pkarwatka102@divante.pl",
   * "password":"TopSecretPassword"
   * }
   *
   * Details:
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
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: response.getUuid()
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
   * POST logout session
   *
   * req.body.token - user token obtained from the `/api/user/login`
   * req.query.language - login language
   *
   * Details:
   */
  api.post('/logout', (req, res) => {
    if (req.body) {
      service.logout({
        token: req.body.token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * POST change role
   *
   * req.body.token - user token obtained from the `/api/user/login`
   * req.body.role - user token obtained from the `/api/user/session`
   * req.body.organization - user token obtained from the `/api/user/session`
   * req.body.warehouse - user token obtained from the `/api/user/session`
   * req.query.language - login language
   *
   * Details:
   */
  api.post('/change-role', (req, res) => {
    if (req.body) {
      service.changeRole({
        token: req.query.token,
        language: req.query.language,
        role: req.body.role,
        organization: req.body.organization,
        warehouse: req.body.warehouse
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: getSession(response)
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

  //  recursive function for get menu
  function getMenu (menu) {
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
      reference_uuid: menu.getReferenceUuid(),
      childs: menu.getChildsList().map(child => {
        return getMenu(child)
      }),
      is_active: menu.getIsActive()
    }
  }

  //  get user info
  function getUserInfo (userInfo) {
    return {
      id: userInfo.getId(),
      uuid: userInfo.getUuid(),
      name: userInfo.getName(),
      description: userInfo.getDescription(),
      comments: userInfo.getComments(),
      image: userInfo.getImage()
    }
  }

  //  get Role
  function getRole (role) {
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
    }
  }

  //  Convert session
  function getSession (session) {
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
    }
  }

  //  get Context
  function getContext (context) {
    let values = []
    context.forEach((value, key) => {
      values.push({
        key: key,
        value: convertContextValue(value)
      })
    })
    return values
  }

  /**
   * GET  an user menu
   *
   * req.query.token - user token
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/menu', (req, res) => {
    if (req.query) {
      service.getMenu({
        token: req.query.token,
        language: req.query.language
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: getMenu(response)
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
   * GET  an user menu
   *
   * req.query.token - user token
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/session', (req, res) => {
    if (req.query) {
      service.getSessionInfo({
        token: req.query.token,
        language: req.query.language
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: getSession(response)
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
   * GET  an user menu
   *
   * req.query.token - user token
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/info', (req, res) => {
    if (req.query) {
      service.getUserInfo({
        token: req.query.token,
        language: req.query.language
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: getUserInfo(response)
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
   * GET  an user menu
   *
   * req.query.token - user token
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/roles', (req, res) => {
    if (req.query) {
      service.getUserRoles({
        token: req.query.token,
        language: req.query.language
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: response.getRolesList().map(role => {
              return getRole(role)
            })
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
