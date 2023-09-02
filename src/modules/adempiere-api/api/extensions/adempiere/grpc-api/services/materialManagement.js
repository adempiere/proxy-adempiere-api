/*************************************************************************************
 * Product: ADempiere gRPC Material Management Client                                *
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
const { isEmptyValue, getValidId } = require('.././utils/valueUtils.js')

class MaterialManagement {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/material_management_pb.js');

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

    this.initMaterialManagementService();
    console.log('ADempiere Material Management Client Started');
  }

  // Init connection
  initMaterialManagementService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/material_management_grpc_pb');
    this.materialManagement = new services.MaterialManagementClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Material Management Service
  getMaterialManagementService () {
    return this.materialManagement;
  }

  listProductStorage ({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListProductStorageRequest } = this.stubFile;
    const request = new ListProductStorageRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().listProductStorage(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Product Attribute Set
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  getProductAttributeSet ({
    token,
    id,
    uuid,
    productId,
    productUuid,
    productAttributeSetInstanceId,
    productAttributeSetInstanceUuid
  }, callback) {
    const { GetProductAttributeSetRequest } = this.stubFile;
    const request = new GetProductAttributeSetRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);
    request.setProductId(
      getValidId(productId)
    );
    request.setProductUuid(productUuid);
    request.setProductAttributeSetInstanceId(productAttributeSetInstanceId);
    request.setProductAttributeSetInstanceUuid(productAttributeSetInstanceUuid);

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().getProductAttributeSet(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Product Attribute Set Instance
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  getProductAttributeSetInstance ({
    token,
    id,
    uuid,
    productId,
    productUuid
  }, callback) {
    const { GetProductAttributeSetInstanceRequest } = this.stubFile;
    const request = new GetProductAttributeSetInstanceRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);
    request.setProductId(
      getValidId(productId)
    );
    request.setProductUuid(productUuid);

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().getProductAttributeSetInstance(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Product Attribute Set Instances
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  listProductAttributeSetInstances ({
    token,
    // DSL
    productId,
    productUuid,
    productAttributeSetId,
    productAttributeSetUuid,
    searchValue,
    filters,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListProductAttributeSetInstancesRequest } = this.stubFile;
    const request = new ListProductAttributeSetInstancesRequest();

    request.setProductId(
      getValidId(productId)
    );
    request.setProductUuid(productUuid);
    request.setProductAttributeSetId(productAttributeSetId);
    request.setProductAttributeSetUuid(productAttributeSetUuid);

    request.setSearchValue(searchValue);
    if (!isEmptyValue(filters)) {
      const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      request.setFilters(
        getCriteriaToGRPC({
          filters
        })
      );
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().listProductAttributeSetInstances(
      request,
      metadata,
      callback
    );
  }

  /**
   * Save Product Attribute Set Instance
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {array} attributes
   * @param {function} callback
   */
  saveProductAttributeSetInstance ({
    token,
    // DSL
    id,
    uuid,
    productId,
    productUuid,
    productAttributeSetId,
    productAttributeSetUuid,
    attributes
  }, callback) {
    const { SaveProductAttributeSetInstanceRequest } = this.stubFile;
    const request = new SaveProductAttributeSetInstanceRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);
    request.setProductId(
      getValidId(productId)
    );
    request.setProductUuid(productUuid);
    request.setProductAttributeSetId(productAttributeSetId);
    request.setProductAttributeSetUuid(productAttributeSetUuid);

    if (!isEmptyValue(attributes)) {
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      attributes.forEach(attribute => {
        // parameter format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: attribute.key,
          value: attribute.value
        });

        request.addAttributes(convertedAttribute);
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().saveProductAttributeSetInstance(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Available Warehouses
   * @param {number} warehouseId
   * @param {string} warehouseUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {function} callback
   */
  listAvailableWarehouses ({
    token,
    // DSL
    warehouseId,
    warehouseUuid,
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListAvailableWarehousesRequest } = this.stubFile;
    const request = new ListAvailableWarehousesRequest();

    request.setWarehouseId(
      getValidId(warehouseId)
    );
    request.setWarehouseUuid(warehouseUuid);

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().listAvailableWarehouses(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Locators
   * @param {number} warehouseId
   * @param {string} warehouseUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {function} callback
   */
  listLocators ({
    token,
    // DSL
    warehouseId,
    warehouseUuid,
    searchValue,
    contextAttributes,
    // references
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    referenceUuid,
    columnUuid,
    tableName,
    columnName,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListLocatorsRequest } = this.stubFile;
    const request = new ListLocatorsRequest();

    request.setWarehouseId(
      getValidId(warehouseId)
    );
    request.setWarehouseUuid(warehouseUuid);

    request.setSearchValue(searchValue);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });
        request.addContextAttributes(convertedAttribute);
      });
    }

    request.setFieldUuid(fieldUuid);
    request.setProcessParameterUuid(processParameterUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setReferenceUuid(referenceUuid);
    request.setColumnUuid(columnUuid);
    request.setTableName(tableName);
    request.setColumnName(columnName);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getMaterialManagementService().listLocators(
      request,
      metadata,
      callback
    );
  }
}

module.exports = MaterialManagement;
