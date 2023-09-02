/*************************************************************************************
 * Logs: ADempiere gRPC Logs Client                                                  *
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

const { getMetadata } = require('.././utils/metadata.js');
const { getValidInteger, getTimestamp } = require('.././utils/valueUtils.js');

class Logs {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/logs_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor (config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.businessHost = adempiereConfig.businessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initLogsService();
    console.log('ADempiere Logs Client Started');
  }

  // Init connection
  initLogsService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/logs_grpc_pb');
    this.logs = new services.LogsClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Logs Service
  getLogsService () {
    return this.logs;
  }

  // List logs
  listLogs ({
    token,
    tableName,
    pageSize,
    pageToken
  }, callback) {
    const { ListLogsRequest } = this.stubFile;
    const request = new ListLogsRequest();

    request.setTableName(tableName);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listLogs(
      request,
      metadata,
      callback
    );
  }

  // List process logs
  listProcessLogs ({
    token,
    tableName,
    uuid,
    id,
    userUuid,
    instanceUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListProcessLogsRequest } = this.stubFile;
    const request = new ListProcessLogsRequest();

    request.setTableName(tableName);
    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );
    request.setUserUuid(userUuid);
    request.setInstanceUuid(instanceUuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listProcessLogs(
      request,
      metadata,
      callback
    );
  }

  // List record logs
  listEntityLogs ({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken
  }, callback) {
    const { ListEntityLogsRequest } = this.stubFile;
    const request = new ListEntityLogsRequest();

    request.setTableName(tableName);
    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listEntityLogs(
      request,
      metadata,
      callback
    );
  }

  //  List entity chats
  listEntityChats ({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken
  }, callback) {
    const { ListEntityChatsRequest } = this.stubFile;
    const request = new ListEntityChatsRequest();

    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(
      getValidInteger(id)
    );
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listEntityChats(
      request,
      metadata,
      callback
    );
  }

  /**
   * Exists Chat Entries
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} language
   * @param {string} token
   */
  existsChatEntries ({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid
  }, callback) {
    const { ExistsChatEntriesRequest } = this.stubFile;
    const request = new ExistsChatEntriesRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().existsChatEntries(
      request,
      metadata,
      callback
    );
  }

  // List chats entries
  listChatEntries ({
    token,
    id,
    uuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListChatEntriesRequest } = this.stubFile;
    const request = new ListChatEntriesRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listChatEntries(
      request,
      metadata,
      callback
    );
  }

  // List workflow logs
  listWorkflowLogs ({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken
  }, callback) {
    const { ListWorkflowLogsRequest } = this.stubFile;
    const request = new ListWorkflowLogsRequest();

    request.setTableName(tableName);
    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listWorkflowLogs(
      request,
      metadata,
      callback
    );
  }

  // List recent items
  listRecentItems ({
    token,
    userUuid,
    roleUuid,
    currentSession,
    pageSize,
    pageToken
  }, callback) {
    const { ListRecentItemsRequest } = this.stubFile;
    const request = new ListRecentItemsRequest();

    request.setUserUuid(userUuid);
    request.setRoleUuid(roleUuid);
    request.setCurrentSession(currentSession);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listRecentItems(
      request,
      metadata,
      callback
    );
  }

  // List recent items
  listUserActivites ({
    token,
    date,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListUserActivitesRequest } = this.stubFile;
    const request = new ListUserActivitesRequest();

    request.setDate(
      getTimestamp(date)
    );
    request.setSearchValue(searchValue);

    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getLogsService().listUserActivites(
      request,
      metadata,
      callback
    );
  }
}

module.exports = Logs;
