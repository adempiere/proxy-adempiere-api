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
var proto_file_management_pb = require('../proto/file_management_pb.js');
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

function serialize_file_management_Attachment(arg) {
  if (!(arg instanceof proto_file_management_pb.Attachment)) {
    throw new Error('Expected argument of type file_management.Attachment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_Attachment(buffer_arg) {
  return proto_file_management_pb.Attachment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_DeleteResourceReferenceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.DeleteResourceReferenceRequest)) {
    throw new Error('Expected argument of type file_management.DeleteResourceReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_DeleteResourceReferenceRequest(buffer_arg) {
  return proto_file_management_pb.DeleteResourceReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_ExistsAttachmentRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.ExistsAttachmentRequest)) {
    throw new Error('Expected argument of type file_management.ExistsAttachmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_ExistsAttachmentRequest(buffer_arg) {
  return proto_file_management_pb.ExistsAttachmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_ExistsAttachmentResponse(arg) {
  if (!(arg instanceof proto_file_management_pb.ExistsAttachmentResponse)) {
    throw new Error('Expected argument of type file_management.ExistsAttachmentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_ExistsAttachmentResponse(buffer_arg) {
  return proto_file_management_pb.ExistsAttachmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_GetAttachmentRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.GetAttachmentRequest)) {
    throw new Error('Expected argument of type file_management.GetAttachmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_GetAttachmentRequest(buffer_arg) {
  return proto_file_management_pb.GetAttachmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_GetResourceReferenceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.GetResourceReferenceRequest)) {
    throw new Error('Expected argument of type file_management.GetResourceReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_GetResourceReferenceRequest(buffer_arg) {
  return proto_file_management_pb.GetResourceReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_GetResourceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.GetResourceRequest)) {
    throw new Error('Expected argument of type file_management.GetResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_GetResourceRequest(buffer_arg) {
  return proto_file_management_pb.GetResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_LoadResourceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.LoadResourceRequest)) {
    throw new Error('Expected argument of type file_management.LoadResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_LoadResourceRequest(buffer_arg) {
  return proto_file_management_pb.LoadResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_Resource(arg) {
  if (!(arg instanceof proto_file_management_pb.Resource)) {
    throw new Error('Expected argument of type file_management.Resource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_Resource(buffer_arg) {
  return proto_file_management_pb.Resource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_ResourceReference(arg) {
  if (!(arg instanceof proto_file_management_pb.ResourceReference)) {
    throw new Error('Expected argument of type file_management.ResourceReference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_ResourceReference(buffer_arg) {
  return proto_file_management_pb.ResourceReference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_SetAttachmentDescriptionRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.SetAttachmentDescriptionRequest)) {
    throw new Error('Expected argument of type file_management.SetAttachmentDescriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_SetAttachmentDescriptionRequest(buffer_arg) {
  return proto_file_management_pb.SetAttachmentDescriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_SetResourceReferenceDescriptionRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.SetResourceReferenceDescriptionRequest)) {
    throw new Error('Expected argument of type file_management.SetResourceReferenceDescriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_SetResourceReferenceDescriptionRequest(buffer_arg) {
  return proto_file_management_pb.SetResourceReferenceDescriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_SetResourceReferenceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.SetResourceReferenceRequest)) {
    throw new Error('Expected argument of type file_management.SetResourceReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_SetResourceReferenceRequest(buffer_arg) {
  return proto_file_management_pb.SetResourceReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The File Management service definition.
var FileManagementService = exports.FileManagementService = {
  // 	Resource/File
loadResource: {
    path: '/file_management.FileManagement/LoadResource',
    requestStream: true,
    responseStream: false,
    requestType: proto_file_management_pb.LoadResourceRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_LoadResourceRequest,
    requestDeserialize: deserialize_file_management_LoadResourceRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
  getResource: {
    path: '/file_management.FileManagement/GetResource',
    requestStream: false,
    responseStream: true,
    requestType: proto_file_management_pb.GetResourceRequest,
    responseType: proto_file_management_pb.Resource,
    requestSerialize: serialize_file_management_GetResourceRequest,
    requestDeserialize: deserialize_file_management_GetResourceRequest,
    responseSerialize: serialize_file_management_Resource,
    responseDeserialize: deserialize_file_management_Resource,
  },
  // 	Attachment
setAttachmentDescription: {
    path: '/file_management.FileManagement/SetAttachmentDescription',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.SetAttachmentDescriptionRequest,
    responseType: proto_file_management_pb.Attachment,
    requestSerialize: serialize_file_management_SetAttachmentDescriptionRequest,
    requestDeserialize: deserialize_file_management_SetAttachmentDescriptionRequest,
    responseSerialize: serialize_file_management_Attachment,
    responseDeserialize: deserialize_file_management_Attachment,
  },
  existsAttachment: {
    path: '/file_management.FileManagement/ExistsAttachment',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.ExistsAttachmentRequest,
    responseType: proto_file_management_pb.ExistsAttachmentResponse,
    requestSerialize: serialize_file_management_ExistsAttachmentRequest,
    requestDeserialize: deserialize_file_management_ExistsAttachmentRequest,
    responseSerialize: serialize_file_management_ExistsAttachmentResponse,
    responseDeserialize: deserialize_file_management_ExistsAttachmentResponse,
  },
  getAttachment: {
    path: '/file_management.FileManagement/GetAttachment',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.GetAttachmentRequest,
    responseType: proto_file_management_pb.Attachment,
    requestSerialize: serialize_file_management_GetAttachmentRequest,
    requestDeserialize: deserialize_file_management_GetAttachmentRequest,
    responseSerialize: serialize_file_management_Attachment,
    responseDeserialize: deserialize_file_management_Attachment,
  },
  // 	Resource Reference
setResourceReference: {
    path: '/file_management.FileManagement/SetResourceReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.SetResourceReferenceRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_SetResourceReferenceRequest,
    requestDeserialize: deserialize_file_management_SetResourceReferenceRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
  setResourceReferenceDescription: {
    path: '/file_management.FileManagement/SetResourceReferenceDescription',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.SetResourceReferenceDescriptionRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_SetResourceReferenceDescriptionRequest,
    requestDeserialize: deserialize_file_management_SetResourceReferenceDescriptionRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
  getResourceReference: {
    path: '/file_management.FileManagement/GetResourceReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.GetResourceReferenceRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_GetResourceReferenceRequest,
    requestDeserialize: deserialize_file_management_GetResourceReferenceRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
  deleteResourceReference: {
    path: '/file_management.FileManagement/DeleteResourceReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.DeleteResourceReferenceRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_file_management_DeleteResourceReferenceRequest,
    requestDeserialize: deserialize_file_management_DeleteResourceReferenceRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
};

exports.FileManagementClient = grpc.makeGenericClientConstructor(FileManagementService);
