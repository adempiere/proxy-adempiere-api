import { Router } from 'express';
import {
  convertPrivateAccessFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

  /**
   * POST Unlock a Private Access
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   *
   * Details:
   */
  api.post('/unlock-private-access', (req, res) => {
    if (req.body) {
      service.unlockPrivateAccess({
        token: req.headers.authorization,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPrivateAccessFromGRPC(response)
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
   * POST Lock a Private Access
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   *
   * Details:
   */
  api.post('/lock-private-access', (req, res) => {
    if (req.body) {
      service.lockPrivateAccess({
        token: req.headers.authorization,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPrivateAccessFromGRPC(response)
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
   * GET Private Access from Table and record
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.table_name - table name of chat entry
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   *
   * Details:
   */
  api.get('/private-access', (req, res) => {
    if (req.query) {
      service.getPrivateAccess({
        token: req.headers.authorization,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPrivateAccessFromGRPC(response)
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
