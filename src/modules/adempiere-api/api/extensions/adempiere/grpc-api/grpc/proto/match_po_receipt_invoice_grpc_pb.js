// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Elsio Sanchez Elsiosanchez@outlook.com                           *
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
var proto_match_po_receipt_invoice_pb = require('../proto/match_po_receipt_invoice_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_ListLookupItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse(buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListMatchedFromRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListMatchedFromRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListMatchedFromRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListMatchedFromRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListMatchedFromRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListMatchedFromResponse(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListMatchedFromResponse)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListMatchedFromResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListMatchedFromResponse(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListMatchedFromResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListMatchedToRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListMatchedToRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListMatchedToRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListMatchedToRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListMatchedToRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListMatchedToResponse(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListMatchedToResponse)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListMatchedToResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListMatchedToResponse(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListMatchedToResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListMatchesTypesFromRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListMatchesTypesFromRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListMatchesTypesFromRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListMatchesTypesFromRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListMatchesTypesFromRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListMatchesTypesToRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListMatchesTypesToRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListMatchesTypesToRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListMatchesTypesToRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListMatchesTypesToRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListProductsRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListProductsRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListProductsResponse(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListProductsResponse(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListSearchModesRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListSearchModesRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListSearchModesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListSearchModesRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListSearchModesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ListVendorsRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ListVendorsRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ListVendorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ListVendorsRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ListVendorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ProcessRequest(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ProcessRequest)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ProcessRequest(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_match_po_receipt_invoice_ProcessResponse(arg) {
  if (!(arg instanceof proto_match_po_receipt_invoice_pb.ProcessResponse)) {
    throw new Error('Expected argument of type match_po_receipt_invoice.ProcessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_match_po_receipt_invoice_ProcessResponse(buffer_arg) {
  return proto_match_po_receipt_invoice_pb.ProcessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Matching PO-Receipt-Invoice form service definition.
// - org.compiere.apps.form.Match
// - org.compiere.apps.form.VMatch
// - org.adempiere.webui.apps.form.WMatch
var MatchPORReceiptInvoiceService = exports.MatchPORReceiptInvoiceService = {
  // lists criteria
listMatchesTypesFrom: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListMatchesTypesFrom',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListMatchesTypesFromRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListMatchesTypesFromRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListMatchesTypesFromRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listMatchesTypesTo: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListMatchesTypesTo',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListMatchesTypesToRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListMatchesTypesToRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListMatchesTypesToRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listSearchModes: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListSearchModes',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListSearchModesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListSearchModesRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListSearchModesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listVendors: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListVendors',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListVendorsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListVendorsRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListVendorsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listProducts: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListProductsRequest,
    responseType: proto_match_po_receipt_invoice_pb.ListProductsResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListProductsRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListProductsRequest,
    responseSerialize: serialize_match_po_receipt_invoice_ListProductsResponse,
    responseDeserialize: deserialize_match_po_receipt_invoice_ListProductsResponse,
  },
  // list result
listMatchedFrom: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListMatchedFrom',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListMatchedFromRequest,
    responseType: proto_match_po_receipt_invoice_pb.ListMatchedFromResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListMatchedFromRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListMatchedFromRequest,
    responseSerialize: serialize_match_po_receipt_invoice_ListMatchedFromResponse,
    responseDeserialize: deserialize_match_po_receipt_invoice_ListMatchedFromResponse,
  },
  listMatchedTo: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/ListMatchedTo',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ListMatchedToRequest,
    responseType: proto_match_po_receipt_invoice_pb.ListMatchedToResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ListMatchedToRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ListMatchedToRequest,
    responseSerialize: serialize_match_po_receipt_invoice_ListMatchedToResponse,
    responseDeserialize: deserialize_match_po_receipt_invoice_ListMatchedToResponse,
  },
  // process
process: {
    path: '/match_po_receipt_invoice.MatchPORReceiptInvoice/Process',
    requestStream: false,
    responseStream: false,
    requestType: proto_match_po_receipt_invoice_pb.ProcessRequest,
    responseType: proto_match_po_receipt_invoice_pb.ProcessResponse,
    requestSerialize: serialize_match_po_receipt_invoice_ProcessRequest,
    requestDeserialize: deserialize_match_po_receipt_invoice_ProcessRequest,
    responseSerialize: serialize_match_po_receipt_invoice_ProcessResponse,
    responseDeserialize: deserialize_match_po_receipt_invoice_ProcessResponse,
  },
};

exports.MatchPORReceiptInvoiceClient = grpc.makeGenericClientConstructor(MatchPORReceiptInvoiceService);
