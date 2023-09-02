/*************************************************************************************
 * Product: ADempiere gRPC Enum Convert Util                                         *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
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

/**
 * Get all values type or get key value type from value
 * @deprecated
 * @param {object} list
 * @param {string} key
 * @param {number} value
 * @returns {number|string|object}
 */
function getValueOrKey ({ list, key, value }) {
  // return all values
  return getValueOrKeyEnum({
    list,
    key,
    value
  });
}

/**
 * Get all values type or get key value type from value
 * @param {object} list
 * @param {string} key
 * @param {number} value
 * @returns {number|string|object}
 */
function getValueOrKeyEnum ({ list, key, value }) {
  const { isEmptyValue } = require('./valueUtils.js');
  if (isEmptyValue(list)) {
    return undefined;
  }

  if (key !== undefined) {
    return list[key];
  } else if (value !== undefined) {
    return Object.keys(list).find(keyItem => list[keyItem] === value);
  }
  // return all values
  return list;
}

module.exports = {
  getValueOrKey,
  getValueOrKeyEnum
};
