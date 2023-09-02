/************************************************************************************
 * Copyright (C) 2018-Present E.R.P. Consultores y Asociados, C.A.                  *
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
  getReferenceFromGRPC,
  getContextInfoFromGRPC,
  getFieldGroupFromGRPC,
  getProcessFromGRPC,
  getFiledFromGRPC
} from '../util/dictionaryFromGRPC';

// Convert Tabs
function convertTab (tab) {
  if (!tab) {
    return undefined
  }
  return {
    id: tab.getId(),
    uuid: tab.getUuid(),
    name: tab.getName(),
    description: tab.getDescription(),
    help: tab.getHelp(),
    table_name: tab.getTableName(),
    sequence: tab.getSequence(),
    tab_level: tab.getTabLevel(),
    is_active: tab.getIsActive(),
    is_single_row: tab.getIsSingleRow(),
    is_advanced_tab: tab.getIsAdvancedTab(),
    is_has_tree: tab.getIsHasTree(),
    is_info_tab: tab.getIsInfoTab(),
    is_sort_tab: tab.getIsSortTab(),
    is_translation_tab: tab.getIsTranslationTab(),
    is_read_only: tab.getIsReadOnly(),
    is_insert_record: tab.getIsInsertRecord(),
    is_view: tab.getIsView(),
    is_deleteable: tab.getIsDeleteable(),
    is_document: tab.getIsDocument(),
    is_change_log: tab.getIsChangeLog(),
    access_level: tab.getAccessLevel(),
    link_column_name: tab.getLinkColumnName(),
    sort_order_column_name: tab.getSortOrderColumnName(),
    sort_yes_no_column_name: tab.getSortYesNoColumnName(),
    parent_column_name: tab.getParentColumnName(),
    display_logic: tab.getDisplayLogic(),
    read_only_logic: tab.getReadOnlyLogic(),
    commit_warning: tab.getCommitWarning(),
    parent_tab_uuid: tab.getParentTabUuid(),
    context_info: getContextInfoFromGRPC(
      tab.getContextInfo()
    ),
    field_group: getFieldGroupFromGRPC(
      tab.getFieldGroup()
    ),
    processes: tab.getProcessesList().map(process => {
      return getProcessFromGRPC(process)
    }),
    fields: tab.getFieldsList().map(field => {
      return getFiledFromGRPC(field)
    }),
    context_column_names: tab.getContextColumnNamesList().map(contextValue => {
      return contextValue
    })
  }
}

// convert window from gRPC
function convertWindow (window) {
  if (!window) {
    return undefined
  }
  return {
    id: window.getId(),
    uuid: window.getUuid(),
    name: window.getName(),
    description: window.getDescription(),
    help: window.getHelp(),
    is_active: window.getIsActive(),
    is_sales_transaction: window.getIsSalesTransaction(),
    window_type: window.getWindowType(),
    context_info: getContextInfoFromGRPC(
      window.getContextInfo()
    ),
    tabs: window.getTabsList().map(tab => {
      return convertTab(tab)
    })
  }
}

// Convert browser
function convertBrowser (browser) {
  if (!browser) {
    return undefined
  }
  return {
    id: browser.getId(),
    uuid: browser.getUuid(),
    value: browser.getValue(),
    name: browser.getName(),
    description: browser.getDescription(),
    help: browser.getHelp(),
    access_level: browser.getAccessLevel(),
    is_updateable: browser.getIsUpdateable(),
    is_deleteable: browser.getIsDeleteable(),
    is_selected_by_default: browser.getIsSelectedByDefault(),
    is_collapsible_by_default: browser.getIsCollapsibleByDefault(),
    is_executed_query_by_default: browser.getIsExecutedQueryByDefault(),
    is_show_total: browser.getIsShowTotal(),
    view_uuid: browser.getViewUuid(),
    window: convertWindow(
      browser.getWindow()
    ),
    process: getProcessFromGRPC(
      browser.getProcess()
    ),
    is_active: browser.getIsActive(),
    table_name: browser.getTableName(),
    fields: browser.getFieldsList().map(field => {
      return getFiledFromGRPC(field)
    }),
    context_column_names: browser.getContextColumnNamesList().map(contextValue => {
      return contextValue
    })
  }
}

// Convert form
function convertForm (form) {
  if (!form) {
    return undefined
  }
  return {
    id: form.getId(),
    uuid: form.getUuid(),
    name: form.getName(),
    description: form.getDescription(),
    help: form.getHelp(),
    access_level: form.getAccessLevel(),
    file_name: form.getFileName(),
    is_active: form.getIsActive()
  }
}

// Convert Validation Rule
function convertValidationRule (validationRule) {
  if (!validationRule) {
    return undefined
  }
  return {
    id: validationRule.getId(),
    uuid: validationRule.getUuid(),
    name: validationRule.getName(),
    description: validationRule.getDescription(),
    validation_code: validationRule.getValidationCode(),
    type: validationRule.getType()
  }
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('.././grpc-api/services/dictionary');
  const service = new ServiceApi(config);

  /**
   * GET window definition
   *
   * req.query.token - user token
   * req.query.id - id of window
   * req.query.uuid - uuid of window
   *
   *
   * Details:
   */
  api.get('/window', (req, res) => {
    if (req.query) {
      service.getWindow({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertWindow(response)
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
   * GET process definition
   *
   * req.query.token - user token
   * req.query.id - id of process
   * req.query.uuid - uuid of process
   *
   *
   * Details:
   */
  api.get('/process', (req, res) => {
    if (req.query) {
      service.getProcess({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getProcessFromGRPC(response)
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
   * GET browser definition
   *
   * req.query.token - user token
   * req.query.id - id of browser
   * req.query.uuid - uuid of browser
   *
   *
   * Details:
   */
  api.get('/browser', (req, res) => {
    if (req.query) {
      service.getBrowser({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertBrowser(response)
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
   * GET Form definition
   *
   * req.query.token - user token
   * req.query.id - id of form
   * req.query.uuid - uuid of form
   *
   *
   * Details:
   */
  api.get('/form', (req, res) => {
    if (req.query) {
      service.getForm({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertForm(response)
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
   * GET Field
   *
   * req.query.token - user token
   * req.query.uuid - uuid of field
   * req.query.column_uuid - column uuid of field
   * req.query.element_uuid - element uuid of field
   * req.query.table_name - table name of field
   * req.query.column_name - column name of field
   * req.query.element_column_name - element column name of field
   *
   * Details:
   */
  api.get('/field', (req, res) => {
    if (req.query) {
      service.getField({
        token: req.headers.authorization,
        uuid: req.query.uuid,
        columnUuid: req.query.column_uuid,
        elementUuid: req.query.element_uuid,
        tableName: req.query.table_name,
        columnName: req.query.column_name,
        elementColumnName: req.query.element_column_name
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getFiledFromGRPC(response)
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
   * GET Reference
   *
   * req.query.token - user token
   * req.query.uuid - uuid of reference
   * req.query.column_name - column name of reference as table dir
   *
   * Details:
   */
  api.get('/reference', (req, res) => {
    if (req.query) {
      service.getReference({
        token: req.headers.authorization,
        uuid: req.query.uuid,
        columnName: req.query.column_name
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getReferenceFromGRPC(response)
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
   * GET Validation Rule definition
   *
   * req.query.token - user token
   * req.query.id - id of validation
   * req.query.uuid - uuid of validation
   *
   *
   * Details:
   */
  api.get('/validation', (req, res) => {
    if (req.query) {
      service.getValidationRule({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertValidationRule(response)
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
   * GET Identifiers Fields List
   *
   * req.query.token - user token
   * req.query.table_uuid - id of table
   * req.query.table_id - uuid of table
   * req.query.tab_uuid - id of tab
   * req.query.tab_id - uuid of tab
   *
   */
  api.get('/identifiers-fields', (req, res) => {
    if (req.query) {
      service.listIdentifiersFields({
        token: req.headers.authorization,
        // with table
        tableUuid: req.query.table_uuid,
        tableId: req.query.table_id,
        tableName: req.query.table_name,
        // with tab
        tabUuid: req.query.tab_uuid,
        tabId: req.query.tab_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getFieldsList().map(field => {
                return getFiledFromGRPC(field);
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
   * GET Table Search Fields List
   *
   * req.query.token - user token
   * req.query.table_uuid - id of table
   * req.query.table_id - uuid of table
   * req.query.tab_uuid - id of tab
   * req.query.tab_id - uuid of tab
   *
   */
  api.get('/table-search-fields', (req, res) => {
    if (req.query) {
      service.listTableSearchFields({
        token: req.headers.authorization,
        // with table
        tableUuid: req.query.table_uuid,
        tableId: req.query.table_id,
        tableName: req.query.table_name,
        // with tab
        tabUuid: req.query.tab_uuid,
        tabId: req.query.tab_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getFieldsList().map(field => {
                return getFiledFromGRPC(field);
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
