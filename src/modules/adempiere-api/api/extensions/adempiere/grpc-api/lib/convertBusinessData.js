/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>. m           *
 ************************************************************************************/

const convertBusinessData = {

  convertCalloutFromGRPC (callout) {
    if (!callout) {
      return undefined;
    }
    const { getValuesMapFromGRPC } = require('.././utils/valueUtilsFromGRPC.js');
    return {
      result: callout.getResult(),
      values: getValuesMapFromGRPC({
        mapToConvert: callout.getValuesMap(),
        returnType: 'object'
      })
    };
  },

  convertPrivateAccessFromGRPC (privateAccess) {
    if (privateAccess) {
      return {
        table_name: privateAccess.getTableName(),
        id: privateAccess.getId(),
        uuid: privateAccess.getUuid(),
        is_locked: privateAccess.getIsLocked()
      };
    }
    return undefined;
  },

  convertPreferenceFromGRPC (preference) {
    if (preference) {
      return {
        container_uuid: preference.getContainerUuid(),
        column_name: preference.getColumnName(),
        user_uuid: preference.getUserUuid(),
        client_uuid: preference.getClientUuid(),
        organization_uuid: preference.getOrganizationUuid(),
        type: preference.getType(),
        value: preference.getValue()
      };
    }
    return undefined;
  },

  convertChatEntryFromGRPC (charEntry) {
    if (charEntry) {
      const {
        getChatEntry_ChatEntryType,
        getChatEntry_ConfidentialType,
        getChatEntry_ModeratorStatus
      } = require('./convertEnums.js');

      return {
        chat_uuid: charEntry.getChatUuid(),
        uuid: charEntry.getUuid(),
        id: charEntry.getId(),
        subject: charEntry.getSubject(),
        character_data: charEntry.getCharacterData(),
        user_uuid: charEntry.getUserUuid(),
        user_name: charEntry.getUserName(),
        chat_entry_type: charEntry.getChatEntryType(),
        chat_entry_type_name: getChatEntry_ChatEntryType({
          value: charEntry.getChatEntryType()
        }),
        confidential_type: charEntry.getConfidentialType(),
        confidential_type_name: getChatEntry_ConfidentialType({
          value: charEntry.getConfidentialType()
        }),
        moderator_status: charEntry.getModeratorStatus(),
        moderator_status_bname: getChatEntry_ModeratorStatus({
          value: charEntry.getModeratorStatus()
        }),
        log_date: new Date(charEntry.getLogDate())
      };
    }
    return undefined;
  },

  convertCreateChatEntryFromGRPC (createChatEntry) {
    if (createChatEntry) {
      return {
        table_name: createChatEntry.getTableName(),
        id: createChatEntry.getId(),
        uuid: createChatEntry.getUuid(),
        comment: createChatEntry.getComment()
      };
    }
    return undefined;
  },

  convertWorkflowProcessFomGRPC (workflowProcess) {
    if (workflowProcess) {
      const {
        getWorkflowProcess_WorkflowState,
        getWorkflowProcess_WorkflowPriority
      } = require('./convertEnums.js');

      return {
        process_uuid: workflowProcess.getProcessUuid(),
        workflow_uuid: workflowProcess.getWorkflowUuid(),
        workflow_name: workflowProcess.getWorkflowName(),
        id: workflowProcess.getId(),
        uuid: workflowProcess.getUuid(),
        table_name: workflowProcess.getTableName(),
        user_uuid: workflowProcess.getUserUuid(),
        user_name: workflowProcess.getUserName(),
        responsible_uuid: workflowProcess.getResponsibleUuid(),
        responsible_name: workflowProcess.getResponsibleName(),
        text_message: workflowProcess.getTextMessage(),
        processed: workflowProcess.getProcessed(),
        workflow_state_name: getWorkflowProcess_WorkflowState({
          value: workflowProcess.getWorkflowState()
        }),
        workflow_state: workflowProcess.getWorkflowState(),
        priority: workflowProcess.getPriority(),
        priority_name: getWorkflowProcess_WorkflowPriority({
          value: workflowProcess.getPriority()
        }),
        workflow_events: workflowProcess.getWorkflowEventsList().map(itemEvent => {
          return convertBusinessData.convertWorkflowEventFromGRPC(itemEvent);
        }),
        log_date: new Date(workflowProcess.getLogDate())
      };
    }
    return undefined;
  },

  convertWorkflowEventFromGRPC (workflowEvent) {
    if (workflowEvent) {
      const {
        getWorkflowProcess_WorkflowState,
        getWorkflowEvent_EventType
      } = require('./convertEnums.js');

      return {
        node_uuid: workflowEvent.getNodeUuid(),
        node_name: workflowEvent.getNodeName(),
        id: workflowEvent.getId(),
        uuid: workflowEvent.getUuid(),
        table_name: workflowEvent.getTableName(),
        user_uuid: workflowEvent.getUserUuid(),
        user_name: workflowEvent.getUserName(),
        responsible_uuid: workflowEvent.getResponsibleUuid(),
        responsible_name: workflowEvent.getResponsibleName(),
        text_message: workflowEvent.getTextMessage(),
        time_elapsed: workflowEvent.getTimeElapsed(),
        attribute_name: workflowEvent.getAttributeName(),
        old_value: workflowEvent.getOldValue(),
        new_value: workflowEvent.getNewValue(),
        workflow_state: workflowEvent.getWorkflowState(),
        workflow_state_name: getWorkflowProcess_WorkflowState({
          value: workflowEvent.getWorkflowState()
        }),
        event_type: workflowEvent.getEventType(),
        event_type_name: getWorkflowEvent_EventType({
          value: workflowEvent.getEventType()
        }),
        log_date: new Date(workflowEvent.getLogDate())
      };
    }

    return undefined;
  },

  convertWorkflowActivityFromGRPC (workflowActivity) {
    if (workflowActivity) {
      return {
        uuid: workflowActivity.getUuid(),
        id: workflowActivity.getId(),
        table_name: workflowActivity.getTableName(),
        record_uuid: workflowActivity.getRecordUuid(),
        user_uuid: workflowActivity.getUserUuid(),
        user_name: workflowActivity.getUserName(),
        responsible_uuid: workflowActivity.getResponsibleUuid(),
        responsible_name: workflowActivity.getResponsibleName(),
        text_message: workflowActivity.getTextMessage(),
        priority: workflowActivity.getPriority(),
        processed: workflowActivity.getProcessed(),
        created: new Date(workflowActivity.getCreated()),
        last_alert: new Date(workflowActivity.getLastAlert()),
        workflow_process: convertBusinessData.convertWorkflowProcessFomGRPC(workflowActivity.getWorkflowProcess()),
        workflow: convertBusinessData.convertWorkflowDefinitionFromGRPC(workflowActivity.getWorkflow()),
        node: convertBusinessData.convertWorkflowNodeFromGRPC(workflowActivity.getNode())
      };
    }
    return undefined;
  },

  convertWorkflowDefinitionFromGRPC (workflow) {
    if (workflow) {
      const {
        getWorkflowDefinition_PublishStatus,
        getWorkflowDefinition_DurationUnit
      } = require('./convertEnums.js');

      return {
        id: workflow.getId(),
        uuid: workflow.getUuid(),
        value: workflow.getValue(),
        name: workflow.getName(),
        description: workflow.getDescription(),
        help: workflow.getHelp(),
        table_name: workflow.getTableName(),
        responsible_uuid: workflow.getResponsibleUuid(),
        priority: workflow.getPriority(),
        valid_from: workflow.getValidFrom(),
        is_default: workflow.getIsDefault(),
        is_valid: workflow.getIsValid(),
        publish_status: workflow.getPublishStatus(),
        publish_status_name: getWorkflowDefinition_PublishStatus({
          value: workflow.getPublishStatus()
        }),
        duration_unit: workflow.getDurationUnit(),
        duration_unit_name: getWorkflowDefinition_DurationUnit({
          value: workflow.getDurationUnit()
        }),
        start_node: convertBusinessData.convertWorkflowNodeFromGRPC(workflow.getStartNode()),
        workflow_nodes: workflow.getWorkflowNodesList().map(itemWorkflowNode => {
          return convertBusinessData.convertWorkflowNodeFromGRPC(itemWorkflowNode);
        })
      };
    }
    return undefined;
  },

  convertWorkflowNodeFromGRPC (node) {
    if (node) {
      const { getWorkflowNode_Action } = require('./convertEnums.js');

      return {
        uuid: node.getNodeUuid(),
        value: node.getValue(),
        name: node.getName(),
        description: node.getDescription(),
        help: node.getHelp(),
        responsible_uuid: node.getResponsibleUuid(),
        document_action: {
          value: node.getDocumentActionValue(),
          name: node.getDocumentActionName()
        },
        priority: node.getPriority(),
        action: node.getAction(),
        action_name: getWorkflowNode_Action({
          value: node.getAction()
        }),
        transitions: node.getTransitionsList().map(itemTransition => {
          return convertBusinessData.convertWorkflowTransitionFromGRPC(itemTransition);
        })
      }
    }
    // Workflow Node
    return undefined;
  },

  convertWorkflowTransitionFromGRPC (workflowTransitionToConvert) {
    if (workflowTransitionToConvert) {
      return {
        node_next_uuid: workflowTransitionToConvert.getNodeNextUuid(),
        description: workflowTransitionToConvert.getDescription(),
        is_standard_user_workflow: workflowTransitionToConvert.getIsStdUserWorkflow(),
        sequence: workflowTransitionToConvert.getSequence(),
        workflow_conditions: workflowTransitionToConvert.getWorkflowConditionsList().map(condition => {
          return convertBusinessData.convertWorkflowConditionFromGRPC(condition);
        })
      };
    }
    return undefined;
  },

  convertWorkflowConditionFromGRPC (workflowConditionToConvert) {
    if (workflowConditionToConvert) {
      const {
        getWorkflowCondition_ConditionType,
        getWorkflowCondition_Operation
      } = require('./convertEnums.js');

      return {
        sequence: workflowConditionToConvert.getSequence(),
        colum_name: workflowConditionToConvert.getColumnName(),
        value: workflowConditionToConvert.getValue(),
        condition_type: workflowConditionToConvert.getConditionType(),
        condition_type_name: getWorkflowCondition_ConditionType({
          value: workflowConditionToConvert.getConditiontype()
        }),
        operation: workflowConditionToConvert.getOperation(),
        operation_name: getWorkflowCondition_Operation({
          value: workflowConditionToConvert.getOpetation()
        })
      };
    }
    return undefined;
  },

  convertDocumentAction (documentActionToConvert) {
    if (documentActionToConvert) {
      return {
        value: documentActionToConvert.getValue(),
        name: documentActionToConvert.getName(),
        description: documentActionToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentStatus (documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertRecordAccessFromGRPC (recordAccess) {
    if (recordAccess) {
      return {
        table_name: recordAccess.getTableName(),
        id: recordAccess.getId(),
        uuid: recordAccess.getUuid(),
        available_roles: recordAccess.getAvailableRolesList().map(role => {
          return convertBusinessData.convertRecordAccessRoleFromGRPC(role);
        }),
        current_roles: recordAccess.getCurrentRolesList().map(role => {
          return convertBusinessData.convertRecordAccessRoleFromGRPC(role);
        })
      };
    }
    return undefined;
  },

  convertRecordAccessRoleFromGRPC (recordAccessRole) {
    if (recordAccessRole) {
      return {
        role_id: recordAccessRole.getRoleId(),
        role_uuid: recordAccessRole.getRoleUuid(),
        role_name: recordAccessRole.getRoleName(),
        is_active: recordAccessRole.getIsActive(),
        is_exclude: recordAccessRole.getIsExclude(),
        is_read_only: recordAccessRole.getIsReadOnly(),
        is_dependent_entities: recordAccessRole.getIsDependentEntities()
      };
    }
    return undefined;
  }
};

module.exports = convertBusinessData;
