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
import fs from 'fs';
import multer from 'multer';
import {
  convertAttachmentFromGRPC,
  convertResourceReferenceFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

const os = require('os');
const path = require('path');

function getCompleteFileName (fileName) {
  return path.join(os.tmpdir(), fileName);
}

const storage = multer.diskStorage({
  destination: os.tmpdir(),
  filename: (req, file, callback) => {
    callback(null, req.body.file_name);
  }
})

const upload = multer({
  storage: storage
})

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/fileManagement')
  const service = new ServiceApi(config)

  /**
   * GET Exists Attachment
   *
   * req.query.token - user token
   * req.query.record_id - id of entity
   * req.query.record_uuid - uuid of entity
   * req.query.table_name - table name of entity
   */
  api.get('/exists-attachment', (req, res) => {
    if (req.query) {
      service.existsAttachment({
        token: req.headers.authorization,
        // attachment information
        tableName: req.query.table_name,
        recordId: req.query.record_id,
        recordUuid: req.query.record_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response.getRecordCount()
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

  /**
   * GET Entity Attachment Information
   *
   * req.query.token - user token
   * req.query.id - id of entity
   * req.query.uuid - uuid of entity
   * req.query.table_name - table name of entity
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/attachment', (req, res) => {
    if (req.query) {
      service.getAttachment({
        token: req.headers.authorization,
        tableName: req.query.table_name,
        id: req.query.id,
        uuid: req.query.uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertAttachmentFromGRPC(response)
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

  /**
   * Upload attachemnt file
   * @param {string} file_name
   * @param {string} resource_uuid
   */
  api.post('/save-attachment', upload.single('file'), (req, res) => {
    if (req.body) {
      const fileName = req.body.file_name;
      const completeName = getCompleteFileName(fileName);
      const resourceUuid = req.body.resource_uuid;
      const token = req.headers.authorization;

      const call = service.loadResource({
        token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response
          });
        } else if (err) {
          if (fs.existsSync(completeName)) {
            console.log('Delete file: ' + fileName);
            fs.promises.unlink(completeName);
          }
          res.json({
            code: 500,
            result: err.details
          });
        }
        call.end();
      });

      const stubLoader = require('@adempiere/grpc-api/src/grpc/proto/file_management_pb.js');
      const { LoadResourceRequest } = stubLoader;
      const { getDecimalFromNumber } = require('@adempiere/grpc-api/lib/convertValues.js');

      const bufferSize = 256 * 1024; // 256k
      const buffer = fs.readFileSync(completeName);
      const length = buffer.length;
      let chunkPosition = 0;
      while (chunkPosition < length) {
        let bytes = buffer.slice(chunkPosition, chunkPosition += bufferSize);
        const request = new LoadResourceRequest();
        request.setResourceUuid(resourceUuid);
        request.setFileSize(getDecimalFromNumber(length));
        request.setData(bytes);
        call.write(request);
      }
      setTimeout(() => {
        call.end();
        if (fs.existsSync(completeName)) {
          console.log('Delete temporary file uploaded: ' + fileName)
          fs.promises.unlink(completeName);
        }
      }, 300);
    }
  });

  /**
   * POST Resource Reference
   *
   * req.query.token - user token
   * req.query.image_id - id of image
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.post('/set-resource-reference', (req, res) => {
    if (req.body) {
      service.setResourceReference({
        token: req.headers.authorization,
        // attachment values
        tableName: req.body.table_name,
        recordId: req.body.record_id,
        recordUuid: req.body.record_uuid,
        // attachment reference values
        textMessage: req.body.text_message,
        fileName: req.body.file_name,
        fileSize: req.body.file_size
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceReferenceFromGRPC(response)
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

  /**
   * GET Resource Reference Information
   *
   * req.query.token - user token
   * req.query.image_id - id of image
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/resource-reference', (req, res) => {
    if (req.query) {
      service.getResourceReference({
        token: req.headers.authorization,
        imageId: req.query.image_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertResourceReferenceFromGRPC(response)
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

  /**
   * Delete Resource Reference Information
   *
   * req.query.token - user token
   * req.query.image_id - id of image
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/delete-resource-reference', (req, res) => {
    if (req.query) {
      service.deleteResourceReference({
        token: req.headers.authorization,
        resourceId: req.query.resource_id,
        resourceUuid: req.query.resource_uuid,
        resourceName: req.query.resource_name
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: 'Ok'
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
