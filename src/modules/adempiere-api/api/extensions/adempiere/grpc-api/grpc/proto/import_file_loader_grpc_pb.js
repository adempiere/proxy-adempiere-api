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
var proto_import_file_loader_pb = require('../proto/import_file_loader_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_ListEntitiesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListEntitiesResponse)) {
    throw new Error('Expected argument of type data.ListEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListEntitiesResponse(buffer_arg) {
  return proto_business_pb.ListEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListLookupItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse(buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_GetImportFromatRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.GetImportFromatRequest)) {
    throw new Error('Expected argument of type import_file_loader.GetImportFromatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_GetImportFromatRequest(buffer_arg) {
  return proto_import_file_loader_pb.GetImportFromatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ImportFormat(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ImportFormat)) {
    throw new Error('Expected argument of type import_file_loader.ImportFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ImportFormat(buffer_arg) {
  return proto_import_file_loader_pb.ImportFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListCharsetsRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListCharsetsRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListCharsetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListCharsetsRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListCharsetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListClientImportFormatsRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListClientImportFormatsRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListClientImportFormatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListClientImportFormatsRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListClientImportFormatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListFilePreviewRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListFilePreviewRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListFilePreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListFilePreviewRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListFilePreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListImportFormatsRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListImportFormatsRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListImportFormatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListImportFormatsRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListImportFormatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListImportProcessesRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListImportProcessesRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListImportProcessesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListImportProcessesRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListImportProcessesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListImportTablesRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListImportTablesRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListImportTablesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListImportTablesRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListImportTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListImportTablesResponse(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListImportTablesResponse)) {
    throw new Error('Expected argument of type import_file_loader.ListImportTablesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListImportTablesResponse(buffer_arg) {
  return proto_import_file_loader_pb.ListImportTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_SaveRecordsRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.SaveRecordsRequest)) {
    throw new Error('Expected argument of type import_file_loader.SaveRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_SaveRecordsRequest(buffer_arg) {
  return proto_import_file_loader_pb.SaveRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_SaveRecordsResponse(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.SaveRecordsResponse)) {
    throw new Error('Expected argument of type import_file_loader.SaveRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_SaveRecordsResponse(buffer_arg) {
  return proto_import_file_loader_pb.SaveRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImportFileLoaderService = exports.ImportFileLoaderService = {
  listCharsets: {
    path: '/import_file_loader.ImportFileLoader/ListCharsets',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListCharsetsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_import_file_loader_ListCharsetsRequest,
    requestDeserialize: deserialize_import_file_loader_ListCharsetsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listImportTables: {
    path: '/import_file_loader.ImportFileLoader/ListImportTables',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListImportTablesRequest,
    responseType: proto_import_file_loader_pb.ListImportTablesResponse,
    requestSerialize: serialize_import_file_loader_ListImportTablesRequest,
    requestDeserialize: deserialize_import_file_loader_ListImportTablesRequest,
    responseSerialize: serialize_import_file_loader_ListImportTablesResponse,
    responseDeserialize: deserialize_import_file_loader_ListImportTablesResponse,
  },
  listImportFormats: {
    path: '/import_file_loader.ImportFileLoader/ListImportFormats',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListImportFormatsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_import_file_loader_ListImportFormatsRequest,
    requestDeserialize: deserialize_import_file_loader_ListImportFormatsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listClientImportFormats: {
    path: '/import_file_loader.ImportFileLoader/ListClientImportFormats',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListClientImportFormatsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_import_file_loader_ListClientImportFormatsRequest,
    requestDeserialize: deserialize_import_file_loader_ListClientImportFormatsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  getImportFromat: {
    path: '/import_file_loader.ImportFileLoader/GetImportFromat',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.GetImportFromatRequest,
    responseType: proto_import_file_loader_pb.ImportFormat,
    requestSerialize: serialize_import_file_loader_GetImportFromatRequest,
    requestDeserialize: deserialize_import_file_loader_GetImportFromatRequest,
    responseSerialize: serialize_import_file_loader_ImportFormat,
    responseDeserialize: deserialize_import_file_loader_ImportFormat,
  },
  // Manage File
saveRecords: {
    path: '/import_file_loader.ImportFileLoader/SaveRecords',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.SaveRecordsRequest,
    responseType: proto_import_file_loader_pb.SaveRecordsResponse,
    requestSerialize: serialize_import_file_loader_SaveRecordsRequest,
    requestDeserialize: deserialize_import_file_loader_SaveRecordsRequest,
    responseSerialize: serialize_import_file_loader_SaveRecordsResponse,
    responseDeserialize: deserialize_import_file_loader_SaveRecordsResponse,
  },
  listFilePreview: {
    path: '/import_file_loader.ImportFileLoader/ListFilePreview',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListFilePreviewRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_import_file_loader_ListFilePreviewRequest,
    requestDeserialize: deserialize_import_file_loader_ListFilePreviewRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // Process
listImportProcesses: {
    path: '/import_file_loader.ImportFileLoader/ListImportProcesses',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListImportProcessesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_import_file_loader_ListImportProcessesRequest,
    requestDeserialize: deserialize_import_file_loader_ListImportProcessesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
};

exports.ImportFileLoaderClient = grpc.makeGenericClientConstructor(ImportFileLoaderService);
