/*************************************************************************************
 * Product: ADempiere gRPC Express Shipment Client                                   *
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

class ExpressShipment {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/express_shipment_pb.js');

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

    this.initExpressShipmentService();
    console.log('ADempiere Express Shipment Client Started');
  }

  // Init connection
  initExpressShipmentService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/express_shipment_grpc_pb.js');
    this.expressShipment = new services.ExpressShipmentClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Express Shipment Service
  getExpressShipmentService () {
    return this.expressShipment;
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

    this.getExpressShipmentService().listBusinessPartners(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Sales Orders
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listSalesOrders ({
    token,
    // DSL
    searchValue = '',
    businessPartnerId,
    businessPartnerUuid,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListSalesOrdersRequest } = this.stubFile;
    const request = new ListSalesOrdersRequest();

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

    this.getExpressShipmentService().listSalesOrders(
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

    this.getExpressShipmentService().listProducts(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Shipment
   * @param {string} token
   * @param {number} orderId
   * @param {string} orderUuid
   */
  createShipment ({
    token,
    // DSL
    orderId,
    orderUuid,
    isCreateLinesFromOrder
  }, callback) {
    const { CreateShipmentRequest } = this.stubFile;
    const request = new CreateShipmentRequest();

    request.setOrderId(
      getValidInteger(orderId)
    );
    request.setOrderUuid(orderUuid);
    request.setIsCreateLinesFromOrder(isCreateLinesFromOrder);

    const metadata = getMetadata({
      token
    });

    this.getExpressShipmentService().createShipment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Shipment
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  deleteShipment ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { DeleteShipmentRequest } = this.stubFile;
    const request = new DeleteShipmentRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getExpressShipmentService().deleteShipment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process Shipment
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   * @param {string} description
   */
  processShipment ({
    token,
    // DSL
    id,
    uuid,
    description
  }, callback) {
    const { ProcessShipmentRequest } = this.stubFile;
    const request = new ProcessShipmentRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setDescription(description);

    const metadata = getMetadata({
      token
    });

    this.getExpressShipmentService().processShipment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Shipment Line
   * @param {string} token
   * @param {number} shipmentId
   * @param {string} shipmentUuid
   * @param {string} description
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} quantity
   */
  createShipmentLine ({
    token,
    // DSL
    shipmentId,
    shipmentUuid,
    description,
    productId,
    productUuid,
    quantity,
    isQuantityFromOrderLine
  }, callback) {
    const { CreateShipmentLineRequest } = this.stubFile;
    const request = new CreateShipmentLineRequest();

    request.setShipmentId(
      getValidInteger(shipmentId)
    );
    request.setShipmentUuid(shipmentUuid);
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

    this.getExpressShipmentService().createShipmentLine(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Shipment Lines
   * @param {string} token
   * @param {number} shipmentId
   * @param {string} shipmentUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listShipmentLines ({
    token,
    // DSL
    shipmentId,
    shipmentUuid,
    // DSL
    searchValue = '',
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListShipmentLinesRequest } = this.stubFile;
    const request = new ListShipmentLinesRequest();

    request.setShipmentId(
      getValidInteger(shipmentId)
    );
    request.setShipmentUuid(shipmentUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getExpressShipmentService().listShipmentLines(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Shipment Line
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  deleteShipmentLine ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { DeleteShipmentLineRequest } = this.stubFile;
    const request = new DeleteShipmentLineRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getExpressShipmentService().deleteShipmentLine(
      request,
      metadata,
      callback
    );
  }

  /**
   * Update Shipment Line
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   * @param {string} description
   * @param {number} quantity
   */
  updateShipmentLine ({
    token,
    // DSL
    id,
    uuid,
    description,
    quantity
  }, callback) {
    const { UpdateShipmentLineRequest } = this.stubFile;
    const request = new UpdateShipmentLineRequest();

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

    this.getExpressShipmentService().updateShipmentLine(
      request,
      metadata,
      callback
    );
  }
}

module.exports = ExpressShipment;
