import { Router } from 'express';
import { convertEntitiesListFromGRPC } from '../util/convertData';
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/generalLedger')
  const service = new ServiceApi(config);

  /**
   * GET Find Accounting Combination
   */
  api.get('/accounting-combination', (req, res) => {
    if (req.query) {
      service.getAccountingCombination({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.query.id,
        uuid: req.query.uuid,
        value: req.query.value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntityFromGRPC(response)
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
   * GET List Accounting Combinations
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.search_value - search value optional
   * req.query.context_attributes - attributes
   * "context_attributes": [
      {
        "key": "AD_Client_ID",
        "value": 1000000
      },
      {
        "key": "Created",
        "value": "2022-06-13T16:14:23.000Z"
      },
      {
        "key": "IsActive",
        "value": true
      },
      {
        "key": "Value",
        "value": "Solo Pruebas"
      }
    ]
   * req.query.filters - filters to reduce list values
   */
  api.get('/accounting-combinations', (req, res) => {
    if (req.query) {
      service.listAccountingCombinations({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        filters: req.query.filters,
        contextAttributes: req.query.context_attributes,
        searchValue: req.query.search_value,
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

  api.get('/save-accounting-combination', (req, res) => {
    if (req.query) {
      service.saveAccountingCombination({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        contextAttributes: req.query.context_attributes,
        id: req.query.id,
        uuid: req.query.uuid,
        attributes: req.query.attributes
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntityFromGRPC(response)
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

  api.post('/start-re-post', (req, res) => {
    if (req.body) {
      service.srartRePost({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        tableName: req.body.table_name,
        recordId: req.body.record_id,
        recordUuid: req.body.record_uuid,
        isForce: req.body.is_force,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              error_msg: response.getErrorMsg()
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

  api.post('/accounting-facts', (req, res) => {
    if (req.body) {
      service.listAccoutingFacts({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        tableName: req.query.table_name,
        recordId: req.query.record_id,
        recordUuid: req.query.record_uuid,
        filters: req.body.filters,
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

  return api;
};
