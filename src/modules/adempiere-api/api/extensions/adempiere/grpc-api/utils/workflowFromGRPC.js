/*************************************************************************************
 * Product: ADempiere gRPC Workflow Client Convert Utils                             *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
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

/**
 * Get all workflow state or get key value type from value
 * @param {number} value
 * @param {string} key
      RUNNING: 0,
      COMPLETED: 1,
      ABORTED: 2,
      TERMINATED: 3,
      SUSPENDED: 4,
      NOT_STARTED: 5,
  */
function getWorkflowState ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { WorkflowState } = require('.././grpc/proto/workflow_pb.js');

  return getValueOrKeyEnum({
    list: WorkflowState,
    key,
    value
  });
}

/**
 * Get all workflow priority or get key value type from value
 * @param {number} value
 * @param {string} key
      URGENT: 0,
      HIGH: 1,
      MEDIUM: 2,
      LOW: 3,
      MINOR: 4,
  */
function getPriority ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { Priority } = require('.././grpc/proto/workflow_pb.js');

  return getValueOrKeyEnum({
    list: Priority,
    key,
    value
  });
}

/**
 * Get all workflow event type or get key value type from value
 * @param {number} value
 * @param {string} key
      PROCESS_CREATED = 0;
      PROCESS_COMPLETED = 1;
      STATE_CHANGED = 2;
  */
function getEventType ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { EventType } = require('.././grpc/proto/workflow_pb');

  return getValueOrKeyEnum({
    list: EventType,
    key,
    value
  });
}

/**
 * Get all workflow node action or get key value type from value
 * @param {number} value
 * @param {string} key
    USER_CHOICE = 0;
    DOCUMENT_ACTION = 1;
    SUB_WORKFLOW = 2;
    EMAIL = 3;
    APPS_PROCESS = 4;
    SMART_VIEW = 5;
    APPS_REPORT = 6;
    SMART_BROWSE = 7;
    APPS_TASK = 8;
    SET_VARIABLE = 9;
    USER_WINDOW = 10;
    USER_FORM = 11;
    WAIT_SLEEP = 12;
  */
function getAction ({ value, key }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { Action } = require('.././grpc/proto/workflow_pb');

  return getValueOrKeyEnum({
    list: Action,
    key,
    value
  });
}

/**
 * Get all workflow condition, condition type action or get key value type from value
 * @param {number} value
 * @param {string} key
    AND = 0;
    OR = 1;
  */
function getConditionType ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { ConditionType } = require('.././grpc/proto/workflow_pb');

  return getValueOrKeyEnum({
    list: ConditionType,
    key,
    value
  });
}

/**
 * Get all workflow condition, condition type action or get key value type from value
 * @param {number} value
 * @param {string} key
    EQUAL = 0;
    NOT_EQUAL = 1;
    LIKE = 2;
    GREATER = 4;
    GREATER_EQUAL = 5;
    LESS = 6;
    LESS_EQUAL = 7;
    BETWEEN = 8;
    SQL = 9;
  */
function getOperation ({ value, key }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { Operation } = require('.././grpc/proto/workflow_pb');

  return getValueOrKeyEnum({
    list: Operation,
    key,
    value
  });
}

/**
 * Get all workflow definition publush status or get key value type from value
 * @param {number} value
 * @param {string} key
      RELEASED = 0;
      TEST = 1;
      UNDER_REVISION = 2;
      VOID = 3;
  */
function getPublishStatus ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { PublishStatus } = require('.././grpc/proto/workflow_pb');

  return getValueOrKeyEnum({
    list: PublishStatus,
    key,
    value
  });
}

/**
 * Get all workflow definition duration unit or get key value type from value
 * @param {number} value
 * @param {string} key
      DAY = 0;
      HOUR = 1;
      MINUTE = 2;
      MONTH = 3;
      SECOND = 4;
      YEAR = 5;
  */
function getDurationUnit ({ key, value }) {
  const { getValueOrKeyEnum } = require('./convertEnums.js')
  const { DurationUnit } = require('.././grpc/proto/workflow_pb.js');

  return getValueOrKeyEnum({
    list: DurationUnit,
    key,
    value
  });
}

