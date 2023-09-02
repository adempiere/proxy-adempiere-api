// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
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
var proto_product_pb = require('../proto/product_pb.js');
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

function serialize_product_ListProductInfoRequest(arg) {
  if (!(arg instanceof proto_product_pb.ListProductInfoRequest)) {
    throw new Error('Expected argument of type product.ListProductInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ListProductInfoRequest(buffer_arg) {
  return proto_product_pb.ListProductInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The product service definition.
var ProductService = exports.ProductService = {
  // List Product Info Request
listProductInfo: {
    path: '/product.Product/ListProductInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_product_pb.ListProductInfoRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_product_ListProductInfoRequest,
    requestDeserialize: deserialize_product_ListProductInfoRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
};

exports.ProductClient = grpc.makeGenericClientConstructor(ProductService);
