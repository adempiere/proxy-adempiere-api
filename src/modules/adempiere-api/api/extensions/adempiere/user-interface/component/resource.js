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
import mimeTypes from 'mime-types';
import {
  convertAttachmentFromGRPC,
  convertResourceReferenceFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';

const uploadPath = 'tmp'

const storage = multer.diskStorage({
  destination: uploadPath + '/',
  filename: (req, file, callback) => {
    const dir = uploadPath;
    // create folder if no exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    callback(null, file.originalname + '.' + (mimeTypes.extension(file.mimetype)));
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
   * req.query.language - login language
   */
  api.get('/exists-attachment', (req, res) => {
    if (req.query) {
      service.existsAttachment({
        token: req.query.token,
        language: req.query.language,
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
   * req.query.language - login language
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/attachment', (req, res) => {
    if (req.query) {
      service.getAttachment({
        token: req.query.token,
        language: req.query.language,
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
   * TODO: Add support in the BackEnd and Generate Proto
   */
  api.post('/save-attachment', upload.single('file'), (req, res) => {
    if (req.body) {
      const fileName = req.body.file_name;

      service.loadResource({
        token: req.query.token,
        language: req.query.language,
        // attachment resource
        fileName: fileName,
        resourceUuid: req.body.resource_uuid,
        file: req.file
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response
          })
        } else if (err) {
          const filePath = uploadPath + '/' + fileName
          if (fs.existsSync(filePath)) {
            console.log('Delete file: ' + fileName)
            fs.promises.unlink(filePath);
          }
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Resource Reference
   *
   * req.query.token - user token
   * req.query.image_id - id of image
   * req.query.language - login language
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.post('/set-resource-reference', (req, res) => {
    if (req.body) {
      service.setResourceReference({
        token: req.query.token,
        language: req.query.language,
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
   * req.query.language - login language
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/resource-reference', (req, res) => {
    if (req.query) {
      service.getResourceReference({
        token: req.query.token,
        language: req.query.language,
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
   * req.query.language - login language
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/delete-resource-reference', (req, res) => {
    if (req.query) {
      service.deleteResourceReference({
        token: req.query.token,
        language: req.query.language,
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
