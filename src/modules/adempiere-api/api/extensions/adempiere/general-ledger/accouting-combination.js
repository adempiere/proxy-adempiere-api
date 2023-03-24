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

import { convertEntitiesListFromGRPC } from '../util/convertData';
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/generalLedger');
  const service = new ServiceApi(config);

  /**
   * GET Find Accounting Combination
   */
  api.get('/accounting-combination', (req, res) => {
    if (req.query) {
      service.getAccountingCombination({
        token: req.headers.authorization,
        //  DSL Query
        id: req.query.id,
        uuid: req.query.uuid,
        value: req.query.value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntityFromGRPC(response)
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
   * GET List Accounting Combinations
   *
   * req.query.token - user token
   * req.query.search_value - search value optional
   * req.query.context_attributes - attributes
   * "context_attributes": [
      {
        "key": "AD_Client_ID",
        "value": 1000000
      },
      {
        "key": "Created",
        "value": "2022-06-13T16:14:23.000Z"
      },
      {
        "key": "IsActive",
        "value": true
      },
      {
        "key": "Value",
        "value": "Solo Pruebas"
      }
    ]
   * req.query.filters - filters to reduce list values
   */
  api.get('/accounting-combinations', (req, res) => {
    if (req.query) {
      service.listAccountingCombinations({
        token: req.headers.authorization,
        //  DSL Query
        filters: req.query.filters,
        contextAttributes: req.query.context_attributes,
        searchValue: req.query.search_value,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntitiesListFromGRPC(response)
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

  api.get('/save-accounting-combination', (req, res) => {
    if (req.query) {
      service.saveAccountingCombination({
        token: req.headers.authorization,
        //  DSL Query
        contextAttributes: req.query.context_attributes,
        id: req.query.id,
        uuid: req.query.uuid,
        attributes: req.query.attributes
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntityFromGRPC(response)
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
