/************************************************************************************
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
 * This program is free software: you can redistribute it and/or modify             *
 * it under the terms of the GNU General Public License as published by             *
 * the Free Software Foundation, either version 2 of the License, or                *
 * (at your option) any later version.                                              *
 * This program is distributed in the hope that it will be useful,                  *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
 * GNU General Public License for more details.                                     *
 * You should have received a copy of the GNU General Public License                *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

import { Router } from 'express';
import {
  getWorkflowDefinitionFromGRPC,
  getWorkflowActivityFromGRPC,
  getDocumentActionFromGRPC,
  gettDocumentStatusFromGRPC
} from '@adempiere/grpc-api/src/utils/workflowFromGRPC';
import { convertProcessLogFromGRPC } from '@adempiere/grpc-api/lib/convertBaseDataType';

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
            result: getWorkflowDefinitionFromGRPC(response)
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
                return getWorkflowActivityFromGRPC(workflow)
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
                return getWorkflowActivityFromGRPC(workflowActivity)
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
   * POST Process Workflow Acitity
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   * req.query.document_action - Current Action
   * Details:
   */
  api.post('/process-workflow-activity', (req, res) => {
    if (req.body) {
      service.process({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        message: req.body.message,
        isApproved: req.body.is_approved
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'OK'
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
   * POST Forward Process Activity
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   * req.query.document_action - Current Action
   * Details:
   */
  api.post('/forward-workflow-activity', (req, res) => {
    if (req.body) {
      service.forward({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        message: req.body.message,
        userId: req.body.user_id,
        userUuid: req.body.user_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'OK'
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
              default_document_action: getDocumentActionFromGRPC(response.getDefaultDocumentAction()),
              records: response.getDocumentActionsList().map(documentAction => {
                return getDocumentActionFromGRPC(documentAction)
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
                return gettDocumentStatusFromGRPC(documentStatus)
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
   * GET Run Document Action
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   * req.query.document_action - Current Action
   * Details:
   */
  api.get('/run-document-action', (req, res) => {
    if (req.query) {
      service.runDocumentAction({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid,
        documentAction: req.query.document_action
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertProcessLogFromGRPC(response)
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
