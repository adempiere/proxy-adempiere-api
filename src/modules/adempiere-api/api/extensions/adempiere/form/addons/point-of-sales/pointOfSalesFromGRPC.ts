/************************************************************************************
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                  *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
 * This program is free software: you can redistribute it and/or modify             *
 * it under the terms of the GNU General Public License as published by             *
 * the Free Software Foundation, either version 2 of the License, or                *
 * (at your option) any later version.                                              *
 * This program is distributed in the hope that it will be useful,                  *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
 * GNU General Public License for more details.                                     *
 * You should have received a copy of the GNU General Public License                *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

import {
  getDecimalFromGRPC
} from '@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js';
import {
  convertDocumentStatusFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType.js';
import {
  convertDocumentTypeFromGRPC,
  convertPriceListFromGRPC,
  convertProductConversionFromGRPC as getProductConversionFromGRPC,
  convertSalesRepresentativeFromGRPC,
  convertWarehouseFromGRPC
} from '@adempiere/grpc-api/src/utils/convertCoreFunctionality'
import {
  convertCustomerFromGRPC
} from '@adempiere/grpc-api/lib/convertPointOfSales'
import { getResourceAssignmentFromGRPC } from '../time-record';

export function getCampaignFromGRPC (campaignToConvert) {
  if (!campaignToConvert) {
    return undefined;
  }
  return {
    id: campaignToConvert.getId(),
    uuid: campaignToConvert.getUuid(),
    name: campaignToConvert.getName(),
    description: campaignToConvert.getDescription(),
    start_date: campaignToConvert.getStartDate(),
    end_date: campaignToConvert.getEndDate()
  }
}

export function getOrderFromGRPC (order) {
  if (!order) {
    return undefined;
  }
  return {
    uuid: order.getUuid(),
    id: order.getId(),
    document_no: order.getDocumentNo(),
    order_reference: order.getOrderReference(),
    is_delivered: order.getIsDelivered(),
    description: order.getDescription(),
    document_type: convertDocumentTypeFromGRPC(
      order.getDocumentType()
    ),
    sales_representative: convertSalesRepresentativeFromGRPC(
      order.getSalesRepresentative()
    ),
    price_list: convertPriceListFromGRPC(
      order.getPriceList()
    ),
    warehouse: convertWarehouseFromGRPC(
      order.getWarehouse()
    ),
    document_status: convertDocumentStatusFromGRPC(
      order.getDocumentStatus()
    ),
    total_lines: getDecimalFromGRPC(
      order.getTotalLines()
    ),
    tax_amount: getDecimalFromGRPC(
      order.getTaxAmount()
    ),
    discount_amount: getDecimalFromGRPC(
      order.getDiscountAmount()
    ),
    grand_total: getDecimalFromGRPC(
      order.getGrandTotal()
    ),
    display_currency_rate: getDecimalFromGRPC(
      order.getDisplayCurrencyRate()
    ),
    open_amount: getDecimalFromGRPC(
      order.getOpenAmount()
    ),
    payment_amount: getDecimalFromGRPC(
      order.getPaymentAmount()
    ),
    refund_amount: getDecimalFromGRPC(
      order.getRefundAmount()
    ),
    campaign: getCampaignFromGRPC(
      order.getCampaign()
    ),
    date_ordered: new Date(order.getDateOrdered()),
    customer: convertCustomerFromGRPC(
      order.getCustomer()
    ),
    charge_amount: getDecimalFromGRPC(
      order.getChargeAmount()
    ),
    credit_amount: getDecimalFromGRPC(
      order.getCreditAmount()
    ),
    source_rma_id: order.getSourceRmaId()
  };
}

export function getOrderLineFromGRPC (orderLineToConvert) {
  if (!orderLineToConvert) {
    return undefined;
  }
  const {
    convertChargeFromGRPC,
    convertProductFromGRPC,
    convertTaxRateFromGRPC
  } = require('@adempiere/grpc-api/src/utils/convertCoreFunctionality');

  return {
    uuid: orderLineToConvert.getUuid(),
    order_uuid: orderLineToConvert.getOrderUuid(),
    line: orderLineToConvert.getLine(),
    product: convertProductFromGRPC(
      orderLineToConvert.getProduct()
    ),
    charge: convertChargeFromGRPC(
      orderLineToConvert.getCharge()
    ),
    description: orderLineToConvert.getDescription(),
    line_description: orderLineToConvert.getLineDescription(),
    quantity: getDecimalFromGRPC(
      orderLineToConvert.getQuantity()
    ),
    quantity_ordered: getDecimalFromGRPC(
      orderLineToConvert.getQuantityOrdered()
    ),
    available_quantity: getDecimalFromGRPC(
      orderLineToConvert.getAvailableQuantity()
    ),
    price_list: getDecimalFromGRPC(
      orderLineToConvert.getPriceList()
    ),
    price: getDecimalFromGRPC(
      orderLineToConvert.getPrice()
    ),
    price_base: getDecimalFromGRPC(
      orderLineToConvert.getPriceBase()
    ),
    discount_rate: getDecimalFromGRPC(
      orderLineToConvert.getDiscountRate()
    ),
    discount_amount: getDecimalFromGRPC(
      orderLineToConvert.getDiscountAmount()
    ),
    tax_amount: getDecimalFromGRPC(
      orderLineToConvert.getTaxAmount()
    ),
    base_tax_amount: getDecimalFromGRPC(
      orderLineToConvert.getBaseTaxAmount()
    ),
    list_tax_amount: getDecimalFromGRPC(
      orderLineToConvert.getListTaxAmount()
    ),
    price_with_tax: getDecimalFromGRPC(
      orderLineToConvert.getPriceWithTax()
    ),
    price_list_with_tax: getDecimalFromGRPC(
      orderLineToConvert.getPriceListWithTax()
    ),
    price_base_with_tax: getDecimalFromGRPC(
      orderLineToConvert.getPriceBaseWithTax()
    ),
    tax_rate: convertTaxRateFromGRPC(
      orderLineToConvert.getTaxRate()
    ),
    total_discount_amount: getDecimalFromGRPC(
      orderLineToConvert.getTotalDiscountAmount()
    ),
    total_tax_amount: getDecimalFromGRPC(
      orderLineToConvert.getTotalTaxAmount()
    ),
    total_base_amount: getDecimalFromGRPC(
      orderLineToConvert.getTotalBaseAmount()
    ),
    total_base_amount_with_tax: getDecimalFromGRPC(
      orderLineToConvert.getTotalBaseAmountWithTax()
    ),
    total_amount: getDecimalFromGRPC(
      orderLineToConvert.getTotalAmount()
    ),
    total_amount_with_tax: getDecimalFromGRPC(
      orderLineToConvert.getTotalAmountWithTax()
    ),
    warehouse: convertWarehouseFromGRPC(
      orderLineToConvert.getWarehouse()
    ),
    uom: getProductConversionFromGRPC(
      orderLineToConvert.getUom()
    ),
    product_uom: getProductConversionFromGRPC(
      orderLineToConvert.getProductUom()
    ),
    resource_assignment: getResourceAssignmentFromGRPC(
      orderLineToConvert.getResourceAssignment()
    ),
    source_rma_line_id: orderLineToConvert.getSourceRmaLineId()
  };
}
