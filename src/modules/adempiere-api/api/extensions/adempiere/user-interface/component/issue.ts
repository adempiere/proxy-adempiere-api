/*************************************************************************************
 * Product: ADempiere gRPC Issue Management Client                                   *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

import { Router } from 'express';
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

import {
  getRequestTypeFromGRPC,
  getUserFromGRPC,
  getPriorityFromGRPC,
  getStatusFromGRPC,
  getIssueFromGRPC,
  getIssueCommentFromGRPC
} from '../.././grpc-api/utils/issueManagementFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('../.././grpc-api/services/issueManagement')
  const service = new ServiceApi(config)

  api.get('/', (req, res) => {
    res.json({
      code: 200,
      result: [
        {
          path: '/list-request-types',
          method: 'GET'
        },
        {
          path: '/list-sales-representatives',
          method: 'GET'
        },
        {
          path: '/list-priorities',
          method: 'GET'
        },
        {
          path: '/list-statuses',
          method: 'GET'
        },
        {
          path: '/list-priorities',
          method: 'GET'
        },
        {
          path: '/exists-issues',
          method: 'GET'
        },
        {
          path: '/list-issues',
          method: 'GET'
        },
        {
          path: '/create-issue',
          method: 'POST'
        },
        {
          path: '/update-issue',
          method: 'PUT'
        },
        {
          path: '/delete-issue',
          method: 'DELETE'
        },
        {
          path: '/list-issue-comments',
          method: 'GET'
        },
        {
          path: '/update-issue',
          method: 'PUT'
        },
        {
          path: '/create-issue-comment',
          method: 'POST'
        },
        {
          path: '/update-issue-comment',
          method: 'PUT'
        },
        {
          path: '/delete-issue-comment',
          method: 'DELETE'
        }
      ]
    });
  });

  /**
   * GET List Request Types
   *
   * req.query.token - user token
   * req.query.search_value - Search Value
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-request-types', (req, res) => {
    if (req.query) {
      service.listRequestTypes({
        token: req.headers.authorization,
        // DSL
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return getRequestTypeFromGRPC(entity);
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
   * GET List Sales Representatives
   *
   * req.query.token - user token
   * req.query.search_value - Search Value
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-sales-representatives', (req, res) => {
    if (req.query) {
      service.listSalesRepresentatives({
        token: req.headers.authorization,
        // DSL
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return getUserFromGRPC(entity);
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
   * GET List Priorities
   *
   * req.query.token - user token
   * req.query.search_value - Search Value
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-priorities', (req, res) => {
    if (req.query) {
      service.listPriorities({
        token: req.headers.authorization,
        // DSL
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return getPriorityFromGRPC(entity);
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
   * GET List Statuses
   *
   * req.query.token - user token
   * req.query.search_value - Search Value
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-statuses', (req, res) => {
    if (req.query) {
      service.listStatuses({
        token: req.headers.authorization,
        // DSL
        requestTypeId: req.query.request_type_id,
        requestTypeUuid: req.query.request_type_uuid,
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return getStatusFromGRPC(entity);
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
   * GET Exists Issues
   *
   * req.query.token - user token
   * req.query.table_name - table name of chat entry
   * req.query.record_id - id of record
   * req.query.record_uuid - uuid of record
   * req.query.comments - comments
   */
  api.get('/exists-issues', (req, res) => {
    if (req.query) {
      service.existsIssues({
        token: req.headers.authorization,
        tableName: req.query.table_name,
        recordId: req.query.record_id,
        recordUuid: req.query.record_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getRecordCount()
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
   * GET List Issues
   *
   * req.query.token - user token
   * req.query.table_name - table name of chat entry
   * req.query.record_id - id of record
   * req.query.record_uuid - uuid of record
   * req.query.search_value - Search Value
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-issues', (req, res) => {
    if (req.query) {
      service.listIssues({
        token: req.headers.authorization,
        // DSL
        tableName: req.query.table_name,
        recordId: req.query.record_id,
        recordUuid: req.query.record_uuid,
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return getIssueFromGRPC(entity);
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
   * POST Create Issue
   *
   * req.query.token - user token
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.subject - subject
   * req.body.summary - summary
   * req.body.requestTypeId - request type id
   * req.body.requestTypeUuid - request type uuid
   * req.body.dateNextAction - date to next action
   */
  api.post('/create-issue', (req, res) => {
    if (req.body) {
      service.createIssue({
        token: req.headers.authorization,
        // DSL
        tableName: req.body.table_name,
        recordId: req.body.record_id,
        recordUuid: req.body.record_uuid,
        subject: req.body.subject,
        summary: req.body.summary,
        requestTypeId: req.body.request_type_id,
        requestTypeUuid: req.body.request_type_uuid,
        salesRepresentativeId: req.body.sales_representative_id,
        salesRepresentativeUuid: req.body.sales_representative_uuid,
        statusId: req.body.status_id,
        statusUuid: req.body.status_uuid,
        priorityValue: req.body.priority_value,
        dateNextAction: req.body.date_next_action
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getIssueFromGRPC(response)
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
   * PUT Update Issue
   *
   * req.query.token - user token
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.subject - subject
   * req.body.summary - summary
   * req.body.requestTypeId - request type id
   * req.body.requestTypeUuid - request type uuid
   * req.body.dateNextAction - date to next action
   */
  api.put('/update-issue', (req, res) => {
    if (req.body) {
      service.updateIssue({
        token: req.headers.authorization,
        // DSL
        id: req.body.id,
        uuid: req.body.uuid,
        subject: req.body.subject,
        summary: req.body.summary,
        requestTypeId: req.body.request_type_id,
        requestTypeUuid: req.body.request_type_uuid,
        salesRepresentativeId: req.body.sales_representative_id,
        salesRepresentativeUuid: req.body.sales_representative_uuid,
        statusId: req.body.status_id,
        statusUuid: req.body.status_uuid,
        priorityValue: req.body.priority_value,
        dateNextAction: req.body.date_next_action
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getIssueFromGRPC(response)
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
   * DELETE Delete Issue
   *
   * req.query.token - user token
   * req.query.id - id of record
   * req.query.uuid - uuid of record
   */
  api.delete('/delete-issue', (req, res) => {
    if (req.query) {
      service.deleteIssue({
        token: req.headers.authorization,
        // DSL
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
   * GET List Issue Comments
   *
   * req.query.token - user token
   * req.query.issue_id - id of record parent issue
   * req.query.issue_uuid - uuid of record parent issued
   * req,query.search_value - Search Value
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-issue-comments', (req, res) => {
    if (req.query) {
      service.listIssueComments({
        token: req.headers.authorization,
        // DSL
        issueId: req.query.issue_id,
        issueUuid: req.query.issue_uuid,
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return getIssueCommentFromGRPC(entity);
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
   * POST Create Issue Comment
   *
   * req.query.token - user token
   * req.body.issue_id - id of record parent issue
   * req.body.issue_uuid - uuid of record parent issued
   * req.body.result - result
   */
  api.post('/create-issue-comment', (req, res) => {
    if (req.body) {
      service.createIssueComment({
        token: req.headers.authorization,
        // DSL
        issueId: req.body.issue_id,
        issueUuid: req.body.issue_uuid,
        result: req.body.result
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getIssueCommentFromGRPC(response)
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
   * PUT Update Issue Comment
   *
   * req.query.token - user token
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.result - result
   */
  api.put('/update-issue-comment', (req, res) => {
    if (req.body) {
      service.updateIssueComment({
        token: req.headers.authorization,
        // DSL
        id: req.body.id,
        uuid: req.body.uuid,
        result: req.body.result
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getIssueCommentFromGRPC(response)
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
   * DELETE Delete Issue Comment
   *
   * req.query.token - user token
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   */
  api.delete('/delete-issue-comment', (req, res) => {
    if (req.query) {
      service.deleteIssueComment({
        token: req.headers.authorization,
        // DSL
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
