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
var proto_express_movement_pb = require('../proto/express_movement_pb.js');
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

function serialize_express_movement_CreateMovementLineRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.CreateMovementLineRequest)) {
    throw new Error('Expected argument of type express_movement.CreateMovementLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_CreateMovementLineRequest(buffer_arg) {
  return proto_express_movement_pb.CreateMovementLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_CreateMovementRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.CreateMovementRequest)) {
    throw new Error('Expected argument of type express_movement.CreateMovementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_CreateMovementRequest(buffer_arg) {
  return proto_express_movement_pb.CreateMovementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_DeleteMovementLineRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.DeleteMovementLineRequest)) {
    throw new Error('Expected argument of type express_movement.DeleteMovementLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_DeleteMovementLineRequest(buffer_arg) {
  return proto_express_movement_pb.DeleteMovementLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_DeleteMovementRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.DeleteMovementRequest)) {
    throw new Error('Expected argument of type express_movement.DeleteMovementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_DeleteMovementRequest(buffer_arg) {
  return proto_express_movement_pb.DeleteMovementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ListMovementLinesRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.ListMovementLinesRequest)) {
    throw new Error('Expected argument of type express_movement.ListMovementLinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ListMovementLinesRequest(buffer_arg) {
  return proto_express_movement_pb.ListMovementLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ListMovementLinesResponse(arg) {
  if (!(arg instanceof proto_express_movement_pb.ListMovementLinesResponse)) {
    throw new Error('Expected argument of type express_movement.ListMovementLinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ListMovementLinesResponse(buffer_arg) {
  return proto_express_movement_pb.ListMovementLinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ListProductsRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type express_movement.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ListProductsRequest(buffer_arg) {
  return proto_express_movement_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ListProductsResponse(arg) {
  if (!(arg instanceof proto_express_movement_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type express_movement.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ListProductsResponse(buffer_arg) {
  return proto_express_movement_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ListWarehousesRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.ListWarehousesRequest)) {
    throw new Error('Expected argument of type express_movement.ListWarehousesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ListWarehousesRequest(buffer_arg) {
  return proto_express_movement_pb.ListWarehousesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ListWarehousesResponse(arg) {
  if (!(arg instanceof proto_express_movement_pb.ListWarehousesResponse)) {
    throw new Error('Expected argument of type express_movement.ListWarehousesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ListWarehousesResponse(buffer_arg) {
  return proto_express_movement_pb.ListWarehousesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_Movement(arg) {
  if (!(arg instanceof proto_express_movement_pb.Movement)) {
    throw new Error('Expected argument of type express_movement.Movement');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_Movement(buffer_arg) {
  return proto_express_movement_pb.Movement.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_MovementLine(arg) {
  if (!(arg instanceof proto_express_movement_pb.MovementLine)) {
    throw new Error('Expected argument of type express_movement.MovementLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_MovementLine(buffer_arg) {
  return proto_express_movement_pb.MovementLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_ProcessMovementRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.ProcessMovementRequest)) {
    throw new Error('Expected argument of type express_movement.ProcessMovementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_ProcessMovementRequest(buffer_arg) {
  return proto_express_movement_pb.ProcessMovementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_movement_UpdateMovementLineRequest(arg) {
  if (!(arg instanceof proto_express_movement_pb.UpdateMovementLineRequest)) {
    throw new Error('Expected argument of type express_movement.UpdateMovementLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_movement_UpdateMovementLineRequest(buffer_arg) {
  return proto_express_movement_pb.UpdateMovementLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExpressMovementService = exports.ExpressMovementService = {
  listWarehouses: {
    path: '/express_movement.ExpressMovement/ListWarehouses',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.ListWarehousesRequest,
    responseType: proto_express_movement_pb.ListWarehousesResponse,
    requestSerialize: serialize_express_movement_ListWarehousesRequest,
    requestDeserialize: deserialize_express_movement_ListWarehousesRequest,
    responseSerialize: serialize_express_movement_ListWarehousesResponse,
    responseDeserialize: deserialize_express_movement_ListWarehousesResponse,
  },
  listProducts: {
    path: '/express_movement.ExpressMovement/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.ListProductsRequest,
    responseType: proto_express_movement_pb.ListProductsResponse,
    requestSerialize: serialize_express_movement_ListProductsRequest,
    requestDeserialize: deserialize_express_movement_ListProductsRequest,
    responseSerialize: serialize_express_movement_ListProductsResponse,
    responseDeserialize: deserialize_express_movement_ListProductsResponse,
  },
  // Movement
createMovement: {
    path: '/express_movement.ExpressMovement/CreateMovement',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.CreateMovementRequest,
    responseType: proto_express_movement_pb.Movement,
    requestSerialize: serialize_express_movement_CreateMovementRequest,
    requestDeserialize: deserialize_express_movement_CreateMovementRequest,
    responseSerialize: serialize_express_movement_Movement,
    responseDeserialize: deserialize_express_movement_Movement,
  },
  deleteMovement: {
    path: '/express_movement.ExpressMovement/DeleteMovement',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.DeleteMovementRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_express_movement_DeleteMovementRequest,
    requestDeserialize: deserialize_express_movement_DeleteMovementRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  processMovement: {
    path: '/express_movement.ExpressMovement/ProcessMovement',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.ProcessMovementRequest,
    responseType: proto_express_movement_pb.Movement,
    requestSerialize: serialize_express_movement_ProcessMovementRequest,
    requestDeserialize: deserialize_express_movement_ProcessMovementRequest,
    responseSerialize: serialize_express_movement_Movement,
    responseDeserialize: deserialize_express_movement_Movement,
  },
  // 	Movement Line
createMovementLine: {
    path: '/express_movement.ExpressMovement/CreateMovementLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.CreateMovementLineRequest,
    responseType: proto_express_movement_pb.MovementLine,
    requestSerialize: serialize_express_movement_CreateMovementLineRequest,
    requestDeserialize: deserialize_express_movement_CreateMovementLineRequest,
    responseSerialize: serialize_express_movement_MovementLine,
    responseDeserialize: deserialize_express_movement_MovementLine,
  },
  deleteMovementLine: {
    path: '/express_movement.ExpressMovement/DeleteMovementLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.DeleteMovementLineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_express_movement_DeleteMovementLineRequest,
    requestDeserialize: deserialize_express_movement_DeleteMovementLineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  updateMovementLine: {
    path: '/express_movement.ExpressMovement/UpdateMovementLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.UpdateMovementLineRequest,
    responseType: proto_express_movement_pb.MovementLine,
    requestSerialize: serialize_express_movement_UpdateMovementLineRequest,
    requestDeserialize: deserialize_express_movement_UpdateMovementLineRequest,
    responseSerialize: serialize_express_movement_MovementLine,
    responseDeserialize: deserialize_express_movement_MovementLine,
  },
  listMovementLines: {
    path: '/express_movement.ExpressMovement/ListMovementLines',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_movement_pb.ListMovementLinesRequest,
    responseType: proto_express_movement_pb.ListMovementLinesResponse,
    requestSerialize: serialize_express_movement_ListMovementLinesRequest,
    requestDeserialize: deserialize_express_movement_ListMovementLinesRequest,
    responseSerialize: serialize_express_movement_ListMovementLinesResponse,
    responseDeserialize: deserialize_express_movement_ListMovementLinesResponse,
  },
};

exports.ExpressMovementClient = grpc.makeGenericClientConstructor(ExpressMovementService);
