/*************************************************************************************
 * Product: ADempiere gRPC Express Receipt Client                                    *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com                          *
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

const { getMetadata } = require('.././utils/metadata.js');
const { isEmptyValue, getValidInteger } = require('.././utils/valueUtils.js');

class ImportFileLoader {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/import_file_loader_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor (config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.businessHost = adempiereConfig.businessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initImportFileLoaderService();
    console.log('ADempiere Import File Loader Client Started');
  }

  // Init connection
  initImportFileLoaderService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/import_file_loader_grpc_pb');
    this.importFileLoader = new services.ImportFileLoaderClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Express Receipt Service
  getImportFileLoaderService () {
    return this.importFileLoader;
  }

  /**
   * Get List Charsets
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCharsets ({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListCharsetsRequest } = this.stubFile;
    const request = new ListCharsetsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listCharsets(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get List Import Tables
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listImportTables ({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListImportTablesRequest } = this.stubFile;
    const request = new ListImportTablesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listImportTables(
      request,
      metadata,
      callback
    );
  }

  listImportFormats ({
    token,
    // DSL
    searchValue,
    tableId,
    tableName,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListImportFormatsRequest } = this.stubFile;
    const request = new ListImportFormatsRequest();

    request.setTableId(
      getValidInteger(tableId)
    );
    request.setTableName(tableName);

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listImportFormats(
      request,
      metadata,
      callback
    );
  }

  listClientImportFormats ({
    token,
    // DSL
    tableId,
    tableName,
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListClientImportFormatsRequest } = this.stubFile;
    const request = new ListClientImportFormatsRequest();

    request.setTableId(
      getValidInteger(tableId)
    );
    request.setTableName(tableName);

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listClientImportFormats(
      request,
      metadata,
      callback
    );
  }

  getImportFromat ({
    token,
    // DSL
    id
  }, callback) {
    const { GetImportFromatRequest } = this.stubFile;
    const request = new GetImportFromatRequest();

    // request.setSearchValue(searchValue);
    request.setId(
      getValidInteger(id)
    );
    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().getImportFromat(
      request,
      metadata,
      callback
    );
  }

  saveRecords ({
    token,
    // DSL
    importFormatId,
    resourceId,
    charset,
    // process values
    isProcess,
    processId,
    parametersList
  }, callback) {
    const { SaveRecordsRequest } = this.stubFile;
    const request = new SaveRecordsRequest();

    request.setImportFormatId(
      getValidInteger(importFormatId)
    );
    request.setResourceId(
      getValidInteger(resourceId)
    );
    request.setCharset(charset);

    // set process values
    if (isProcess) {
      request.setIsProcess(isProcess);
      request.setProcessId(
        getValidInteger(processId)
      );
      // set process parameters list
      if (!isEmptyValue(parametersList)) {
        const { getTypeOfValue } = require('.././utils/valueUtils.js');
        const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

        if (getTypeOfValue(parametersList) === 'String') {
          parametersList = JSON.parse(parametersList);
        }
        parametersList.forEach(parameter => {
          let parsedParameter = parameter;
          if (getTypeOfValue(parameter) === 'String') {
            parsedParameter = JSON.parse(parameter);
          }
          // parameter format = { columName, value, valueType }
          const convertedParameter = getKeyValueToGRPC({
            columnName: parsedParameter.key,
            value: parsedParameter.value,
            valueType: parsedParameter.valueType
          });

          request.addParameters(convertedParameter);
        });
      }
    }

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().saveRecords(
      request,
      metadata,
      callback
    );
  }

  listFilePreview ({
    token,
    // DSL
    searchValue,
    importFormatId,
    resourceId,
    charset,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListFilePreviewRequest } = this.stubFile;
    const request = new ListFilePreviewRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setImportFormatId(
      getValidInteger(importFormatId)
    );
    request.setCharset(charset);
    request.setResourceId(
      getValidInteger(resourceId)
    );

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listFilePreview(
      request,
      metadata,
      callback
    );
  }

  listImportProcesses ({
    token,
    // DSL
    searchValue,
    tableId,
    tableName,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListImportProcessesRequest } = this.stubFile;
    const request = new ListImportProcessesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setTableId(
      getValidInteger(tableId)
    );
    request.setTableName(tableName);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listImportProcesses(
      request,
      metadata,
      callback
    );
  }
}

module.exports = ImportFileLoader;
