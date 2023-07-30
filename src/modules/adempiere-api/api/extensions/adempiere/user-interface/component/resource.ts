/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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

import os from 'os'
import fs from 'fs';
import path from 'path'
import multer from 'multer';

import {
  getResourceReferenceFromGRPC
} from '@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js';

function getCompleteFileName (fileName) {
  return path.join(os.tmpdir(), fileName);
}

const storage = multer.diskStorage({
  destination: os.tmpdir(),
  filename: (req, file, callback) => {
    const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    if (isEmptyValue(req.body)) {
      callback(new Error('Save Attachment: Without body request'));
    } else if (isEmptyValue(req.body.file_name)) {
      callback(new Error('Save Attachment: Without file properites'));
    } else {
      callback(null, req.body.file_name);
    }
  }
});

const upload = multer({
  storage: storage
});

function getAttachmentFromGRPC (attachmentToConvert) {
  if (!attachmentToConvert) {
    return undefined;
  }
  return {
    id: attachmentToConvert.getId(),
    uuid: attachmentToConvert.getUuid(),
    attachment_uuid: attachmentToConvert.getUuid(), // TODO: Remove when add support to uuid attribute
    title: attachmentToConvert.getTitle(),
    text_message: attachmentToConvert.getTextMessage(),
    resource_references_list: attachmentToConvert.getResourceReferencesList().map(itemResourceReference => {
      return getResourceReferenceFromGRPC(
        itemResourceReference
      );
    })
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  const api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/fileManagement');
  const service = new ServiceApi(config);

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
   * GET Entity Attachment Information
   *
   * req.query.token - user token
   * req.query.id - id of attachment
   * req.query.uuid - uuid of attachment
   * req.query.text_message - message or description
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.put('/attachment-description', (req, res) => {
    if (req.body) {
      service.setAttachmentDescription({
        token: req.headers.authorization,
        id: req.body.id,
        uuid: req.body.uuid,
        textMessage: req.body.text_message
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getAttachmentFromGRPC(response)
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
        recordId: req.query.record_id || req.query.id, // TODO: Remove with support on client
        recordUuid: req.query.record_uuid || req.query.uuid // TODO: Remove with support on client
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getAttachmentFromGRPC(response)
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

  const uploadSingleFile = upload.single('file');
  /**
   * Upload attachemnt file
   * @param {string} file_name
   * @param {number} resource_id
   * @param {string} resource_uuid
   */
  api.post('/save-attachment', (req, res) => {
    uploadSingleFile(req, res, (error) => {
      if (error) {
        return res.json({
          code: 400,
          result: error.message
        });
      }

      const { getValidInteger, isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      if (isEmptyValue(req.body)) {
        return res.json({
          code: 400,
          result: 'Save Attachment: Without body request'
        });
      }

      const resourceId = getValidInteger(
        req.body.resource_id
      );
      const resourceUuid = req.body.resource_uuid;
      if (resourceId <= 0 && isEmptyValue(resourceUuid)) {
        return res.json({
          code: 400,
          result: 'Save Attachment: Without Resource Identifier'
        });
      }

      const fileName = req.body.file_name;
      if (isEmptyValue(fileName)) {
        return res.json({
          code: 400,
          result: 'Save Attachment: Without file properites'
        });
      }
      const completeName = getCompleteFileName(fileName);
      const token = req.headers.authorization;

      const call = service.loadResource({
        token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getResourceReferenceFromGRPC(response)
          });
        } else if (err) {
          if (fs.existsSync(completeName)) {
            console.log('Error delete file: ' + fileName);
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
      const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

      const bufferSize = 256 * 1024; // 256k
      const buffer = fs.readFileSync(completeName);
      const length = buffer.length;
      let chunkPosition = 0;
      while (chunkPosition < length) {
        const request = new LoadResourceRequest();
        request.setResourceId(resourceId);
        request.setResourceUuid(resourceUuid);
        request.setFileSize(
          getDecimalToGRPC(length)
        );

        let bytes = buffer.slice(chunkPosition, chunkPosition += bufferSize);
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
    });
  });

  /**
   * PUT Attachment Description
   *
   * req.query.token - user token
   * req.body.id - id of resource reference
   * req.body.uuid - uuid of resource reference
   * req.body.text_message - text message of resource reference
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.put('/set-attachment-description', (req, res) => {
    if (req.body) {
      service.setAttachmentDescription({
        token: req.headers.authorization,
        // attachment values
        id: req.body.id,
        uuid: req.body.uuid,
        textMessage: req.body.text_message
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getAttachmentFromGRPC(response)
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
        resourceType: req.body.resource_type,
        resourceId: req.body.resource_id,
        // attachment values
        tableName: req.body.table_name,
        recordId: req.body.record_id,
        recordUuid: req.body.record_uuid,
        // attachment reference values
        description: req.body.description,
        textMessage: req.body.text_message,
        fileName: req.body.file_name,
        fileSize: req.body.file_size
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getResourceReferenceFromGRPC(response)
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
   * PUT Resource Reference Description
   *
   * req.query.token - user token
   * req.body.id - id of resource reference
   * req.body.uuid - uuid of resource reference
   * req.body.description - description of resource reference
   * req.body.text_message - text message of resource reference
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.put('/set-resource-reference-description', (req, res) => {
    if (req.body) {
      service.setResourceReferenceDescription({
        token: req.headers.authorization,
        // attachment values
        id: req.body.id,
        uuid: req.body.uuid,
        // attachment reference values
        description: req.body.description,
        textMessage: req.body.text_message
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getResourceReferenceFromGRPC(response)
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
   * GET Resource Reference Information
   *
   * req.query.token - user token
   * req.query.id - id of attachment reference
   * req.query.uuid - uuid of attachment reference
   * req.query.resource_name - uuid + fileName of attachment reference
   * req.query.image_id - id of image
   * req.query.image_uuid - uuid of image
   * req.query.archive_id - id of archive
   * req.query.archive_id - uuid of archive
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/resource-reference', (req, res) => {
    if (req.query) {
      service.getResourceReference({
        token: req.headers.authorization,
        id: req.query.id,
        uuid: req.query.uuid,
        resourceName: req.query.resource_name,
        imageId: req.query.image_id,
        imageUuid: req.query.image_uuid,
        archiveId: req.query.archive_id,
        archiveUuid: req.query.archive_uuid
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getResourceReferenceFromGRPC(response)
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
   * GET Resource
   *
   * req.query.token - user token
   * req.body.id - id of resource
   * req.body.uuid - uuid of resource
   * req.body.resource_name - uuid and file name of resource
   *
   * Details:https://sfa-docs.now.sh/guide/default-modules/api.html#get-vsbridgeuserorder-history
   */
  api.get('/download', (req, res) => {
    service.getResource({
      token: req.headers.authorization || req.query.token,
      resourceId: req.query.id,
      resourceUuid: req.query.uuid,
      resourceName: req.query.resource_name
    }, (err, response) => {
      if (response) {
        const resourceName = req.query.resource_name;
        const fileName = path.basename(
          String(resourceName)
        ).replace(req.query.uuid + '-', '');
        const completeName = getCompleteFileName(fileName);

        fs.writeFileSync(completeName, response);

        const mime = require('mime');
        const mimetype = mime.getType(fileName);
        res.setHeader('Content-disposition', 'attachment; filename=' + fileName);
        res.setHeader('Content-type', mimetype);

        // const buffer = Buffer.from(response.buffer)
        const filestream = fs.createReadStream(completeName);
        filestream.pipe(res);

        if (fs.existsSync(completeName)) {
          console.log('Delete temporary file generated: ' + fileName)
          fs.promises.unlink(completeName);
        }
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
