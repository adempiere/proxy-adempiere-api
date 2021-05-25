import { Router } from 'express';
import {
  convertChatEntryFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)
  service.initService()

  /**
   * POST Create Chat Entry
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.comments - comments
   *
   * Details:
   */
  api.post('/create-chat-entry', (req, res) => {
    if (req.body) {
      service.createChatEntry({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        comment: req.body.comment
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertChatEntryFromGRPC(response)
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
