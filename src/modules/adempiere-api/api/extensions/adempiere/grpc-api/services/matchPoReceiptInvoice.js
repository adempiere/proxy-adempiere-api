/************************************************************************************************
 * Product: ADempiere gRPC Issue Management Client                                              *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                                 *
 * Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com https://github.com/elsiosanchez     *
 * This program is free software: you can redistribute it and/or modify                         *
 * it under the terms of the GNU General Public License as published by                         *
 * the Free Software Foundation, either version 3 of the License, or                            *
 * (at your option) any later version.                                                          *
 * This program is distributed in the hope that it will be useful,                              *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                               *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                                 *
 * GNU General Public License for more details.                                                 *
 * You should have received a copy of the GNU General Public License                            *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.                        *
 ***********************************************************************************************/

const { getMetadata } = require('.././utils/metadata.js');
const { getValidId, getTimestamp, convertStringToBoolean, getTypeOfValue } = require('.././utils/valueUtils.js');

class MatchPORReceiptInvoice {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/match_po_receipt_invoice_pb.js');

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

    this.initMatchPORReceiptInvoiceService();
    console.log('ADempiere MatchPORReceiptInvoice Client Started');
  }

  // Init connection
  initMatchPORReceiptInvoiceService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/match_po_receipt_invoice_grpc_pb');
    this.match_po_receipt_invoice = new services.MatchPORReceiptInvoiceClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get MatchPORReceiptInvoice Service
  getMatchPORReceiptInvoiceService () {
    return this.match_po_receipt_invoice;
  }

  /**
   * List Matches Types From Request
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   * @param {string} searchValue
   */
  listMatchesTypes ({
    token,
    pageSize,
    pageToken,
    searchValue
  }, callback) {
    const { ListMatchesTypesFromRequest } = this.stubFile;
    const request = new ListMatchesTypesFromRequest();
    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listMatchesTypesFrom(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Matches Types To Request
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   * @param {string} searchValue
   */
  ListMatchesTypesFor ({
    token,
    pageSize,
    pageToken,
    searchValue,
    matchFromType
  }, callback) {
    const { ListMatchesTypesToRequest } = this.stubFile;
    const request = new ListMatchesTypesToRequest();
    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setMatchFromType(matchFromType);

    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listMatchesTypesTo(
      request,
      metadata,
      callback
    );
  }

  /**
  * List Search Modes
  * @param {number} pageSize
  * @param {string} pageToken
  * @param {string} token
  * @param {string} searchValue
  */
  ListSearchModes ({
    token,
    pageSize,
    pageToken,
    searchValue
  }, callback) {
    const { ListSearchModesRequest } = this.stubFile;
    const request = new ListSearchModesRequest();
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setSearchValue(searchValue);
    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listSearchModes(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Vendor
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   * @param {string} searchValue
   */
  ListVendors ({
    token,
    pageSize,
    pageToken,
    searchValue
  }, callback) {
    const { ListVendorsRequest } = this.stubFile;
    const request = new ListVendorsRequest();
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setSearchValue(searchValue);
    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listVendors(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Product
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   * @param {string} searchValue
   */
  ListProducts ({
    token,
    pageSize,
    pageToken,
    searchValue
  }, callback) {
    const { ListProductsRequest } = this.stubFile;
    const request = new ListProductsRequest();
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setSearchValue(searchValue);
    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listProducts(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Match From
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   * @param {string} searchValue
   */
  ListMatchedFrom ({
    token,
    pageSize,
    pageToken,
    matchMode,
    searchValue,
    matchFromType,
    matchToType,
    vendorId,
    productId,
    dateFrom,
    dateto
  }, callback) {
    const { ListMatchedFromRequest } = this.stubFile;
    const request = new ListMatchedFromRequest();
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setMatchMode(matchMode);
    request.setSearchValue(searchValue);
    request.setMatchFromType(matchFromType);
    request.setMatchToType(matchToType);
    request.setVendorId(vendorId);
    request.setProductId(productId);
    request.setDateFrom(dateFrom);
    request.setDateTo(dateto);
    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listMatchedFrom(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Match To
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} token
   * @param {string} searchValue
   */
  ListMatchedTo ({
    token,
    pageSize,
    pageToken,
    matchMode,
    searchValue,
    matchFromType,
    matchToType,
    vendorId,
    productId,
    dateFrom,
    dateto,
    isSameQuantity,
    matchFromSelectedId
  }, callback) {
    const { ListMatchedToRequest } = this.stubFile;
    const request = new ListMatchedToRequest();
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setMatchMode(matchMode);
    request.setSearchValue(searchValue);
    request.setMatchFromType(matchFromType);
    request.setMatchToType(matchToType);
    const vendorIdConverted = parseInt(vendorId);
    request.setVendorId(vendorIdConverted);
    const productIdConverted = parseInt(productId);
    request.setProductId(productIdConverted);
    request.setDateFrom(dateFrom);
    request.setDateTo(dateto);
    const matchFromSelectedIdConverted = parseInt(matchFromSelectedId)
    request.setMatchFromSelectedId(matchFromSelectedIdConverted);
    const isSameQuantityConverted = convertStringToBoolean(isSameQuantity)
    request.setIsSameQuantity(isSameQuantityConverted);
    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().listMatchedTo(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process
   */
  Process ({
    token,
    matchMode,
    matchFromType,
    matchToType,
    matchFromSelectedId,
    matchedToSelectionsList = [],
    quantity
  }, callback) {
    const { ProcessRequest, Matched } = this.stubFile;
    const request = new ProcessRequest();
    request.setMatchMode(matchMode);
    request.setMatchFromType(matchFromType);
    request.setMatchToType(matchToType);
    request.setMatchFromSelectedId(matchFromSelectedId);

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    if (getTypeOfValue(matchedToSelectionsList) === 'String') {
      matchedToSelectionsList = JSON.parse(matchedToSelectionsList);
    }
    // payment selections list
    matchedToSelectionsList.forEach(matchSelection => {
      let parsedMatchSelection = matchSelection;
      if (getTypeOfValue(matchSelection) === 'String') {
        parsedMatchSelection = JSON.parse(matchSelection);
      }
      const matchedInstance = new Matched();

      matchedInstance.setId(matchSelection.id);
      matchedInstance.setUuid(matchSelection.uuid);
      matchedInstance.setQuantity(
        getDecimalToGRPC(matchSelection.quantity)
      );
      matchedInstance.getMatchedQuantity(
        getDecimalToGRPC(matchSelection.matchedQuantity)
      );
      request.addMatchedToSelections(matchedInstance);
    });

    const metadata = getMetadata({
      token
    });

    this.getMatchPORReceiptInvoiceService().process(
      request,
      metadata,
      callback
    );
  }
}

module.exports = MatchPORReceiptInvoice;
