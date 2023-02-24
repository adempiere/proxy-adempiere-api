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
import { convertEntitiesListFromGRPC } from '../util/convertData';
import {
  convertProductAttributeSet,
  convertProductAttributeSetInstance,
  convertListProductAttributeSetInstances,
  convertListAvailableWarehouses,
  convertListLocators
} from '../util/convertMaterialManagement';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/materialManagement')
  const service = new ServiceApi(config);

  /**
   * GET List Product Storage
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.query.context_attributes - attributes
   * req.query.filters - filters to reduce list values
   */
  api.get('/list-product-storage', (req, res) => {
    if (req.query) {
      service.listProductStorage({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        tableName: req.query.table_name,
        recordId: req.query.record_id,
        recordUuid: req.query.record_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntitiesListFromGRPC(response)
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
   * POST List Product Attribute Set Instances
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.query.context_attributes - attributes
   * req.query.filters - filters to reduce list values
   */
  api.post('/get-product-attribute-set', (req, res) => {
    if (req.body) {
      service.getProductAttributeSet({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.body.id,
        uuid: req.body.uuid,
        productId: req.body.product_id,
        productUuid: req.body.product_uuid,
        productAttributeSetInstanceId: req.body.product_attribute_set_instance_id,
        productAttributeSetInstanceUuid: req.body.product_attribute_set_instance_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertProductAttributeSet(response)
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
   * POST Get Product Attribute Set Instances
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - attribute set instance identifier
   * req.body.uuid - attribute set instance universally unique identifier
   * req.body.product_id
   * req.body.product_uuid
   */
  api.post('/get-product-attribute-set-instance', (req, res) => {
    if (req.body) {
      service.getProductAttributeSetInstance({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.body.id,
        uuid: req.body.uuid,
        productId: req.body.product_id,
        productUuid: req.body.product_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertProductAttributeSetInstance(response)
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
   * POST List Product Attribute Set Instances
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.query.context_attributes - attributes
   * req.query.filters - filters to reduce list values
   */
  api.post('/list-product-attribute-set-instances', (req, res) => {
    if (req.body) {
      service.listProductAttributeSetInstances({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        filters: req.body.filters,
        productId: req.body.product_id,
        productUuid: req.body.product_uuid,
        productAttributeSetId: req.body.product_attribute_set_id,
        productAttributeSetUuid: req.body.product_attribute_set_uuid,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertListProductAttributeSetInstances(response)
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
   * POST Save Product Attribute Set Instance
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.id - attribute set instance identifier
   * req.body.uuid - attribute set instance universally unique identifier
   * req.body.product_id
   * req.body.product_uuid
   * req.body.product_attribute_set_id,
   * req.body.product_attribute_set_uuid,
   * req.body.attributes - attributes to save
   */
  api.post('/save-product-attribute-set-instance', (req, res) => {
    if (req.body) {
      service.saveProductAttributeSetInstance({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.body.id,
        uuid: req.body.uuid,
        productId: req.body.product_id,
        productUuid: req.body.product_uuid,
        productAttributeSetId: req.body.product_attribute_set_id,
        productAttributeSetUuid: req.body.product_attribute_set_uuid,
        attributes: req.body.attributes
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertProductAttributeSetInstance(response)
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
   * POST List Available Warehouses
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.body.warehouse_id
   * req.body.warehouse_uuid
   */
  api.post('/list-available-warehouses', (req, res) => {
    if (req.body) {
      service.listAvailableWarehouses({
        token: req.query.token,
        language: req.query.language,
        // DSL Query
        searchValue: req.query.search_value,
        warehouseId: req.body.warehouse_id,
        warehouseUuid: req.body.warehouse_uuid,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertListAvailableWarehouses(response)
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
   * POST List Warehouses Locators
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.body.warehouse_id
   * req.body.warehouse_uuid
   */
  api.post('/list-warehouse-locators', (req, res) => {
    if (req.body) {
      service.listLocators({
        token: req.query.token,
        language: req.query.language,
        // DSL Query
        searchValue: req.query.search_value,
        warehouseId: req.body.warehouse_id,
        warehouseUuid: req.body.warehouse_uuid,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertListLocators(response)
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

  return api;
};
