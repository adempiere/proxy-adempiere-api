/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client Convert Utils                           *
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                   *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

// Convert Zoom Window
function getZoomWindowFromGRPC (zoomWindowToConvert) {
  if (!zoomWindowToConvert) {
    return undefined
  }
  return {
    id: zoomWindowToConvert.getId(),
    uuid: zoomWindowToConvert.getUuid(),
    name: zoomWindowToConvert.getName(),
    description: zoomWindowToConvert.getDescription(),
    is_sales_transaction: zoomWindowToConvert.getIsSalesTransaction(),
    is_active: zoomWindowToConvert.getIsActive()
  }
}

// Convert Reference
export function getReferenceFromGRPC (referenceToConvert) {
  if (!referenceToConvert) {
    return undefined
  }
  return {
    id: referenceToConvert.getId(),
    uuid: referenceToConvert.getUuid(),
    table_name: referenceToConvert.getTableName(),
    key_column_name: referenceToConvert.getKeyColumnName(),
    display_column_name: referenceToConvert.getDisplayColumnName(),
    zoom_windows: referenceToConvert.getZoomWindowsList().map(zoomWindow => {
      return getZoomWindowFromGRPC(zoomWindow)
    }),
    context_column_names: referenceToConvert.getContextColumnNamesList().map(columnName => {
      return columnName
    })
  }
}

// Convert Message Text
function getMessageTextFromGRPC (messageText) {
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

// Convert Context info
export function getContextInfoFromGRPC (contextInfo) {
  if (!contextInfo) {
    return undefined
  }
  return {
    id: contextInfo.getId(),
    uuid: contextInfo.getUuid(),
    name: contextInfo.getName(),
    description: contextInfo.getDescription(),
    sql_statement: contextInfo.getSqlStatement(),
    message_text: getMessageTextFromGRPC(
      contextInfo.getMessageText()
    ),
    is_active: contextInfo.getIsActive()
  }
}

// Convert Field group
export function getFieldGroupFromGRPC (fieldGroup) {
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

// Convert Field Dependent
function getDependentFieldFromGRPC (fieldDependent) {
  if (!fieldDependent) {
    return undefined
  }
  return {
    container_id: fieldDependent.getContainerId(),
    container_uuid: fieldDependent.getContainerUuid(),
    container_name: fieldDependent.getContainerName(),
    id: fieldDependent.getId(),
    uuid: fieldDependent.getUuid(),
    column_name: fieldDependent.getColumnName()
  }
}

// Convert Field Condition
function getFieldConditionFromGRPC (fieldCondition) {
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

// Convert Field Definition
function getFieldDefinitionFromGRPC (fieldDefinition) {
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
      return getFieldConditionFromGRPC(condition)
    })
  }
}

// Convert report export type
function getReportExportTypeFromGRPC (reportExportType) {
  if (!reportExportType) {
    return undefined
  }
  return {
    name: reportExportType.getName(),
    description: reportExportType.getDescription(),
    type: reportExportType.getType()
  }
}

// Convert process
export function getProcessFromGRPC (process) {
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
      return getReportExportTypeFromGRPC(reportExportType)
    }),
    parameters: process.getParametersList().map(parameter => {
      return getFiledFromGRPC(parameter)
    })
  }
}

// Convert field
export function getFiledFromGRPC (fieldToConvert) {
  if (!fieldToConvert) {
    return undefined
  }
  return {
    id: fieldToConvert.getId(),
    uuid: fieldToConvert.getUuid(),
    name: fieldToConvert.getName(),
    description: fieldToConvert.getDescription(),
    help: fieldToConvert.getHelp(),
    sequence: fieldToConvert.getSequence(),
    column_id: fieldToConvert.getColumnId(),
    column_uuid: fieldToConvert.getColumnUuid(),
    column_name: fieldToConvert.getColumnName(),
    column_sql: fieldToConvert.getColumnSql(),
    element_id: fieldToConvert.getElementId(),
    element_uuid: fieldToConvert.getElementUuid(),
    element_name: fieldToConvert.getElementName(),
    is_displayed: fieldToConvert.getIsDisplayed(),
    is_displayed_grid: fieldToConvert.getIsDisplayedGrid(),
    is_read_only: fieldToConvert.getIsReadOnly(),
    is_allow_copy: fieldToConvert.getIsAllowCopy(),
    is_encrypted: fieldToConvert.getIsEncrypted(),
    is_same_line: fieldToConvert.getIsSameLine(),
    is_heading: fieldToConvert.getIsHeading(),
    is_field_only: fieldToConvert.getIsFieldOnly(),
    is_quick_entry: fieldToConvert.getIsQuickEntry(),
    is_mandatory: fieldToConvert.getIsMandatory(),
    is_key: fieldToConvert.getIsKey(),
    is_parent: fieldToConvert.getIsParent(),
    is_updateable: fieldToConvert.getIsUpdateable(),
    is_identifier: fieldToConvert.getIsIdentifier(),
    is_allow_logging: fieldToConvert.getIsAllowLogging(),
    is_selection_column: fieldToConvert.getIsSelectionColumn(),
    is_range: fieldToConvert.getIsRange(),
    is_always_updateable: fieldToConvert.getIsAlwaysUpdateable(),
    is_translated: fieldToConvert.getIsTranslated(),
    identifier_sequence: fieldToConvert.getIdentifierSequence(),
    display_logic: fieldToConvert.getDisplayLogic(),
    display_type: fieldToConvert.getDisplayType(),
    default_value: fieldToConvert.getDefaultValue(),
    read_only_logic: fieldToConvert.getReadOnlyLogic(),
    mandatory_logic: fieldToConvert.getMandatoryLogic(),
    callout: fieldToConvert.getCallout(),
    v_format: fieldToConvert.getVFormat(),
    value_min: fieldToConvert.getValueMin(),
    value_max: fieldToConvert.getValueMax(),
    format_pattern: fieldToConvert.getFormatPattern(),
    context_info: getContextInfoFromGRPC(
      fieldToConvert.getContextInfo()
    ),
    field_group: getFieldGroupFromGRPC(
      fieldToConvert.getFieldGroup()
    ),
    field_definition: getFieldDefinitionFromGRPC(
      fieldToConvert.getFieldDefinition()
    ),
    reference: getReferenceFromGRPC(
      fieldToConvert.getReference()
    ),
    process: getProcessFromGRPC(
      fieldToConvert.getProcess()
    ),
    is_query_criteria: fieldToConvert.getIsQueryCriteria(),
    is_order_by: fieldToConvert.getIsOrderBy(),
    seq_no_grid: fieldToConvert.getSeqNoGrid(),
    sort_no: fieldToConvert.getSortNo(),
    is_info_only: fieldToConvert.getIsInfoOnly(),
    is_active: fieldToConvert.getIsActive(),
    default_value_to: fieldToConvert.getDefaultValueTo(),
    field_length: fieldToConvert.getFieldLength(),
    context_column_names: fieldToConvert.getContextColumnNamesList().map(contextValue => {
      return contextValue
    }),
    dependent_fields: fieldToConvert.getDependentFieldsList().map(dependentField => {
      return getDependentFieldFromGRPC(dependentField);
    })
  }
}
