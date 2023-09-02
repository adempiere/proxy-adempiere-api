// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ************************************************************************************
// Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
// Contributor(s): Yamel Senih ysenih@erpya.com                                      *
// This program is free software: you can redistribute it and/or modify              *
// it under the terms of the GNU General Public License as published by              *
// the Free Software Foundation, either version 2 of the License, or                 *
// (at your option) any later version.                                               *
// This program is distributed in the hope that it will be useful,                   *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
// GNU General Public License for more details.                                      *
// You should have received a copy of the GNU General Public License                 *
// along with this program. If not, see <https://www.gnu.org/licenses/>.             *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_enrollment_pb = require('../proto/enrollment_pb.js');

function serialize_enrollment_ActivateUserRequest(arg) {
  if (!(arg instanceof proto_enrollment_pb.ActivateUserRequest)) {
    throw new Error('Expected argument of type enrollment.ActivateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_ActivateUserRequest(buffer_arg) {
  return proto_enrollment_pb.ActivateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_enrollment_ActivateUserResponse(arg) {
  if (!(arg instanceof proto_enrollment_pb.ActivateUserResponse)) {
    throw new Error('Expected argument of type enrollment.ActivateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_ActivateUserResponse(buffer_arg) {
  return proto_enrollment_pb.ActivateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_enrollment_EnrollUserRequest(arg) {
  if (!(arg instanceof proto_enrollment_pb.EnrollUserRequest)) {
    throw new Error('Expected argument of type enrollment.EnrollUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_EnrollUserRequest(buffer_arg) {
  return proto_enrollment_pb.EnrollUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_enrollment_ResetPasswordRequest(arg) {
  if (!(arg instanceof proto_enrollment_pb.ResetPasswordRequest)) {
    throw new Error('Expected argument of type enrollment.ResetPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_ResetPasswordRequest(buffer_arg) {
  return proto_enrollment_pb.ResetPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_enrollment_ResetPasswordResponse(arg) {
  if (!(arg instanceof proto_enrollment_pb.ResetPasswordResponse)) {
    throw new Error('Expected argument of type enrollment.ResetPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_ResetPasswordResponse(buffer_arg) {
  return proto_enrollment_pb.ResetPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_enrollment_ResetPasswordTokenRequest(arg) {
  if (!(arg instanceof proto_enrollment_pb.ResetPasswordTokenRequest)) {
    throw new Error('Expected argument of type enrollment.ResetPasswordTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_ResetPasswordTokenRequest(buffer_arg) {
  return proto_enrollment_pb.ResetPasswordTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_enrollment_User(arg) {
  if (!(arg instanceof proto_enrollment_pb.User)) {
    throw new Error('Expected argument of type enrollment.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_enrollment_User(buffer_arg) {
  return proto_enrollment_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var RegisterService = exports.RegisterService = {
  // Request enroll User
enrollUser: {
    path: '/enrollment.Register/EnrollUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_enrollment_pb.EnrollUserRequest,
    responseType: proto_enrollment_pb.User,
    requestSerialize: serialize_enrollment_EnrollUserRequest,
    requestDeserialize: deserialize_enrollment_EnrollUserRequest,
    responseSerialize: serialize_enrollment_User,
    responseDeserialize: deserialize_enrollment_User,
  },
  // 
resetPassword: {
    path: '/enrollment.Register/ResetPassword',
    requestStream: false,
    responseStream: false,
    requestType: proto_enrollment_pb.ResetPasswordRequest,
    responseType: proto_enrollment_pb.ResetPasswordResponse,
    requestSerialize: serialize_enrollment_ResetPasswordRequest,
    requestDeserialize: deserialize_enrollment_ResetPasswordRequest,
    responseSerialize: serialize_enrollment_ResetPasswordResponse,
    responseDeserialize: deserialize_enrollment_ResetPasswordResponse,
  },
  // 
resetPasswordFromToken: {
    path: '/enrollment.Register/ResetPasswordFromToken',
    requestStream: false,
    responseStream: false,
    requestType: proto_enrollment_pb.ResetPasswordTokenRequest,
    responseType: proto_enrollment_pb.ResetPasswordResponse,
    requestSerialize: serialize_enrollment_ResetPasswordTokenRequest,
    requestDeserialize: deserialize_enrollment_ResetPasswordTokenRequest,
    responseSerialize: serialize_enrollment_ResetPasswordResponse,
    responseDeserialize: deserialize_enrollment_ResetPasswordResponse,
  },
  // 
activateUser: {
    path: '/enrollment.Register/ActivateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_enrollment_pb.ActivateUserRequest,
    responseType: proto_enrollment_pb.ActivateUserResponse,
    requestSerialize: serialize_enrollment_ActivateUserRequest,
    requestDeserialize: deserialize_enrollment_ActivateUserRequest,
    responseSerialize: serialize_enrollment_ActivateUserResponse,
    responseDeserialize: deserialize_enrollment_ActivateUserResponse,
  },
};

exports.RegisterClient = grpc.makeGenericClientConstructor(RegisterService);
