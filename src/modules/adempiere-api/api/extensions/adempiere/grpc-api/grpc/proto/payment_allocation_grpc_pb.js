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
var proto_payment_allocation_pb = require('../proto/payment_allocation_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_ListLookupItemsResponse (arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse (buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListBusinessPartnersRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListBusinessPartnersRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListBusinessPartnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListBusinessPartnersRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListBusinessPartnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListChargesRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListChargesRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListChargesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListChargesRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListChargesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListCurrenciesRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListCurrenciesRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListCurrenciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListCurrenciesRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListCurrenciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListInvoicesRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListInvoicesRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListInvoicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListInvoicesRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListInvoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListInvoicesResponse (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListInvoicesResponse)) {
    throw new Error('Expected argument of type payment_allocation.ListInvoicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListInvoicesResponse (buffer_arg) {
  return proto_payment_allocation_pb.ListInvoicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListOrganizationsRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListOrganizationsRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListOrganizationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListOrganizationsRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListPaymentsRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListPaymentsRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListPaymentsRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListPaymentsResponse (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListPaymentsResponse)) {
    throw new Error('Expected argument of type payment_allocation.ListPaymentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListPaymentsResponse (buffer_arg) {
  return proto_payment_allocation_pb.ListPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListTransactionOrganizationsRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListTransactionOrganizationsRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListTransactionOrganizationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListTransactionOrganizationsRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListTransactionOrganizationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ListTransactionTypesRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ListTransactionTypesRequest)) {
    throw new Error('Expected argument of type payment_allocation.ListTransactionTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ListTransactionTypesRequest (buffer_arg) {
  return proto_payment_allocation_pb.ListTransactionTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ProcessRequest (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ProcessRequest)) {
    throw new Error('Expected argument of type payment_allocation.ProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ProcessRequest (buffer_arg) {
  return proto_payment_allocation_pb.ProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_allocation_ProcessResponse (arg) {
  if (!(arg instanceof proto_payment_allocation_pb.ProcessResponse)) {
    throw new Error('Expected argument of type payment_allocation.ProcessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_allocation_ProcessResponse (buffer_arg) {
  return proto_payment_allocation_pb.ProcessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

// The Banck Statement Match form service definition.
// - org.compiere.apps.form.Allocation
// - org.compiere.apps.form.VAllocation
// - org.adempiere.webui.apps.form.WAllocation
var PaymentAllocationService = exports.PaymentAllocationService = {
  // lists criteria
  listBusinessPartners: {
    path: '/payment_allocation.PaymentAllocation/ListBusinessPartners',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListBusinessPartnersRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_allocation_ListBusinessPartnersRequest,
    requestDeserialize: deserialize_payment_allocation_ListBusinessPartnersRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse
  },
  listOrganizations: {
    path: '/payment_allocation.PaymentAllocation/ListOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListOrganizationsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_allocation_ListOrganizationsRequest,
    requestDeserialize: deserialize_payment_allocation_ListOrganizationsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse
  },
  listCurrencies: {
    path: '/payment_allocation.PaymentAllocation/ListCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListCurrenciesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_allocation_ListCurrenciesRequest,
    requestDeserialize: deserialize_payment_allocation_ListCurrenciesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse
  },
  listTransactionTypes: {
    path: '/payment_allocation.PaymentAllocation/ListTransactionTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListTransactionTypesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_allocation_ListTransactionTypesRequest,
    requestDeserialize: deserialize_payment_allocation_ListTransactionTypesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse
  },
  // list result
  listPayments: {
    path: '/payment_allocation.PaymentAllocation/ListPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListPaymentsRequest,
    responseType: proto_payment_allocation_pb.ListPaymentsResponse,
    requestSerialize: serialize_payment_allocation_ListPaymentsRequest,
    requestDeserialize: deserialize_payment_allocation_ListPaymentsRequest,
    responseSerialize: serialize_payment_allocation_ListPaymentsResponse,
    responseDeserialize: deserialize_payment_allocation_ListPaymentsResponse
  },
  listInvoices: {
    path: '/payment_allocation.PaymentAllocation/ListInvoices',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListInvoicesRequest,
    responseType: proto_payment_allocation_pb.ListInvoicesResponse,
    requestSerialize: serialize_payment_allocation_ListInvoicesRequest,
    requestDeserialize: deserialize_payment_allocation_ListInvoicesRequest,
    responseSerialize: serialize_payment_allocation_ListInvoicesResponse,
    responseDeserialize: deserialize_payment_allocation_ListInvoicesResponse
  },
  // process
  listCharges: {
    path: '/payment_allocation.PaymentAllocation/ListCharges',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListChargesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_allocation_ListChargesRequest,
    requestDeserialize: deserialize_payment_allocation_ListChargesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse
  },
  listTransactionOrganizations: {
    path: '/payment_allocation.PaymentAllocation/ListTransactionOrganizations',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ListTransactionOrganizationsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_allocation_ListTransactionOrganizationsRequest,
    requestDeserialize: deserialize_payment_allocation_ListTransactionOrganizationsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse
  },
  process: {
    path: '/payment_allocation.PaymentAllocation/Process',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_allocation_pb.ProcessRequest,
    responseType: proto_payment_allocation_pb.ProcessResponse,
    requestSerialize: serialize_payment_allocation_ProcessRequest,
    requestDeserialize: deserialize_payment_allocation_ProcessRequest,
    responseSerialize: serialize_payment_allocation_ProcessResponse,
    responseDeserialize: deserialize_payment_allocation_ProcessResponse
  }
};

exports.PaymentAllocationClient = grpc.makeGenericClientConstructor(PaymentAllocationService);
