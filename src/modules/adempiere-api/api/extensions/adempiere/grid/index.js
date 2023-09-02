import { Router } from 'express';
import { convertEntitiesListFromGRPC } from '../util/convertData';

module.exports = ({ config }) => {
  let api = Router();
  const ServiceApi = require('.././grpc-api')
  let service = new ServiceApi(config);

  /**
   * GET Default Value
   *
   * req.query.token - user token
   * req.query.process_parameter_uuid - when ius called from process
   * req.query.field_uuid - when ius called from window
   * req.query.browse_field_uuid - when ius called from browser
   * req.query.reference_uuid - when ius called from reference only
   * req.query.column_uuid - when ius called from column uuid
   * req.query.column_name - when ius called from column name only
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
   */
  api.get('/general-info', (req, res) => {
    if (req.query) {
      service.listGeneralInfo({
        token: req.headers.authorization,
        //  Default Value Query
        fieldUuid: req.query.field_uuid,
        processParameterUuid: req.query.process_parameter_uuid,
        browseFieldUuid: req.query.browse_field_uuid,
        referenceUuid: req.query.reference_uuid,
        columnUuid: req.query.column_uuid,
        tableName: req.query.table_name,
        columnName: req.query.column_name,
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

  return api;
};
