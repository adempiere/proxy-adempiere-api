/*************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com                          *
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

import { Router } from 'express';
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

import {
  getMatchesTypeFromGRPC
} from '../.././grpc-api/utils/matchPoReceiptInvocice';
import { getDecimalFromGRPC } from '../.././grpc-api/utils/baseDataTypeFromGRPC.js';
import { getLookupItemFromGRPC } from '../.././grpc-api/utils/userInterfaceFromGRPC';

function getProductFromGRPC (productToConvert) {
  if (!productToConvert) {
    return undefined;
  }
  return {
    id: productToConvert.getId(),
    uuid: productToConvert.getUuid(),
    upc: productToConvert.getUpc(),
    sku: productToConvert.getSku(),
    value: productToConvert.getValue(),
    name: productToConvert.getName()
  };
}

function getListMatcheFromGRPC (matchedFrom) {
  if (!matchedFrom) {
    return undefined;
  }
  return {
    id: matchedFrom.getId(),
    uuid: matchedFrom.getUuid(),
    headerId: matchedFrom.getHeaderId(),
    headerUuid: matchedFrom.getHeaderUuid(),
    documentNo: matchedFrom.getDocumentNo(),
    date: matchedFrom.getDate(),
    vendorId: matchedFrom.getVendorId(),
    vendorName: matchedFrom.getVendorName(),
    lineNo: matchedFrom.getLineNo(),
    productId: matchedFrom.getProductId(),
    productName: matchedFrom.getProductName(),
    quantity: getDecimalFromGRPC(
      matchedFrom.getQuantity()
    ),
    matchedQuantity: getDecimalFromGRPC(
      matchedFrom.getMatchedQuantity()
    ),
    matchType: matchedFrom.getMatchType()
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('../.././grpc-api/services/matchPoReceiptInvoice');
  const service = new ServiceApi(config)

  api.get('/', (req, res) => {
    res.json({
      code: 200,
      result: [
        {
          path: '/exists-issues',
          method: 'GET'
        },
        {
          path: '/create-issue',
          method: 'POST'
        }
      ]
    });
  });

  /**
   * POST List Request Types
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-matches-types-from', (req, res) => {
    if (req.body) {
      service.listMatchesTypes({
        token: req.headers.authorization,
        // Page Data
        searchValue: req.query.search_value,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(matchesTypes => {
                return getMatchesTypeFromGRPC(matchesTypes);
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
   * GET listMatchesTypesTo
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-matches-types-to', (req, res) => {
    if (req.body) {
      service.ListMatchesTypesFor({
        token: req.headers.authorization,
        // Page Data
        searchValue: req.query.search_value,
        pageSize: req.query.page_size,
        pageToken: req.query.page_token,
        matchFromType: req.query.match_from_type
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(matchesTypes => {
                return getLookupItemFromGRPC(matchesTypes);
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
   * GET listSearchModes
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-search-modes', (req, res) => {
    if (req.body) {
      service.ListSearchModes({
        token: req.headers.authorization,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token,
        searchValue: req.query.search_value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(matchesTypes => {
                return getLookupItemFromGRPC(matchesTypes);
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
   * GET ListVendors
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-vendors', (req, res) => {
    if (req.body) {
      service.ListVendors({
        token: req.headers.authorization,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token,
        searchValue: req.query.search_value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(lookupItem => {
                return getLookupItemFromGRPC(lookupItem);
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
   * GET ListProducts
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-products', (req, res) => {
    if (req.body) {
      service.ListProducts({
        token: req.headers.authorization,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token,
        searchValue: req.query.search_value
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(matchedFrom => {
                return getProductFromGRPC(matchedFrom);
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
   * GET List Matched From
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-match-from', (req, res) => {
    if (req.body) {
      service.ListMatchedFrom({
        token: req.headers.authorization,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token,
        matchMode: req.query.match_mode,
        searchValue: req.query.search_value,
        matchFromType: req.query.match_from_type,
        matchToType: req.query.match_to_type,
        vendorId: req.query.vendor_id,
        productId: req.query.product_id,
        dateFrom: req.query.date_from,
        dateto: req.query.date_to
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(matchedFrom => {
                return getListMatcheFromGRPC(matchedFrom);
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
   * GET List Matched To
   *
   * req.query.token - user token
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   */
  api.get('/list-match-to', (req, res) => {
    if (req.body) {
      service.ListMatchedTo({
        token: req.headers.authorization,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token,
        matchMode: req.query.match_mode,
        searchValue: req.query.search_value,
        matchFromType: req.query.match_from_type,
        matchToType: req.query.match_to_type,
        matchFromSelectedId: req.query.match_from_selected_id,
        vendorId: req.query.vendor_id,
        productId: req.query.product_id,
        dateFrom: req.query.date_from,
        dateto: req.query.date_to,
        isSameQuantity: req.query.is_same_quantity
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(matchedFrom => {
                return getListMatcheFromGRPC(matchedFrom);
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
   * POST Process
   * req.query.token - user token
   * req.body.quantity - user quantity
   * req.body.MatchMode - user MatchMode
   * req.body.MatchType - user MatchType
   * req.body.matchFromType - user matchFromType
   * req.body.matchFromSelectedId - user matchFromSelectedId
   * req.body.matchedToSelections - user matchedToSelections
   */
  api.post('/process', (req, res) => {
    service.Process({
      token: req.headers.authorization,
      // DSL Query
      matchMode: req.body.match_mode,
      matchFromType: req.body.match_from_type,
      matchToType: req.body.match_to_type,
      matchFromSelectedId: req.body.match_from_selected_id,
      matchedToSelectionsList: req.body.matched_to_selections,
      quantity: req.body.quantity
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            message: response.getMessage()
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  return api;
};
