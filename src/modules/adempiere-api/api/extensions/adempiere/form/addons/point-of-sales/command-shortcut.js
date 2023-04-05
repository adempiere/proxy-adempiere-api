/************************************************************************************
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
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

function getCommnandShortcutFromGRPC (commandShortcutToConvert) {
  if (!commandShortcutToConvert) {
    return undefined;
  }
  return {
    id: commandShortcutToConvert.getId(),
    uuid: commandShortcutToConvert.getUuid(),
    pos_id: commandShortcutToConvert.getPosId(),
    pos_uuid: commandShortcutToConvert.getPosUuid(),
    command: commandShortcutToConvert.getCommand(),
    shortcut: commandShortcutToConvert.getShortcut()
  }
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/pointOfSales');
  const service = new ServiceApi(config);

  api.post('/', (req, res) => {
    if (req.body) {
      service.saveCommandShortcut({
        token: req.headers.authorization,
        // DSL Query
        posUuid: req.body.pos_uuid,
        command: req.body.command,
        shortcut: req.body.shortcut
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getCommnandShortcutFromGRPC(
              response
            )
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
   * GET List Command Shortcuts
   */
  api.get('/', (req, res) => {
    if (req.query) {
      service.listCommandShortcuts({
        token: req.headers.authorization,
        // DSL Query
        posUuid: req.query.pos_uuid,
        searchValue: req.query.search_value,
        // Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(mnemonicCommand => {
                return getCommnandShortcutFromGRPC(mnemonicCommand);
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

  api.delete('/', (req, res) => {
    service.deleteCommandShortcut({
      token: req.headers.authorization,
      // DSL Query
      posUuid: req.query.pos_uuid,
      id: req.query.id,
      uuid: req.query.uuid
    }, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: 'ok'
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
