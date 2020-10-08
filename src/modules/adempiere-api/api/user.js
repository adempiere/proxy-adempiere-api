import { Router } from 'express';

export default ({ config, db, service }) => {
  let userApi = Router();

  /**
   * POST login an user
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
        password: req.body.password
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

  //  get Context
  function getContext (context, service) {
    let values = []
    context.forEach((value, key) => {
      values.push({
        key: key,
        value: service.convertValueFromGRPC(value)
      })
    })
    return values
  }

  /**
   * GET  an user menu
   *
   * req.query.token - user token
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/menu', (req, res) => {
    if (req.query) {
      service.getMenu({
        token: req.query.token
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
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/session', (req, res) => {
    if (req.query) {
      service.getSessionInfo({
        token: req.query.token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              id: response.getId(),
              uuid: response.getUuid(),
              name: response.getName(),
              user_info: getUserInfo(response.getUserInfo()),
              role: getRole(response.getRole()),
              processed: response.getProcessed(),
              language: response.getLanguage(),
              country_code: response.getCountryCode(),
              country_name: response.getCountryName(),
              display_sequence: response.getDisplaySequence(),
              currency_iso_code: response.getCurrencyIsoCode(),
              currency_name: response.getCurrencyName(),
              currency_symbol: response.getCurrencySymbol(),
              standard_precision: response.getStandardPrecision(),
              costing_precision: response.getCostingPrecision(),
              default_context: getContext(response.getDefaultContextMap(), service)
            }
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
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/info', (req, res) => {
    if (req.query) {
      service.getUserInfo({
        token: req.query.token
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
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/roles', (req, res) => {
    if (req.query) {
      service.getUserRoles({
        token: req.query.token
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