function getWorkflowProcessFomGRPC (workflowProcess) {
  if (!workflowProcess) {
    return undefined
  }

  return {
    process_uuid: workflowProcess.getProcessUuid(),
    workflow_uuid: workflowProcess.getWorkflowUuid(),
    workflow_name: workflowProcess.getWorkflowName(),
    id: workflowProcess.getId(),
    uuid: workflowProcess.getUuid(),
    table_name: workflowProcess.getTableName(),
    user_uuid: workflowProcess.getUserUuid(),
    user_name: workflowProcess.getUserName(),
    responsible_id: workflowProcess.getResponsibleId(),
    responsible_uuid: workflowProcess.getResponsibleUuid(),
    responsible_name: workflowProcess.getResponsibleName(),
    text_message: workflowProcess.getTextMessage(),
    processed: workflowProcess.getProcessed(),
    workflow_state_name: getWorkflowState({
      value: workflowProcess.getWorkflowState()
    }),
    workflow_state: workflowProcess.getWorkflowState(),
    priority: workflowProcess.getPriority(),
    priority_name: getPriority({
      value: workflowProcess.getPriority()
    }),
    workflow_events: workflowProcess.getWorkflowEventsList().map(itemEvent => {
      return getWorkflowEventFromGRPC(itemEvent);
    }),
    log_date: new Date(workflowProcess.getLogDate())
  };
}

function getWorkflowEventFromGRPC (workflowEvent) {
  if (!workflowEvent) {
    return undefined;
  }

  return {
    node_uuid: workflowEvent.getNodeUuid(),
    node_name: workflowEvent.getNodeName(),
    id: workflowEvent.getId(),
    uuid: workflowEvent.getUuid(),
    table_name: workflowEvent.getTableName(),
    user_uuid: workflowEvent.getUserUuid(),
    user_name: workflowEvent.getUserName(),
    responsible_id: workflowEvent.getResponsibleId(),
    responsible_uuid: workflowEvent.getResponsibleUuid(),
    responsible_name: workflowEvent.getResponsibleName(),
    text_message: workflowEvent.getTextMessage(),
    time_elapsed: workflowEvent.getTimeElapsed(),
    attribute_name: workflowEvent.getAttributeName(),
    old_value: workflowEvent.getOldValue(),
    new_value: workflowEvent.getNewValue(),
    workflow_state: workflowEvent.getWorkflowState(),
    workflow_state_name: getWorkflowState({
      value: workflowEvent.getWorkflowState()
    }),
    event_type: workflowEvent.getEventType(),
    event_type_name: getEventType({
      value: workflowEvent.getEventType()
    }),
    log_date: new Date(workflowEvent.getLogDate())
  };
}

function getZoomWindowFromGRPC (zoomWindow) {
  if (!zoomWindow) {
    return undefined;
  }
  return {
    id: zoomWindow.getId(),
    uuid: zoomWindow.getUuid(),
    name: zoomWindow.getName(),
    description: zoomWindow.getDescription(),
    is_sales_transaction: zoomWindow.getIsSalesTransaction()
  };
}

function getWorkflowActivityFromGRPC (workflowActivity) {
  if (!workflowActivity) {
    return undefined;
  }
  return {
    uuid: workflowActivity.getUuid(),
    id: workflowActivity.getId(),
    table_name: workflowActivity.getTableName(),
    record_id: workflowActivity.getRecordId(),
    record_uuid: workflowActivity.getRecordUuid(),
    user_uuid: workflowActivity.getUserUuid(),
    user_name: workflowActivity.getUserName(),
    responsible_id: workflowActivity.getResponsibleId(),
    responsible_uuid: workflowActivity.getResponsibleUuid(),
    responsible_name: workflowActivity.getResponsibleName(),
    text_message: workflowActivity.getTextMessage(),
    priority: workflowActivity.getPriority(),
    processed: workflowActivity.getProcessed(),
    created: new Date(workflowActivity.getCreated()),
    last_alert: new Date(workflowActivity.getLastAlert()),
    workflow_process: getWorkflowProcessFomGRPC(
      workflowActivity.getWorkflowProcess()
    ),
    workflow: getWorkflowDefinitionFromGRPC(
      workflowActivity.getWorkflow()
    ),
    node: getWorkflowNodeFromGRPC(
      workflowActivity.getNode()
    ),
    zoom_windows: workflowActivity.getZoomWindowsList().map(zoomWindow => {
      return getZoomWindowFromGRPC(zoomWindow);
    })
  };
}

