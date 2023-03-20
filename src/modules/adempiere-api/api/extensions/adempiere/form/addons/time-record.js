/************************************************************************************
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
  getDecimalFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
import {
  convertUnitOfMeasureFromGRPC
} from '@adempiere/grpc-api/src/utils/convertCoreFunctionality'

// Convert issue (request) type from gRPC to JSON
function getIssueFromGRPC (issue) {
  if (!issue) {
    return undefined;
  }
  return {
    id: issue.getId(),
    uuid: issue.getUuid(),
    document_no: issue.getDocumentNo(),
    subject: issue.getSubject(),
    summary: issue.getSummary()
  };
}

// Convert project type from gRPC to JSON
function getProjectFromGRPC (project) {
  if (!project) {
    return undefined;
  }
  return {
    id: project.getId(),
    uuid: project.getUuid(),
    value: project.getValue(),
    name: project.getName()
  };
}

// Convert resourtce type from gRPC to JSON
function getResourceTypeFromGRPC (resourceType) {
  if (!resourceType) {
    return undefined;
  }
  return {
    id: resourceType.getId(),
    uuid: resourceType.getUuid(),
    value: resourceType.getValue(),
    name: resourceType.getName(),
    description: resourceType.getDescription(),
    unit_of_measure: convertUnitOfMeasureFromGRPC(
      resourceType.getUnitOfMeasure()
    )
  };
}

// Convert user from gRPC to JSON
function getUserFromGRPC (user) {
  if (!user) {
    return undefined;
  }
  return {
    id: user.getId(),
    uuid: user.getUuid(),
    value: user.getValue(),
    name: user.getName(),
    description: user.getDescription()
  };
}

// Convert resourtce from gRPC to JSON
function getResourceFromGRPC (resource) {
  if (!resource) {
    return undefined;
  }
  return {
    id: resource.getId(),
    uuid: resource.getUuid(),
    resource_type: getResourceTypeFromGRPC(
      resource.getResourceType()
    ),
    user: getUserFromGRPC(
      resource.getUser()
    ),
    name: resource.getName(),
    description: resource.getDescription()
  };
}

// Convert resourtce assignment from gRPC to JSON
export function getResourceAssignmentFromGRPC (resourceAssignment) {
  if (!resourceAssignment) {
    return undefined;
  }
  return {
    id: resourceAssignment.getId(),
    uuid: resourceAssignment.getUuid(),
    resource: getResourceFromGRPC(
      resourceAssignment.getResource()
    ),
    name: resourceAssignment.getName(),
    description: resourceAssignment.getDescription(),
    assign_date_from: resourceAssignment.getAssignDateFrom(),
    assign_date_to: resourceAssignment.getAssignDateTo(),
    is_confirmed: resourceAssignment.getIsConfirmed(),
    quantity: getDecimalFromGRPC(resourceAssignment.getQuantity())
  };
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/timeRecord.js')
  const service = new ServiceApi(config);

  api.post('/', (req, res) => {
    if (req.body) {
      service.createTimeRecord({
        token: req.headers.authorization,
        language: req.query.language,
        // DSL Query
        requestId: req.body.request_id,
        requestUuid: req.body.request_uuid,
        projectId: req.body.project_id,
        projectUuid: req.body.project_uuid,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        date: req.body.date
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getResourceAssignmentFromGRPC(
              response
            )
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
   * GET List resource asignment
   */
  api.get('/', (req, res) => {
    if (req.query) {
      service.listTimeRecord({
        token: req.headers.authorization,
        language: req.query.language,
        // DSL Query
        searchValue: req.query.search_value,
        quantity: req.query.quantity,
        dateFrom: req.query.date_from,
        dateTo: req.query.date_to,
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
                return getResourceAssignmentFromGRPC(entity);
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
   * GET List Issues
   */
  api.get('/issues', (req, res) => {
    if (req.query) {
      service.listIssues({
        token: req.headers.authorization,
        language: req.query.language,
        // DSL Query
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
   * GET List Projects
   */
  api.get('/projects', (req, res) => {
    if (req.query) {
      service.listProjects({
        token: req.headers.authorization,
        language: req.query.language,
        // DSL Query
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
                return getProjectFromGRPC(entity);
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
