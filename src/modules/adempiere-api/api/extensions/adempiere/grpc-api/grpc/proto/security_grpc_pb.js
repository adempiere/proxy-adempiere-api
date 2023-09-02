// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ************************************************************************************
// Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
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
var proto_security_pb = require('../proto/security_pb.js');

function serialize_security_ChangeRoleRequest(arg) {
  if (!(arg instanceof proto_security_pb.ChangeRoleRequest)) {
    throw new Error('Expected argument of type security.ChangeRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_ChangeRoleRequest(buffer_arg) {
  return proto_security_pb.ChangeRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_ListRolesRequest(arg) {
  if (!(arg instanceof proto_security_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type security.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_ListRolesRequest(buffer_arg) {
  return proto_security_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_ListRolesResponse(arg) {
  if (!(arg instanceof proto_security_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type security.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_ListRolesResponse(buffer_arg) {
  return proto_security_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_ListServicesRequest(arg) {
  if (!(arg instanceof proto_security_pb.ListServicesRequest)) {
    throw new Error('Expected argument of type security.ListServicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_ListServicesRequest(buffer_arg) {
  return proto_security_pb.ListServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_ListServicesResponse(arg) {
  if (!(arg instanceof proto_security_pb.ListServicesResponse)) {
    throw new Error('Expected argument of type security.ListServicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_ListServicesResponse(buffer_arg) {
  return proto_security_pb.ListServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_LoginOpenIDRequest(arg) {
  if (!(arg instanceof proto_security_pb.LoginOpenIDRequest)) {
    throw new Error('Expected argument of type security.LoginOpenIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_LoginOpenIDRequest(buffer_arg) {
  return proto_security_pb.LoginOpenIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_LoginRequest(arg) {
  if (!(arg instanceof proto_security_pb.LoginRequest)) {
    throw new Error('Expected argument of type security.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_LoginRequest(buffer_arg) {
  return proto_security_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_LogoutRequest(arg) {
  if (!(arg instanceof proto_security_pb.LogoutRequest)) {
    throw new Error('Expected argument of type security.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_LogoutRequest(buffer_arg) {
  return proto_security_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_Menu(arg) {
  if (!(arg instanceof proto_security_pb.Menu)) {
    throw new Error('Expected argument of type security.Menu');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_Menu(buffer_arg) {
  return proto_security_pb.Menu.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_MenuRequest(arg) {
  if (!(arg instanceof proto_security_pb.MenuRequest)) {
    throw new Error('Expected argument of type security.MenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_MenuRequest(buffer_arg) {
  return proto_security_pb.MenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_Session(arg) {
  if (!(arg instanceof proto_security_pb.Session)) {
    throw new Error('Expected argument of type security.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_Session(buffer_arg) {
  return proto_security_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_SessionInfo(arg) {
  if (!(arg instanceof proto_security_pb.SessionInfo)) {
    throw new Error('Expected argument of type security.SessionInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_SessionInfo(buffer_arg) {
  return proto_security_pb.SessionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_SessionInfoRequest(arg) {
  if (!(arg instanceof proto_security_pb.SessionInfoRequest)) {
    throw new Error('Expected argument of type security.SessionInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_SessionInfoRequest(buffer_arg) {
  return proto_security_pb.SessionInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_SetSessionAttributeRequest(arg) {
  if (!(arg instanceof proto_security_pb.SetSessionAttributeRequest)) {
    throw new Error('Expected argument of type security.SetSessionAttributeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_SetSessionAttributeRequest(buffer_arg) {
  return proto_security_pb.SetSessionAttributeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_UserInfo(arg) {
  if (!(arg instanceof proto_security_pb.UserInfo)) {
    throw new Error('Expected argument of type security.UserInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_UserInfo(buffer_arg) {
  return proto_security_pb.UserInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_security_UserInfoRequest(arg) {
  if (!(arg instanceof proto_security_pb.UserInfoRequest)) {
    throw new Error('Expected argument of type security.UserInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_security_UserInfoRequest(buffer_arg) {
  return proto_security_pb.UserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var SecurityService = exports.SecurityService = {
  // Request login from user
runLogin: {
    path: '/security.Security/RunLogin',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.LoginRequest,
    responseType: proto_security_pb.Session,
    requestSerialize: serialize_security_LoginRequest,
    requestDeserialize: deserialize_security_LoginRequest,
    responseSerialize: serialize_security_Session,
    responseDeserialize: deserialize_security_Session,
  },
  // Request a Role from uuid
runLogout: {
    path: '/security.Security/RunLogout',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.LogoutRequest,
    responseType: proto_security_pb.Session,
    requestSerialize: serialize_security_LogoutRequest,
    requestDeserialize: deserialize_security_LogoutRequest,
    responseSerialize: serialize_security_Session,
    responseDeserialize: deserialize_security_Session,
  },
  // Request user roles from SessionInfo
getUserInfo: {
    path: '/security.Security/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.UserInfoRequest,
    responseType: proto_security_pb.UserInfo,
    requestSerialize: serialize_security_UserInfoRequest,
    requestDeserialize: deserialize_security_UserInfoRequest,
    responseSerialize: serialize_security_UserInfo,
    responseDeserialize: deserialize_security_UserInfo,
  },
  // Request Menu from Parent UUID
getMenu: {
    path: '/security.Security/GetMenu',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.MenuRequest,
    responseType: proto_security_pb.Menu,
    requestSerialize: serialize_security_MenuRequest,
    requestDeserialize: deserialize_security_MenuRequest,
    responseSerialize: serialize_security_Menu,
    responseDeserialize: deserialize_security_Menu,
  },
  // Request change role
runChangeRole: {
    path: '/security.Security/RunChangeRole',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.ChangeRoleRequest,
    responseType: proto_security_pb.Session,
    requestSerialize: serialize_security_ChangeRoleRequest,
    requestDeserialize: deserialize_security_ChangeRoleRequest,
    responseSerialize: serialize_security_Session,
    responseDeserialize: deserialize_security_Session,
  },
  // Request session
getSessionInfo: {
    path: '/security.Security/GetSessionInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.SessionInfoRequest,
    responseType: proto_security_pb.SessionInfo,
    requestSerialize: serialize_security_SessionInfoRequest,
    requestDeserialize: deserialize_security_SessionInfoRequest,
    responseSerialize: serialize_security_SessionInfo,
    responseDeserialize: deserialize_security_SessionInfo,
  },
  setSessionAttribute: {
    path: '/security.Security/SetSessionAttribute',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.SetSessionAttributeRequest,
    responseType: proto_security_pb.Session,
    requestSerialize: serialize_security_SetSessionAttributeRequest,
    requestDeserialize: deserialize_security_SetSessionAttributeRequest,
    responseSerialize: serialize_security_Session,
    responseDeserialize: deserialize_security_Session,
  },
  // List Roles
listRoles: {
    path: '/security.Security/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.ListRolesRequest,
    responseType: proto_security_pb.ListRolesResponse,
    requestSerialize: serialize_security_ListRolesRequest,
    requestDeserialize: deserialize_security_ListRolesRequest,
    responseSerialize: serialize_security_ListRolesResponse,
    responseDeserialize: deserialize_security_ListRolesResponse,
  },
  // List Available Services
listServices: {
    path: '/security.Security/ListServices',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.ListServicesRequest,
    responseType: proto_security_pb.ListServicesResponse,
    requestSerialize: serialize_security_ListServicesRequest,
    requestDeserialize: deserialize_security_ListServicesRequest,
    responseSerialize: serialize_security_ListServicesResponse,
    responseDeserialize: deserialize_security_ListServicesResponse,
  },
  // Request login from Open ID
runLoginOpenID: {
    path: '/security.Security/RunLoginOpenID',
    requestStream: false,
    responseStream: false,
    requestType: proto_security_pb.LoginOpenIDRequest,
    responseType: proto_security_pb.Session,
    requestSerialize: serialize_security_LoginOpenIDRequest,
    requestDeserialize: deserialize_security_LoginOpenIDRequest,
    responseSerialize: serialize_security_Session,
    responseDeserialize: deserialize_security_Session,
  },
};

exports.SecurityClient = grpc.makeGenericClientConstructor(SecurityService);