function getWorkflowDefinitionFromGRPC (workflow) {
  if (!workflow) {
    return undefined;
  }

  return {
    id: workflow.getId(),
    uuid: workflow.getUuid(),
    value: workflow.getValue(),
    name: workflow.getName(),
    description: workflow.getDescription(),
    help: workflow.getHelp(),
    table_name: workflow.getTableName(),
    responsible_id: workflow.getResponsibleId(),
    responsible_uuid: workflow.getResponsibleUuid(),
    responsible_name: workflow.getResponsibleName(),
    priority: workflow.getPriority(),
    valid_from: workflow.getValidFrom(),
    is_default: workflow.getIsDefault(),
    is_valid: workflow.getIsValid(),
    publish_status: workflow.getPublishStatus(),
    publish_status_name: getPublishStatus({
      value: workflow.getPublishStatus()
    }),
    duration_unit: workflow.getDurationUnit(),
    duration_unit_name: getDurationUnit({
      value: workflow.getDurationUnit()
    }),
    start_node: getWorkflowNodeFromGRPC(workflow.getStartNode()),
    workflow_nodes: workflow.getWorkflowNodesList().map(itemWorkflowNode => {
      return getWorkflowNodeFromGRPC(itemWorkflowNode);
    })
  };
}

function getWorkflowNodeFromGRPC (node) {
  if (!node) {
    return undefined;
  }

  return {
    id: node.getId(),
    uuid: node.getUuid(),
    value: node.getValue(),
    name: node.getName(),
    description: node.getDescription(),
    help: node.getHelp(),
    responsible_id: node.getResponsibleId(),
    responsible_uuid: node.getResponsibleUuid(),
    responsible_name: node.getResponsibleName(),
    document_action: {
      value: node.getDocumentActionValue(),
      name: node.getDocumentActionName()
    },
    priority: node.getPriority(),
    action: node.getAction(),
    action_name: getAction({
      value: node.getAction()
    }),
    transitions: node.getTransitionsList().map(itemTransition => {
      return getWorkflowTransitionFromGRPC(itemTransition);
    })
  };
}

function getWorkflowTransitionFromGRPC (workflowTransitionToConvert) {
  if (!workflowTransitionToConvert) {
    return undefined;
  }
  return {
    id: workflowTransitionToConvert.getId(),
    uuid: workflowTransitionToConvert.getUuid(),
    description: workflowTransitionToConvert.getDescription(),
    is_standard_user_workflow: workflowTransitionToConvert.getIsStdUserWorkflow(),
    sequence: workflowTransitionToConvert.getSequence(),
    node_next_id: workflowTransitionToConvert.getNodeNextId(),
    node_next_uuid: workflowTransitionToConvert.getNodeNextUuid(),
    node_next_name: workflowTransitionToConvert.getNodeNextName(),
    workflow_conditions: workflowTransitionToConvert.getWorkflowConditionsList().map(condition => {
      return getWorkflowConditionFromGRPC(condition);
    })
  };
}

function getWorkflowConditionFromGRPC (workflowConditionToConvert) {
  if (!workflowConditionToConvert) {
    return undefined;
  }

  return {
    sequence: workflowConditionToConvert.getSequence(),
    colum_name: workflowConditionToConvert.getColumnName(),
    value: workflowConditionToConvert.getValue(),
    condition_type: workflowConditionToConvert.getConditionType(),
    condition_type_name: getConditionType({
      value: workflowConditionToConvert.getConditiontype()
    }),
    operation: workflowConditionToConvert.getOperation(),
    operation_name: getOperation({
      value: workflowConditionToConvert.getOpetation()
    })
  };
}

function getDocumentActionFromGRPC (documentActionToConvert) {
  if (!documentActionToConvert) {
    return undefined;
  }
  return {
    value: documentActionToConvert.getValue(),
    name: documentActionToConvert.getName(),
    description: documentActionToConvert.getDescription()
  };
}

function getDocumentStatusFromGRPC (documentStatusToConvert) {
  if (documentStatusToConvert) {
    return {
      value: documentStatusToConvert.getValue(),
      name: documentStatusToConvert.getName(),
      description: documentStatusToConvert.getDescription()
    };
  }
  return undefined;
}

module.exports = {
  getWorkflowState,
  getOperation,
  getPriority,
  getEventType,
  getAction,
  getConditionType,
  getPublishStatus,
  getDurationUnit,
  //
  getWorkflowProcessFomGRPC,
  getWorkflowEventFromGRPC,
  getDocumentStatusFromGRPC,
  getWorkflowActivityFromGRPC,
  getWorkflowDefinitionFromGRPC,
  getWorkflowNodeFromGRPC,
  getWorkflowTransitionFromGRPC,
  getWorkflowConditionFromGRPC,
  getDocumentActionFromGRPC,
  getZoomWindowFromGRPC
};
