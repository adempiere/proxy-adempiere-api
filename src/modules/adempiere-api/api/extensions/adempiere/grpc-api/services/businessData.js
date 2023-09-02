/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client                                      *
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
const { isEmptyValue, getValidId, getValidInteger, getTypeOfValue } = require('.././utils/valueUtils.js');

class BusinessData {
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

    this.initBusinessDataService();
    console.log('ADempiere Business Data Client Started');
  }

  // Init connection
  initBusinessDataService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/business_grpc_pb');
    this.businessData = new services.BusinessDataClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Business Data Service
  getBusinessDataService () {
    return this.businessData;
  }

  /**
   * Run a business process
   */
  runProcess ({
    token,
    id,
    uuid,
    tableName,
    recordId,
    recordUuid,
    reportType,
    printFormatId,
    printFormatUuid,
    reportViewId,
    reportViewUuid,
    isSummary,
    parametersList,
    tableSelectedId,
    selectionsList
  }, callback) {
    const { RunBusinessProcessRequest } = this.stubFile;
    const request = new RunBusinessProcessRequest();

    request.setId(
      getValidInteger(id)
    );
    request.setUuid(uuid);

    // record of window
    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    // report values
    request.setReportType(reportType);
    request.setPrintFormatId(
      getValidInteger(printFormatId)
    );
    request.setPrintFormatUuid(printFormatUuid);
    request.setReportViewId(
      getValidInteger(reportViewId)
    );
    request.setReportViewUuid(reportViewUuid);
    request.setIsSummary(isSummary);

    // set process parameters list
    if (!isEmptyValue(parametersList)) {
      if (getTypeOfValue(parametersList) === 'String') {
        parametersList = JSON.parse(parametersList);
      }

      const { getKeyValueToGRPC } = require('.././utils/baseDataTypeToGRPC.js');
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

    request.setTableSelectedId(
      getValidId(tableSelectedId)
    );
    // browser records selections list
    if (!isEmptyValue(selectionsList)) {
      const { getKeyValueSelectionToGRPC } = require('.././utils/baseDataTypeToGRPC.js');

      selectionsList.forEach(selection => {
        // selection format = { selectionId: number, selectionValues: [{ columName, value, valueType }] }
        const convertedRecord = getKeyValueSelectionToGRPC(selection);

        request.addSelections(convertedRecord);
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getBusinessDataService().runBusinessProcess(
      request,
      metadata,
      callback
    );
  }
}

module.exports = BusinessData;
