/*************************************************************************************
 * Product: ADempiere gRPC Express Movement Client                                   *
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

class ExpressMovement {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/express_movement_pb.js');

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

    this.initExpressMovementService();
    console.log('ADempiere Express Movement Client Started');
  }

  // Init connection
  initExpressMovementService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/express_movement_grpc_pb.js');
    this.expressMovement = new services.ExpressMovementClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Express Movement Service
  getExpressMovementService () {
    return this.expressMovement;
  }

  /**
   * Get List Warehouses
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listWarehouses ({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListWarehousesRequest } = this.stubFile;
    const request = new ListWarehousesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().listWarehouses(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Product
   * @param {string} token
   * @param {string} searchValue
   * @param {string} upc
   * @param {string} sku
   * @param {string} value
   * @param {string} name
   */
  listProducts ({
    token,
    // DSL
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

    this.getExpressMovementService().listProducts(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Movement
   * @param {string} token
   * @param {number} orderId
   * @param {string} orderUuid
   */
  createMovement ({
    token
  }, callback) {
    const { CreateMovementRequest } = this.stubFile;
    const request = new CreateMovementRequest();

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().createMovement(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Movement
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  deleteMovement ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { DeleteMovementRequest } = this.stubFile;
    const request = new DeleteMovementRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().deleteMovement(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process Movement
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   * @param {string} description
   */
  processMovement ({
    token,
    // DSL
    id,
    uuid,
    description
  }, callback) {
    const { ProcessMovementRequest } = this.stubFile;
    const request = new ProcessMovementRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setDescription(description);

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().processMovement(
      request,
      metadata,
      callback
    );
  }

  /**
   * Create Movement Line
   * @param {string} token
   * @param {number} movementId
   * @param {string} movementUuid
   * @param {string} description
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} quantity
   */
  createMovementLine ({
    token,
    // DSL
    movementId,
    movementUuid,
    description,
    warehouseId,
    warehouseUuid,
    warehouseToId,
    warehouseToUuid,
    productId,
    productUuid,
    quantity
  }, callback) {
    const { CreateMovementLineRequest } = this.stubFile;
    const request = new CreateMovementLineRequest();

    request.setMovementId(
      getValidInteger(movementId)
    );
    request.setMovementUuid(movementUuid);
    request.setWarehouseId(
      getValidInteger(warehouseId)
    );
    request.setWarehouseUuid(warehouseUuid);
    request.setWarehouseToId(
      getValidInteger(warehouseToId)
    );
    request.setWarehouseToUuid(warehouseToUuid);
    request.setDescription(description);
    request.setProductId(
      getValidInteger(productId)
    );
    request.setProductUuid(productUuid);

    const { getDecimalToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().createMovementLine(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Movement Lines
   * @param {string} token
   * @param {number} movementId
   * @param {string} movementUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listMovementLines ({
    token,
    // DSL
    movementId,
    movementUuid,
    // DSL
    searchValue = '',
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListMovementLinesRequest } = this.stubFile;
    const request = new ListMovementLinesRequest();

    request.setMovementId(
      getValidInteger(movementId)
    );
    request.setMovementUuid(movementUuid);
    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().listMovementLines(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Movement Line
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   */
  deleteMovementLine ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { DeleteMovementLineRequest } = this.stubFile;
    const request = new DeleteMovementLineRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getExpressMovementService().deleteMovementLine(
      request,
      metadata,
      callback
    );
  }

  /**
   * Update Movement Line
   * @param {string} token
   * @param {number} id
   * @param {string} uuid
   * @param {string} description
   * @param {number} quantity
   */
  updateMovementLine ({
    token,
    // DSL
    id,
    uuid,
    description,
    quantity
  }, callback) {
    const { UpdateMovementLineRequest } = this.stubFile;
    const request = new UpdateMovementLineRequest();

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

    this.getExpressMovementService().updateMovementLine(
      request,
      metadata,
      callback
    );
  }
}

module.exports = ExpressMovement;
