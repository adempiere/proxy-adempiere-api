import { Router } from 'express';
import {
  convertCountryFromGRPC,
  convertOrganizationFromGRPC,
  convertWarehouseFromGRPC,
  convertLanguageFromGRPC,
  convertBusinessPartnerFromGRPC,
  convertConversionRateFromGRPC
} from '@adempiere/grpc-api/lib/convertCoreFunctionality';
export default ({ config, db, service }) => {
  let coreService = Router();

  /**
   * GET Country
   *
   * req.query.token - user token
   * req.body.id - id of country
   * req.body.uuid - uuid of country
   * req.query.language - login language
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.get('/country', (req, res) => {
    if (req.query) {
      service.getCountry({
        token: req.query.token,
        language: req.query.language,
        id: req.query.id,
        uuid: req.query.uuid
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertCountryFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST List Organizations
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.role_uuid - uuid of current role
   * req.body.role_id - id of current role
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/list-organizations', (req, res) => {
    if (req.body) {
      service.listOrganizations({
        token: req.query.token,
        language: req.query.language,
        roleUuid: req.body.role_uuid,
        roleId: req.body.role_id,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST List Warehouses
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.organization_uuid - uuid of current organization
   * req.body.organization_id - id of current organization
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/list-warehouses', (req, res) => {
    if (req.body) {
      service.listWarehouses({
        token: req.query.token,
        language: req.query.language,
        organizationUuid: req.body.organization_uuid,
        organizationId: req.body.organization_id,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST List Languages
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/list-languages', (req, res) => {
    if (req.body) {
      service.listLanguages({
        token: req.query.token,
        language: req.query.language,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Get Business Partner
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.search_value - Search Value
   * req.body.value - Value
   * req.body.name - Name
   * req.body.contact_name - Contact Name
   * req.body.email - EMail
   * req.body.postal_code - Postal Code
   * req.body.phone - Phone
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/get-business-partner', (req, res) => {
    if (req.body) {
      service.getBusinessPartner({
        token: req.query.token,
        language: req.query.language,
        searchValue: req.body.search_value,
        value: req.body.value,
        name: req.body.name,
        contactName: req.body.contact_name,
        email: req.body.email,
        postalCode: req.body.postal_code,
        phone: req.body.phone,
        tableName: req.body.tableName,
        filters: req.body.filters,
        columns: req.body.columns,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertBusinessPartnerFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Create Business Partner
   *
   * req.query.token - user token
   * req.query.language - login language
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
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/create-business-partner', (req, res) => {
    if (req.body) {
      service.createBusinessPartner({
        token: req.query.token,
        language: req.query.language,
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
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertBusinessPartnerFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST List Business Partner
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.search_value - Search Value
   * req.body.value - Value
   * req.body.name - Name
   * req.body.contact_name - Contact Name
   * req.body.email - EMail
   * req.body.postal_code - Postal Code
   * req.body.phone - Phone
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/list-business-partner', (req, res) => {
    if (req.body) {
      service.listBusinessPartners({
        token: req.query.token,
        language: req.query.language,
        searchValue: req.body.search_value,
        value: req.body.value,
        name: req.body.name,
        contactName: req.body.contact_name,
        email: req.body.email,
        postalCode: req.body.postal_code,
        phone: req.body.phone,
        tableName: req.body.tableName,
        filters: req.body.filters,
        columns: req.body.columns,
        //  Custom Query
        query: req.body.query,
        whereClause: req.body.where_clause,
        orderByClause: req.body.order_by_clause,
        limit: req.body.limit,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, function (err, response) {
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
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Get Conversion Rate
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * Body:
   * req.body.conversion_type_uuid - Conversion Type reference UUID
   * req.body.currency_from_uuid - Currency From reference UUID
   * req.body.currency_to_uuid - Currency To reference UUID
   * req.body.conversion_date - Conversion Date reference UUID
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  coreService.post('/get-conversion-rate', (req, res) => {
    if (req.body) {
      service.getConversionRate({
        token: req.query.token,
        language: req.query.language,
        conversionTypeUuid: req.body.conversion_type_uuid,
        currencyFromUuid: req.body.currency_from_uuid,
        currencyToUuid: req.body.currency_to_uuid,
        conversionDate: req.body.conversion_date
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertConversionRateFromGRPC(response)
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  return coreService;
};
