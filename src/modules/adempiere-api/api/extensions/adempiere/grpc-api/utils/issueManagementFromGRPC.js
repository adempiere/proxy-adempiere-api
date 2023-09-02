/*************************************************************************************
 * Product: ADempiere gRPC Issue Management Client Convert Util                      *
 * Copyright (C) 2018-2020 E.R.P. Consultores y Asociados, C.A.                      *
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

const stubFile = require('.././grpc/proto/issue_management_pb.js');

function getUserFromGRPC (userToConvert) {
  if (!userToConvert) {
    return undefined;
  }
  return {
    id: userToConvert.getId(),
    uuid: userToConvert.getUuid(),
    name: userToConvert.getName(),
    description: userToConvert.getDescription(),
    avatar: userToConvert.getAvatar()
  };
}

function getRequestTypeFromGRPC (requestTypeToConvert) {
  if (!requestTypeToConvert) {
    return undefined;
  }
  return {
    id: requestTypeToConvert.getId(),
    uuid: requestTypeToConvert.getUuid(),
    name: requestTypeToConvert.getName(),
    description: requestTypeToConvert.getDescription(),
    due_date_tolerance: requestTypeToConvert.getDueDateTolerance(),
    default_status: getStatusFromGRPC(
      requestTypeToConvert.getDefaultStatus()
    )
  };
}

function getPriorityFromGRPC (priorityToConvert) {
  if (!priorityToConvert) {
    return undefined;
  }
  return {
    id: priorityToConvert.getId(),
    uuid: priorityToConvert.getUuid(),
    value: priorityToConvert.getValue(),
    name: priorityToConvert.getName(),
    description: priorityToConvert.getDescription()
  };
}

function getStatusFromGRPC (statusToConvert) {
  if (!statusToConvert) {
    return undefined;
  }
  return {
    id: statusToConvert.getId(),
    uuid: statusToConvert.getUuid(),
    name: statusToConvert.getName(),
    description: statusToConvert.getDescription()
  };
}

function getDueTypeFromGRPC (dueTypeToConvert) {
  if (!dueTypeToConvert) {
    return undefined;
  }
  return {
    id: dueTypeToConvert.getId(),
    uuid: dueTypeToConvert.getUuid(),
    value: dueTypeToConvert.getValue(),
    name: dueTypeToConvert.getName(),
    description: dueTypeToConvert.getDescription()
  };
}

function getIssueFromGRPC (issueToConvert) {
  if (!issueToConvert) {
    return undefined;
  }
  return {
    id: issueToConvert.getId(),
    uuid: issueToConvert.getUuid(),
    document_no: issueToConvert.getDocumentNo(),
    subject: issueToConvert.getSubject(),
    summary: issueToConvert.getSummary(),
    created: issueToConvert.getCreated(),
    last_updated: issueToConvert.getLastUpdated(),
    request_type: getRequestTypeFromGRPC(
      issueToConvert.getRequestType()
    ),
    user: getUserFromGRPC(
      issueToConvert.getUser()
    ),
    sales_representative: getUserFromGRPC(
      issueToConvert.getSalesRepresentative()
    ),
    status: getStatusFromGRPC(
      issueToConvert.getStatus()
    ),
    priority: getPriorityFromGRPC(
      issueToConvert.getPriority()
    ),
    date_next_action: issueToConvert.getDateNextAction(),
    due_type: getDueTypeFromGRPC(
      issueToConvert.getDueType()
    )
  };
}

/**
 * Get all moderation type or get key value type from value
 * @param {number} value
 * @param {string} key
    COMMENT = 0;
    LOG = 1;
 */
function getIssueCommentType ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js');
  const { IssueCommentType } = stubFile;

  return getValueOrKeyEnum({
    list: IssueCommentType,
    key,
    value
  });
}

function getIssueCommentFromGRPC (issueCommentToConvert) {
  if (!issueCommentToConvert) {
    return undefined;
  }

  const { getValueFromGRPC } = require('./baseDataTypeFromGRPC.js');

  return {
    id: issueCommentToConvert.getId(),
    uuid: issueCommentToConvert.getUuid(),
    result: issueCommentToConvert.getResult(),
    created: issueCommentToConvert.getCreated(),
    user: getUserFromGRPC(
      issueCommentToConvert.getUser()
    ),
    issue_comment_type: issueCommentToConvert.getIssueCommentType(),
    issue_comment_type_name: getIssueCommentType({
      value: issueCommentToConvert.getIssueCommentType()
    }),
    label: issueCommentToConvert.getLabel(),
    new_value: getValueFromGRPC(
      issueCommentToConvert.getNewValue()
    ),
    displayed_value: issueCommentToConvert.getDisplayedValue()
  };
}

module.exports = {
  getUserFromGRPC,
  getRequestTypeFromGRPC,
  getPriorityFromGRPC,
  getStatusFromGRPC,
  getIssueFromGRPC,
  getIssueCommentFromGRPC
};
