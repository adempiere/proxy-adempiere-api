import { Router } from 'express'
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  // console.log('Config: ', config)
  let service = new ServiceApi(config)
  service.initService()

  /**
   * List Banks
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.language - login language
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.post('/list-banks', (req, res) => {
    if (req.body) {
      service.listEntities({
        token: req.query.token,
        language: req.query.language,
        tableName: 'C_Bank',
        whereClause: `C_Bank.IsActive = 'Y'`,
        orderByClause: 'C_Bank.Name',
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
              banks: response.getRecordsList().map(entity => {
                let bank = convertEntityFromGRPC(entity)
                let name = bank.attributes.find(attribute => attribute.key === 'Name').value
                let id = bank.attributes.find(attribute => attribute.key === 'C_Bank_ID').value
                let uuid = bank.attributes.find(attribute => attribute.key === 'UUID').value
                let routingNo = bank.attributes.find(attribute => attribute.key === 'RoutingNo').value
                return {
                  id: id,
                  routing_no: routingNo,
                  uuid: uuid,
                  name: name
                }
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
  })

  return api
}
