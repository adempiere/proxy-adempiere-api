// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Yamel Senih ysenih@erpya.com                                     *
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
var proto_dictionary_pb = require('../proto/dictionary_pb.js');

function serialize_dictionary_Browser (arg) {
  if (!(arg instanceof proto_dictionary_pb.Browser)) {
    throw new Error('Expected argument of type dictionary.Browser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Browser (buffer_arg) {
  return proto_dictionary_pb.Browser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_EntityRequest (arg) {
  if (!(arg instanceof proto_dictionary_pb.EntityRequest)) {
    throw new Error('Expected argument of type dictionary.EntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_EntityRequest (buffer_arg) {
  return proto_dictionary_pb.EntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_Field (arg) {
  if (!(arg instanceof proto_dictionary_pb.Field)) {
    throw new Error('Expected argument of type dictionary.Field');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Field (buffer_arg) {
  return proto_dictionary_pb.Field.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_FieldRequest (arg) {
  if (!(arg instanceof proto_dictionary_pb.FieldRequest)) {
    throw new Error('Expected argument of type dictionary.FieldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_FieldRequest (buffer_arg) {
  return proto_dictionary_pb.FieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_Form (arg) {
  if (!(arg instanceof proto_dictionary_pb.Form)) {
    throw new Error('Expected argument of type dictionary.Form');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Form (buffer_arg) {
  return proto_dictionary_pb.Form.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_ListFieldsRequest (arg) {
  if (!(arg instanceof proto_dictionary_pb.ListFieldsRequest)) {
    throw new Error('Expected argument of type dictionary.ListFieldsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_ListFieldsRequest (buffer_arg) {
  return proto_dictionary_pb.ListFieldsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_ListFieldsResponse (arg) {
  if (!(arg instanceof proto_dictionary_pb.ListFieldsResponse)) {
    throw new Error('Expected argument of type dictionary.ListFieldsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_ListFieldsResponse (buffer_arg) {
  return proto_dictionary_pb.ListFieldsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_Process (arg) {
  if (!(arg instanceof proto_dictionary_pb.Process)) {
    throw new Error('Expected argument of type dictionary.Process');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Process (buffer_arg) {
  return proto_dictionary_pb.Process.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_Reference (arg) {
  if (!(arg instanceof proto_dictionary_pb.Reference)) {
    throw new Error('Expected argument of type dictionary.Reference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Reference (buffer_arg) {
  return proto_dictionary_pb.Reference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_ReferenceRequest (arg) {
  if (!(arg instanceof proto_dictionary_pb.ReferenceRequest)) {
    throw new Error('Expected argument of type dictionary.ReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_ReferenceRequest (buffer_arg) {
  return proto_dictionary_pb.ReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_Tab (arg) {
  if (!(arg instanceof proto_dictionary_pb.Tab)) {
    throw new Error('Expected argument of type dictionary.Tab');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Tab (buffer_arg) {
  return proto_dictionary_pb.Tab.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_ValidationRule (arg) {
  if (!(arg instanceof proto_dictionary_pb.ValidationRule)) {
    throw new Error('Expected argument of type dictionary.ValidationRule');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_ValidationRule (buffer_arg) {
  return proto_dictionary_pb.ValidationRule.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dictionary_Window (arg) {
  if (!(arg instanceof proto_dictionary_pb.Window)) {
    throw new Error('Expected argument of type dictionary.Window');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dictionary_Window (buffer_arg) {
  return proto_dictionary_pb.Window.deserializeBinary(new Uint8Array(buffer_arg));
}

// The greeting service definition.
var DictionaryService = exports.DictionaryService = {
  // Request a Window
  getWindow: {
    path: '/dictionary.Dictionary/GetWindow',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.EntityRequest,
    responseType: proto_dictionary_pb.Window,
    requestSerialize: serialize_dictionary_EntityRequest,
    requestDeserialize: deserialize_dictionary_EntityRequest,
    responseSerialize: serialize_dictionary_Window,
    responseDeserialize: deserialize_dictionary_Window
  },
  // Request a Tab
  getTab: {
    path: '/dictionary.Dictionary/GetTab',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.EntityRequest,
    responseType: proto_dictionary_pb.Tab,
    requestSerialize: serialize_dictionary_EntityRequest,
    requestDeserialize: deserialize_dictionary_EntityRequest,
    responseSerialize: serialize_dictionary_Tab,
    responseDeserialize: deserialize_dictionary_Tab
  },
  // Request a Field
  getField: {
    path: '/dictionary.Dictionary/GetField',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.FieldRequest,
    responseType: proto_dictionary_pb.Field,
    requestSerialize: serialize_dictionary_FieldRequest,
    requestDeserialize: deserialize_dictionary_FieldRequest,
    responseSerialize: serialize_dictionary_Field,
    responseDeserialize: deserialize_dictionary_Field
  },
  // Reference Request
  getReference: {
    path: '/dictionary.Dictionary/GetReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.ReferenceRequest,
    responseType: proto_dictionary_pb.Reference,
    requestSerialize: serialize_dictionary_ReferenceRequest,
    requestDeserialize: deserialize_dictionary_ReferenceRequest,
    responseSerialize: serialize_dictionary_Reference,
    responseDeserialize: deserialize_dictionary_Reference
  },
  // Reference Request
  getValidationRule: {
    path: '/dictionary.Dictionary/GetValidationRule',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.EntityRequest,
    responseType: proto_dictionary_pb.ValidationRule,
    requestSerialize: serialize_dictionary_EntityRequest,
    requestDeserialize: deserialize_dictionary_EntityRequest,
    responseSerialize: serialize_dictionary_ValidationRule,
    responseDeserialize: deserialize_dictionary_ValidationRule
  },
  // Request Process
  getProcess: {
    path: '/dictionary.Dictionary/GetProcess',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.EntityRequest,
    responseType: proto_dictionary_pb.Process,
    requestSerialize: serialize_dictionary_EntityRequest,
    requestDeserialize: deserialize_dictionary_EntityRequest,
    responseSerialize: serialize_dictionary_Process,
    responseDeserialize: deserialize_dictionary_Process
  },
  // Request Browser
  getBrowser: {
    path: '/dictionary.Dictionary/GetBrowser',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.EntityRequest,
    responseType: proto_dictionary_pb.Browser,
    requestSerialize: serialize_dictionary_EntityRequest,
    requestDeserialize: deserialize_dictionary_EntityRequest,
    responseSerialize: serialize_dictionary_Browser,
    responseDeserialize: deserialize_dictionary_Browser
  },
  // Get Form
  getForm: {
    path: '/dictionary.Dictionary/GetForm',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.EntityRequest,
    responseType: proto_dictionary_pb.Form,
    requestSerialize: serialize_dictionary_EntityRequest,
    requestDeserialize: deserialize_dictionary_EntityRequest,
    responseSerialize: serialize_dictionary_Form,
    responseDeserialize: deserialize_dictionary_Form
  },
  // List Search Info Fields
  listSearchInfoFields: {
    path: '/dictionary.Dictionary/ListSearchInfoFields',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.ListFieldsRequest,
    responseType: proto_dictionary_pb.ListFieldsResponse,
    requestSerialize: serialize_dictionary_ListFieldsRequest,
    requestDeserialize: deserialize_dictionary_ListFieldsRequest,
    responseSerialize: serialize_dictionary_ListFieldsResponse,
    responseDeserialize: deserialize_dictionary_ListFieldsResponse
  },
  listIdentifiersFields: {
    path: '/dictionary.Dictionary/ListIdentifiersFields',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.ListFieldsRequest,
    responseType: proto_dictionary_pb.ListFieldsResponse,
    requestSerialize: serialize_dictionary_ListFieldsRequest,
    requestDeserialize: deserialize_dictionary_ListFieldsRequest,
    responseSerialize: serialize_dictionary_ListFieldsResponse,
    responseDeserialize: deserialize_dictionary_ListFieldsResponse
  },
  listTableSearchFields: {
    path: '/dictionary.Dictionary/ListTableSearchFields',
    requestStream: false,
    responseStream: false,
    requestType: proto_dictionary_pb.ListFieldsRequest,
    responseType: proto_dictionary_pb.ListFieldsResponse,
    requestSerialize: serialize_dictionary_ListFieldsRequest,
    requestDeserialize: deserialize_dictionary_ListFieldsRequest,
    responseSerialize: serialize_dictionary_ListFieldsResponse,
    responseDeserialize: deserialize_dictionary_ListFieldsResponse
  }
};

exports.DictionaryClient = grpc.makeGenericClientConstructor(DictionaryService);
