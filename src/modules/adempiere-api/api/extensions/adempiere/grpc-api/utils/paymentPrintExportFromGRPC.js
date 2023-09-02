/*************************************************************************************
 * Product: ADempiere gRPC Paymemt Print Export Client Convert Utils                 *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

function getBankAccountFromGRPC (bankAccountToConvert) {
  if (!bankAccountToConvert) {
    return undefined
  }
  const { getDecimalFromGRPC } = require('./baseDataTypeFromGRPC.js');
  return {
    id: bankAccountToConvert.getId(),
    uuid: bankAccountToConvert.getUuid(),
    account_no: bankAccountToConvert.getAccountNo(),
    account_name: bankAccountToConvert.getAccountName(),
    bank_name: bankAccountToConvert.getBankName(),
    current_balance: getDecimalFromGRPC(
      bankAccountToConvert.getCurrentBalance()
    )
  };
}

function getPaymentSelectionFromGRPC (paymentSelectionToConvert) {
  if (!paymentSelectionToConvert) {
    return undefined
  }
  const { getCurrencyFromGRPC } = require('./coreFunctionalityFromGRPC');
  const { getDecimalFromGRPC } = require('./baseDataTypeFromGRPC.js');
  return {
    id: paymentSelectionToConvert.getId(),
    uuid: paymentSelectionToConvert.getUuid(),
    document_no: paymentSelectionToConvert.getDocumentNo(),
    bank_account: getBankAccountFromGRPC(
      paymentSelectionToConvert.getBankAccount()
    ),
    payment_amount: getDecimalFromGRPC(
      paymentSelectionToConvert.getPaymentAmount()
    ),
    payment_quantity: paymentSelectionToConvert.getPaymentQuantity(),
    currency: getCurrencyFromGRPC(
      paymentSelectionToConvert.getCurrency()
    )
  }
}

function getPaymentFromGRPC (paymentToConvert) {
  if (!paymentToConvert) {
    return undefined
  }
  const { getDecimalFromGRPC } = require('./baseDataTypeFromGRPC.js');
  return {
    id: paymentToConvert.getId(),
    uuid: paymentToConvert.getUuid(),
    document_no: paymentToConvert.getDocumentNo(),
    vendor_id: paymentToConvert.getVendorId(),
    vendor_uuid: paymentToConvert.getVendorUuid(),
    vendor_tax_id: paymentToConvert.getVendorTaxId(),
    vendor_name: paymentToConvert.getVendorName(),
    grand_total: getDecimalFromGRPC(
      paymentToConvert.getGrandTotal()
    ),
    over_under_amount: getDecimalFromGRPC(
      paymentToConvert.getOverUnderAmount()
    ),
    payment_amount: getDecimalFromGRPC(
      paymentToConvert.getPaymentAmount()
    ),
    open_amount: getDecimalFromGRPC(
      paymentToConvert.getOpenAmount()
    ),
    final_balance: getDecimalFromGRPC(
      paymentToConvert.getFinalBalance()
    )
  }
}

function getProcessFromGRPC (processToConvert) {
  if (!processToConvert) {
    return undefined
  }
  const { getReportOutputFromGRPC } = require('./baseDataTypeFromGRPC')
  return {
    report_output: getReportOutputFromGRPC(
      processToConvert.getReportOutput()
    )
  }
}

function getExportFromGRPC (exportToConvert) {
  if (!exportToConvert) {
    return undefined
  }
  const { getReportOutputFromGRPC } = require('./baseDataTypeFromGRPC')
  return {
    report_output: getReportOutputFromGRPC(
      exportToConvert.getReportOutput()
    )
  }
}

function getPrintFromGRPC (printToConvert) {
  if (!printToConvert) {
    return undefined
  }
  const { getReportOutputFromGRPC } = require('./baseDataTypeFromGRPC')
  return {
    report_output: getReportOutputFromGRPC(
      printToConvert.getReportOutput()
    )
  }
}

function getPrintRemittanceFromGRPC (printRemittanceToConvert) {
  if (!printRemittanceToConvert) {
    return undefined
  }
  const { getReportOutputFromGRPC } = require('./baseDataTypeFromGRPC')
  return {
    report_output: getReportOutputFromGRPC(
      printRemittanceToConvert.getReportOutput()
    )
  }
}

module.exports = {
  getBankAccountFromGRPC,
  getPaymentFromGRPC,
  getPaymentSelectionFromGRPC,
  getProcessFromGRPC,
  getExportFromGRPC,
  getPrintFromGRPC,
  getPrintRemittanceFromGRPC
};
