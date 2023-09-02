/*************************************************************************************
 * Product: ADempiere gRPC Time Control Client                                       *
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
const { isEmptyValue, getValidInteger } = require('.././utils/valueUtils.js');

class TimeControl {
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

    this.initTimeControlService();
    console.log('ADempiere Time Control Client Started');
  }

  // Init connection
  initTimeControlService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/time_control_grpc_pb');
    this.timeControl = new services.TimeControlClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Time Control Service
  getTimeControlService () {
    return this.timeControl;
  }

  createResourceAssignment ({
    token,
    // DSL
    resourceTypeId,
    resourceTypeUuid,
    name,
    description
  }, callback) {
    const {
      CreateResourceAssignmentRequest
    } = require('.././grpc/proto/time_control_pb.js');
    const request = new CreateResourceAssignmentRequest();

    request.setResourceTypeId(
      getValidInteger(resourceTypeId)
    );
    request.setResourceTypeUuid(resourceTypeUuid);
    request.setName(name);
    request.setDescription(description);

    const metadata = getMetadata({
      token
    });

    this.getTimeControlService().createResourceAssignment(
      request,
      metadata,
      callback
    );
  }

  listResourcesAssignment ({
    token,
    // DSL
    resourceTypeId,
    resourceTypeUuid,
    name,
    description,
    confirmed,
    isWaitingForOrdered = false,
    dateFrom,
    dateTo,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const {
      ListResourcesAssignmentRequest
    } = require('.././grpc/proto/time_control_pb.js');
    const request = new ListResourcesAssignmentRequest();

    request.setResourceTypeId(
      getValidInteger(resourceTypeId)
    );
    request.setResourceTypeUuid(resourceTypeUuid);
    request.setName(name);
    request.setDescription(description);
    request.setConfirmed(confirmed);
    request.setIsWaitingForOrdered(isWaitingForOrdered);
    request.setDateFrom(dateFrom);
    request.setDateTo(dateTo);

    if (!isEmptyValue(pageSize) && !Number.isNaN(pageSize)) {
      request.setPageSize(Number(pageSize));
    }
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getTimeControlService().listResourcesAssignment(
      request,
      metadata,
      callback
    );
  }

  updateResourceAssignment ({
    token,
    // DSL
    id,
    uuid,
    name,
    description
  }, callback) {
    const {
      UpdateResourceAssignmentRequest
    } = require('.././grpc/proto/time_control_pb.js');
    const request = new UpdateResourceAssignmentRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);
    request.setName(name);
    request.setDescription(description);

    const metadata = getMetadata({
      token
    });

    this.getTimeControlService().updateResourceAssignment(
      request,
      metadata,
      callback
    );
  }

  deleteResourceAssignment ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const {
      DeleteResourceAssignmentRequest
    } = require('.././grpc/proto/time_control_pb.js');
    const request = new DeleteResourceAssignmentRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getTimeControlService().deleteResourceAssignment(
      request,
      metadata,
      callback
    );
  }

  confirmResourceAssignment ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const {
      ConfirmResourceAssignmentRequest
    } = require('.././grpc/proto/time_control_pb.js');
    const request = new ConfirmResourceAssignmentRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getTimeControlService().confirmResourceAssignment(
      request,
      metadata,
      callback
    );
  }
}

module.exports = TimeControl;
