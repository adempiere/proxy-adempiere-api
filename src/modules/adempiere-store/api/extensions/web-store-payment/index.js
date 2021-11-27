import { Router } from 'express'
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

module.exports = ({ config, db }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  // console.log('Config: ', config)
  let service = new ServiceApi(config)

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
                let name = bank.attributes.find(attribute => attribute.key === 'Name')
                let id = bank.attributes.find(attribute => attribute.key === 'C_Bank_ID')
                let uuid = bank.attributes.find(attribute => attribute.key === 'UUID')
                let routingNo = bank.attributes.find(attribute => attribute.key === 'RoutingNo')
                if (!bank) {
                  bank = {}
                }
                if (!name) {
                  name = {}
                }
                if (!id) {
                  id = {}
                }
                if (!uuid) {
                  uuid = {}
                }
                if (!routingNo) {
                  routingNo = {}
                }
                return {
                  id: id.value,
                  routing_no: routingNo.value,
                  uuid: uuid.value,
                  name: name.value
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

  /**
   * List Currencies
   *
   * req.query.token - user token
   * req.query.page_size - custom page size for batch
   * req.query.page_token - specific page token
   * req.query.language - login language
   *
   * Details: https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.post('/list-currencies', (req, res) => {
    if (req.body) {
      service.listEntities({
        token: req.query.token,
        language: req.query.language,
        tableName: 'C_Currency',
        whereClause: `C_Currency.IsActive = 'Y' AND EXISTS(SELECT 1 FROM C_Conversion_Rate r WHERE (r.C_Currency_ID = C_Currency.C_Currency_ID OR r.C_Currency_ID_To = C_Currency.C_Currency_ID) AND r.IsActive = 'Y')`,
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
              currencies: response.getRecordsList().map(entity => {
                let currency = convertEntityFromGRPC(entity)
                let description = currency.attributes.find(attribute => attribute.key === 'Description')
                let id = currency.attributes.find(attribute => attribute.key === 'C_Currency_ID')
                let uuid = currency.attributes.find(attribute => attribute.key === 'UUID')
                let isoCode = currency.attributes.find(attribute => attribute.key === 'ISO_Code')
                let currencySymbol = currency.attributes.find(attribute => attribute.key === 'CurSymbol')
                if (!description) {
                  description = {}
                }
                if (!id) {
                  id = {}
                }
                if (!uuid) {
                  uuid = {}
                }
                if (!isoCode) {
                  isoCode = {}
                }
                if (!currencySymbol) {
                  currencySymbol = {}
                }
                return {
                  id: id.value,
                  uuid: uuid.value,
                  currency_code: isoCode.value,
                  currency_symbol: currencySymbol.value,
                  description: description.value
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
