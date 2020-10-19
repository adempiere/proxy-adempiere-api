import { Router } from 'express';
import { convertContextValue } from '@adempiere/grpc-api/lib/convertValues';

export default ({ config, db, service }) => {
  let userApi = Router();

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
   * ```bash
   * curl 'https://your-domain.example.com/vsbridge/user/login' -H 'content-type: application/json' -H 'accept: application/json' --data-binary '"username":"pkarwatka102@divante.pl","password":"TopSecretPassword}'
   * ```
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#post-vsbridgeuserlogin
   */
  userApi.post('/login', (req, res) => {
    if (req.body) {
      service.login({
        user: req.body.username,
        password: req.body.password,
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserme
   */
  userApi.post('/logout', (req, res) => {
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserme
   */
  userApi.post('/change-role', (req, res) => {
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
      is_personal_access: role.getIsPersonalAccess()
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/menu', (req, res) => {
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/session', (req, res) => {
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/info', (req, res) => {
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/roles', (req, res) => {
    if (req.query) {
      service.getUserRoles({
        token: req.query.token,
        language: req.query.language
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: response.getRolesList().map(role => {
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
                is_personal_access: role.getIsPersonalAccess()
              }
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

  return userApi;
};
