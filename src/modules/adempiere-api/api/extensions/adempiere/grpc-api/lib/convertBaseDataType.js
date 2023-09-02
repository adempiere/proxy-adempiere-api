/*************************************************************************************
 * Product: ADempiere gRPC Base Data Type Client Convert Utils                       *
 * Copyright (C) 2018-present E.R.P. Consultores y Asociados, C.A.                   *
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

const convertBaseDataType = {

  /**
   * Convert criteria to json structure
   * @param {Criteria} criteriaToConvert
   * TODO: Add convert condition from gRPC and order by column from gRPC
   */
  convertCriteriaFromGRPC (criteriaToConvert) {
    if (criteriaToConvert) {
      const { getValueFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');

      return {
        table_name: criteriaToConvert.getTableName(),
        query: criteriaToConvert.getQuery(),
        where_clause: criteriaToConvert.getWhereClause(),
        order_by_clause: criteriaToConvert.getOrderByClause(),
        reference_uuid: criteriaToConvert.getReferenceUuid(),
        filters: criteriaToConvert.getConditionsList().map(condition => {
          return {
            column_name: condition.getColumnName(),
            value: condition.getValue(),
            value_to: condition.getvValueTo(),
            values: condition.getValues(),
            operator: condition.getOperator()
          }
        }),
        values: criteriaToConvert.getValuesList().map(value => {
          return getValueFromGRPC(value);
        }),
        order_by_columns: criteriaToConvert.getOrderByColumnList().map(orderBy => {
          return convertBaseDataType.convertOrderByPropertyFromGRPC(orderBy);
        }),
        limit: criteriaToConvert.getLimit()
      };
    }
    return undefined;
  },

  convertOrderByPropertyFromGRPC (orderByPropertyToConvert) {
    if (orderByPropertyToConvert) {
      const { getOrderType } = require('./convertEnums.js');

      return {
        column_name: orderByPropertyToConvert.getColumnName(),
        order_type: orderByPropertyToConvert.getOrderType(),
        order_type_name: getOrderType({
          value: orderByPropertyToConvert.getOrderType()
        })
      };
    }
    return undefined;
  },

  convertDocumentStatusFromGRPC (documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentActionFromGRPC (documentActionToConvert) {
    if (documentActionToConvert) {
      return {
        value: documentActionToConvert.getValue(),
        name: documentActionToConvert.getName(),
        description: documentActionToConvert.getDescription()
      };
    }
    return undefined;
  },

  //  Convert Entity
  convertEntityFromGRPC (entity) {
    if (!entity) {
      return undefined
    }
    return {
      id: entity.getId(),
      uuid: entity.getUuid(),
      table_name: entity.getTableName(),
      attributes: convertBaseDataType.convertAttributes(entity.getValuesMap())
    }
  },

  //  get Context
  convertAttributes (context) {
    const { getValueFromGRPC } = require('.././utils/baseDataTypeFromGRPC.js');
    const { isEmptyValue } = require('.././utils/valueUtils.js');

    const values = []
    context.forEach((value, key) => {
      const convertedValue = getValueFromGRPC(value);
      const currentValue = isEmptyValue(convertedValue) ? null : convertedValue;

      values.push({
        key: key,
        value: currentValue
      });
    });

    return values;
  },

  convertTranslationFromGRPC (translation) {
    if (translation) {
      const { getValuesMapFromGRPC } = require('.././utils/valueUtilsFromGRPC.js');

      return {
        language: translation.getLanguage(),
        uuid: translation.getUuid(),
        values: getValuesMapFromGRPC({
          mapToConvert: translation.getValuesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  convertPrintFromatFromGRPC (printFromatToConvert) {
    if (printFromatToConvert) {
      return {
        print_format_uuid: printFromatToConvert.getUuid(),
        name: printFromatToConvert.getName(),
        description: printFromatToConvert.getDescription(),
        table_name: printFromatToConvert.getTableName(),
        is_default: printFromatToConvert.getIsDefault(),
        report_view_uuid: printFromatToConvert.getReportViewUuid()
      };
    }
    return undefined;
  },

  convertReportViewFromGRPC (reportView) {
    if (reportView) {
      return {
        report_view_uuid: reportView.getUuid(),
        name: reportView.getName(),
        description: reportView.getDescription(),
        table_name: reportView.getTableName()
      };
    }
    return undefined;
  },

  convertDrillTableFromGRPC (drillTable) {
    if (drillTable) {
      return {
        table_name: drillTable.getTableName(),
        print_name: drillTable.getPrintName()
      };
    }
    return undefined;
  }

};

module.exports = convertBaseDataType;
