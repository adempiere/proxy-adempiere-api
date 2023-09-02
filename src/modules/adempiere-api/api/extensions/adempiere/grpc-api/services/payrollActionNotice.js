/*************************************************************************************
 * Product: ADempiere gRPC Payroll Action Notice Client                              *
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

const { getMetadata } = require('.././utils/metadata.js');
const { isEmptyValue, getTypeOfValue, getValidId } = require('.././utils/valueUtils.js');

class PayrollActionNotice {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/payroll_action_notice_pb.js');

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

    this.initPayrollActionNoticeService();
    console.log('ADempiere Payroll Action Notice Client Started');
  }

  // Init connection
  initPayrollActionNoticeService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/payroll_action_notice_grpc_pb');
    this.payrollActionNotice = new services.PayrollActionNoticeClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Payroll Action Notice Service
  getPayrollActionNoticeService () {
    return this.payrollActionNotice;
  }

  listPayrollProcess ({
    token,
    //  DSL
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPayrollProcessRequest } = this.stubFile;
    const request = new ListPayrollProcessRequest();

    request.setSearchValue(searchValue);

    if (!isEmptyValue(contextAttributes)) {
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().listPayrollProcess(
      request,
      metadata,
      callback
    );
  }

  listEmployeeValid ({
    token,
    //  DSL
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListEmployeeValidRequest } = this.stubFile;
    const request = new ListEmployeeValidRequest();

    request.setSearchValue(searchValue);

    if (!isEmptyValue(contextAttributes)) {
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().listEmployeeValid(
      request,
      metadata,
      callback
    );
  }

  listPayrollConcepts ({
    token,
    //  DSL
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPayrollConceptsRequest } = this.stubFile;
    const request = new ListPayrollConceptsRequest();

    request.setSearchValue(searchValue);

    if (!isEmptyValue(contextAttributes)) {
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().listPayrollConcepts(
      request,
      metadata,
      callback
    );
  }

  getPayrollConceptDefinition ({
    token,
    // DSL
    id,
    uuid
  }, callback) {
    const { GetPayrollConceptDefinitionRequest } = this.stubFile;
    const request = new GetPayrollConceptDefinitionRequest();

    request.setId(id);
    request.setUuid(uuid);

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().getPayrollConceptDefinition(
      request,
      metadata,
      callback
    );
  }

  listPayrollMovements ({
    token,
    //  DSL
    filters = [],
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPayrollMovementsRequest } = this.stubFile;
    const request = new ListPayrollMovementsRequest();

    request.setSearchValue(searchValue);
    if (!isEmptyValue(filters)) {
      const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      request.setFilters(
        getCriteriaToGRPC({
          filters
        })
      );
    }

    if (!isEmptyValue(contextAttributes)) {
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().listPayrollMovements(
      request,
      metadata,
      callback
    );
  }

  savePayrollMovement ({
    token,
    //  DSL
    id,
    uuid,
    contextAttributes,
    attributes
  }, callback) {
    const { SavePayrollMovementRequest } = this.stubFile;
    const request = new SavePayrollMovementRequest();
    const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);

    if (!isEmptyValue(attributes)) {
      if (getTypeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }
      attributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    if (!isEmptyValue(contextAttributes)) {
      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().savePayrollMovement(
      request,
      metadata,
      callback
    );
  }

  deletePayrollMovements ({
    token,
    //  DSL
    contextAttributes,
    ids = [],
    uuids = []
  }, callback) {
    const { DeletePayrollMovementsRequest } = this.stubFile;
    const request = new DeletePayrollMovementsRequest();

    if (!isEmptyValue(contextAttributes)) {
      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    // selection list id
    if (!isEmptyValue(ids)) {
      request.setIdsList(ids);
    }

    // selection list uuid
    if (!isEmptyValue(uuids)) {
      request.setUuidsList(uuids);
    }

    const metadata = getMetadata({
      token
    });

    this.getPayrollActionNoticeService().deletePayrollMovements(
      request,
      metadata,
      callback
    );
  }
}

module.exports = PayrollActionNotice;
