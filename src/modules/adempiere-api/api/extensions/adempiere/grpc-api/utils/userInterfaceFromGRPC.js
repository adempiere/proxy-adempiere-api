/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client Convert Utils                       *
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

const stubFile = require('.././grpc/proto/business_pb.js');

function getLookupItemFromGRPC (lookupItemToConvert) {
  if (!lookupItemToConvert) {
    return undefined;
  }
  const { getValuesMapFromGRPC } = require('./valueUtilsFromGRPC');

  return {
    id: lookupItemToConvert.getId(),
    uuid: lookupItemToConvert.getUuid(),
    table_name: lookupItemToConvert.getTableName(),
    values: getValuesMapFromGRPC({
      mapToConvert: lookupItemToConvert.getValuesMap(),
      returnType: 'object'
    })
  };
}

function getMailTemplateFromGRPC (mailTemplateToConvert) {
  if (!mailTemplateToConvert) {
    return undefined;
  }
  return {
    id: mailTemplateToConvert.getId(),
    uuid: mailTemplateToConvert.getUuid(),
    name: mailTemplateToConvert.getName(),
    subject: mailTemplateToConvert.getSubject(),
    mail_text: mailTemplateToConvert.getMailText()
  };
}

module.exports = {
  getLookupItemFromGRPC,
  getMailTemplateFromGRPC
};
