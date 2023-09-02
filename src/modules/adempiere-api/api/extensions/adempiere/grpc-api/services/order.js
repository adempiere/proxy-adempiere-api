/*************************************************************************************
 * Product: ADempiere gRPC Order Client                                              *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
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
const { isEmptyValue } = require('.././utils/valueUtils.js');

class Order {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/order_pb.js');

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

    this.initOrderService();
    console.log('ADempiere Order Client Started');
  }

  // Init connection
  initOrderService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/order_grpc_pb.js');
    this.order = new services.OrderClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Order Service
  getOrderService () {
    return this.order;
  }

  listOrderInfo ({
    token,
    //  DSL
    filters = [],
    searchValue,
    contextAttributes,
    // references
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    columnUuid,
    columnName,
    referenceUuid,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListOrderInfo } = this.stubFile;
    const request = new ListOrderInfo();

    request.setFieldUuid(fieldUuid);
    request.setProcessParameterUuid(processParameterUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setColumnUuid(columnUuid);
    request.setColumnName(columnName);
    request.setReferenceUuid(referenceUuid);

    request.setSearchValue(searchValue);
    if (!isEmptyValue(filters)) {
      const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      request.setFilters(
        getCriteriaToGRPC({
          filters
        })
      );
    }

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
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getBusinessPartnerService().listOrderInfo(
      request,
      metadata,
      callback
    );
  }
}

module.exports = Order;
