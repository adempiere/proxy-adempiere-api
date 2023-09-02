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
var proto_dashboarding_pb = require('../proto/dashboarding_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_dictionary_pb = require('../proto/dictionary_pb.js');

function serialize_dashboarding_ExistsWindowDashboardsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ExistsWindowDashboardsRequest)) {
    throw new Error('Expected argument of type dashboarding.ExistsWindowDashboardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ExistsWindowDashboardsRequest(buffer_arg) {
  return proto_dashboarding_pb.ExistsWindowDashboardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ExistsWindowDashboardsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ExistsWindowDashboardsResponse)) {
    throw new Error('Expected argument of type dashboarding.ExistsWindowDashboardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ExistsWindowDashboardsResponse(buffer_arg) {
  return proto_dashboarding_pb.ExistsWindowDashboardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_GetMetricsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.GetMetricsRequest)) {
    throw new Error('Expected argument of type dashboarding.GetMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_GetMetricsRequest(buffer_arg) {
  return proto_dashboarding_pb.GetMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_GetWindowMetricsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.GetWindowMetricsRequest)) {
    throw new Error('Expected argument of type dashboarding.GetWindowMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_GetWindowMetricsRequest(buffer_arg) {
  return proto_dashboarding_pb.GetWindowMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListDashboardsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListDashboardsRequest)) {
    throw new Error('Expected argument of type dashboarding.ListDashboardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListDashboardsRequest(buffer_arg) {
  return proto_dashboarding_pb.ListDashboardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListDashboardsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListDashboardsResponse)) {
    throw new Error('Expected argument of type dashboarding.ListDashboardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListDashboardsResponse(buffer_arg) {
  return proto_dashboarding_pb.ListDashboardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListFavoritesRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListFavoritesRequest)) {
    throw new Error('Expected argument of type dashboarding.ListFavoritesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListFavoritesRequest(buffer_arg) {
  return proto_dashboarding_pb.ListFavoritesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListFavoritesResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListFavoritesResponse)) {
    throw new Error('Expected argument of type dashboarding.ListFavoritesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListFavoritesResponse(buffer_arg) {
  return proto_dashboarding_pb.ListFavoritesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListNotificationsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListNotificationsRequest)) {
    throw new Error('Expected argument of type dashboarding.ListNotificationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListNotificationsRequest(buffer_arg) {
  return proto_dashboarding_pb.ListNotificationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListNotificationsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListNotificationsResponse)) {
    throw new Error('Expected argument of type dashboarding.ListNotificationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListNotificationsResponse(buffer_arg) {
  return proto_dashboarding_pb.ListNotificationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListPendingDocumentsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListPendingDocumentsRequest)) {
    throw new Error('Expected argument of type dashboarding.ListPendingDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListPendingDocumentsRequest(buffer_arg) {
  return proto_dashboarding_pb.ListPendingDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListPendingDocumentsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListPendingDocumentsResponse)) {
    throw new Error('Expected argument of type dashboarding.ListPendingDocumentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListPendingDocumentsResponse(buffer_arg) {
  return proto_dashboarding_pb.ListPendingDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListWindowDashboardsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListWindowDashboardsRequest)) {
    throw new Error('Expected argument of type dashboarding.ListWindowDashboardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListWindowDashboardsRequest(buffer_arg) {
  return proto_dashboarding_pb.ListWindowDashboardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListWindowDashboardsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListWindowDashboardsResponse)) {
    throw new Error('Expected argument of type dashboarding.ListWindowDashboardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListWindowDashboardsResponse(buffer_arg) {
  return proto_dashboarding_pb.ListWindowDashboardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_Metrics(arg) {
  if (!(arg instanceof proto_dashboarding_pb.Metrics)) {
    throw new Error('Expected argument of type dashboarding.Metrics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_Metrics(buffer_arg) {
  return proto_dashboarding_pb.Metrics.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_WindowMetrics(arg) {
  if (!(arg instanceof proto_dashboarding_pb.WindowMetrics)) {
    throw new Error('Expected argument of type dashboarding.WindowMetrics');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_WindowMetrics(buffer_arg) {
  return proto_dashboarding_pb.WindowMetrics.deserializeBinary(new Uint8Array(buffer_arg));
}


// 	All related to Dashboarding
var DashboardingService = exports.DashboardingService = {
  // 	Request Dashboards Content Edit
listDashboards: {
    path: '/dashboarding.Dashboarding/ListDashboards',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListDashboardsRequest,
    responseType: proto_dashboarding_pb.ListDashboardsResponse,
    requestSerialize: serialize_dashboarding_ListDashboardsRequest,
    requestDeserialize: deserialize_dashboarding_ListDashboardsRequest,
    responseSerialize: serialize_dashboarding_ListDashboardsResponse,
    responseDeserialize: deserialize_dashboarding_ListDashboardsResponse,
  },
  // 	Request Favorites
listFavorites: {
    path: '/dashboarding.Dashboarding/ListFavorites',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListFavoritesRequest,
    responseType: proto_dashboarding_pb.ListFavoritesResponse,
    requestSerialize: serialize_dashboarding_ListFavoritesRequest,
    requestDeserialize: deserialize_dashboarding_ListFavoritesRequest,
    responseSerialize: serialize_dashboarding_ListFavoritesResponse,
    responseDeserialize: deserialize_dashboarding_ListFavoritesResponse,
  },
  // 	Request Document Statuses
listPendingDocuments: {
    path: '/dashboarding.Dashboarding/ListPendingDocuments',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListPendingDocumentsRequest,
    responseType: proto_dashboarding_pb.ListPendingDocumentsResponse,
    requestSerialize: serialize_dashboarding_ListPendingDocumentsRequest,
    requestDeserialize: deserialize_dashboarding_ListPendingDocumentsRequest,
    responseSerialize: serialize_dashboarding_ListPendingDocumentsResponse,
    responseDeserialize: deserialize_dashboarding_ListPendingDocumentsResponse,
  },
  // 	Get Metrics
getMetrics: {
    path: '/dashboarding.Dashboarding/GetMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.GetMetricsRequest,
    responseType: proto_dashboarding_pb.Metrics,
    requestSerialize: serialize_dashboarding_GetMetricsRequest,
    requestDeserialize: deserialize_dashboarding_GetMetricsRequest,
    responseSerialize: serialize_dashboarding_Metrics,
    responseDeserialize: deserialize_dashboarding_Metrics,
  },
  // NotificationWindowChart
listNotifications: {
    path: '/dashboarding.Dashboarding/ListNotifications',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListNotificationsRequest,
    responseType: proto_dashboarding_pb.ListNotificationsResponse,
    requestSerialize: serialize_dashboarding_ListNotificationsRequest,
    requestDeserialize: deserialize_dashboarding_ListNotificationsRequest,
    responseSerialize: serialize_dashboarding_ListNotificationsResponse,
    responseDeserialize: deserialize_dashboarding_ListNotificationsResponse,
  },
  // Custom Window Metrics
existsWindowDashboards: {
    path: '/dashboarding.Dashboarding/ExistsWindowDashboards',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ExistsWindowDashboardsRequest,
    responseType: proto_dashboarding_pb.ExistsWindowDashboardsResponse,
    requestSerialize: serialize_dashboarding_ExistsWindowDashboardsRequest,
    requestDeserialize: deserialize_dashboarding_ExistsWindowDashboardsRequest,
    responseSerialize: serialize_dashboarding_ExistsWindowDashboardsResponse,
    responseDeserialize: deserialize_dashboarding_ExistsWindowDashboardsResponse,
  },
  listWindowDashboards: {
    path: '/dashboarding.Dashboarding/ListWindowDashboards',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListWindowDashboardsRequest,
    responseType: proto_dashboarding_pb.ListWindowDashboardsResponse,
    requestSerialize: serialize_dashboarding_ListWindowDashboardsRequest,
    requestDeserialize: deserialize_dashboarding_ListWindowDashboardsRequest,
    responseSerialize: serialize_dashboarding_ListWindowDashboardsResponse,
    responseDeserialize: deserialize_dashboarding_ListWindowDashboardsResponse,
  },
  getWindowMetrics: {
    path: '/dashboarding.Dashboarding/GetWindowMetrics',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.GetWindowMetricsRequest,
    responseType: proto_dashboarding_pb.WindowMetrics,
    requestSerialize: serialize_dashboarding_GetWindowMetricsRequest,
    requestDeserialize: deserialize_dashboarding_GetWindowMetricsRequest,
    responseSerialize: serialize_dashboarding_WindowMetrics,
    responseDeserialize: deserialize_dashboarding_WindowMetrics,
  },
};

exports.DashboardingClient = grpc.makeGenericClientConstructor(DashboardingService);
