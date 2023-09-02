/*************************************************************************************
 * Product: ADempiere gRPC Security Client                                           *
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
const { getValidId } = require('.././utils/valueUtils.js');

class Security {
  /**
   * File on generated stub
   */
  stubFile = require('.././grpc/proto/security_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor (config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.accessHost = adempiereConfig.accessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initSecurityService();
    console.log('ADempiere Security Client Started');
  }

  // Init connection
  initSecurityService () {
    const grpc = require('@grpc/grpc-js');
    const services = require('.././grpc/proto/security_grpc_pb');
    this.security = new services.SecurityClient(
      this.accessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Security Service
  getSecurityService () {
    return this.security;
  }

  // Login with a user
  login ({
    user,
    password,
    token, // token as password
    roleUuid,
    organizationUuid,
    warehouseUuid,
    language
  }, callback) {
    const { LoginRequest } = this.stubFile;
    const request = new LoginRequest();

    request.setUserName(user);
    request.setUserPass(password);
    request.setToken(token);
    request.setRoleUuid(roleUuid);
    request.setOrganizationUuid(organizationUuid);
    request.setWarehouseUuid(warehouseUuid);
    request.setLanguage(language);
    request.setClientVersion(this.version);

    this.getSecurityService().runLogin(
      request,
      callback
    );
  }

  // Get User Information
  getUserInfo ({
    token
  }, callback) {
    const { UserInfoRequest } = this.stubFile;
    const request = new UserInfoRequest();

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().getUserInfo(
      request,
      metadata,
      callback
    );
  }

  // Get User Information
  getUserRoles ({
    token,
    pageSize,
    pageToken
  }, callback) {
    const { ListRolesRequest } = this.stubFile;
    const request = new ListRolesRequest();

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().listRoles(
      request,
      metadata,
      callback
    );
  }

  // Get User Menu
  getMenu ({
    token
  }, callback) {
    const { MenuRequest } = this.stubFile;
    const request = new MenuRequest();

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().getMenu(
      request,
      metadata,
      callback
    );
  }

  // Get User Session
  getSessionInfo ({
    token
  }, callback) {
    const { SessionInfoRequest } = this.stubFile;
    const request = new SessionInfoRequest();

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().getSessionInfo(
      request,
      metadata,
      callback
    );
  }

  // Change role
  changeRole ({
    token,
    roleUuid,
    organizationUuid,
    warehouseUuid,
    language
  }, callback) {
    const { ChangeRoleRequest } = this.stubFile;
    const request = new ChangeRoleRequest();

    request.setRoleUuid(roleUuid);
    request.setOrganizationUuid(organizationUuid);
    request.setWarehouseUuid(warehouseUuid);
    request.setLanguage(language);

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().runChangeRole(
      request,
      metadata,
      callback
    );
  }

  // Set session attribute
  setSessionAttribute ({
    token,
    language,
    warehouseId,
    warehouseUuid
  }, callback) {
    const { SetSessionAttributeRequest } = this.stubFile;
    const request = new SetSessionAttributeRequest();

    request.setLanguage(language);
    request.setWarehouseId(
      getValidId(warehouseId)
    );
    request.setWarehouseUuid(warehouseUuid);

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().setSessionAttribute(
      request,
      metadata,
      callback
    );
  }

  /**
   * Logout with current session
   * @param {String} token
   */
  logout ({
    token
  }, callback) {
    const { LogoutRequest } = this.stubFile;
    const request = new LogoutRequest();

    const metadata = getMetadata({
      token
    });

    this.getSecurityService().runLogout(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Services OpenID
   */
  listServices ({
    token
  }, callback) {
    const { ListServicesRequest } = this.stubFile;
    const request = new ListServicesRequest();

    // const metadata = getMetadata({
    //   token
    // });

    this.getSecurityService().listServices(
      request,
      // metadata,
      callback
    );
  }

  /**
   * Login with OpenID
   * @param {String} token
   */
  runLoginOpenID ({
    codeParameter,
    stateParameter,
    language,
    clientVersion
  }, callback) {
    const { LoginOpenIDRequest } = this.stubFile;
    const request = new LoginOpenIDRequest();

    request.setCodeParameter(codeParameter);
    request.setStateParameter(stateParameter);
    request.setLanguage(language);
    request.setClientVersion(clientVersion);

    // const metadata = getMetadata({
    //   token
    // });

    this.getSecurityService().runLoginOpenID(
      request,
      // metadata,
      callback
    );
  }
}

module.exports = Security;
