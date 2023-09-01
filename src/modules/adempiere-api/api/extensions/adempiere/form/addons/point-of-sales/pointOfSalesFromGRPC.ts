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
  convertChargeFromGRPC,
  convertProductFromGRPC,
  convertTaxRateFromGRPC,
  convertDocumentTypeFromGRPC,
  convertPriceListFromGRPC,
  convertProductConversionFromGRPC as getProductConversionFromGRPC,
  convertSalesRepresentativeFromGRPC,
  convertWarehouseFromGRPC
} from '@adempiere/grpc-api/src/utils/convertCoreFunctionality';
import {
  convertCustomerFromGRPC
} from '@adempiere/grpc-api/lib/convertPointOfSales'
// import { getResourceAssignmentFromGRPC } from '../time-record';
import { convertResourceAssignment as getResourceAssignmentFromGRPC } from '../../../util/convertData';

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

  return {
    id: orderLineToConvert.getId(),
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

export function getRMAFromGRPC (rmaToConvert) {
  if (!rmaToConvert) {
    return undefined;
  }
  return {
    id: rmaToConvert.getId(),
    uuid: undefined,
    document_no: rmaToConvert.getDocumentNo(),
    description: rmaToConvert.getDescription(),
    document_type: convertDocumentTypeFromGRPC(
      rmaToConvert.getDocumentType()
    ),
    sales_representative: convertSalesRepresentativeFromGRPC(
      rmaToConvert.getSalesRepresentative()
    ),
    document_status: convertDocumentStatusFromGRPC(
      rmaToConvert.getDocumentStatus()
    ),
    price_list: convertPriceListFromGRPC(
      rmaToConvert.getPriceList()
    ),
    warehouse: convertWarehouseFromGRPC(
      rmaToConvert.getWarehouse()
    ),
    total_lines: getDecimalFromGRPC(
      rmaToConvert.getTotalLines()
    ),
    grand_total: getDecimalFromGRPC(
      rmaToConvert.getGrandTotal()
    ),
    tax_amount: getDecimalFromGRPC(
      rmaToConvert.getTaxAmount()
    ),
    discount_amount: getDecimalFromGRPC(
      rmaToConvert.getDiscountAmount()
    ),
    date_ordered: rmaToConvert.getDateOrdered(),
    customer: convertCustomerFromGRPC(
      rmaToConvert.getCustomer()
    ),
    is_delivered: rmaToConvert.getIsDelivered(),
    order_reference: rmaToConvert.getOrderReference(),
    campaign: getCampaignFromGRPC(
      rmaToConvert.getCampaign()
    ),
    display_currency_rate: getDecimalFromGRPC(
      rmaToConvert.getDisplayCurrencyRate()
    ),
    open_amount: getDecimalFromGRPC(
      rmaToConvert.getOpenAmount()
    ),
    payment_amount: getDecimalFromGRPC(
      rmaToConvert.getPaymentAmount()
    ),
    refund_amount: getDecimalFromGRPC(
      rmaToConvert.getRefundAmount()
    ),
    charge_amount: getDecimalFromGRPC(
      rmaToConvert.getChargeAmount()
    ),
    credit_amount: getDecimalFromGRPC(
      rmaToConvert.getCreditAmount()
    ),
    source_order_id: rmaToConvert.getSourceOrderId()
  };
}

export function getRMALineFromGRPC (rmaLineToConvert) {
  if (!rmaLineToConvert) {
    return undefined;
  }

  return {
    id: rmaLineToConvert.getId(),
    uuid: rmaLineToConvert.getUuid(),
    product: convertProductFromGRPC(
      rmaLineToConvert.getProduct()
    ),
    charge: convertChargeFromGRPC(
      rmaLineToConvert.getCharge()
    ),
    line_description: rmaLineToConvert.getLineDescription(),
    description: rmaLineToConvert.getDescription(),
    warehouse: convertWarehouseFromGRPC(
      rmaLineToConvert.getWarehouse()
    ),
    quantity: getDecimalFromGRPC(
      rmaLineToConvert.getQuantity()
    ),
    quantity_ordered: getDecimalFromGRPC(
      rmaLineToConvert.getQuantityOrdered()
    ),
    available_quantity: getDecimalFromGRPC(
      rmaLineToConvert.getAvailableQuantity()
    ),
    price: getDecimalFromGRPC(
      rmaLineToConvert.getPrice()
    ),
    price_with_tax: getDecimalFromGRPC(
      rmaLineToConvert.getPriceWithTax()
    ),
    price_base: getDecimalFromGRPC(
      rmaLineToConvert.getPriceBase()
    ),
    price_base_with_tax: getDecimalFromGRPC(
      rmaLineToConvert.getPriceBaseWithTax()
    ),
    price_list: getDecimalFromGRPC(
      rmaLineToConvert.getPriceList()
    ),
    price_list_with_tax: getDecimalFromGRPC(
      rmaLineToConvert.getPriceListWithTax()
    ),
    discount_rate: getDecimalFromGRPC(
      rmaLineToConvert.getDiscountRate()
    ),
    discount_amount: getDecimalFromGRPC(
      rmaLineToConvert.getDiscountAmount()
    ),
    tax_amount: getDecimalFromGRPC(
      rmaLineToConvert.getTaxAmount()
    ),
    base_tax_amount: getDecimalFromGRPC(
      rmaLineToConvert.getBaseTaxAmount()
    ),
    list_tax_amount: getDecimalFromGRPC(
      rmaLineToConvert.getListTaxAmount()
    ),
    tax_rate: convertTaxRateFromGRPC(
      rmaLineToConvert.getTaxRate()
    ),
    // Totals
    total_discount_amount: getDecimalFromGRPC(
      rmaLineToConvert.getTotalDiscountAmount()
    ),
    total_tax_amount: getDecimalFromGRPC(
      rmaLineToConvert.getTotalTaxAmount()
    ),
    total_base_amount: getDecimalFromGRPC(
      rmaLineToConvert.getTotalBaseAmount()
    ),
    total_base_amount_with_tax: getDecimalFromGRPC(
      rmaLineToConvert.getTotalBaseAmountWithTax()
    ),
    total_amount: getDecimalFromGRPC(
      rmaLineToConvert.getTotalAmount()
    ),
    total_amount_with_tax: getDecimalFromGRPC(
      rmaLineToConvert.getTotalAmountWithTax()
    ),
    line: rmaLineToConvert.getLine(),
    uom: getProductConversionFromGRPC(
      rmaLineToConvert.getUom()
    ),
    product_uom: getProductConversionFromGRPC(
      rmaLineToConvert.getProductUom()
    ),
    source_order_line_id: rmaLineToConvert.getSourceOrderLineId()
  };
}
