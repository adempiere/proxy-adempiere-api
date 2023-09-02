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
var proto_general_ledger_pb = require('../proto/general_ledger_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_Entity(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Entity)) {
    throw new Error('Expected argument of type data.Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Entity(buffer_arg) {
  return proto_base_data_type_pb.Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_general_ledger_GetAccountingCombinationRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.GetAccountingCombinationRequest)) {
    throw new Error('Expected argument of type general_ledger.GetAccountingCombinationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_GetAccountingCombinationRequest(buffer_arg) {
  return proto_general_ledger_pb.GetAccountingCombinationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListAccountingCombinationsRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListAccountingCombinationsRequest)) {
    throw new Error('Expected argument of type general_ledger.ListAccountingCombinationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListAccountingCombinationsRequest(buffer_arg) {
  return proto_general_ledger_pb.ListAccountingCombinationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListAccountingDocumentsRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListAccountingDocumentsRequest)) {
    throw new Error('Expected argument of type general_ledger.ListAccountingDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListAccountingDocumentsRequest(buffer_arg) {
  return proto_general_ledger_pb.ListAccountingDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListAccountingDocumentsResponse(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListAccountingDocumentsResponse)) {
    throw new Error('Expected argument of type general_ledger.ListAccountingDocumentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListAccountingDocumentsResponse(buffer_arg) {
  return proto_general_ledger_pb.ListAccountingDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListAccountingFactsRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListAccountingFactsRequest)) {
    throw new Error('Expected argument of type general_ledger.ListAccountingFactsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListAccountingFactsRequest(buffer_arg) {
  return proto_general_ledger_pb.ListAccountingFactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListAccountingSchemasRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListAccountingSchemasRequest)) {
    throw new Error('Expected argument of type general_ledger.ListAccountingSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListAccountingSchemasRequest(buffer_arg) {
  return proto_general_ledger_pb.ListAccountingSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListOrganizationsRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListOrganizationsRequest)) {
    throw new Error('Expected argument of type general_ledger.ListOrganizationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListOrganizationsRequest(buffer_arg) {
  return proto_general_ledger_pb.ListOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListPostingTypesRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListPostingTypesRequest)) {
    throw new Error('Expected argument of type general_ledger.ListPostingTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListPostingTypesRequest(buffer_arg) {
  return proto_general_ledger_pb.ListPostingTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_SaveAccountingCombinationRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.SaveAccountingCombinationRequest)) {
    throw new Error('Expected argument of type general_ledger.SaveAccountingCombinationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_SaveAccountingCombinationRequest(buffer_arg) {
  return proto_general_ledger_pb.SaveAccountingCombinationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_StartRePostRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.StartRePostRequest)) {
    throw new Error('Expected argument of type general_ledger.StartRePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_StartRePostRequest(buffer_arg) {
  return proto_general_ledger_pb.StartRePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_StartRePostResponse(arg) {
  if (!(arg instanceof proto_general_ledger_pb.StartRePostResponse)) {
    throw new Error('Expected argument of type general_ledger.StartRePostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_StartRePostResponse(buffer_arg) {
  return proto_general_ledger_pb.StartRePostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The General Ledger service definition.
var GeneralLedgerService = exports.GeneralLedgerService = {
  // Accounting Combination
getAccountingCombination: {
    path: '/general_ledger.GeneralLedger/getAccountingCombination',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.GetAccountingCombinationRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_general_ledger_GetAccountingCombinationRequest,
    requestDeserialize: deserialize_general_ledger_GetAccountingCombinationRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  listAccountingCombinations: {
    path: '/general_ledger.GeneralLedger/ListAccountingCombinations',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListAccountingCombinationsRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_general_ledger_ListAccountingCombinationsRequest,
    requestDeserialize: deserialize_general_ledger_ListAccountingCombinationsRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  saveAccountingCombination: {
    path: '/general_ledger.GeneralLedger/SaveAccountingCombination',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.SaveAccountingCombinationRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_general_ledger_SaveAccountingCombinationRequest,
    requestDeserialize: deserialize_general_ledger_SaveAccountingCombinationRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Accounting Viewer
listAccountingSchemas: {
    path: '/general_ledger.GeneralLedger/ListAccountingSchemas',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListAccountingSchemasRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_general_ledger_ListAccountingSchemasRequest,
    requestDeserialize: deserialize_general_ledger_ListAccountingSchemasRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listPostingTypes: {
    path: '/general_ledger.GeneralLedger/ListPostingTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListPostingTypesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_general_ledger_ListPostingTypesRequest,
    requestDeserialize: deserialize_general_ledger_ListPostingTypesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listAccountingDocuments: {
    path: '/general_ledger.GeneralLedger/ListAccountingDocuments',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListAccountingDocumentsRequest,
    responseType: proto_general_ledger_pb.ListAccountingDocumentsResponse,
    requestSerialize: serialize_general_ledger_ListAccountingDocumentsRequest,
    requestDeserialize: deserialize_general_ledger_ListAccountingDocumentsRequest,
    responseSerialize: serialize_general_ledger_ListAccountingDocumentsResponse,
    responseDeserialize: deserialize_general_ledger_ListAccountingDocumentsResponse,
  },
  listOrganizations: {
    path: '/general_ledger.GeneralLedger/ListOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListOrganizationsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_general_ledger_ListOrganizationsRequest,
    requestDeserialize: deserialize_general_ledger_ListOrganizationsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listAccountingFacts: {
    path: '/general_ledger.GeneralLedger/ListAccountingFacts',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListAccountingFactsRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_general_ledger_ListAccountingFactsRequest,
    requestDeserialize: deserialize_general_ledger_ListAccountingFactsRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  startRePost: {
    path: '/general_ledger.GeneralLedger/StartRePost',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.StartRePostRequest,
    responseType: proto_general_ledger_pb.StartRePostResponse,
    requestSerialize: serialize_general_ledger_StartRePostRequest,
    requestDeserialize: deserialize_general_ledger_StartRePostRequest,
    responseSerialize: serialize_general_ledger_StartRePostResponse,
    responseDeserialize: deserialize_general_ledger_StartRePostResponse,
  },
};

exports.GeneralLedgerClient = grpc.makeGenericClientConstructor(GeneralLedgerService);
