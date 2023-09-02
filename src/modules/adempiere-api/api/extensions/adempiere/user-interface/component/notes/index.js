import { Router } from 'express';
import {
  convertChatEntryFromGRPC
} from '../../.././grpc-api/lib/convertBusinessData';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('../../.././grpc-api')
  let service = new ServiceApi(config)

  /**
   * POST Create Chat Entry
   *
   * req.query.token - user token
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
        token: req.headers.authorization,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        comment: req.body.comment
      }, (err, response) => {
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
