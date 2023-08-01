/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
import { ExtensionAPIFunctionParameter } from '@storefront-api/lib/module';

// Utils and Helper Methods
import { getLookupItemFromGRPC } from '@adempiere/grpc-api/src/utils/userInterfaceFromGRPC';
import { convertEntitiesListFromGRPC } from '../../util/convertData';

function getImportColumnFromGRPC (importColumnToConvert) {
  if (!importColumnToConvert) {
    return undefined;
  }
  return {
    id: importColumnToConvert.getId(),
    uuid: importColumnToConvert.getUuid(),
    name: importColumnToConvert.getName(),
    column_name: importColumnToConvert.getColumnName(),
    display_type: importColumnToConvert.getDisplayType()
  };
}

function getImportTableFromGRPC (importTableToConvert) {
  if (!importTableToConvert) {
    return undefined;
  }
  return {
    id: importTableToConvert.getId(),
    uuid: importTableToConvert.getUuid(),
    name: importTableToConvert.getName(),
    table_name: importTableToConvert.getTableName(),
    import_columns: importTableToConvert.getImportColumnsList().map(importColumn => {
      return getImportColumnFromGRPC(importColumn);
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
      return getFormatFieldsFromGRPC(formatField);
    })
  };
}

module.exports = ({ config }: ExtensionAPIFunctionParameter) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api/src/services/importFileLoader');
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

  api.get('/list-import-tables', (req, res) => {
    if (req.query) {
      service.listImportTables({
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
              records: response.getRecordsList().map(importTable => {
                return getImportTableFromGRPC(importTable);
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

  api.get('/list-import-formats', (req, res) => {
    if (req.query) {
      service.listImportFormats({
        token: req.headers.authorization,
        tableId: req.query.table_id,
        tableName: req.query.table_name,
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
              records: response.getRecordsList().map(importFormat => {
                return getLookupItemFromGRPC(importFormat);
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

  api.get('/list-client-import-formats', (req, res) => {
    if (req.query) {
      service.listClientImportFormats({
        token: req.headers.authorization,
        tableId: req.query.table_id,
        tableName: req.query.table_name,
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
              records: response.getRecordsList().map(importFormat => {
                return getLookupItemFromGRPC(importFormat);
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

  api.post('/save-records', (req, res) => {
    if (req.body) {
      service.saveRecords({
        token: req.headers.authorization,
        importFormatId: req.body.import_format_id,
        resourceId: req.body.resource_id,
        charset: req.body.charset,
        isProcess: req.body.is_process,
        processId: req.body.process_id,
        parametersList: req.body.parameters
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              message: response.getMessage(),
              total: response.getTotal()
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

  api.get('/list-file-preview', (req, res) => {
    if (req.query) {
      service.listFilePreview({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
        importFormatId: req.query.import_format_id,
        resourceId: req.query.resource_id,
        charset: req.query.charset,
        //  Page Data
        pageSize: req.query.page_size,
        pageToken: req.query.page_token
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: convertEntitiesListFromGRPC(response)
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

  api.get('/list-import-processes', (req, res) => {
    if (req.query) {
      service.listImportProcesses({
        token: req.headers.authorization,
        searchValue: req.query.search_value,
        tableId: req.query.tableId,
        tableName: req.query.table_name,
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
              records: response.getRecordsList().map(importProcess => {
                return getLookupItemFromGRPC(importProcess);
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

  return api;
};
