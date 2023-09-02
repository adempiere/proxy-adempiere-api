/*************************************************************************************
 * Product: ADempiere gRPC Express Receipt Client                                    *
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

class ExpressReceipt {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/express_receipt_pb.js');

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

    this.initExpressReceiptService();
    console.log('ADempiere Express Receipt Client Started');
  }

  // Init connection
  initExpressReceiptService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/express_receipt_grpc_pb.js');
    this.expressReceipt = new services.ExpressReceiptClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Express Receipt Service
  getExpressReceiptService () {
    return this.expressReceipt;
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

    this.getExpressReceiptService().listBusinessPartners(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Purchase Orders
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPurchaseOrders ({
    token,
    // DSL
    searchValue = '',
    businessPartnerId,
    businessPartnerUuid,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPurchaseOrdersRequest } = this.stubFile;
    const request = new ListPurchaseOrdersRequest();

    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().listPurchaseOrders(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Product
   * @param {string} token
   * @param {number} orderId
   * @param {string} orderUuid
   * @param {string} searchValue
   * @param {string} upc
   * @param {string} sku
   * @param {string} value
   * @param {string} name
   */
  listProducts ({
    token,
    // DSL
    orderId,
    orderUuid,
    searchValue,
    upc,
    sku,
    value,
    name,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListProductsRequest } = this.stubFile;
    const request = new ListProductsRequest();

    request.setOrderId(
      getValidInteger(orderId)
    );
    request.setOrderUuid(orderUuid);
    request.setSearchValue(searchValue);
    request.setUpc(upc);
    request.setSku(sku);
    request.setValue(value);
    request.setName(name);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().listProducts(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Receipt
   * @param {string} token
   * @param {number} orderId
   * @param {string} orderUuid
   */
  createReceipt ({
    token,
    // DSL
    orderId,
    orderUuid,
    isCreateLinesFromOrder
  }, callback) {
    const { CreateReceiptRequest } = this.stubFile;
    const request = new CreateReceiptRequest();

    request.setOrderId(
      getValidInteger(orderId)
    );
    request.setOrderUuid(orderUuid);
    request.setIsCreateLinesFromOrder(isCreateLinesFromOrder);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().createReceipt(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Receipt
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  deleteReceipt ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { DeleteReceiptRequest } = this.stubFile;
    const request = new DeleteReceiptRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().deleteReceipt(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process Receipt
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   * @param {string} description
   */
  processReceipt ({
    token,
    // DSL
    id,
    uuid,
    description
  }, callback) {
    const { ProcessReceiptRequest } = this.stubFile;
    const request = new ProcessReceiptRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setDescription(description);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().processReceipt(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Receipt Line
   * @param {string} token
   * @param {number} receiptId
   * @param {string} receiptUuid
   * @param {string} description
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} quantity
   */
  createReceiptLine ({
    token,
    // DSL
    receiptId,
    receiptUuid,
    description,
    productId,
    productUuid,
    quantity,
    isQuantityFromOrderLine
  }, callback) {
    const { CreateReceiptLineRequest } = this.stubFile;
    const request = new CreateReceiptLineRequest();

    request.setReceiptId(
      getValidInteger(receiptId)
    );
    request.setReceiptUuid(receiptUuid);
    request.setDescription(description);
    request.setProductId(
      getValidInteger(productId)
    );
    request.setProductUuid(productUuid);

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );
    request.setIsQuantityFromOrderLine(isQuantityFromOrderLine);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().createReceiptLine(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Receipt Lines
   * @param {string} token
   * @param {number} receiptId
   * @param {string} receiptUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listReceiptLines ({
    token,
    // DSL
    receiptId,
    receiptUuid,
    // DSL
    searchValue = '',
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListReceiptLinesRequest } = this.stubFile;
    const request = new ListReceiptLinesRequest();

    request.setReceiptId(
      getValidInteger(receiptId)
    );
    request.setReceiptUuid(receiptUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().listReceiptLines(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Receipt Line
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  deleteReceiptLine ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { DeleteReceiptLineRequest } = this.stubFile;
    const request = new DeleteReceiptLineRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().deleteReceiptLine(
      request,
      metadata,
      callback
    );
  }

  /**
   * Update Receipt Line
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   * @param {string} description
   * @param {number} quantity
   */
  updateReceiptLine ({
    token,
    // DSL
    id,
    uuid,
    description,
    quantity
  }, callback) {
    const { UpdateReceiptLineRequest } = this.stubFile;
    const request = new UpdateReceiptLineRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setDescription(description);

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    const metadata = getMetadata({
      token
    });

    this.getExpressReceiptService().updateReceiptLine(
      request,
      metadata,
      callback
    );
  }
}

module.exports = ExpressReceipt;
