/*************************************************************************************
 * Product: ADempiere gRPC Issue Management Client                                   *
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

class IssueManagement {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/issue_management_pb.js');

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

    this.initIssueManagementService();
    console.log('ADempiere IssueManagement Client Started');
  }

  // Init connection
  initIssueManagementService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/issue_management_grpc_pb');
    this.issue_management = new services.IssueManagementClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get IssueManagement Service
  getIssueManagementService () {
    return this.issue_management;
  }

  /**
   * List Request Types
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   */
  listRequestTypes ({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListRequestTypesRequest } = this.stubFile;
    const request = new ListRequestTypesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().listRequestTypes(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Request Types
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   */
  listSalesRepresentatives ({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListSalesRepresentativesRequest } = this.stubFile;
    const request = new ListSalesRepresentativesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().listSalesRepresentatives(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Priorities
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   */
  listPriorities ({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListPrioritiesRequest } = this.stubFile;
    const request = new ListPrioritiesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().listPriorities(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Statuses
   * @param {number} requestTypeId
   * @param {string} requestTypeUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   */
  listStatuses ({
    token,
    requestTypeId,
    requestTypeUuid,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListStatusesRequest } = this.stubFile;
    const request = new ListStatusesRequest();

    request.setRequestTypeId(
      getValidInteger(requestTypeId)
    );
    request.setRequestTypeUuid(requestTypeUuid);

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().listStatuses(
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
   * @param {string} token
   */
  existsIssues ({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid
  }, callback) {
    const { ExistsIssuesRequest } = this.stubFile;
    const request = new ExistsIssuesRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().existsIssues(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Issues
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   */
  listIssues ({
    token,
    tableName,
    recordId,
    recordUuid,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListIssuesRequest } = this.stubFile;
    const request = new ListIssuesRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().listIssues(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Issue
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} subject
   * @param {string} summary
   * @param {number} requestTypeId
   * @param {string} requestTypeUuid
   * @param {date} dateNextAction
   * @param {string} token
   */
  createIssue ({
    token,
    tableName,
    recordId,
    recordUuid,
    subject,
    summary,
    requestTypeId,
    requestTypeUuid,
    salesRepresentativeId,
    salesRepresentativeUuid,
    statusId,
    statusUuid,
    priorityValue,
    dateNextAction
  }, callback) {
    const { CreateIssueRequest } = this.stubFile;
    const request = new CreateIssueRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setSubject(subject);
    request.setSummary(summary);
    request.setRequestTypeId(
      getValidInteger(requestTypeId)
    );
    request.setRequestTypeUuid(requestTypeUuid);
    request.setSalesRepresentativeId(
      getValidInteger(salesRepresentativeId)
    );
    request.setSalesRepresentativeUuid(salesRepresentativeUuid);
    request.setStatusId(
      getValidInteger(statusId)
    );
    request.setStatusUuid(statusUuid);
    request.setPriorityValue(priorityValue);
    request.setDateNextAction(
      getTimestamp(dateNextAction)
    );

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().createIssue(
      request,
      metadata,
      callback
    );
  }

  /**
   * Update Issue
   * @param {number} id
   * @param {string} uuid
   * @param {string} subject
   * @param {string} summary
   * @param {number} requestTypeId
   * @param {string} requestTypeUuid
   * @param {date} dateNextAction
   * @param {string} token
   */
  updateIssue ({
    token,
    id,
    uuid,
    subject,
    summary,
    requestTypeId,
    requestTypeUuid,
    salesRepresentativeId,
    salesRepresentativeUuid,
    statusId,
    statusUuid,
    priorityValue,
    dateNextAction
  }, callback) {
    const { UpdateIssueRequest } = this.stubFile;
    const request = new UpdateIssueRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    request.setSubject(subject);
    request.setSummary(summary);
    request.setRequestTypeId(
      getValidInteger(requestTypeId)
    );
    request.setRequestTypeUuid(requestTypeUuid);
    request.setSalesRepresentativeId(
      getValidInteger(salesRepresentativeId)
    );
    request.setSalesRepresentativeUuid(salesRepresentativeUuid);
    request.setStatusId(
      getValidInteger(statusId)
    );
    request.setStatusUuid(statusUuid);
    request.setPriorityValue(priorityValue);
    request.setDateNextAction(
      getTimestamp(dateNextAction)
    );

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().updateIssue(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Issue
   * @param {number} id
   * @param {string} uuid
   * @param {string} token
   */
  deleteIssue ({
    token,
    id,
    uuid
  }, callback) {
    const { DeleteIssueRequest } = this.stubFile;
    const request = new DeleteIssueRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().deleteIssue(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Issue Comments
   * @param {number} issueId
   * @param {string} issueUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   */
  listIssueComments ({
    token,
    issueId,
    issueUuid,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListIssueCommentsRequest } = this.stubFile;
    const request = new ListIssueCommentsRequest();

    request.setIssueId(
      getValidInteger(issueId)
    );
    request.setIssueUuid(issueUuid);

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().listIssueComments(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Issue Comment
   * @param {number} issueId
   * @param {string} issueUuid
   * @param {string} result
   */
  createIssueComment ({
    token,
    issueId,
    issueUuid,
    result
  }, callback) {
    const { CreateIssueCommentRequest } = this.stubFile;
    const request = new CreateIssueCommentRequest();

    request.setIssueId(
      getValidInteger(issueId)
    );
    request.setIssueUuid(issueUuid);

    request.setResult(result);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().createIssueComment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Update Issue Comment
   * @param {number} id
   * @param {string} uuid
   * @param {string} result
   * @param {string} token
   */
  updateIssueComment ({
    token,
    id,
    uuid,
    result
  }, callback) {
    const { UpdateIssueCommentRequest } = this.stubFile;
    const request = new UpdateIssueCommentRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    request.setResult(result);

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().updateIssueComment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Issue Comment
   * @param {number} id
   * @param {string} uuid
   * @param {string} token
   */
  deleteIssueComment ({
    token,
    id,
    uuid
  }, callback) {
    const { DeleteIssueCommentRequest } = this.stubFile;
    const request = new DeleteIssueCommentRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getIssueManagementService().deleteIssueComment(
      request,
      metadata,
      callback
    );
  }
}

module.exports = IssueManagement;
