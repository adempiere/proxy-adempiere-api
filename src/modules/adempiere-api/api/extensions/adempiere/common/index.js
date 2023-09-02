/************************************************************************************
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
 * This program is free software: you can redistribute it and/or modify             *
 * it under the terms of the GNU General Public License as published by             *
 * the Free Software Foundation, either version 2 of the License, or                *
 * (at your option) any later version.                                              *
 * This program is distributed in the hope that it will be useful,                  *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
 * GNU General Public License for more details.                                     *
 * You should have received a copy of the GNU General Public License                *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

import { Router } from 'express';

import {
  convertBusinessPartnerFromGRPC,
  convertCountryFromGRPC,
  convertConversionRateFromGRPC,
  convertLanguageFromGRPC,
  convertOrganizationFromGRPC,
  convertProductConversionFromGRPC,
  convertWarehouseFromGRPC
} from '.././grpc-api/utils/convertCoreFunctionality';

module.exports = ({ config }) => {
  const api = Router();
  const CoreService = require('.././grpc-api/services/coreFunctionality');
  const service = new CoreService(config);

  /**
   * GET Country
   *
   * req.query.token - user token
   * req.query.id - id of country
   * req.query.uuid - uuid of country
   *
   * Details:
   */
  api.get('/country', (req, res) => {
    if (req.query) {
      service.getCountry({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertCountryFromGRPC(response)
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Organizations
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.role_uuid - uuid of current role
   * req.query.role_id - id of current role
   * Details:
   */
  api.get('/organizations', (req, res) => {
    if (req.query) {
      service.listOrganizations({
        token: req.headers.authorization,
        roleUuid: req.query.role_uuid,
        roleId: req.query.role_id,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getOrganizationsList().map(organization => {
                return convertOrganizationFromGRPC(organization)
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Warehouses
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.organization_uuid - uuid of current organization
   * req.query.organization_id - id of current organization
   * Details:
   */
  api.get('/warehouses', (req, res) => {
    if (req.query) {
      service.listWarehouses({
        token: req.headers.authorization,
        organizationUuid: req.query.organization_uuid,
        organizationId: req.query.organization_id,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getWarehousesList().map(warehouse => {
                return convertWarehouseFromGRPC(warehouse)
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Languages
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Details:
   */
  api.get('/languages', (req, res) => {
    if (req.query) {
      service.listLanguages({
        token: req.headers.authorization,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getLanguagesList().map(language => {
                return convertLanguageFromGRPC(language)
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Business Partner
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.search_value - Search Value
   * req.query.value - Value
   * req.query.name - Name
   * req.query.contact_name - Contact Name
   * req.query.email - EMail
   * req.query.postal_code - Postal Code
   * req.query.phone - Phone
   * req.query.table_name - table name (Mandatory if is not a query)
   * req.query.query - custom query instead a table name based on SQL
   * req.query.where_clause - where clause of search based on SQL
   * req.query.order_by_clause - order by clause based on SQL
   * req.query.limit - records limit
   * Details:
   */
  api.get('/business-partner', (req, res) => {
    if (req.query) {
      service.getBusinessPartner({
        token: req.headers.authorization,
        searchValue: req.query.search_value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertBusinessPartnerFromGRPC(response)
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * POST Create Business Partner
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.value - value
   * req.body.tax_id - Tax ID
   * req.body.duns - DUNS
   * req.body.naics - NAICS
   * req.body.name - Name
   * req.body.last_name - Last Name
   * req.body.description - Description
   * req.body.contact_name - Contact Name
   * req.body.email - EMail
   * req.body.phone - Phone
   * req.body.business_partner_group_uuid - Business Partner Group
   * req.body.address1 - Address 1
   * req.body.address2 - Address 2
   * req.body.address3 - Address 3
   * req.body.address4 - Address 4
   * req.body.city_uuid - City UUID
   * req.body.city_name - City Name
   * req.body.postal_code - Postal Code
   * req.body.region_uuid - Region UUID
   * req.body.region_name - Region Name
   * req.body.country_uuid - Country UUID
   * req.body.pos_uuid - POS UUID
   * Details:
   */
  api.post('/create-business-partner', (req, res) => {
    if (req.body) {
      service.createBusinessPartner({
        token: req.headers.authorization,
        value: req.body.value,
        taxId: req.body.tax_id,
        duns: req.body.duns,
        naics: req.body.naics,
        name: req.body.name,
        lastName: req.body.last_name,
        description: req.body.description,
        contactName: req.body.contact_name,
        email: req.body.email,
        phone: req.body.phone,
        businessPartnerGroupUuid: req.body.business_partner_group_uuid,
        address1: req.body.address1,
        address2: req.body.address2,
        address3: req.body.address3,
        address4: req.body.address4,
        cityUuid: req.body.city_uuid,
        cityName: req.body.city_name,
        postalCode: req.body.postal_code,
        regionUuid: req.body.region_uuid,
        regionName: req.body.region_name,
        countryUuid: req.body.country_uuid,
        posUuid: req.body.pos_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertBusinessPartnerFromGRPC(response)
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Business Partner
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.search_value - Search Value
   * req.query.value - Value
   * req.query.name - Name
   * req.query.contact_name - Contact Name
   * req.query.email - EMail
   * req.query.postal_code - Postal Code
   * req.query.phone - Phone
   * req.query.table_name - table name (Mandatory if is not a query)
   * req.query.query - custom query instead a table name based on SQL
   * req.query.where_clause - where clause of search based on SQL
   * req.query.order_by_clause - order by clause based on SQL
   * req.query.limit - records limit
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Details:
   */
  api.get('/business-partners', (req, res) => {
    if (req.query) {
      service.listBusinessPartners({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
        value: req.query.value,
        name: req.query.name,
        contactName: req.query.contact_name,
        email: req.query.email,
        postalCode: req.query.postal_code,
        phone: req.query.phone,
        tableName: req.query.tableName,
        filters: req.query.filters,
        columns: req.query.columns,
        //  Custom Query
        query: req.query.query,
        whereClause: req.query.where_clause,
        orderByClause: req.query.order_by_clause,
        limit: req.query.limit,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getBusinessPartnersList().map(businessPartner => {
                return convertBusinessPartnerFromGRPC(businessPartner)
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET Conversion Rate
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.conversion_type_uuid - Conversion Type reference UUID
   * req.query.currency_from_uuid - Currency From reference UUID
   * req.query.currency_to_uuid - Currency To reference UUID
   * req.query.conversion_date - Conversion Date reference UUID
   * Details:
   */
  api.get('/conversion-rate', (req, res) => {
    if (req.query) {
      service.getConversionRate({
        token: req.headers.authorization,
        conversionTypeUuid: req.query.conversion_type_uuid,
        currencyFromUuid: req.query.currency_from_uuid,
        currencyToUuid: req.query.currency_to_uuid,
        conversionDate: req.query.conversion_date
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertConversionRateFromGRPC(response)
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  /**
   * GET List Product Conversion
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.product_uuid - Currency From reference UUID
   * req.query.product_id - Currency To reference UUID
   * req.query.conversion_date - Conversion Date reference UUID
   * Details:
   */
  api.get('/list-product-conversion', (req, res) => {
    if (req.query) {
      service.listProductConversion({
        token: req.headers.authorization,
        productUuid: req.query.product_uuid,
        productId: req.query.product_id,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getProductConversionList().map(productConversion => {
                return convertProductConversionFromGRPC(productConversion)
              })
            }
          });
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          });
        }
      });
    }
  });

  return api;
};
