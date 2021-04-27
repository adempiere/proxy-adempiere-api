import { Router } from 'express';
import {
  convertAttachmentFromGRPC,
  convertResourceReferenceFromGRPC,
  convertReportOutputFromGRPC,
  convertDrillTableFromGRPC,
  convertPrintFromatFromGRPC,
  convertReportViewFromGRPC,
  convertRecordReferenceInfoFromGRPC,
  convertEntityFromGRPC,
  convertTranslationFromGRPC,
  convertValueFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
import {
  convertChatEntryFromGRPC,
  convertPrivateAccessFromGRPC,
  convertLookupFromGRPC,
  convertCalloutFromGRPC,
  convertPreferenceFromGRPC,
  convertRecordAccessFromGRPC
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
   * POST Set User Preference
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.container_uuid - Container UUID, usually is a window
   * req.body.column_name - attribute or column name
   * req.body.is_for_current_user  - apply for current user (boolean)
   * req.body.is_for_current_client - apply for current client (boolean)
   * req.body.is_for_current_organization - apply for current organization (boolean)
   * req.body.is_for_current_container - apply for current container (boolean)
   * req.body.value - value for set on preference
   *
   */
  userInterfaceApi.post('/set-preference', (req, res) => {
    if (req.body) {
      service.setPreference({
        token: req.query.token,
        language: req.query.language,
        containerUuid: req.body.container_uuid,
        columnName: req.body.column_name,
        isForCurrentUser: req.body.is_for_current_user,
        isForCurrentClient: req.body.is_for_current_client,
        isForCurrentOrganization: req.body.is_for_current_organization,
        isForCurrentContainer: req.body.is_for_current_container,
        value: req.body.value
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertPreferenceFromGRPC(response)
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
   * POST Delete User Preference
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.container_uuid - Container UUID, usually is a window
   * req.body.column_name - attribute or column name
   * req.body.is_for_current_user  - apply for current user (boolean)
   * req.body.is_for_current_client - apply for current client (boolean)
   * req.body.is_for_current_organization - apply for current organization (boolean)
   * req.body.is_for_current_container - apply for current container (boolean)
   *
   */
  userInterfaceApi.post('/delete-preference', (req, res) => {
    if (req.body) {
      service.deletePreference({
        token: req.query.token,
        language: req.query.language,
        containerUuid: req.body.container_uuid,
        columnName: req.body.column_name,
        isForCurrentUser: req.body.is_for_current_user,
        isForCurrentClient: req.body.is_for_current_client,
        isForCurrentOrganization: req.body.is_for_current_organization,
        isForCurrentContainer: req.body.is_for_current_container
      }, function (err, response) {
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

  /**
   * GET Entity Record Access
   *
   * req.query.token - user token
   * req.query.id - id of entity
   * req.query.uuid - uuid of entity
   * req.query.table_name - table name of entity
   * req.query.language - login language
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.get('/record-access', (req, res) => {
    if (req.query) {
      service.getRecordAccess({
        token: req.query.token,
        language: req.query.language,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertRecordAccessFromGRPC(response)
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
   * POST Set Record Access
   *
   * req.query.token - user token
   * req.body.id - id of entity
   * req.body.uuid - uuid of entity
   * req.body.table_name - table name of entity
   * req.body.record_accesses - list of access by role
   * record_accesses: [{
   *  role_id,
   *  role_uuid,
   *  role_name,
   *  is_active,
   *  is_exclude,
   *  is_read_only,
   *  is_dependent_entities
   * }]
   * req.query.language - login language
   *
   */
  userInterfaceApi.post('/set-record-access', (req, res) => {
    if (req.body) {
      //  Validate record access
      let recordAccesses = []
      if (req.body.record_accesses) {
        req.body.record_accesses.map(accessToSet => {
          recordAccesses.push({
            roleId: accessToSet.role_id,
            roleUuid: accessToSet.role_uuid,
            roleName: accessToSet.role_name,
            isActive: accessToSet.is_active,
            isExclude: accessToSet.is_exclude,
            isReadOnly: accessToSet.is_read_only,
            isDependentEntities: accessToSet.is_dependent_entities
          })
        })
      }
      service.setRecordAccess({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        tableName: req.body.table_name,
        recordAccesses: recordAccesses
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertRecordAccessFromGRPC(response)
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
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.uuid - browser uuid
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

  /**
   * POST List Lookup Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.filters - query filters
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-lookup-items', (req, res) => {
    if (req.body) {
      service.listLookupItems({
        token: req.query.token,
        language: req.query.language,
        //  Running parameters
        tableName: req.body.table_name,
        //  DSL Query
        filters: req.body.filters,
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
              records: response.getRecordsList().map(lookupItem => {
                return convertLookupFromGRPC(lookupItem)
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
   * POST Get Lookup Item
   *
   * req.query.token - user token
   * req.query.language - login language
   * Body:
   * req.body.filters - query filters
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/get-lookup-item', (req, res) => {
    if (req.body) {
      service.getLookupItem({
        token: req.query.token,
        language: req.query.language,
        //  Running parameters
        tableName: req.body.table_name,
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
            result: convertLookupFromGRPC(response)
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
   * POST List Translations
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.table_name - table name (Mandatory for get translation)
   * req.body.uuid - custom query instead a table name based on SQL
   * req.body.id - id reference
   * req.body.uuid - uuid reference
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/list-translations', (req, res) => {
    if (req.body) {
      service.listTranslations({
        token: req.query.token,
        language: req.query.language,
        id: req.body.id,
        uuid: req.body.uuid,
        //  Running parameters
        tableName: req.body.table_name,
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
              records: response.getTranslationsList().map(translation => {
                return convertTranslationFromGRPC(translation)
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
   * POST Get Default Value
   *
   * req.query.token - user token
   * req.query.language - login language
   * Body:
   * req.body.query - default valuen query
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/get-default-value', (req, res) => {
    if (req.body) {
      service.getDefaultValue({
        token: req.query.token,
        language: req.query.language,
        //  Default Value Query
        query: req.body.query
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertValueFromGRPC(response)
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
   * POST Run Callout
   *
   * req.query.token - user token
   * req.query.language - login language
   * Body:
   * req.body.table_name - Table name of calling
   * req.body.window_uuid - uuid of window from call
   * req.body.tab_uuid - uuid of tab from call
   * req.body.callout - callout to call
   * req.body.column_name - column name of call
   * req.body.old_value - old value for column
   * req.body.value - new value of column
   * req.body.window_no - window number
   * req.body.attributes - attributes of entity
   "attributes": [
      {
        "key": "AD_Client_ID",
        "value": 1000000
      },
      {
        "key": "AD_Org_ID",
        "value": 1000000
      },
      {
        "key": "Created",
        "value": "2020-10-13T16:14:23.000Z"
      },
      {
        "key": "CreatedBy",
        "value": 1000017
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
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/run-callout', (req, res) => {
    if (req.body) {
      service.runCallout({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        windowUuid: req.body.window_uuid,
        tabUuid: req.body.tab_uuid,
        callout: req.body.callout,
        columnName: req.body.column_name,
        oldValue: req.body.old_value,
        value: req.body.value,
        windowNo: req.body.window_no,
        attributes: req.body.attributes
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertCalloutFromGRPC(response)
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
   * req.query.table_name - TableName
   * req.body.id - id of record
   * req.body.uuid - uuid of record
   * req.body.log_id - id o log
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userInterfaceApi.post('/rollback-entity', (req, res) => {
    if (req.body) {
      service.rollbackEntity({
        token: req.query.token,
        language: req.query.language,
        tableName: req.body.table_name,
        uuid: req.body.uuid,
        id: req.body.id,
        logId: req.body.log_id
      }, function (err, response) {
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

  return userInterfaceApi;
};
