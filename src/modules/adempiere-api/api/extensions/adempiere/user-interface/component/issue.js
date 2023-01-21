/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client                                     *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
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

import {
  getRequestTypeFromGRPC,
  getSalesRepresentativeFromGRPC,
  getPriorityFromGRPC,
  getStatusFromGRPC,
  getIssueFromGRPC,
  getIssueCommentFromGRPC
} from '@adempiere/grpc-api/src/utils/issueManagementFromGRPC';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/issueManagement')
  const service = new ServiceApi(config)

  api.get('/', (req, res) => {
    res.json({
      code: 200,
      result: [
        {
          path: '/exists-issues',
          method: 'GET'
        },
        {
          path: '/create-issue',
          method: 'POST'
        }
      ]
    })
  });

  /**
   * POST List Request Types
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.post('/list-request-types', (req, res) => {
    if (req.body) {
      service.listRequestTypes({
        token: req.query.token,
        language: req.query.language,
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
   * POST List Sales Representatives
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.post('/list-sales-representatives', (req, res) => {
    if (req.body) {
      service.listSalesRepresentatives({
        token: req.query.token,
        language: req.query.language,
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
                return getSalesRepresentativeFromGRPC(entity);
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
   * POST List Priority
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.post('/list-priorities', (req, res) => {
    if (req.body) {
      service.listPriorities({
        token: req.query.token,
        language: req.query.language,
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
   * POST List Priority
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.post('/list-statuses', (req, res) => {
    if (req.body) {
      service.listStatuses({
        token: req.query.token,
        language: req.query.language,
        // DSL
        requestTypeId: req.body.request_type_id,
        requestTypeUuid: req.body.request_type_uuid,
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
   * req.query.language - login language
   * req.query.table_name - table name of chat entry
   * req.query.record_id - id of record
   * req.query.record_uuid - uuid of record
   * req.query.comments - comments
   */
  api.get('/exists-issues', (req, res) => {
    if (req.body) {
      service.existsIssues({
        token: req.query.token,
        language: req.query.language,
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
   * POST List Issues
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.record_id - id of record
   * req.body.record_uuid - uuid of record
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.post('/list-issues', (req, res) => {
    if (req.body) {
      service.listIssues({
        token: req.query.token,
        language: req.query.language,
        // DSL
        tableName: req.body.table_name,
        recordId: req.body.record_id,
        recordUuid: req.body.record_uuid,
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
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.subject - subject
   * req.body.summary - summary
   * req.body.requestTypeId - request type id
   * req.body.requestTypeUuid - request type uuid
   */
  api.post('/create-issue', (req, res) => {
    if (req.body) {
      service.createIssue({
        token: req.query.token,
        language: req.query.language,
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
        priorityValue: req.body.priority_value
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
   * POST Update Issue
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.subject - subject
   * req.body.summary - summary
   * req.body.requestTypeId - request type id
   * req.body.requestTypeUuid - request type uuid
   */
  api.post('/update-issue', (req, res) => {
    if (req.body) {
      service.updateIssue({
        token: req.query.token,
        language: req.query.language,
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
        priorityValue: req.body.priority_value
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
   * POST Delete Issue
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   */
  api.post('/delete-issue', (req, res) => {
    if (req.body) {
      service.deleteIssue({
        token: req.query.token,
        language: req.query.language,
        // DSL
        id: req.body.id,
        uuid: req.body.uuid
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
   * POST List Issue Comments
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.issue_id - id of record parent issue
   * req.body.issue_uuid - uuid of record parent issued
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.post('/list-issue-comments', (req, res) => {
    if (req.body) {
      service.listIssueComments({
        token: req.query.token,
        language: req.query.language,
        // DSL
        issueId: req.body.issue_id,
        issueUuid: req.body.issue_uuid,
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
   * req.query.language - login language
   * req.body.issue_id - id of record parent issue
   * req.body.issue_uuid - uuid of record parent issued
   * req.body.result - result
   * req.body.dateNextAction - date to next action
   */
  api.post('/create-issue-comment', (req, res) => {
    if (req.body) {
      service.createIssue({
        token: req.query.token,
        language: req.query.language,
        // DSL
        issueId: req.body.issue_id,
        issueUuid: req.body.issue_uuid,
        result: req.body.result,
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
   * POST Update Issue Comment
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.result - result
   * req.body.dateNextAction - date to next action
   */
  api.post('/update-issue-comment', (req, res) => {
    if (req.body) {
      service.updateIssueComment({
        token: req.query.token,
        language: req.query.language,
        // DSL
        issueId: req.body.issue_id,
        issueUuid: req.body.issue_uuid,
        result: req.body.result,
        dateNextAction: req.body.date_next_action
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
   * POST Delete Issue
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   */
  api.post('/delete-issue-comment', (req, res) => {
    if (req.body) {
      service.deleteIssueComment({
        token: req.query.token,
        language: req.query.language,
        // DSL
        id: req.body.id,
        uuid: req.body.uuid
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
