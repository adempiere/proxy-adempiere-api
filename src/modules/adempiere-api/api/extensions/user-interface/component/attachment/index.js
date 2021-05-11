import { Router } from 'express';
import {
  convertAttachmentFromGRPC,
  convertResourceReferenceFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)
  service.initService()

  /**
   * GET Entity Attachment Information
   *
   * req.query.token - user token
   * req.query.id - id of entity
   * req.query.uuid - uuid of entity
   * req.query.table_name - table name of entity
   * req.query.language - login language
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/attachment', (req, res) => {
    if (req.query) {
      service.getAttachment({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertAttachmentFromGRPC(response)
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
   * GET Resource Reference Information
   *
   * req.query.token - user token
   * req.query.image_id - id of image
   * req.query.language - login language
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/resource-reference', (req, res) => {
    if (req.query) {
      service.getResourceReference({
        token: req.query.token,
        language: req.query.language,
        imageId: req.query.image_id
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceReferenceFromGRPC(response)
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
