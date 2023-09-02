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
var proto_point_of_sales_pb = require('../proto/point_of_sales_pb.js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_file_management_pb = require('../proto/file_management_pb.js');
var proto_time_control_pb = require('../proto/time_control_pb.js');

function serialize_data_AllocateSellerRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.AllocateSellerRequest)) {
    throw new Error('Expected argument of type data.AllocateSellerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_AllocateSellerRequest (buffer_arg) {
  return proto_point_of_sales_pb.AllocateSellerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_AvailableRefund (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.AvailableRefund)) {
    throw new Error('Expected argument of type data.AvailableRefund');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_AvailableRefund (buffer_arg) {
  return proto_point_of_sales_pb.AvailableRefund.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CashClosing (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CashClosing)) {
    throw new Error('Expected argument of type data.CashClosing');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CashClosing (buffer_arg) {
  return proto_point_of_sales_pb.CashClosing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CashClosingRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CashClosingRequest)) {
    throw new Error('Expected argument of type data.CashClosingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CashClosingRequest (buffer_arg) {
  return proto_point_of_sales_pb.CashClosingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CashOpeningRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CashOpeningRequest)) {
    throw new Error('Expected argument of type data.CashOpeningRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CashOpeningRequest (buffer_arg) {
  return proto_point_of_sales_pb.CashOpeningRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CashWithdrawalRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CashWithdrawalRequest)) {
    throw new Error('Expected argument of type data.CashWithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CashWithdrawalRequest (buffer_arg) {
  return proto_point_of_sales_pb.CashWithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CommandShortcut (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CommandShortcut)) {
    throw new Error('Expected argument of type data.CommandShortcut');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CommandShortcut (buffer_arg) {
  return proto_point_of_sales_pb.CommandShortcut.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CopyOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CopyOrderRequest)) {
    throw new Error('Expected argument of type data.CopyOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CopyOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.CopyOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateCustomerBankAccountRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateCustomerBankAccountRequest)) {
    throw new Error('Expected argument of type data.CreateCustomerBankAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateCustomerBankAccountRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateCustomerBankAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateCustomerRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateCustomerRequest)) {
    throw new Error('Expected argument of type data.CreateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateCustomerRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateOrderLineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateOrderLineRequest)) {
    throw new Error('Expected argument of type data.CreateOrderLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateOrderLineRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateOrderLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type data.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreatePaymentReferenceRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreatePaymentReferenceRequest)) {
    throw new Error('Expected argument of type data.CreatePaymentReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreatePaymentReferenceRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreatePaymentReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreatePaymentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreatePaymentRequest)) {
    throw new Error('Expected argument of type data.CreatePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreatePaymentRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateRMALineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateRMALineRequest)) {
    throw new Error('Expected argument of type data.CreateRMALineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateRMALineRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateRMALineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateRMARequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateRMARequest)) {
    throw new Error('Expected argument of type data.CreateRMARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateRMARequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateRMARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateShipmentLineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateShipmentLineRequest)) {
    throw new Error('Expected argument of type data.CreateShipmentLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateShipmentLineRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateShipmentLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CreateShipmentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CreateShipmentRequest)) {
    throw new Error('Expected argument of type data.CreateShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CreateShipmentRequest (buffer_arg) {
  return proto_point_of_sales_pb.CreateShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Customer (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.Customer)) {
    throw new Error('Expected argument of type data.Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Customer (buffer_arg) {
  return proto_point_of_sales_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_CustomerBankAccount (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.CustomerBankAccount)) {
    throw new Error('Expected argument of type data.CustomerBankAccount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_CustomerBankAccount (buffer_arg) {
  return proto_point_of_sales_pb.CustomerBankAccount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeallocateSellerRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeallocateSellerRequest)) {
    throw new Error('Expected argument of type data.DeallocateSellerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeallocateSellerRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeallocateSellerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteCommandShortcutRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteCommandShortcutRequest)) {
    throw new Error('Expected argument of type data.DeleteCommandShortcutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteCommandShortcutRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteCommandShortcutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteCustomerBankAccountRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteCustomerBankAccountRequest)) {
    throw new Error('Expected argument of type data.DeleteCustomerBankAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteCustomerBankAccountRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteCustomerBankAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteOrderLineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteOrderLineRequest)) {
    throw new Error('Expected argument of type data.DeleteOrderLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteOrderLineRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteOrderLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteOrderRequest)) {
    throw new Error('Expected argument of type data.DeleteOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeletePaymentReferenceRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeletePaymentReferenceRequest)) {
    throw new Error('Expected argument of type data.DeletePaymentReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeletePaymentReferenceRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeletePaymentReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeletePaymentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeletePaymentRequest)) {
    throw new Error('Expected argument of type data.DeletePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeletePaymentRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeletePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteRMALineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteRMALineRequest)) {
    throw new Error('Expected argument of type data.DeleteRMALineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteRMALineRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteRMALineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteRMARequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteRMARequest)) {
    throw new Error('Expected argument of type data.DeleteRMARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteRMARequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteRMARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteShipmentLineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteShipmentLineRequest)) {
    throw new Error('Expected argument of type data.DeleteShipmentLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteShipmentLineRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteShipmentLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_DeleteShipmentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.DeleteShipmentRequest)) {
    throw new Error('Expected argument of type data.DeleteShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_DeleteShipmentRequest (buffer_arg) {
  return proto_point_of_sales_pb.DeleteShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Empty (arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty (buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetAvailableRefundRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetAvailableRefundRequest)) {
    throw new Error('Expected argument of type data.GetAvailableRefundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetAvailableRefundRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetAvailableRefundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetCustomerBankAccountRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetCustomerBankAccountRequest)) {
    throw new Error('Expected argument of type data.GetCustomerBankAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetCustomerBankAccountRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetCustomerBankAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetCustomerRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type data.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetCustomerRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetKeyLayoutRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetKeyLayoutRequest)) {
    throw new Error('Expected argument of type data.GetKeyLayoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetKeyLayoutRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetKeyLayoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetOpenRMARequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetOpenRMARequest)) {
    throw new Error('Expected argument of type data.GetOpenRMARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetOpenRMARequest (buffer_arg) {
  return proto_point_of_sales_pb.GetOpenRMARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetOpenShipmentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetOpenShipmentRequest)) {
    throw new Error('Expected argument of type data.GetOpenShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetOpenShipmentRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetOpenShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetOrderRequest)) {
    throw new Error('Expected argument of type data.GetOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_GetProductPriceRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.GetProductPriceRequest)) {
    throw new Error('Expected argument of type data.GetProductPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_GetProductPriceRequest (buffer_arg) {
  return proto_point_of_sales_pb.GetProductPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_HoldOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.HoldOrderRequest)) {
    throw new Error('Expected argument of type data.HoldOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_HoldOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.HoldOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_KeyLayout (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.KeyLayout)) {
    throw new Error('Expected argument of type data.KeyLayout');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_KeyLayout (buffer_arg) {
  return proto_point_of_sales_pb.KeyLayout.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableCashRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableCashRequest)) {
    throw new Error('Expected argument of type data.ListAvailableCashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableCashRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableCashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableCashResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableCashResponse)) {
    throw new Error('Expected argument of type data.ListAvailableCashResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableCashResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableCashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableCurrenciesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableCurrenciesRequest)) {
    throw new Error('Expected argument of type data.ListAvailableCurrenciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableCurrenciesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableCurrenciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableCurrenciesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableCurrenciesResponse)) {
    throw new Error('Expected argument of type data.ListAvailableCurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableCurrenciesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableCurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableDiscountsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableDiscountsRequest)) {
    throw new Error('Expected argument of type data.ListAvailableDiscountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableDiscountsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableDiscountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableDiscountsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableDiscountsResponse)) {
    throw new Error('Expected argument of type data.ListAvailableDiscountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableDiscountsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableDiscountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableDocumentTypesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableDocumentTypesRequest)) {
    throw new Error('Expected argument of type data.ListAvailableDocumentTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableDocumentTypesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableDocumentTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableDocumentTypesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableDocumentTypesResponse)) {
    throw new Error('Expected argument of type data.ListAvailableDocumentTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableDocumentTypesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableDocumentTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailablePaymentMethodsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailablePaymentMethodsRequest)) {
    throw new Error('Expected argument of type data.ListAvailablePaymentMethodsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailablePaymentMethodsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailablePaymentMethodsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailablePaymentMethodsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailablePaymentMethodsResponse)) {
    throw new Error('Expected argument of type data.ListAvailablePaymentMethodsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailablePaymentMethodsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailablePaymentMethodsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailablePriceListRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailablePriceListRequest)) {
    throw new Error('Expected argument of type data.ListAvailablePriceListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailablePriceListRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailablePriceListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailablePriceListResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailablePriceListResponse)) {
    throw new Error('Expected argument of type data.ListAvailablePriceListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailablePriceListResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailablePriceListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableSellersRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableSellersRequest)) {
    throw new Error('Expected argument of type data.ListAvailableSellersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableSellersRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableSellersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableSellersResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableSellersResponse)) {
    throw new Error('Expected argument of type data.ListAvailableSellersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableSellersResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableSellersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableWarehousesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableWarehousesRequest)) {
    throw new Error('Expected argument of type data.ListAvailableWarehousesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableWarehousesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableWarehousesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListAvailableWarehousesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListAvailableWarehousesResponse)) {
    throw new Error('Expected argument of type data.ListAvailableWarehousesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListAvailableWarehousesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListAvailableWarehousesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBankAccountsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListBankAccountsRequest)) {
    throw new Error('Expected argument of type data.ListBankAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBankAccountsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListBankAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBankAccountsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListBankAccountsResponse)) {
    throw new Error('Expected argument of type data.ListBankAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBankAccountsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListBankAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBanksRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListBanksRequest)) {
    throw new Error('Expected argument of type data.ListBanksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBanksRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListBanksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListBanksResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListBanksResponse)) {
    throw new Error('Expected argument of type data.ListBanksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListBanksResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListBanksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCampaignsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCampaignsRequest)) {
    throw new Error('Expected argument of type data.ListCampaignsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCampaignsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListCampaignsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCampaignsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCampaignsResponse)) {
    throw new Error('Expected argument of type data.ListCampaignsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCampaignsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListCampaignsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCashMovementsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCashMovementsRequest)) {
    throw new Error('Expected argument of type data.ListCashMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCashMovementsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListCashMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCashMovementsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCashMovementsResponse)) {
    throw new Error('Expected argument of type data.ListCashMovementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCashMovementsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListCashMovementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCashSummaryMovementsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCashSummaryMovementsRequest)) {
    throw new Error('Expected argument of type data.ListCashSummaryMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCashSummaryMovementsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListCashSummaryMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCashSummaryMovementsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCashSummaryMovementsResponse)) {
    throw new Error('Expected argument of type data.ListCashSummaryMovementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCashSummaryMovementsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListCashSummaryMovementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCommandShortcutsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCommandShortcutsRequest)) {
    throw new Error('Expected argument of type data.ListCommandShortcutsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCommandShortcutsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListCommandShortcutsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCommandShortcutsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCommandShortcutsResponse)) {
    throw new Error('Expected argument of type data.ListCommandShortcutsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCommandShortcutsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListCommandShortcutsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCustomerBankAccountsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCustomerBankAccountsRequest)) {
    throw new Error('Expected argument of type data.ListCustomerBankAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCustomerBankAccountsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListCustomerBankAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListCustomerBankAccountsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListCustomerBankAccountsResponse)) {
    throw new Error('Expected argument of type data.ListCustomerBankAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListCustomerBankAccountsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListCustomerBankAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrderLinesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrderLinesRequest)) {
    throw new Error('Expected argument of type data.ListOrderLinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrderLinesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListOrderLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrderLinesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrderLinesResponse)) {
    throw new Error('Expected argument of type data.ListOrderLinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrderLinesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListOrderLinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrdersRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrdersRequest)) {
    throw new Error('Expected argument of type data.ListOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrdersRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListOrdersResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListOrdersResponse)) {
    throw new Error('Expected argument of type data.ListOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListOrdersResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentReferencesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPaymentReferencesRequest)) {
    throw new Error('Expected argument of type data.ListPaymentReferencesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentReferencesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListPaymentReferencesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentReferencesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPaymentReferencesResponse)) {
    throw new Error('Expected argument of type data.ListPaymentReferencesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentReferencesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListPaymentReferencesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentsRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPaymentsRequest)) {
    throw new Error('Expected argument of type data.ListPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentsRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPaymentsResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPaymentsResponse)) {
    throw new Error('Expected argument of type data.ListPaymentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPaymentsResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPointOfSalesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPointOfSalesRequest)) {
    throw new Error('Expected argument of type data.ListPointOfSalesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPointOfSalesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListPointOfSalesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListPointOfSalesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListPointOfSalesResponse)) {
    throw new Error('Expected argument of type data.ListPointOfSalesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListPointOfSalesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListPointOfSalesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductPriceRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListProductPriceRequest)) {
    throw new Error('Expected argument of type data.ListProductPriceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductPriceRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListProductPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListProductPriceResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListProductPriceResponse)) {
    throw new Error('Expected argument of type data.ListProductPriceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListProductPriceResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListProductPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListRMALinesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListRMALinesRequest)) {
    throw new Error('Expected argument of type data.ListRMALinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListRMALinesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListRMALinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListRMALinesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListRMALinesResponse)) {
    throw new Error('Expected argument of type data.ListRMALinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListRMALinesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListRMALinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListShipmentLinesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListShipmentLinesRequest)) {
    throw new Error('Expected argument of type data.ListShipmentLinesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListShipmentLinesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListShipmentLinesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListShipmentLinesResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListShipmentLinesResponse)) {
    throw new Error('Expected argument of type data.ListShipmentLinesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListShipmentLinesResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListShipmentLinesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListStocksRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListStocksRequest)) {
    throw new Error('Expected argument of type data.ListStocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListStocksRequest (buffer_arg) {
  return proto_point_of_sales_pb.ListStocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListStocksResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ListStocksResponse)) {
    throw new Error('Expected argument of type data.ListStocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListStocksResponse (buffer_arg) {
  return proto_point_of_sales_pb.ListStocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Order (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.Order)) {
    throw new Error('Expected argument of type data.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Order (buffer_arg) {
  return proto_point_of_sales_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_OrderLine (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.OrderLine)) {
    throw new Error('Expected argument of type data.OrderLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_OrderLine (buffer_arg) {
  return proto_point_of_sales_pb.OrderLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Payment (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.Payment)) {
    throw new Error('Expected argument of type data.Payment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Payment (buffer_arg) {
  return proto_point_of_sales_pb.Payment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PaymentReference (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PaymentReference)) {
    throw new Error('Expected argument of type data.PaymentReference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PaymentReference (buffer_arg) {
  return proto_point_of_sales_pb.PaymentReference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PointOfSales (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PointOfSales)) {
    throw new Error('Expected argument of type data.PointOfSales');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PointOfSales (buffer_arg) {
  return proto_point_of_sales_pb.PointOfSales.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PointOfSalesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PointOfSalesRequest)) {
    throw new Error('Expected argument of type data.PointOfSalesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PointOfSalesRequest (buffer_arg) {
  return proto_point_of_sales_pb.PointOfSalesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrintPreviewRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PrintPreviewRequest)) {
    throw new Error('Expected argument of type data.PrintPreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrintPreviewRequest (buffer_arg) {
  return proto_point_of_sales_pb.PrintPreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrintPreviewResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PrintPreviewResponse)) {
    throw new Error('Expected argument of type data.PrintPreviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrintPreviewResponse (buffer_arg) {
  return proto_point_of_sales_pb.PrintPreviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrintShipmentPreviewRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PrintShipmentPreviewRequest)) {
    throw new Error('Expected argument of type data.PrintShipmentPreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrintShipmentPreviewRequest (buffer_arg) {
  return proto_point_of_sales_pb.PrintShipmentPreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrintShipmentPreviewResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PrintShipmentPreviewResponse)) {
    throw new Error('Expected argument of type data.PrintShipmentPreviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrintShipmentPreviewResponse (buffer_arg) {
  return proto_point_of_sales_pb.PrintShipmentPreviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrintTicketRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PrintTicketRequest)) {
    throw new Error('Expected argument of type data.PrintTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrintTicketRequest (buffer_arg) {
  return proto_point_of_sales_pb.PrintTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_PrintTicketResponse (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.PrintTicketResponse)) {
    throw new Error('Expected argument of type data.PrintTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_PrintTicketResponse (buffer_arg) {
  return proto_point_of_sales_pb.PrintTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ProcessOrderRequest)) {
    throw new Error('Expected argument of type data.ProcessOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.ProcessOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessRMARequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ProcessRMARequest)) {
    throw new Error('Expected argument of type data.ProcessRMARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessRMARequest (buffer_arg) {
  return proto_point_of_sales_pb.ProcessRMARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessShipmentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ProcessShipmentRequest)) {
    throw new Error('Expected argument of type data.ProcessShipmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessShipmentRequest (buffer_arg) {
  return proto_point_of_sales_pb.ProcessShipmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProductPrice (arg) {
  if (!(arg instanceof proto_core_functionality_pb.ProductPrice)) {
    throw new Error('Expected argument of type data.ProductPrice');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProductPrice (buffer_arg) {
  return proto_core_functionality_pb.ProductPrice.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_RMA (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.RMA)) {
    throw new Error('Expected argument of type data.RMA');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_RMA (buffer_arg) {
  return proto_point_of_sales_pb.RMA.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_RMALine (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.RMALine)) {
    throw new Error('Expected argument of type data.RMALine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_RMALine (buffer_arg) {
  return proto_point_of_sales_pb.RMALine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ReleaseOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ReleaseOrderRequest)) {
    throw new Error('Expected argument of type data.ReleaseOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ReleaseOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.ReleaseOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ReverseSalesRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ReverseSalesRequest)) {
    throw new Error('Expected argument of type data.ReverseSalesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ReverseSalesRequest (buffer_arg) {
  return proto_point_of_sales_pb.ReverseSalesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_SaveCommandShortcutRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.SaveCommandShortcutRequest)) {
    throw new Error('Expected argument of type data.SaveCommandShortcutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_SaveCommandShortcutRequest (buffer_arg) {
  return proto_point_of_sales_pb.SaveCommandShortcutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Shipment (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.Shipment)) {
    throw new Error('Expected argument of type data.Shipment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Shipment (buffer_arg) {
  return proto_point_of_sales_pb.Shipment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ShipmentLine (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ShipmentLine)) {
    throw new Error('Expected argument of type data.ShipmentLine');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ShipmentLine (buffer_arg) {
  return proto_point_of_sales_pb.ShipmentLine.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateCustomerBankAccountRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateCustomerBankAccountRequest)) {
    throw new Error('Expected argument of type data.UpdateCustomerBankAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateCustomerBankAccountRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdateCustomerBankAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateCustomerRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateCustomerRequest)) {
    throw new Error('Expected argument of type data.UpdateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateCustomerRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateOrderLineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateOrderLineRequest)) {
    throw new Error('Expected argument of type data.UpdateOrderLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateOrderLineRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdateOrderLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateOrderRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateOrderRequest)) {
    throw new Error('Expected argument of type data.UpdateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateOrderRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdatePaymentRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdatePaymentRequest)) {
    throw new Error('Expected argument of type data.UpdatePaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdatePaymentRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdatePaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateRMALineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateRMALineRequest)) {
    throw new Error('Expected argument of type data.UpdateRMALineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateRMALineRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdateRMALineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_UpdateShipmentLineRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.UpdateShipmentLineRequest)) {
    throw new Error('Expected argument of type data.UpdateShipmentLineRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_UpdateShipmentLineRequest (buffer_arg) {
  return proto_point_of_sales_pb.UpdateShipmentLineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ValidatePINRequest (arg) {
  if (!(arg instanceof proto_point_of_sales_pb.ValidatePINRequest)) {
    throw new Error('Expected argument of type data.ValidatePINRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ValidatePINRequest (buffer_arg) {
  return proto_point_of_sales_pb.ValidatePINRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// 	POS Service used for ADempiere integration
var StoreService = exports.StoreService = {
  // 	Get POS Definition
  getPointOfSales: {
    path: '/data.Store/GetPointOfSales',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.PointOfSalesRequest,
    responseType: proto_point_of_sales_pb.PointOfSales,
    requestSerialize: serialize_data_PointOfSalesRequest,
    requestDeserialize: deserialize_data_PointOfSalesRequest,
    responseSerialize: serialize_data_PointOfSales,
    responseDeserialize: deserialize_data_PointOfSales
  },
  // 	List Point of Sales
  listPointOfSales: {
    path: '/data.Store/ListPointOfSales',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListPointOfSalesRequest,
    responseType: proto_point_of_sales_pb.ListPointOfSalesResponse,
    requestSerialize: serialize_data_ListPointOfSalesRequest,
    requestDeserialize: deserialize_data_ListPointOfSalesRequest,
    responseSerialize: serialize_data_ListPointOfSalesResponse,
    responseDeserialize: deserialize_data_ListPointOfSalesResponse
  },
  // 	Get Product Price from Code / UPC / Name
  getProductPrice: {
    path: '/data.Store/GetProductPrice',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetProductPriceRequest,
    responseType: proto_core_functionality_pb.ProductPrice,
    requestSerialize: serialize_data_GetProductPriceRequest,
    requestDeserialize: deserialize_data_GetProductPriceRequest,
    responseSerialize: serialize_data_ProductPrice,
    responseDeserialize: deserialize_data_ProductPrice
  },
  // 	List Product Price
  listProductPrice: {
    path: '/data.Store/ListProductPrice',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListProductPriceRequest,
    responseType: proto_point_of_sales_pb.ListProductPriceResponse,
    requestSerialize: serialize_data_ListProductPriceRequest,
    requestDeserialize: deserialize_data_ListProductPriceRequest,
    responseSerialize: serialize_data_ListProductPriceResponse,
    responseDeserialize: deserialize_data_ListProductPriceResponse
  },
  // 	Create Order
  createOrder: {
    path: '/data.Store/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_CreateOrderRequest,
    requestDeserialize: deserialize_data_CreateOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Delete Order
  deleteOrder: {
    path: '/data.Store/DeleteOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteOrderRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteOrderRequest,
    requestDeserialize: deserialize_data_DeleteOrderRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Create Order Line
  createOrderLine: {
    path: '/data.Store/CreateOrderLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateOrderLineRequest,
    responseType: proto_point_of_sales_pb.OrderLine,
    requestSerialize: serialize_data_CreateOrderLineRequest,
    requestDeserialize: deserialize_data_CreateOrderLineRequest,
    responseSerialize: serialize_data_OrderLine,
    responseDeserialize: deserialize_data_OrderLine
  },
  // 	Delete Order Line
  deleteOrderLine: {
    path: '/data.Store/DeleteOrderLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteOrderLineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteOrderLineRequest,
    requestDeserialize: deserialize_data_DeleteOrderLineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Update Order
  updateOrder: {
    path: '/data.Store/UpdateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_UpdateOrderRequest,
    requestDeserialize: deserialize_data_UpdateOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Release Order
  releaseOrder: {
    path: '/data.Store/ReleaseOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ReleaseOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_ReleaseOrderRequest,
    requestDeserialize: deserialize_data_ReleaseOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Hold Order
  holdOrder: {
    path: '/data.Store/HoldOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.HoldOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_HoldOrderRequest,
    requestDeserialize: deserialize_data_HoldOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Update Order Line
  updateOrderLine: {
    path: '/data.Store/UpdateOrderLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateOrderLineRequest,
    responseType: proto_point_of_sales_pb.OrderLine,
    requestSerialize: serialize_data_UpdateOrderLineRequest,
    requestDeserialize: deserialize_data_UpdateOrderLineRequest,
    responseSerialize: serialize_data_OrderLine,
    responseDeserialize: deserialize_data_OrderLine
  },
  // 	Get a Order
  getOrder: {
    path: '/data.Store/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_GetOrderRequest,
    requestDeserialize: deserialize_data_GetOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	List Orders
  listOrders: {
    path: '/data.Store/ListOrders',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListOrdersRequest,
    responseType: proto_point_of_sales_pb.ListOrdersResponse,
    requestSerialize: serialize_data_ListOrdersRequest,
    requestDeserialize: deserialize_data_ListOrdersRequest,
    responseSerialize: serialize_data_ListOrdersResponse,
    responseDeserialize: deserialize_data_ListOrdersResponse
  },
  // 	List Order Lines
  listOrderLines: {
    path: '/data.Store/ListOrderLines',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListOrderLinesRequest,
    responseType: proto_point_of_sales_pb.ListOrderLinesResponse,
    requestSerialize: serialize_data_ListOrderLinesRequest,
    requestDeserialize: deserialize_data_ListOrderLinesRequest,
    responseSerialize: serialize_data_ListOrderLinesResponse,
    responseDeserialize: deserialize_data_ListOrderLinesResponse
  },
  // 	Get a Key Layout
  getKeyLayout: {
    path: '/data.Store/GetKeyLayout',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetKeyLayoutRequest,
    responseType: proto_point_of_sales_pb.KeyLayout,
    requestSerialize: serialize_data_GetKeyLayoutRequest,
    requestDeserialize: deserialize_data_GetKeyLayoutRequest,
    responseSerialize: serialize_data_KeyLayout,
    responseDeserialize: deserialize_data_KeyLayout
  },
  // 	Payments
  // 	Create Payment
  createPayment: {
    path: '/data.Store/CreatePayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreatePaymentRequest,
    responseType: proto_point_of_sales_pb.Payment,
    requestSerialize: serialize_data_CreatePaymentRequest,
    requestDeserialize: deserialize_data_CreatePaymentRequest,
    responseSerialize: serialize_data_Payment,
    responseDeserialize: deserialize_data_Payment
  },
  // 	Update Payment
  updatePayment: {
    path: '/data.Store/UpdatePayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdatePaymentRequest,
    responseType: proto_point_of_sales_pb.Payment,
    requestSerialize: serialize_data_UpdatePaymentRequest,
    requestDeserialize: deserialize_data_UpdatePaymentRequest,
    responseSerialize: serialize_data_Payment,
    responseDeserialize: deserialize_data_Payment
  },
  // 	Delete Payment
  deletePayment: {
    path: '/data.Store/DeletePayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeletePaymentRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeletePaymentRequest,
    requestDeserialize: deserialize_data_DeletePaymentRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	List Payments
  listPayments: {
    path: '/data.Store/ListPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListPaymentsRequest,
    responseType: proto_point_of_sales_pb.ListPaymentsResponse,
    requestSerialize: serialize_data_ListPaymentsRequest,
    requestDeserialize: deserialize_data_ListPaymentsRequest,
    responseSerialize: serialize_data_ListPaymentsResponse,
    responseDeserialize: deserialize_data_ListPaymentsResponse
  },
  // 	Process Order
  processOrder: {
    path: '/data.Store/ProcessOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ProcessOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_ProcessOrderRequest,
    requestDeserialize: deserialize_data_ProcessOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Validate PIN
  validatePIN: {
    path: '/data.Store/ValidatePIN',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ValidatePINRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_ValidatePINRequest,
    requestDeserialize: deserialize_data_ValidatePINRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	List of Available Warehouses
  listAvailableWarehouses: {
    path: '/data.Store/ListAvailableWarehouses',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailableWarehousesRequest,
    responseType: proto_point_of_sales_pb.ListAvailableWarehousesResponse,
    requestSerialize: serialize_data_ListAvailableWarehousesRequest,
    requestDeserialize: deserialize_data_ListAvailableWarehousesRequest,
    responseSerialize: serialize_data_ListAvailableWarehousesResponse,
    responseDeserialize: deserialize_data_ListAvailableWarehousesResponse
  },
  // 	List of Available Tender Types
  listAvailablePaymentMethods: {
    path: '/data.Store/ListAvailablePaymentMethods',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailablePaymentMethodsRequest,
    responseType: proto_point_of_sales_pb.ListAvailablePaymentMethodsResponse,
    requestSerialize: serialize_data_ListAvailablePaymentMethodsRequest,
    requestDeserialize: deserialize_data_ListAvailablePaymentMethodsRequest,
    responseSerialize: serialize_data_ListAvailablePaymentMethodsResponse,
    responseDeserialize: deserialize_data_ListAvailablePaymentMethodsResponse
  },
  // 	List of Available Price List
  listAvailablePriceList: {
    path: '/data.Store/ListAvailablePriceList',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailablePriceListRequest,
    responseType: proto_point_of_sales_pb.ListAvailablePriceListResponse,
    requestSerialize: serialize_data_ListAvailablePriceListRequest,
    requestDeserialize: deserialize_data_ListAvailablePriceListRequest,
    responseSerialize: serialize_data_ListAvailablePriceListResponse,
    responseDeserialize: deserialize_data_ListAvailablePriceListResponse
  },
  // 	List of Available Currencies
  listAvailableCurrencies: {
    path: '/data.Store/ListAvailableCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailableCurrenciesRequest,
    responseType: proto_point_of_sales_pb.ListAvailableCurrenciesResponse,
    requestSerialize: serialize_data_ListAvailableCurrenciesRequest,
    requestDeserialize: deserialize_data_ListAvailableCurrenciesRequest,
    responseSerialize: serialize_data_ListAvailableCurrenciesResponse,
    responseDeserialize: deserialize_data_ListAvailableCurrenciesResponse
  },
  // 	List of Available Document Types
  listAvailableDocumentTypes: {
    path: '/data.Store/ListAvailableDocumentTypes',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailableDocumentTypesRequest,
    responseType: proto_point_of_sales_pb.ListAvailableDocumentTypesResponse,
    requestSerialize: serialize_data_ListAvailableDocumentTypesRequest,
    requestDeserialize: deserialize_data_ListAvailableDocumentTypesRequest,
    responseSerialize: serialize_data_ListAvailableDocumentTypesResponse,
    responseDeserialize: deserialize_data_ListAvailableDocumentTypesResponse
  },
  // 	List of Available Discounts
  listAvailableDiscounts: {
    path: '/data.Store/ListAvailableDiscounts',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailableDiscountsRequest,
    responseType: proto_point_of_sales_pb.ListAvailableDiscountsResponse,
    requestSerialize: serialize_data_ListAvailableDiscountsRequest,
    requestDeserialize: deserialize_data_ListAvailableDiscountsRequest,
    responseSerialize: serialize_data_ListAvailableDiscountsResponse,
    responseDeserialize: deserialize_data_ListAvailableDiscountsResponse
  },
  // 	List of Available Sellers
  listAvailableSellers: {
    path: '/data.Store/ListAvailableSellers',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailableSellersRequest,
    responseType: proto_point_of_sales_pb.ListAvailableSellersResponse,
    requestSerialize: serialize_data_ListAvailableSellersRequest,
    requestDeserialize: deserialize_data_ListAvailableSellersRequest,
    responseSerialize: serialize_data_ListAvailableSellersResponse,
    responseDeserialize: deserialize_data_ListAvailableSellersResponse
  },
  // 	Customer
  // 	Create Customer
  createCustomer: {
    path: '/data.Store/CreateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateCustomerRequest,
    responseType: proto_point_of_sales_pb.Customer,
    requestSerialize: serialize_data_CreateCustomerRequest,
    requestDeserialize: deserialize_data_CreateCustomerRequest,
    responseSerialize: serialize_data_Customer,
    responseDeserialize: deserialize_data_Customer
  },
  // 	Update Customer Info
  updateCustomer: {
    path: '/data.Store/UpdateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateCustomerRequest,
    responseType: proto_point_of_sales_pb.Customer,
    requestSerialize: serialize_data_UpdateCustomerRequest,
    requestDeserialize: deserialize_data_UpdateCustomerRequest,
    responseSerialize: serialize_data_Customer,
    responseDeserialize: deserialize_data_Customer
  },
  // 	Get Customer from search
  getCustomer: {
    path: '/data.Store/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetCustomerRequest,
    responseType: proto_point_of_sales_pb.Customer,
    requestSerialize: serialize_data_GetCustomerRequest,
    requestDeserialize: deserialize_data_GetCustomerRequest,
    responseSerialize: serialize_data_Customer,
    responseDeserialize: deserialize_data_Customer
  },
  // 	Get Daily Refund
  getAvailableRefund: {
    path: '/data.Store/GetAvailableRefund',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetAvailableRefundRequest,
    responseType: proto_point_of_sales_pb.AvailableRefund,
    requestSerialize: serialize_data_GetAvailableRefundRequest,
    requestDeserialize: deserialize_data_GetAvailableRefundRequest,
    responseSerialize: serialize_data_AvailableRefund,
    responseDeserialize: deserialize_data_AvailableRefund
  },
  // 	Print Ticket
  printTicket: {
    path: '/data.Store/PrintTicket',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.PrintTicketRequest,
    responseType: proto_point_of_sales_pb.PrintTicketResponse,
    requestSerialize: serialize_data_PrintTicketRequest,
    requestDeserialize: deserialize_data_PrintTicketRequest,
    responseSerialize: serialize_data_PrintTicketResponse,
    responseDeserialize: deserialize_data_PrintTicketResponse
  },
  // 	Print Preview
  printPreview: {
    path: '/data.Store/PrintPreview',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.PrintPreviewRequest,
    responseType: proto_point_of_sales_pb.PrintPreviewResponse,
    requestSerialize: serialize_data_PrintPreviewRequest,
    requestDeserialize: deserialize_data_PrintPreviewRequest,
    responseSerialize: serialize_data_PrintPreviewResponse,
    responseDeserialize: deserialize_data_PrintPreviewResponse
  },
  // 	Print Preview for Shipment
  printShipmentPreview: {
    path: '/data.Store/PrintShipmentPreview',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.PrintShipmentPreviewRequest,
    responseType: proto_point_of_sales_pb.PrintShipmentPreviewResponse,
    requestSerialize: serialize_data_PrintShipmentPreviewRequest,
    requestDeserialize: deserialize_data_PrintShipmentPreviewRequest,
    responseSerialize: serialize_data_PrintShipmentPreviewResponse,
    responseDeserialize: deserialize_data_PrintShipmentPreviewResponse
  },
  // Bank
  listBanks: {
    path: '/data.Store/ListBanks',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListBanksRequest,
    responseType: proto_point_of_sales_pb.ListBanksResponse,
    requestSerialize: serialize_data_ListBanksRequest,
    requestDeserialize: deserialize_data_ListBanksRequest,
    responseSerialize: serialize_data_ListBanksResponse,
    responseDeserialize: deserialize_data_ListBanksResponse
  },
  listBankAccounts: {
    path: '/data.Store/ListBankAccounts',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListBankAccountsRequest,
    responseType: proto_point_of_sales_pb.ListBankAccountsResponse,
    requestSerialize: serialize_data_ListBankAccountsRequest,
    requestDeserialize: deserialize_data_ListBankAccountsRequest,
    responseSerialize: serialize_data_ListBankAccountsResponse,
    responseDeserialize: deserialize_data_ListBankAccountsResponse
  },
  // 	Create Customer Account
  createCustomerBankAccount: {
    path: '/data.Store/CreateCustomerBankAccount',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateCustomerBankAccountRequest,
    responseType: proto_point_of_sales_pb.CustomerBankAccount,
    requestSerialize: serialize_data_CreateCustomerBankAccountRequest,
    requestDeserialize: deserialize_data_CreateCustomerBankAccountRequest,
    responseSerialize: serialize_data_CustomerBankAccount,
    responseDeserialize: deserialize_data_CustomerBankAccount
  },
  // 	Update Customer Account
  updateCustomerBankAccount: {
    path: '/data.Store/UpdateCustomerBankAccount',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateCustomerBankAccountRequest,
    responseType: proto_point_of_sales_pb.CustomerBankAccount,
    requestSerialize: serialize_data_UpdateCustomerBankAccountRequest,
    requestDeserialize: deserialize_data_UpdateCustomerBankAccountRequest,
    responseSerialize: serialize_data_CustomerBankAccount,
    responseDeserialize: deserialize_data_CustomerBankAccount
  },
  // 	Get Customer Account
  getCustomerBankAccount: {
    path: '/data.Store/GetCustomerBankAccount',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetCustomerBankAccountRequest,
    responseType: proto_point_of_sales_pb.CustomerBankAccount,
    requestSerialize: serialize_data_GetCustomerBankAccountRequest,
    requestDeserialize: deserialize_data_GetCustomerBankAccountRequest,
    responseSerialize: serialize_data_CustomerBankAccount,
    responseDeserialize: deserialize_data_CustomerBankAccount
  },
  // 	Delete Customer Account
  deleteCustomerBankAccount: {
    path: '/data.Store/DeleteCustomerBankAccount',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteCustomerBankAccountRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteCustomerBankAccountRequest,
    requestDeserialize: deserialize_data_DeleteCustomerBankAccountRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	List Customer Accounts
  listCustomerBankAccounts: {
    path: '/data.Store/ListCustomerBankAccounts',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListCustomerBankAccountsRequest,
    responseType: proto_point_of_sales_pb.ListCustomerBankAccountsResponse,
    requestSerialize: serialize_data_ListCustomerBankAccountsRequest,
    requestDeserialize: deserialize_data_ListCustomerBankAccountsRequest,
    responseSerialize: serialize_data_ListCustomerBankAccountsResponse,
    responseDeserialize: deserialize_data_ListCustomerBankAccountsResponse
  },
  // 	shipment
  // 	Create Shipment
  createShipment: {
    path: '/data.Store/CreateShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateShipmentRequest,
    responseType: proto_point_of_sales_pb.Shipment,
    requestSerialize: serialize_data_CreateShipmentRequest,
    requestDeserialize: deserialize_data_CreateShipmentRequest,
    responseSerialize: serialize_data_Shipment,
    responseDeserialize: deserialize_data_Shipment
  },
  // 	Delete Shipment
  deleteShipment: {
    path: '/data.Store/DeleteShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteShipmentRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteShipmentRequest,
    requestDeserialize: deserialize_data_DeleteShipmentRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Create Shipment Line
  createShipmentLine: {
    path: '/data.Store/CreateShipmentLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateShipmentLineRequest,
    responseType: proto_point_of_sales_pb.ShipmentLine,
    requestSerialize: serialize_data_CreateShipmentLineRequest,
    requestDeserialize: deserialize_data_CreateShipmentLineRequest,
    responseSerialize: serialize_data_ShipmentLine,
    responseDeserialize: deserialize_data_ShipmentLine
  },
  // 	Delete Shipment Line
  deleteShipmentLine: {
    path: '/data.Store/DeleteShipmentLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteShipmentLineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteShipmentLineRequest,
    requestDeserialize: deserialize_data_DeleteShipmentLineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Update Order Line
  updateShipmentLine: {
    path: '/data.Store/UpdateShipmentLine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateShipmentLineRequest,
    responseType: proto_point_of_sales_pb.ShipmentLine,
    requestSerialize: serialize_data_UpdateShipmentLineRequest,
    requestDeserialize: deserialize_data_UpdateShipmentLineRequest,
    responseSerialize: serialize_data_ShipmentLine,
    responseDeserialize: deserialize_data_ShipmentLine
  },
  // 	Get a Open Shipment
  getOpenShipment: {
    path: '/data.Store/GetOpenShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetOpenShipmentRequest,
    responseType: proto_point_of_sales_pb.Shipment,
    requestSerialize: serialize_data_GetOpenShipmentRequest,
    requestDeserialize: deserialize_data_GetOpenShipmentRequest,
    responseSerialize: serialize_data_Shipment,
    responseDeserialize: deserialize_data_Shipment
  },
  // 	List Shipment Line
  listShipmentLines: {
    path: '/data.Store/ListShipmentLines',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListShipmentLinesRequest,
    responseType: proto_point_of_sales_pb.ListShipmentLinesResponse,
    requestSerialize: serialize_data_ListShipmentLinesRequest,
    requestDeserialize: deserialize_data_ListShipmentLinesRequest,
    responseSerialize: serialize_data_ListShipmentLinesResponse,
    responseDeserialize: deserialize_data_ListShipmentLinesResponse
  },
  // 	Process Shipment
  processShipment: {
    path: '/data.Store/ProcessShipment',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ProcessShipmentRequest,
    responseType: proto_point_of_sales_pb.Shipment,
    requestSerialize: serialize_data_ProcessShipmentRequest,
    requestDeserialize: deserialize_data_ProcessShipmentRequest,
    responseSerialize: serialize_data_Shipment,
    responseDeserialize: deserialize_data_Shipment
  },
  // 	Return Order
  // 	Reverse Sales Transaction
  reverseSales: {
    path: '/data.Store/ReverseSales',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ReverseSalesRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_ReverseSalesRequest,
    requestDeserialize: deserialize_data_ReverseSalesRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Cash Management
  processCashOpening: {
    path: '/data.Store/ProcessCashOpening',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CashOpeningRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_CashOpeningRequest,
    requestDeserialize: deserialize_data_CashOpeningRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Cash Withdrawal
  processCashWithdrawal: {
    path: '/data.Store/ProcessCashWithdrawal',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CashWithdrawalRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_CashWithdrawalRequest,
    requestDeserialize: deserialize_data_CashWithdrawalRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Cash Closing
  processCashClosing: {
    path: '/data.Store/ProcessCashClosing',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CashClosingRequest,
    responseType: proto_point_of_sales_pb.CashClosing,
    requestSerialize: serialize_data_CashClosingRequest,
    requestDeserialize: deserialize_data_CashClosingRequest,
    responseSerialize: serialize_data_CashClosing,
    responseDeserialize: deserialize_data_CashClosing
  },
  // 	List all cash movements
  listCashMovements: {
    path: '/data.Store/ListCashMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListCashMovementsRequest,
    responseType: proto_point_of_sales_pb.ListCashMovementsResponse,
    requestSerialize: serialize_data_ListCashMovementsRequest,
    requestDeserialize: deserialize_data_ListCashMovementsRequest,
    responseSerialize: serialize_data_ListCashMovementsResponse,
    responseDeserialize: deserialize_data_ListCashMovementsResponse
  },
  // 	List Cash Summary
  listCashSummaryMovements: {
    path: '/data.Store/ListCashSummaryMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListCashSummaryMovementsRequest,
    responseType: proto_point_of_sales_pb.ListCashSummaryMovementsResponse,
    requestSerialize: serialize_data_ListCashSummaryMovementsRequest,
    requestDeserialize: deserialize_data_ListCashSummaryMovementsRequest,
    responseSerialize: serialize_data_ListCashSummaryMovementsResponse,
    responseDeserialize: deserialize_data_ListCashSummaryMovementsResponse
  },
  // 	Allocate Seller
  allocateSeller: {
    path: '/data.Store/AllocateSeller',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.AllocateSellerRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_AllocateSellerRequest,
    requestDeserialize: deserialize_data_AllocateSellerRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Allocate Seller
  deallocateSeller: {
    path: '/data.Store/DeallocateSeller',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeallocateSellerRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeallocateSellerRequest,
    requestDeserialize: deserialize_data_DeallocateSellerRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Create Refund Reference
  createPaymentReference: {
    path: '/data.Store/CreatePaymentReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreatePaymentReferenceRequest,
    responseType: proto_point_of_sales_pb.PaymentReference,
    requestSerialize: serialize_data_CreatePaymentReferenceRequest,
    requestDeserialize: deserialize_data_CreatePaymentReferenceRequest,
    responseSerialize: serialize_data_PaymentReference,
    responseDeserialize: deserialize_data_PaymentReference
  },
  // 	Delete Refund Reference
  deletePaymentReference: {
    path: '/data.Store/DeletePaymentReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeletePaymentReferenceRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeletePaymentReferenceRequest,
    requestDeserialize: deserialize_data_DeletePaymentReferenceRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	List Refund References
  listPaymentReferences: {
    path: '/data.Store/ListPaymentReferences',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListPaymentReferencesRequest,
    responseType: proto_point_of_sales_pb.ListPaymentReferencesResponse,
    requestSerialize: serialize_data_ListPaymentReferencesRequest,
    requestDeserialize: deserialize_data_ListPaymentReferencesRequest,
    responseSerialize: serialize_data_ListPaymentReferencesResponse,
    responseDeserialize: deserialize_data_ListPaymentReferencesResponse
  },
  //  List Stock: GET /api/stocks
  listStocks: {
    path: '/data.Store/ListStocks',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListStocksRequest,
    responseType: proto_point_of_sales_pb.ListStocksResponse,
    requestSerialize: serialize_data_ListStocksRequest,
    requestDeserialize: deserialize_data_ListStocksRequest,
    responseSerialize: serialize_data_ListStocksResponse,
    responseDeserialize: deserialize_data_ListStocksResponse
  },
  //  List Available Cash
  listAvailableCash: {
    path: '/data.Store/ListAvailableCash',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListAvailableCashRequest,
    responseType: proto_point_of_sales_pb.ListAvailableCashResponse,
    requestSerialize: serialize_data_ListAvailableCashRequest,
    requestDeserialize: deserialize_data_ListAvailableCashRequest,
    responseSerialize: serialize_data_ListAvailableCashResponse,
    responseDeserialize: deserialize_data_ListAvailableCashResponse
  },
  // Command Shortcut
  saveCommandShortcut: {
    path: '/data.Store/SaveCommandShortcut',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.SaveCommandShortcutRequest,
    responseType: proto_point_of_sales_pb.CommandShortcut,
    requestSerialize: serialize_data_SaveCommandShortcutRequest,
    requestDeserialize: deserialize_data_SaveCommandShortcutRequest,
    responseSerialize: serialize_data_CommandShortcut,
    responseDeserialize: deserialize_data_CommandShortcut
  },
  listCommandShortcuts: {
    path: '/data.Store/ListCommandShortcuts',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListCommandShortcutsRequest,
    responseType: proto_point_of_sales_pb.ListCommandShortcutsResponse,
    requestSerialize: serialize_data_ListCommandShortcutsRequest,
    requestDeserialize: deserialize_data_ListCommandShortcutsRequest,
    responseSerialize: serialize_data_ListCommandShortcutsResponse,
    responseDeserialize: deserialize_data_ListCommandShortcutsResponse
  },
  deleteCommandShortcut: {
    path: '/data.Store/DeleteCommandShortcut',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteCommandShortcutRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteCommandShortcutRequest,
    requestDeserialize: deserialize_data_DeleteCommandShortcutRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // Campaign
  listCampaigns: {
    path: '/data.Store/ListCampaigns',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListCampaignsRequest,
    responseType: proto_point_of_sales_pb.ListCampaignsResponse,
    requestSerialize: serialize_data_ListCampaignsRequest,
    requestDeserialize: deserialize_data_ListCampaignsRequest,
    responseSerialize: serialize_data_ListCampaignsResponse,
    responseDeserialize: deserialize_data_ListCampaignsResponse
  },
  // 	Copy Order
  copyOrder: {
    path: '/data.Store/CopyOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CopyOrderRequest,
    responseType: proto_point_of_sales_pb.Order,
    requestSerialize: serialize_data_CopyOrderRequest,
    requestDeserialize: deserialize_data_CopyOrderRequest,
    responseSerialize: serialize_data_Order,
    responseDeserialize: deserialize_data_Order
  },
  // 	Return
  // 	Create Return
  createRMA: {
    path: '/data.Store/CreateRMA',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateRMARequest,
    responseType: proto_point_of_sales_pb.RMA,
    requestSerialize: serialize_data_CreateRMARequest,
    requestDeserialize: deserialize_data_CreateRMARequest,
    responseSerialize: serialize_data_RMA,
    responseDeserialize: deserialize_data_RMA
  },
  // 	Delete Return
  deleteRMA: {
    path: '/data.Store/DeleteRMA',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteRMARequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteRMARequest,
    requestDeserialize: deserialize_data_DeleteRMARequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Create Return Line
  createRMALine: {
    path: '/data.Store/CreateRMALine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.CreateRMALineRequest,
    responseType: proto_point_of_sales_pb.RMALine,
    requestSerialize: serialize_data_CreateRMALineRequest,
    requestDeserialize: deserialize_data_CreateRMALineRequest,
    responseSerialize: serialize_data_RMALine,
    responseDeserialize: deserialize_data_RMALine
  },
  // 	Delete Return Line
  deleteRMALine: {
    path: '/data.Store/DeleteRMALine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.DeleteRMALineRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_data_DeleteRMALineRequest,
    requestDeserialize: deserialize_data_DeleteRMALineRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty
  },
  // 	Update RMA Line
  updateRMALine: {
    path: '/data.Store/UpdateRMALine',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.UpdateRMALineRequest,
    responseType: proto_point_of_sales_pb.RMALine,
    requestSerialize: serialize_data_UpdateRMALineRequest,
    requestDeserialize: deserialize_data_UpdateRMALineRequest,
    responseSerialize: serialize_data_RMALine,
    responseDeserialize: deserialize_data_RMALine
  },
  // 	Get a Open Return
  getOpenRMA: {
    path: '/data.Store/GetOpenRMA',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.GetOpenRMARequest,
    responseType: proto_point_of_sales_pb.RMA,
    requestSerialize: serialize_data_GetOpenRMARequest,
    requestDeserialize: deserialize_data_GetOpenRMARequest,
    responseSerialize: serialize_data_RMA,
    responseDeserialize: deserialize_data_RMA
  },
  // 	List Return Line
  listRMALines: {
    path: '/data.Store/ListRMALines',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ListRMALinesRequest,
    responseType: proto_point_of_sales_pb.ListRMALinesResponse,
    requestSerialize: serialize_data_ListRMALinesRequest,
    requestDeserialize: deserialize_data_ListRMALinesRequest,
    responseSerialize: serialize_data_ListRMALinesResponse,
    responseDeserialize: deserialize_data_ListRMALinesResponse
  },
  // 	Process Return
  processRMA: {
    path: '/data.Store/ProcessRMA',
    requestStream: false,
    responseStream: false,
    requestType: proto_point_of_sales_pb.ProcessRMARequest,
    responseType: proto_point_of_sales_pb.RMA,
    requestSerialize: serialize_data_ProcessRMARequest,
    requestDeserialize: deserialize_data_ProcessRMARequest,
    responseSerialize: serialize_data_RMA,
    responseDeserialize: deserialize_data_RMA
  }
};

exports.StoreClient = grpc.makeGenericClientConstructor(StoreService);
