/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

import {
  getProcessLogFromGRPC
} from '.././grpc-api/utils/baseDataTypeFromGRPC.js';
import {
  convertChatEntryFromGRPC
} from '.././grpc-api/lib/convertBusinessData';
import {
  getEntityChatsFromGRPC,
  getEntityLogFromGRPC,
  getUserActivityFromGRPC
} from '.././grpc-api/utils/logsFromGRPC';
import {
  getWorkflowProcessFomGRPC
} from '.././grpc-api/utils/workflowFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('.././grpc-api/services/logs')
  const service = new ServiceApi(config)

  /**
   * GET List Process Logs
   *
   * req.query.token - user token
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
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid,
        //  Running parameters
        tableName: req.query.table_name,
        userUuid: req.query.user_uuid,
        instanceUuid: req.query.instance_uuid,
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
              records: response.getProcessLogsList().map(processsLog => {
                return getProcessLogFromGRPC(processsLog);
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Entity Logs
   *
   * req.query.token - user token
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
        token: req.headers.authorization,
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
                return getEntityLogFromGRPC(entityLog)
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
        token: req.headers.authorization,
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
                return getEntityChatsFromGRPC(entityChat)
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
   * GET Exists chats entries
   *
   * req.query.token - user token
   * req.query.table_name - table name
   * req.query.record_id - record identifier
   * req.query.record_uuid - record uuid
   * Details:
   */
  api.get('/exists-chat-entries', (req, res) => {
    if (req.query) {
      service.existsChatEntries({
        token: req.headers.authorization,
        recordId: req.query.record_id,
        recordUuid: req.query.record_uuid,
        //  Running parameters
        tableName: req.query.table_name
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getRecordCount()
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
        token: req.headers.authorization,
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
        token: req.headers.authorization,
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
                return getWorkflowProcessFomGRPC(workflowLog)
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

  api.get('/user-activities', (req, res) => {
    if (req.query) {
      service.listUserActivites({
        token: req.headers.authorization,
        date: req.query.date,
        searchValue: req.query.search_value,
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
              records: response.getRecordsList().map(userActivity => {
                return getUserActivityFromGRPC(userActivity);
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  return api;
};
