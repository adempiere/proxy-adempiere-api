// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
var proto_time_record_pb = require('../proto/time_record_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_time_record_CreateTimeRecordRequest (arg) {
  if (!(arg instanceof proto_time_record_pb.CreateTimeRecordRequest)) {
    throw new Error('Expected argument of type time_record.CreateTimeRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_CreateTimeRecordRequest (buffer_arg) {
  return proto_time_record_pb.CreateTimeRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ListIssuesRequest (arg) {
  if (!(arg instanceof proto_time_record_pb.ListIssuesRequest)) {
    throw new Error('Expected argument of type time_record.ListIssuesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ListIssuesRequest (buffer_arg) {
  return proto_time_record_pb.ListIssuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ListIssuesResponse (arg) {
  if (!(arg instanceof proto_time_record_pb.ListIssuesResponse)) {
    throw new Error('Expected argument of type time_record.ListIssuesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ListIssuesResponse (buffer_arg) {
  return proto_time_record_pb.ListIssuesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ListProjectsRequest (arg) {
  if (!(arg instanceof proto_time_record_pb.ListProjectsRequest)) {
    throw new Error('Expected argument of type time_record.ListProjectsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ListProjectsRequest (buffer_arg) {
  return proto_time_record_pb.ListProjectsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ListProjectsResponse (arg) {
  if (!(arg instanceof proto_time_record_pb.ListProjectsResponse)) {
    throw new Error('Expected argument of type time_record.ListProjectsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ListProjectsResponse (buffer_arg) {
  return proto_time_record_pb.ListProjectsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ListTimeRecordRequest (arg) {
  if (!(arg instanceof proto_time_record_pb.ListTimeRecordRequest)) {
    throw new Error('Expected argument of type time_record.ListTimeRecordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ListTimeRecordRequest (buffer_arg) {
  return proto_time_record_pb.ListTimeRecordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ListTimeRecordResponse (arg) {
  if (!(arg instanceof proto_time_record_pb.ListTimeRecordResponse)) {
    throw new Error('Expected argument of type time_record.ListTimeRecordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ListTimeRecordResponse (buffer_arg) {
  return proto_time_record_pb.ListTimeRecordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_record_ResourceAssignment (arg) {
  if (!(arg instanceof proto_time_record_pb.ResourceAssignment)) {
    throw new Error('Expected argument of type time_record.ResourceAssignment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_record_ResourceAssignment (buffer_arg) {
  return proto_time_record_pb.ResourceAssignment.deserializeBinary(new Uint8Array(buffer_arg));
}

// The Time Record service definition
var TimeRecordService = exports.TimeRecordService = {
  listIssues: {
    path: '/time_record.TimeRecord/ListIssues',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_record_pb.ListIssuesRequest,
    responseType: proto_time_record_pb.ListIssuesResponse,
    requestSerialize: serialize_time_record_ListIssuesRequest,
    requestDeserialize: deserialize_time_record_ListIssuesRequest,
    responseSerialize: serialize_time_record_ListIssuesResponse,
    responseDeserialize: deserialize_time_record_ListIssuesResponse
  },
  listProjects: {
    path: '/time_record.TimeRecord/ListProjects',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_record_pb.ListProjectsRequest,
    responseType: proto_time_record_pb.ListProjectsResponse,
    requestSerialize: serialize_time_record_ListProjectsRequest,
    requestDeserialize: deserialize_time_record_ListProjectsRequest,
    responseSerialize: serialize_time_record_ListProjectsResponse,
    responseDeserialize: deserialize_time_record_ListProjectsResponse
  },
  // Resource Assigment
  createTimeRecord: {
    path: '/time_record.TimeRecord/CreateTimeRecord',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_record_pb.CreateTimeRecordRequest,
    responseType: proto_time_record_pb.ResourceAssignment,
    requestSerialize: serialize_time_record_CreateTimeRecordRequest,
    requestDeserialize: deserialize_time_record_CreateTimeRecordRequest,
    responseSerialize: serialize_time_record_ResourceAssignment,
    responseDeserialize: deserialize_time_record_ResourceAssignment
  },
  listTimeRecord: {
    path: '/time_record.TimeRecord/ListTimeRecord',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_record_pb.ListTimeRecordRequest,
    responseType: proto_time_record_pb.ListTimeRecordResponse,
    requestSerialize: serialize_time_record_ListTimeRecordRequest,
    requestDeserialize: deserialize_time_record_ListTimeRecordRequest,
    responseSerialize: serialize_time_record_ListTimeRecordResponse,
    responseDeserialize: deserialize_time_record_ListTimeRecordResponse
  }
};

exports.TimeRecordClient = grpc.makeGenericClientConstructor(TimeRecordService);
