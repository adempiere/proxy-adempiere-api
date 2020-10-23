import { Router } from 'express';
import {
  convertPointOfSalesFromGRPC
} from '@adempiere/grpc-api/lib/convertPointOfSales';

export default ({ config, db, service }) => {
  let posService = Router();

  /**
   * List Point of Sales
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.body.user_uuid - User UUID reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  posService.post('/list-point-of-sales', (req, res) => {
    if (req.body) {
      service.listPointOfSales({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.body.user_uuid,
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
              records: response.getSellingPointsList().map(pos => {
                return convertPointOfSalesFromGRPC(pos)
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

  return posService;
};
