/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
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
 * Get value from a string to grpc
 * @param {string} value
 * @return {Value.STRING}
 */
function getValueStringToGRPC (value) {
  const { Value } = stubFile;
  const { ValueType } = Value;
  const valueInstance = new Value();

  valueInstance.setValueType(ValueType.STRING);
  if (value) {
    valueInstance.setStringValue(
      String(value)
    );
  }
  return valueInstance;
}

/**
 * Get value from a boolean value to grpc
 * @param {boolean|string} value
 * @return {Value.BOOLEAN}
 */
function getValueBooleanToGRPC (value) {
  const { Value } = require('.././grpc/proto/base_data_type_pb.js');
  const { ValueType } = Value;
  const valueInstance = new Value();

  valueInstance.setValueType(ValueType.BOOLEAN);
  if (typeof value === 'string') {
    value = value.trim();
    value = value !== 'N' && value !== '';
  }

  valueInstance.setBooleanValue(
    Boolean(value)
  );
  return valueInstance;
}

/**
 * Get value from a date to grpc
 * @param {date|string|number} value
 * @return {Value.DATE}
 */
function getValueDateToGRPC (value) {
  const { Value } = require('.././grpc/proto/base_data_type_pb.js');
  const { ValueType } = Value;
  const valueInstance = new Value();

  valueInstance.setValueType(ValueType.DATE);

  const { getTimestamp } = require('./valueUtils.js');
  const longValue = getTimestamp(value);
  valueInstance.setLongValue(longValue);

  return valueInstance;
}

/**
 * Get value from integer to grpc
 * @param {number} value
 * @return {Value.INTEGER}
 */
function getValueIntegerToGRPC (value) {
  const { Value } = stubFile;
  const { ValueType } = Value;
  const valueInstance = new Value();

  valueInstance.setValueType(ValueType.INTEGER);
  const { isEmptyValue } = require('./valueUtils.js');
  if (!isEmptyValue(value) && !Number.isNaN(value)) {
    valueInstance.setIntValue(Number(value));
  }
  return valueInstance;
}

/**
 * Get value from big decimal to grpc
 * @param {number} value
 * @return {Value.DECIMAL}
 */
function getValueDecimalToGRPC (value) {
  const { Value } = require('.././grpc/proto/base_data_type_pb.js');
  const { ValueType } = Value;
  const valueInstance = new Value();

  valueInstance.setValueType(ValueType.DECIMAL);
  valueInstance.setDecimalValue(
    getDecimalToGRPC(value)
  );

  return valueInstance;
}

/**
 * Get big decimal from number to grpc
 * @param {number} numberValue
 * @return {Decimal}
 */
function getDecimalToGRPC (numberValue) {
  const { Decimal } = stubFile;
  const decimalInstance = new Decimal();

  const { isEmptyValue } = require('./valueUtils.js');
  if (!isEmptyValue(numberValue)) {
    if (Number.isInteger(numberValue)) {
      numberValue = numberValue.toFixed(2);
    }
    decimalInstance.setDecimalValue(numberValue.toString());
    // get scale
    const scale = getScaleFromDecimal(numberValue)
    decimalInstance.setScale(scale);
  }
  return decimalInstance;
}

/**
 * Get scale to decimal
 * @param {number} numberValue
 * @returns {number}
 */
function getScaleFromDecimal (numberValue) {
  const index = numberValue
    .toString()
    .indexOf('.');

  let scale = 0;
  if (index !== -1) {
    scale = numberValue.toString().length - index - 1;
  }
  return scale
}

/**
 * Return value converted, compatible with grpc
 * @param {mixed} value
 * @returns {Value}
 */
