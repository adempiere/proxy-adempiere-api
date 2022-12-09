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
  convertPendingDocumentFromGRPC
} from '@adempiere/grpc-api/src/utils/dashboardingFromGRPC';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/dashboarding')
  const service = new ServiceApi(config)

  /**
   * GET Pending Documents
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.query.user_uuid - uuid of current user
   * req.query.user_id - id of current user
   * req.query.role_uuid - uuid of current role
   * req.query.role_id - id of current role
   * Details:
   */
  api.get('/pending-documents', (req, res) => {
    if (req.query) {
      service.listPendingDocuments({
        token: req.query.token,
        language: req.query.language,
        userUuid: req.query.user_uuid,
        userId: req.query.user_id,
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
              records: response.getPendingDocumentsList().map(pendingDocument => {
                return convertPendingDocumentFromGRPC(pendingDocument)
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

  return api
}
