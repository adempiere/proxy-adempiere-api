import { Router } from 'express';
import {
  convertRecordAccessFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

  /**
   * GET Entity Record Access
   *
   * req.query.token - user token
   * req.query.id - id of entity
   * req.query.uuid - uuid of entity
   * req.query.table_name - table name of entity
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/record-access', (req, res) => {
    if (req.query) {
      service.getRecordAccess({
        token: req.headers.authorization,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertRecordAccessFromGRPC(response)
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
   * POST Set Record Access
   *
   * req.query.token - user token
   * req.body.id - id of entity
   * req.body.uuid - uuid of entity
   * req.body.table_name - table name of entity
   * req.body.record_accesses - list of access by role
   * record_accesses: [{
   *  role_id,
   *  role_uuid,
   *  role_name,
   *  is_active,
   *  is_exclude,
   *  is_read_only,
   *  is_dependent_entities
   * }]
   * req.query.language - login language
   *
   */
  api.post('/set-record-access', (req, res) => {
    if (req.body) {
      //  Validate record access
      let recordAccesses = []
      if (req.body.record_accesses) {
        req.body.record_accesses.map(accessToSet => {
          recordAccesses.push({
            roleId: accessToSet.role_id,
            roleUuid: accessToSet.role_uuid,
            roleName: accessToSet.role_name,
            isActive: accessToSet.is_active,
            isExclude: accessToSet.is_exclude,
            isReadOnly: accessToSet.is_read_only,
            isDependentEntities: accessToSet.is_dependent_entities
          })
        })
      }
      service.setRecordAccess({
        token: req.headers.authorization,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        tableName: req.body.table_name,
        recordAccesses: recordAccesses
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertRecordAccessFromGRPC(response)
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
