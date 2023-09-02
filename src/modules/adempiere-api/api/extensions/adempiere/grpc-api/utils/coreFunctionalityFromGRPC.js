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

const stubFile = require('.././grpc/proto/core_functionality_pb.js');

function getCurrencyFromGRPC (currency) {
  if (!currency) {
    return undefined;
  }
  return {
    id: currency.getId(),
    uuid: currency.getUuid(),
    iso_code: currency.getIsoCode(),
    currency_symbol: currency.getCurSymbol(),
    description: currency.getDescription(),
    standard_precision: currency.getStandardPrecision(),
    costing_precision: currency.getCostingPrecision()
  };
}

/**
 * @returns
    CHECKING = 0;
    SAVINGS = 1;
 */
function getBankAccount_BankAccountType ({ key, value }) {
  const { getValueOrKey } = require('./convertEnums.js')
  const { BankAccount } = stubFile;
  const { BankAccountType } = BankAccount;

  return getValueOrKey({
    list: BankAccountType,
    key,
    value
  });
}

function getBankAccountFromGRPC (bankAccount) {
  if (!bankAccount) {
    return undefined;
  }
  const { getDecimalFromGRPC } = require('./baseDataTypeFromGRPC.js');
  const {
    convertBusinessPartnerFromGRPC
  } = require('./convertCoreFunctionality');
  const {
    getCurrencyFromGRPC
  } = require('./coreFunctionalityFromGRPC');

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
    business_partner: convertBusinessPartnerFromGRPC(
      bankAccount.getBusinessPartner()
    ),
    bank_account_type: bankAccount.getBankAccountType(),
    bank_account_type_name: getBankAccount_BankAccountType({
      value: bankAccount.getBankAccountType()
    })
  };
}

module.exports = {
  getCurrencyFromGRPC,
  getBankAccountFromGRPC,
  getBankAccount_BankAccountType
};
