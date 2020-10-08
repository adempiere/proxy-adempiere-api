import { Router } from 'express';

export default ({ config, db, service }) => {
  let userApi = Router();

  /**
   * GET  an user menu
   *
   * req.query.token - user token
   *
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  userApi.get('/window', (req, res) => {
    if (req.query) {
      service.getWindow({
        token: req.query.token,
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

  //  convert window from gRPC
  function convertWindow (window) {
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
      commit_warning: tab.getCommitWarning(),
      query: tab.getQuery(),
      where_clause: tab.getWhereClause(),
      order_by_clause: tab.getOrderByClause(),
      parent_tab_uuid: tab.getParentTabUuid(),
      context_info: convertContextInfo(tab.getContextInfo()),
      field_group: convertFieldGroup(tab.getFieldGroup()),
      processes: tab.getProcessesList().map(process => {
        return convertProcess(process)
      }),
      fields: tab.getFieldsList().map(field => {
        return convertField(field)
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
      // field_definition: convertFieldGroup(field.getFieldGroup()),
      reference: convertReference(field.getReference()),
      process: convertProcess(field.getProcess()),
      is_query_criteria: field.getIsQueryCriteria(),
      is_order_by: field.getIsOrderBy(),
      seq_no_grid: field.getSeqNoGrid(),
      sort_no: field.getSortNo(),
      is_info_only: field.getIsInfoOnly(),
      is_active: field.getIsActive(),
      default_value_to: field.getDefaultValueTo(),
      field_length: field.getFieldLength()
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
      query: reference.getQuery(),
      direct_query: reference.getDirectQuery(),
      validation_code: reference.getValidationCode(),
      zoom_windows: reference.getZoomWindowsList().map(zoomWindow => {
        return convertZoomWindow(zoomWindow)
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

  return userApi;
};
