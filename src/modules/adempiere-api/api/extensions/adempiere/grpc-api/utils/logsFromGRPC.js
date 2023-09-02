/*************************************************************************************
 * Product: ADempiere gRPC Logs Client Convert Utils                                 *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
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

const stubFile = require('.././grpc/proto/logs_pb.js');

function getRecentItemFromGRPC (recentItem) {
  if (!recentItem) {
    return undefined;
  }

  return {
    menu_uuid: recentItem.getMenuUuid(),
    menu_name: recentItem.getMenuName(),
    menu_description: recentItem.getMenuDescription(),
    window_uuid: recentItem.getWindowUuid(),
    tab_uuid: recentItem.getTabUuid(),
    table_id: recentItem.getTableId(),
    table_name: recentItem.getTableName(),
    id: recentItem.getId(),
    uuid: recentItem.getUuid(),
    display_name: recentItem.getDisplayName(),
    updated: recentItem.getUpdated(),
    reference_uuid: recentItem.getReferenceUuid(),
    action: recentItem.getAction()
  };
}

/**
 * Get all confidential type or get key value type from value
 * @param {number} value
 * @param {string} key
      PUBLIC: 0,
      PARTER: 1,
      INTERNAL: 2,
  */
function getEntityChat_ConfidentialType ({ key, value }) {
  const { getValueOrKey } = require('./convertEnums.js')
  const { EntityChat } = stubFile;
  const { ConfidentialType } = EntityChat;

  return getValueOrKey({
    list: ConfidentialType,
    key,
    value
  });
}

/**
 * Get all moderation type or get key value type from value
 * @param {number} value
 * @param {string} key
      NOT_MODERATED: 0,
      BEFORE_PUBLISHING: 1,
      AFTER_PUBLISHING: 2,
  */
function getEntityChat_ModerationType ({ key, value }) {
  const { getValueOrKey } = require('./convertEnums.js')
  const { EntityChat } = stubFile;
  const { ModerationType } = EntityChat;

  return getValueOrKey({
    list: ModerationType,
    key,
    value
  });
}

function getEntityChatsFromGRPC (entityChat) {
  if (!entityChat) {
    return undefined;
  }

  return {
    chat_uuid: entityChat.getChatUuid(),
    id: entityChat.getId(),
    uuid: entityChat.getUuid(),
    table_name: entityChat.getTableName(),
    chat_type_uuid: entityChat.getChatTypeUuid(),
    description: entityChat.getDescription(),
    confidential_type: entityChat.getConfidentialType(),
    confidential_type_name: getEntityChat_ConfidentialType({
      value: entityChat.getConfidentialType()
    }),
    moderation_type: entityChat.getModerationType(),
    moderation_type_name: getEntityChat_ModerationType({
      value: entityChat.getModerationType()
    }),
    log_date: new Date(entityChat.getLogDate()),
    user_id: entityChat.getUserId(),
    user_uuid: entityChat.getUserUuid(),
    user_name: entityChat.getUserName()
  };
};

/**
 * Get all event type or get key value type from value
 * @param {number} value
 * @param {string} key
 * @returns {number|string|object}
    INSERT = 0;
    UPDATE = 1;
    DELETE = 2;
*/
function getEntityEventType ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js');
  const { EntityEventType } = stubFile;

  return getValueOrKeyEnum({
    list: EntityEventType,
    key,
    value
  });
}

function getChangeLogFromGRPC (changeLogToConvert) {
  if (!changeLogToConvert) {
    return undefined;
  }
  return {
    column_name: changeLogToConvert.getColumnName(),
    display_column_name: changeLogToConvert.getDisplayColumnName(),
    old_value: changeLogToConvert.getOldValue(),
    new_value: changeLogToConvert.getNewValue(),
    old_display_value: changeLogToConvert.getOldDisplayValue(),
    new_display_value: changeLogToConvert.getNewDisplayValue(),
    description: changeLogToConvert.getDescription()
  };
}

function getEntityLogFromGRPC (entityLog) {
  if (!entityLog) {
    return undefined;
  }
  return {
    log_id: entityLog.getLogId(),
    id: entityLog.getId(),
    uuid: entityLog.getUuid(),
    display_name: entityLog.getDisplayedName(),
    window_id: entityLog.getWindowId(),
    window_uuid: entityLog.getWindowUuid(),
    table_name: entityLog.getTableName(),
    record_id: entityLog.getId(),
    record_uuid: entityLog.getUuid(),
    session_uuid: entityLog.getSessionUuid(),
    user_uuid: entityLog.getUserUuid(),
    user_name: entityLog.getUserName(),
    transaction_name: entityLog.getTransactionName(),
    event_type: entityLog.getEventType(),
    event_type_name: getEntityEventType({
      value: entityLog.getEventType()
    }),
    entity_event_type: entityLog.getEventType(),
    entity_event_type_name: getEntityEventType({
      value: entityLog.getEventType()
    }),
    log_date: entityLog.getLogDate(),
    change_logs: entityLog.getChangeLogsList().map(changeLog => {
      return getChangeLogFromGRPC(
        changeLog
      );
    })
  };
}

function getUserActivityType ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js');
  const { UserActivityType } = stubFile;

  return getValueOrKeyEnum({
    list: UserActivityType,
    key,
    value
  });
}

function getUserActivityFromGRPC (userActivityToConvert) {
  if (!userActivityToConvert) {
    return undefined;
  }

  const {
    getProcessLogFromGRPC
  } = require('./baseDataTypeFromGRPC');
  return {
    user_activity_type: userActivityToConvert.getUserActivityType(),
    user_activity_type_name: getUserActivityType({
      value: userActivityToConvert.getUserActivityType()
    }),
    entity_log: getEntityLogFromGRPC(
      userActivityToConvert.getEntityLog()
    ),
    process_log: getProcessLogFromGRPC(
      userActivityToConvert.getProcessLog()
    )
  }
}

module.exports = {
  getEntityEventType,
  getEntityChatsFromGRPC,
  getEntityLogFromGRPC,
  getChangeLogFromGRPC,
  getRecentItemFromGRPC,
  getUserActivityFromGRPC
};
