/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client                                     *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
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
  };
}

function getTreeType (treeType) {
  if (!treeType) {
    return undefined;
  }

  return {
    id: treeType.getId(),
    uuid: treeType.getUuid(),
    value: treeType.getValue(),
    name: treeType.getName(),
    description: treeType.getDescription()
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('../.././grpc-api/services/userInterface.js')
  const service = new ServiceApi(config)

  /**
   * POST Update Tab Sequences
   *
   * req.query.token - user token
   * req.body.table_name - Table Name
   * req.body.id - Record ID
   * req.body.uuid - Record UUID
   * Details:
   */
  api.post('/list-tree-nodes', (req, res) => {
    if (req.body) {
      service.listTreeNodes({
        token: req.headers.authorization,
        //
        tabId: req.body.tab_id,
        tableName: req.body.table_name,
        id: req.body.id,
        uuid: req.body.uuid,
        elementId: req.body.element_id,
        elementUuid: req.body.element_uuid,
        contextAttributes: req.body.context_attributes
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              record_count: response.getRecordCount(),
              next_page_token: response.getNextPageToken(),
              records: response.getRecordsList().map(childNode => {
                return getTreeNode(childNode);
              }),
              tree_type: getTreeType(
                response.getTreeType()
              )
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

  return api;
};
