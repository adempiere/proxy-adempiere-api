import { Router } from 'express';
import {
  convertWorkflowDefinitionFromGRPC,
  convertDocumentAction,
  convertDocumentStatus
} from '@adempiere/grpc-api/lib/convertBusinessData';
export default ({ config, db, service }) => {
  let workflow = Router();

  /**
   * POST List Workflow
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  workflow.post('/list-workflow', (req, res) => {
    if (req.body) {
      service.listWorkflows({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
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
              records: response.getWorkflowsList().map(workflow => {
                return convertWorkflowDefinitionFromGRPC(workflow)
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
   * POST List Document Actions
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.document_status - Current Status
   * req.body.document_action - Optional Action
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  workflow.post('/list-document-actions', (req, res) => {
    if (req.body) {
      service.listDocumentActions({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        documentStatus: req.body.document_status,
        documentAction: req.body.document_action,
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
              default_document_action: convertDocumentAction(response.getDefaultDocumentAction()),
              records: response.getDocumentActionsList().map(documentAction => {
                return convertDocumentAction(documentAction)
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
   * POST List Document Statuses
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.document_status - Current Status
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  workflow.post('/list-document-statuses', (req, res) => {
    if (req.body) {
      service.listDocumentStatuses({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        documentStatus: req.body.document_status,
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
              records: response.getDocumentStatusesList().map(documentStatus => {
                return convertDocumentStatus(documentStatus)
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

  return workflow;
};
