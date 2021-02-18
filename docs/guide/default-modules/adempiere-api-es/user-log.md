## Módulo Registros de Usuario

### POST /adempiere-api/logs/list-process-logs

Lista de Registros de Procesos
#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia de id.
`user_uuid` - referencia al uuid del usuario.
`instance_uuid` - referencia al uuid de la instancia del proceso.

#### Cuerpo de la peticion:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "page_size": 50
}
```

#### Ejemplo de llamada:

```bash
curl 'https://your-domain.example.com/adempiere-api/logs/list-process-logs?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es&page_size=50' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"user_uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b"}'
```
#### Cuerpo de respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "uuid": "a42a7450-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "634f171b-a22f-4373-b79b-91a781e961f2",
                "is_error": false,
                "summary": "Creado=0, Errores=0 - 0ms",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613664111000,
                "logs_list": [],
                "parameters": {
                    "R_MailText_ID": 1000107
                }
            },
            {
                "uuid": "a42aa90c-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "cfe9859f-5c22-41cd-8cfb-a7d099390a49",
                "is_error": true,
                "summary": "",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613571413000,
                "logs_list": [],
                "parameters": {}
            },
            {
                "uuid": "a42aa90c-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "90407929-0218-4c93-8bca-2a679860a1e4",
                "is_error": true,
                "summary": "",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613571338000,
                "logs_list": [],
                "parameters": {}
            },
            {
                "uuid": "a42ccc46-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "c41975f2-6a7a-43b6-9829-c409ee6be44d",
                "is_error": true,
                "summary": "C_DocTypeTarget_ID is mandatory.",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613077795000,
                "logs_list": [],
                "parameters": {}
            },
            {
                "uuid": "a42ccebc-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "ea98c527-3948-4264-8081-249f24d89cdd",
                "is_error": false,
                "summary": "OK",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613077709000,
                "logs_list": [],
                "parameters": {
                    "Bill_BPartner_ID": 1007410,
                    "C_Order_ID": 1074582,
                    "IsCancelled": false,
                    "IsShipConfirm": true
                }
            },
            {
                "uuid": "a42ad0c6-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "e66fb43e-3cc2-455b-b3aa-496d52fdced5",
                "is_error": false,
                "summary": "Copiado=2",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613077548000,
                "logs_list": [],
                "parameters": {
                    "C_Order_ID": 1073332
                }
            },
            {
                "uuid": "a42ad0c6-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "ec54f729-b00a-4689-8dec-6e197c562b50",
                "is_error": false,
                "summary": "Copiado=1",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613076788000,
                "logs_list": [],
                "parameters": {
                    "C_Order_ID": 1074554
                }
            },
            {
                "uuid": "a42ad0c6-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "8e78ee9d-e378-4702-85e5-a3e1f91c2923",
                "is_error": false,
                "summary": "Copiado=6",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1613076760000,
                "logs_list": [],
                "parameters": {
                    "C_Order_ID": 1074576
                }
            },
            {
                "uuid": "a42b1694-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "ea135ec3-8558-45f0-b5cb-fb066298a689",
                "is_error": false,
                "summary": "(ME): Unknown SMTP host: smtp.gmail.com java.net.UnknownHostException: smtp.gmail.com",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1612289688000,
                "logs_list": [
                    {
                        "id": 0,
                        "log": "MIGO: (ME): Unknown SMTP host: smtp.gmail.com java.net.UnknownHostException: smtp.gmail.com"
                    },
                    {
                        "id": 1,
                        "log": "Found Directory: null"
                    }
                ],
                "parameters": {}
            }
        ]
    }
}
```
#### Código de respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/logs/list-entity-logs

Lista de registros de entidades

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia de id.

#### Cuerpo de la peticion:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "page_size": 50
}
```

#### Ejemplo de llamada:

```bash
curl 'https://your-domain.example.com/adempiere-api/logs/list-entity-logs?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es&page_size=50' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"user_uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b"}'
```
#### Cuerpo de respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 4,
        "next_page_token": "",
        "records": [
            {
                "log_id": 9049432,
                "id": 1156980,
                "uuid": "634f171b-a22f-4373-b79b-91a781e961f2",
                "table_name": "AD_PInstance",
                "session_uuid": "9938867d-b2c5-45bc-8650-c2b484b4887f",
                "user_uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                "user_name": "mGallardo",
                "transaction_name": "POSave_ff7b474a-7f6b-4fa8-b8e2-c74d3d947e2b",
                "event_type": 1,
                "event_type_name": 1,
                "log_date": "2021-02-18T16:01:51.000Z",
                "change_logs": [
                    {
                        "column_name": "ErrorMsg",
                        "display_column_name": "Mensaje de Error",
                        "old_value": "NULL",
                        "new_value": "Creado=0, Errores=0 - 0ms",
                        "old_display_value": "",
                        "new_display_value": "Creado=0, Errores=0 - 0ms",
                        "description": ""
                    },
                    {
                        "column_name": "Result",
                        "display_column_name": "Resultado",
                        "old_value": "NULL",
                        "new_value": "1",
                        "old_display_value": "",
                        "new_display_value": "1",
                        "description": ""
                    },
                    {
                        "column_name": "IsProcessing",
                        "display_column_name": "Proceso",
                        "old_value": "true",
                        "new_value": "false",
                        "old_display_value": "Si",
                        "new_display_value": "No",
                        "description": ""
                    }
                ]
            },
            {
                "log_id": 9049431,
                "id": 1156980,
                "uuid": "634f171b-a22f-4373-b79b-91a781e961f2",
                "table_name": "AD_PInstance",
                "session_uuid": "9938867d-b2c5-45bc-8650-c2b484b4887f",
                "user_uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                "user_name": "mGallardo",
                "transaction_name": "POSave_13aa599e-b181-4739-a2b6-f61fbba06de7",
                "event_type": 0,
                "event_type_name": 0,
                "log_date": "2021-02-18T16:01:51.000Z",
                "change_logs": [
                    {
                        "column_name": "AD_PInstance_ID",
                        "display_column_name": "Instancia de Proceso",
                        "old_value": "NULL",
                        "new_value": "1156980",
                        "old_display_value": "",
                        "new_display_value": "1156980",
                        "description": ""
                    }
                ]
            }
        ]
    }
}
```

