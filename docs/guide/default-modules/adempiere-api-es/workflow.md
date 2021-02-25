## Módulo Flujo de Trabajo

### POST /adempiere-api/workflow/list-workflow-logs

Lista de Flujo de Trabajo
#### Paràmetros POST:

`token` - - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma de inicio de sesión.
`page_size` - tamaño de la página (personalizado).
`page_token` - token de la página (opcional para obtener una página específica).
`table_name` - nombre de la tabla (obligatorio para obtener la traducción).

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/workflow/list-workflow?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name": "C_Order"}'
```
#### Cuerpo de Respuesta:

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
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/workflow/list-document-actions

Lista de acciones del documento
#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia del id.
`document_status` - Estado actual.
`document_action` - Acción opcional.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/workflow/list-document-actions?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name": "C_Order","id": "1073741"}'
    
```
#### Cuerpo de Respuesta:

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
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/workflow/list-document-statuses

Lista de estados del documento
#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia del id.
`document_status` - Estado actual.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/workflow/list-document-statuses?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name": "C_Order","id": "1073741"}'
    
```
#### Cuerpo de Respuesta:

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
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error
