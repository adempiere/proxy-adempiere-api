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

import { getDecimalFromGRPC } from '@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js';
import { getLookupItemFromGRPC } from '@adempiere/grpc-api/src/utils/userInterfaceFromGRPC';

function getBusinessPartnerFromGRPC (businessPartnerToConvert) {
  if (!businessPartnerToConvert) {
    return undefined;
  }
  return {
    id: businessPartnerToConvert.getId(),
    uuid: businessPartnerToConvert.getUuid(),
    value: businessPartnerToConvert.getValue(),
    tax_id: businessPartnerToConvert.getTaxId(),
    name: businessPartnerToConvert.getName(),
    description: businessPartnerToConvert.getDescription()
  };
}

function getOrganizationFromGRPC (organizationToConvert) {
  if (!organizationToConvert) {
    return undefined;
  }
  return {
    id: organizationToConvert.getId(),
    uuid: organizationToConvert.getUuid(),
    value: organizationToConvert.getValue(),
    name: organizationToConvert.getName()
  };
}

function getCurrencyFromGRPC (currencyToConvert) {
  if (!currencyToConvert) {
    return undefined;
  }
  return {
    id: currencyToConvert.getId(),
    uuid: currencyToConvert.getUuid(),
    iso_code: currencyToConvert.getIsoCode(),
    description: currencyToConvert.getDescription()
  };
}

function getTransactionTypeFromGRPC (transactionTypeToConvert) {
  if (!transactionTypeToConvert) {
    return undefined;
  }
  return {
    id: transactionTypeToConvert.getId(),
    uuid: transactionTypeToConvert.getUuid(),
    value: transactionTypeToConvert.getValue(),
    name: transactionTypeToConvert.getName(),
    description: transactionTypeToConvert.getDescription()
  };
}

function getPaymentFromGRPC (paymentToConvert) {
  if (!paymentToConvert) {
    return undefined;
  }
  return {
    id: paymentToConvert.getId(),
    uuid: paymentToConvert.getUuid(),
    transaction_date: paymentToConvert.getTransactionDate(),
    is_receipt: paymentToConvert.getIsReceipt(),
    document_no: paymentToConvert.getDocumentNo(),
    transaction_type: getTransactionTypeFromGRPC(
      paymentToConvert.getTransactionType()
    ),
    organization: getOrganizationFromGRPC(
      paymentToConvert.getDescription()
    ),
    business_partner: getBusinessPartnerFromGRPC(
      paymentToConvert.getBusinessPartner()
    ),
    description: paymentToConvert.getDescription(),
    currency: getCurrencyFromGRPC(
      paymentToConvert.getCurrency()
    ),
    payment_amount: getDecimalFromGRPC(
      paymentToConvert.getPaymentAmount()
    ),
    converted_amount: getDecimalFromGRPC(
      paymentToConvert.getConvertedAmount()
    ),
    open_amount: getDecimalFromGRPC(
      paymentToConvert.getOpenAmount()
    )
  };
}

function getInvoiceFromGRPC (invoiceToConvert) {
  if (!invoiceToConvert) {
    return undefined;
  }
  return {
    id: invoiceToConvert.getId(),
    uuid: invoiceToConvert.getUuid(),
    is_sales_transaction: invoiceToConvert.getIsSalesTransaction(),
    is_receipt: invoiceToConvert.getIsReceipt(),
    document_no: invoiceToConvert.getDocumentNo(),
    transaction_type: getTransactionTypeFromGRPC(
      invoiceToConvert.getTransactionType()
    ),
    organization: getOrganizationFromGRPC(
      invoiceToConvert.getDescription()
    ),
    business_partner: getBusinessPartnerFromGRPC(
      invoiceToConvert.getBusinessPartner()
    ),
    description: invoiceToConvert.getDescription(),
    currency: getCurrencyFromGRPC(
      invoiceToConvert.getCurrency()
    ),
    original_amount: getDecimalFromGRPC(
      invoiceToConvert.getOriginalAmount()
    ),
    converted_amount: getDecimalFromGRPC(
      invoiceToConvert.getConvertedAmount()
    ),
    open_amount: getDecimalFromGRPC(
      invoiceToConvert.getOpenAmount()
    ),
    discount_amount: getDecimalFromGRPC(
      invoiceToConvert.getDiscountAmount()
    )
  };
}