#### Código de respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/logs/list-entity-chats

Lista de chats de entidades

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia de id.

#### Cuerpo de la peticion:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de llamada:

```bash
curl 'https://your-domain.example.com/adempiere-api/logs/list-entity-chats?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es&page_size=50' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"id": 1073741,"uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66","table_name": "C_Order"}'
```
#### Cuerpo de respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 1,
        "next_page_token": "",
        "records": [
            {
                "chat_uuid": "e22d49ba-39c3-4edb-bd84-4bb7066429b8",
                "id": 1073741,
                "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66",
                "table_name": "C_Order",
                "chat_type_uuid": "",
                "description": "Orden de Venta: OVN-12",
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderation_type": 0,
                "moderation_type_name": 0,
                "log_date": "2021-02-18T17:51:18.000Z"
            }
        ]
    }
}
```

#### Código de respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/logs/list-chat-entries

Lista de entradas del chat

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia del id.

#### Cuerpo de la peticion:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "page_size": 50
}
```

#### Ejemplo de llamada:

```bash
curl 'https://your-domain.example.com/adempiere-api/logs/list-chat-entries?token=9938867d-b2c5-45bc-8650-c2b484b4887f'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"uuid": "e22d49ba-39c3-4edb-bd84-4bb7066429b8","table_name": "C_Order"}'
```

#### Cuerpo de respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 2,
        "next_page_token": "",
        "records": [
            {
                "chat_uuid": "e22d49ba-39c3-4edb-bd84-4bb7066429b8",
                "uuid": "4ed8f79d-3ba5-407b-be43-6e63125c81ef",
                "id": 1000002,
                "subject": "",
                "character_data": "test",
                "user_uuid": "",
                "user_name": "",
                "chat_entry_type": 0,
                "chat_entry_type_name": 0,
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderator_status": 1,
                "moderator_status_bname": 1,
                "log_date": "2021-02-18T17:51:22.000Z"
            },
            {
                "chat_uuid": "e22d49ba-39c3-4edb-bd84-4bb7066429b8",
                "uuid": "cba365a7-0835-47b9-a82c-36b20f2be09e",
                "id": 1000003,
                "subject": "",
                "character_data": "epale",
                "user_uuid": "",
                "user_name": "",
                "chat_entry_type": 0,
                "chat_entry_type_name": 0,
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderator_status": 1,
                "moderator_status_bname": 1,
                "log_date": "2021-02-18T17:51:40.000Z"
            }
        ]
    }
}
```

#### Código de respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/logs/list-workflow-logs

Lista de registros del flujo de trabajo

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`uuid` - referencia de uuid.
`id` - referencia del id.

#### Cuerpo de la peticion:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "page_size": 50
}
```

#### Ejemplo de llamada:

```bash
curl 'https://your-domain.example.com/adempiere-api/logs/list-workflow-logs?token=9938867d-b2c5-45bc-8650-c2b484b4887f'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"uuid": "e22d49ba-39c3-4edb-bd84-4bb7066429b8","table_name": "C_Order"}'
```

#### Cuerpo de respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 1,
        "next_page_token": "",
        "records": [
            {
                "process_uuid": "2c95e0bd-b2b8-4834-a3c2-bd991928ecf7",
                "workflow_uuid": "a5264208-fb40-11e8-a479-7a0060f0aa01",
                "workflow_name": "Proceso Órdenes",
                "id": 1073741,
                "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66",
                "table_name": "C_Order",
                "user_uuid": "1ad4c9cd-36be-4b1a-bd9f-78af1b887c35",
                "user_name": "ALEJANDRA BERMUDEZ ",
                "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                "responsible_name": "Invoker",
                "text_message": "OVN-12: Gran Total=1182353.36 - alo",
                "processed": true,
                "workflow_state_name": 1,
                "workflow_state": 1,
                "priority": 0,
                "priority_name": 0,
                "workflow_events": [
                    {
                        "node_uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(Start)",
                        "id": 1073741,
                        "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66",
                        "table_name": "C_Order",
                        "user_uuid": "1ad4c9cd-36be-4b1a-bd9f-78af1b887c35",
                        "user_name": "ALEJANDRA BERMUDEZ ",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "",
                        "time_elapsed": 326,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 1,
                        "workflow_state_name": 1,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-02-18T18:06:51.000Z"
                    },
                    {
                        "node_uuid": "a51e58e0-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(DocAuto)",
                        "id": 1073741,
                        "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66",
                        "table_name": "C_Order",
                        "user_uuid": "1ad4c9cd-36be-4b1a-bd9f-78af1b887c35",
                        "user_name": "ALEJANDRA BERMUDEZ ",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "OVN-12: Gran Total=1182353.36 (#1) - alo",
                        "time_elapsed": 1966,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 1,
                        "workflow_state_name": 1,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-02-18T18:06:51.000Z"
                    }
                ],
                "log_date": "2021-02-18T18:06:50.000Z"
            }
        ]
    }
}
```

#### Código de respuesta:

- `200` cuando es exitoso
- `500` en caso de error

