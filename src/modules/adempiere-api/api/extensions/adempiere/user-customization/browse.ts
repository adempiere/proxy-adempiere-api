/************************************************************************************
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                  *
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
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userCustomization');
  const service = new ServiceApi(config);

  /**
   * POST Save Browse Customization
   *
   * @param {string} token - user token
   * @param {string} browseUuid - browse uuid
   * @param {number} level_type - asp level to apply (user/role/client)
   * @param {number} level_id - value of level
   * @param {string} level_uuid - value of level
   * @param {array} field_attributes - attributes to set
   *  [{
   *    columnName, sequence, color, isDefaultDisplayed,
   *    displaySize, displayComponentType, componenTemplateCode
   *  }]
   */
  api.post('/save-browse-customization', (req, res) => {
    if (req.body) {
      service.saveBrowseCustomization({
        token: req.headers.authorization,
        //
        browseUuid: req.body.browse_uuid,
        levelType: req.body.level_type,
        levelId: req.body.level_id,
        levelUuid: req.body.level_uuid,
        fieldAttributes: req.body.field_attributes
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'OK'
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

  return api;
}
