/************************************************************************************
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
 * Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com                         *
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
import { getLookupItemFromGRPC } from '@adempiere/grpc-api/src/utils/userInterfaceFromGRPC';
import { convertEntitiesListFromGRPC } from '../../util/convertData';

function getImportFormatFromGRPC (importFormatToConvert) {
  if (!importFormatToConvert) {
    return undefined;
  }
  return {
    id: importFormatToConvert.getId(),
    uuid: importFormatToConvert.getUuid(),
    name: importFormatToConvert.getName(),
    description: importFormatToConvert.getDescription(),
    tableName: importFormatToConvert.getTableName(),
    formatType: importFormatToConvert.getFormatType(),
    separatorCharacter: importFormatToConvert.getSeparatorCharacter(),
    formatFields: importFormatToConvert.getFormatFieldsList().map(formatField => {
      return getFormatFieldsFromGRPC(formatField)
    })
  };
}

function getFormatFieldsFromGRPC (formatFieldsToConvert) {
  if (!formatFieldsToConvert) {
    return undefined;
  }
  return {
    id: formatFieldsToConvert.getId(),
    uuid: formatFieldsToConvert.getUuid(),
    name: formatFieldsToConvert.getName(),
    sequence: formatFieldsToConvert.getSequence(),
    columnName: formatFieldsToConvert.getColumnName(),
    dataType: formatFieldsToConvert.getDataType(),
    startNo: formatFieldsToConvert.getStartNo(),
    endNo: formatFieldsToConvert.getEndNo(),
    defaultValue: formatFieldsToConvert.getDefaultValue(),
    dateFormat: formatFieldsToConvert.getDateFormat(),
    constantValue: formatFieldsToConvert.getConstantValue()
  };
}

// function resourceReferenceFromGRPC (resourceReferenceToConvert) {
//   if (!resourceReferenceToConvert) {
//     return undefined;
//   }
//   return {
//     resourceId: resourceReferenceToConvert.getResourceId(),
//     resourceUuid: resourceReferenceToConvert.getResourceUuid(),
//     fileName: resourceReferenceToConvert.getFileName(),
//     fileSize: resourceReferenceToConvert.getFileSize(),
//     description: resourceReferenceToConvert.getDescription(),
//     textMsg: resourceReferenceToConvert.getTextMsg(),
//     contentType: resourceReferenceToConvert.getContentType()
//   };
// }

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
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/ImportFileLoader')
  const service = new ServiceApi(config);
  api.get('/list-charsets', (req, res) => {
    if (req.query) {
      service.listCharsets({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
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
              records: response.getRecordsList().map(charset => {
                return getLookupItemFromGRPC(charset);
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

  api.get('/list-import-formats', (req, res) => {
    if (req.query) {
      service.listImportFormats({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
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
              records: response.getRecordsList().map(charset => {
                return getLookupItemFromGRPC(charset);
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

  api.get('/get-import-formats', (req, res) => {
    if (req.query) {
      service.getImportFromat({
        token: req.headers.authorization,
        id: req.query.id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: getImportFormatFromGRPC(response)
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

  api.post('/load-import-file', (req, res) => {
    if (req.body) {
      const fileName = req.body.file_name;
      const completeName = getCompleteFileName(fileName);
      const resourceUuid = req.body.resource_uuid;
      const token = req.headers.authorization;

      const call = service.loadImportFile({
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

      const stubLoader = require('@adempiere/grpc-api/src/grpc/proto/import_file_loader_pb.js');
      const { LoadImportFileRequest } = stubLoader;
      const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

      const bufferSize = 256 * 1024; // 256k
      const buffer = fs.readFileSync(completeName);
      const length = buffer.length;
      let chunkPosition = 0;
      while (chunkPosition < length) {
        let bytes = buffer.slice(chunkPosition, chunkPosition += bufferSize);
        const request = new LoadImportFileRequest();
        request.setResourceUuid(resourceUuid);
        request.setFileSize(
          getDecimalToGRPC(length)
        );
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

  api.get('/list-file-preview', (req, res) => {
    if (req.query) {
      service.listFilePreview({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
        importFormatId: req.query.import_format_id,
        resourceReferenceId: req.query.resource_reference_id,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntitiesListFromGRPC(response)
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

  api.get('/process-import', (req, res) => {
    if (req.query) {
      service.processImport({
        token: req.headers.authorization,
        importFormatId: req.query.import_format_id
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: response
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
