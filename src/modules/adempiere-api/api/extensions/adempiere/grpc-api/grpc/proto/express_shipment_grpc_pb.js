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
var proto_express_shipment_pb = require('../proto/express_shipment_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');

function serialize_data_Empty (arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty (buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_CreateShipmentLineRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.CreateShipmentLineRequest)) {
    throw new Error('Expected argument of type express_shipment.CreateShipmentLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_CreateShipmentLineRequest (buffer_arg) {
  return proto_express_shipment_pb.CreateShipmentLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_CreateShipmentRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.CreateShipmentRequest)) {
    throw new Error('Expected argument of type express_shipment.CreateShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_CreateShipmentRequest (buffer_arg) {
  return proto_express_shipment_pb.CreateShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_DeleteShipmentLineRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.DeleteShipmentLineRequest)) {
    throw new Error('Expected argument of type express_shipment.DeleteShipmentLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_DeleteShipmentLineRequest (buffer_arg) {
  return proto_express_shipment_pb.DeleteShipmentLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_DeleteShipmentRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.DeleteShipmentRequest)) {
    throw new Error('Expected argument of type express_shipment.DeleteShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_DeleteShipmentRequest (buffer_arg) {
  return proto_express_shipment_pb.DeleteShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListBusinessPartnersRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListBusinessPartnersRequest)) {
    throw new Error('Expected argument of type express_shipment.ListBusinessPartnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListBusinessPartnersRequest (buffer_arg) {
  return proto_express_shipment_pb.ListBusinessPartnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListBusinessPartnersResponse (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListBusinessPartnersResponse)) {
    throw new Error('Expected argument of type express_shipment.ListBusinessPartnersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListBusinessPartnersResponse (buffer_arg) {
  return proto_express_shipment_pb.ListBusinessPartnersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListProductsRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type express_shipment.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListProductsRequest (buffer_arg) {
  return proto_express_shipment_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListProductsResponse (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type express_shipment.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListProductsResponse (buffer_arg) {
  return proto_express_shipment_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListSalesOrdersRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListSalesOrdersRequest)) {
    throw new Error('Expected argument of type express_shipment.ListSalesOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListSalesOrdersRequest (buffer_arg) {
  return proto_express_shipment_pb.ListSalesOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListSalesOrdersResponse (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListSalesOrdersResponse)) {
    throw new Error('Expected argument of type express_shipment.ListSalesOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListSalesOrdersResponse (buffer_arg) {
  return proto_express_shipment_pb.ListSalesOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListShipmentLinesRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListShipmentLinesRequest)) {
    throw new Error('Expected argument of type express_shipment.ListShipmentLinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListShipmentLinesRequest (buffer_arg) {
  return proto_express_shipment_pb.ListShipmentLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ListShipmentLinesResponse (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ListShipmentLinesResponse)) {
    throw new Error('Expected argument of type express_shipment.ListShipmentLinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ListShipmentLinesResponse (buffer_arg) {
  return proto_express_shipment_pb.ListShipmentLinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ProcessShipmentRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ProcessShipmentRequest)) {
    throw new Error('Expected argument of type express_shipment.ProcessShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ProcessShipmentRequest (buffer_arg) {
  return proto_express_shipment_pb.ProcessShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_Shipment (arg) {
  if (!(arg instanceof proto_express_shipment_pb.Shipment)) {
    throw new Error('Expected argument of type express_shipment.Shipment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_Shipment (buffer_arg) {
  return proto_express_shipment_pb.Shipment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_ShipmentLine (arg) {
  if (!(arg instanceof proto_express_shipment_pb.ShipmentLine)) {
    throw new Error('Expected argument of type express_shipment.ShipmentLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_ShipmentLine (buffer_arg) {
  return proto_express_shipment_pb.ShipmentLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_shipment_UpdateShipmentLineRequest (arg) {
  if (!(arg instanceof proto_express_shipment_pb.UpdateShipmentLineRequest)) {
    throw new Error('Expected argument of type express_shipment.UpdateShipmentLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_shipment_UpdateShipmentLineRequest (buffer_arg) {
  return proto_express_shipment_pb.UpdateShipmentLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

var ExpressShipmentService = exports.ExpressShipmentService = {
  listBusinessPartners: {
    path: '/express_shipment.ExpressShipment/ListBusinessPartners',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.ListBusinessPartnersRequest,
    responseType: proto_express_shipment_pb.ListBusinessPartnersResponse,
    requestSerialize: serialize_express_shipment_ListBusinessPartnersRequest,
    requestDeserialize: deserialize_express_shipment_ListBusinessPartnersRequest,
    responseSerialize: serialize_express_shipment_ListBusinessPartnersResponse,
    responseDeserialize: deserialize_express_shipment_ListBusinessPartnersResponse
  },
  listSalesOrders: {
    path: '/express_shipment.ExpressShipment/ListSalesOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.ListSalesOrdersRequest,
    responseType: proto_express_shipment_pb.ListSalesOrdersResponse,
    requestSerialize: serialize_express_shipment_ListSalesOrdersRequest,
    requestDeserialize: deserialize_express_shipment_ListSalesOrdersRequest,
    responseSerialize: serialize_express_shipment_ListSalesOrdersResponse,
    responseDeserialize: deserialize_express_shipment_ListSalesOrdersResponse
  },
  listProducts: {
    path: '/express_shipment.ExpressShipment/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.ListProductsRequest,
    responseType: proto_express_shipment_pb.ListProductsResponse,
    requestSerialize: serialize_express_shipment_ListProductsRequest,
    requestDeserialize: deserialize_express_shipment_ListProductsRequest,
    responseSerialize: serialize_express_shipment_ListProductsResponse,
    responseDeserialize: deserialize_express_shipment_ListProductsResponse
  },
  // Shipment
  createShipment: {
    path: '/express_shipment.ExpressShipment/CreateShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.CreateShipmentRequest,
    responseType: proto_express_shipment_pb.Shipment,
    requestSerialize: serialize_express_shipment_CreateShipmentRequest,
    requestDeserialize: deserialize_express_shipment_CreateShipmentRequest,
    responseSerialize: serialize_express_shipment_Shipment,
    responseDeserialize: deserialize_express_shipment_Shipment
  },
  deleteShipment: {
    path: '/express_shipment.ExpressShipment/DeleteShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.DeleteShipmentRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_express_shipment_DeleteShipmentRequest,
    requestDeserialize: deserialize_express_shipment_DeleteShipmentRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  processShipment: {
    path: '/express_shipment.ExpressShipment/ProcessShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.ProcessShipmentRequest,
    responseType: proto_express_shipment_pb.Shipment,
    requestSerialize: serialize_express_shipment_ProcessShipmentRequest,
    requestDeserialize: deserialize_express_shipment_ProcessShipmentRequest,
    responseSerialize: serialize_express_shipment_Shipment,
    responseDeserialize: deserialize_express_shipment_Shipment
  },
  // 	Shipment Line
  createShipmentLine: {
    path: '/express_shipment.ExpressShipment/CreateShipmentLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.CreateShipmentLineRequest,
    responseType: proto_express_shipment_pb.ShipmentLine,
    requestSerialize: serialize_express_shipment_CreateShipmentLineRequest,
    requestDeserialize: deserialize_express_shipment_CreateShipmentLineRequest,
    responseSerialize: serialize_express_shipment_ShipmentLine,
    responseDeserialize: deserialize_express_shipment_ShipmentLine
  },
  deleteShipmentLine: {
    path: '/express_shipment.ExpressShipment/DeleteShipmentLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.DeleteShipmentLineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_express_shipment_DeleteShipmentLineRequest,
    requestDeserialize: deserialize_express_shipment_DeleteShipmentLineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  updateShipmentLine: {
    path: '/express_shipment.ExpressShipment/UpdateShipmentLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.UpdateShipmentLineRequest,
    responseType: proto_express_shipment_pb.ShipmentLine,
    requestSerialize: serialize_express_shipment_UpdateShipmentLineRequest,
    requestDeserialize: deserialize_express_shipment_UpdateShipmentLineRequest,
    responseSerialize: serialize_express_shipment_ShipmentLine,
    responseDeserialize: deserialize_express_shipment_ShipmentLine
  },
  listShipmentLines: {
    path: '/express_shipment.ExpressShipment/ListShipmentLines',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_shipment_pb.ListShipmentLinesRequest,
    responseType: proto_express_shipment_pb.ListShipmentLinesResponse,
    requestSerialize: serialize_express_shipment_ListShipmentLinesRequest,
    requestDeserialize: deserialize_express_shipment_ListShipmentLinesRequest,
    responseSerialize: serialize_express_shipment_ListShipmentLinesResponse,
    responseDeserialize: deserialize_express_shipment_ListShipmentLinesResponse
  }
};

exports.ExpressShipmentClient = grpc.makeGenericClientConstructor(ExpressShipmentService);
