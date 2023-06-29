/************************************************************************************
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                  *
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

import { convertEntitiesListFromGRPC } from '../util/convertData';
import { getAccountingDocumentFromGRPC } from '../util/generalLedgerFromGRPC';
import { getLookupItemFromGRPC } from '@adempiere/grpc-api/src/utils/userInterfaceFromGRPC';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/generalLedger');
  const service = new ServiceApi(config);

  api.get('/accounting-schemas', (req, res) => {
    service.listAccountingSchemas({
      token: req.headers.authorization,
      //  DSL Query
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
            records: response.getRecordsList().map(accountingSchema => {
              return getLookupItemFromGRPC(accountingSchema);
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
  });

  api.get('/posting-types', (req, res) => {
    service.listPostingTypes({
      token: req.headers.authorization,
      //  DSL Query
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
            records: response.getRecordsList().map(postingType => {
              return getLookupItemFromGRPC(postingType);
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
  });

  api.get('/organizations', (req, res) => {
    service.listOrganizations({
      token: req.headers.authorization,
      //  DSL Query
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
            records: response.getRecordsList().map(organization => {
              return getLookupItemFromGRPC(organization);
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
  });

  api.get('/accounting-documents', (req, res) => {
    service.listAccountingDocuments({
      token: req.headers.authorization,
      //  DSL Query
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
            records: response.getRecordsList().map(accountingDocument => {
              return getAccountingDocumentFromGRPC(accountingDocument);
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
  });

  api.post('/start-re-post', (req, res) => {
    service.srartRePost({
      token: req.headers.authorization,
      //  DSL Query
      tableName: req.body.table_name,
      recordId: req.body.record_id,
      recordUuid: req.body.record_uuid,
      isForce: req.body.is_force,
      //  Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            error_msg: response.getErrorMsg()
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/accounting-facts', (req, res) => {
    service.listAccountingFacts({
      token: req.headers.authorization,
      //  DSL Query
      accountingSchemaId: req.query.accounting_schema_id,
      postingType: req.query.posting_type,
      tableName: req.query.table_name,
      recordId: req.query.record_id,
      recordUuid: req.query.record_uuid,
      dateFrom: req.query.date_from,
      dateTo: req.query.date_to,
      organizationId: req.query.organization_id,
      filters: req.body.filters,
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
  });

  return api;
};