function getChargeFromGRPC (chargeToConvert) {
  if (!chargeToConvert) {
    return undefined;
  }
  return {
    id: chargeToConvert.getId(),
    uuid: chargeToConvert.getUuid(),
    name: chargeToConvert.getName(),
    description: chargeToConvert.getDescription(),
    amount: getDecimalFromGRPC(
      chargeToConvert.getAmount()
    )
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/paymentAllocation');
  const service = new ServiceApi(config);

  api.get('/business-partners', (req, res) => {
    service.listBusinessPartners({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(businessPartner => {
              return getLookupItemFromGRPC(businessPartner);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/organizations', (req, res) => {
    service.listOrganizations({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(organization => {
              return getLookupItemFromGRPC(organization);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/currencies', (req, res) => {
    service.listCurrencies({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(currency => {
              return getLookupItemFromGRPC(currency);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/transaction-types', (req, res) => {
    service.listTransactionTypes({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(transactionType => {
              return getLookupItemFromGRPC(transactionType);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/payments', (req, res) => {
    service.listPayments({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      businessPartnerId: req.query.business_partner_id,
      businessPartnerUuid: req.query.business_partner_uuid,
      date: req.query.date,
      organizationId: req.query.organization_id,
      organizationUuid: req.query.organization_uuid,
      currencyId: req.query.currency_id,
      currencyUuid: req.query.currency_uuid,
      isMultiCurrency: req.query.is_multi_currency,
      transactionType: req.query.transaction_type,
      isAutomaticWriteOff: req.query.is_automatic_write_off,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(payment => {
              return getPaymentFromGRPC(payment);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/invoices', (req, res) => {
    service.listInvoices({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      businessPartnerId: req.query.business_partner_id,
      businessPartnerUuid: req.query.business_partner_uuid,
      date: req.query.date,
      organizationId: req.query.organization_id,
      organizationUuid: req.query.organization_uuid,
      currencyId: req.query.currency_id,
      currencyUuid: req.query.currency_uuid,
      isMultiCurrency: req.query.is_multi_currency,
      transactionType: req.query.transaction_type,
      isAutomaticWriteOff: req.query.is_automatic_write_off,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(invoice => {
              return getInvoiceFromGRPC(invoice);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/charges', (req, res) => {
    service.listCharges({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(charge => {
              return getLookupItemFromGRPC(charge);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/transaction-organizations', (req, res) => {
    service.listTransactionOrganizations({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      // Page Data
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(organization => {
              return getLookupItemFromGRPC(organization);
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/calculate-difference', (req, res) => {
    service.calculateDifference({
      token: req.headers.authorization,
      // DSL Query
      paymentSelectionsList: req.body.payment_selections,
      invoiceSelectionList: req.body.invoice_selections
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getDecimalFromGRPC(
            response.getDifference()
          )
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.post('/process-receipt', (req, res) => {
    service.processReceipt({
      token: req.headers.authorization,
      // DSL Query
      businessPartnerId: req.body.business_partner_id,
      businessPartnerUuid: req.body.business_partner_uuid,
      currencyId: req.body.currency_id,
      currencyUuid: req.body.currency_uuid,
      chargeId: req.body.charge_id,
      chargeUuid: req.body.charge_uuid,
      transactionOrganizationId: req.body.transaction_organization_id,
      transactionOrganizationUuid: req.body.transaction_organization_uuid,
      date: req.body.date,
      description: req.body.description,
      paymentSelectionsList: req.body.payment_selections,
      invoiceSelectionList: req.body.invoice_selections
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: response.getMessage()
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  return api;
};
