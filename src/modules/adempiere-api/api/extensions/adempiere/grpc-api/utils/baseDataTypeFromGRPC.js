/*************************************************************************************
 * Product: ADempiere gRPC Base Data Type Client Convert Utils                       *
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

const stubFile = require('.././grpc/proto/base_data_type_pb.js');

/**
 * Get integer from a grpc value
 * @param {Value.INTEGER} integerValueToConvert
 * @return {number}
 */
function getIntegerValueFromGRPC (integerValueToConvert) {
  const { isEmptyValue } = require('./valueUtils.js');

  if (isEmptyValue(integerValueToConvert)) {
    return undefined;
  }
  return integerValueToConvert.getIntValue();
}

/**
 * Get value from Decimal definition
 * @param {DECIMAL.decimal_value} decimalToConvert
 * @return {number}
 */
function getDecimalFromGRPC (decimalToConvert) {
  const { isEmptyValue } = require('./valueUtils.js');

  if (isEmptyValue(decimalToConvert)) {
    return undefined;
  }

  const value = decimalToConvert.getDecimalValue();
  if (isEmptyValue(value)) {
    return undefined;
  }

  // return number value
  return Number(value);
}

/**
 * Get Decimal from Value definition
 * @param {Value.DECIMAL} decimalValueToConvert
 * @return {number}
 */
function getDecimalValueFromGRPC (decimalValueToConvert) {
  const { isEmptyValue } = require('./valueUtils.js');
  const decimalObject = decimalValueToConvert.getDecimalValue();

  if (isEmptyValue(decimalObject)) {
    return undefined;
  }

  // Convert it
  return getDecimalFromGRPC(decimalObject);
}

/**
 * Get Boolean from a grpc value
 * @param {Value.BOOLEAN} booleanValueToConvert
 * @return
 */
function getBooleanValueFromGRPC (booleanValueToConvert) {
  const { isEmptyValue } = require('./valueUtils.js');

  if (isEmptyValue(booleanValueToConvert)) {
    return false;
  }
  return booleanValueToConvert.getBooleanValue();
}

/**
 * Get String from a grpc value
 * @param {Value.STRING} stringValueToConvert
 * @param uppercase
 * @return {string}
 */
function getStringValueFromGRPC (stringValueToConvert, uppercase = false) {
  const { isEmptyValue } = require('./valueUtils.js');

  if (isEmptyValue(stringValueToConvert)) {
    return undefined;
  }

  let stringValue = stringValueToConvert.getStringValue();
  // To Upper case
  if (uppercase) {
    stringValue = stringValue.toUpperCase();
  }
  return stringValue;
}

/**
 * Get Date from a grpc value
 * @param {Value.DATE} dateValueToConvert value to convert
 * @return {date}
 */
function getDateValueFromGRPC (dateValueToConvert) {
  const { isEmptyValue } = require('./valueUtils.js');

  if (!isEmptyValue(dateValueToConvert) && dateValueToConvert.getLongValue() > 0) {
    return new Date(dateValueToConvert.getLongValue());
  }
  return undefined;
}

function getValueFromGRPC (valueToConvert) {
  const { isEmptyValue } = require('./valueUtils.js');

  if (isEmptyValue(valueToConvert)) {
    return undefined;
  }

  const { Value } = stubFile;
  const { ValueType } = Value;

  let returnValue;
  switch (valueToConvert.getValueType()) {
    case ValueType.INTEGER:
      returnValue = getIntegerValueFromGRPC(valueToConvert);
      break;
    // data type Number (float)
    case ValueType.DECIMAL:
      returnValue = getDecimalValueFromGRPC(valueToConvert);
      break;
    // data type Boolean
    case ValueType.BOOLEAN:
      returnValue = getBooleanValueFromGRPC(valueToConvert);
      break;
    // data type String
    case ValueType.STRING:
      returnValue = getStringValueFromGRPC(valueToConvert);
      break;
    // data type Date
    case ValueType.DATE:
      returnValue = getDateValueFromGRPC(valueToConvert);
      break;
    // empty value
    default:
    case ValueType.UNKNOWN:
      returnValue = undefined;
      break;
  }
  return returnValue;
}

/**
 * Get all operator or get key value type from value
 * @param {string} key
 * @param {number} value
 * @returns {number|string|object}
    VOID = 0;
    EQUAL = 1;
    NOT_EQUAL = 2;
    LIKE = 3;
    NOT_LIKE = 4;
    GREATER = 5;
    GREATER_EQUAL = 6;
    LESS = 7;
    LESS_EQUAL = 8;
    BETWEEN = 9;
    NOT_BETWEEN = 10;
    NOT_NULL = 11;
    NULL = 12;
    IN = 13;
    NOT_IN = 14;
 */
function getOperator ({ key, value }) {
  const { getValueOrKey } = require('./convertEnums.js')
  const { Operator } = require('.././grpc/proto/base_data_type_pb.js');

  return getValueOrKey({
    list: Operator,
    key,
    value
  });
}

/**
 * Get Business Partner Convert From gRPC
 */
function getBusinessPartnerFromGRPC (businessPartnerToConvert) {
  if (!businessPartnerToConvert) {
    return undefined;
  }
  return {
    uuid: businessPartnerToConvert.getUuid(),
    id: businessPartnerToConvert.getId(),
    value: businessPartnerToConvert.getValue(),
    tax_id: businessPartnerToConvert.getTaxId(),
    duns: businessPartnerToConvert.getDuns(),
    naics: businessPartnerToConvert.getNaics(),
    name: businessPartnerToConvert.getName(),
    last_name: businessPartnerToConvert.getLastName(),
    description: businessPartnerToConvert.getDescription()
  };
}

