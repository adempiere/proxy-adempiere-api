/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client Convert Utils                           *
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

// Convert Zoom Window
function getZoomWindowFromGRPC (zoomWindowToConvert) {
  if (!zoomWindowToConvert) {
    return undefined
  }
  return {
    id: zoomWindowToConvert.getId(),
    uuid: zoomWindowToConvert.getUuid(),
    name: zoomWindowToConvert.getName(),
    description: zoomWindowToConvert.getDescription(),
    is_sales_transaction: zoomWindowToConvert.getIsSalesTransaction(),
    is_active: zoomWindowToConvert.getIsActive()
  }
}

// Convert Reference
function getReferenceFromGRPC (referenceToConvert) {
  if (!referenceToConvert) {
    return undefined
  }
  return {
    id: referenceToConvert.getId(),
    uuid: referenceToConvert.getUuid(),
    table_name: referenceToConvert.getTableName(),
    key_column_name: referenceToConvert.getKeyColumnName(),
    display_column_name: referenceToConvert.getDisplayColumnName(),
    zoom_windows: referenceToConvert.getZoomWindowsList().map(zoomWindow => {
      return getZoomWindowFromGRPC(zoomWindow)
    }),
    context_column_names: referenceToConvert.getContextColumnNamesList().map(columnName => {
      return columnName
    })
  }
}

module.exports = {
  getReferenceFromGRPC,
  getZoomWindowFromGRPC
};
