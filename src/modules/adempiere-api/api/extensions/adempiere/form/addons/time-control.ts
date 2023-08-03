/************************************************************************************
 * Copyright (C) 2018-2022 E.R.P. Consultores y Asociados, C.A.                     *
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

import { convertResourceAssignment } from '../../util/convertData';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/timeControl')
  const service = new ServiceApi(config);

  api.post('/create-resource-assignment', (req, res) => {
    if (req.body) {
      service.createResourceAssignment({
        token: req.headers.authorization,
        //  DSL Query
        resourceTypeId: req.body.resource_type_id,
        resourceTypeUuid: req.body.resource_type_uuid,
        name: req.body.name,
        description: req.body.description
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceAssignment(
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
   * POST List Accounting Combinations
   */
  api.post('/list-resources-assignment', (req, res) => {
    if (req.body) {
      service.listResourcesAssignment({
        token: req.headers.authorization,
        //  DSL Query
        resourceTypeId: req.body.resource_type_id,
        resourceTypeUuid: req.body.resource_type_uuid,
        name: req.body.name,
        description: req.body.description,
        confirmed: req.body.confirmed,
        isWaitingForOrdered: req.body.is_waiting_for_ordered,
        dateFrom: req.body.date_from,
        dateTo: req.body.date_to,
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

  api.put('/update-resource-assignment', (req, res) => {
    if (req.body) {
      service.updateResourceAssignment({
        token: req.headers.authorization,
        id: req.body.id,
        uuid: req.body.uuid,
        //  DSL Query
        name: req.body.name,
        description: req.body.description
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceAssignment(
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

  api.delete('/delete-resource-assignment', (req, res) => {
    if (req.query) {
      service.deleteResourceAssignment({
        token: req.headers.authorization,
        //  DSL Query
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

  api.put('/confirm-resource-assignment', (req, res) => {
    if (req.body) {
      service.confirmResourceAssignment({
        token: req.headers.authorization,
        //  DSL Query
        id: req.body.id,
        uuid: req.body.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceAssignment(response)
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
