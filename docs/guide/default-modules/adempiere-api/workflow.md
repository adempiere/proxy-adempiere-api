## workflows Service

### GET /api/workflow/workflows

GET Workflows
#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - page size
- `page_token` - token page
- `table_name` - Table name (required if not a query)

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/workflow/document-actions?language=es&id=1000269&uuid=5bc4f838-ae40-4880-b608-c12fd0351c82&table_name=C_Order&token=%3Ctoken-generated-for-demo-api%3E'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 1,
        "next_page_token": "",
        "records": [
            {
                "uuid": "a5264208-fb40-11e8-a479-7a0060f0aa01",
                "value": "Process_Order",
                "name": "Proceso Órdenes",
                "description": "(Proceso de Órdenes Estándar)",
                "help": "",
                "table_name": "C_Order",
                "responsible_uuid": "",
                "priority": 0,
                "valid_from": 0,
                "is_default": false,
                "is_valid": true,
                "publish_status": 0,
                "publish_status_name": 0,
                "duration_unit": 1,
                "duration_unit_name": 1,
                "start_node": {
                    "uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                    "value": "(Start)",
                    "name": "(Start)",
                    "description": "(Standard Node)",
                    "help": "",
                    "responsible_uuid": "",
                    "document_action": {
                        "value": "",
                        "name": ""
                    },
                    "priority": 0,
                    "action": 0,
                    "action_name": 0,
                    "transitions": [
                        {
                            "node_next_uuid": "a51e1844-fb40-11e8-a479-7a0060f0aa01",
                            "description": "(Standard Transition)",
                            "is_standard_user_workflow": false,
                            "sequence": 100,
                            "workflow_conditions": []
                        },
                        {
                            "node_next_uuid": "a51e57f0-fb40-11e8-a479-7a0060f0aa01",
                            "description": "(Standard Approval)",
                            "is_standard_user_workflow": true,
                            "sequence": 10,
                            "workflow_conditions": []
                        }
                    ]
                },
                "workflow_nodes": [
                    {
                        "uuid": "a51def04-fb40-11e8-a479-7a0060f0aa01",
                        "value": "(DocComplete)",
                        "name": "(DocComplete)",
                        "description": "(Standard Node)",
                        "help": "",
                        "responsible_uuid": "",
                        "document_action": {
                            "value": "",
                            "name": ""
                        },
                        "priority": 0,
                        "action": 0,
                        "action_name": 0,
                        "transitions": []
                    },
                    {
                        "uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                        "value": "(Start)",
                        "name": "(Start)",
                        "description": "(Standard Node)",
                        "help": "",
                        "responsible_uuid": "",
                        "document_action": {
                            "value": "",
                            "name": ""
                        },
                        "priority": 0,
                        "action": 0,
                        "action_name": 0,
                        "transitions": [
                            {
                                "node_next_uuid": "a51e1844-fb40-11e8-a479-7a0060f0aa01",
                                "description": "(Standard Transition)",
                                "is_standard_user_workflow": false,
                                "sequence": 100,
                                "workflow_conditions": []
                            },
                            {
                                "node_next_uuid": "a51e57f0-fb40-11e8-a479-7a0060f0aa01",
                                "description": "(Standard Approval)",
                                "is_standard_user_workflow": true,
                                "sequence": 10,
                                "workflow_conditions": []
                            }
                        ]
                    },
                    {
                        "uuid": "a51e58e0-fb40-11e8-a479-7a0060f0aa01",
                        "value": "(DocAuto)",
                        "name": "(DocAuto)",
                        "description": "(Standard Node)",
                        "help": "",
                        "responsible_uuid": "",
                        "document_action": {
                            "value": "",
                            "name": ""
                        },
                        "priority": 0,
                        "action": 0,
                        "action_name": 0,
                        "transitions": []
                    },
                    {
                        "uuid": "a51e594e-fb40-11e8-a479-7a0060f0aa01",
                        "value": "(DocPrepare)",
                        "name": "(DocPrepare)",
                        "description": "(Standard Node)",
                        "help": "",
                        "responsible_uuid": "",
                        "document_action": {
                            "value": "",
                            "name": ""
                        },
                        "priority": 0,
                        "action": 0,
                        "action_name": 0,
                        "transitions": [
                            {
                                "node_next_uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                                "description": "(Standard Transition)",
                                "is_standard_user_workflow": false,
                                "sequence": 100,
                                "workflow_conditions": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error


### GET /api/workflow/document-actions

GET Document Actions
#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `table_name` - Table name (required if not a query)
- `uuid` - uuid of record
- `id` - id of record
- `document_status` - Current Status
- `document_action` - Optional Action

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/workflow/list-document-actions?token=%3Ctoken-generated-for-demo-api%3E&language=es&table_name=C_Order&id=1000269&uuid=5bc4f838-ae40-4880-b608-c12fd0351c82'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 4,
        "next_page_token": "",
        "default_document_action": {
            "value": "PR",
            "name": "Preparar",
            "description": "Chequear consistencia del documento y chequear inventarios"
        },
        "records": [
            {
                "value": "CL",
                "name": "Cerrar",
                "description": "Cierre final de esta transacción. No podrá ser reactivada"
            },
            {
                "value": "CO",
                "name": "Completar",
                "description": "Genera los documentos y completa la transacción"
            },
            {
                "value": "PR",
                "name": "Preparar",
                "description": "Chequear consistencia del documento y chequear inventarios"
            },
            {
                "value": "VO",
                "name": "Anular",
                "description": "Pone a cero las cantidades y completa la transacción"
            }
        ]
    }
}

```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/workflow/document-statuses

GET Document Statuses
#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - size of page (customized)
- `page_token` - token of page (optional for get a specific page)
- `table_name` - table name
- `id` - id of record
- `uuid` - uuid of record
- `document_status` - Current Status

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/workflow/document-statuses?language=es&id=1000269&uuid=5bc4f838-ae40-4880-b608-c12fd0351c82&table_name=C_Order&token=%3Ctoken-generated-for-demo-api%3E'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 5,
        "next_page_token": "",
        "records": [
            {
                "value": "DR",
                "name": "Borrador",
                "description": ""
            },
            {
                "value": "IP",
                "name": "En Proceso",
                "description": ""
            },
            {
                "value": "CL",
                "name": "Cerrado",
                "description": ""
            },
            {
                "value": "CO",
                "name": "Completo",
                "description": ""
            },
            {
                "value": "VO",
                "name": "Anulado",
                "description": ""
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error
