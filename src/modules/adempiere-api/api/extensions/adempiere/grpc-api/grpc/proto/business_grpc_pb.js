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
var proto_business_pb = require('../proto/business_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');

function serialize_data_Callout(arg) {
  if (!(arg instanceof proto_business_pb.Callout)) {
    throw new Error('Expected argument of type data.Callout');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Callout(buffer_arg) {
  return proto_business_pb.Callout.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ChatEntry(arg) {
  if (!(arg instanceof proto_business_pb.ChatEntry)) {
    throw new Error('Expected argument of type data.ChatEntry');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ChatEntry(buffer_arg) {
  return proto_business_pb.ChatEntry.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ContextInfoValue(arg) {
  if (!(arg instanceof proto_business_pb.ContextInfoValue)) {
    throw new Error('Expected argument of type data.ContextInfoValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ContextInfoValue(buffer_arg) {
  return proto_business_pb.ContextInfoValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateChatEntryRequest(arg) {
  if (!(arg instanceof proto_business_pb.CreateChatEntryRequest)) {
    throw new Error('Expected argument of type data.CreateChatEntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateChatEntryRequest(buffer_arg) {
  return proto_business_pb.CreateChatEntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.CreateEntityRequest)) {
    throw new Error('Expected argument of type data.CreateEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateEntityRequest(buffer_arg) {
  return proto_business_pb.CreateEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateTabEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.CreateTabEntityRequest)) {
    throw new Error('Expected argument of type data.CreateTabEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateTabEntityRequest(buffer_arg) {
  return proto_business_pb.CreateTabEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DefaultValue(arg) {
  if (!(arg instanceof proto_business_pb.DefaultValue)) {
    throw new Error('Expected argument of type data.DefaultValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DefaultValue(buffer_arg) {
  return proto_business_pb.DefaultValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.DeleteEntityRequest)) {
    throw new Error('Expected argument of type data.DeleteEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteEntityRequest(buffer_arg) {
  return proto_business_pb.DeleteEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeletePreferenceRequest(arg) {
  if (!(arg instanceof proto_business_pb.DeletePreferenceRequest)) {
    throw new Error('Expected argument of type data.DeletePreferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeletePreferenceRequest(buffer_arg) {
  return proto_business_pb.DeletePreferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Entity(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Entity)) {
    throw new Error('Expected argument of type data.Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Entity(buffer_arg) {
  return proto_base_data_type_pb.Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ExistsReferencesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ExistsReferencesRequest)) {
    throw new Error('Expected argument of type data.ExistsReferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ExistsReferencesRequest(buffer_arg) {
  return proto_business_pb.ExistsReferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ExistsReferencesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ExistsReferencesResponse)) {
    throw new Error('Expected argument of type data.ExistsReferencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ExistsReferencesResponse(buffer_arg) {
  return proto_business_pb.ExistsReferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetContextInfoValueRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetContextInfoValueRequest)) {
    throw new Error('Expected argument of type data.GetContextInfoValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetContextInfoValueRequest(buffer_arg) {
  return proto_business_pb.GetContextInfoValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetDefaultValueRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetDefaultValueRequest)) {
    throw new Error('Expected argument of type data.GetDefaultValueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetDefaultValueRequest(buffer_arg) {
  return proto_business_pb.GetDefaultValueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetEntityRequest)) {
    throw new Error('Expected argument of type data.GetEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetEntityRequest(buffer_arg) {
  return proto_business_pb.GetEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetLookupItemRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetLookupItemRequest)) {
    throw new Error('Expected argument of type data.GetLookupItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetLookupItemRequest(buffer_arg) {
  return proto_business_pb.GetLookupItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetPrivateAccessRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetPrivateAccessRequest)) {
    throw new Error('Expected argument of type data.GetPrivateAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetPrivateAccessRequest(buffer_arg) {
  return proto_business_pb.GetPrivateAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetRecordAccessRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetRecordAccessRequest)) {
    throw new Error('Expected argument of type data.GetRecordAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetRecordAccessRequest(buffer_arg) {
  return proto_business_pb.GetRecordAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetReportOutputRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetReportOutputRequest)) {
    throw new Error('Expected argument of type data.GetReportOutputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetReportOutputRequest(buffer_arg) {
  return proto_business_pb.GetReportOutputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetTabEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.GetTabEntityRequest)) {
    throw new Error('Expected argument of type data.GetTabEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetTabEntityRequest(buffer_arg) {
  return proto_business_pb.GetTabEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBrowserItemsRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListBrowserItemsRequest)) {
    throw new Error('Expected argument of type data.ListBrowserItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBrowserItemsRequest(buffer_arg) {
  return proto_business_pb.ListBrowserItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBrowserItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListBrowserItemsResponse)) {
    throw new Error('Expected argument of type data.ListBrowserItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBrowserItemsResponse(buffer_arg) {
  return proto_business_pb.ListBrowserItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListDrillTablesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListDrillTablesRequest)) {
    throw new Error('Expected argument of type data.ListDrillTablesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListDrillTablesRequest(buffer_arg) {
  return proto_business_pb.ListDrillTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListDrillTablesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListDrillTablesResponse)) {
    throw new Error('Expected argument of type data.ListDrillTablesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListDrillTablesResponse(buffer_arg) {
  return proto_business_pb.ListDrillTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListEntitiesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListEntitiesRequest)) {
    throw new Error('Expected argument of type data.ListEntitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListEntitiesRequest(buffer_arg) {
  return proto_business_pb.ListEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_ListGeneralInfoRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListGeneralInfoRequest)) {
    throw new Error('Expected argument of type data.ListGeneralInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListGeneralInfoRequest(buffer_arg) {
  return proto_business_pb.ListGeneralInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListLookupItemsRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsRequest)) {
    throw new Error('Expected argument of type data.ListLookupItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsRequest(buffer_arg) {
  return proto_business_pb.ListLookupItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_data_ListMailTemplatesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListMailTemplatesRequest)) {
    throw new Error('Expected argument of type data.ListMailTemplatesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListMailTemplatesRequest(buffer_arg) {
  return proto_business_pb.ListMailTemplatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListMailTemplatesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListMailTemplatesResponse)) {
    throw new Error('Expected argument of type data.ListMailTemplatesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListMailTemplatesResponse(buffer_arg) {
  return proto_business_pb.ListMailTemplatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPrintFormatsRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListPrintFormatsRequest)) {
    throw new Error('Expected argument of type data.ListPrintFormatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPrintFormatsRequest(buffer_arg) {
  return proto_business_pb.ListPrintFormatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPrintFormatsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListPrintFormatsResponse)) {
    throw new Error('Expected argument of type data.ListPrintFormatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPrintFormatsResponse(buffer_arg) {
  return proto_business_pb.ListPrintFormatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListReferencesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListReferencesRequest)) {
    throw new Error('Expected argument of type data.ListReferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListReferencesRequest(buffer_arg) {
  return proto_business_pb.ListReferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListReferencesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListReferencesResponse)) {
    throw new Error('Expected argument of type data.ListReferencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListReferencesResponse(buffer_arg) {
  return proto_business_pb.ListReferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListReportViewsRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListReportViewsRequest)) {
    throw new Error('Expected argument of type data.ListReportViewsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListReportViewsRequest(buffer_arg) {
  return proto_business_pb.ListReportViewsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListReportViewsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListReportViewsResponse)) {
    throw new Error('Expected argument of type data.ListReportViewsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListReportViewsResponse(buffer_arg) {
  return proto_business_pb.ListReportViewsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListTabEntitiesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListTabEntitiesRequest)) {
    throw new Error('Expected argument of type data.ListTabEntitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListTabEntitiesRequest(buffer_arg) {
  return proto_business_pb.ListTabEntitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListTabSequencesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListTabSequencesRequest)) {
    throw new Error('Expected argument of type data.ListTabSequencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListTabSequencesRequest(buffer_arg) {
  return proto_business_pb.ListTabSequencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListTranslationsRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListTranslationsRequest)) {
    throw new Error('Expected argument of type data.ListTranslationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListTranslationsRequest(buffer_arg) {
  return proto_business_pb.ListTranslationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListTranslationsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListTranslationsResponse)) {
    throw new Error('Expected argument of type data.ListTranslationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListTranslationsResponse(buffer_arg) {
  return proto_business_pb.ListTranslationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListTreeNodesRequest(arg) {
  if (!(arg instanceof proto_business_pb.ListTreeNodesRequest)) {
    throw new Error('Expected argument of type data.ListTreeNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListTreeNodesRequest(buffer_arg) {
  return proto_business_pb.ListTreeNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListTreeNodesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListTreeNodesResponse)) {
    throw new Error('Expected argument of type data.ListTreeNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListTreeNodesResponse(buffer_arg) {
  return proto_business_pb.ListTreeNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_LockPrivateAccessRequest(arg) {
  if (!(arg instanceof proto_business_pb.LockPrivateAccessRequest)) {
    throw new Error('Expected argument of type data.LockPrivateAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_LockPrivateAccessRequest(buffer_arg) {
  return proto_business_pb.LockPrivateAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_LookupItem(arg) {
  if (!(arg instanceof proto_business_pb.LookupItem)) {
    throw new Error('Expected argument of type data.LookupItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_LookupItem(buffer_arg) {
  return proto_business_pb.LookupItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Preference(arg) {
  if (!(arg instanceof proto_business_pb.Preference)) {
    throw new Error('Expected argument of type data.Preference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Preference(buffer_arg) {
  return proto_business_pb.Preference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrivateAccess(arg) {
  if (!(arg instanceof proto_business_pb.PrivateAccess)) {
    throw new Error('Expected argument of type data.PrivateAccess');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrivateAccess(buffer_arg) {
  return proto_business_pb.PrivateAccess.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessLog(arg) {
  if (!(arg instanceof proto_base_data_type_pb.ProcessLog)) {
    throw new Error('Expected argument of type data.ProcessLog');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessLog(buffer_arg) {
  return proto_base_data_type_pb.ProcessLog.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_RecordAccess(arg) {
  if (!(arg instanceof proto_business_pb.RecordAccess)) {
    throw new Error('Expected argument of type data.RecordAccess');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_RecordAccess(buffer_arg) {
  return proto_business_pb.RecordAccess.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ReportOutput(arg) {
  if (!(arg instanceof proto_base_data_type_pb.ReportOutput)) {
    throw new Error('Expected argument of type data.ReportOutput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ReportOutput(buffer_arg) {
  return proto_base_data_type_pb.ReportOutput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_RollbackEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.RollbackEntityRequest)) {
    throw new Error('Expected argument of type data.RollbackEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_RollbackEntityRequest(buffer_arg) {
  return proto_business_pb.RollbackEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_RunBusinessProcessRequest(arg) {
  if (!(arg instanceof proto_business_pb.RunBusinessProcessRequest)) {
    throw new Error('Expected argument of type data.RunBusinessProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_RunBusinessProcessRequest(buffer_arg) {
  return proto_business_pb.RunBusinessProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_RunCalloutRequest(arg) {
  if (!(arg instanceof proto_business_pb.RunCalloutRequest)) {
    throw new Error('Expected argument of type data.RunCalloutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_RunCalloutRequest(buffer_arg) {
  return proto_business_pb.RunCalloutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_SaveTabSequencesRequest(arg) {
  if (!(arg instanceof proto_business_pb.SaveTabSequencesRequest)) {
    throw new Error('Expected argument of type data.SaveTabSequencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_SaveTabSequencesRequest(buffer_arg) {
  return proto_business_pb.SaveTabSequencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_SetPreferenceRequest(arg) {
  if (!(arg instanceof proto_business_pb.SetPreferenceRequest)) {
    throw new Error('Expected argument of type data.SetPreferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_SetPreferenceRequest(buffer_arg) {
  return proto_business_pb.SetPreferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_SetRecordAccessRequest(arg) {
  if (!(arg instanceof proto_business_pb.SetRecordAccessRequest)) {
    throw new Error('Expected argument of type data.SetRecordAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_SetRecordAccessRequest(buffer_arg) {
  return proto_business_pb.SetRecordAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UnlockPrivateAccessRequest(arg) {
  if (!(arg instanceof proto_business_pb.UnlockPrivateAccessRequest)) {
    throw new Error('Expected argument of type data.UnlockPrivateAccessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UnlockPrivateAccessRequest(buffer_arg) {
  return proto_business_pb.UnlockPrivateAccessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateBrowserEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.UpdateBrowserEntityRequest)) {
    throw new Error('Expected argument of type data.UpdateBrowserEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateBrowserEntityRequest(buffer_arg) {
  return proto_business_pb.UpdateBrowserEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.UpdateEntityRequest)) {
    throw new Error('Expected argument of type data.UpdateEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateEntityRequest(buffer_arg) {
  return proto_business_pb.UpdateEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateTabEntityRequest(arg) {
  if (!(arg instanceof proto_business_pb.UpdateTabEntityRequest)) {
    throw new Error('Expected argument of type data.UpdateTabEntityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateTabEntityRequest(buffer_arg) {
  return proto_business_pb.UpdateTabEntityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var BusinessDataService = exports.BusinessDataService = {
  // Get a Entity
getEntity: {
    path: '/data.BusinessData/GetEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_GetEntityRequest,
    requestDeserialize: deserialize_data_GetEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Create Entity Request
createEntity: {
    path: '/data.BusinessData/CreateEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.CreateEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_CreateEntityRequest,
    requestDeserialize: deserialize_data_CreateEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Update Entity Request
updateEntity: {
    path: '/data.BusinessData/UpdateEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.UpdateEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_UpdateEntityRequest,
    requestDeserialize: deserialize_data_UpdateEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Delete Entity Request
deleteEntity: {
    path: '/data.BusinessData/DeleteEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.DeleteEntityRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteEntityRequest,
    requestDeserialize: deserialize_data_DeleteEntityRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // 	List a Entities
listEntities: {
    path: '/data.BusinessData/ListEntities',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListEntitiesRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_data_ListEntitiesRequest,
    requestDeserialize: deserialize_data_ListEntitiesRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // 	Request a BusinessProcess / Report
runBusinessProcess: {
    path: '/data.BusinessData/RunBusinessProcess',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.RunBusinessProcessRequest,
    responseType: proto_base_data_type_pb.ProcessLog,
    requestSerialize: serialize_data_RunBusinessProcessRequest,
    requestDeserialize: deserialize_data_RunBusinessProcessRequest,
    responseSerialize: serialize_data_ProcessLog,
    responseDeserialize: deserialize_data_ProcessLog,
  },
};

exports.BusinessDataClient = grpc.makeGenericClientConstructor(BusinessDataService);
// 	User Interface
var UserInterfaceService = exports.UserInterfaceService = {
  // Get a Tab Entity
getTabEntity: {
    path: '/data.UserInterface/GetTabEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetTabEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_GetTabEntityRequest,
    requestDeserialize: deserialize_data_GetTabEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Create Tab Entity
createTabEntity: {
    path: '/data.UserInterface/CreateTabEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.CreateTabEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_CreateTabEntityRequest,
    requestDeserialize: deserialize_data_CreateTabEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Update Tab Entity
updateTabEntity: {
    path: '/data.UserInterface/UpdateTabEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.UpdateTabEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_UpdateTabEntityRequest,
    requestDeserialize: deserialize_data_UpdateTabEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // 	List tab Entities
listTabEntities: {
    path: '/data.UserInterface/ListTabEntities',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListTabEntitiesRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_data_ListTabEntitiesRequest,
    requestDeserialize: deserialize_data_ListTabEntitiesRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // 	Rollback Entity Request
rollbackEntity: {
    path: '/data.UserInterface/RollbackEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.RollbackEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_RollbackEntityRequest,
    requestDeserialize: deserialize_data_RollbackEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Run a Callout
runCallout: {
    path: '/data.UserInterface/RunCallout',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.RunCalloutRequest,
    responseType: proto_business_pb.Callout,
    requestSerialize: serialize_data_RunCalloutRequest,
    requestDeserialize: deserialize_data_RunCalloutRequest,
    responseSerialize: serialize_data_Callout,
    responseDeserialize: deserialize_data_Callout,
  },
  // 	Request Translations List
listTranslations: {
    path: '/data.UserInterface/ListTranslations',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListTranslationsRequest,
    responseType: proto_business_pb.ListTranslationsResponse,
    requestSerialize: serialize_data_ListTranslationsRequest,
    requestDeserialize: deserialize_data_ListTranslationsRequest,
    responseSerialize: serialize_data_ListTranslationsResponse,
    responseDeserialize: deserialize_data_ListTranslationsResponse,
  },
  // Get Default Value
getDefaultValue: {
    path: '/data.UserInterface/GetDefaultValue',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetDefaultValueRequest,
    responseType: proto_business_pb.DefaultValue,
    requestSerialize: serialize_data_GetDefaultValueRequest,
    requestDeserialize: deserialize_data_GetDefaultValueRequest,
    responseSerialize: serialize_data_DefaultValue,
    responseDeserialize: deserialize_data_DefaultValue,
  },
  // Get Lookup Item
getLookupItem: {
    path: '/data.UserInterface/GetLookupItem',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetLookupItemRequest,
    responseType: proto_business_pb.LookupItem,
    requestSerialize: serialize_data_GetLookupItemRequest,
    requestDeserialize: deserialize_data_GetLookupItemRequest,
    responseSerialize: serialize_data_LookupItem,
    responseDeserialize: deserialize_data_LookupItem,
  },
  // List Lookup Item
listLookupItems: {
    path: '/data.UserInterface/ListLookupItems',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListLookupItemsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_data_ListLookupItemsRequest,
    requestDeserialize: deserialize_data_ListLookupItemsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // 	Request Browser Data
listBrowserItems: {
    path: '/data.UserInterface/ListBrowserItems',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListBrowserItemsRequest,
    responseType: proto_business_pb.ListBrowserItemsResponse,
    requestSerialize: serialize_data_ListBrowserItemsRequest,
    requestDeserialize: deserialize_data_ListBrowserItemsRequest,
    responseSerialize: serialize_data_ListBrowserItemsResponse,
    responseDeserialize: deserialize_data_ListBrowserItemsResponse,
  },
  // Update Browser Entity
updateBrowserEntity: {
    path: '/data.UserInterface/UpdateBrowserEntity',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.UpdateBrowserEntityRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_data_UpdateBrowserEntityRequest,
    requestDeserialize: deserialize_data_UpdateBrowserEntityRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Exists References on Record
existsReferences: {
    path: '/data.UserInterface/ExistsReferences',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ExistsReferencesRequest,
    responseType: proto_business_pb.ExistsReferencesResponse,
    requestSerialize: serialize_data_ExistsReferencesRequest,
    requestDeserialize: deserialize_data_ExistsReferencesRequest,
    responseSerialize: serialize_data_ExistsReferencesResponse,
    responseDeserialize: deserialize_data_ExistsReferencesResponse,
  },
  // List a References
listReferences: {
    path: '/data.UserInterface/ListReferences',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListReferencesRequest,
    responseType: proto_business_pb.ListReferencesResponse,
    requestSerialize: serialize_data_ListReferencesRequest,
    requestDeserialize: deserialize_data_ListReferencesRequest,
    responseSerialize: serialize_data_ListReferencesResponse,
    responseDeserialize: deserialize_data_ListReferencesResponse,
  },
  // Get context Info
getContextInfoValue: {
    path: '/data.UserInterface/GetContextInfoValue',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetContextInfoValueRequest,
    responseType: proto_business_pb.ContextInfoValue,
    requestSerialize: serialize_data_GetContextInfoValueRequest,
    requestDeserialize: deserialize_data_GetContextInfoValueRequest,
    responseSerialize: serialize_data_ContextInfoValue,
    responseDeserialize: deserialize_data_ContextInfoValue,
  },
  // Get Private Access
getPrivateAccess: {
    path: '/data.UserInterface/GetPrivateAccess',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetPrivateAccessRequest,
    responseType: proto_business_pb.PrivateAccess,
    requestSerialize: serialize_data_GetPrivateAccessRequest,
    requestDeserialize: deserialize_data_GetPrivateAccessRequest,
    responseSerialize: serialize_data_PrivateAccess,
    responseDeserialize: deserialize_data_PrivateAccess,
  },
  // Create Private Access
lockPrivateAccess: {
    path: '/data.UserInterface/LockPrivateAccess',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.LockPrivateAccessRequest,
    responseType: proto_business_pb.PrivateAccess,
    requestSerialize: serialize_data_LockPrivateAccessRequest,
    requestDeserialize: deserialize_data_LockPrivateAccessRequest,
    responseSerialize: serialize_data_PrivateAccess,
    responseDeserialize: deserialize_data_PrivateAccess,
  },
  // Change Private Access
unlockPrivateAccess: {
    path: '/data.UserInterface/UnlockPrivateAccess',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.UnlockPrivateAccessRequest,
    responseType: proto_business_pb.PrivateAccess,
    requestSerialize: serialize_data_UnlockPrivateAccessRequest,
    requestDeserialize: deserialize_data_UnlockPrivateAccessRequest,
    responseSerialize: serialize_data_PrivateAccess,
    responseDeserialize: deserialize_data_PrivateAccess,
  },
  // Get Record Access
getRecordAccess: {
    path: '/data.UserInterface/GetRecordAccess',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetRecordAccessRequest,
    responseType: proto_business_pb.RecordAccess,
    requestSerialize: serialize_data_GetRecordAccessRequest,
    requestDeserialize: deserialize_data_GetRecordAccessRequest,
    responseSerialize: serialize_data_RecordAccess,
    responseDeserialize: deserialize_data_RecordAccess,
  },
  // Set Record Access
setRecordAccess: {
    path: '/data.UserInterface/SetRecordAccess',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.SetRecordAccessRequest,
    responseType: proto_business_pb.RecordAccess,
    requestSerialize: serialize_data_SetRecordAccessRequest,
    requestDeserialize: deserialize_data_SetRecordAccessRequest,
    responseSerialize: serialize_data_RecordAccess,
    responseDeserialize: deserialize_data_RecordAccess,
  },
  // 	Request Print Format List
listPrintFormats: {
    path: '/data.UserInterface/ListPrintFormats',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListPrintFormatsRequest,
    responseType: proto_business_pb.ListPrintFormatsResponse,
    requestSerialize: serialize_data_ListPrintFormatsRequest,
    requestDeserialize: deserialize_data_ListPrintFormatsRequest,
    responseSerialize: serialize_data_ListPrintFormatsResponse,
    responseDeserialize: deserialize_data_ListPrintFormatsResponse,
  },
  // 	Request Report View List
listReportViews: {
    path: '/data.UserInterface/ListReportViews',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListReportViewsRequest,
    responseType: proto_business_pb.ListReportViewsResponse,
    requestSerialize: serialize_data_ListReportViewsRequest,
    requestDeserialize: deserialize_data_ListReportViewsRequest,
    responseSerialize: serialize_data_ListReportViewsResponse,
    responseDeserialize: deserialize_data_ListReportViewsResponse,
  },
  // 	Request Drill Tables List
listDrillTables: {
    path: '/data.UserInterface/ListDrillTables',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListDrillTablesRequest,
    responseType: proto_business_pb.ListDrillTablesResponse,
    requestSerialize: serialize_data_ListDrillTablesRequest,
    requestDeserialize: deserialize_data_ListDrillTablesRequest,
    responseSerialize: serialize_data_ListDrillTablesResponse,
    responseDeserialize: deserialize_data_ListDrillTablesResponse,
  },
  // 	Request Report Output
getReportOutput: {
    path: '/data.UserInterface/GetReportOutput',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.GetReportOutputRequest,
    responseType: proto_base_data_type_pb.ReportOutput,
    requestSerialize: serialize_data_GetReportOutputRequest,
    requestDeserialize: deserialize_data_GetReportOutputRequest,
    responseSerialize: serialize_data_ReportOutput,
    responseDeserialize: deserialize_data_ReportOutput,
  },
  // Add Chat Entry
createChatEntry: {
    path: '/data.UserInterface/CreateChatEntry',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.CreateChatEntryRequest,
    responseType: proto_business_pb.ChatEntry,
    requestSerialize: serialize_data_CreateChatEntryRequest,
    requestDeserialize: deserialize_data_CreateChatEntryRequest,
    responseSerialize: serialize_data_ChatEntry,
    responseDeserialize: deserialize_data_ChatEntry,
  },
  // 	Set Preference from field
setPreference: {
    path: '/data.UserInterface/SetPreference',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.SetPreferenceRequest,
    responseType: proto_business_pb.Preference,
    requestSerialize: serialize_data_SetPreferenceRequest,
    requestDeserialize: deserialize_data_SetPreferenceRequest,
    responseSerialize: serialize_data_Preference,
    responseDeserialize: deserialize_data_Preference,
  },
  // 	Delete Preference from field
deletePreference: {
    path: '/data.UserInterface/DeletePreference',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.DeletePreferenceRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeletePreferenceRequest,
    requestDeserialize: deserialize_data_DeletePreferenceRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // 	List General Info
listGeneralInfo: {
    path: '/data.UserInterface/ListGeneralInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListGeneralInfoRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_data_ListGeneralInfoRequest,
    requestDeserialize: deserialize_data_ListGeneralInfoRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // 	List Tab Sequences
listTabSequences: {
    path: '/data.UserInterface/ListTabSequences',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListTabSequencesRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_data_ListTabSequencesRequest,
    requestDeserialize: deserialize_data_ListTabSequencesRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // 	Save Tab Sequences
saveTabSequences: {
    path: '/data.UserInterface/SaveTabSequences',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.SaveTabSequencesRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_data_SaveTabSequencesRequest,
    requestDeserialize: deserialize_data_SaveTabSequencesRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // List Tree Nodes Request
listTreeNodes: {
    path: '/data.UserInterface/ListTreeNodes',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListTreeNodesRequest,
    responseType: proto_business_pb.ListTreeNodesResponse,
    requestSerialize: serialize_data_ListTreeNodesRequest,
    requestDeserialize: deserialize_data_ListTreeNodesRequest,
    responseSerialize: serialize_data_ListTreeNodesResponse,
    responseDeserialize: deserialize_data_ListTreeNodesResponse,
  },
  // List Mail Templates
listMailTemplates: {
    path: '/data.UserInterface/ListMailTemplates',
    requestStream: false,
    responseStream: false,
    requestType: proto_business_pb.ListMailTemplatesRequest,
    responseType: proto_business_pb.ListMailTemplatesResponse,
    requestSerialize: serialize_data_ListMailTemplatesRequest,
    requestDeserialize: deserialize_data_ListMailTemplatesRequest,
    responseSerialize: serialize_data_ListMailTemplatesResponse,
    responseDeserialize: deserialize_data_ListMailTemplatesResponse,
  },
};

exports.UserInterfaceClient = grpc.makeGenericClientConstructor(UserInterfaceService);