function getReportOutputFromGRPC (reportOutputToConvert) {
  if (!reportOutputToConvert) {
    return undefined;
  }
  return {
    uuid: reportOutputToConvert.getUuid(),
    name: reportOutputToConvert.getName(),
    description: reportOutputToConvert.getDescription(),
    file_name: reportOutputToConvert.getFileName(),
    output: reportOutputToConvert.getOutput(),
    mime_type: reportOutputToConvert.getMimeType(),
    data_cols: reportOutputToConvert.getDataCols(),
    data_rows: reportOutputToConvert.getDataRows(),
    header_name: reportOutputToConvert.getHeaderName(),
    footer_name: reportOutputToConvert.getFooterName(),
    print_format_uuid: reportOutputToConvert.getPrintFormatUuid(),
    report_view_uuid: reportOutputToConvert.getReportViewUuid(),
    table_name: reportOutputToConvert.getTableName(),
    output_stream: reportOutputToConvert.getOutputStream(),
    output_stream_asB64: reportOutputToConvert.getOutputStream_asB64(),
    output_stream_asU8: reportOutputToConvert.getOutputStream_asU8(),
    report_type: reportOutputToConvert.getReportType()
  };
}

function getProcessInfoLogFromGRPC (processInfoLog) {
  if (!processInfoLog) {
    return undefined;
  }
  return {
    id: processInfoLog.getRecordId(),
    log: processInfoLog.getLog()
  };
}

function getProcesInstanceParameterFromGRPC (processInstanceParameter) {
  if (!processInstanceParameter) {
    return undefined;
  }
  return {
    id: processInstanceParameter.getId(),
    uuid: processInstanceParameter.getUuid(),
    name: processInstanceParameter.getName(),
    column_name: processInstanceParameter.getColumnName(),
    value: getValueFromGRPC(
      processInstanceParameter.getValue()
    ),
    value_to: getValueFromGRPC(
      processInstanceParameter.getValueTo()
    )
  };
}

function getProcessLogFromGRPC (processLog) {
  if (!processLog) {
    return undefined;
  }
  const { getValuesMapFromGRPC } = require('./valueUtilsFromGRPC.js');

  return {
    uuid: processLog.getUuid(),
    instance_uuid: processLog.getInstanceUuid(),
    name: processLog.getName(),
    description: processLog.getDescription(),
    is_error: processLog.getIsError(),
    summary: processLog.getSummary(),
    result_table_name: processLog.getResultTableName(),
    is_processing: processLog.getIsProcessing(),
    last_run: processLog.getLastRun(),
    logs_list: processLog.getLogsList().map(log => {
      return getProcessInfoLogFromGRPC(
        log
      );
    }),
    parameters: getValuesMapFromGRPC({
      mapToConvert: processLog.getParametersMap(),
      returnType: 'object'
    }),
    process_intance_parameters_list: processLog.getProcessIntanceParametersList().map(processPara => {
      return getProcesInstanceParameterFromGRPC(processPara);
    }),
    output: getReportOutputFromGRPC(
      processLog.getOutput()
    )
  };
}

function getRecordReferenceInfoFromGRPC (referenceInfo) {
  if (!referenceInfo) {
    return undefined;
  }
  return {
    uuid: referenceInfo.getUuid(),
    window_uuid: referenceInfo.getWindowUuid(),
    tab_uuid: referenceInfo.getTabUuid(),
    table_name: referenceInfo.getTableName(),
    where_clause: referenceInfo.getWhereClause(),
    record_count: referenceInfo.getRecordCount(),
    column_name: referenceInfo.getColumnName(),
    display_name: referenceInfo.getDisplayName(),
    value: getValueFromGRPC(
      referenceInfo.getValue()
    )
  };
}

function getResourceType ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { ResourceType } = require('.././grpc/proto/file_management_pb');

  return getValueOrKeyEnum({
    list: ResourceType,
    key,
    value
  });
}

function getResourceReferenceFromGRPC (resourceReferenceToConvert) {
  if (!resourceReferenceToConvert) {
    return undefined;
  }
  return {
    reference_type: resourceReferenceToConvert.getResourceType(),
    reference_type_name: getResourceType({
      value: resourceReferenceToConvert.getResourceType()
    }),
    resource_id: resourceReferenceToConvert.getResourceId(),
    id: resourceReferenceToConvert.getId(),
    uuid: resourceReferenceToConvert.getUuid(),
    name: resourceReferenceToConvert.getName(),
    file_name: resourceReferenceToConvert.getFileName(),
    file_size: getDecimalFromGRPC(
      resourceReferenceToConvert.getFileSize()
    ),
    description: resourceReferenceToConvert.getDescription(),
    text_message: resourceReferenceToConvert.getTextMessage(),
    content_type: resourceReferenceToConvert.getContentType(),
    created: resourceReferenceToConvert.getCreated(),
    updated: resourceReferenceToConvert.getUpdated()
  };
}

module.exports = {
  getBooleanValueFromGRPC,
  getDateValueFromGRPC,
  getDecimalFromGRPC,
  getDecimalValueFromGRPC,
  getIntegerValueFromGRPC,
  getStringValueFromGRPC,
  getValueFromGRPC,
  //
  getRecordReferenceInfoFromGRPC,
  getResourceReferenceFromGRPC,
  getOperator,
  getBusinessPartnerFromGRPC,
  getReportOutputFromGRPC,
  getProcessInfoLogFromGRPC,
  getProcessLogFromGRPC
};
