// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
var proto_record_management_pb = require('../proto/record_management_pb.js');

function serialize_record_management_ToggleIsActiveRecordsRequest(arg) {
  if (!(arg instanceof proto_record_management_pb.ToggleIsActiveRecordsRequest)) {
    throw new Error('Expected argument of type record_management.ToggleIsActiveRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_record_management_ToggleIsActiveRecordsRequest(buffer_arg) {
  return proto_record_management_pb.ToggleIsActiveRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_record_management_ToggleIsActiveRecordsResponse(arg) {
  if (!(arg instanceof proto_record_management_pb.ToggleIsActiveRecordsResponse)) {
    throw new Error('Expected argument of type record_management.ToggleIsActiveRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_record_management_ToggleIsActiveRecordsResponse(buffer_arg) {
  return proto_record_management_pb.ToggleIsActiveRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecordManagementService = exports.RecordManagementService = {
  toggleIsActiveRecords: {
    path: '/record_management.RecordManagement/ToggleIsActiveRecords',
    requestStream: false,
    responseStream: false,
    requestType: proto_record_management_pb.ToggleIsActiveRecordsRequest,
    responseType: proto_record_management_pb.ToggleIsActiveRecordsResponse,
    requestSerialize: serialize_record_management_ToggleIsActiveRecordsRequest,
    requestDeserialize: deserialize_record_management_ToggleIsActiveRecordsRequest,
    responseSerialize: serialize_record_management_ToggleIsActiveRecordsResponse,
    responseDeserialize: deserialize_record_management_ToggleIsActiveRecordsResponse,
  },
};

exports.RecordManagementClient = grpc.makeGenericClientConstructor(RecordManagementService);
