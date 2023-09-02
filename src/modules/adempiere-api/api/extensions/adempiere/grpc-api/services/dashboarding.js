/*************************************************************************************
 * Product: ADempiere gRPC Dashboarding Client                                       *
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
const { isEmptyValue, getValidInteger } = require('.././utils/valueUtils.js');

class Dashboarding {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/dashboarding_pb.js');

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

    this.initDashboardingService();
    console.log('ADempiere Dashboarding Client Started');
  }

  // Init connection
  initDashboardingService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/dashboarding_grpc_pb');
    this.dashboarding = new services.DashboardingClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Dashboarding Service
  getDashboardingService () {
    return this.dashboarding;
  }

  // List Document Statuses
  listDashboards ({
    token,
    roleUuid,
    roleId,
    pageSize,
    pageToken
  }, callback) {
    const { ListDashboardsRequest } = this.stubFile;
    const request = new ListDashboardsRequest();

    request.setRoleUuid(roleUuid);
    request.setRoleId(roleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listDashboards(
      request,
      metadata,
      callback
    );
  }

  //  List Document Statuses
  listFavorites ({
    token,
    userUuid,
    userId,
    pageSize,
    pageToken
  }, callback) {
    const { ListFavoritesRequest } = this.stubFile;
    const request = new ListFavoritesRequest()

    request.setUserUuid(userUuid);
    request.setUserId(userId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listFavorites(
      request,
      metadata,
      callback
    );
  }

  //  List Document Statuses
  listPendingDocuments ({
    token,
    userUuid,
    userId,
    roleUuid,
    roleId,
    pageSize,
    pageToken
  }, callback) {
    const { ListPendingDocumentsRequest } = this.stubFile;
    const request = new ListPendingDocumentsRequest();

    request.setUserUuid(userUuid);
    request.setUserId(userId);
    request.setRoleUuid(roleUuid);
    request.setRoleId(roleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listPendingDocuments(
      request,
      metadata,
      callback
    );
  }

  //  Get Metrics Data
  getMetrics ({
    token,
    uuid,
    id
  }, callback) {
    const { GetMetricsRequest } = this.stubFile;
    const request = new GetMetricsRequest();

    request.setUuid(uuid);
    request.setId(id);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().getMetrics(
      request,
      metadata,
      callback
    );
  }

  /**
   * List notification
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listNotifications ({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListNotificationsRequest } = this.stubFile;
    const request = new ListNotificationsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listNotifications(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Exists Window Dashboards
   * @param {string} token Json Web Token
   * @param {number} windowId window identifier
   * @param {string} windowUuid window uuid
   * @param {number} tabId tab identifier
   * @param {string} token window uuid
   */
  existsWindowDashboards ({
    token,
    windowId,
    windowUuid,
    tabId,
    tabUuid
  }, callback) {
    const { ExistsWindowDashboardsRequest } = this.stubFile;
    const request = new ExistsWindowDashboardsRequest();

    request.setWindowId(
      getValidInteger(windowId)
    );
    request.setWindowUuid(windowUuid);
    request.setTabId(
      getValidInteger(tabId)
    );
    request.setTabUuid(tabUuid);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().existsWindowDashboards(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Window Dashboards Definition
   * @param {string} token Json Web Token
   * @param {number} windowId window identifier
   * @param {string} windowUuid window uuid
   * @param {number} tabId tab identifier
   * @param {string} token window uuid
   */
  listWindowDashboards ({
    token,
    windowId,
    windowUuid,
    tabId,
    tabUuid,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListWindowDashboardsRequest } = this.stubFile;
    const request = new ListWindowDashboardsRequest();

    request.setWindowId(
      getValidInteger(windowId)
    );
    request.setWindowUuid(windowUuid);
    request.setTabId(
      getValidInteger(tabId)
    );
    request.setTabUuid(tabUuid);

    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listWindowDashboards(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Window Metrics Data
   * @param {string} token Json Web Token
   * @param {number} id chart id
   * @param {string} uuid chart uuid
   * @param {string} tableName table name
   * @param {number} recordId record id
   * @param {string} recordUuid record uuid
   * @param {Array} contextAttributes context attributes to set
   * @param {Array} filters parameters as filters
   */
  getWindowMetrics ({
    token,
    uuid,
    id,
    tableName,
    recordId,
    recordUuid,
    contextAttributes,
    filters
  }, callback) {
    const { GetWindowMetricsRequest } = this.stubFile;
    const request = new GetWindowMetricsRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    const { getTypeOfValue } = require('.././utils/valueUtils.js');
    if (!isEmptyValue(contextAttributes)) {
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

    // client custom filters
    if (!isEmptyValue(filters)) {
      if (getTypeOfValue(filters) === 'String') {
        filters = JSON.parse(filters);
      }
      const { getValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      const { Filter } = this.stubFile;
      filters.forEach(filter => {
        let parsedFilter = filter;
        if (getTypeOfValue(filter) === 'String') {
          parsedFilter = JSON.parse(filter);
        }
        const filterInstance = new Filter();
        filterInstance.setColumnName(parsedFilter.key);

        if (getTypeOfValue(parsedFilter.value) === 'Array') {
          parsedFilter.value.forEach(val => {
            const valueInstance = getValueToGRPC({
              value: val,
              valueType: parsedFilter.valueType
            });
            filterInstance.addValues(valueInstance);
          })
        } else {
          const valueInstance = getValueToGRPC({
            value: parsedFilter.value,
            valueType: parsedFilter.valueType
          });
          if (!isEmptyValue(parsedFilter.value_to)) {
            const valueToInstance = getValueToGRPC({
              value: parsedFilter.value_to,
              valueType: parsedFilter.valueType
            });
            filterInstance.setValueTo(valueToInstance);
          }
          filterInstance.setValue(valueInstance);
        }

        request.addFilters(filterInstance);
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().getWindowMetrics(
      request,
      metadata,
      callback
    );
  }
}

module.exports = Dashboarding;
