/*************************************************************************************
 * Product: ADempiere gRPC Metadata interceptors Client                              *
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

const grpc = require('@grpc/grpc-js');

/**
 * Create Metadata to request interceptors
 * @param {String} token
 */
function getMetadata ({
  token
}) {
  const metadata = new grpc.Metadata();
  metadata.add('Authorization', token);

  return metadata;
}

module.exports = {
  getMetadata
};
