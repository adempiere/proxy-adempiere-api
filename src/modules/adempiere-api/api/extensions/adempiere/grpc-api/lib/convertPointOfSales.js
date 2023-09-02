/*************************************************************************************
 * Product: ADempiere gRPC Point Of Sales Client Convert Utils                       *
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                   *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const convertUtils = {

  // Customer
  convertCustomerFromGRPC (customer) {
    if (customer) {
      const { getValuesMapFromGRPC } = require('.././utils/valueUtilsFromGRPC.js');
      return {
        uuid: customer.getUuid(),
        id: customer.getId(),
        value: customer.getValue(),
        tax_id: customer.getTaxId(),
        duns: customer.getDuns(),
        naics: customer.getNaics(),
        name: customer.getName(),
        last_name: customer.getLastName(),
        description: customer.getDescription(),
        addresses: customer.getAddressesList()
          .map(address => {
            return convertUtils.convertCustomerAddressFromGRPC(address)
          }
          ),
        additional_attributes: getValuesMapFromGRPC({
          mapToConvert: customer.getAdditionalAttributesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  // Customer Bank Account
  convertCustomerBankAccountFromGRPC (customerBankAccount) {
    if (customerBankAccount) {
      return {
        customer_uuid: customerBankAccount.getCustomerUuid(),
        customer_bank_account_uuid: customerBankAccount.getCustomerBankAccountUuid(),
        city: customerBankAccount.getCity(),
        country: customerBankAccount.getCountry(),
        email: customerBankAccount.getEmail(),
        driver_license: customerBankAccount.getDriverLicense(),
        social_security_number: customerBankAccount.getSocialSecurityNumber(),
        name: customerBankAccount.getName(),
        state: customerBankAccount.getState(),
        street: customerBankAccount.getStreet(),
        zip: customerBankAccount.getZip(),
        bank_account_type: customerBankAccount.getBankAccountType(),
        bank_uuid: customerBankAccount.getBankUuid(),
        is_ach: customerBankAccount.getIsAch(),
        address_verified: customerBankAccount.getAddressVerified(),
        zip_verified: customerBankAccount.getZipVerified(),
        routing_no: customerBankAccount.getRoutingNo(),
        iban: customerBankAccount.getIban(),
        is_payroll_account: customerBankAccount.getIsPayrollAccount(),
        account_no: customerBankAccount.getAccountNo()
      }
    }
    return undefined;
  },

  convertCustomerAddressFromGRPC (address) {
    if (address) {
      let region
      let city
      if (address.getRegion()) {
        region = {
          id: address.getRegion().getId(),
          uuid: address.getRegion().getUuid(),
          name: address.getRegion().getName()
        }
      }
      if (address.getCity()) {
        city = {
          id: address.getCity().getId(),
          uuid: address.getCity().getUuid(),
          name: address.getCity().getName()
        }
      }
      const { getValuesMapFromGRPC } = require('.././utils/valueUtilsFromGRPC.js');
      return {
        id: address.getId(),
        uuid: address.getUuid(),
        region,
        country_code: address.getCountryCode(),
        country_uuid: address.getCountryUuid(),
        country_id: address.getCountryId(),
        address_1: address.getAddress1(),
        address_2: address.getAddress2(),
        address_3: address.getAddress3(),
        address_4: address.getAddress4(),
        phone: address.getPhone(),
        postal_code: address.getPostalCode(),
        city,
        is_default_shipping: address.getIsDefaultShipping(),
        is_default_billing: address.getIsDefaultBilling(),
        contact_name: address.getContactName(),
        email: address.getEmail(),
        description: address.getDescription(),
        first_name: address.getFirstName(),
        last_name: address.getLastName(),
        additional_attributes: getValuesMapFromGRPC({
          mapToConvert: address.getAdditionalAttributesMap(),
          returnType: 'object'
        })
      }
    }
    return undefined;
  },

  // Convert available warehouse from gRPC to JSON
  convertAvailableWarehouse (availableWarehouse) {
    if (availableWarehouse) {
      return {
        id: availableWarehouse.getId(),
        uuid: availableWarehouse.getUuid(),
        key: availableWarehouse.getKey(),
        name: availableWarehouse.getName(),
        is_pos_required_pin: availableWarehouse.getIsPosRequiredPin()
      }
    }
    return undefined;
  },

  convertAvailableSeller (availableSeller) {
    if (availableSeller) {
      return {
        id: availableSeller.getId(),
        uuid: availableSeller.getUuid(),
        name: availableSeller.getName(),
        description: availableSeller.getDescription(),
        comments: availableSeller.getComments(),
        image: availableSeller.getImage()
      }
    }
    return undefined;
  },

  // Convert cash summary movements from gRPC to JSON
  convertCashSummaryMovements (movement) {
    const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');
    const { getCurrencyFromGRPC } = require('.././utils/coreFunctionalityFromGRPC');

    if (movement) {
      return {
        payment_method_uuid: movement.getPaymentMethodUuid(),
        payment_method_name: movement.getPaymentMethodName(),
        tender_type_code: movement.getTenderTypeCode(),
        currency: getCurrencyFromGRPC(
          movement.getCurrency()
        ),
        amount: getDecimalFromGRPC(
          movement.getAmount()
        ),
        is_refund: movement.getIsRefund()
      }
    }
    return undefined;
  },

  // Convert cash summary movements from gRPC to JSON
  convertCashMovements (movement) {
    if (!movement) {
      return undefined;
    }
    const { convertChargeFromGRPC, convertSalesRepresentativeFromGRPC, convertPaymentMethodFromGRPC, convertDocumentTypeFromGRPC } = require('./convertCoreFunctionality.js');
    const { convertDocumentStatusFromGRPC } = require('./convertBaseDataType.js');
    const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');
    const {
      getCurrencyFromGRPC
    } = require('.././utils/coreFunctionalityFromGRPC');

    return {
      id: movement.getId(),
      uuid: movement.getUuid(),
      document_no: movement.getDocumentNo(),
      reference_no: movement.getReferenceNo(),
      description: movement.getDescription(),
      tender_type_code: movement.getTenderTypeCode(),
      currency: getCurrencyFromGRPC(
        movement.getCurrency()
      ),
      amount: getDecimalFromGRPC(
        movement.getAmount()
      ),
      converted_amount: getDecimalFromGRPC(
        movement.getConvertedAmount()
      ),
      customer: convertUtils.convertCustomerFromGRPC(
        movement.getCustomer()
      ),
      charge: convertChargeFromGRPC(
        movement.getCharge()
      ),
      payment_method: convertPaymentMethodFromGRPC(
        movement.getPaymentMethod()
      ),
      document_type: convertDocumentTypeFromGRPC(
        movement.getDocumentType()
      ),
      collecting_agent: convertSalesRepresentativeFromGRPC(
        movement.getCollectingAgent()
      ),
      document_status: convertDocumentStatusFromGRPC(
        movement.getDocumentStatus()
      ),
      payment_date: new Date(movement.getPaymentDate()),
      payment_account_date: new Date(movement.getPaymentAccountDate()),
      is_refund: movement.getIsRefund()
    };
  },

  //  Cash Closing
  convertCashClosing (cashClosing) {
    const { convertDocumentStatusFromGRPC } = require('./convertBaseDataType.js');
    const { convertDocumentTypeFromGRPC } = require('./convertCoreFunctionality.js');
    if (cashClosing) {
      return {
        id: cashClosing.getId(),
        uuid: cashClosing.getUuid(),
        document_no: cashClosing.getDocumentNo(),
        document_type: convertDocumentTypeFromGRPC(
          cashClosing.getDocumentType()
        ),
        document_status: convertDocumentStatusFromGRPC(
          cashClosing.getDocumentStatus()
        ),
        description: cashClosing.getDescription()
      }
    }
    return undefined;
  },

  // Convert available price list from gRPC to JSON
  convertAvailablePriceList (availablePriceList) {
    if (availablePriceList) {
      return {
        id: availablePriceList.getId(),
        uuid: availablePriceList.getUuid(),
        key: availablePriceList.getKey(),
        name: availablePriceList.getName(),
        is_pos_required_pin: availablePriceList.getIsPosRequiredPin()
      }
    }
    return undefined;
  },

  // Convert available document type from gRPC to JSON
  convertAvailableDocumentType (availableDocumentType) {
    if (availableDocumentType) {
      return {
        id: availableDocumentType.getId(),
        uuid: availableDocumentType.getUuid(),
        key: availableDocumentType.getKey(),
        name: availableDocumentType.getName(),
        is_pos_required_pin: availableDocumentType.getIsPosRequiredPin()
      }
    }
    return undefined;
  },

  convertShipmentFromGRPC (shipment) {
    if (shipment) {
      const {
        convertDocumentStatusFromGRPC
      } = require('./convertBaseDataType.js');
      const {
        convertDocumentTypeFromGRPC,
        convertSalesRepresentativeFromGRPC,
        convertWarehouseFromGRPC
      } = require('./convertCoreFunctionality.js');

      return {
        uuid: shipment.getUuid(),
        id: shipment.getId(),
        document_no: shipment.getDocumentNo(),
        document_type: convertDocumentTypeFromGRPC(
          shipment.getDocumentType()
        ),
        sales_representative: convertSalesRepresentativeFromGRPC(
          shipment.getSalesRepresentative()
        ),
        warehouse: convertWarehouseFromGRPC(
          shipment.getWarehouse()
        ),
        document_status: convertDocumentStatusFromGRPC(
          shipment.getDocumentStatus()
        ),
        movement_date: new Date(shipment.getMovementDate())
      };
    }
    return undefined;
  },

  convertAvailableRefundGRPC (availableRefund) {
    if (availableRefund) {
      const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');

      return {
        refund: getDecimalFromGRPC(
          availableRefund.getRefund()
        ),
        tender_type_refunds: availableRefund.getTenderTypeRefundsList()
          .map(tenderTypeRefund => {
            return {
              tender_type: tenderTypeRefund.getTenderType(),
              refund: getDecimalFromGRPC(
                tenderTypeRefund.getRefund()
              )
            }
          })
      };
    }
    return undefined;
  },

  convertKeyFromGRPC (key) {
    if (key) {
      const {
        getDecimalFromGRPC,
        getResourceReferenceFromGRPC
      } = require('.././utils/baseDataTypeFromGRPC.js');

      return {
        uuid: key.getUuid(),
        id: key.getId(),
        name: key.getName(),
        description: key.getDescription(),
        sub_key_layout_uuid: key.getSubKeyLayoutUuid(),
        color: key.getColor(),
        sequence: key.getSequence(),
        span_x: key.getSpanX(),
        span_y: key.getSpanY(),
        product_value: key.getProductValue(),
        quantity: getDecimalFromGRPC(
          key.getQuantity()
        ),
        resource_reference: getResourceReferenceFromGRPC(
          key.getResourceReference()
        )
      };
    }
    return undefined;
  },

  convertKeyLayoutFromGRPC (keyLayout) {
    if (keyLayout) {
      return {
        uuid: keyLayout.getUuid(),
        id: keyLayout.getId(),
        name: keyLayout.getName(),
        description: keyLayout.getDescription(),
        help: keyLayout.getHelp(),
        layout_type: keyLayout.getLayoutType(),
        columns: keyLayout.getColumns(),
        color: keyLayout.getColor(),
        keys: keyLayout.getKeysList()
          .map(itemKey => {
            return convertUtils.convertKeyFromGRPC(itemKey)
          })
      };
    }
    return undefined;
  }

}

module.exports = convertUtils;
