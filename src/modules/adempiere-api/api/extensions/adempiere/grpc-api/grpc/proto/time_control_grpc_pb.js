// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
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
var proto_time_control_pb = require('../proto/time_control_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_ConfirmResourceAssignmentRequest(arg) {
  if (!(arg instanceof proto_time_control_pb.ConfirmResourceAssignmentRequest)) {
    throw new Error('Expected argument of type time_control.ConfirmResourceAssignmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_ConfirmResourceAssignmentRequest(buffer_arg) {
  return proto_time_control_pb.ConfirmResourceAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_CreateResourceAssignmentRequest(arg) {
  if (!(arg instanceof proto_time_control_pb.CreateResourceAssignmentRequest)) {
    throw new Error('Expected argument of type time_control.CreateResourceAssignmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_CreateResourceAssignmentRequest(buffer_arg) {
  return proto_time_control_pb.CreateResourceAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_DeleteResourceAssignmentRequest(arg) {
  if (!(arg instanceof proto_time_control_pb.DeleteResourceAssignmentRequest)) {
    throw new Error('Expected argument of type time_control.DeleteResourceAssignmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_DeleteResourceAssignmentRequest(buffer_arg) {
  return proto_time_control_pb.DeleteResourceAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_ListResourcesAssignmentRequest(arg) {
  if (!(arg instanceof proto_time_control_pb.ListResourcesAssignmentRequest)) {
    throw new Error('Expected argument of type time_control.ListResourcesAssignmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_ListResourcesAssignmentRequest(buffer_arg) {
  return proto_time_control_pb.ListResourcesAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_ListResourcesAssignmentResponse(arg) {
  if (!(arg instanceof proto_time_control_pb.ListResourcesAssignmentResponse)) {
    throw new Error('Expected argument of type time_control.ListResourcesAssignmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_ListResourcesAssignmentResponse(buffer_arg) {
  return proto_time_control_pb.ListResourcesAssignmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_ResourceAssignment(arg) {
  if (!(arg instanceof proto_time_control_pb.ResourceAssignment)) {
    throw new Error('Expected argument of type time_control.ResourceAssignment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_ResourceAssignment(buffer_arg) {
  return proto_time_control_pb.ResourceAssignment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_time_control_UpdateResourceAssignmentRequest(arg) {
  if (!(arg instanceof proto_time_control_pb.UpdateResourceAssignmentRequest)) {
    throw new Error('Expected argument of type time_control.UpdateResourceAssignmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_time_control_UpdateResourceAssignmentRequest(buffer_arg) {
  return proto_time_control_pb.UpdateResourceAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Time Control service definition.
var TimeControlService = exports.TimeControlService = {
  // Create Resource Assignment
createResourceAssignment: {
    path: '/time_control.TimeControl/CreateResourceAssignment',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_control_pb.CreateResourceAssignmentRequest,
    responseType: proto_time_control_pb.ResourceAssignment,
    requestSerialize: serialize_time_control_CreateResourceAssignmentRequest,
    requestDeserialize: deserialize_time_control_CreateResourceAssignmentRequest,
    responseSerialize: serialize_time_control_ResourceAssignment,
    responseDeserialize: deserialize_time_control_ResourceAssignment,
  },
  // List Resource Assignment
listResourcesAssignment: {
    path: '/time_control.TimeControl/ListResourcesAssignment',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_control_pb.ListResourcesAssignmentRequest,
    responseType: proto_time_control_pb.ListResourcesAssignmentResponse,
    requestSerialize: serialize_time_control_ListResourcesAssignmentRequest,
    requestDeserialize: deserialize_time_control_ListResourcesAssignmentRequest,
    responseSerialize: serialize_time_control_ListResourcesAssignmentResponse,
    responseDeserialize: deserialize_time_control_ListResourcesAssignmentResponse,
  },
  // Update Resource Assignment
updateResourceAssignment: {
    path: '/time_control.TimeControl/UpdateResourceAssignment',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_control_pb.UpdateResourceAssignmentRequest,
    responseType: proto_time_control_pb.ResourceAssignment,
    requestSerialize: serialize_time_control_UpdateResourceAssignmentRequest,
    requestDeserialize: deserialize_time_control_UpdateResourceAssignmentRequest,
    responseSerialize: serialize_time_control_ResourceAssignment,
    responseDeserialize: deserialize_time_control_ResourceAssignment,
  },
  // Delete Resource Assignment
deleteResourceAssignment: {
    path: '/time_control.TimeControl/DeleteResourceAssignment',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_control_pb.DeleteResourceAssignmentRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_time_control_DeleteResourceAssignmentRequest,
    requestDeserialize: deserialize_time_control_DeleteResourceAssignmentRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // Confirm Resource Assignment
confirmResourceAssignment: {
    path: '/time_control.TimeControl/ConfirmResourceAssignment',
    requestStream: false,
    responseStream: false,
    requestType: proto_time_control_pb.ConfirmResourceAssignmentRequest,
    responseType: proto_time_control_pb.ResourceAssignment,
    requestSerialize: serialize_time_control_ConfirmResourceAssignmentRequest,
    requestDeserialize: deserialize_time_control_ConfirmResourceAssignmentRequest,
    responseSerialize: serialize_time_control_ResourceAssignment,
    responseDeserialize: deserialize_time_control_ResourceAssignment,
  },
};

exports.TimeControlClient = grpc.makeGenericClientConstructor(TimeControlService);
