/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client                                     *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

import { Router } from 'express';

// Recursive function for tree node
function getTreeNode (treeNode) {
  if (!treeNode) {
    return undefined
  }

  return {
    id: treeNode.getId(),
    uuid: treeNode.getUuid(),
    parent_id: treeNode.getParentId(),
    parent_uuid: treeNode.getParentUuid(),
    record_id: treeNode.getRecordId(),
    record_uuid: treeNode.getRecordUuid(),
    name: treeNode.getName(),
    description: treeNode.getDescription(),
    sequence: treeNode.getSequence(),
    is_active: treeNode.getIsActive(),
    is_summary: treeNode.getIsSummary(),
    childs: treeNode.getChildsList().map(child => {
      return getTreeNode(child)
    })
  }
}

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/userInterface')
  const service = new ServiceApi(config)

  /**
   * POST Update Tab Sequences
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.body.table_name - Table Name
   * req.body.id - Record ID
   * req.body.uuid - Record UUID
   * Details:
   */
  api.post('/list-tree-nodes', (req, res) => {
    if (req.body) {
      service.listTreeNodes({
        token: req.query.token,
        language: req.query.language,
        //
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        elementId: req.body.element_id,
        elementUuid: req.body.element_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(childNode => {
                return getTreeNode(childNode);
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

  return api;
};
