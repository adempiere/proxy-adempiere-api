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
  getDecimalFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType.js';

// Convert resourtce type from gRPC to JSON
function convertResourceType (resourceType) {
  if (resourceType) {
    return {
      id: resourceType.getId(),
      uuid: resourceType.getUuid(),
      value: resourceType.getValue(),
      name: resourceType.getName(),
      description: resourceType.getDescription()
    }
  }
  return undefined;
}

// Convert resourtce from gRPC to JSON
function convertResource (resource) {
  if (resource) {
    return {
      id: resource.getId(),
      uuid: resource.getUuid(),
      name: resource.getName(),
      resource_type: convertResourceType(
        resource.getResourceType()
      )
    }
  }
  return undefined;
}

// Convert resourtce assignment from gRPC to JSON
function convertResourceAssignment (resourceAssignment) {
  if (resourceAssignment) {
    return {
      id: resourceAssignment.getId(),
      uuid: resourceAssignment.getUuid(),
      resource: convertResource(
        resourceAssignment.getResource()
      ),
      name: resourceAssignment.getName(),
      description: resourceAssignment.getDescription(),
      assign_date_from: resourceAssignment.getAssignDateFrom(),
      assign_date_to: resourceAssignment.getAssignDateTo(),
      is_confirmed: resourceAssignment.getIsConfirmed(),
      quantity: getDecimalFromGRPC(resourceAssignment.getQuantity())
    }
  }
  return undefined;
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/timeControl')
  const service = new ServiceApi(config);

  api.get('/create-resource-assignment', (req, res) => {
    if (req.query) {
      service.createResourceAssignment({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        resourceTypeId: req.query.resource_type_id,
        resourceTypeUuid: req.query.resource_type_uuid,
        name: req.query.name,
        description: req.query.description
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceAssignment(
              response
            )
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
   * GET List Accounting Combinations
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.query.context_attributes - attributes
   * req.query.filters - filters to reduce list values
   */
  api.get('/list-resources-assignment', (req, res) => {
    if (req.query) {
      service.listResourcesAssignment({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        resourceTypeId: req.query.resource_resource_type_id,
        resourceTypeUuid: req.query.resource_resource_type_uuid,
        name: req.query.name,
        description: req.query.description,
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
              records: response.getRecordsList().map(entity => {
                return convertResourceAssignment(entity);
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

  api.get('/update-resource-assignment', (req, res) => {
    if (req.query) {
      service.updateResourceAssignment({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid,
        //  DSL Query
        name: req.query.name,
        description: req.query.description
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceAssignment(
              response
            )
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

  api.get('/delete-resource-assignment', (req, res) => {
    if (req.query) {
      service.deleteResourceAssignment({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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

  api.get('/confirm-resource-assignment', (req, res) => {
    if (req.query) {
      service.confirmResourceAssignment({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceAssignment(response)
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
