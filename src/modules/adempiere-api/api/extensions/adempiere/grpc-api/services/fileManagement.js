/*************************************************************************************
 * Product: ADempiere gRPC File Management Client                                    *
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

class FileManagement {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/file_management_pb.js');

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

    this.initFileManagementService();
    console.log('ADempiere File Management Client Started');
  }

  // Init connection
  initFileManagementService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/file_management_grpc_pb');
    this.fileManagement = new services.FileManagementClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get File Management Service
  getFileManagementService () {
    return this.fileManagement;
  }

  /**
   * Set Attachment Description
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} token
   */
  setAttachmentDescription ({
    token,
    // DSL
    id,
    uuid,
    textMessage
  }, callback) {
    const { SetAttachmentDescriptionRequest } = this.stubFile;
    const request = new SetAttachmentDescriptionRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    request.setTextMessage(textMessage);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().setAttachmentDescription(
      request,
      metadata,
      callback
    );
  }

  /**
   * Exists Attachment On Record
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} token
   */
  existsAttachment ({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid
  }, callback) {
    const { ExistsAttachmentRequest } = this.stubFile;
    const request = new ExistsAttachmentRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().existsAttachment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Attachment Information
   * @param {*} param0
   * @param {*} callback
   */
  getAttachment ({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid
  }, callback) {
    const { GetAttachmentRequest } = this.stubFile;
    const request = new GetAttachmentRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().getAttachment(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Resource Image from name
   * @param {string} resourceName
   * @param {string} resourceUuid
   * @param {string} token
   */
  getResource ({
    resourceId,
    resourceUuid,
    resourceName,
    token
  }, callback) {
    const { GetResourceRequest } = this.stubFile;
    const request = new GetResourceRequest();

    request.setResourceId(
      getValidInteger(resourceId)
    )
    request.setResourceUuid(resourceUuid);
    request.setResourceName(resourceName);

    const metadata = getMetadata({
      token
    });
    const stream = this.getFileManagementService().getResource(
      request,
      metadata
    );
    let result = new Uint8Array();
    stream.on('data', (response) => {
      result = this.mergeByteArray(result, response.getData());
    });
    stream.on('status', (status) => {
      if (status && status.code === 13) {
        callback(status, undefined);
      }
    });
    stream.on('error', (error) => {
      callback(undefined, error);
    });
    stream.on('end', (end) => {
      callback(undefined, result);
    });
  }

  /**
   * Get Resource Image from name
   * @param {string} fileName
   * @param {string} resourceUuid
   * @param {Blob} file
   * @param {string} token
   */
  loadResource ({
    fileName,
    resourceUuid,
    token
  }, callback) {
    const metadata = getMetadata({
      token
    });

    return this.getFileManagementService().loadResource(
      metadata,
      callback
    );
  }

  /**
   * Merge two arrays and return merged array
   *
   */
  mergeByteArray (currentArray, arrayToMerge) {
    const mergedArray = new currentArray.constructor(currentArray.length + arrayToMerge.length)
    mergedArray.set(currentArray)
    mergedArray.set(arrayToMerge, currentArray.length)
    return mergedArray
  }

  setResourceReference ({
    token,
    // parent reference
    resourceType,
    resourceId,
    // record
    tableName,
    recordId,
    recordUuid,
    //
    fileName,
    fileSize,
    description,
    textMessage
  }, callback) {
    const { SetResourceReferenceRequest } = this.stubFile;
    const request = new SetResourceReferenceRequest();

    request.setResourceType(
      getValidInteger(resourceType)
    );
    request.setResourceId(
      getValidInteger(resourceId)
    );

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);
    request.setFileName(fileName);
    request.setFileSize(fileSize);

    request.setDescription(description);
    request.setTextMessage(textMessage);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().setResourceReference(
      request,
      metadata,
      callback
    );
  }

  setResourceReferenceDescription ({
    token,
    id,
    uuid,
    fileName,
    description,
    textMessage
  }, callback) {
    const { SetResourceReferenceDescriptionRequest } = this.stubFile;
    const request = new SetResourceReferenceDescriptionRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setFileName(fileName);

    request.setDescription(description);
    request.setTextMessage(textMessage);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().setResourceReferenceDescription(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Resource information
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  getResourceReference ({
    token,
    id,
    uuid,
    resourceName,
    imageId,
    imageUuid,
    archiveId,
    archiveUuid
  }, callback) {
    const { GetResourceReferenceRequest } = this.stubFile;
    const request = new GetResourceReferenceRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setResourceName(resourceName);

    request.setImageId(
      getValidInteger(imageId)
    );
    request.setImageUuid(imageUuid);

    request.setArchiveId(
      getValidInteger(archiveId)
    );
    request.setArchiveUuid(archiveUuid);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().getResourceReference(
      request,
      metadata,
      callback
    );
  }

  /**
   * Delete Resource information
   * @param {string} resourceName
   * @param {string} resourceUuid
   * @param {number} resourceId
   * @param {string} token
   * @param {function} callback
   */
  deleteResourceReference ({
    token,
    resourceId,
    resourceUuid,
    resourceName
  }, callback) {
    const { DeleteResourceReferenceRequest } = this.stubFile;
    const request = new DeleteResourceReferenceRequest();

    request.setResourceId(
      getValidInteger(resourceId)
    );
    request.setResourceUuid(resourceUuid);
    request.setResourceName(resourceName);

    const metadata = getMetadata({
      token
    });

    this.getFileManagementService().deleteResourceReference(
      request,
      metadata,
      callback
    );
  }
}

module.exports = FileManagement;
