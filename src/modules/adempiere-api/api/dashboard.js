import { Router } from 'express';
import {
  convertDashboardFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
import {
  convertFavoriteFromGRPC,
  convertPendingDocumentFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
export default ({ config, db, service }) => {
  let dashboardService = Router();

  /**
   * POST List Dashboards
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.role_uuid - uuid of current role
   * req.body.role_id - id of current role
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  dashboardService.post('/list-dashboards', (req, res) => {
    if (req.body) {
      service.listDashboards({
        token: req.query.token,
        language: req.query.language,
        roleUuid: req.body.role_uuid,
        roleId: req.body.role_id,
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
              records: response.getDashboardsList().map(dadshboard => {
                return convertDashboardFromGRPC(dadshboard)
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

  /**
   * POST List Favorites
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.user_uuid - uuid of current user
   * req.body.user_id - id of current user
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  dashboardService.post('/list-favorites', (req, res) => {
    if (req.body) {
      service.listFavorites({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.body.user_uuid,
        userId: req.body.user_id,
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
              records: response.getFavoritesList().map(favorite => {
                return convertFavoriteFromGRPC(favorite)
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

  /**
   * POST List Pending Documents
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.user_uuid - uuid of current user
   * req.body.user_id - id of current user
   * req.body.role_uuid - uuid of current role
   * req.body.role_id - id of current role
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  dashboardService.post('/list-pending-documents', (req, res) => {
    if (req.body) {
      service.listPendingDocuments({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.body.user_uuid,
        userId: req.body.user_id,
        roleUuid: req.body.role_uuid,
        roleId: req.body.role_id,
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

  return dashboardService;
};
