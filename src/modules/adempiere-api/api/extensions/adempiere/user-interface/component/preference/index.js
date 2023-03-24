import { Router } from 'express';
import {
  convertPreferenceFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

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
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPreferenceFromGRPC(response)
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
   * POST Delete User Preference
   *
   * req.query.token - user token
   * req.body.container_uuid - Container UUID, usually is a window
   * req.body.column_name - attribute or column name
   * req.body.is_for_current_user  - apply for current user (boolean)
   * req.body.is_for_current_client - apply for current client (boolean)
   * req.body.is_for_current_organization - apply for current organization (boolean)
   * req.body.is_for_current_container - apply for current container (boolean)
   *
   */
  api.post('/delete-preference', (req, res) => {
    if (req.body) {
      service.deletePreference({
        token: req.headers.authorization,
        containerUuid: req.body.container_uuid,
        columnName: req.body.column_name,
        isForCurrentUser: req.body.is_for_current_user,
        isForCurrentClient: req.body.is_for_current_client,
        isForCurrentOrganization: req.body.is_for_current_organization,
        isForCurrentContainer: req.body.is_for_current_container
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

  return api;
};
