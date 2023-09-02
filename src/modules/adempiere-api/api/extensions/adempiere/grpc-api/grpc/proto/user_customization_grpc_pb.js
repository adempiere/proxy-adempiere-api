// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                  *
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
var proto_user_customization_pb = require('../proto/user_customization_pb.js');
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

function serialize_user_customization_ListCustomizationsLevelRequest(arg) {
  if (!(arg instanceof proto_user_customization_pb.ListCustomizationsLevelRequest)) {
    throw new Error('Expected argument of type user_customization.ListCustomizationsLevelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_ListCustomizationsLevelRequest(buffer_arg) {
  return proto_user_customization_pb.ListCustomizationsLevelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_ListCustomizationsLevelResponse(arg) {
  if (!(arg instanceof proto_user_customization_pb.ListCustomizationsLevelResponse)) {
    throw new Error('Expected argument of type user_customization.ListCustomizationsLevelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_ListCustomizationsLevelResponse(buffer_arg) {
  return proto_user_customization_pb.ListCustomizationsLevelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_ListRolesRequest(arg) {
  if (!(arg instanceof proto_user_customization_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type user_customization.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_ListRolesRequest(buffer_arg) {
  return proto_user_customization_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_ListRolesResponse(arg) {
  if (!(arg instanceof proto_user_customization_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type user_customization.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_ListRolesResponse(buffer_arg) {
  return proto_user_customization_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_ListUsersRequest(arg) {
  if (!(arg instanceof proto_user_customization_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type user_customization.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_ListUsersRequest(buffer_arg) {
  return proto_user_customization_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_ListUsersResponse(arg) {
  if (!(arg instanceof proto_user_customization_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type user_customization.ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_ListUsersResponse(buffer_arg) {
  return proto_user_customization_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_SaveBrowseCustomizationRequest(arg) {
  if (!(arg instanceof proto_user_customization_pb.SaveBrowseCustomizationRequest)) {
    throw new Error('Expected argument of type user_customization.SaveBrowseCustomizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_SaveBrowseCustomizationRequest(buffer_arg) {
  return proto_user_customization_pb.SaveBrowseCustomizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_SaveProcessCustomizationRequest(arg) {
  if (!(arg instanceof proto_user_customization_pb.SaveProcessCustomizationRequest)) {
    throw new Error('Expected argument of type user_customization.SaveProcessCustomizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_SaveProcessCustomizationRequest(buffer_arg) {
  return proto_user_customization_pb.SaveProcessCustomizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_customization_SaveWindowCustomizationRequest(arg) {
  if (!(arg instanceof proto_user_customization_pb.SaveWindowCustomizationRequest)) {
    throw new Error('Expected argument of type user_customization.SaveWindowCustomizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_customization_SaveWindowCustomizationRequest(buffer_arg) {
  return proto_user_customization_pb.SaveWindowCustomizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The User Customization service definition.
var UserCustomizationService = exports.UserCustomizationService = {
  listUsers: {
    path: '/user_customization.UserCustomization/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_customization_pb.ListUsersRequest,
    responseType: proto_user_customization_pb.ListUsersResponse,
    requestSerialize: serialize_user_customization_ListUsersRequest,
    requestDeserialize: deserialize_user_customization_ListUsersRequest,
    responseSerialize: serialize_user_customization_ListUsersResponse,
    responseDeserialize: deserialize_user_customization_ListUsersResponse,
  },
  listRoles: {
    path: '/user_customization.UserCustomization/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_customization_pb.ListRolesRequest,
    responseType: proto_user_customization_pb.ListRolesResponse,
    requestSerialize: serialize_user_customization_ListRolesRequest,
    requestDeserialize: deserialize_user_customization_ListRolesRequest,
    responseSerialize: serialize_user_customization_ListRolesResponse,
    responseDeserialize: deserialize_user_customization_ListRolesResponse,
  },
  listCustomizationsLevel: {
    path: '/user_customization.UserCustomization/ListCustomizationsLevel',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_customization_pb.ListCustomizationsLevelRequest,
    responseType: proto_user_customization_pb.ListCustomizationsLevelResponse,
    requestSerialize: serialize_user_customization_ListCustomizationsLevelRequest,
    requestDeserialize: deserialize_user_customization_ListCustomizationsLevelRequest,
    responseSerialize: serialize_user_customization_ListCustomizationsLevelResponse,
    responseDeserialize: deserialize_user_customization_ListCustomizationsLevelResponse,
  },
  // User Customization
saveWindowCustomization: {
    path: '/user_customization.UserCustomization/SaveWindowCustomization',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_customization_pb.SaveWindowCustomizationRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_user_customization_SaveWindowCustomizationRequest,
    requestDeserialize: deserialize_user_customization_SaveWindowCustomizationRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  saveBrowseCustomization: {
    path: '/user_customization.UserCustomization/SaveBrowseCustomization',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_customization_pb.SaveBrowseCustomizationRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_user_customization_SaveBrowseCustomizationRequest,
    requestDeserialize: deserialize_user_customization_SaveBrowseCustomizationRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  saveProcessCustomization: {
    path: '/user_customization.UserCustomization/SaveProcessCustomization',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_customization_pb.SaveProcessCustomizationRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_user_customization_SaveProcessCustomizationRequest,
    requestDeserialize: deserialize_user_customization_SaveProcessCustomizationRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
};

exports.UserCustomizationClient = grpc.makeGenericClientConstructor(UserCustomizationService);
