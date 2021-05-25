import { Router } from 'express';
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)
  service.initService()

  /**
   * GET Browser Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.uuid - browser uuid
   * req.query.parameters - parameters of browser
   * req.query.filters - query filters
   * req.query.columns - query columns
   * req.query.table_name - table name (Mandatory if is not a query)
   * req.query.query - custom query instead a table name based on SQL
   * req.query.where_clause - where clause of search based on SQL
   * req.query.order_by_clause - order by clause based on SQL
   * req.query.limit - records limit
   *
   * Details:
   */
  api.get('/browser-items', (req, res) => {
    if (req.query) {
      service.listBrowserItems({
        token: req.query.token,
        language: req.query.language,
        //  Running parameters
        uuid: req.query.uuid,
        parameters: req.query.parameters,
        tableName: req.query.table_name,
        //  DSL Query
        filters: req.query.filters,
        columns: req.query.columns,
        //  Custom Query
        query: req.query.query,
        whereClause: req.query.where_clause,
        orderByClause: req.query.order_by_clause,
        limit: req.query.limit,
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
              records: response.getRecordsList().map(entity => {
                return convertEntityFromGRPC(entity)
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
