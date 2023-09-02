/*************************************************************************************
 * Product: ADempiere gRPC Core Functionality Convert Utils                          *
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

const convertCoreFunctionality = {
  convertCountryFromGRPC (countryToConvert) {
    if (!countryToConvert) {
      return undefined;
    }

    const {
      getCurrencyFromGRPC
    } = require('.././utils/coreFunctionalityFromGRPC');
    return {
      id: countryToConvert.getId(),
      uuid: countryToConvert.getUuid(),
      country_code: countryToConvert.getCountryCode(),
      name: countryToConvert.getName(),
      description: countryToConvert.getDescription(),
      has_region: countryToConvert.getHasRegion(),
      region_name: countryToConvert.getRegionName(),
      display_sequence: countryToConvert.getDisplaySequence(),
      is_address_lines_reverse: countryToConvert.getIsAddressLinesReverse(),
      capture_sequence: countryToConvert.getCaptureSequence(),
      display_sequence_local: countryToConvert.getDisplaySequenceLocal(),
      is_address_lines_local_reverse: countryToConvert.getIsAddressLinesLocalReverse(),
      expression_postal: countryToConvert.getExpressionPostal(),
      has_postal_add: countryToConvert.getHasPostalAdd(),
      expression_phone: countryToConvert.getExpressionPhone(),
      media_size: countryToConvert.getMediaSize(),
      expression_bank_routing_no: countryToConvert.getExpressionBankRoutingNo(),
      expression_bank_account_no: countryToConvert.getExpressionBankAccountNo(),
      language: countryToConvert.getLanguage(),
      allow_cities_out_of_list: countryToConvert.getAllowCitiesOutOfList(),
      is_postcode_lookup: countryToConvert.getIsPostcodeLookup(),
      currency: getCurrencyFromGRPC(
        countryToConvert.getCurrency()
      )
    };
  },

  convertOrganizationFromGRPC (organization) {
    if (organization) {
      return {
        id: organization.getId(),
        uuid: organization.getUuid(),
        name: organization.getName(),
        description: organization.getDescription(),
        is_read_only: organization.getIsReadOnly(),
        duns: organization.getDuns(),
        tax_id: organization.getTaxId(),
        phone: organization.getPhone(),
        phone2: organization.getPhone2(),
        fax: organization.getFax(),
        corporate_branding_image: organization.getCorporateBrandingImage()
      };
    }
    return undefined;
  },

  convertWarehouseFromGRPC (warehouseToConvert) {
    if (warehouseToConvert) {
      return {
        id: warehouseToConvert.getId(),
        uuid: warehouseToConvert.getUuid(),
        name: warehouseToConvert.getName(),
        description: warehouseToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertUnitOfMeasureFromGRPC (unitOfMeasureToConvert) {
    if (unitOfMeasureToConvert) {
      return {
        uuid: unitOfMeasureToConvert.getUuid(),
        id: unitOfMeasureToConvert.getId(),
        code: unitOfMeasureToConvert.getCode(),
        symbol: unitOfMeasureToConvert.getSymbol(),
        name: unitOfMeasureToConvert.getName(),
        description: unitOfMeasureToConvert.getDescription(),
        starndard_precision: unitOfMeasureToConvert.getStandardprecision(),
        costing_precision: unitOfMeasureToConvert.getCostingPrecision()
      };
    }
    return undefined;
  },

  convertChargeFromGRPC (chargeToConvert) {
    if (chargeToConvert) {
      return {
        uuid: chargeToConvert.getUuid(),
        id: chargeToConvert.getId(),
        name: chargeToConvert.getName(),
        description: chargeToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertPaymentMethodFromGRPC (paymentMethod) {
    if (paymentMethod) {
      return {
        uuid: paymentMethod.getUuid(),
        id: paymentMethod.getId(),
        name: paymentMethod.getName(),
        description: paymentMethod.getDescription(),
        tender_type: paymentMethod.getTenderType()
      };
    }
    return undefined;
  },

  // Business Partner
  convertBusinessPartnerFromGRPC (businessPartnerToConvert) {
    if (businessPartnerToConvert) {
      return {
        uuid: businessPartnerToConvert.getUuid(),
        id: businessPartnerToConvert.getId(),
        value: businessPartnerToConvert.getValue(),
        tax_id: businessPartnerToConvert.getTaxId(),
        duns: businessPartnerToConvert.getDuns(),
        naics: businessPartnerToConvert.getNaics(),
        name: businessPartnerToConvert.getName(),
        last_name: businessPartnerToConvert.getLastName(),
        description: businessPartnerToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentTypeFromGRPC (documentTypeToConvert) {
    if (documentTypeToConvert) {
      return {
        uuid: documentTypeToConvert.getUuid(),
        id: documentTypeToConvert.getId(),
        name: documentTypeToConvert.getName(),
        print_name: documentTypeToConvert.getPrintName(),
        description: documentTypeToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertSalesRepresentativeFromGRPC (salesRepresentativeToConvert) {
    if (salesRepresentativeToConvert) {
      return {
        uuid: salesRepresentativeToConvert.getUuid(),
        id: salesRepresentativeToConvert.getId(),
        name: salesRepresentativeToConvert.getName(),
        description: salesRepresentativeToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertProductFromGRPC (productToConvert) {
    if (productToConvert) {
      const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');

      return {
        uuid: productToConvert.getUuid(),
        id: productToConvert.getId(),
        value: productToConvert.getValue(),
        name: productToConvert.getName(),
        help: productToConvert.getHelp(),
        document_note: productToConvert.getDocumentNote(),
        uom_name: productToConvert.getUomName(),
        product_type: productToConvert.getProductType(),
        is_stocked: productToConvert.getIsStocked(),
        is_drop_ship: productToConvert.getIsDropShip(),
        is_purchased: productToConvert.getIsPurchased(),
        is_sold: productToConvert.getIsSold(),
        image_url: productToConvert.getImageUrl(),
        product_category_name: productToConvert.getProductCategoryName(),
        product_group_name: productToConvert.getProductGroupName(),
        product_class_name: productToConvert.getProductClassName(),
        product_classification_name: productToConvert.getProductClassificationName(),
        weight: getDecimalFromGRPC(
          productToConvert.getWeight()
        ),
        volume: getDecimalFromGRPC(
          productToConvert.getVolume()
        ),
        upc: productToConvert.getUpc(),
        sku: productToConvert.getSku(),
        shelf_width: productToConvert.getShelfWidth(),
        shelf_height: getDecimalFromGRPC(
          productToConvert.getShelfHeight()
        ),
        shelf_depth: productToConvert.getShelfDepth(),
        units_per_pack: productToConvert.getUnitsPerPack(),
        units_per_pallet: getDecimalFromGRPC(
          productToConvert.getUnitsPerPallet()
        ),
        guarantee_days: productToConvert.getGuaranteeDays(),
        description_url: productToConvert.getDescriptionUrl(),
        version_no: productToConvert.getVersionNo(),
        tax_category: productToConvert.getTaxCategory(),
        description: productToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertTaxRateFromGRPC (taxRate) {
    //  Tax rate
    if (taxRate) {
      const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');

      return {
        name: taxRate.getName(),
        description: taxRate.getDescription(),
        tax_indicator: taxRate.getTaxIndicator(),
        rate: getDecimalFromGRPC(
          taxRate.getRate()
        )
      };
    }
    return undefined;
  },

  convertProductPriceFromGRPC (productPrice) {
    if (productPrice) {
      const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');
      const {
        getCurrencyFromGRPC
      } = require('.././utils/coreFunctionalityFromGRPC');

      return {
        currency: getCurrencyFromGRPC(
          productPrice.getCurrency()
        ),
        tax_rate: convertCoreFunctionality.convertTaxRateFromGRPC(
          productPrice.getTaxRate()
        ),
        product: convertCoreFunctionality.convertProductFromGRPC(
          productPrice.getProduct()
        ),
        price_list: getDecimalFromGRPC(
          productPrice.getPriceList()
        ),
        price_standard: getDecimalFromGRPC(productPrice.getPriceStandard()),
        price_limit: getDecimalFromGRPC(productPrice.getPriceLimit()),
        price_list_name: productPrice.getPriceListName(),
        is_tax_included: productPrice.getIsTaxIncluded(),
        valid_from: productPrice.getValidFrom(),
        price_precision: productPrice.getPricePrecision(),
        quantity_on_hand: getDecimalFromGRPC(
          productPrice.getQuantityOnHand()
        ),
        quantity_reserved: getDecimalFromGRPC(
          productPrice.getQuantityReserved()
        ),
        quantity_ordered: getDecimalFromGRPC(
          productPrice.getQuantityOrdered()
        ),
        quantity_available: getDecimalFromGRPC(
          productPrice.getQuantityAvailable()
        ),
        schema_currency: getCurrencyFromGRPC(
          productPrice.getDisplayCurrency()
        ),
        schema_price_list: getDecimalFromGRPC(
          productPrice.getDisplayPriceList()
        ),
        schema_price_standard: getDecimalFromGRPC(
          productPrice.getDisplayPriceStandard()
        ),
        schema_price_limit: getDecimalFromGRPC(
          productPrice.getDisplayPriceLimit()
        ),
        conversion_rate: convertCoreFunctionality.convertConversionRateFromGRPC(
          productPrice.getConversionRate()
        )
      };
    }
    return undefined;
  },

  convertLanguageFromGRPC (language) {
    if (language) {
      return {
        language: language.getLanguage(),
        language_name: language.getLanguageName(),
        language_iso: language.getLanguageIso(),
        country_code: language.getCountryCode(),
        is_base_language: language.getIsBaseLanguage(),
        is_system_language: language.getIsSystemLanguage(),
        is_decimal_point: language.getIsDecimalPoint(),
        date_pattern: language.getDatePattern(),
        time_pattern: language.getTimePattern()
      };
    }
    return undefined;
  },

  convertPriceListFromGRPC (priceListToConvert) {
    if (!priceListToConvert) {
      return undefined;
    }

    const {
      getCurrencyFromGRPC
    } = require('.././utils/coreFunctionalityFromGRPC');
    return {
      uuid: priceListToConvert.getUuid(),
      id: priceListToConvert.getId(),
      name: priceListToConvert.getName(),
      description: priceListToConvert.getDescription(),
      currency: getCurrencyFromGRPC(
        priceListToConvert.getCurrency()
      ),
      is_default: priceListToConvert.getIsDefault(),
      is_tax_included: priceListToConvert.getIsTaxIncluded(),
      is_enforce_price_limit: priceListToConvert.getIsEnforcePriceLimit(),
      is_net_price: priceListToConvert.getIsNetPrice(),
      price_precision: priceListToConvert.getPricePrecision()
    };
  },

  convertBankAccountFromGRPC (bankAccount) {
    if (!bankAccount) {
      return undefined;
    }
    const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');
    const { getBankAccount_BankAccountType } = require('./convertEnums.js');
    const {
      getCurrencyFromGRPC
    } = require('.././utils/coreFunctionalityFromGRPC');

    return {
      uuid: bankAccount.getUuid(),
      id: bankAccount.getId(),
      name: bankAccount.getName(),
      account_no: bankAccount.getAccountNo(),
      description: bankAccount.getDescription(),
      currency: getCurrencyFromGRPC(
        bankAccount.getCurrency()
      ),
      bban: bankAccount.getBban(),
      iban: bankAccount.getIban(),
      credit_limit: getDecimalFromGRPC(
        bankAccount.getCreditLimit()
      ),
      current_balance: getDecimalFromGRPC(
        bankAccount.getCurrentBalance()
      ),
      is_default: bankAccount.getIsDefault(),
      business_partner: convertCoreFunctionality.convertBusinessPartnerFromGRPC(
        bankAccount.getBusinessPartner()
      ),
      bank_account_type: bankAccount.getBankAccountType(),
      bank_account_type_name: getBankAccount_BankAccountType({
        value: bankAccount.getBankAccountType()
      })
    };
  },

  convertConversionRateFromGRPC (conversionRate) {
    if (conversionRate) {
      const { getDecimalFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');
      const {
        getCurrencyFromGRPC
      } = require('.././utils/coreFunctionalityFromGRPC');

      return {
        uuid: conversionRate.getUuid(),
        id: conversionRate.getId(),
        conversion_type_uuid: conversionRate.getConversionTypeUuid(),
        valid_from: conversionRate.getValidFrom(),
        valid_to: conversionRate.getValidTo(),
        currency_from: getCurrencyFromGRPC(
          conversionRate.getCurrencyFrom()
        ),
        currency_to: getCurrencyFromGRPC(
          conversionRate.getCurrencyTo()
        ),
        multiply_rate: getDecimalFromGRPC(
          conversionRate.getMultiplyRate()
        ),
        divide_rate: getDecimalFromGRPC(
          conversionRate.getDivideRate()
        )
      };
    }
    return undefined;
  }

};

module.exports = convertCoreFunctionality;
