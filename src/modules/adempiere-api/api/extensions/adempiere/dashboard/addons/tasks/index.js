import { Router } from 'express';
import {
  convertPendingDocumentFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)
  service.initService()

  /**
   * GET Pending Documents
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.user_uuid - uuid of current user
   * req.query.user_id - id of current user
   * req.query.role_uuid - uuid of current role
   * req.query.role_id - id of current role
   * Details:
   */
  api.get('/pending-documents', (req, res) => {
    if (req.query) {
      service.listPendingDocuments({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.query.user_uuid,
        userId: req.query.user_id,
        roleUuid: req.query.role_uuid,
        roleId: req.query.role_id,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getPendingDocumentsList().map(pendingDocument => {
                return convertPendingDocumentFromGRPC(pendingDocument)
              })
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

  return api
}
