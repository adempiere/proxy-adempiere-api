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
var proto_logs_pb = require('../proto/logs_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');
var proto_workflow_pb = require('../proto/workflow_pb.js');

function serialize_logs_ExistsChatEntriesRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ExistsChatEntriesRequest)) {
    throw new Error('Expected argument of type logs.ExistsChatEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ExistsChatEntriesRequest (buffer_arg) {
  return proto_logs_pb.ExistsChatEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ExistsChatEntriesResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ExistsChatEntriesResponse)) {
    throw new Error('Expected argument of type logs.ExistsChatEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ExistsChatEntriesResponse (buffer_arg) {
  return proto_logs_pb.ExistsChatEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListChatEntriesRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListChatEntriesRequest)) {
    throw new Error('Expected argument of type logs.ListChatEntriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListChatEntriesRequest (buffer_arg) {
  return proto_logs_pb.ListChatEntriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListChatEntriesResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListChatEntriesResponse)) {
    throw new Error('Expected argument of type logs.ListChatEntriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListChatEntriesResponse (buffer_arg) {
  return proto_logs_pb.ListChatEntriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListEntityChatsRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListEntityChatsRequest)) {
    throw new Error('Expected argument of type logs.ListEntityChatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListEntityChatsRequest (buffer_arg) {
  return proto_logs_pb.ListEntityChatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListEntityChatsResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListEntityChatsResponse)) {
    throw new Error('Expected argument of type logs.ListEntityChatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListEntityChatsResponse (buffer_arg) {
  return proto_logs_pb.ListEntityChatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListEntityLogsRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListEntityLogsRequest)) {
    throw new Error('Expected argument of type logs.ListEntityLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListEntityLogsRequest (buffer_arg) {
  return proto_logs_pb.ListEntityLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListEntityLogsResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListEntityLogsResponse)) {
    throw new Error('Expected argument of type logs.ListEntityLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListEntityLogsResponse (buffer_arg) {
  return proto_logs_pb.ListEntityLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListProcessLogsRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListProcessLogsRequest)) {
    throw new Error('Expected argument of type logs.ListProcessLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListProcessLogsRequest (buffer_arg) {
  return proto_logs_pb.ListProcessLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListProcessLogsResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListProcessLogsResponse)) {
    throw new Error('Expected argument of type logs.ListProcessLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListProcessLogsResponse (buffer_arg) {
  return proto_logs_pb.ListProcessLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListRecentItemsRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListRecentItemsRequest)) {
    throw new Error('Expected argument of type logs.ListRecentItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListRecentItemsRequest (buffer_arg) {
  return proto_logs_pb.ListRecentItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListRecentItemsResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListRecentItemsResponse)) {
    throw new Error('Expected argument of type logs.ListRecentItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListRecentItemsResponse (buffer_arg) {
  return proto_logs_pb.ListRecentItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListUserActivitesRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListUserActivitesRequest)) {
    throw new Error('Expected argument of type logs.ListUserActivitesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListUserActivitesRequest (buffer_arg) {
  return proto_logs_pb.ListUserActivitesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListUserActivitesResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListUserActivitesResponse)) {
    throw new Error('Expected argument of type logs.ListUserActivitesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListUserActivitesResponse (buffer_arg) {
  return proto_logs_pb.ListUserActivitesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListWorkflowLogsRequest (arg) {
  if (!(arg instanceof proto_logs_pb.ListWorkflowLogsRequest)) {
    throw new Error('Expected argument of type logs.ListWorkflowLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListWorkflowLogsRequest (buffer_arg) {
  return proto_logs_pb.ListWorkflowLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logs_ListWorkflowLogsResponse (arg) {
  if (!(arg instanceof proto_logs_pb.ListWorkflowLogsResponse)) {
    throw new Error('Expected argument of type logs.ListWorkflowLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logs_ListWorkflowLogsResponse (buffer_arg) {
  return proto_logs_pb.ListWorkflowLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// 	Logger services
var LogsService = exports.LogsService = {
  // 	Request BusinessProcess Activity from current session
  listProcessLogs: {
    path: '/logs.Logs/ListProcessLogs',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListProcessLogsRequest,
    responseType: proto_logs_pb.ListProcessLogsResponse,
    requestSerialize: serialize_logs_ListProcessLogsRequest,
    requestDeserialize: deserialize_logs_ListProcessLogsRequest,
    responseSerialize: serialize_logs_ListProcessLogsResponse,
    responseDeserialize: deserialize_logs_ListProcessLogsResponse
  },
  // 	Request Record Log List
  listEntityLogs: {
    path: '/logs.Logs/ListEntityLogs',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListEntityLogsRequest,
    responseType: proto_logs_pb.ListEntityLogsResponse,
    requestSerialize: serialize_logs_ListEntityLogsRequest,
    requestDeserialize: deserialize_logs_ListEntityLogsRequest,
    responseSerialize: serialize_logs_ListEntityLogsResponse,
    responseDeserialize: deserialize_logs_ListEntityLogsResponse
  },
  // 	Request Record Chat List
  listEntityChats: {
    path: '/logs.Logs/ListEntityChats',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListEntityChatsRequest,
    responseType: proto_logs_pb.ListEntityChatsResponse,
    requestSerialize: serialize_logs_ListEntityChatsRequest,
    requestDeserialize: deserialize_logs_ListEntityChatsRequest,
    responseSerialize: serialize_logs_ListEntityChatsResponse,
    responseDeserialize: deserialize_logs_ListEntityChatsResponse
  },
  // 	Exists Chat Entries
  existsChatEntries: {
    path: '/logs.Logs/ExistsChatEntries',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ExistsChatEntriesRequest,
    responseType: proto_logs_pb.ExistsChatEntriesResponse,
    requestSerialize: serialize_logs_ExistsChatEntriesRequest,
    requestDeserialize: deserialize_logs_ExistsChatEntriesRequest,
    responseSerialize: serialize_logs_ExistsChatEntriesResponse,
    responseDeserialize: deserialize_logs_ExistsChatEntriesResponse
  },
  // 	Request Chat Entries List
  listChatEntries: {
    path: '/logs.Logs/ListChatEntries',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListChatEntriesRequest,
    responseType: proto_logs_pb.ListChatEntriesResponse,
    requestSerialize: serialize_logs_ListChatEntriesRequest,
    requestDeserialize: deserialize_logs_ListChatEntriesRequest,
    responseSerialize: serialize_logs_ListChatEntriesResponse,
    responseDeserialize: deserialize_logs_ListChatEntriesResponse
  },
  // 	List workflow processes
  listWorkflowLogs: {
    path: '/logs.Logs/ListWorkflowLogs',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListWorkflowLogsRequest,
    responseType: proto_logs_pb.ListWorkflowLogsResponse,
    requestSerialize: serialize_logs_ListWorkflowLogsRequest,
    requestDeserialize: deserialize_logs_ListWorkflowLogsRequest,
    responseSerialize: serialize_logs_ListWorkflowLogsResponse,
    responseDeserialize: deserialize_logs_ListWorkflowLogsResponse
  },
  // 	Request Recent Items
  listRecentItems: {
    path: '/logs.Logs/ListRecentItems',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListRecentItemsRequest,
    responseType: proto_logs_pb.ListRecentItemsResponse,
    requestSerialize: serialize_logs_ListRecentItemsRequest,
    requestDeserialize: deserialize_logs_ListRecentItemsRequest,
    responseSerialize: serialize_logs_ListRecentItemsResponse,
    responseDeserialize: deserialize_logs_ListRecentItemsResponse
  },
  // Request List User Activities
  listUserActivites: {
    path: '/logs.Logs/ListUserActivites',
    requestStream: false,
    responseStream: false,
    requestType: proto_logs_pb.ListUserActivitesRequest,
    responseType: proto_logs_pb.ListUserActivitesResponse,
    requestSerialize: serialize_logs_ListUserActivitesRequest,
    requestDeserialize: deserialize_logs_ListUserActivitesRequest,
    responseSerialize: serialize_logs_ListUserActivitesResponse,
    responseDeserialize: deserialize_logs_ListUserActivitesResponse
  }
};

exports.LogsClient = grpc.makeGenericClientConstructor(LogsService);
