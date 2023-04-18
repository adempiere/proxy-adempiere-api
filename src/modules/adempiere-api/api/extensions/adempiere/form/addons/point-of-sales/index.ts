/************************************************************************************
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
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

import { Router } from 'express';
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

import {
  getDecimalFromGRPC
} from '@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js';
import {
  convertDocumentStatusFromGRPC,
  convertProcessLogFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType.js';
import {
  convertKeyLayoutFromGRPC,
  convertAvailableWarehouse,
  convertAvailablePriceList,
  convertAvailableDocumentType,
  convertAvailableCurrency,
  convertCustomerFromGRPC,
  convertAvailableRefundGRPC,
  convertAvailableSeller,
  convertCustomerBankAccountFromGRPC,
  convertShipmentFromGRPC,
  convertShipmentLineFromGRPC,
  convertCashSummaryMovements,
  convertCashClosing
} from '@adempiere/grpc-api/lib/convertPointOfSales'
import {
  convertChargeFromGRPC,
  convertProductConversionFromGRPC,
  convertProductPriceFromGRPC,
  convertBankAccountFromGRPC,
  convertDocumentTypeFromGRPC,
  convertSalesRepresentativeFromGRPC,
  convertPriceListFromGRPC,
  convertCurrencyFromGRPC,
  convertWarehouseFromGRPC
} from '@adempiere/grpc-api/src/utils/convertCoreFunctionality'
import { convertResourceAssignment } from '../../../util/convertData';

function convertPointOfSalesFromGRPC (pointOfSales) {
  if (pointOfSales) {
    return {
      uuid: pointOfSales.getUuid(),
      id: pointOfSales.getId(),
      name: pointOfSales.getName(),
      description: pointOfSales.getDescription(),
      help: pointOfSales.getHelp(),
      is_modify_price: pointOfSales.getIsModifyPrice(),
      is_pos_required_pin: pointOfSales.getIsPosRequiredPin(),
      is_aisle_seller: pointOfSales.getIsAisleSeller(),
      is_shared_pos: pointOfSales.getIsSharedPos(),
      document_type: convertDocumentTypeFromGRPC(
        pointOfSales.getDocumentType()
      ),
      return_document_type: convertDocumentTypeFromGRPC(
        pointOfSales.getReturnDocumentType()
      ),
      cash_bank_account: convertBankAccountFromGRPC(
        pointOfSales.getCashBankAccount()
      ),
      cash_transfer_bank_account: convertBankAccountFromGRPC(
        pointOfSales.getCashTransferBankAccount()
      ),
      sales_representative: convertSalesRepresentativeFromGRPC(
        pointOfSales.getSalesRepresentative()
      ),
      template_customer: convertCustomerFromGRPC(
        pointOfSales.getTemplateCustomer()
      ),
      price_list: convertPriceListFromGRPC(
        pointOfSales.getPriceList()
      ),
      display_currency: convertCurrencyFromGRPC(
        pointOfSales.getDisplayCurrency()
      ),
      warehouse: convertWarehouseFromGRPC(
        pointOfSales.getWarehouse()
      ),
      refund_reference_currency: convertCurrencyFromGRPC(
        pointOfSales.getRefundReferenceCurrency()
      ),
      conversion_type_uuid: pointOfSales.getConversionTypeUuid(),
      key_layout_uuid: pointOfSales.getKeyLayoutUuid(),
      is_allows_modify_quantity: pointOfSales.getIsAllowsModifyQuantity(),
      is_allows_return_order: pointOfSales.getIsAllowsReturnOrder(),
      is_allows_collect_order: pointOfSales.getIsAllowsCollectOrder(),
      is_allows_create_order: pointOfSales.getIsAllowsCreateOrder(),
      is_allows_confirm_shipment: pointOfSales.getIsAllowsConfirmShipment(),
      is_display_discount: pointOfSales.getIsDisplayDiscount(),
      is_display_tax_amount: pointOfSales.getIsDisplayTaxAmount(),
      is_allows_allocate_seller: pointOfSales.getIsAllowsAllocateSeller(),
      is_allows_concurrent_use: pointOfSales.getIsAllowsConcurrentUse(),
      is_confirm_complete_shipment: pointOfSales.getIsConfirmCompleteShipment(),
      is_allows_cash_closing: pointOfSales.getIsAllowsCashClosing(),
      is_allows_cash_opening: pointOfSales.getIsAllowsCashOpening(),
      is_allows_cash_withdrawal: pointOfSales.getIsAllowsCashWithdrawal(),
      is_allows_apply_discount: pointOfSales.getIsAllowsApplyDiscount(),
      default_campaign_uuid: pointOfSales.getDefaultCampaignUuid(),
      default_opening_charge_uuid: pointOfSales.getDefaultOpeningChargeUuid(),
      default_withdrawal_charge_uuid: pointOfSales.getDefaultWithdrawalChargeUuid(),
      maximum_refund_allowed: getDecimalFromGRPC(
        pointOfSales.getMaximumRefundAllowed()
      ),
      maximum_discount_allowed: getDecimalFromGRPC(
        pointOfSales.getMaximumDiscountAllowed()
      ),
      maximum_line_discount_allowed: getDecimalFromGRPC(
        pointOfSales.getMaximumLineDiscountAllowed()
      ),
      write_off_amount_tolerance: getDecimalFromGRPC(
        pointOfSales.getWriteOffAmountTolerance()
      ),
      is_allows_create_customer: pointOfSales.getIsAllowsCreateCustomer(),
      is_allows_print_document: pointOfSales.getIsAllowsPrintDocument(),
      is_allows_preview_document: pointOfSales.getIsAllowsPreviewDocument(),
      is_pos_manager: pointOfSales.getIsPosManager(),
      is_allows_modify_discount: pointOfSales.getIsAllowsModifyDiscount(),
      is_keep_price_from_customer: pointOfSales.getIsKeepPriceFromCustomer(),
      is_allows_modify_customer: pointOfSales.getIsAllowsModifyCustomer()
    };
  }
  return undefined;
}

function convertStock (stock) {
  if (stock) {
    return {
      item_id: stock.getProductId(), // duplicated and rename field
      product_id: stock.getProductId(), // required field
      qty: stock.getQuantity(), // required field // duplicated and rename field
      quantity: stock.getQuantity(), // required field
      is_in_stock: stock.getIsInStock(), // required field
      is_qty_decimal: stock.getIsDecimalQuantity(), // duplicated and rename field
      is_decimal_quantity: stock.getIsDecimalQuantity(),
      show_default_notification_message: stock.getIsShowDefaultNotificationMessage(),
      use_config_min_qty: stock.getIsUseConfigMinimumQuantity(), // duplicated and rename field
      use_config_minimum_quantity: stock.getIsUseConfigMinimumQuantity(),
      min_qty: stock.getMinimumQuantity(),
      minimium_quantity: stock.getMinimumQuantity(),
      use_config_min_sale_qty: stock.getIsUseConfigMinimumSaleQuantity(), // duplicated and rename field
      use_config_minimum_sale_quantity: stock.getIsUseConfigMinimumSaleQuantity(),
      min_sale_qty: stock.getMinimumSaleQuantity(), // duplicated and rename field
      minimun_sale_quantity: stock.getMinimumSaleQuantity(),
      use_config_max_sale_qty: stock.getIsUseConfigMaximumSaleQuantity(), // duplicated and rename field
      use_config_maximum_sale_quantity: stock.getIsUseConfigMaximumSaleQuantity(),
      max_sale_qty: stock.getMaximumSaleQuantity(), // duplicated and rename field
      maximun_sale_quantity: stock.getMaximumSaleQuantity(),
      use_config_backorders: stock.getIsUseConfigBackorders(),
      backorders: stock.getBackorders(),
      use_config_notify_stock_qty: stock.getIsUseConfigNotifyStockQuantity(), // duplicated and rename field
      use_config_notify_stock_quantity: stock.getIsUseConfigNotifyStockQuantity(),
      notify_stock_qty: stock.getNotifyStockQuantity(), // duplicated and rename field
      notify_stock_quantity: stock.getNotifyStockQuantity(),
      use_config_qty_increments: stock.getIsUseConfigQuantityIncrements(), // duplicated and rename field
      use_config_quantity_increments: stock.getIsUseConfigQuantityIncrements(),
      qty_increments: stock.getQuantityIncrements(), // duplicated and rename field
      quantity_increments: stock.getQuantityIncrements(),
      use_config_enable_qty_inc: stock.getIsUseConfigEnableQuantityIncrements(), // duplicated and rename field
      use_config_enable_quantity_increments: stock.getIsUseConfigEnableQuantityIncrements(),
      enable_qty_increments: stock.getIsEnableQuantityIncrements(), // duplicated and rename field
      enable_quantity_increments: stock.getIsEnableQuantityIncrements(),
      use_config_manage_stock: stock.getIsUseConfigManageStock(),
      manage_stock: stock.getIsManageStock(),
      low_stock_date: stock.getLowStockDate(),
      is_decimal_divided: stock.getIsDecimalDivided(),
      stock_status_changed_auto: stock.getStockStatusChangedAuto(),
      warehouse_id: stock.getWarehouseId(),
      warehouse_uuid: stock.getWarehouseUuid(),
      warehouse_name: stock.getWarehouseName(),
      attribute_name: stock.getAttributeName()
    }
  }

  return undefined
}

// Convert available tender type from gRPC to JSON
function convertPaymentMethod (paymentMethod) {
  if (paymentMethod) {
    return {
      id: paymentMethod.getId(),
      uuid: paymentMethod.getUuid(),
      value: paymentMethod.getValue(),
      name: paymentMethod.getName(),
      description: paymentMethod.getDescription(),
      tender_type: paymentMethod.getTenderType(),
      is_active: paymentMethod.getIsActive()
    }
  }
  return undefined;
}

// Convert available tender type from gRPC to JSON
function convertAvailablePaymentMethod (availablePaymentMethod) {
  if (availablePaymentMethod) {
    return {
      id: availablePaymentMethod.getId(),
      uuid: availablePaymentMethod.getUuid(),
      name: availablePaymentMethod.getName(),
      pos_uuid: availablePaymentMethod.getPosUuid(),
      is_displayedfrom_collection: availablePaymentMethod.getIsDisplayedfromCollection(),
      is_pos_required_pin: availablePaymentMethod.getIsPosRequiredPin(),
      is_allowed_to_refund: availablePaymentMethod.getIsAllowedToRefund(),
      is_allowed_to_refund_open: availablePaymentMethod.getIsAllowedToRefundOpen(),
      maximum_refund_allowed: getDecimalFromGRPC(
        availablePaymentMethod.getMaximumRefundAllowed()
      ),
      maximum_daily_refund_allowed: getDecimalFromGRPC(
        availablePaymentMethod.getMaximumDailyRefundAllowed()
      ),
      refund_reference_currency: convertCurrencyFromGRPC(
        availablePaymentMethod.getRefundReferenceCurrency()
      ),
      reference_currency: convertCurrencyFromGRPC(
        availablePaymentMethod.getReferenceCurrency()
      ),
      is_payment_reference: availablePaymentMethod.getIsPaymentReference(),
      payment_method: convertPaymentMethod(
        availablePaymentMethod.getPaymentMethod()
      )
    }
  }
  return undefined;
}

function convertPaymentFromGRPC (payment) {
  if (payment) {
    return {
      uuid: payment.getUuid(),
      id: payment.getId(),
      document_no: payment.getDocumentNo(),
      collecting_agent: convertSalesRepresentativeFromGRPC(
        payment.getCollectingAgent()
      ),
      document_status: convertDocumentStatusFromGRPC(
        payment.getDocumentStatus()
      ),
      amount: getDecimalFromGRPC(
        payment.getAmount()
      ),
      converted_amount: getDecimalFromGRPC(
        payment.getConvertedAmount()
      ),
      tender_type_code: payment.getTenderTypeCode(),
      currency: convertCurrencyFromGRPC(
        payment.getCurrency()
      ),
      description: payment.getDescription(),
      reference_no: payment.getReferenceNo(),
      order_uuid: payment.getOrderUuid(),
      bank_uuid: payment.getBankUuid(),
      payment_date: new Date(payment.getPaymentDate()),
      payment_account_date: new Date(payment.getPaymentAccountDate()),
      is_refund: payment.getIsRefund(),
      customer: convertCustomerFromGRPC(
        payment.getCustomer()
      ),
      payment_method: convertPaymentMethod(
        payment.getPaymentMethod()
      ),
      banck_account: convertBankAccountFromGRPC(
        payment.getBankAccount()
      ),
      reference_bank_account: convertBankAccountFromGRPC(
        payment.getReferenceBankAccount()
      ),
      charge: convertChargeFromGRPC(
        payment.getCharge()
      ),
      document_type: convertDocumentTypeFromGRPC(
        payment.getDocumentType()
      ),
      is_processed: payment.getIsProcessed()
    };
  }
  return undefined;
}

function convertPaymentReferenceFromGRPC (refund) {
  if (refund) {
    return {
      uuid: refund.getUuid(),
      id: refund.getId(),
      sales_representative: convertSalesRepresentativeFromGRPC(
        refund.getSalesRepresentative()
      ),
      amount: getDecimalFromGRPC(
        refund.getAmount()
      ),
      source_amount: getDecimalFromGRPC(
        refund.getSourceAmount()
      ),
      converted_amount: getDecimalFromGRPC(
        refund.getConvertedAmount()
      ),
      tender_type_code: refund.getTenderTypeCode(),
      currency: convertCurrencyFromGRPC(
        refund.getCurrency()
      ),
      description: refund.getDescription(),
      order_uuid: refund.getOrderUuid(),
      customer_bank_account_uuid: refund.getCustomerBankAccountUuid(),
      payment_account_date: new Date(refund.getPaymentAccountDate()),
      payment_date: new Date(refund.getPaymentDate()),
      is_paid: refund.getIsPaid(),
      is_receipt: refund.getIsReceipt(),
      payment_method: convertPaymentMethod(
        refund.getPaymentMethod()
      ),
      is_automatic: refund.getIsAutomatic(),
      is_processed: refund.getIsProcessed()
    };
  }
  return undefined;
}

function convertOrderFromGRPC (order) {
  if (order) {
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
      campaign_uuid: order.getCampaignUuid(),
      date_ordered: new Date(order.getDateOrdered()),
      customer: convertCustomerFromGRPC(
        order.getCustomer()
      ),
      charge_amount: getDecimalFromGRPC(
        order.getChargeAmount()
      ),
      credit_amount: getDecimalFromGRPC(
        order.getCreditAmount()
      )
    };
  }
  return undefined;
}

function convertOrderLineFromGRPC (orderLineToConvert) {
  if (orderLineToConvert) {
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
      uom: convertProductConversionFromGRPC(
        orderLineToConvert.getUom()
      ),
      product_uom: convertProductConversionFromGRPC(
        orderLineToConvert.getProductUom()
      ),
      resource_assignment: convertResourceAssignment(
        orderLineToConvert.getResourceAssignment()
      )
    };
  }
  return undefined;
}

function convertAvalableCashFromGRPC (cashToConvert) {
  if (cashToConvert) {
    return {
      id: cashToConvert.getId(),
      uuid: cashToConvert.getUuid(),
      name: cashToConvert.getName(),
      key: cashToConvert.getKey(),
      bank_account: convertBankAccountFromGRPC(
        cashToConvert.getBankAccount()
      )
    };
  }
  return undefined;
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/pointOfSales')
  const service = new ServiceApi(config)

  /**
   * GET Selling Points
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.user_uuid - User UUID reference
   *
   * Details:
   */
  api.get('/selling-points', (req, res) => {
    if (req.query) {
      service.listPointOfSales({
        token: req.headers.authorization,
        userUuid: req.query.user_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getSellingPointsList().map(pos => {
                return convertPointOfSalesFromGRPC(pos)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET Point of Sales
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   *
   * Details:
   */
  api.get('/point-of-sales', (req, res) => {
    if (req.query) {
      service.getPointOfSales({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertPointOfSalesFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET product price
   *
   * req.query.token - user token
   * req.query.search_value - product search value
   * req.query.upc - product UPC
   * req.query.value - product value
   * req.query.name - product name
   * req.query.pos_uuid - POS UUID reference
   * req.query.business_partner_uuid - Business partner UUID reference
   * req.query.price_list_uuid - Price List UUID
   * req.query.warehouse_uuid - Warehouse UUID
   * req.query.valid_from - Prioce List Valid From
   *
   * Details:
   */
  api.get('/product-price', (req, res) => {
    if (req.query) {
      service.getProductPrice({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
        upc: req.query.upc,
        value: req.query.value,
        name: req.query.name,
        posUuid: req.query.pos_uuid,
        businessPartnerUuid: req.query.business_partner_uuid,
        priceListUuid: req.query.price_list_uuid,
        warehouseUuid: req.query.warehouse_uuid,
        validFrom: req.query.valid_from,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertProductPriceFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List product price
   *
   * req.query.token - user token
   * req.query.search_value - product search value
   * req.query.pos_uuid - POS UUID reference
   * req.query.business_partner_uuid - Business partner UUID reference
   * req.query.price_list_uuid - Price List UUID
   * req.query.warehouse_uuid - Warehouse UUID
   * req.query.valid_from - Prioce List Valid From
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/product-prices', (req, res) => {
    if (req.query) {
      service.listProductPrice({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
        posUuid: req.query.pos_uuid,
        businessPartnerUuid: req.query.business_partner_uuid,
        priceListUuid: req.query.price_list_uuid,
        warehouseUuid: req.query.warehouse_uuid,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getProductPricesList().map(productPrice => {
                return convertProductPriceFromGRPC(productPrice)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * req.body.warehouse_uuid - Warehouse (Oprional)
   * req.body.price_list_uuid - Price List (Oprional)
   * Details:
   */
  api.post('/create-order', (req, res) => {
    if (req.body) {
      service.createOrder({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        customerUuid: req.body.customer_uuid,
        documentTypeUuid: req.body.document_type_uuid,
        warehouseUuid: req.body.warehouse_uuid,
        priceListUuid: req.body.price_list_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid,
        campaignUuid: req.body.campaign_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Release Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * Details:
   */
  api.post('/release-order', (req, res) => {
    if (req.body) {
      service.releaseOrder({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Release Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * Details:
   */
  api.post('/hold-order', (req, res) => {
    if (req.body) {
      service.holdOrder({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Shipment
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - POS UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * Details:
   */
  api.post('/create-shipment', (req, res) => {
    if (req.body) {
      service.createShipment({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid,
        isCreateLinesFromOrder: req.body.is_create_lines_from_order
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertShipmentFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Process Shipment
   *
   * req.query.token - user token
   * Body:
   * req.body.shipment_uuid - POS UUID shipment uuid
   * req.body.description - POS UUID description
   * req.body.document_action - Document Action (CO, VO, RE)
   * Details:
   */
  api.post('/process-shipment', (req, res) => {
    if (req.body) {
      service.processShipment({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        shipmentUuid: req.body.shipment_uuid,
        description: req.body.description,
        documentAction: req.body.document_action
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertShipmentFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Reverse Sales
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID
   * req.body.pos_uuid - POS UUID
   * req.body.description - POS UUID description
   * Details:
   */
  api.post('/reverse-sales', (req, res) => {
    if (req.body) {
      service.reverseSales({
        token: req.headers.authorization,
        orderUuid: req.body.order_uuid,
        posUuid: req.body.pos_uuid,
        description: req.body.description
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Shipment Line
   *
   * req.query.token - user token
   * Body:
   * req.body.order_line_uuid - Order Line UUID reference
   * req.body.description - Description UUID reference
   * req.body.quantity - Quantity UUID reference
   * req.body.shipment_uuid - Header UUID reference
   *
   * Details:
   */
  api.post('/create-shipment-line', (req, res) => {
    if (req.body) {
      service.createShipmentLine({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderLineUuid: req.body.order_line_uuid,
        description: req.body.description,
        quantity: req.body.quantity,
        shipmentUuid: req.body.shipment_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertShipmentLineFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Delete Shipment Line
   *
   * req.query.token - user token
   * Body:
   * req.body.shipment_line_uuid - Shipment Line UUID reference
   *
   * Details:
   */
  api.post('/delete-shipment-line', (req, res) => {
    if (req.body) {
      service.deleteShipmentLine({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        shipmentLineUuid: req.body.shipment_line_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Shipment Lines
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.shipment_uuid - Shipment UUID reference
   * Details:
   */
  api.get('/shipment-lines', (req, res) => {
    if (req.query) {
      service.listShipmentLines({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        shipmentUuid: req.query.shipment_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getShipmentLinesList().map(shipmentLine => {
                return convertShipmentLineFromGRPC(shipmentLine)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Payment
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.invoice_uuid - Invoice UUID reference
   * req.body.bank_uuid - Bank UUID reference
   * req.body.reference_no - Reference no
   * req.body.description - Description for Payment
   * req.body.amount - Payment Amount
   * req.body.tender_type_code - Tender Type
   * req.body.currency_uuid - Currency UUID reference
   * req.body.payment_date - Payment Date
   * req.body.payment_account_date - Accounting Date
   * req.body.payment_method_uuid - Payment Method Uuid
   * req.body.is_refund - Is a Refund
   *
   * Details:
   */
  api.post('/create-payment', (req, res) => {
    if (req.body) {
      service.createPayment({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        chargeUuid: req.body.charge_uuid,
        invoiceUuid: req.body.invoice_uuid,
        bankUuid: req.body.bank_uuid,
        referenceNo: req.body.reference_no,
        description: req.body.description,
        amount: req.body.amount,
        tenderTypeCode: req.body.tender_type_code,
        paymentDate: req.body.payment_date,
        paymentAccountDate: req.body.payment_account_date,
        currencyUuid: req.body.currency_uuid,
        paymentMethodUuid: req.body.payment_method_uuid,
        isRefund: req.body.is_refund,
        collectingAgentUuid: req.body.collecting_agent_uuid,
        referenceBankAccountUuid: req.body.reference_bank_account_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertPaymentFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Refund Reference
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.customer_bank_account_uuid - Bank UUID reference
   * req.body.description - Description for Payment
   * req.body.amount - Payment Amount
   * req.body.tender_type_code - Tender Type
   * req.body.currency_uuid - Currency UUID reference
   * req.body.conversion_type_uuid - Conversion Type UUID
   * req.body.payment_date - Payment Date
   * req.body.payment_account_date - Accounting Date
   * req.body.payment_method_uuid - Payment Method Uuid
   *
   * Details:
   */
  api.post('/create-payment-reference', (req, res) => {
    if (req.body) {
      service.createPaymentReference({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        customerBankAccountUuid: req.body.customer_bank_account_uuid,
        customerUuid: req.body.customer_uuid,
        description: req.body.description,
        amount: req.body.amount,
        sourceAmount: req.body.source_amount,
        isReceipt: req.body.is_receipt,
        tenderTypeCode: req.body.tender_type_code,
        paymentDate: req.body.payment_date,
        paymentAccountDate: req.body.payment_account_date,
        currencyUuid: req.body.currency_uuid,
        conversionTypeUuid: req.body.conversion_type_uuid,
        paymentMethodUuid: req.body.payment_method_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertPaymentReferenceFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Refund references
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * req.query.customer_uuid - Customer UUID reference
   * req.query.order_uuid - Order UUID reference
   * Details:
   */
  api.get('/payment-references', (req, res) => {
    if (req.query) {
      service.listPaymentReferences({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        customerUuid: req.query.customer_uuid,
        orderUuid: req.query.order_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getPaymentReferencesList().map(refundReference => {
                return convertPaymentReferenceFromGRPC(refundReference)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Delete Payment
   *
   * req.query.token - user token
   * Body:
   * req.body.payment_uuid - Payment UUID reference
   *
   * Details:
   */
  api.post('/delete-payment', (req, res) => {
    if (req.body) {
      service.deletePayment({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        paymentUuid: req.body.payment_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Delete Payment
   *
   * req.query.token - user token
   * Body:
   * req.body.uuid - Refund Reference UUID reference
   * req.body.id - Refund Reference ID reference
   * Details:
   */
  api.post('/delete-payment-reference', (req, res) => {
    if (req.body) {
      service.deletePaymentReference({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        uuid: req.body.uuid,
        id: req.body.id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Allocate Seller
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * Details:
   */
  api.post('/allocate-seller', (req, res) => {
    if (req.body) {
      service.allocateSeller({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Deallocate Seller
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * Details:
   */
  api.post('/deallocate-seller', (req, res) => {
    if (req.body) {
      service.deallocateSeller({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Process Cash Closing
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.uuid - Bank Statement UUID reference
   * req.body.id - Bank Statement ID reference
   *
   * Details:
   */
  api.post('/cash-closing', (req, res) => {
    if (req.body) {
      service.processCashClosing({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        uuid: req.body.uuid,
        id: req.body.id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCashClosing(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Cash Summary Movements
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/cash-summary-movements', (req, res) => {
    if (req.query) {
      service.listCashSummaryMovements({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              id: response.getId(),
              uuid: response.getUuid(),
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getCashMovementsList().map(movement => {
                return convertCashSummaryMovements(movement)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Cash Opening
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.collecting_agent_uuid - Collecting Agent
   * req.body.description - a Description
   * req.body.payments
   * [
   * uuid - payment uuid reference
   * id - id payment reference
   * invoice_uuid - Invoice UUID reference
   * bank_uuid - Bank UUID reference
   * reference_no - Reference no
   * description - Description for Payment
   * amount - Payment Amount
   * tender_type_code - Tender Type
   * payment_date - Payment Date (default now)
   * currency_uuid - Currency UUID reference,
   * collecting_agent_uuid - Collecting Agent
   * is_refund - is a refund to customer?
   * ]
   *
   * Details:
   */
  api.post('/cash-opening', (req, res) => {
    if (req.body) {
      let payments = []
      if (req.body.payments) {
        payments = req.body.payments
      }
      service.processCashOpening({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        collectingAgentUuid: req.body.collecting_agent_uuid,
        description: req.body.description,
        payments: payments.map(payment => {
          return {
            uuid: payment.uuid,
            id: payment.id,
            invoiceUuid: payment.invoice_uuid,
            bankUuid: payment.bank_uuid,
            referenceNo: payment.reference_no,
            description: payment.description,
            amount: payment.amount,
            tenderTypeCode: payment.tender_type_code,
            paymentDate: payment.payment_date,
            currencyUuid: payment.currency_uuid,
            isRefund: payment.is_refund,
            collectingAgentUuid: payment.collecting_agent_uuid,
            chargeUuid: payment.charge_uuid
          }
        })
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Cash Withdrawal
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.collecting_agent_uuid - Collecting Agent
   * req.body.description - a Description
   * req.body.payments
   * [
   * uuid - payment uuid reference
   * id - id payment reference
   * invoice_uuid - Invoice UUID reference
   * bank_uuid - Bank UUID reference
   * reference_no - Reference no
   * description - Description for Payment
   * amount - Payment Amount
   * tender_type_code - Tender Type
   * payment_date - Payment Date (default now)
   * currency_uuid - Currency UUID reference,
   * collecting_agent_uuid - Collecting Agent
   * is_refund - is a refund to customer?
   * ]
   *
   * Details:
   */
  api.post('/cash-withdrawal', (req, res) => {
    if (req.body) {
      let payments = []
      if (req.body.payments) {
        payments = req.body.payments
      }
      service.processCashWithdrawal({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        collectingAgentUuid: req.body.collecting_agent_uuid,
        description: req.body.description,
        payments: payments.map(payment => {
          return {
            uuid: payment.uuid,
            id: payment.id,
            invoiceUuid: payment.invoice_uuid,
            bankUuid: payment.bank_uuid,
            referenceNo: payment.reference_no,
            description: payment.description,
            amount: payment.amount,
            tenderTypeCode: payment.tender_type_code,
            paymentDate: payment.payment_date,
            currencyUuid: payment.currency_uuid,
            isRefund: payment.is_refund,
            collectingAgentUuid: payment.collecting_agent_uuid,
            chargeUuid: payment.charge_uuid
          }
        })
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Update Payment
   *
   * req.query.token - user token
   * Body:
   * req.body.payment_uuid - Payment UUID reference
   * req.body.bank_uuid - Bank UUID reference
   * req.body.reference_no - Reference No
   * req.body.description - Document Description
   * req.body.amount - Amount of Document
   * req.body.payment_date - Payment Date
   * req.body.tender_type_code - tender Type
   * req.body.payment_date - Payment Date
   * req.body.payment_account_date - Accounting Date
   * req.body.payment_method_uuid - Payment Method Uuid
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.post('/update-payment', (req, res) => {
    if (req.body) {
      service.updatePayment({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        paymentUuid: req.body.payment_uuid,
        bankUuid: req.body.bank_uuid,
        referenceNo: req.body.reference_no,
        description: req.body.description,
        amount: req.body.amount,
        paymentDate: req.body.payment_date,
        tenderTypeCode: req.body.tender_type_code,
        paymentAccountDate: req.body.payment_account_date,
        paymentMethodUuid: req.body.payment_method_uuid,
        referenceBankAccountUuid: req.body.reference_bank_account_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertPaymentFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Payments
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.is_only_refund - Is a Refund
   * req.query.is_only_receipt - Is a Receipt
   * req.query.order_uuid - Order UUID reference
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/payments', (req, res) => {
    if (req.query) {
      service.listPayments({
        token: req.headers.authorization,
        orderUuid: req.query.order_uuid,
        posUuid: req.query.pos_uuid,
        isOnlyRefund: req.query.is_only_refund,
        isOnlyReceipt: req.query.is_only_receipt,
        tableName: req.query.table_name,
        //  DSL Query
        filters: req.query.filters,
        columns: req.query.columns,
        //  Custom Query
        query: req.query.query,
        whereClause: req.query.where_clause,
        orderByClause: req.query.order_by_clause,
        limit: req.query.limit,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getPaymentsList().map(payment => {
                return convertPaymentFromGRPC(payment)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Delete Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Sales Order UUID reference
   *
   * Details:
   */
  api.post('/delete-order', (req, res) => {
    if (req.body) {
      service.deleteOrder({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Print Ticket: Run it after complete order
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - Point Of sales UUID reference
   * req.body.order_uuid - Sales Order UUID reference
   *
   * Details:
   */
  api.post('/print-ticket', (req, res) => {
    if (req.body) {
      service.printTicket({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getResult()
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Print Preview: Run it to preview PDF file
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - Point Of sales UUID reference
   * req.body.order_uuid - Sales Order UUID reference
   * req.body.report_type - File format to report
   *
   * Details:
   */
  api.post('/print-preview', (req, res) => {
    if (req.body) {
      service.printPreview({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        reportType: req.body.report_type
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              result: response.getResult(),
              processLog: convertProcessLogFromGRPC(response.getProcessLog())
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Print Shipment Preview: Run it to preview PDF file for Shipment
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - Point Of sales UUID reference
   * req.body.shipment_uuid - Shipment UUID reference
   * req.body.report_type - File format to report
   *
   * Details:
   */
  api.post('/print-shipment-preview', (req, res) => {
    if (req.body) {
      service.printShipmentPreview({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        shipmentUuid: req.body.shipment_uuid,
        reportType: req.body.report_type
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              result: response.getResult(),
              processLog: convertProcessLogFromGRPC(response.getProcessLog())
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Sales Order Line
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.product_uuid - Product UUID reference
   * req.body.charge_uuid - Charge UUID reference
   * req.body.description - Description UUID reference
   * req.body.quantity - Quantity UUID reference
   * req.body.price - Price UUID reference
   * req.body.discount_rate - Discount UUID reference
   * req.body.warehouse_uuid - Warehouse UUID reference
   *
   * Details:
   */
  api.post('/create-order-line', (req, res) => {
    if (req.body) {
      service.createOrderLine({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        productUuid: req.body.product_uuid,
        chargeUuid: req.body.charge_uuid,
        resourceAssignmentUuid: req.body.resource_assignment_uuid,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        discountRate: req.body.discount_rate,
        warehouseUuid: req.body.warehouse_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderLineFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Delete Sales Order Line
   *
   * req.query.token - user token
   * Body:
   * req.body.order_line_uuid - Sales Order Line UUID reference
   *
   * Details:
   */
  api.post('/delete-order-line', (req, res) => {
    if (req.body) {
      service.deleteOrderLine({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderLineUuid: req.body.order_line_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Update Sales Order
   *
   * req.query.token - user token
   * Body:
   * req.body.order_uuid - Order UUID reference
   * req.body.pos_uuid - POS UUID reference
   * req.body.customer_uuid - Customer UUID reference
   * req.body.document_type_uuid - Document Type UUID reference
   * req.body.sales_representative_uuid - Sales Representative UUID reference
   * req.body.warehouse_uuid - Warehouse (Oprional)
   * req.body.price_list_uuid - Price List (Oprional)
   * req.body.campaign_uuid - Campaign
   * req.body.discount_rate - Discount rate for order
   * req.body.discount_amount_off - Dicount based on amount
   *
   * Details:
   */
  api.post('/update-order', (req, res) => {
    if (req.body) {
      service.updateOrder({
        token: req.headers.authorization,
        orderUuid: req.body.order_uuid,
        posUuid: req.body.pos_uuid,
        customerUuid: req.body.customer_uuid,
        documentTypeUuid: req.body.document_type_uuid,
        warehouseUuid: req.body.warehouse_uuid,
        priceListUuid: req.body.price_list_uuid,
        description: req.body.description,
        campaignUuid: req.body.campaign_uuid,
        discountRate: req.body.discount_rate,
        discountRateOff: req.body.discount_rate_off,
        discountAmountOff: req.body.discount_amount_off,
        salesRepresentativeUuid: req.body.sales_representative_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Update Sales Order Line
   *
   * req.query.token - user token
   * Body:
   * req.body.order_line_uuid - Order UUID reference
   * req.body.description - Description
   * req.body.quantity - Quantity UUID reference
   * req.body.price - Price UUID reference
   * req.body.discount_rate - Discount UUID reference
   * req.body.is_add_quantity - Only add quantity
   * req.body.warehouse_uuid - Warehouse (Oprional)
   *
   * Details:
   */
  api.post('/update-order-line', (req, res) => {
    if (req.body) {
      service.updateOrderLine({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderLineUuid: req.body.order_line_uuid,
        description: req.body.description,
        warehouseUuid: req.body.warehouse_uuid,
        quantity: req.body.quantity,
        price: req.body.price,
        discountRate: req.body.discount_rate,
        isAddQuantity: req.body.is_add_quantity,
        uomUuid: req.body.uom_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderLineFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Validate User PIN
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.pin - User PIN
   *
   * Details:
   */
  api.post('/validate-pin', (req, res) => {
    if (req.body) {
      service.validatePIN({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        pin: req.body.pin,
        requestedAccess: req.body.requested_access,
        requestedAmount: req.body.requested_amount
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET Sales Order
   *
   * req.query.token - user token
   * req.query.order_uuid - Order UUID reference
   * req.query.pos_uuid - POS UUID reference
   * req.query.customer_uuid - Customer UUID reference
   * req.query.document_type_uuid - Document Type UUID reference
   * req.query.sales_representative_uuid - Sales Representative UUID reference
   *
   * Details:
   */
  api.get('/order', (req, res) => {
    if (req.query) {
      service.getOrder({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        orderUuid: req.query.order_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Process Order
   * This request allows process a draft order with payments
   *
   * req.query.token - user token
   * Body:
   * req.body.pos_uuid - POS UUID reference
   * req.body.order_uuid - Order UUID reference
   * req.body.create_payments - Optional create payments (if is true then hope payments array)
   * req.body.is_open_refund - default false and can be used for order after process it
   * req.body.payments
   * [
   * invoice_uuid - Invoice UUID reference
   * bank_uuid - Bank UUID reference
   * reference_no - Reference no
   * description - Description for Payment
   * amount - Payment Amount
   * tender_type_code - Tender Type
   * payment_date - Payment Date (default now)
   * currency_uuid - Currency UUID reference,
   * collecting_agent_uuid - Collecting Agent
   * is_refund - is a refund to customer?
   * ]
   *
   * Details:
   */
  api.post('/process-order', (req, res) => {
    if (req.body) {
      let payments = []
      if (req.body.payments) {
        payments = req.body.payments
      }
      service.processOrder({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        orderUuid: req.body.order_uuid,
        isOpenRefund: req.body.is_open_refund,
        createPayments: req.body.create_payments,
        payments: payments.map(payment => {
          return {
            uuid: payment.uuid,
            id: payment.id,
            invoiceUuid: payment.invoice_uuid,
            bankUuid: payment.bank_uuid,
            referenceNo: payment.reference_no,
            description: payment.description,
            amount: payment.amount,
            tenderTypeCode: payment.tender_type_code,
            paymentDate: payment.payment_date,
            currencyUuid: payment.currency_uuid,
            isRefund: payment.is_refund,
            collectingAgentUuid: payment.collecting_agent_uuid
          }
        })
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertOrderFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET Sales Orders
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Body:
   * req.query.pos_uuid - POS UUID reference
   * req.query.document_no - Document No
   * req.query.business_partner_uuid - Business Partner UUID reference
   * req.query.grand_total - Grand Total
   * req.query.open_amount - Open Amount
   * req.query.is_waiting_for_pay - Is Wainting for a payment
   * req.query.is_only_processed - Is Only the  Processed Orders
   * req.query.is_only_aisle_seller - Is Only from Aisle Seller
   * req.query.is_waiting_for_invoice - Is Ready for Invoiced
   * req.query.is_waiting_for_shipment Is ready for shipment
   * req.query.date_ordered_from - Date Ordered From
   * req.query.date_ordered_to - Date Ordered To
   * req.query.sales_representative_uuid - Sales Representative UUID reference
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * Details:
   */
  api.get('/orders', (req, res) => {
    if (req.query) {
      service.listOrders({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        documentNo: req.query.document_no,
        businessPartnerUuid: req.query.business_partner_uuid,
        grandTotal: req.query.grand_total,
        openAmount: req.query.open_amount,
        isPaid: req.query.is_paid,
        isProcessed: req.query.is_processed,
        isAisleSeller: req.query.is_aisle_seller,
        isInvoiced: req.query.is_invoiced,
        dateOrderedFrom: req.query.date_ordered_from,
        dateOrderedTo: req.query.date_ordered_to,
        salesRepresentativeUuid: req.query.sales_representative_uuid,
        isWaitingForPay: req.query.is_waiting_for_pay,
        isOnlyProcessed: req.query.is_only_processed,
        isOnlyAisleSeller: req.query.is_only_aisle_seller,
        isWaitingForInvoice: req.query.is_waiting_for_invoice,
        isWaitingForShipment: req.query.is_waiting_for_shipment,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getOrdersList().map(order => {
                return convertOrderFromGRPC(order)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Sales Orders Lines
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.order_uuid - Order UUID reference
   * Details:
   */
  api.get('/order-lines', (req, res) => {
    if (req.query) {
      service.listOrderLines({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        orderUuid: req.query.order_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getOrderLinesList().map(orderLine => {
                return convertOrderLineFromGRPC(orderLine)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * Get Key Layout
   *
   * req.query.token - user token
   * req.query.key_layout_uuid - Key Layout UUID reference
   *
   * Details:
   */
  api.get('/key-layout', (req, res) => {
    if (req.query) {
      service.getKeyLayout({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        keyLayoutUuid: req.query.key_layout_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertKeyLayoutFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Warehouses
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/available-warehouses', (req, res) => {
    if (req.query) {
      service.listAvailableWarehouses({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getWarehousesList().map(warehouse => {
                return convertAvailableWarehouse(warehouse)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Document Types
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/available-document-types', (req, res) => {
    if (req.query) {
      service.listAvailableDocumentTypes({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getDocumentTypesList().map(documentType => {
                return convertAvailableDocumentType(documentType)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Payment Methods
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/available-payment-methods', (req, res) => {
    if (req.query) {
      service.listAvailablePaymentMethods({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getPaymentMethodsList().map(tenderType => {
                return convertAvailablePaymentMethod(tenderType)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Price List
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/available-price-list', (req, res) => {
    if (req.query) {
      service.listAvailablePriceList({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getPriceListList().map(priceList => {
                return convertAvailablePriceList(priceList)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Currencies
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/available-currencies', (req, res) => {
    if (req.query) {
      service.listAvailableCurrencies({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getCurrenciesList().map(currency => {
                return convertAvailableCurrency(currency)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Customer
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.value - value
   * req.body.tax_id - Tax ID
   * req.body.duns - DUNS
   * req.body.naics - NAICS
   * req.body.name - Name
   * req.body.last_name - Last Name
   * req.body.description - Description
   * req.body.contact_name - Contact Name
   * req.body.email - EMail
   * req.body.phone - Phone
   * req.body.business_partner_group_uuid - Business Partner Group
   * req.body.address1 - Address 1
   * req.body.address2 - Address 2
   * req.body.address3 - Address 3
   * req.body.address4 - Address 4
   * req.body.city_uuid - City UUID
   * req.body.city_name - City Name
   * req.body.postal_code - Postal Code
   * req.body.region_uuid - Region UUID
   * req.body.region_name - Region Name
   * req.body.country_uuid - Country UUID
   * req.body.pos_uuid - POS UUID
   * Details:
   */
  api.post('/create-customer', (req, res) => {
    if (req.body) {
      let addresses
      if (req.body.addresses) {
        addresses = req.body.addresses.map(address => {
          return {
            email: address.email,
            phone: address.phone,
            address1: address.address1,
            address2: address.address2,
            address3: address.address3,
            address4: address.address4,
            cityUuid: address.city_uuid,
            cityName: address.city_name,
            postalCode: address.postal_code,
            regionUuid: address.region_uuid,
            regionName: address.region_name,
            countryUuid: address.country_uuid,
            firstName: address.first_name,
            lastName: address.last_name,
            description: address.description,
            contactName: address.contact_name,
            isDefaultBilling: address.is_default_billing,
            isDefaultShipping: address.is_default_shipping,
            additionalAttributes: address.additional_attributes
          }
        })
      }
      service.createCustomer({
        token: req.headers.authorization,
        value: req.body.value,
        taxId: req.body.tax_id,
        duns: req.body.duns,
        naics: req.body.naics,
        name: req.body.name,
        lastName: req.body.last_name,
        description: req.body.description,
        businessPartnerGroupUuid: req.body.business_partner_group_uuid,
        posUuid: req.body.pos_uuid,
        additionalAttributes: req.body.additional_attributes,
        addresses
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCustomerFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Update Customer
   *
   * req.query.token - user token
   * req.body.uuid - Business Partner UUID
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.value - value
   * req.body.tax_id - Tax ID
   * req.body.duns - DUNS
   * req.body.naics - NAICS
   * req.body.name - Name
   * req.body.last_name - Last Name
   * req.body.description - Description
   * req.body.contact_name - Contact Name
   * req.body.email - EMail
   * req.body.phone - Phone
   * req.body.address1 - Address 1
   * req.body.address2 - Address 2
   * req.body.address3 - Address 3
   * req.body.address4 - Address 4
   * req.body.city_uuid - City UUID
   * req.body.city_name - City Name
   * req.body.postal_code - Postal Code
   * req.body.region_uuid - Region UUID
   * req.body.region_name - Region Name
   * req.body.country_uuid - Country UUID
   * req.body.pos_uuid - POS UUID
   * Details:
   */
  api.post('/update-customer', (req, res) => {
    if (req.body) {
      let addresses
      if (req.body.addresses) {
        addresses = req.body.addresses.map(address => {
          return {
            email: address.email,
            phone: address.phone,
            address1: address.address1,
            address2: address.address2,
            address3: address.address3,
            address4: address.address4,
            cityUuid: address.city_uuid,
            cityName: address.city_name,
            postalCode: address.postal_code,
            regionUuid: address.region_uuid,
            regionName: address.region_name,
            countryUuid: address.country_uuid,
            firstName: address.first_name,
            lastName: address.last_name,
            description: address.description,
            contactName: address.contact_name,
            isDefaultBilling: address.is_default_billing,
            isDefaultShipping: address.is_default_shipping,
            uuid: address.uuid,
            additionalAttributes: req.body.additional_attributes
          }
        })
      }
      service.updateCustomer({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        uuid: req.body.uuid,
        value: req.body.value,
        taxId: req.body.tax_id,
        duns: req.body.duns,
        naics: req.body.naics,
        name: req.body.name,
        lastName: req.body.last_name,
        description: req.body.description,
        additionalAttributes: req.body.additional_attributes,
        addresses
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCustomerFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET Customer
   *
   * req.query.token - user token
   * req.query.search_value - Search Value
   * req.query.value - Value
   * req.query.name - Name
   * req.query.contact_name - Contact Name
   * req.query.email - EMail
   * req.query.postal_code - Postal Code
   * req.query.phone - Phone
   * Details:
   */
  api.get('/customer', (req, res) => {
    if (req.query) {
      service.getCustomer({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        searchValue: req.query.search_value,
        value: req.query.value,
        name: req.query.name,
        contactName: req.query.contact_name,
        email: req.query.email,
        postalCode: req.query.postal_code,
        phone: req.query.phone
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCustomerFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Customer Bank Account
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.customer_uuid - Customer UUID
   * req.body.pos_uuid - Value
   * req.body.city - City
   * req.body.country - Country
   * req.body.email - EMail
   * req.body.driver_license - Driver Licence
   * req.body.social_security_number - Social Security Number (SSN)
   * req.body.name - Name
   * req.body.state - State
   * req.body.street - Strert
   * req.body.zip - ZIP
   * req.body.bank_account_type - Bank Accoubnt Type
   * req.body.bank_uuid - Bank UUID
   * req.body.is_ach - ACH
   * req.body.address_verified - Address Verified
   * req.body.zip_verified - ZIP Verified
   * req.body.routing_no - Routing No
   * req.body.iban - IBAN
   * req.body.account_no Account No
   * req.body.is_payroll_account - Payroll Account
   * Details:
   */
  api.post('/create-customer-bank-account', (req, res) => {
    if (req.body) {
      service.createCustomerBankAccount({
        token: req.headers.authorization,
        customerUuid: req.body.customer_uuid,
        posUuid: req.body.pos_uuid,
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        driverLicense: req.body.driver_license,
        socialSecurityNumber: req.body.social_security_number,
        name: req.body.name,
        state: req.body.state,
        street: req.body.street,
        zip: req.body.zip,
        bankAccountType: req.body.bank_account_type,
        bankUuid: req.body.bank_uuid,
        isAch: req.body.is_ach,
        addressVerified: req.body.address_verified,
        zipVerified: req.body.zip_verified,
        routingNo: req.body.routing_no,
        iban: req.body.iban,
        accountNo: req.body.account_no,
        isPayrollAccount: req.body.is_payroll_account
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCustomerBankAccountFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Update Customer Bank Account
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.customer_bank_account_uuid - Customer Bank Account UUID
   * req.body.pos_uuid - Value
   * req.body.city - City
   * req.body.country - Country
   * req.body.email - EMail
   * req.body.driver_license - Driver Licence
   * req.body.social_security_number - Social Security Number (SSN)
   * req.body.name - Name
   * req.body.state - State
   * req.body.street - Strert
   * req.body.zip - ZIP
   * req.body.bank_account_type - Bank Accoubnt Type
   * req.body.bank_uuid - Bank UUID
   * req.body.is_ach - ACH
   * req.body.address_verified - Address Verified
   * req.body.zip_verified - ZIP Verified
   * req.body.routing_no - Routing No
   * req.body.iban - IBAN
   * req.body.account_no Account No
   * req.body.is_payroll_account - Payroll Account
   * Details:
   */
  api.post('/update-customer-bank-account', (req, res) => {
    if (req.body) {
      service.createCustomerBankAccount({
        token: req.headers.authorization,
        customerBankAccountUuid: req.body.customer_bank_account_uuid,
        posUuid: req.body.pos_uuid,
        city: req.body.city,
        country: req.body.country,
        email: req.body.email,
        driverLicense: req.body.driver_license,
        socialSecurityNumber: req.body.social_security_number,
        name: req.body.name,
        state: req.body.state,
        street: req.body.street,
        zip: req.body.zip,
        bankAccountType: req.body.bank_account_type,
        bankUuid: req.body.bank_uuid,
        isAch: req.body.is_ach,
        addressVerified: req.body.address_verified,
        zipVerified: req.body.zip_verified,
        routingNo: req.body.routing_no,
        iban: req.body.iban,
        accountNo: req.body.account_no,
        isPayrollAccount: req.body.is_payroll_account
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCustomerBankAccountFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET Customer Bank Account
   *
   * req.query.token - user token
   * req.query.customer_bank_account_uuid - Customer Bank Account UUID
   * req.query.date - Date of Statement
   * Details:
   */
  api.get('/customer-bank-account', (req, res) => {
    if (req.query) {
      service.getCustomerBankAccount({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        customerBankAccountUuid: req.query.customer_bank_account_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCustomerBankAccountFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * DELETE Customer Bank Account
   *
   * req.query.token - user token
   * req.query.date - Date of Statement
   * req.body.customer_bank_account_uuid - Customer Bank Account UUID
   * Details:
   */
  api.post('/delete-bank-account', (req, res) => {
    if (req.query) {
      service.deleteCustomerBankAccount({
        token: req.headers.authorization,
        posUuid: req.body.pos_uuid,
        customerBankAccountUuid: req.body.customer_bank_account_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Customer Bank Accounts
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.customer_uuid - Customer UUID
   * Details:
   */
  api.get('/customer-bank-accounts', (req, res) => {
    if (req.query) {
      service.listCustomerBankAccounts({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        customerUuid: req.query.customer_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getCustomerBankAccountsList().map(customerBankAccount => {
                return convertCustomerBankAccountFromGRPC(customerBankAccount)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET Available Refund
   *
   * req.query.token - user token
   * req.query.pos_uuid - POS UUID
   * req.query.date - Date of Statement
   * Details:
   */
  api.get('/available-refund', (req, res) => {
    if (req.query) {
      service.getAvailableRefund({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        date: req.query.date
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertAvailableRefundGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Sellers
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * req.query.is_only_allocated - Only allocated to current point of sales
   * Details:
   */
  api.get('/available-sellers', (req, res) => {
    if (req.query) {
      service.listAvailableSellers({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        isOnlyAllocated: req.query.is_only_allocated,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getSellersList().map(seller => {
                return convertAvailableSeller(seller)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET get stock item list by skus (comma separated)
   *
   * req.query.skus = url encoded list of the SKUs
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   */
  api.get('/stocks', (req, res) => {
    if (req.query) {
      service.listStocks({
        token: req.headers.authorization,
        value: req.query.value,
        sku: req.query.sku,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              stocks: response.getStocksList().map(stock => {
                return convertStock(stock)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * GET List Available Cash
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.pos_uuid - POS UUID reference
   * Details:
   */
  api.get('/available-cash', (req, res) => {
    if (req.query) {
      service.listAvailableCash({
        token: req.headers.authorization,
        posUuid: req.query.pos_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getCashList().map(cash => {
                return convertAvalableCashFromGRPC(cash)
              })
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  return api;
};
