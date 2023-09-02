/*************************************************************************************
 * Product: ADempiere gRPC Payment Print/Export Client                               *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
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
const { getValidInteger } = require('.././utils/valueUtils.js');

class PaymentPrintExport {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/payment_print_export_pb.js');

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

    this.initPaymentPrintExportService();
    console.log('ADempiere Payment Print/Export Client Started');
  }

  // Init connection
  initPaymentPrintExportService () {
    const grpc = require('@grpc/grpc-js');
    const { PaymentPrintExportClient } = require('.././grpc/proto/payment_print_export_grpc_pb');
    this.paymentPrintExport = new PaymentPrintExportClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Payment Print/Export Service
  getPaymentPrintExport () {
    return this.paymentPrintExport;
  }

  /**
   * List Payment Selection
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPaymentSelections ({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentSelectionsRequest } = this.stubFile;
    const request = new ListPaymentSelectionsRequest();
    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().listPaymentSelections(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Payment Selection
   * @param {number} id
   * @param {string} uuid
   */
  getPaymentSelection ({
    token,
    id,
    uuid
  }, callback) {
    const { GetPaymentSelectionRequest } = this.stubFile;
    const request = new GetPaymentSelectionRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().getPaymentSelection(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Payment Rules
   * @param {string} searchValue
   * @param {number} paymentSelectionId
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPaymentRules ({
    token,
    searchValue,
    paymentSelectionId,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentRulesRequest } = this.stubFile;
    const request = new ListPaymentRulesRequest();

    request.setSearchValue(searchValue);

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().listPaymentRules(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Payments
   * @param {string} searchValue
   * @param {number} paymentSelectionId
   * @param {number} paymentRuleId
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPayments ({
    token,
    searchValue,
    paymentSelectionId,
    paymentRuleId,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentsRequest } = this.stubFile;
    const request = new ListPaymentsRequest();

    request.setSearchValue(searchValue);

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );

    request.setPaymentRule(paymentRuleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().listPayments(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Document No
   * @param {number} bankAccountId
   * @param {number} paymentRuleId
   */
  getDocumentNo ({
    token,
    bankAccountId,
    paymentRuleId
  }, callback) {
    const { GetDocumentNoRequest } = this.stubFile;
    const request = new GetDocumentNoRequest();

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setPaymentRule(paymentRuleId);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().getDocumentNo(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process and Create EFT Payment
   * @param {number} paymentSelectionId
   * @param {number} paymentRuleId
   * @param {number} documentNo
   * @param {number} bankAccountId
   */
  process ({
    token,
    paymentSelectionId,
    paymentRuleId,
    documentNo,
    bankAccountId
  }, callback) {
    const { ProcessRequest } = this.stubFile;
    const request = new ProcessRequest();

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );

    request.setPaymentRule(
      paymentRuleId
    );

    request.setDocumentNo(documentNo);
    request.setBankAccountId(bankAccountId);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().process(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process and Create EFT Payment
   * @param {number} paymentSelectionId
   * @param {number} paymentRuleId
   * @param {number} documentNo
   * @param {number} bankAccountId
   */
  export ({
    token,
    paymentSelectionId,
    paymentRuleId,
    documentNo,
    bankAccountId
  }, callback) {
    const { ExportRequest } = this.stubFile;
    const request = new ExportRequest();

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );
    request.setPaymentRule(
      paymentRuleId
    );
    request.setDocumentNo(documentNo);
    request.setBankAccountId(bankAccountId);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().export(
      request,
      metadata,
      callback
    );
  }

  /**
   * Print Payments
   * @param {number} paymentSelectionId
   * @param {number} paymentRuleId
   * @param {number} documentNo
   */
  print ({
    token,
    paymentSelectionId,
    paymentRuleId,
    documentNo
  }, callback) {
    const { PrintRequest } = this.stubFile;
    const request = new PrintRequest();

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );

    request.setPaymentRule(
      paymentRuleId
    );

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().print(
      request,
      metadata,
      callback
    );
  }

  /**
   * Confirm Print
   * @param {number} paymentSelectionId
   * @param {number} paymentRuleId
   * @param {number} bankAccountId
   * @param {number} documentNo
   */
  confirmPrint ({
    token,
    paymentSelectionId,
    paymentRuleId,
    bankAccountId,
    documentNo
  }, callback) {
    const { ConfirmPrintRequest } = this.stubFile;
    const request = new ConfirmPrintRequest();

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );

    request.setPaymentRule(
      paymentRuleId
    );

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().confirmPrint(
      request,
      metadata,
      callback
    );
  }

  /**
   * Print Remittance
   * @param {number} paymentSelectionId
   * @param {number} paymentRuleId
   * @param {number} documentNo
   */
  printRemittance ({
    token,
    paymentSelectionId,
    paymentRuleId,
    bankAccountId,
    documentNo
  }, callback) {
    const { PrintRemittanceRequest } = this.stubFile;
    const request = new PrintRemittanceRequest();

    request.setPaymentSelectionId(
      getValidInteger(paymentSelectionId)
    );

    request.setPaymentRule(
      paymentRuleId
    );

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().printRemittance(
      request,
      metadata,
      callback
    );
  }
}

module.exports = PaymentPrintExport;
