/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client                                     *
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

class UserInterface {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/business_pb.js');

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

    this.initUserInterfaceService();
    console.log('ADempiere User Interface Client Started');
  }

  // Init connection
  initUserInterfaceService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/business_grpc_pb');
    this.userInterface = new services.UserInterfaceClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get UserInterface Service
  getUserInterfaceService () {
    return this.userInterface;
  }

  // Get Default Value
  getDefaultValue ({
    token,
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    columnUuid,
    value,
    contextAttributes
  }, callback) {
    const { GetDefaultValueRequest } = this.stubFile;
    const request = new GetDefaultValueRequest();

    request.setProcessParameterUuid(processParameterUuid);
    request.setFieldUuid(fieldUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setColumnUuid(columnUuid);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
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

    // set value as default value
    if (!isEmptyValue(value)) {
      const { getValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      const convertedValue = getValueToGRPC({
        value
      });
      request.setValue(convertedValue);
    }

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().getDefaultValue(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get a Tab Entity
   * @param {string} token session uuid
   * @param {string} tabUuid
   * @param {number} id record id
   * @param {string} uuid record uuid
   */
  getTabEntity ({
    token,
    tabUuid,
    id,
    uuid
  }, callback) {
    const { GetTabEntityRequest } = this.stubFile;
    const request = new GetTabEntityRequest();

    request.setTabUuid(tabUuid);
    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().getTabEntity(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Tab Entities
   * @param {string} token session uuid
   * @param {string} tabUuid
   * @param {number} id record id
   * @param {string} uuid record uuid
   */
  listTabEntities ({
    token,
    windowUuid,
    tabUuid,
    windowNo,
    // DSL
    referenceUuid,
    filters,
    columns,
    contextAttributes,
    sorting,
    // Page Data
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListTabEntitiesRequest } = this.stubFile;
    const request = new ListTabEntitiesRequest();

    const { getTypeOfValue } = require('.././utils/valueUtils.js');
    // TODO: Add support to all parameters
    if (!isEmptyValue(filters)) {
      if (getTypeOfValue(filters) === 'String') {
        filters = JSON.parse(filters);
      }
    }
    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    const convertedCriteria = getCriteriaToGRPC({
      referenceUuid,
      filters,
      orderByClause: sorting
    })
    request.setFilters(convertedCriteria);

    request.setWindowNo(windowNo);
    if (windowUuid) {
      request.setWindowUuid(windowUuid);
    }
    if (tabUuid) {
      request.setTabUuid(tabUuid);
    }
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

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addContextAttributes(convertedAttribute);
      });
    }

    //  For columns
    if (!isEmptyValue(columns)) {
      request.setColumnsList(columns);
    }
    if (pageSize) {
      request.setPageSize(pageSize);
    }
    if (pageToken) {
      request.setPageToken(pageToken);
    }

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listTabEntities(
      request,
      metadata,
      callback
    );
  }

  // Create a Tab Entity
  createTabEntity ({
    token,
    tabUuid,
    attributes
  }, callback) {
    const { CreateTabEntityRequest } = this.stubFile;
    const request = new CreateTabEntityRequest();

    request.setTabUuid(tabUuid);

    if (!isEmptyValue(attributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
      if (getTypeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }

      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      attributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addAttributes(convertedAttribute);
      })
    }

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().createTabEntity(
      request,
      metadata,
      callback
    );
  }

  // Update a Tab Entity
  updateTabEntity ({
    token,
    tabUuid,
    id,
    uuid,
    attributes
  }, callback) {
    const { UpdateTabEntityRequest } = this.stubFile;
    const request = new UpdateTabEntityRequest();

    request.setTabUuid(tabUuid);
    request.setId(id);
    request.setUuid(uuid);

    if (!isEmptyValue(attributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
      if (getTypeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }

      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      attributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addAttributes(convertedAttribute);
      })
    }

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().updateTabEntity(
      request,
      metadata,
      callback
    );
  }

  existsReferences ({
    token,
    tabId,
    tabUuid,
    recordId,
    recordUuid
  }, callback) {
    const { ExistsReferencesRequest } = this.stubFile;
    const request = new ExistsReferencesRequest();

    request.setTabId(
      getValidInteger(tabId)
    );
    request.setTabUuid(tabUuid);

    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().existsReferences(
      request,
      metadata,
      callback
    );
  }

  // Tab Sequences (Is Sort Tab)
  listTabSequences ({
    token,
    tabUuid,
    contextAttributes,
    pageSize,
    pageToken
  }, callback) {
    const { ListTabSequencesRequest } = this.stubFile;
    const request = new ListTabSequencesRequest();

    request.setTabUuid(tabUuid);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });
        request.addContextAttributes(convertedAttribute);
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listTabSequences(
      request,
      metadata,
      callback
    );
  }

  // Tab Sequences (Is Sort Tab)
  saveTabSequences ({
    token,
    tabUuid,
    contextAttributes,
    entitiesList
  }, callback) {
    const { SaveTabSequencesRequest } = this.stubFile;
    const request = new SaveTabSequencesRequest();

    request.setTabUuid(tabUuid);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addContextAttributes(convertedAttribute);
      });
    }

    // entities records selections list
    if (!isEmptyValue(entitiesList)) {
      const { getKeyValueSelectionToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      entitiesList.forEach(entity => {
        // selection format = { selectionId: number, selectionValues: [{ columName, value }] }
        const convertedRecord = getKeyValueSelectionToGRPC({
          selectionId: entity.recordId,
          selectionUuid: entity.recordUuid,
          selectionValues: entity.attributesList
        });

        request.addEntities(convertedRecord);
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().saveTabSequences(
      request,
      metadata,
      callback
    );
  }

  // Run a callout to server
  runCallout ({
    token,
    tableName,
    windowUuid,
    tabUuid,
    callout,
    columnName,
    valueType,
    oldValue,
    value,
    windowNo,
    contextAttributes
  }, callback) {
    const { RunCalloutRequest } = this.stubFile;
    const request = new RunCalloutRequest();

    request.setWindowNo(windowNo);
    request.setTableName(tableName);
    request.setWindowUuid(windowUuid);
    request.setTabUuid(tabUuid);
    request.setCallout(callout);
    request.setColumnName(columnName);

    const { getValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
    request.setOldValue(
      getValueToGRPC({
        value: oldValue,
        valueType
      })
    );
    request.setValue(
      getValueToGRPC({
        value,
        valueType
      })
    );

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        let value = parsedAttribute.value
        let valueType = ''
        if (!isEmptyValue(parsedAttribute.value) && getTypeOfValue(parsedAttribute.value) === 'Object') {
          value = parsedAttribute.value.value
          if (!isEmptyValue(parsedAttribute.value.valueType)) {
            valueType = parsedAttribute.value.valueType
          }
        }

        // parameter format = { columName, value }
        const convertedParameter = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          valueType,
          value
        });

        request.addContextAttributes(convertedParameter);
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().runCallout(
      request,
      metadata,
      callback
    );
  }

  listTreeNodes ({
    token,
    tabId,
    tableName,
    id,
    uuid,
    elementId,
    elementUuid,
    contextAttributes
  }, callback) {
    const { ListTreeNodesRequest } = this.stubFile;
    const request = new ListTreeNodesRequest();

    request.setTabId(
      getValidInteger(tabId)
    );
    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('.././utils/valueUtils.js');
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

    request.setTableName(tableName);
    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );
    request.setElementUuid(elementUuid);
    request.setElementId(
      getValidInteger(elementId)
    );

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listTreeNodes(
      request,
      metadata,
      callback
    );
  }

  // Get Report Output
  getReportOutput ({
    token,
    processId,
    processUuid,
    tableName,
    // Reference
    printFormatId,
    printFormatUuid,
    reportViewId,
    reportViewUuid,
    isSummary,
    reportName,
    reportType,
    // DSL
    filters,
    // Custom Query
    query,
    whereClause,
    orderByClause,
    limit
  }, callback) {
    const { GetReportOutputRequest } = this.stubFile;
    const request = new GetReportOutputRequest();
    const { getCriteriaToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

    request.setProcessId(
      getValidInteger(processId)
    );
    request.setProcessUuid(processUuid);

    request.setCriteria(
      getCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );

    //
    request.setPrintFormatId(
      getValidInteger(printFormatId)
    );
    if (!isEmptyValue(printFormatUuid)) {
      request.setPrintFormatUuid(printFormatUuid);
    }
    request.setReportViewId(
      getValidInteger(reportViewId)
    );
    if (!isEmptyValue(reportViewUuid)) {
      request.setReportViewUuid(reportViewUuid);
    }
    request.setIsSummary(isSummary);
    request.setReportName(reportName);
    request.setReportType(reportType);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().getReportOutput(
      request,
      metadata,
      callback
    );
  }

  // List Drill Tables
  listDrillTables ({
    token,
    tableName,
    pageSize,
    pageToken
  }, callback) {
    const { ListDrillTablesRequest } = this.stubFile;
    const request = new ListDrillTablesRequest();

    request.setTableName(tableName);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listDrillTables(
      request,
      metadata,
      callback
    );
  }

  // List Print Formats
  listPrintFormats ({
    token,
    tableName,
    reportViewUuid,
    processUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListPrintFormatsRequest } = this.stubFile;
    const request = new ListPrintFormatsRequest();

    request.setTableName(tableName);
    request.setReportViewUuid(reportViewUuid);
    request.setProcessUuid(processUuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listPrintFormats(
      request,
      metadata,
      callback
    );
  }

  // List Report Views
  listReportViews ({
    token,
    tableName,
    processUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListReportViewsRequest } = this.stubFile;
    const request = new ListReportViewsRequest();

    request.setTableName(tableName);
    request.setProcessUuid(processUuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listReportViews(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Mail Templates
   * @param {string} token session
   * @param {string} searchValue filter records
   * @param {number} pageSize records per page
   * @param {string} pageToken
   */
  listMailTemplates ({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListMailTemplatesRequest } = this.stubFile;
    const request = new ListMailTemplatesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getUserInterfaceService().listMailTemplates(
      request,
      metadata,
      callback
    );
  }
}

module.exports = UserInterface;
