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
var proto_express_receipt_pb = require('../proto/express_receipt_pb.js');
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

function serialize_express_receipt_CreateReceiptLineRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.CreateReceiptLineRequest)) {
    throw new Error('Expected argument of type express_receipt.CreateReceiptLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_CreateReceiptLineRequest (buffer_arg) {
  return proto_express_receipt_pb.CreateReceiptLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_CreateReceiptRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.CreateReceiptRequest)) {
    throw new Error('Expected argument of type express_receipt.CreateReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_CreateReceiptRequest (buffer_arg) {
  return proto_express_receipt_pb.CreateReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_DeleteReceiptLineRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.DeleteReceiptLineRequest)) {
    throw new Error('Expected argument of type express_receipt.DeleteReceiptLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_DeleteReceiptLineRequest (buffer_arg) {
  return proto_express_receipt_pb.DeleteReceiptLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_DeleteReceiptRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.DeleteReceiptRequest)) {
    throw new Error('Expected argument of type express_receipt.DeleteReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_DeleteReceiptRequest (buffer_arg) {
  return proto_express_receipt_pb.DeleteReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListBusinessPartnersRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListBusinessPartnersRequest)) {
    throw new Error('Expected argument of type express_receipt.ListBusinessPartnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListBusinessPartnersRequest (buffer_arg) {
  return proto_express_receipt_pb.ListBusinessPartnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListBusinessPartnersResponse (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListBusinessPartnersResponse)) {
    throw new Error('Expected argument of type express_receipt.ListBusinessPartnersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListBusinessPartnersResponse (buffer_arg) {
  return proto_express_receipt_pb.ListBusinessPartnersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListProductsRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type express_receipt.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListProductsRequest (buffer_arg) {
  return proto_express_receipt_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListProductsResponse (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type express_receipt.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListProductsResponse (buffer_arg) {
  return proto_express_receipt_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListPurchaseOrdersRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListPurchaseOrdersRequest)) {
    throw new Error('Expected argument of type express_receipt.ListPurchaseOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListPurchaseOrdersRequest (buffer_arg) {
  return proto_express_receipt_pb.ListPurchaseOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListPurchaseOrdersResponse (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListPurchaseOrdersResponse)) {
    throw new Error('Expected argument of type express_receipt.ListPurchaseOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListPurchaseOrdersResponse (buffer_arg) {
  return proto_express_receipt_pb.ListPurchaseOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListReceiptLinesRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListReceiptLinesRequest)) {
    throw new Error('Expected argument of type express_receipt.ListReceiptLinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListReceiptLinesRequest (buffer_arg) {
  return proto_express_receipt_pb.ListReceiptLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ListReceiptLinesResponse (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ListReceiptLinesResponse)) {
    throw new Error('Expected argument of type express_receipt.ListReceiptLinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ListReceiptLinesResponse (buffer_arg) {
  return proto_express_receipt_pb.ListReceiptLinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ProcessReceiptRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ProcessReceiptRequest)) {
    throw new Error('Expected argument of type express_receipt.ProcessReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ProcessReceiptRequest (buffer_arg) {
  return proto_express_receipt_pb.ProcessReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_Receipt (arg) {
  if (!(arg instanceof proto_express_receipt_pb.Receipt)) {
    throw new Error('Expected argument of type express_receipt.Receipt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_Receipt (buffer_arg) {
  return proto_express_receipt_pb.Receipt.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_ReceiptLine (arg) {
  if (!(arg instanceof proto_express_receipt_pb.ReceiptLine)) {
    throw new Error('Expected argument of type express_receipt.ReceiptLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_ReceiptLine (buffer_arg) {
  return proto_express_receipt_pb.ReceiptLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_express_receipt_UpdateReceiptLineRequest (arg) {
  if (!(arg instanceof proto_express_receipt_pb.UpdateReceiptLineRequest)) {
    throw new Error('Expected argument of type express_receipt.UpdateReceiptLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_express_receipt_UpdateReceiptLineRequest (buffer_arg) {
  return proto_express_receipt_pb.UpdateReceiptLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

var ExpressReceiptService = exports.ExpressReceiptService = {
  listBusinessPartners: {
    path: '/express_receipt.ExpressReceipt/ListBusinessPartners',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.ListBusinessPartnersRequest,
    responseType: proto_express_receipt_pb.ListBusinessPartnersResponse,
    requestSerialize: serialize_express_receipt_ListBusinessPartnersRequest,
    requestDeserialize: deserialize_express_receipt_ListBusinessPartnersRequest,
    responseSerialize: serialize_express_receipt_ListBusinessPartnersResponse,
    responseDeserialize: deserialize_express_receipt_ListBusinessPartnersResponse
  },
  listPurchaseOrders: {
    path: '/express_receipt.ExpressReceipt/ListPurchaseOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.ListPurchaseOrdersRequest,
    responseType: proto_express_receipt_pb.ListPurchaseOrdersResponse,
    requestSerialize: serialize_express_receipt_ListPurchaseOrdersRequest,
    requestDeserialize: deserialize_express_receipt_ListPurchaseOrdersRequest,
    responseSerialize: serialize_express_receipt_ListPurchaseOrdersResponse,
    responseDeserialize: deserialize_express_receipt_ListPurchaseOrdersResponse
  },
  listProducts: {
    path: '/express_receipt.ExpressReceipt/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.ListProductsRequest,
    responseType: proto_express_receipt_pb.ListProductsResponse,
    requestSerialize: serialize_express_receipt_ListProductsRequest,
    requestDeserialize: deserialize_express_receipt_ListProductsRequest,
    responseSerialize: serialize_express_receipt_ListProductsResponse,
    responseDeserialize: deserialize_express_receipt_ListProductsResponse
  },
  // Receipt
  createReceipt: {
    path: '/express_receipt.ExpressReceipt/CreateReceipt',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.CreateReceiptRequest,
    responseType: proto_express_receipt_pb.Receipt,
    requestSerialize: serialize_express_receipt_CreateReceiptRequest,
    requestDeserialize: deserialize_express_receipt_CreateReceiptRequest,
    responseSerialize: serialize_express_receipt_Receipt,
    responseDeserialize: deserialize_express_receipt_Receipt
  },
  deleteReceipt: {
    path: '/express_receipt.ExpressReceipt/DeleteReceipt',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.DeleteReceiptRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_express_receipt_DeleteReceiptRequest,
    requestDeserialize: deserialize_express_receipt_DeleteReceiptRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  processReceipt: {
    path: '/express_receipt.ExpressReceipt/ProcessReceipt',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.ProcessReceiptRequest,
    responseType: proto_express_receipt_pb.Receipt,
    requestSerialize: serialize_express_receipt_ProcessReceiptRequest,
    requestDeserialize: deserialize_express_receipt_ProcessReceiptRequest,
    responseSerialize: serialize_express_receipt_Receipt,
    responseDeserialize: deserialize_express_receipt_Receipt
  },
  // 	Receipt Line
  createReceiptLine: {
    path: '/express_receipt.ExpressReceipt/CreateReceiptLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.CreateReceiptLineRequest,
    responseType: proto_express_receipt_pb.ReceiptLine,
    requestSerialize: serialize_express_receipt_CreateReceiptLineRequest,
    requestDeserialize: deserialize_express_receipt_CreateReceiptLineRequest,
    responseSerialize: serialize_express_receipt_ReceiptLine,
    responseDeserialize: deserialize_express_receipt_ReceiptLine
  },
  deleteReceiptLine: {
    path: '/express_receipt.ExpressReceipt/DeleteReceiptLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.DeleteReceiptLineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_express_receipt_DeleteReceiptLineRequest,
    requestDeserialize: deserialize_express_receipt_DeleteReceiptLineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  updateReceiptLine: {
    path: '/express_receipt.ExpressReceipt/UpdateReceiptLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.UpdateReceiptLineRequest,
    responseType: proto_express_receipt_pb.ReceiptLine,
    requestSerialize: serialize_express_receipt_UpdateReceiptLineRequest,
    requestDeserialize: deserialize_express_receipt_UpdateReceiptLineRequest,
    responseSerialize: serialize_express_receipt_ReceiptLine,
    responseDeserialize: deserialize_express_receipt_ReceiptLine
  },
  listReceiptLines: {
    path: '/express_receipt.ExpressReceipt/ListReceiptLines',
    requestStream: false,
    responseStream: false,
    requestType: proto_express_receipt_pb.ListReceiptLinesRequest,
    responseType: proto_express_receipt_pb.ListReceiptLinesResponse,
    requestSerialize: serialize_express_receipt_ListReceiptLinesRequest,
    requestDeserialize: deserialize_express_receipt_ListReceiptLinesRequest,
    responseSerialize: serialize_express_receipt_ListReceiptLinesResponse,
    responseDeserialize: deserialize_express_receipt_ListReceiptLinesResponse
  }
};

exports.ExpressReceiptClient = grpc.makeGenericClientConstructor(ExpressReceiptService);
