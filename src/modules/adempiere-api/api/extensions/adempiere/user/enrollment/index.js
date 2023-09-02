import { Router } from 'express';

module.exports = ({ config }) => {
  const api = Router();
  const ServiceApi = require('../.././grpc-api/services/enrollment')
  const service = new ServiceApi(config)

  /**
   * POST enroll an user
   * Request body:
   *
   * {
   * "user_name":"HolaHola",
   * "name":"Hola Hola",
   * "email":"pkarwatka102@divante.pl",
   * "client_version":"Version Epale",
   * "application_type":"Epale",
   * "password":"TopSecretPassword"
   * }
   *
   * Details:
   */
  api.post('/enroll', (req, res) => {
    if (req.body) {
      service.enrollUser({
        userName: req.body.user_name,
        name: req.body.name,
        email: req.body.email,
        clientVersion: req.body.client_version,
        applicationType: req.body.application_type,
        password: req.body.password
      }, (err, response) => {
        if (response) {
          res.json({
            code: 200,
            result: {
              user_name: response.getUserName(),
              name: response.getName(),
              email: response.getEmail()
            }
          })
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Request a reset password
   * Request body:
   *
   * {
   * "user_name":"HolaHola",
   * "email":"pkarwatka102@divante.pl",
   * "client_version":"Version Epale",
   * }
   *
   * Details:
   */
  api.post('/reset-password', (req, res) => {
    if (req.body) {
      service.resetPassword({
        userName: req.body.user_name,
        email: req.body.email,
        clientVersion: req.body.client_version
      }, (err, response) => {
        if (response) {
          if (response.getResponseType() === 0) {
            res.json({
              code: 200,
              result: 'Ok'
            })
          } else {
            res.json({
              code: 500,
              result: 'Error'
            })
          }
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Change Password from Token
   * Request body:
   *
   * {
   * "token":"akhjgdsfsdq476328463249234032anbfkd",
   * "client_version":"Version Epale",
   * "password":"TopSecretPassword"
   * }
   *
   * Details:
   */
  api.post('/change-password', (req, res) => {
    if (req.body) {
      service.resetPasswordFromToken({
        token: req.body.token,
        password: req.body.password,
        clientVersion: req.body.client_version
      }, (err, response) => {
        if (response) {
          if (response.getResponseType() === 0) {
            res.json({
              code: 200,
              result: 'Ok'
            })
          } else {
            res.json({
              code: 500,
              result: 'Error'
            })
          }
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  /**
   * POST Activate User
   * Request body:
   *
   * {
   * "token":"akhjgdsfsdq476328463249234032anbfkd",
   * "client_version":"Version Epale",
   * } ```
   *
   * Details:
   */
  api.post('/activate-user', (req, res) => {
    if (req.body) {
      service.activateUser({
        token: req.body.token,
        clientVersion: req.body.client_version
      }, (err, response) => {
        if (response) {
          if (response.getResponseType() === 0) {
            res.json({
              code: 200,
              result: 'Ok'
            })
          } else {
            res.json({
              code: 500,
              result: 'Error'
            })
          }
        } else if (err) {
          res.json({
            code: 500,
            result: err.details
          })
        }
      })
    }
  });

  return api;
};
