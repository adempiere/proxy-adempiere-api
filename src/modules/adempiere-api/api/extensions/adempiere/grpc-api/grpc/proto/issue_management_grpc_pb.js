// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2018-2022 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program. If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_issue_management_pb = require('../proto/issue_management_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_CreateIssueCommentRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.CreateIssueCommentRequest)) {
    throw new Error('Expected argument of type issue_management.CreateIssueCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_CreateIssueCommentRequest(buffer_arg) {
  return proto_issue_management_pb.CreateIssueCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_CreateIssueRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.CreateIssueRequest)) {
    throw new Error('Expected argument of type issue_management.CreateIssueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_CreateIssueRequest(buffer_arg) {
  return proto_issue_management_pb.CreateIssueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_DeleteIssueCommentRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.DeleteIssueCommentRequest)) {
    throw new Error('Expected argument of type issue_management.DeleteIssueCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_DeleteIssueCommentRequest(buffer_arg) {
  return proto_issue_management_pb.DeleteIssueCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_DeleteIssueRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.DeleteIssueRequest)) {
    throw new Error('Expected argument of type issue_management.DeleteIssueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_DeleteIssueRequest(buffer_arg) {
  return proto_issue_management_pb.DeleteIssueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ExistsIssuesRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ExistsIssuesRequest)) {
    throw new Error('Expected argument of type issue_management.ExistsIssuesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ExistsIssuesRequest(buffer_arg) {
  return proto_issue_management_pb.ExistsIssuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ExistsIssuesResponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ExistsIssuesResponse)) {
    throw new Error('Expected argument of type issue_management.ExistsIssuesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ExistsIssuesResponse(buffer_arg) {
  return proto_issue_management_pb.ExistsIssuesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_Issue(arg) {
  if (!(arg instanceof proto_issue_management_pb.Issue)) {
    throw new Error('Expected argument of type issue_management.Issue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_Issue(buffer_arg) {
  return proto_issue_management_pb.Issue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_IssueComment(arg) {
  if (!(arg instanceof proto_issue_management_pb.IssueComment)) {
    throw new Error('Expected argument of type issue_management.IssueComment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_IssueComment(buffer_arg) {
  return proto_issue_management_pb.IssueComment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListIssueCommentsReponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListIssueCommentsReponse)) {
    throw new Error('Expected argument of type issue_management.ListIssueCommentsReponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListIssueCommentsReponse(buffer_arg) {
  return proto_issue_management_pb.ListIssueCommentsReponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListIssueCommentsRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListIssueCommentsRequest)) {
    throw new Error('Expected argument of type issue_management.ListIssueCommentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListIssueCommentsRequest(buffer_arg) {
  return proto_issue_management_pb.ListIssueCommentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListIssuesReponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListIssuesReponse)) {
    throw new Error('Expected argument of type issue_management.ListIssuesReponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListIssuesReponse(buffer_arg) {
  return proto_issue_management_pb.ListIssuesReponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListIssuesRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListIssuesRequest)) {
    throw new Error('Expected argument of type issue_management.ListIssuesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListIssuesRequest(buffer_arg) {
  return proto_issue_management_pb.ListIssuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListPrioritiesRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListPrioritiesRequest)) {
    throw new Error('Expected argument of type issue_management.ListPrioritiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListPrioritiesRequest(buffer_arg) {
  return proto_issue_management_pb.ListPrioritiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListPrioritiesResponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListPrioritiesResponse)) {
    throw new Error('Expected argument of type issue_management.ListPrioritiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListPrioritiesResponse(buffer_arg) {
  return proto_issue_management_pb.ListPrioritiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListRequestTypesRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListRequestTypesRequest)) {
    throw new Error('Expected argument of type issue_management.ListRequestTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListRequestTypesRequest(buffer_arg) {
  return proto_issue_management_pb.ListRequestTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListRequestTypesResponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListRequestTypesResponse)) {
    throw new Error('Expected argument of type issue_management.ListRequestTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListRequestTypesResponse(buffer_arg) {
  return proto_issue_management_pb.ListRequestTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListSalesRepresentativesRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListSalesRepresentativesRequest)) {
    throw new Error('Expected argument of type issue_management.ListSalesRepresentativesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListSalesRepresentativesRequest(buffer_arg) {
  return proto_issue_management_pb.ListSalesRepresentativesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListSalesRepresentativesResponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListSalesRepresentativesResponse)) {
    throw new Error('Expected argument of type issue_management.ListSalesRepresentativesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListSalesRepresentativesResponse(buffer_arg) {
  return proto_issue_management_pb.ListSalesRepresentativesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListStatusesRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListStatusesRequest)) {
    throw new Error('Expected argument of type issue_management.ListStatusesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListStatusesRequest(buffer_arg) {
  return proto_issue_management_pb.ListStatusesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_ListStatusesResponse(arg) {
  if (!(arg instanceof proto_issue_management_pb.ListStatusesResponse)) {
    throw new Error('Expected argument of type issue_management.ListStatusesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_ListStatusesResponse(buffer_arg) {
  return proto_issue_management_pb.ListStatusesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_UpdateIssueCommentRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.UpdateIssueCommentRequest)) {
    throw new Error('Expected argument of type issue_management.UpdateIssueCommentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_UpdateIssueCommentRequest(buffer_arg) {
  return proto_issue_management_pb.UpdateIssueCommentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_issue_management_UpdateIssueRequest(arg) {
  if (!(arg instanceof proto_issue_management_pb.UpdateIssueRequest)) {
    throw new Error('Expected argument of type issue_management.UpdateIssueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_issue_management_UpdateIssueRequest(buffer_arg) {
  return proto_issue_management_pb.UpdateIssueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Issue Management service definition.
var IssueManagementService = exports.IssueManagementService = {
  // Request Type
listRequestTypes: {
    path: '/issue_management.IssueManagement/ListRequestTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ListRequestTypesRequest,
    responseType: proto_issue_management_pb.ListRequestTypesResponse,
    requestSerialize: serialize_issue_management_ListRequestTypesRequest,
    requestDeserialize: deserialize_issue_management_ListRequestTypesRequest,
    responseSerialize: serialize_issue_management_ListRequestTypesResponse,
    responseDeserialize: deserialize_issue_management_ListRequestTypesResponse,
  },
  // Sales Representative
listSalesRepresentatives: {
    path: '/issue_management.IssueManagement/ListSalesRepresentatives',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ListSalesRepresentativesRequest,
    responseType: proto_issue_management_pb.ListSalesRepresentativesResponse,
    requestSerialize: serialize_issue_management_ListSalesRepresentativesRequest,
    requestDeserialize: deserialize_issue_management_ListSalesRepresentativesRequest,
    responseSerialize: serialize_issue_management_ListSalesRepresentativesResponse,
    responseDeserialize: deserialize_issue_management_ListSalesRepresentativesResponse,
  },
  // Priority
listPriorities: {
    path: '/issue_management.IssueManagement/ListPriorities',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ListPrioritiesRequest,
    responseType: proto_issue_management_pb.ListPrioritiesResponse,
    requestSerialize: serialize_issue_management_ListPrioritiesRequest,
    requestDeserialize: deserialize_issue_management_ListPrioritiesRequest,
    responseSerialize: serialize_issue_management_ListPrioritiesResponse,
    responseDeserialize: deserialize_issue_management_ListPrioritiesResponse,
  },
  // Status
listStatuses: {
    path: '/issue_management.IssueManagement/ListStatuses',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ListStatusesRequest,
    responseType: proto_issue_management_pb.ListStatusesResponse,
    requestSerialize: serialize_issue_management_ListStatusesRequest,
    requestDeserialize: deserialize_issue_management_ListStatusesRequest,
    responseSerialize: serialize_issue_management_ListStatusesResponse,
    responseDeserialize: deserialize_issue_management_ListStatusesResponse,
  },
  // Issue
existsIssues: {
    path: '/issue_management.IssueManagement/ExistsIssues',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ExistsIssuesRequest,
    responseType: proto_issue_management_pb.ExistsIssuesResponse,
    requestSerialize: serialize_issue_management_ExistsIssuesRequest,
    requestDeserialize: deserialize_issue_management_ExistsIssuesRequest,
    responseSerialize: serialize_issue_management_ExistsIssuesResponse,
    responseDeserialize: deserialize_issue_management_ExistsIssuesResponse,
  },
  listIssues: {
    path: '/issue_management.IssueManagement/ListIssues',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ListIssuesRequest,
    responseType: proto_issue_management_pb.ListIssuesReponse,
    requestSerialize: serialize_issue_management_ListIssuesRequest,
    requestDeserialize: deserialize_issue_management_ListIssuesRequest,
    responseSerialize: serialize_issue_management_ListIssuesReponse,
    responseDeserialize: deserialize_issue_management_ListIssuesReponse,
  },
  createIssue: {
    path: '/issue_management.IssueManagement/CreateIssue',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.CreateIssueRequest,
    responseType: proto_issue_management_pb.Issue,
    requestSerialize: serialize_issue_management_CreateIssueRequest,
    requestDeserialize: deserialize_issue_management_CreateIssueRequest,
    responseSerialize: serialize_issue_management_Issue,
    responseDeserialize: deserialize_issue_management_Issue,
  },
  updateIssue: {
    path: '/issue_management.IssueManagement/UpdateIssue',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.UpdateIssueRequest,
    responseType: proto_issue_management_pb.Issue,
    requestSerialize: serialize_issue_management_UpdateIssueRequest,
    requestDeserialize: deserialize_issue_management_UpdateIssueRequest,
    responseSerialize: serialize_issue_management_Issue,
    responseDeserialize: deserialize_issue_management_Issue,
  },
  deleteIssue: {
    path: '/issue_management.IssueManagement/DeleteIssue',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.DeleteIssueRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_issue_management_DeleteIssueRequest,
    requestDeserialize: deserialize_issue_management_DeleteIssueRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // Issue Comments
listIssueComments: {
    path: '/issue_management.IssueManagement/ListIssueComments',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.ListIssueCommentsRequest,
    responseType: proto_issue_management_pb.ListIssueCommentsReponse,
    requestSerialize: serialize_issue_management_ListIssueCommentsRequest,
    requestDeserialize: deserialize_issue_management_ListIssueCommentsRequest,
    responseSerialize: serialize_issue_management_ListIssueCommentsReponse,
    responseDeserialize: deserialize_issue_management_ListIssueCommentsReponse,
  },
  createIssueComment: {
    path: '/issue_management.IssueManagement/CreateIssueComment',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.CreateIssueCommentRequest,
    responseType: proto_issue_management_pb.IssueComment,
    requestSerialize: serialize_issue_management_CreateIssueCommentRequest,
    requestDeserialize: deserialize_issue_management_CreateIssueCommentRequest,
    responseSerialize: serialize_issue_management_IssueComment,
    responseDeserialize: deserialize_issue_management_IssueComment,
  },
  updateIssueComment: {
    path: '/issue_management.IssueManagement/UpdateIssueComment',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.UpdateIssueCommentRequest,
    responseType: proto_issue_management_pb.IssueComment,
    requestSerialize: serialize_issue_management_UpdateIssueCommentRequest,
    requestDeserialize: deserialize_issue_management_UpdateIssueCommentRequest,
    responseSerialize: serialize_issue_management_IssueComment,
    responseDeserialize: deserialize_issue_management_IssueComment,
  },
  deleteIssueComment: {
    path: '/issue_management.IssueManagement/DeleteIssueComment',
    requestStream: false,
    responseStream: false,
    requestType: proto_issue_management_pb.DeleteIssueCommentRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_issue_management_DeleteIssueCommentRequest,
    requestDeserialize: deserialize_issue_management_DeleteIssueCommentRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
};

exports.IssueManagementClient = grpc.makeGenericClientConstructor(IssueManagementService);
