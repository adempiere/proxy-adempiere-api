/*************************************************************************************
 * Product: ADempiere gRPC Convert Enums                                             *
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

const convertEnums = {
  /**
   * Get all values type or get key value type from value
   * @param {object} list
   * @param {string} key
   * @param {number} value
   * @returns {number|string|object}
   */
  getValueOrKey ({ list, key, value }) {
    if (key !== undefined) {
      return list[key];
    } else if (value !== undefined) {
      return Object.keys(list).find(keyItem => list[keyItem] === value);
    }
    // return all values
    return list;
  },

  /**
   * Get all values type or get key value type from value
   * @param {string} key
   * @param {number} value
   * @returns {number|string|object}
      UNKNOWN = 0;
      INTEGER = 1;
      DECIMAL = 2;
      BOOLEAN = 3;
      STRING = 4;
      DATE = 5;
   */
  getValue_ValueType ({ key, value }) {
    const { Value } = require('.././grpc-api/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;

    return convertEnums.getValueOrKey({
      list: ValueType,
      key,
      value
    });
  },

  /**
   * @param {number} value
   * @param {string} key
   * @returns {number|string|object}
      ASCENDING = 0;
      DESCENDING = 1;
  */
  getOrderType ({ key, value }) {
    const { OrderType } = require('.././grpc-api/grpc/proto/base_data_type_pb.js');

    return convertEnums.getValueOrKey({
      list: OrderType,
      key,
      value
    });
  },

  /**
   * Get all event type or get key value type from value
   * @param {number} value
   * @param {string} key
   * @returns {number|string|object}
      INSERT = 0;
      UPDATE = 1;
      DELETE = 2;
   */
  getRollbackEntityRequest_EventType ({ key, value }) {
    const { RollbackEntityRequest } = require('.././grpc-api/grpc/proto/business_pb.js');
    const { EventType } = RollbackEntityRequest;

    return convertEnums.getValueOrKey({
      list: EventType,
      key,
      value
    });
  },

  /**
   * Get all confidential type or get key value type from value
   * @param {number} value
   * @param {string} key
        PUBLIC = 0;
        PARTER = 1;
        INTERNAL = 2;
   */
  getChatEntry_ConfidentialType ({ key, value }) {
    const { ChatEntry } = require('.././grpc-api/grpc/proto/business_pb.js');
    const { ConfidentialType } = ChatEntry;

    return convertEnums.getValueOrKey({
      list: ConfidentialType,
      key,
      value
    });
  },

  /**
   * Get all moderation status or get key value type from value
   * @param {number} value
   * @param {string} key
        NOT_DISPLAYED = 0;
        PUBLISHED = 1;
        SUSPICIUS = 2;
        TO_BE_REVIEWED = 3;
   */
  getChatEntry_ModeratorStatus ({ key, value }) {
    const { ChatEntry } = require('.././grpc-api/grpc/proto/business_pb.js');
    const { ModeratorStatus } = ChatEntry;

    return convertEnums.getValueOrKey({
      list: ModeratorStatus,
      key,
      value
    });
  },

  /**
   * Get all chat entry type or get key value type from value
   * @param {number} value
   * @param {string} key
        NOTE_FLAT = 0;
        FORUM_THREADED = 1;
        WIKI = 2;
   */
  getChatEntry_ChatEntryType ({ key, value }) {
    const { ChatEntry } = require('.././grpc-api/grpc/proto/business_pb.js');
    const { ChatEntryType } = ChatEntry;

    return convertEnums.getValueOrKey({
      list: ChatEntryType,
      key,
      value
    });
  }

};

module.exports = convertEnums;
