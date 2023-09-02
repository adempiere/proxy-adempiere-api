/*************************************************************************************
 * Product: ADempiere gRPC Core Functionality Client                                 *
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
const { getValidId } = require('.././utils/valueUtils.js');

class CoreFunctionality {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/core_functionality_pb.js');

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

    this.initCoreFunctionalityService();
    console.log('ADempiere Core Functionality Client Started');
  }

  // Init connection
  initCoreFunctionalityService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/core_functionality_grpc_pb');
    this.coreFunctionality = new services.CoreFunctionalityClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get CoreFunctionality Service
  getCoreFunctionalityService () {
    return this.coreFunctionality;
  }

  // Get Country
  getCountry ({
    token,
    uuid,
    id
  }, callback) {
    const { GetCountryRequest } = this.stubFile;
    const request = new GetCountryRequest();

    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().getCountry(
      request,
      metadata,
      callback
    );
  }

  // List Languages
  listLanguages ({
    token,
    pageSize,
    pageToken
  }, callback) {
    const { ListLanguagesRequest } = this.stubFile;
    const request = new ListLanguagesRequest();

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().listLanguages(
      request,
      metadata,
      callback
    );
  }

  // List Organizations
  listOrganizations ({
    token,
    roleUuid,
    roleId,
    pageSize,
    pageToken
  }, callback) {
    const { ListOrganizationsRequest } = this.stubFile;
    const request = new ListOrganizationsRequest();

    request.setRoleUuid(roleUuid);
    request.setRoleId(
      getValidId(roleId)
    );
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().listOrganizations(
      request,
      metadata,
      callback
    );
  }

  // List Warehouses
  listWarehouses ({
    token,
    organizationUuid,
    organizationId,
    pageSize,
    pageToken
  }, callback) {
    const { ListWarehousesRequest } = this.stubFile;
    const request = new ListWarehousesRequest();

    request.setOrganizationUuid(organizationUuid);
    request.setOrganizationId(
      getValidId(organizationId)
    );
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().listWarehouses(
      request,
      metadata,
      callback
    );
  }

  // Get Conversion Rate
  getConversionRate ({
    token,
    conversionTypeUuid,
    currencyFromUuid,
    currencyToUuid,
    conversionDate
  }, callback) {
    const { GetConversionRateRequest } = this.stubFile;
    const request = new GetConversionRateRequest();

    request.setConversionTypeUuid(conversionTypeUuid);
    request.setCurrencyFromUuid(currencyFromUuid);
    request.setCurrencyToUuid(currencyToUuid);
    if (conversionDate) {
      request.setConversionDate(conversionDate)
    }

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().getConversionRate(
      request,
      metadata,
      callback
    );
  }

  //  List Product Conversion UOM
  listProductConversion ({
    token,
    productId,
    productUuid,
    //  Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListProductConversionRequest } = this.stubFile;
    const request = new ListProductConversionRequest();

    request.setProductId(
      getValidId(productId)
    );
    request.setProductUuid(productUuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().listProductConversion(
      request,
      metadata,
      callback
    );
  }

  // Get Business Partner
  getBusinessPartner ({
    token,
    searchValue,
    value,
    name,
    contactName,
    email,
    postalCode,
    phone,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit
  }, callback) {
    const { GetBusinessPartnerRequest } = this.stubFile
    const request = new GetBusinessPartnerRequest()
    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

    // TODO: Add support to all parameters
    request.setCriteria(
      getCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );
    request.setSearchValue(searchValue);
    request.setValue(value);
    request.setName(name);
    request.setContactName(contactName);
    request.setEmail(email);
    request.setPostalCode(postalCode);
    request.setPhone(phone);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().getBusinessPartner(
      request,
      metadata,
      callback
    );
  }

  // Create Business Partner
  createBusinessPartner ({
    token,
    value,
    taxId,
    duns,
    naics,
    name,
    lastName,
    description,
    contactName,
    email,
    phone,
    businessPartnerGroupUuid,
    address1,
    address2,
    address3,
    address4,
    cityUuid,
    cityName,
    postalCode,
    regionUuid,
    regionName,
    countryUuid,
    posUuid
  }, callback) {
    const { CreateBusinessPartnerRequest } = this.stubFile;
    const request = new CreateBusinessPartnerRequest();

    request.setValue(value);
    request.setTaxId(taxId);
    request.setDuns(duns);
    request.setNaics(naics);
    request.setName(name);
    request.setLastName(lastName);
    request.setDescription(description);
    request.setContactName(contactName);
    request.setEmail(email);
    request.setPhone(phone);
    request.setBusinessPartnerGroupUuid(businessPartnerGroupUuid);
    request.setAddress1(address1);
    request.setAddress2(address2);
    request.setAddress3(address3);
    request.setAddress4(address4);
    request.setCityUuid(cityUuid);
    request.setCityName(cityName);
    request.setPostalCode(postalCode);
    request.setRegionUuid(regionUuid);
    request.setRegionName(regionName);
    request.setCountryUuid(countryUuid);
    request.setPosUuid(posUuid);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().createBusinessPartner(
      request,
      metadata,
      callback
    );
  }

  //  List Business Partner
  listBusinessPartners ({
    token,
    searchValue,
    value,
    name,
    contactName,
    email,
    postalCode,
    phone,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken
  }, callback) {
    const { ListBusinessPartnersRequest } = this.stubFile;
    const request = new ListBusinessPartnersRequest();
    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    //  TODO: Add support to all parameters
    request.setCriteria(
      getCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );
    request.setSearchValue(searchValue);
    request.setValue(value);
    request.setName(name);
    request.setContactName(contactName);
    request.setEmail(email);
    request.setPostalCode(postalCode);
    request.setPhone(phone);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getCoreFunctionalityService().listBusinessPartners(
      request,
      metadata,
      callback
    );
  }
}

module.exports = CoreFunctionality;
