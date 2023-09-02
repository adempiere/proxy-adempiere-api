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

import { convertEntitiesListFromGRPC } from '../../util/convertData';
import {
  convertEntityFromGRPC
} from '../.././grpc-api/lib/convertBaseDataType';
import { getLookupItemFromGRPC } from '../.././grpc-api/utils/userInterfaceFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('../.././grpc-api/services/payrollActionNotice')
  const service = new ServiceApi(config);

  api.get('/list-payroll-process', (req, res) => {
    if (req.query) {
      service.listPayrollProcess({
        token: req.headers.authorization,
        //  DSL Query
        contextAttributes: req.query.context_attributes,
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
              records: response.getRecordsList().map(lookupItem => {
                return getLookupItemFromGRPC(lookupItem);
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

  api.get('/list-employee-valid', (req, res) => {
    if (req.query) {
      service.listEmployeeValid({
        token: req.headers.authorization,
        //  DSL Query
        contextAttributes: req.query.context_attributes,
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
              records: response.getRecordsList().map(lookupItem => {
                return getLookupItemFromGRPC(lookupItem);
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

  api.get('/list-payroll-concepts', (req, res) => {
    if (req.query) {
      service.listPayrollConcepts({
        token: req.headers.authorization,
        //  DSL Query
        contextAttributes: req.query.context_attributes,
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
              records: response.getRecordsList().map(lookupItem => {
                return getLookupItemFromGRPC(lookupItem);
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

  api.get('/get-payroll-concept-definition', (req, res) => {
    if (req.query) {
      service.getPayrollConceptDefinition({
        token: req.headers.authorization,
        //  DSL Query
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntityFromGRPC(response)
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

  api.get('/list-payroll-movements', (req, res) => {
    if (req.query) {
      service.listPayrollMovements({
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

  api.put('/save-payroll-movement', (req, res) => {
    if (req.body) {
      service.savePayrollMovement({
        token: req.headers.authorization,
        //  DSL Query
        id: req.body.id,
        uuid: req.body.uuid,
        contextAttributes: req.body.context_attributes,
        attributes: req.body.attributes
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

  api.delete('/delete-payroll-movements', (req, res) => {
    if (req.query) {
      service.deletePayrollMovements({
        token: req.headers.authorization,
        //  DSL Query
        contextAttributes: req.query.context_attributes,
        ids: req.query.ids,
        uuids: req.query.uuids
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
