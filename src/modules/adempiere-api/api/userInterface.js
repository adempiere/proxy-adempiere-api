import { Router } from 'express';
import {
  convertAttachmentFromGRPC,
  convertResourceReferenceFromGRPC,
  convertReportOutputFromGRPC,
  convertDrillTableFromGRPC,
  convertPrintFromatFromGRPC,
  convertReportViewFromGRPC,
  convertRecordReferenceInfoFromGRPC,
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
import {
  convertChatEntryFromGRPC,
  convertPrivateAccessFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';
export default ({ config, db, service }) => {
  let userInterfaceApi = Router();

  /**
   * GET Entity Attachment Information
   *
   * req.query.token - user token
   * req.query.id - id of entity
   * req.query.uuid - uuid of entity
   * req.query.table_name - table name of entity
   * req.query.language - login language
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.get('/attachment', (req, res) => {
    if (req.query) {
      service.getAttachment({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertAttachmentFromGRPC(response)
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
   * GET Resource Reference Information
   *
   * req.query.token - user token
   * req.query.image_id - id of image
   * req.query.language - login language
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.get('/resource-reference', (req, res) => {
    if (req.query) {
      service.getResourceReference({
        token: req.query.token,
        language: req.query.language,
        imageId: req.query.image_id
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceReferenceFromGRPC(response)
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
   * POST Create Chat Entry
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.comments - comments
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/create-chat-entry', (req, res) => {
    if (req.body) {
      service.createChatEntry({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        comment: req.body.comment
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertChatEntryFromGRPC(response)
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
   * POST get Report Output
   *
   * req.query.token - user token
   * req.query.language - login language
   * Body:
   * req.body.print_format_uuid - print format reference
   * req.body.report_view_uuid - report view reference
   * req.body.is_summary - summary
   * req.body.report_name - report name
   * req.body.report_type - report type
   * req.body.filters - query filters
   * req.body.columns - query columns
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/get-report-output', (req, res) => {
    if (req.body) {
      service.getReportOutput({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        //  Reference
        printFormatUuid: req.body.print_format_uuid,
        reportViewUuid: req.body.report_view_uuid,
        isSummary: req.body.is_summary,
        reportName: req.body.report_name,
        reportType: req.body.report_type,
        //  DSL Query
        filters: req.body.filters,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertReportOutputFromGRPC(response)
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
   * POST Get Tables for Drill
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - page token
   * req.query.page_token - page size
   * Body:
   * req.body.table_name - table name (Mandatory if is not a query)
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-drill-tables', (req, res) => {
    if (req.body) {
      service.listDrillTables({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
   * POST Get Report Views
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - page token
   * req.query.page_token - page size
   * Body:
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.process_uuid processUuid
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-report-views', (req, res) => {
    if (req.body) {
      service.listReportViews({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        processUuid: req.body.process_uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
   * POST Get Print Formats
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - page token
   * req.query.page_token - page size
   * Body:
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.report_view_uuid - report view reference
   * req.body.process_uuid - process reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-print-formats', (req, res) => {
    if (req.body) {
      service.listPrintFormats({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        reportViewUuid: req.body.report_view_uuid,
        processUuid: req.body.process_uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
   * POST Unlock a Private Access
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/unlock-private-access', (req, res) => {
    if (req.body) {
      service.unlockPrivateAccess({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPrivateAccessFromGRPC(response)
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
   * POST Lock a Private Access
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/lock-private-access', (req, res) => {
    if (req.body) {
      service.lockPrivateAccess({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPrivateAccessFromGRPC(response)
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
   * POST Get Private Access from Table and record
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - table name of chat entry
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/get-private-access', (req, res) => {
    if (req.body) {
      service.getPrivateAccess({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPrivateAccessFromGRPC(response)
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
   * POST Get Context Information
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.uuid - uuid of record
   * req.body.query - query for search
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/get-context-info-value', (req, res) => {
    if (req.body) {
      service.getContextInfoValue({
        token: req.query.token,
        language: req.query.language,
        query: req.body.query,
        uuid: req.body.uuid,
        id: req.body.id
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              message_text: response.getMessageText(),
              message_tip: response.getMessageTip()
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
   * POST List Referneces
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - page token
   * req.query.page_token - page size
   * Body:
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.window_uuid - uuid of window
   * req.body.id - id reference
   * req.body.uuid - uuid reference
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-references', (req, res) => {
    if (req.body) {
      service.listReferences({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        windowUuid: req.body.window_uuid,
        id: req.body.id,
        uuid: req.body.uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getReferencesList().map(reference => {
                return convertRecordReferenceInfoFromGRPC(reference)
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
   * POST List Browser Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * Body:
   * req.body.parameters - parameters of browser
   * req.body.filters - query filters
   * req.body.columns - query columns
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-browser-items', (req, res) => {
    if (req.body) {
      service.listBrowserItems({
        token: req.query.token,
        language: req.query.language,
        //  Running parameters
        uuid: req.body.uuid,
        parameters: req.body.parameters,
        tableName: req.body.table_name,
        //  DSL Query
        filters: req.body.filters,
        columns: req.body.columns,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(entity => {
                return convertEntityFromGRPC(entity)
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

  return userInterfaceApi;
};
