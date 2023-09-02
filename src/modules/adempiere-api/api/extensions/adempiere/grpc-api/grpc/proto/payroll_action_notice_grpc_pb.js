// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program. If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_payroll_action_notice_pb = require('../proto/payroll_action_notice_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_Entity(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Entity)) {
    throw new Error('Expected argument of type data.Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Entity(buffer_arg) {
  return proto_base_data_type_pb.Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListEntitiesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListEntitiesResponse)) {
    throw new Error('Expected argument of type data.ListEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListEntitiesResponse(buffer_arg) {
  return proto_business_pb.ListEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListLookupItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse(buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_DeletePayrollMovementsRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.DeletePayrollMovementsRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.DeletePayrollMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_DeletePayrollMovementsRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.DeletePayrollMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_GetPayrollConceptDefinitionRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.GetPayrollConceptDefinitionRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.GetPayrollConceptDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_GetPayrollConceptDefinitionRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.GetPayrollConceptDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_ListEmployeeValidRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.ListEmployeeValidRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.ListEmployeeValidRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_ListEmployeeValidRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.ListEmployeeValidRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_ListPayrollConceptsRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.ListPayrollConceptsRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.ListPayrollConceptsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_ListPayrollConceptsRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.ListPayrollConceptsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_ListPayrollMovementsRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.ListPayrollMovementsRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.ListPayrollMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_ListPayrollMovementsRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.ListPayrollMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_ListPayrollProcessRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.ListPayrollProcessRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.ListPayrollProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_ListPayrollProcessRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.ListPayrollProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payroll_action_notice_SavePayrollMovementRequest(arg) {
  if (!(arg instanceof proto_payroll_action_notice_pb.SavePayrollMovementRequest)) {
    throw new Error('Expected argument of type payroll_action_notice.SavePayrollMovementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payroll_action_notice_SavePayrollMovementRequest(buffer_arg) {
  return proto_payroll_action_notice_pb.SavePayrollMovementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The payroll-action-notice service definition.
var PayrollActionNoticeService = exports.PayrollActionNoticeService = {
  // List Payroll Process
listPayrollProcess: {
    path: '/payroll_action_notice.PayrollActionNotice/ListPayrollProcess',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.ListPayrollProcessRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payroll_action_notice_ListPayrollProcessRequest,
    requestDeserialize: deserialize_payroll_action_notice_ListPayrollProcessRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // List Employee Valid
listEmployeeValid: {
    path: '/payroll_action_notice.PayrollActionNotice/ListEmployeeValid',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.ListEmployeeValidRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payroll_action_notice_ListEmployeeValidRequest,
    requestDeserialize: deserialize_payroll_action_notice_ListEmployeeValidRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // List Payroll Concepts
listPayrollConcepts: {
    path: '/payroll_action_notice.PayrollActionNotice/ListPayrollConcepts',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.ListPayrollConceptsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payroll_action_notice_ListPayrollConceptsRequest,
    requestDeserialize: deserialize_payroll_action_notice_ListPayrollConceptsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // Get Payroll Concept Definition
getPayrollConceptDefinition: {
    path: '/payroll_action_notice.PayrollActionNotice/GetPayrollConceptDefinition',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.GetPayrollConceptDefinitionRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_payroll_action_notice_GetPayrollConceptDefinitionRequest,
    requestDeserialize: deserialize_payroll_action_notice_GetPayrollConceptDefinitionRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // List Payroll Movements
listPayrollMovements: {
    path: '/payroll_action_notice.PayrollActionNotice/ListPayrollMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.ListPayrollMovementsRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_payroll_action_notice_ListPayrollMovementsRequest,
    requestDeserialize: deserialize_payroll_action_notice_ListPayrollMovementsRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // Save Payroll Movement
savePayrollMovement: {
    path: '/payroll_action_notice.PayrollActionNotice/SavePayrollMovement',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.SavePayrollMovementRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_payroll_action_notice_SavePayrollMovementRequest,
    requestDeserialize: deserialize_payroll_action_notice_SavePayrollMovementRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // Delete Payroll Movements
deletePayrollMovements: {
    path: '/payroll_action_notice.PayrollActionNotice/DeletePayrollMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_payroll_action_notice_pb.DeletePayrollMovementsRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_payroll_action_notice_DeletePayrollMovementsRequest,
    requestDeserialize: deserialize_payroll_action_notice_DeletePayrollMovementsRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
};

exports.PayrollActionNoticeClient = grpc.makeGenericClientConstructor(PayrollActionNoticeService);
