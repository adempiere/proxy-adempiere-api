/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                                         *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
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

const { getMetadata } = require('.././utils/metadata.js');
const { getValidInteger } = require('.././utils/valueUtils.js');

class Dictionary {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/dictionary_pb.js');

  /**
  * Constructor, No authentication required
  * @param {string} host
  * @param {string} version
  * @param {string} language
  */
  constructor (config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.dictionaryHost = adempiereConfig.dictionaryHost
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initDictionaryService();
    console.log('ADempiere Dictionary Client Started');
  }

  // Init connection
  initDictionaryService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/dictionary_grpc_pb');
    this.dictionary = new services.DictionaryClient(
      this.dictionaryHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Dictionary Service
  getDictionaryService () {
    return this.dictionary;
  }

  getDictionaryRequest ({
    id,
    uuid
  }) {
    const { EntityRequest } = this.stubFile;
    const request = new EntityRequest();

    request.setId(id);
    request.setUuid(uuid);

    return request;
  }

  // Get Window
  getWindow ({
    token,
    id,
    uuid
  }, callback) {
    const request = this.getDictionaryRequest({
      id,
      uuid
    });

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getWindow(
      request,
      metadata,
      callback
    );
  }

  // Get Process
  getProcess ({
    token,
    id,
    uuid
  }, callback) {
    const request = this.getDictionaryRequest({
      id,
      uuid
    });

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getProcess(
      request,
      metadata,
      callback
    );
  }

  // Get Browser
  getBrowser ({
    token,
    id,
    uuid
  }, callback) {
    const request = this.getDictionaryRequest({
      id,
      uuid
    });

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getBrowser(
      request,
      metadata,
      callback
    );
  }

  // Get Form
  getForm ({
    token,
    id,
    uuid
  }, callback) {
    const request = this.getDictionaryRequest({
      id,
      uuid
    });

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getForm(
      request,
      metadata,
      callback
    );
  }

  // Get Validation Rule
  getValidationRule ({
    token,
    id,
    uuid
  }, callback) {
    const request = this.getDictionaryRequest({
      id,
      uuid
    });

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getValidationRule(
      request,
      metadata,
      callback
    );
  }

  // Get Field
  getField ({
    token,
    uuid,
    columnUuid,
    elementUuid,
    fieldUuid,
    tableName,
    columnName,
    elementColumnName
  }, callback) {
    const { FieldRequest } = this.stubFile;
    const request = new FieldRequest();

    request.setFieldUuid(uuid);
    request.setColumnUuid(columnUuid);
    request.setElementUuid(elementUuid);
    if (fieldUuid) {
      request.setFieldUuid(fieldUuid);
    }
    request.setColumnName(columnName);
    request.setTableName(tableName);
    request.setElementColumnName(elementColumnName);

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getField(
      request,
      metadata,
      callback
    );
  }

  // Get Reference
  getReference ({
    token,
    uuid,
    columnName
  }, callback) {
    const { ReferenceRequest } = this.stubFile;
    const request = new ReferenceRequest();

    request.setReferenceUuid(uuid);
    request.setColumnName(columnName);

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().getReference(
      request,
      metadata,
      callback
    );
  }

  // List Identifiers Fields
  listIdentifiersFields ({
    token,
    tableUuid,
    tableId,
    tableName,
    tabUuid,
    tabId
  }, callback) {
    const { ListFieldsRequest } = this.stubFile;
    const request = new ListFieldsRequest();

    request.setTableUuid(tableUuid);
    request.setTableId(
      getValidInteger(tableId)
    );
    request.setTableName(tableName);

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().listIdentifiersFields(
      request,
      metadata,
      callback
    );
  }

  //  List Table Search Fields
  listTableSearchFields ({
    token,
    tableUuid,
    tableId,
    tableName
  }, callback) {
    const { ListFieldsRequest } = this.stubFile;
    const request = new ListFieldsRequest();

    request.setTableUuid(tableUuid);
    request.setTableId(
      getValidInteger(tableId)
    );
    request.setTableName(tableName);

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().listTableSearchFields(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Search Info Fields
   * @param {String} tableUuid
   * @param {Number} tableId
   * @param {String} tableName
   */
  listSearchInfoFields ({
    token,
    tableUuid,
    tableId,
    tableName
  }, callback) {
    const { ListFieldsRequest } = this.stubFile;
    const request = new ListFieldsRequest();

    request.setTableUuid(tableUuid);
    request.setTableId(
      getValidInteger(tableId)
    );
    request.setTableName(tableName);

    const metadata = getMetadata({
      token
    });

    this.getDictionaryService().listSearchInfoFields(
      request,
      metadata,
      callback
    );
  }
}

module.exports = Dictionary;
