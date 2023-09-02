/*************************************************************************************
 * Product: ADempiere gRPC Security Client Convert Utils                             *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
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

const stubFile = require('.././grpc/proto/security_pb.js');
const { isEmptyValue } = require('./valueUtils.js');

/**
 * Get value from integer to grpc
 * @param {number} value
 * @return
 */
function getIntegerValueToGRPC (value) {
  const {
    ValueType, ContextValue
  } = stubFile;
  const convertedValue = new ContextValue();

  convertedValue.setValueType(ValueType.INTEGER);
  if (!isEmptyValue(value) && !Number.isNaN(value)) {
    convertedValue.setIntValue(
      Number(value)
    );
  }
  return convertedValue;
}

/**
 * Get value from a string to grpc
 * @param {string} value
 * @return
 */
function getStringValueToGRPC (value) {
  const {
    ValueType, ContextValue
  } = stubFile;
  const convertedValue = new ContextValue();

  convertedValue.setValueType(ValueType.STRING);
  if (!isEmptyValue(value)) {
    convertedValue.setStringValue(String(value));
  }
  return convertedValue;
}

/**
 * Get value from a boolean value to grpc
 * @param {boolean} value
 * @return
 */
function getBooleanValueToGRPC (value) {
  const {
    ValueType, ContextValue
  } = stubFile;
  const convertedValue = new ContextValue();

  convertedValue.setValueType(ValueType.BOOLEAN);
  if (typeof value === 'string') {
    value = value.trim();
    value = value !== 'N' && value !== '';
  }

  convertedValue.setBooleanValue(
    Boolean(value)
  );
  return convertedValue;
}

/**
 * Get value from a date to grpc
 * @param {date} value
 * @return
 */
function getDateValueToGRPC (value) {
  const {
    ValueType, ContextValue
  } = stubFile;
  const convertedValue = new ContextValue();

  convertedValue.setValueType(ValueType.DATE);
  const { getTimestamp } = require('./valueUtils.js');
  const longValue = getTimestamp(value);
  convertedValue.setLongValue(longValue);

  return convertedValue;
}

/**
 * Get value from big decimal to grpc
 * @param {number} value
 * @return
 */
function getDoubleValueToGRPC (value) {
  const {
    ValueType, ContextValue
  } = stubFile;
  const convertedValue = new ContextValue();

  convertedValue.setValueType(ValueType.DOUBLE);
  convertedValue.setDoubleValue(
    Number(value)
  );

  return convertedValue;
}

/**
 * Return value converted, compatible with grpc
 * @param {mixed} value
 * @returns {Value}
 */
function getContextValueToGRPCWithoutValueType ({ value }) {
  let convertedValue;
  // evaluate type of value
  const { getTypeOfValue } = require('./valueUtils.js');
  const typeOfValue = getTypeOfValue(value);
  switch (typeOfValue) {
    case 'Number':
      if (Number.isInteger(value)) {
        if (String(value).length >= 13 && value && value > 0) {
          convertedValue = getDateValueToGRPC(value);
        } else {
          convertedValue = getIntegerValueToGRPC(value);
        }
        break;
      }
      convertedValue = getDoubleValueToGRPC(value);
      break;

    case 'Boolean':
      convertedValue = getBooleanValueToGRPC(value);
      break;

    case 'Date':
      convertedValue = getDateValueToGRPC(value);
      break;

    case 'String':
      let parsedValue = Date.parse(value)
      if (String(value).length >= 13 && parsedValue && parsedValue > 0) {
        convertedValue = getDateValueToGRPC(new Date(parsedValue));
      } else {
        convertedValue = getStringValueToGRPC(value);
      }
      break;

    default:
      const { ContextValue } = stubFile;
      convertedValue = new ContextValue();
      break;
  }
  return convertedValue;
}

/**
 * Convert value to grpc with value type
 * @author Edwin Betancourt <EdwinBetanc0urt@outlook.com>
 * @param {mixed} value
 * @param {string} valueType
 */
function getContextValueToGRPCWithValueType ({ value, valueType }) {
  const { ValueType } = stubFile;
  let convertedValue;

  switch (ValueType[valueType]) {
    // data type Number (integer)
    case ValueType.INTEGER:
      convertedValue = getIntegerValueToGRPC(value);
      break;
    // data type Number (float)
    case ValueType.DOUBLE:
      convertedValue = getDoubleValueToGRPC(value);
      break;
    // data type Boolean
    case ValueType.BOOLEAN:
      convertedValue = getBooleanValueToGRPC(value);
      break;
    // data type String
    case ValueType.STRING:
      convertedValue = getStringValueToGRPC(value);
      break;
    // data type Date
    case ValueType.DATE:
    case ValueType.LONG:
      convertedValue = getDateValueToGRPC(value);
      break;
    // determinate data type
    case ValueType.UNKNOWN:
    default:
      if (!isEmptyValue(value)) {
        convertedValue = getContextValueToGRPCWithoutValueType({
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
function getContextValueToGRPC ({ value, valueType }) {
  if (!isEmptyValue(valueType)) {
    return getContextValueToGRPCWithValueType({
      value,
      valueType
    });
  }

  return getContextValueToGRPCWithoutValueType({
    value
  });
}

module.exports = {
  getContextValueToGRPC,
  getContextValueToGRPCWithValueType,
  getContextValueToGRPCWithoutValueType
};
