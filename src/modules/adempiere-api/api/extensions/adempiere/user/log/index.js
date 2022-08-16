import { Router } from 'express';
import {
  convertProcessLogFromGRPC,
  convertEntityLogFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
import {
  convertEntityChatsFromGRPC,
  convertChatEntryFromGRPC
  // convertRecentItemFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
import { convertWorkflowProcessFomGRPC } from '@adempiere/grpc-api/lib/convertWorkflow';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/logs')
  const service = new ServiceApi(config)

  /**
   * GET List Process Logs
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.table_name - table name (Mandatory for get translation)
   * req.query.uuid - custom query instead a table name based on SQL
   * req.query.id - id reference
   * req.query.uuid - uuid reference
   * req.query.user_uuid - user uuid reference
   * req.query.instance_uuid - process instance uuid reference
   * Details:
   */
  api.get('/process-logs', (req, res) => {
    if (req.query) {
      service.listProcessLogs({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
        //  Running parameters
        tableName: req.query.table_name,
        userUuid: req.query.user_uuid,
        instanceUuid: req.query.instance_uuid,
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
              records: response.getProcessLogsList().map(processsLog => {
                return convertProcessLogFromGRPC(processsLog)
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
   * GET Entity Logs
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
  api.get('/entity-logs', (req, res) => {
    if (req.query) {
      service.listEntityLogs({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
        //  Running parameters
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
              records: response.getEntityLogsList().map(entityLog => {
                return convertEntityLogFromGRPC(entityLog)
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
   * GET Entity chats
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
  api.get('/entity-chats', (req, res) => {
    if (req.query) {
      service.listEntityChats({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
        //  Running parameters
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
              records: response.getEntityChatsList().map(entityChat => {
                return convertEntityChatsFromGRPC(entityChat)
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
   * GET Entity chats
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.uuid - uuid of chat
   * req.query.id - id of chat
   * req.query.uuid - uuid reference
   * Details:
   */
  api.get('/chat-entries', (req, res) => {
    if (req.query) {
      service.listChatEntries({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
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
              records: response.getChatEntriesList().map(entry => {
                return convertChatEntryFromGRPC(entry)
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
   * GET Workflow logs
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
  api.get('/workflow-logs', (req, res) => {
    if (req.query) {
      service.listWorkflowLogs({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
        //  Running parameters
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
              records: response.getWorkflowLogsList().map(workflowLog => {
                return convertWorkflowProcessFomGRPC(workflowLog)
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