function getValueToGRPCWithoutValueType ({ value }) {
  let convertedValue;
  // evaluate type of value
  const { getTypeOfValue } = require('./valueUtils.js');
  const typeOfValue = getTypeOfValue(value);
  switch (typeOfValue) {
    case 'Number':
      if (Number.isInteger(value)) {
        // TODO: Improve this date validation (Date.parse is not working)
        if (value && value > 0 && String(value).length >= 13) {
          convertedValue = getValueDateToGRPC(value);
        } else {
          convertedValue = getValueIntegerToGRPC(value);
        }
        break;
      }
      convertedValue = getValueDecimalToGRPC(value);
      break;

    case 'Boolean':
      convertedValue = getValueBooleanToGRPC(value);
      break;

    case 'Date':
      convertedValue = getValueDateToGRPC(value);
      break;

    case 'String':
      // 2021-11-04T22:32:47.142354-10:00
      const regexISO_8061 = /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/;
      const isValidDateISO = regexISO_8061.test(value);
      // YYYY-mm-dd or YYYY/mm/ddd
      const regexStandardDate = /(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/;
      const isValidDateStandard = regexStandardDate.test(value);
      // dd-mm-YYYY or dd/mm/YYYY
      const regexOtherDate = /^[0-9]{1,2}(\/|-)[0-9]{1,2}(\/|-)[0-9]{4}$/;
      const isValidDateOther = regexOtherDate.test(value);

      if (isValidDateISO || isValidDateStandard || isValidDateOther) {
        convertedValue = getValueDateToGRPC(
          new Date(value)
        );
      } else {
        convertedValue = getValueStringToGRPC(value);
      }
      break;

    default:
      const { Value } = require('.././grpc/proto/base_data_type_pb.js');
      convertedValue = new Value();
      break;
  }
  return convertedValue;
}

/**
 * Convert value to grpc with value type
 * @author Edwin Betancourt <EdwinBetanc0urt@outlook.com>
 * @param {mixed} value
 * @param {string} valueType
 * @returns {Value}
 */
function getValueToGRPCWithValueType ({ value, valueType }) {
  const { Value } = require('.././grpc/proto/base_data_type_pb.js');
  const { ValueType } = Value;
  let convertedValue;

  switch (ValueType[valueType]) {
    // data type Number (integer)
    case ValueType.INTEGER:
      convertedValue = getValueIntegerToGRPC(value);
      break;
    // data type Number (float)
    case ValueType.DECIMAL:
      convertedValue = getValueDecimalToGRPC(value);
      break;
    // data type Boolean
    case ValueType.BOOLEAN:
      const { getValueBooleanToGRPC } = require('./baseDataTypeToGRPC');
      convertedValue = getValueBooleanToGRPC(value);
      break;
    // data type String
    case ValueType.STRING:
      convertedValue = getValueStringToGRPC(value);
      break;
    // data type Date
    case ValueType.DATE:
      convertedValue = getValueDateToGRPC(value);
      break;
    // determinate data type
    case ValueType.UNKNOWN:
    default:
      const { isEmptyValue } = require('./valueUtils.js');
      if (!isEmptyValue(value)) {
        convertedValue = getValueToGRPCWithoutValueType({
          value
        });
      }
      break;
  }
  return convertedValue;
}

/**
 * Return value converted, compatible with grpc
 * @param {mixed} value
 * @param {string} valueType
 * @returns {Value}
 */
function getValueToGRPC ({ value, valueType }) {
  const { isEmptyValue } = require('./valueUtils.js');
  if (!isEmptyValue(valueType)) {
    return getValueToGRPCWithValueType({
      value,
      valueType
    });
  }

  return getValueToGRPCWithoutValueType({
    value
  });
}

/**
 * Convert a parameter defined by columnName and value to Value Object
 * @param {string} columnName
 * @param {string} valueType
 * @param {mixed} value
 * @returns KeyValue Object
 */
function getKeyValueToGRPC ({ columnName, value, valueType }) {
  const { KeyValue } = stubFile;
  const keyValue = new KeyValue();
  keyValue.setKey(columnName);

  const convertedValue = getValueToGRPC({
    value,
    valueType
  });
  keyValue.setValue(convertedValue);

  // Return converted value
  return keyValue;
}

/**
 * Convert a list of parameter defined by columnName and value to Value Object
 * @param {number} selectionId keyColumn Value
 * @param {string} selectionUuid
 * @param {array}  selectionValues [{ columName: String, value: Mixed }]
 * @param {KeyValue} KeyValue Object
 */
function getKeyValueSelectionToGRPC ({ selectionId, selectionUuid, selectionValues = [] }) {
  const { KeyValueSelection } = stubFile;
  const selectionInstance = new KeyValueSelection();

  const {
    isEmptyValue, getTypeOfValue, getValidInteger
  } = require('./valueUtils.js');

  // set selection id from record
  selectionInstance.setSelectionId(
    getValidInteger(selectionId)
  );

  // set selection uuid from record
  if (!isEmptyValue(selectionUuid)) {
    selectionInstance.setSelectionUuid(selectionUuid);
  }

  // convert attributes values to selection
  if (getTypeOfValue(selectionValues) === 'String') {
    selectionValues = JSON.parse(selectionValues);
  }

  selectionValues.forEach(selectionItem => {
    if (getTypeOfValue(selectionItem) === 'String') {
      selectionItem = JSON.parse(selectionItem);
    }

    const convertedSelection = getKeyValueToGRPC({
      columnName: selectionItem.columnName,
      valueType: selectionItem.valueType,
      value: selectionItem.value
    });

    selectionInstance.addValues(convertedSelection);
  });

  return selectionInstance;
}

/**
 * Convert a parameter defined by columnName and value to Value Object
 * @param {string} columnName
 * @param {mixed}  value
 * @param {mixed}  valueTo
 * @param {array}  values
 * @param {string} operator
 * @returns Object
 */
function getConditionToGRPC ({ columnName, value, valueTo, values = [], operator = 'VOID', valueType }) {
  const { Condition, Operator } = stubFile;
  const conditionInstance = new Condition();
  conditionInstance.setColumnName(columnName);

  // set operator
  conditionInstance.setOperator(Operator.VOID); // 0
  if (operator) {
    conditionInstance.setOperator(Operator[operator]);
  }

  const { isEmptyValue } = require('./valueUtils.js');
  // set value and value to
  if (!isEmptyValue(value)) {
    if (isEmptyValue(values) && Array.isArray(value)) {
      values = value;
    } else {
      conditionInstance.setValue(
        getValueToGRPC({
          value,
          valueType
        })
      );
    }
  }
  if (!isEmptyValue(valueTo)) {
    conditionInstance.setValueTo(
      getValueToGRPC({
        value: valueTo,
        valueType
      })
    );
  }
  // set values
  if (!isEmptyValue(values)) {
    values.forEach(itemValue => {
      const convertedValue = getValueToGRPC({
        value: itemValue,
        valueType
      });
      conditionInstance.addValues(convertedValue);
    });
  }
  //  Return converted condition
  return conditionInstance;
}

/**
 * Get order by property converted to gRPC
 * @param {string} columnName
 * @param {string} orderType 'ASCENDING' or 'DESCENDING'
 */
function getOrderByPropertyToGRPC ({ columnName, orderType }) {
  const { OrderByProperty, OrderType } = stubFile;
  const orderByInstance = new OrderByProperty();

  orderByInstance.setColumnName(columnName);
  // set order type, default is 0
  orderByInstance.setOrderType(OrderType.ASCENDING);
  if (orderType) {
    orderByInstance.setOrderType(OrderType[orderType]);
  }
  return orderByInstance;
}

/**
 * Get Criteria from Table Name
 * @param {string} tableName
 * @param {string} query
 * @param {string} whereClause
 * @param {string} referenceUuid
 * @param {mixed} value
 * @param {array}  valuesList mixed values
 * @param {array}  filters [{ columnName: String, value: Mixed, valueTo: Mixed, values: Array, operator: String}]
 * @param {array}  orderByColumnsList [{ columnName: String, orderType: Number }]
 * @param {string} orderByClause
 * @param {number} limit
 * @return {object} Criteria instance
 */
function getCriteriaToGRPC ({
  tableName,
  query,
  whereClause,
  referenceUuid,
  value,
  valuesList = [],
  filters = [],
  orderByClause,
  orderByColumnsList = [],
  limit
}) {
  const { Criteria } = stubFile;
  const criteria = new Criteria();

  const { isEmptyValue, getTypeOfValue } = require('./valueUtils.js');
  if (!isEmptyValue(tableName)) {
    criteria.setTableName(tableName);
  }
  if (!isEmptyValue(query)) {
    criteria.setQuery(query);
  }
  if (!isEmptyValue(whereClause)) {
    criteria.setWhereClause(whereClause);
  }

  criteria.setReferenceUuid(referenceUuid);

  // add value
  if (!isEmptyValue(value)) {
    const valueGrpc = getValueToGRPC({
      value
    });
    criteria.addValues(valueGrpc);
  }

  // add values list
  if (!isEmptyValue(valuesList)) {
    valuesList.forEach(itemValue => {
      const valueGrpc = getValueToGRPC({
        value: itemValue
      });
      criteria.addValues(valueGrpc);
    });
  }

  // add conditions
  if (!isEmptyValue(filters)) {
    if (getTypeOfValue(filters) === 'String') {
      filters = JSON.parse(filters);
    }

    filters.forEach(condition => {
      let parsedCondition = condition;
      // set with get method is string value
      if (getTypeOfValue(condition) === 'String') {
        parsedCondition = JSON.parse(condition);
      }

      const criteriaGrpc = getConditionToGRPC({
        columnName: parsedCondition.column_name,
        operator: parsedCondition.operator,
        value: parsedCondition.value,
        valueTo: parsedCondition.value_to,
        values: parsedCondition.values,
        valueType: parsedCondition.value_type
      });
      criteria.addConditions(criteriaGrpc);
    });
  }

  // set order by clause
  if (!isEmptyValue(orderByColumnsList)) {
    orderByColumnsList.forEach(itemOrderBy => {
      const orderBy = getOrderByPropertyToGRPC({
        columnName: itemOrderBy.column_name,
        orderType: itemOrderBy.order_type
      });
      criteria.addOrderByColumn(orderBy);
    });
  }
  if (!isEmptyValue(orderByClause)) {
    criteria.setOrderByClause(orderByClause);
  }

  if (!isEmptyValue(limit)) {
    criteria.setLimit(limit);
  }

  // return criteria
  return criteria;
}

module.exports = {
  // data type
  getValueStringToGRPC,
  getValueBooleanToGRPC,
  getValueDateToGRPC,
  getValueIntegerToGRPC,
  getValueDecimalToGRPC,
  getDecimalToGRPC,
  getScaleFromDecimal,
  getValueToGRPCWithValueType,
  getValueToGRPCWithoutValueType,
  getValueToGRPC,
  //
  getConditionToGRPC,
  getCriteriaToGRPC,
  getKeyValueToGRPC,
  getKeyValueSelectionToGRPC,
  getOrderByPropertyToGRPC
};
