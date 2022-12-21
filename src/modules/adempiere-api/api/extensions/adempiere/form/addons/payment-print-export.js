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

// import { convertEntitiesListFromGRPC } from '../../../util/convertData';
// import {
//   convertEntityFromGRPC
// } from '@adempiere/grpc-api/lib/convertBaseDataType';
import { convertLookupFromGRPC } from '@adempiere/grpc-api/lib/convertBusinessData';
import {
  getPaymentSelectionFromGRPC
} from '@adempiere/grpc-api/src/utils/paymentPrintExportFromGRPC';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/paymentPrintExport')
  const service = new ServiceApi(config);

  api.get('/payment-selection', (req, res) => {
    if (req.query) {
      service.getPaymentSelection({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getPaymentSelectionFromGRPC(
              response
            )
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

  api.post('/list-payment-selection', (req, res) => {
    if (req.body) {
      service.listPaymentSelection({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        contextAttributes: req.body.context_attributes,
        searchValue: req.body.search_value,
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
              records: response.getRecordsList().map(lookupItem => {
                return convertLookupFromGRPC(lookupItem)
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

  api.post('/list-payment-rules', (req, res) => {
    if (req.body) {
      service.listPaymentRules({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        searchValue: req.body.search_value,
        paymentSelectionId: req.body.payment_selection_id,
        paymentSelectionUuid: req.body.payment_selection_uuid,
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
              records: response.getRecordsList().map(lookupItem => {
                return convertLookupFromGRPC(lookupItem)
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

  api.get('document-no', (req, res) => {
    if (req.query) {
      service.getDocumentNo({
        token: req.query.token,
        language: req.query.language,
        // DSL Query
        paymentSelectionId: req.query.payment_selection_id,
        paymentSelectionUuid: req.query.payment_selection_uuid,
        paymentRuleId: req.query.payment_rule_id,
        paymentRuleUuid: req.query.payment_rule_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              document_no: response.getDocumentNo()
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      });
    }
  });

  api.post('/create-eft-payment', (req, res) => {
    if (req.body) {
      service.createEFTPayment({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        paymentSelectionId: req.body.payment_selection_id,
        paymentSelectionUuid: req.body.payment_selection_uuid,
        paymentRuleId: req.body.payment_rule_id,
        paymentRuleUuid: req.body.payment_rule_uuid,
        documentNo: req.body.document_no
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getPaymentSelectionFromGRPC(
              response
            )
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

  api.post('/print-payments', (req, res) => {
    if (req.body) {
      service.printPayments({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        paymentSelectionId: req.body.payment_selection_id,
        paymentSelectionUuid: req.body.payment_selection_uuid,
        paymentRuleId: req.body.payment_rule_id,
        paymentRuleUuid: req.body.payment_rule_uuid,
        documentNo: req.body.document_no
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getPaymentSelectionFromGRPC(
              response
            )
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

  api.post('/confirm-print', (req, res) => {
    if (req.body) {
      service.confirmPrint({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        paymentSelectionId: req.body.payment_selection_id,
        paymentSelectionUuid: req.body.payment_selection_uuid,
        paymentRuleId: req.body.payment_rule_id,
        paymentRuleUuid: req.body.payment_rule_uuid,
        documentNo: req.body.document_no
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getPaymentSelectionFromGRPC(
              response
            )
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

  api.post('/print-remittance', (req, res) => {
    if (req.body) {
      service.printRemittance({
        token: req.query.token,
        language: req.query.language,
        //  DSL Query
        paymentSelectionId: req.body.payment_selection_id,
        paymentSelectionUuid: req.body.payment_selection_uuid,
        paymentRuleId: req.body.payment_rule_id,
        paymentRuleUuid: req.body.payment_rule_uuid,
        documentNo: req.body.document_no
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getPaymentSelectionFromGRPC(
              response
            )
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