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
  convertReportOutputFromGRPC,
  convertDrillTableFromGRPC,
  convertPrintFromatFromGRPC,
  convertReportViewFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userInterface')
  const service = new ServiceApi(config)

  /**
   * GET Report Output
   *
   * req.query.token - user token
   * req.query.print_format_uuid - print format reference
   * req.query.report_view_uuid - report view reference
   * req.query.is_summary - summary
   * req.query.report_name - report name
   * req.query.report_type - report type
   * req.query.filters - query filters
   * req.query.columns - query columns
   * req.query.table_name - table name (Mandatory if is not a query)
   * req.query.query - custom query instead a table name based on SQL
   * req.query.where_clause - where clause of search based on SQL
   * req.query.order_by_clause - order by clause based on SQL
   * req.query.limit - records limit
   *
   * Details:
   */
  api.get('/report-output', (req, res) => {
    service.getReportOutput({
      token: req.headers.authorization,
      tableName: req.query.table_name,
      // Reference
      printFormatUuid: req.query.print_format_uuid,
      reportViewUuid: req.query.report_view_uuid,
      isSummary: req.query.is_summary,
      reportName: req.query.report_name,
      reportType: req.query.report_type,
      // DSL Query
      filters: req.query.filters,
      // Custom Query
      query: req.query.query,
      whereClause: req.query.where_clause,
      orderByClause: req.query.order_by_clause,
      limit: req.query.limit
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: convertReportOutputFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  /**
   * GET Tables for Drill
   *
   * req.query.token - user token
   * req.query.page_size - page token
   * req.query.page_token - page size
   * req.query.table_name - table name (Mandatory if is not a query)
   *
   * Details:
   */
  api.get('/drill-tables', (req, res) => {
    service.listDrillTables({
      token: req.headers.authorization,
      tableName: req.query.table_name,
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getDrillTablesList().map(drillTable => {
              return convertDrillTableFromGRPC(drillTable)
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

  /**
   * GET Report Views
   *
   * req.query.token - user token
   * req.query.page_size - page token
   * req.query.page_token - page size
   * req.query.table_name - table name (Mandatory if is not a query)
   * req.query.process_uuid processUuid
   *
   * Details:
   */
  api.get('/report-views', (req, res) => {
    service.listReportViews({
      token: req.headers.authorization,
      tableName: req.query.table_name,
      processUuid: req.query.process_uuid,
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getReportViewsList().map(reportView => {
              return convertReportViewFromGRPC(reportView)
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

  /**
   * GET Print Formats
   *
   * req.query.token - user token
   * req.query.page_size - page token
   * req.query.page_token - page size
   * req.query.table_name - table name (Mandatory if is not a query)
   * req.query.report_view_uuid - report view reference
   * req.query.process_uuid - process reference
   *
   * Details:
   */
  api.get('/print-formats', (req, res) => {
    service.listPrintFormats({
      token: req.headers.authorization,
      tableName: req.query.table_name,
      reportViewUuid: req.query.report_view_uuid,
      processUuid: req.query.process_uuid,
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getPrintFormatsList().map(drillTable => {
              return convertPrintFromatFromGRPC(drillTable)
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

  return api;
};
