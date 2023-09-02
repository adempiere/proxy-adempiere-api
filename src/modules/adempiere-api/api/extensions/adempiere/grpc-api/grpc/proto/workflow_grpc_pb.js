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
var proto_workflow_pb = require('../proto/workflow_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');

function serialize_data_Empty(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Empty)) {
    throw new Error('Expected argument of type data.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Empty(buffer_arg) {
  return proto_base_data_type_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessLog(arg) {
  if (!(arg instanceof proto_base_data_type_pb.ProcessLog)) {
    throw new Error('Expected argument of type data.ProcessLog');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessLog(buffer_arg) {
  return proto_base_data_type_pb.ProcessLog.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ForwardRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.ForwardRequest)) {
    throw new Error('Expected argument of type workflow.ForwardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ForwardRequest(buffer_arg) {
  return proto_workflow_pb.ForwardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListDocumentActionsRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.ListDocumentActionsRequest)) {
    throw new Error('Expected argument of type workflow.ListDocumentActionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListDocumentActionsRequest(buffer_arg) {
  return proto_workflow_pb.ListDocumentActionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListDocumentActionsResponse(arg) {
  if (!(arg instanceof proto_workflow_pb.ListDocumentActionsResponse)) {
    throw new Error('Expected argument of type workflow.ListDocumentActionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListDocumentActionsResponse(buffer_arg) {
  return proto_workflow_pb.ListDocumentActionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListDocumentStatusesRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.ListDocumentStatusesRequest)) {
    throw new Error('Expected argument of type workflow.ListDocumentStatusesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListDocumentStatusesRequest(buffer_arg) {
  return proto_workflow_pb.ListDocumentStatusesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListDocumentStatusesResponse(arg) {
  if (!(arg instanceof proto_workflow_pb.ListDocumentStatusesResponse)) {
    throw new Error('Expected argument of type workflow.ListDocumentStatusesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListDocumentStatusesResponse(buffer_arg) {
  return proto_workflow_pb.ListDocumentStatusesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListWorkflowActivitiesRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.ListWorkflowActivitiesRequest)) {
    throw new Error('Expected argument of type workflow.ListWorkflowActivitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListWorkflowActivitiesRequest(buffer_arg) {
  return proto_workflow_pb.ListWorkflowActivitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListWorkflowActivitiesResponse(arg) {
  if (!(arg instanceof proto_workflow_pb.ListWorkflowActivitiesResponse)) {
    throw new Error('Expected argument of type workflow.ListWorkflowActivitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListWorkflowActivitiesResponse(buffer_arg) {
  return proto_workflow_pb.ListWorkflowActivitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListWorkflowsRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.ListWorkflowsRequest)) {
    throw new Error('Expected argument of type workflow.ListWorkflowsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListWorkflowsRequest(buffer_arg) {
  return proto_workflow_pb.ListWorkflowsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ListWorkflowsResponse(arg) {
  if (!(arg instanceof proto_workflow_pb.ListWorkflowsResponse)) {
    throw new Error('Expected argument of type workflow.ListWorkflowsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ListWorkflowsResponse(buffer_arg) {
  return proto_workflow_pb.ListWorkflowsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_ProcessRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.ProcessRequest)) {
    throw new Error('Expected argument of type workflow.ProcessRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_ProcessRequest(buffer_arg) {
  return proto_workflow_pb.ProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_RunDocumentActionRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.RunDocumentActionRequest)) {
    throw new Error('Expected argument of type workflow.RunDocumentActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_RunDocumentActionRequest(buffer_arg) {
  return proto_workflow_pb.RunDocumentActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_WorkflowDefinition(arg) {
  if (!(arg instanceof proto_workflow_pb.WorkflowDefinition)) {
    throw new Error('Expected argument of type workflow.WorkflowDefinition');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_WorkflowDefinition(buffer_arg) {
  return proto_workflow_pb.WorkflowDefinition.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_WorkflowDefinitionRequest(arg) {
  if (!(arg instanceof proto_workflow_pb.WorkflowDefinitionRequest)) {
    throw new Error('Expected argument of type workflow.WorkflowDefinitionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_WorkflowDefinitionRequest(buffer_arg) {
  return proto_workflow_pb.WorkflowDefinitionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// 	Workflow management service
var WorkflowService = exports.WorkflowService = {
  // Get Workflow
getWorkflow: {
    path: '/workflow.Workflow/GetWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.WorkflowDefinitionRequest,
    responseType: proto_workflow_pb.WorkflowDefinition,
    requestSerialize: serialize_workflow_WorkflowDefinitionRequest,
    requestDeserialize: deserialize_workflow_WorkflowDefinitionRequest,
    responseSerialize: serialize_workflow_WorkflowDefinition,
    responseDeserialize: deserialize_workflow_WorkflowDefinition,
  },
  // 	List Workflow
listWorkflows: {
    path: '/workflow.Workflow/ListWorkflows',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.ListWorkflowsRequest,
    responseType: proto_workflow_pb.ListWorkflowsResponse,
    requestSerialize: serialize_workflow_ListWorkflowsRequest,
    requestDeserialize: deserialize_workflow_ListWorkflowsRequest,
    responseSerialize: serialize_workflow_ListWorkflowsResponse,
    responseDeserialize: deserialize_workflow_ListWorkflowsResponse,
  },
  // 	List Document Actions
listDocumentActions: {
    path: '/workflow.Workflow/ListDocumentActions',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.ListDocumentActionsRequest,
    responseType: proto_workflow_pb.ListDocumentActionsResponse,
    requestSerialize: serialize_workflow_ListDocumentActionsRequest,
    requestDeserialize: deserialize_workflow_ListDocumentActionsRequest,
    responseSerialize: serialize_workflow_ListDocumentActionsResponse,
    responseDeserialize: deserialize_workflow_ListDocumentActionsResponse,
  },
  // 	List Document Statuses
listDocumentStatuses: {
    path: '/workflow.Workflow/ListDocumentStatuses',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.ListDocumentStatusesRequest,
    responseType: proto_workflow_pb.ListDocumentStatusesResponse,
    requestSerialize: serialize_workflow_ListDocumentStatusesRequest,
    requestDeserialize: deserialize_workflow_ListDocumentStatusesRequest,
    responseSerialize: serialize_workflow_ListDocumentStatusesResponse,
    responseDeserialize: deserialize_workflow_ListDocumentStatusesResponse,
  },
  // 	Workflow Activities
listWorkflowActivities: {
    path: '/workflow.Workflow/ListWorkflowActivities',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.ListWorkflowActivitiesRequest,
    responseType: proto_workflow_pb.ListWorkflowActivitiesResponse,
    requestSerialize: serialize_workflow_ListWorkflowActivitiesRequest,
    requestDeserialize: deserialize_workflow_ListWorkflowActivitiesRequest,
    responseSerialize: serialize_workflow_ListWorkflowActivitiesResponse,
    responseDeserialize: deserialize_workflow_ListWorkflowActivitiesResponse,
  },
  process: {
    path: '/workflow.Workflow/Process',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.ProcessRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_workflow_ProcessRequest,
    requestDeserialize: deserialize_workflow_ProcessRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  forward: {
    path: '/workflow.Workflow/Forward',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.ForwardRequest,
    responseType: proto_base_data_type_pb.Empty,
    requestSerialize: serialize_workflow_ForwardRequest,
    requestDeserialize: deserialize_workflow_ForwardRequest,
    responseSerialize: serialize_data_Empty,
    responseDeserialize: deserialize_data_Empty,
  },
  // 	Run a Document Action
runDocumentAction: {
    path: '/workflow.Workflow/RunDocumentAction',
    requestStream: false,
    responseStream: false,
    requestType: proto_workflow_pb.RunDocumentActionRequest,
    responseType: proto_base_data_type_pb.ProcessLog,
    requestSerialize: serialize_workflow_RunDocumentActionRequest,
    requestDeserialize: deserialize_workflow_RunDocumentActionRequest,
    responseSerialize: serialize_data_ProcessLog,
    responseDeserialize: deserialize_data_ProcessLog,
  },
};

exports.WorkflowClient = grpc.makeGenericClientConstructor(WorkflowService);
