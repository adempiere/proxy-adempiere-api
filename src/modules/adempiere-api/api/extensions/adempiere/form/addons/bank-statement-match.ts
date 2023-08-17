/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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

function getBankAccountFromGRPC (bankAccountToConvert) {
  if (!bankAccountToConvert) {
    return undefined
  }
  console.log(bankAccountToConvert.getCurrency())
  const { getDecimalFromGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js');
  return {
    id: bankAccountToConvert.getId(),
    uuid: bankAccountToConvert.getUuid(),
    account_no: bankAccountToConvert.getAccountNo(),
    account_name: bankAccountToConvert.getAccountName(),
    bank_name: bankAccountToConvert.getBankName(),
    currency: getCurrencyFromGRPC(
      bankAccountToConvert.getCurrency()
    ),
    current_balance: getDecimalFromGRPC(
      bankAccountToConvert.getCurrentBalance()
    )
  };
}

function getBankStatementFromGRPC (bankStatementToConvert) {
  if (!bankStatementToConvert) {
    return undefined;
  }
  return {
    id: bankStatementToConvert.getId(),
    uuid: bankStatementToConvert.getUuid(),
    bank_account: getBankAccountFromGRPC(
      bankStatementToConvert.getBankAccount()
    ),
    document_no: bankStatementToConvert.getDocumentNo(),
    name: bankStatementToConvert.getName(),
    statement_date: bankStatementToConvert.getStatementDate(),
    description: bankStatementToConvert.getDescription(),
    is_manual: bankStatementToConvert.getIsManual(),
    document_status: bankStatementToConvert.getDocumentStatus(),
    is_processed: bankStatementToConvert.getIsProcessed(),
    beginning_balance: getDecimalFromGRPC(
      bankStatementToConvert.getBeginningBalance()
    ),
    statement_difference: getDecimalFromGRPC(
      bankStatementToConvert.getStatementDifference()
    ),
    ending_balance: getDecimalFromGRPC(
      bankStatementToConvert.getEndingBalance()
    )
  };
}

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

function getTenderTypeFromGRPC (tenderTypeToConvert) {
  if (!tenderTypeToConvert) {
    return undefined;
  }
  return {
    id: tenderTypeToConvert.getId(),
    uuid: tenderTypeToConvert.getUuid(),
    value: tenderTypeToConvert.getValue(),
    name: tenderTypeToConvert.getName(),
    description: tenderTypeToConvert.getDescription()
  };
}

function getImportedBankMovementFromGRPC (importedBankMovementToConvert) {
  if (!importedBankMovementToConvert) {
    return undefined;
  }
  return {
    id: importedBankMovementToConvert.getId(),
    uuid: importedBankMovementToConvert.getUuid(),
    transaction_date: importedBankMovementToConvert.getTransactionDate(),
    is_receipt: importedBankMovementToConvert.getIsReceipt(),
    reference_no: importedBankMovementToConvert.getReferenceNo(),
    memo: importedBankMovementToConvert.getMemo(),
    business_partner: getBusinessPartnerFromGRPC(
      importedBankMovementToConvert.getBusinessPartner()
    ),
    currency: getCurrencyFromGRPC(
      importedBankMovementToConvert.getCurrency()
    ),
    amount: getDecimalFromGRPC(
      importedBankMovementToConvert.getAmount()
    )
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
    description: paymentToConvert.getDescription(),
    business_partner: getBusinessPartnerFromGRPC(
      paymentToConvert.getBusinessPartner()
    ),
    tender_type: getTenderTypeFromGRPC(
      paymentToConvert.getTenderType()
    ),
    currency: getCurrencyFromGRPC(
      paymentToConvert.getCurrency()
    ),
    amount: getDecimalFromGRPC(
      paymentToConvert.getAmount()
    )
  };
}

function getMatchingMovementFromGRPC (matchingMovementToConvert) {
  if (!matchingMovementToConvert) {
    return undefined;
  }
  return {
    id: matchingMovementToConvert.getId(),
    uuid: matchingMovementToConvert.getUuid(),
    transaction_date: matchingMovementToConvert.getTransactionDate(),
    is_receipt: matchingMovementToConvert.getIsReceipt(),
    document_no: matchingMovementToConvert.getDocumentNo(),
    payment_id: matchingMovementToConvert.getPaymentId(),
    reference_no: matchingMovementToConvert.getReferenceNo(),
    description: matchingMovementToConvert.getDescription(),
    memo: matchingMovementToConvert.getMemo(),
    business_partner: getBusinessPartnerFromGRPC(
      matchingMovementToConvert.getBusinessPartner()
    ),
    tender_type: getTenderTypeFromGRPC(
      matchingMovementToConvert.getTenderType()
    ),
    currency: getCurrencyFromGRPC(
      matchingMovementToConvert.getCurrency()
    ),
    amount: getDecimalFromGRPC(
      matchingMovementToConvert.getAmount()
    ),
    is_automatic: matchingMovementToConvert.getIsAutomatic(),
    payment_amount: getDecimalFromGRPC(
      matchingMovementToConvert.getPaymentAmount()
    ),
    payment_date: matchingMovementToConvert.getPaymentDate()
  };
}

function getResultMovementFromGRPC (resultMovementToConvert) {
  if (!resultMovementToConvert) {
    return undefined;
  }
  return {
    id: resultMovementToConvert.getId(),
    uuid: resultMovementToConvert.getUuid(),
    transaction_date: resultMovementToConvert.getTransactionDate(),
    is_receipt: resultMovementToConvert.getIsReceipt(),
    document_no: resultMovementToConvert.getDocumentNo(),
    payment_id: resultMovementToConvert.getPaymentId(),
    reference_no: resultMovementToConvert.getReferenceNo(),
    description: resultMovementToConvert.getDescription(),
    memo: resultMovementToConvert.getMemo(),
    business_partner: getBusinessPartnerFromGRPC(
      resultMovementToConvert.getBusinessPartner()
    ),
    tender_type: getTenderTypeFromGRPC(
      resultMovementToConvert.getTenderType()
    ),
    currency: getCurrencyFromGRPC(
      resultMovementToConvert.getCurrency()
    ),
    amount: getDecimalFromGRPC(
      resultMovementToConvert.getAmount()
    ),
    is_automatic: resultMovementToConvert.getIsAutomatic(),
    payment_amount: getDecimalFromGRPC(
      resultMovementToConvert.getPaymentAmount()
    ),
    payment_date: resultMovementToConvert.getPaymentDate()
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/bankStatementMatch');
  const service = new ServiceApi(config);

  api.get('/bank-statement', (req, res) => {
    service.getBankStatement({
      token: req.headers.authorization,
      //  DSL Query
      id: req.query.id,
      uuid: req.query.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: getBankStatementFromGRPC(response)
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  api.get('/bank-statements', (req, res) => {
    service.listBankStatements({
      token: req.headers.authorization,
      //  DSL Query
      bankAccountId: req.query.bank_account_id,
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
            records: response.getRecordsList().map(bankStatement => {
              return getBankStatementFromGRPC(bankStatement);
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

  api.get('/bank-accounts', (req, res) => {
    service.listBankAccounts({
      token: req.headers.authorization,
      //  DSL Query
      searchValue: req.query.search_value,
      pageSize: req.query.page_size,
      pageToken: req.query.page_token
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(bankAccount => {
              return getLookupItemFromGRPC(bankAccount);
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

  api.get('/search-modes', (req, res) => {
    service.listSearchModes({
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
            records: response.getRecordsList().map(searchMode => {
              return getLookupItemFromGRPC(searchMode);
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

  api.get('/imported-bank-movements', (req, res) => {
    service.listImportedBankMovements({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      bankAccountId: req.query.bank_account_id,
      paymnetAmountFrom: req.query.payment_amount_from,
      paymentAmountTo: req.query.payment_amount_to,
      transactionDateFrom: req.query.transaction_date_from,
      transactionDateTo: req.query.transaction_date_to,
      matchMode: req.query.match_mode,
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
            records: response.getRecordsList().map(bankMovement => {
              return getImportedBankMovementFromGRPC(bankMovement);
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
      bankStatementId: req.query.bank_statement_id,
      bankAccountId: req.query.bank_account_id,
      businessPartnerId: req.query.business_partner_id,
      paymnetAmountFrom: req.query.payment_amount_from,
      paymentAmountTo: req.query.payment_amount_to,
      transactionDateFrom: req.query.transaction_date_from,
      transactionDateTo: req.query.transaction_date_to,
      matchMode: req.query.match_mode,
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

  api.get('/matching-movements', (req, res) => {
    service.listMatchingMovements({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      bankStatementId: req.query.bank_statement_id,
      bankAccountId: req.query.bank_account_id,
      businessPartnerId: req.query.business_partner_id,
      paymnetAmountFrom: req.query.payment_amount_from,
      paymentAmountTo: req.query.payment_amount_to,
      transactionDateFrom: req.query.transaction_date_from,
      transactionDateTo: req.query.transaction_date_to,
      matchMode: req.query.match_mode,
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
              return getMatchingMovementFromGRPC(payment);
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

  api.get('/result-movements', (req, res) => {
    service.listResultMovements({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.query.search_value,
      bankStatementId: req.query.bank_statement_id,
      bankAccountId: req.query.bank_account_id,
      paymnetAmountFrom: req.query.payment_amount_from,
      paymentAmountTo: req.query.payment_amount_to,
      transactionDateFrom: req.query.transaction_date_from,
      transactionDateTo: req.query.transaction_date_to,
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
            records: response.getRecordsList().map(bankMovement => {
              return getResultMovementFromGRPC(bankMovement);
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

  api.put('/match', (req, res) => {
    service.matchPayments({
      token: req.headers.authorization,
      // DSL Query
      keyMatchesList: req.body.key_matches
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            message: response.getMessage()
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

  api.put('/unmatch', (req, res) => {
    service.unmatchPayments({
      token: req.headers.authorization,
      // DSL Query
      importedMovementsIdsList: req.body.imported_movements_ids
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            message: response.getMessage()
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

  api.post('/process', (req, res) => {
    service.processMovements({
      token: req.headers.authorization,
      // DSL Query
      searchValue: req.body.search_value,
      bankStatementId: req.body.bank_statement_id,
      bankAccountId: req.body.bank_account_id,
      paymnetAmountFrom: req.body.payment_amount_from,
      paymentAmountTo: req.body.payment_amount_to,
      transactionDateFrom: req.body.transaction_date_from,
      transactionDateTo: req.body.transaction_date_to
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            message: response.getMessage()
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

  return api;
};
