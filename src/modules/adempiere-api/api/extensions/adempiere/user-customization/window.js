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

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userCustomization');
  const service = new ServiceApi(config);

  /**
   * POST Save Window Customization
   *
   * @param {string} token - user token
   * @param {string} language - login language
   * @param {string} tab_uuid - tab uuid
   * @param {number} level - asp level to apply (user/role/client)
   * @param {number} level_id - value of level
   * @param {string} level_uuid - value of level
   * @param {array} field_attributes - attributes to set
   *  [{
   *    columnName, sequence, color, isDefaultDisplayed,
   *    displaySize, displayComponentType, componenTemplateCode
   *  }]
   */
  api.post('/save-window-customization', (req, res) => {
    if (req.body) {
      service.saveWindowCustomization({
        token: req.query.token,
        language: req.query.language,
        //
        tabUuid: req.body.tab_uuid,
        level: req.body.level,
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

  return api
}
