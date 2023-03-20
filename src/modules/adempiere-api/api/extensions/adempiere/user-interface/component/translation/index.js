import { Router } from 'express';
import {
  convertTranslationFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

  /**
   * GET Translations
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.uuid - custom query instead a table name based on SQL
   * req.query.id - id reference
   * req.query.uuid - uuid reference
   * Details:
   */
  api.get('/translations', (req, res) => {
    if (req.query) {
      service.listTranslations({
        token: req.headers.authorization,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
        //  Running parameters
        tableName: req.query.table_name,
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
              records: response.getTranslationsList().map(translation => {
                return convertTranslationFromGRPC(translation)
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

  return api;
};
