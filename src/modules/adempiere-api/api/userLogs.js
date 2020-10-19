import { Router } from 'express';
import {
  convertProcessLogFromGRPC,
  convertEntityLogFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
import {
  convertEntityChatsFromGRPC,
  convertChatEntryFromGRPC,
  convertWorkflowProcessFomGRPC,
  convertRecentItemFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
export default ({ config, db, service }) => {
  let userLogs = Router();

  /**
   * POST List Process Logs
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.uuid - custom query instead a table name based on SQL
   * req.body.id - id reference
   * req.body.uuid - uuid reference
   * req.body.user_uuid - user uuid reference
   * req.body.instance_uuid - process instance uuid reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userLogs.post('/list-process-logs', (req, res) => {
    if (req.body) {
      service.listProcessLogs({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        //  Running parameters
        tableName: req.body.table_name,
        userUuid: req.body.user_uuid,
        instanceUuid: req.body.instance_uuid,
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
   * POST List Entity Logs
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.uuid - custom query instead a table name based on SQL
   * req.body.id - id reference
   * req.body.uuid - uuid reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userLogs.post('/list-entity-logs', (req, res) => {
    if (req.body) {
      service.listEntityLogs({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        //  Running parameters
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
   * POST List Entity chats
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.uuid - custom query instead a table name based on SQL
   * req.body.id - id reference
   * req.body.uuid - uuid reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userLogs.post('/list-entity-chats', (req, res) => {
    if (req.body) {
      service.listEntityChats({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        //  Running parameters
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
   * POST List Entity chats
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.uuid - uuid of chat
   * req.body.id - id of chat
   * req.body.uuid - uuid reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userLogs.post('/list-chat-entries', (req, res) => {
    if (req.body) {
      service.listChatEntries({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
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
   * POST List Workflow logs
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.uuid - custom query instead a table name based on SQL
   * req.body.id - id reference
   * req.body.uuid - uuid reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userLogs.post('/list-workflow-logs', (req, res) => {
    if (req.body) {
      service.listWorkflowLogs({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        //  Running parameters
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

  /**
   * POST List Recent Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.user_uuid - user uuid
   * req.body.role_uuid - role uuid
   * req.body.current_session - is current session
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userLogs.post('/list-recent-items', (req, res) => {
    if (req.body) {
      service.listRecentItems({
        token: req.query.token,
        language: req.query.language,
        //  Running parameters
        userUuid: req.body.user_uuid,
        roleUuid: req.body.role_uuid,
        currentSession: req.body.current_session,
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
              records: response.getRecentItemsList().map(recentItem => {
                return convertRecentItemFromGRPC(recentItem)
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

  return userLogs;
};
