import { Router } from 'express';
import {
  convertWorkflowDefinitionFromGRPC,
  convertWorkflowActivityFromGRPC,
  convertDocumentAction,
  convertDocumentStatus
} from '@adempiere/grpc-api/lib/convertWorkflow';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/workflow')
  const service = new ServiceApi(config)

  /**
   * GET Workflow
   *
   * req.query.token - user token
   * req.query.id - id of workflow
   * req.query.uuid - uuid of workflow
   * req.query.language - login language
   * Details:
   */
  api.get('/workflow', (req, res) => {
    if (req.query) {
      service.getWorkflow({
        token: req.query.token,
        language: req.query.language,
        // identifiers
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertWorkflowDefinitionFromGRPC(response)
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
   * GET Workflows
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.table_name - table name (Mandatory for get translation)
   * Details:
   */
  api.get('/workflows', (req, res) => {
    if (req.query) {
      service.listWorkflows({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
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
   * GET Workflow Activities
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.user_uuid - User UUID (Mandatory for get activities)
   * Details:
   */
  api.get('/workflow-activities', (req, res) => {
    if (req.query) {
      service.listWorkflowActivities({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.query.user_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getActivitiesList().map(workflowActivity => {
                return convertWorkflowActivityFromGRPC(workflowActivity)
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
   * GET Document Actions
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   * req.query.document_status - Current Status
   * req.query.document_action - Optional Action
   * Details:
   */
  api.get('/document-actions', (req, res) => {
    if (req.query) {
      service.listDocumentActions({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid,
        documentStatus: req.query.document_status,
        documentAction: req.query.document_action,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
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
   * GET Document Statuses
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   * req.query.document_status - Current Status
   * Details:
   */
  api.get('/document-statuses', (req, res) => {
    if (req.query) {
      service.listDocumentStatuses({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid,
        documentStatus: req.query.document_status,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
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

  return api;
};
