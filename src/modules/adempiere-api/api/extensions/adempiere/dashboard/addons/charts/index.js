import { Router } from 'express';
import {
  convertChartFromGRPC
} from '@adempiere/grpc-api/lib/convertBusinessData';

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)

  /**
   * GET Chart Data
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.uuid - uuid of chart
   * req.query.id - id of chart
   * Details:
   */
  api.get('/metrics', (req, res) => {
    if (req.query) {
      service.getChart({
        token: req.query.token,
        language: req.query.language,
        uuid: req.query.uuid,
        id: req.query.id
      }, function (err, response) {
        if (response) {
          res.json({
            code: 200,
            result: convertChartFromGRPC(response)
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

  return api
}
