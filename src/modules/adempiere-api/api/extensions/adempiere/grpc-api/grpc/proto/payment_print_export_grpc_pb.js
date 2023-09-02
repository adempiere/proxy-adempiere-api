// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
var proto_payment_print_export_pb = require('../proto/payment_print_export_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');

function serialize_data_ListLookupItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse(buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ConfirmPrintRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ConfirmPrintRequest)) {
    throw new Error('Expected argument of type payment_print_export.ConfirmPrintRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ConfirmPrintRequest(buffer_arg) {
  return proto_payment_print_export_pb.ConfirmPrintRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ConfirmPrintResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ConfirmPrintResponse)) {
    throw new Error('Expected argument of type payment_print_export.ConfirmPrintResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ConfirmPrintResponse(buffer_arg) {
  return proto_payment_print_export_pb.ConfirmPrintResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ExportRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ExportRequest)) {
    throw new Error('Expected argument of type payment_print_export.ExportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ExportRequest(buffer_arg) {
  return proto_payment_print_export_pb.ExportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ExportResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ExportResponse)) {
    throw new Error('Expected argument of type payment_print_export.ExportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ExportResponse(buffer_arg) {
  return proto_payment_print_export_pb.ExportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_GetDocumentNoRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.GetDocumentNoRequest)) {
    throw new Error('Expected argument of type payment_print_export.GetDocumentNoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_GetDocumentNoRequest(buffer_arg) {
  return proto_payment_print_export_pb.GetDocumentNoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_GetDocumentNoResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.GetDocumentNoResponse)) {
    throw new Error('Expected argument of type payment_print_export.GetDocumentNoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_GetDocumentNoResponse(buffer_arg) {
  return proto_payment_print_export_pb.GetDocumentNoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_GetPaymentSelectionRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.GetPaymentSelectionRequest)) {
    throw new Error('Expected argument of type payment_print_export.GetPaymentSelectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_GetPaymentSelectionRequest(buffer_arg) {
  return proto_payment_print_export_pb.GetPaymentSelectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ListPaymentRulesRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ListPaymentRulesRequest)) {
    throw new Error('Expected argument of type payment_print_export.ListPaymentRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ListPaymentRulesRequest(buffer_arg) {
  return proto_payment_print_export_pb.ListPaymentRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ListPaymentSelectionsRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ListPaymentSelectionsRequest)) {
    throw new Error('Expected argument of type payment_print_export.ListPaymentSelectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ListPaymentSelectionsRequest(buffer_arg) {
  return proto_payment_print_export_pb.ListPaymentSelectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ListPaymentsRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ListPaymentsRequest)) {
    throw new Error('Expected argument of type payment_print_export.ListPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ListPaymentsRequest(buffer_arg) {
  return proto_payment_print_export_pb.ListPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ListPaymentsResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ListPaymentsResponse)) {
    throw new Error('Expected argument of type payment_print_export.ListPaymentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ListPaymentsResponse(buffer_arg) {
  return proto_payment_print_export_pb.ListPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PaymentSelection(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PaymentSelection)) {
    throw new Error('Expected argument of type payment_print_export.PaymentSelection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PaymentSelection(buffer_arg) {
  return proto_payment_print_export_pb.PaymentSelection.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PrintRemittanceRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PrintRemittanceRequest)) {
    throw new Error('Expected argument of type payment_print_export.PrintRemittanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PrintRemittanceRequest(buffer_arg) {
  return proto_payment_print_export_pb.PrintRemittanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PrintRemittanceResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PrintRemittanceResponse)) {
    throw new Error('Expected argument of type payment_print_export.PrintRemittanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PrintRemittanceResponse(buffer_arg) {
  return proto_payment_print_export_pb.PrintRemittanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PrintRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PrintRequest)) {
    throw new Error('Expected argument of type payment_print_export.PrintRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PrintRequest(buffer_arg) {
  return proto_payment_print_export_pb.PrintRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PrintResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PrintResponse)) {
    throw new Error('Expected argument of type payment_print_export.PrintResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PrintResponse(buffer_arg) {
  return proto_payment_print_export_pb.PrintResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ProcessRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ProcessRequest)) {
    throw new Error('Expected argument of type payment_print_export.ProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ProcessRequest(buffer_arg) {
  return proto_payment_print_export_pb.ProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ProcessResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ProcessResponse)) {
    throw new Error('Expected argument of type payment_print_export.ProcessResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ProcessResponse(buffer_arg) {
  return proto_payment_print_export_pb.ProcessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Payment Print/Export form service definition.
// - org.compiere.apps.form.PayPrint
// - org.compiere.apps.form.VPayPrint
// - org.adempiere.webui.apps.form.WPayPrint
var PaymentPrintExportService = exports.PaymentPrintExportService = {
  // List Payment Selections
listPaymentSelections: {
    path: '/payment_print_export.PaymentPrintExport/ListPaymentSelections',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ListPaymentSelectionsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_print_export_ListPaymentSelectionsRequest,
    requestDeserialize: deserialize_payment_print_export_ListPaymentSelectionsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // Get a Payment Selection info
getPaymentSelection: {
    path: '/payment_print_export.PaymentPrintExport/GetPaymentSelection',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.GetPaymentSelectionRequest,
    responseType: proto_payment_print_export_pb.PaymentSelection,
    requestSerialize: serialize_payment_print_export_GetPaymentSelectionRequest,
    requestDeserialize: deserialize_payment_print_export_GetPaymentSelectionRequest,
    responseSerialize: serialize_payment_print_export_PaymentSelection,
    responseDeserialize: deserialize_payment_print_export_PaymentSelection,
  },
  // List Payment Rules
listPaymentRules: {
    path: '/payment_print_export.PaymentPrintExport/ListPaymentRules',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ListPaymentRulesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_print_export_ListPaymentRulesRequest,
    requestDeserialize: deserialize_payment_print_export_ListPaymentRulesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // Get Document No
getDocumentNo: {
    path: '/payment_print_export.PaymentPrintExport/GetDocumentNo',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.GetDocumentNoRequest,
    responseType: proto_payment_print_export_pb.GetDocumentNoResponse,
    requestSerialize: serialize_payment_print_export_GetDocumentNoRequest,
    requestDeserialize: deserialize_payment_print_export_GetDocumentNoRequest,
    responseSerialize: serialize_payment_print_export_GetDocumentNoResponse,
    responseDeserialize: deserialize_payment_print_export_GetDocumentNoResponse,
  },
  // List Payments Check
listPayments: {
    path: '/payment_print_export.PaymentPrintExport/ListPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ListPaymentsRequest,
    responseType: proto_payment_print_export_pb.ListPaymentsResponse,
    requestSerialize: serialize_payment_print_export_ListPaymentsRequest,
    requestDeserialize: deserialize_payment_print_export_ListPaymentsRequest,
    responseSerialize: serialize_payment_print_export_ListPaymentsResponse,
    responseDeserialize: deserialize_payment_print_export_ListPaymentsResponse,
  },
  // Process and Create EFT Payment
process: {
    path: '/payment_print_export.PaymentPrintExport/Process',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ProcessRequest,
    responseType: proto_payment_print_export_pb.ProcessResponse,
    requestSerialize: serialize_payment_print_export_ProcessRequest,
    requestDeserialize: deserialize_payment_print_export_ProcessRequest,
    responseSerialize: serialize_payment_print_export_ProcessResponse,
    responseDeserialize: deserialize_payment_print_export_ProcessResponse,
  },
  // Export Payments
export: {
    path: '/payment_print_export.PaymentPrintExport/Export',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ExportRequest,
    responseType: proto_payment_print_export_pb.ExportResponse,
    requestSerialize: serialize_payment_print_export_ExportRequest,
    requestDeserialize: deserialize_payment_print_export_ExportRequest,
    responseSerialize: serialize_payment_print_export_ExportResponse,
    responseDeserialize: deserialize_payment_print_export_ExportResponse,
  },
  // Print Payments
print: {
    path: '/payment_print_export.PaymentPrintExport/Print',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.PrintRequest,
    responseType: proto_payment_print_export_pb.PrintResponse,
    requestSerialize: serialize_payment_print_export_PrintRequest,
    requestDeserialize: deserialize_payment_print_export_PrintRequest,
    responseSerialize: serialize_payment_print_export_PrintResponse,
    responseDeserialize: deserialize_payment_print_export_PrintResponse,
  },
  // Confirm Payment
confirmPrint: {
    path: '/payment_print_export.PaymentPrintExport/ConfirmPrint',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ConfirmPrintRequest,
    responseType: proto_payment_print_export_pb.ConfirmPrintResponse,
    requestSerialize: serialize_payment_print_export_ConfirmPrintRequest,
    requestDeserialize: deserialize_payment_print_export_ConfirmPrintRequest,
    responseSerialize: serialize_payment_print_export_ConfirmPrintResponse,
    responseDeserialize: deserialize_payment_print_export_ConfirmPrintResponse,
  },
  // Print Remittance
printRemittance: {
    path: '/payment_print_export.PaymentPrintExport/PrintRemittance',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.PrintRemittanceRequest,
    responseType: proto_payment_print_export_pb.PrintRemittanceResponse,
    requestSerialize: serialize_payment_print_export_PrintRemittanceRequest,
    requestDeserialize: deserialize_payment_print_export_PrintRemittanceRequest,
    responseSerialize: serialize_payment_print_export_PrintRemittanceResponse,
    responseDeserialize: deserialize_payment_print_export_PrintRemittanceResponse,
  },
};

exports.PaymentPrintExportClient = grpc.makeGenericClientConstructor(PaymentPrintExportService);
