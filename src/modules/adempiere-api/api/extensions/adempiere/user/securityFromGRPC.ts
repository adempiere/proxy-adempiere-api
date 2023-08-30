/************************************************************************************
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
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

/**
 * convert the value obtained from gRPC according to the type of value
 * @param {object} valueToConvert
 * @returns {mixed}
 */
export function getContextValueFromGRPC (valueToConvert) {
  if (valueToConvert === undefined || valueToConvert === null) {
    return undefined;
  }
  const { ValueType } = require('@adempiere/grpc-api/src/grpc/proto/security_pb.js');

  let returnValue;
  switch (valueToConvert.getValueType()) {
    // data type Null or undefined
    default:
    case ValueType.NULL:
      returnValue = undefined;
      break;
    // data type Number (integer)
    case ValueType.INTEGER:
      returnValue = valueToConvert.getIntValue();
      break;
    // data type Number (integer)
    case ValueType.LONG:
      returnValue = valueToConvert.getLongValue();
      break;
    // data type Number (float)
    case ValueType.DOUBLE:
      returnValue = valueToConvert.getDoubleValue();
      break;
    // data type Boolean
    case ValueType.BOOLEAN:
      returnValue = valueToConvert.getBooleanValue();
      break;
    // data type String
    case ValueType.STRING:
      returnValue = valueToConvert.getStringValue();
      break;
    // data type Date
    case ValueType.DATE:
      returnValue = new Date(valueToConvert.getLongValue());
      break;
  }
  return returnValue;
}

// get Context
export function getContextFromGRPC (context) {
  const values = []
  if (!context) {
    return values;
  }
  context.forEach((value, key) => {
    values.push({
      key: key,
      value: getContextValueFromGRPC(value)
    });
  });
  return values;
}

// get user info
export function getUserInfoFromGRPC (userInfo) {
  if (!userInfo) {
    return undefined;
  }
  return {
    id: userInfo.getId(),
    uuid: userInfo.getUuid(),
    name: userInfo.getName(),
    description: userInfo.getDescription(),
    comments: userInfo.getComments(),
    image: userInfo.getImage(),
    connection_timeout: userInfo.getConnectionTimeout()
  };
}

// get Role
export function getRoleFromGRPC (role) {
  if (!role) {
    return undefined;
  }
  return {
    id: role.getId(),
    uuid: role.getUuid(),
    name: role.getName(),
    description: role.getDescription(),
    client_id: role.getClientId(),
    client_name: role.getClientName(),
    client_logo: role.getClientLogo(),
    client_report_logo: role.getClientLogoReport(),
    client_web_logo: role.getClientLogoWeb(),
    is_can_report: role.getIsCanReport(),
    is_can_export: role.getIsCanExport(),
    is_personal_lock: role.getIsPersonalLock(),
    is_personal_access: role.getIsPersonalAccess(),
    is_allow_info_account: role.getIsAllowInfoAccount(),
    is_allow_info_business_partner: role.getIsAllowInfoBusinessPartner(),
    is_allow_info_in_out: role.getIsAllowInfoInOut(),
    is_allow_info_order: role.getIsAllowInfoOrder(),
    is_allow_info_product: role.getIsAllowInfoProduct(),
    is_allow_info_schedule: role.getIsAllowInfoSchedule(),
    is_allow_info_mrp: role.getIsAllowInfoMrp(),
    is_allow_html_view: role.getIsAllowHtmlView(),
    is_allow_info_asset: role.getIsAllowInfoAsset(),
    is_allow_info_cash_journal: role.getIsAllowInfoCashJournal(),
    is_allow_info_invoice: role.getIsAllowInfoInvoice(),
    is_allow_info_payment: role.getIsAllowInfoPayment(),
    is_allow_info_resource: role.getIsAllowInfoResource(),
    is_allow_info_crp: role.getIsAllowInfoCrp(),
    is_allow_xls_view: role.getIsAllowXlsView()
  };
}

// Convert session
export function getSessionFromGRPC (session) {
  if (!session) {
    return undefined;
  }
  return {
    id: session.getId(),
    uuid: session.getUuid(),
    name: session.getName(),
    user_info: getUserInfoFromGRPC(
      session.getUserInfo()
    ),
    role: getRoleFromGRPC(
      session.getRole()
    ),
    processed: session.getProcessed(),
    language: session.getLanguage(),
    country_id: session.getCountryId(),
    country_code: session.getCountryCode(),
    country_name: session.getCountryName(),
    display_sequence: session.getDisplaySequence(),
    currency_iso_code: session.getCurrencyIsoCode(),
    currency_name: session.getCurrencyName(),
    currency_symbol: session.getCurrencySymbol(),
    standard_precision: session.getStandardPrecision(),
    costing_precision: session.getCostingPrecision(),
    default_context: getContextFromGRPC(
      session.getDefaultContextMap()
    )
  };
}
