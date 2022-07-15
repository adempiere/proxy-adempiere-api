import { Router } from 'express';

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

  /**
   * GET window definition
   *
   * req.query.token - user token
   * req.query.id - id of window
   * req.query.uuid - uuid of window
   * req.query.language - login language
   *
   *
   * Details:
   */
  api.get('/window', (req, res) => {
    if (req.query) {
      service.getWindow({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
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
   * req.query.language - login language
   *
   *
   * Details:
   */
  api.get('/process', (req, res) => {
    if (req.query) {
      service.getProcess({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertProcess(response)
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
   * GET browser definition
   *
   * req.query.token - user token
   * req.query.id - id of browser
   * req.query.uuid - uuid of browser
   * req.query.language - login language
   *
   *
   * Details:
   */
  api.get('/browser', (req, res) => {
    if (req.query) {
      service.getBrowser({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
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
   * req.query.language - login language
   *
   *
   * Details:
   */
  api.get('/form', (req, res) => {
    if (req.query) {
      service.getForm({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
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
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/field', (req, res) => {
    if (req.query) {
      service.getField({
        token: req.query.token,
        language: req.query.language,
        uuid: req.query.uuid,
        columnUuid: req.query.column_uuid,
        elementUuid: req.query.element_uuid,
        tableName: req.query.table_name,
        columnName: req.query.column_name,
        elementColumnName: req.query.element_column_name
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertField(response)
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
   * GET Reference
   *
   * req.query.token - user token
   * req.query.uuid - uuid of reference
   * req.query.column_name - column name of reference as table dir
   * req.query.language - login language
   *
   * Details:
   */
  api.get('/reference', (req, res) => {
    if (req.query) {
      service.getReference({
        token: req.query.token,
        language: req.query.language,
        uuid: req.query.uuid,
        columnName: req.query.column_name
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertReference(response)
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
   * GET Validation Rule definition
   *
   * req.query.token - user token
   * req.query.id - id of validation
   * req.query.uuid - uuid of validation
   * req.query.language - login language
   *
   *
   * Details:
   */
  api.get('/validation', (req, res) => {
    if (req.query) {
      service.getValidationRule({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
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

  //  Convert form
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

  //  Convert browser
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
      window: convertWindow(browser.getWindow()),
      process: convertProcess(browser.getProcess()),
      is_active: browser.getIsActive(),
      table_name: browser.getTableName(),
      fields: browser.getFieldsList().map(field => {
        return convertField(field)
      }),
      context_column_names: browser.getContextColumnNamesList().map(contextValue => {
        return contextValue
      })
    }
  }

  //  convert window from gRPC
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
      context_info: convertContextInfo(window.getContextInfo()),
      tabs: window.getTabsList().map(tab => {
        return convertTab(tab)
      })
    }
  }

  //  Convert Tabs
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
      context_info: convertContextInfo(tab.getContextInfo()),
      field_group: convertFieldGroup(tab.getFieldGroup()),
      processes: tab.getProcessesList().map(process => {
        return convertProcess(process)
      }),
      fields: tab.getFieldsList().map(field => {
        return convertField(field)
      }),
      context_column_names: tab.getContextColumnNamesList().map(contextValue => {
        return contextValue
      })
    }
  }

  //  Convert process
  function convertProcess (process) {
    if (!process) {
      return undefined
    }
    return {
      id: process.getId(),
      uuid: process.getUuid(),
      name: process.getName(),
      description: process.getDescription(),
      help: process.getHelp(),
      is_report: process.getIsReport(),
      access_level: process.getAccessLevel(),
      show_help: process.getShowHelp(),
      is_direct_print: process.getIsDirectPrint(),
      is_active: process.getIsActive(),
      browser_uuid: process.getBrowserUuid(),
      form_uuid: process.getFormUuid(),
      workflow_uuid: process.getWorkflowUuid(),
      report_export_types: process.getReportExportTypesList().map(reportExportType => {
        return convertReportExportType(reportExportType)
      }),
      parameters: process.getParametersList().map(parameter => {
        return convertField(parameter)
      })
    }
  }

  //  Convert report export type
  function convertReportExportType (reportExportType) {
    if (!reportExportType) {
      return undefined
    }
    return {
      name: reportExportType.getName(),
      description: reportExportType.getDescription(),
      type: reportExportType.getType()
    }
  }

  //  Convert field
  function convertField (field) {
    if (!field) {
      return undefined
    }
    return {
      id: field.getId(),
      uuid: field.getUuid(),
      name: field.getName(),
      description: field.getDescription(),
      help: field.getHelp(),
      sequence: field.getSequence(),
      column_name: field.getColumnName(),
      element_name: field.getElementName(),
      is_displayed: field.getIsDisplayed(),
      is_displayed_grid: field.getIsDisplayedGrid(),
      is_read_only: field.getIsReadOnly(),
      is_allow_copy: field.getIsAllowCopy(),
      is_encrypted: field.getIsEncrypted(),
      is_same_line: field.getIsSameLine(),
      is_heading: field.getIsHeading(),
      is_field_only: field.getIsFieldOnly(),
      is_quick_entry: field.getIsQuickEntry(),
      is_mandatory: field.getIsMandatory(),
      is_key: field.getIsKey(),
      is_parent: field.getIsParent(),
      is_updateable: field.getIsUpdateable(),
      is_identifier: field.getIsIdentifier(),
      is_allow_logging: field.getIsAllowLogging(),
      is_selection_column: field.getIsSelectionColumn(),
      is_range: field.getIsRange(),
      is_always_updateable: field.getIsAlwaysUpdateable(),
      is_translated: field.getIsTranslated(),
      identifier_sequence: field.getIdentifierSequence(),
      display_logic: field.getDisplayLogic(),
      display_type: field.getDisplayType(),
      default_value: field.getDefaultValue(),
      read_only_logic: field.getReadOnlyLogic(),
      mandatory_logic: field.getMandatoryLogic(),
      callout: field.getCallout(),
      column_sql: field.getColumnSql(),
      v_format: field.getVFormat(),
      value_min: field.getValueMin(),
      value_max: field.getValueMax(),
      format_pattern: field.getFormatPattern(),
      context_info: convertContextInfo(field.getContextInfo()),
      field_group: convertFieldGroup(field.getFieldGroup()),
      field_definition: convertFieldDefinition(field.getFieldDefinition()),
      reference: convertReference(field.getReference()),
      process: convertProcess(field.getProcess()),
      is_query_criteria: field.getIsQueryCriteria(),
      is_order_by: field.getIsOrderBy(),
      seq_no_grid: field.getSeqNoGrid(),
      sort_no: field.getSortNo(),
      is_info_only: field.getIsInfoOnly(),
      is_active: field.getIsActive(),
      default_value_to: field.getDefaultValueTo(),
      field_length: field.getFieldLength(),
      context_column_names: field.getContextColumnNamesList().map(contextValue => {
        return contextValue
      })
    }
  }

  //  Convert Field Definition
  function convertFieldDefinition (fieldDefinition) {
    if (!fieldDefinition) {
      return undefined
    }
    return {
      id: fieldDefinition.getId(),
      uuid: fieldDefinition.getUuid(),
      value: fieldDefinition.getValue(),
      name: fieldDefinition.getName(),
      field_group_type: fieldDefinition.getFieldGroupType(),
      is_active: fieldDefinition.getIsActive(),
      conditions: fieldDefinition.getConditionsList().map(condition => {
        return convertFieldCondition(condition)
      })
    }
  }

  //  Convert Field Condition
  function convertFieldCondition (fieldCondition) {
    if (!fieldCondition) {
      return undefined
    }
    return {
      id: fieldCondition.getId(),
      uuid: fieldCondition.getUuid(),
      condition: fieldCondition.getCondition(),
      stylesheet: fieldCondition.getStylesheet(),
      is_active: fieldCondition.getIsActive()
    }
  }

  //  Convert Reference
  function convertReference (reference) {
    if (!reference) {
      return undefined
    }
    return {
      table_name: reference.getTableName(),
      key_column_name: reference.getKeyColumnName(),
      display_column_name: reference.getDisplayColumnName(),
      zoom_windows: reference.getZoomWindowsList().map(zoomWindow => {
        return convertZoomWindow(zoomWindow)
      }),
      context_column_names: reference.getContextColumnNamesList().map(columnName => {
        return columnName
      })
    }
  }

  //  Convert Zoom Window
  function convertZoomWindow (zoomWindow) {
    if (!zoomWindow) {
      return undefined
    }
    return {
      id: zoomWindow.getId(),
      uuid: zoomWindow.getUuid(),
      name: zoomWindow.getName(),
      description: zoomWindow.getDescription(),
      is_sales_transaction: zoomWindow.getIsSalesTransaction(),
      is_active: zoomWindow.getIsActive()
    }
  }

  //  Convert Validation Rule
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

  //  Convert Context info
  function convertContextInfo (contextInfo) {
    if (!contextInfo) {
      return undefined
    }
    return {
      id: contextInfo.getId(),
      uuid: contextInfo.getUuid(),
      name: contextInfo.getName(),
      description: contextInfo.getDescription(),
      sql_statement: contextInfo.getSqlStatement(),
      message_text: convertMessageText(contextInfo.getMessageText()),
      is_active: contextInfo.getIsActive()
    }
  }

  //  Convert Message Text
  function convertMessageText (messageText) {
    if (!messageText) {
      return undefined
    }
    return {
      id: messageText.getId(),
      uuid: messageText.getUuid(),
      value: messageText.getValue(),
      message_type: messageText.getMessageType(),
      message_text: messageText.getMessageText(),
      message_tip: messageText.getMessageTip(),
      is_active: messageText.getIsActive()
    }
  }

  //  Convert Field group
  function convertFieldGroup (fieldGroup) {
    if (!fieldGroup) {
      return undefined
    }
    return {
      id: fieldGroup.getId(),
      uuid: fieldGroup.getUuid(),
      name: fieldGroup.getName(),
      field_group_type: fieldGroup.getFieldGroupType(),
      is_active: fieldGroup.getIsActive()
    }
  }

  return api;
};
