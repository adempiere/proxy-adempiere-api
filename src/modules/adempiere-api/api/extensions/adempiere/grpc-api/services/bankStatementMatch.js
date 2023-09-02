/*************************************************************************************
 * Product: ADempiere gRPC Bank Statement Match Client                               *
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

const { getMetadata } = require('.././utils/metadata.js');
const { getTimestamp, getValidInteger } = require('.././utils/valueUtils.js');

class BankStatementMatch {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/bank_statement_match_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor (config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.businessHost = adempiereConfig.businessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initBankStatementMatchService();
    console.info('ADempiere Bank Statement Match Client Started');
  }

  // Init connection
  initBankStatementMatchService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/bank_statement_match_grpc_pb.js');
    this.bankStatementMatch = new services.BankStatementMatchClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Bank Statement Match Service
  getBankStatementMatchService () {
    return this.bankStatementMatch;
  }

  /**
   * Get Bank Statement
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  getBankStatement ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { GetBankStatementRequest } = this.stubFile;
    const request = new GetBankStatementRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().getBankStatement(
      request,
      metadata,
      callback
    );
  }

  listBankStatements ({
    token,
    bankAccountId,
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListBankStatementsRequest } = this.stubFile;
    const request = new ListBankStatementsRequest();

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setSearchValue(searchValue);

    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listBankStatements(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Bank Accounts
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listBankAccounts ({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListBankAccountsRequest } = this.stubFile;
    const request = new ListBankAccountsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listBankAccounts(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Business Partners
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listBusinessPartners ({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListBusinessPartnersRequest } = this.stubFile;
    const request = new ListBusinessPartnersRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listBusinessPartners(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Search Modes
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listSearchModes ({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListSearchModesRequest } = this.stubFile;
    const request = new ListSearchModesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listSearchModes(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Imported Bank Movements
   * @param {string} token
   * @param {string} searchValue
   * @param {number} bankStatementId
   * @param {number} bankAccountId
   * @param {number} paymentAmountFrom
   * @param {number} paymentAmountTo
   * @param {date} transactionDateFrom
   * @param {date} transactionDateTo
   * @param {number} matchMode
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listImportedBankMovements ({
    token,
    // DSL
    searchValue,
    bankStatementId,
    bankAccountId,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListImportedBankMovementsRequest } = this.stubFile;
    const request = new ListImportedBankMovementsRequest();

    request.setSearchValue(searchValue);

    request.setBankStatementId(
      getValidInteger(bankStatementId)
    );
    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(
      getValidInteger(matchMode)
    );

    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listImportedBankMovements(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Payments
   * @param {string} token
   * @param {string} searchValue
   * @param {number} bankStatementId
   * @param {number} bankAccountId
   * @param {number} businessPartnerId
   * @param {number} paymentAmountFrom
   * @param {number} paymentAmountTo
   * @param {date} transactionDateFrom
   * @param {date} transactionDateTo
   * @param {number} matchMode
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPayments ({
    token,
    // DSL
    searchValue,
    bankStatementId,
    bankAccountId,
    businessPartnerId,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentsRequest } = this.stubFile;
    const request = new ListPaymentsRequest();

    request.setSearchValue(searchValue);

    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setBankStatementId(
      getValidInteger(bankStatementId)
    );
    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(
      getValidInteger(matchMode)
    );

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listPayments(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Matching Movements
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listMatchingMovements ({
    token,
    // DSL
    searchValue,
    bankStatementId,
    bankAccountId,
    businessPartnerId,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListMatchingMovementsRequest } = this.stubFile;
    const request = new ListMatchingMovementsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setBankStatementId(
      getValidInteger(bankStatementId)
    );
    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(
      getValidInteger(matchMode)
    );

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listMatchingMovements(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Result Movements
   * @param {string} token
   * @param {string} searchValue
   * @param {number} bankStatementId
   * @param {number} bankAccountId
   * @param {number} paymentAmountFrom
   * @param {number} paymentAmountTo
   * @param {date} transactionDateFrom
   * @param {date} transactionDateTo
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listResultMovements ({
    token,
    // DSL
    searchValue,
    bankStatementId,
    bankAccountId,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListResultMovementsRequest } = this.stubFile;
    const request = new ListResultMovementsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setBankStatementId(
      getValidInteger(bankStatementId)
    );
    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listResultMovements(
      request,
      metadata,
      callback
    );
  }

  matchPayments ({
    token,
    keyMatchesList
  }, callback) {
    const { MatchPaymentsRequest, KeyMatch } = this.stubFile;
    const request = new MatchPaymentsRequest();

    const { getTypeOfValue } = require('.././utils/valueUtils.js');
    if (getTypeOfValue(keyMatchesList) === 'String') {
      keyMatchesList = JSON.parse(keyMatchesList);
    }
    keyMatchesList.forEach(keyMatch => {
      const keyMatchObject = new KeyMatch();
      keyMatchObject.setPaymentId(
        getValidInteger(keyMatch.paymentId)
      );
      keyMatchObject.setImportedMovementId(
        getValidInteger(keyMatch.importedMovementId)
      );

      request.addKeyMatches(keyMatchObject);
    });

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().matchPayments(
      request,
      metadata,
      callback
    );
  }

  unmatchPayments ({
    token,
    importedMovementsIdsList
  }, callback) {
    const { UnmatchPaymentsRequest } = this.stubFile;
    const request = new UnmatchPaymentsRequest();

    const { getTypeOfValue } = require('.././utils/valueUtils.js');
    if (getTypeOfValue(importedMovementsIdsList) === 'String') {
      importedMovementsIdsList = JSON.parse(importedMovementsIdsList);
    }
    importedMovementsIdsList.forEach(importedMovementId => {
      request.addImportedMovementsIds(
        getValidInteger(importedMovementId)
      );
    });

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().unmatchPayments(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process Bank Statement
   * @param {string} token
   * @param {number} bankAccountId
   * @param {number} bankStatementId
   * @param {number} paymentAmountFrom
   * @param {number} paymentAmountTo
   * @param {Date} transactionDateFrom
   * @param {Date} transactionDateTo
   */
  processMovements ({
    token,
    // DSL
    bankAccountId,
    bankStatementId,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo
  }, callback) {
    const { ProcessMovementsRequest } = this.stubFile;
    const request = new ProcessMovementsRequest();

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setBankStatementId(
      getValidInteger(bankStatementId)
    );

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().processMovements(
      request,
      metadata,
      callback
    );
  }
}

module.exports = BankStatementMatch;
