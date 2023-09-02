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
var proto_invoice_pb = require('../proto/invoice_pb.js');
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

function serialize_invoice_ListInvoiceInfoRequest(arg) {
  if (!(arg instanceof proto_invoice_pb.ListInvoiceInfoRequest)) {
    throw new Error('Expected argument of type invoice.ListInvoiceInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_invoice_ListInvoiceInfoRequest(buffer_arg) {
  return proto_invoice_pb.ListInvoiceInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The invoice service definition.
var InvoiceService = exports.InvoiceService = {
  // List Invoice Info Request
listInvoiceInfo: {
    path: '/invoice.Invoice/ListInvoiceInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_invoice_pb.ListInvoiceInfoRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_invoice_ListInvoiceInfoRequest,
    requestDeserialize: deserialize_invoice_ListInvoiceInfoRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
};

exports.InvoiceClient = grpc.makeGenericClientConstructor(InvoiceService);
