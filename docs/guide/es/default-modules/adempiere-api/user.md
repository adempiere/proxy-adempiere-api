# Servicio Usuario
<style>
    img[alt*="borderline"] {
        border: 1px #000 solid;
    }
</style>

En este capítulo, cubriremos :

[[toc]]

### POST /api/user/login

Autoriza al usuario. Se llama así después de que el usuario envía "Login" desde la aplicación de la tienda. Devuelve al usuario un token que debe ser utilizado para todas las llamadas subsiguientes a la API que requieran autorización.

#### Parámetros:

```json
null
```

#### Cuerpo de la Petición:
- `language` - Idioma para las traducciones de la respuesta.
- `username` - Usuario.
- `password` - Contraseña.
- `role_uuid`- Uuid del Rol
- `organization_uuid`- Uuid de la Organizacion

```json
{
    "username": "demo",
    "password": "demo"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user/login?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "demo",
    "password": "demo",
    "role_uuid": "",
    "organization_uuid": ""
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": "%3Ctoken-generated-for-demo-api%3E"
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/user/logout

Cierra la sesión y revoca el acceso al token.

#### Parámetros:

```json
null
```

#### Cuerpo de la Petición:
- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.

```json
{
    "token": "%3Ctoken-generated-for-demo-api%3E
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/user/logout' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"token":"%3Ctoken-generated-for-demo-api%3E}'
```

#### Cuerpo de Repuesta:

```json
{
	"code": 200,
	"result": "Ok"
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/user/change-role

Cambia el rol actual y devuelve la información de la nueva sesión.

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.


#### Cuerpo de la Petición:

```json
{
	"organization": "a3e5c878-fb40-11e8-a479-7a0060f0aa01",
	"role": "a48d2596-fb40-11e8-a479-7a0060f0aa01"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/user/change-role?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"role":"a48d2596-fb40-11e8-a479-7a0060f0aa01","organization":"d97027fd-4cd5-445e-8fd8-ef5d3f7959b4"}'
```

#### Cuerpo de Repuesta:

```json
{
	"code": 200,
	"result": {
		"id": 1017302,
		"uuid": "%3Ctoken-generated-for-demo-api%3E",
		"name": "Last Connection: Oct 26, 2020 3:49:09 PM AST",
		"user_info": {
            "id": 1000407,
            "uuid": "901d9a74-6334-4309-aa8a-6d5b39d8ceb1",
            "name": "Store Administrator",
            "description": "",
            "comments": "",
            "image": "4c374d54-0e21-4a2f-9e18-9b03b22b5d6c-chavo_crop1595979643620.jpg_1902800913.jpg"
        },
		"role": {
			"id": 0,
			"uuid": "a48d2596-fb40-11e8-a479-7a0060f0aa01",
			"name": "System Administrator",
			"description": "System Administrator Role (cannot be changed)",
			"client_id": 0,
			"client_name": "System",
			"is_can_report": true,
			"is_can_export": true,
			"is_personal_lock": false,
			"is_personal_access": false
		},
		"processed": false,
		"language": "en_US",
		"country_id": 100,
		"country_code": "US",
		"country_name": "United States",
		"display_sequence": "@C@, @R@ @P@",
		"currency_iso_code": "USD",
		"currency_name": "US Dollar",
		"currency_symbol": "$",
		"standard_precision": 2,
		"costing_precision": 4,
		"default_context": [
            {
                "key": "#AD_Client_ID",
                "value": 1000000
            },
            {
                "key": "#Date",
                "value": "2020-10-26T16:02:26.000Z"
            },
            {
                "key": "$HasAlias",
                "value": true
            }
		]
	}
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/user/menu

Obtiene el arbol de rutas para el menu segun el acceso del rol.

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/user/menu?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

```json
{
	"code": 200,
	"result": {
		"id": 0,
		"uuid": "",
		"parent_uuid": "",
		"name": "&Menu",
		"description": "",
		"sequence": "",
		"is_read_only": false,
		"is_summary": false,
		"is_sales_transaction": false,
		"action": "",
		"reference_uuid": "",
		"childs": [
			{
				"id": 54624,
				"uuid": "af6907d3-d6f9-4108-ac3a-36ba80704051",
				"parent_uuid": "",
				"name": "Exchange Operations",
				"description": "Exhange Operation Process",
				"sequence": "",
				"is_read_only": false,
				"is_summary": true,
				"is_sales_transaction": false,
				"action": "",
				"reference_uuid": "",
				"childs": [
					{
						"id": 54643,
						"uuid": "5bac55c5-cb34-487f-b470-f8077db4bc7a",
						"parent_uuid": "af6907d3-d6f9-4108-ac3a-36ba80704051",
						"name": "Get Currency Rates from Provider",
						"description": "Get Currency Rates from a Provider selected",
						"sequence": "",
						"is_read_only": false,
						"is_summary": false,
						"is_sales_transaction": false,
						"action": "P",
						"reference_uuid": "3f8e7490-2922-4395-a587-a8dcca455fdf",
						"childs": [],
						"is_active": true
					},
					{
						"id": 54628,
						"uuid": "ab3abf2a-31f5-47f7-a03c-a4befc8cd286",
						"parent_uuid": "af6907d3-d6f9-4108-ac3a-36ba80704051",
						"name": "Exchange Operation",
						"description": "Exchange Operation",
						"sequence": "",
						"is_read_only": false,
						"is_summary": false,
						"is_sales_transaction": true,
						"action": "W",
						"reference_uuid": "0dce5f0d-af50-4001-91bc-0950dc42b470",
						"childs": [],
						"is_active": true
					}
				],
				"is_active": true
			}
		],
		"is_active": true
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error


### GET /api/user/session

Obtiene la información de la sesión actual. Se llama después de una llamada exitosa de `POST /api/user/login`.

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.


#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/user/session?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "id": 1017271,
        "uuid": "%3Ctoken-generated-for-demo-api%3E",
        "name": "Last Connection: Oct 26, 2020 11:38:53 AM AST",
        "user_info": {
            "id": 1000407,
            "uuid": "901d9a74-6334-4309-aa8a-6d5b39d8ceb1",
            "name": "Store Administrator",
            "description": "",
            "comments": "",
            "image": "4c374d54-0e21-4a2f-9e18-9b03b22b5d6c-chavo_crop1595979643620.jpg_1902800913.jpg"
        },
        "role": {
            "id": 1000000,
            "uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19",
            "name": "Compañía Estándar Admin",
            "description": "",
            "client_id": 1000000,
            "client_name": "Compañía Estándar",
            "is_can_report": true,
            "is_can_export": true,
            "is_personal_lock": true,
            "is_personal_access": false
        },
        "processed": false,
        "language": "en_US",
        "country_id": 100,
        "country_code": "US",
        "country_name": "United States",
        "display_sequence": "@C@, @R@ @P@",
        "currency_iso_code": "USD",
        "currency_name": "US Dollar",
        "currency_symbol": "$",
        "standard_precision": 2,
        "costing_precision": 4,
        "default_context": [
            {
                "key": "#AD_Client_ID",
                "value": 1000000
            },
            {
                "key": "#Date",
                "value": "2020-10-26T16:02:26.000Z"
            },
            {
                "key": "$HasAlias",
                "value": true
            }
        ]
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/user/info

Obtiene el perfil de usuario para el usuario actualmente autorizado. Se llama después de una llamada exitosa de `POST /api/user/login`.

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/user/info?token=%3Ctoken-generated-for-demo-api%3E' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

```json
{
    "code":200,
    "result":
        {
            "id": 1000407,
            "uuid": "901d9a74-6334-4309-aa8a-6d5b39d8ceb1",
            "name": "Store Administrator",
            "description": "",
            "comments": "",
            "image": "4c374d54-0e21-4a2f-9e18-9b03b22b5d6c-chavo_crop1595979643620.jpg_1902800913.jpg"
        }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error




### GET /api/user/roles

Obtiene la lista de roles a las que el usuario tiene acceso.

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/user/roles?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

```json
{
	"code": 200,
	"result": [
		{
			"id": 1000000,
			"uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19",
			"name": "Compañía Estándar Admin",
			"description": "",
			"client_id": 1000000,
			"client_name": "Compañía Estándar",
			"is_can_report": true,
			"is_can_export": true,
			"is_personal_lock": true,
			"is_personal_access": false
		}
	]
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error


## Registro

### GET /api/user/log/process-logs

Obtiene Lista de registros de procesos

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
-`page_size` - tamaño de la página (personalizado)
-`page_token` - token de la página (opcional para obtener una página específica)
-`table_name` - nombre de la tabla (obligatorio para obtener la traducción)
-`uuid` - consulta personalizada en lugar de un nombre de tabla basado en SQL
-`id` - referencia de id
-`uuid` - referencia al uuid
-`user_uuid` - referencia al uuid del usuario
-`instance_uuid` - referencia al uuid de la instancia del proceso



#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user/log/process-logs?token=%3Ctoken-generated-for-demo-api%3E&language=es&user_uuid=43adbe9d-04a7-4cf6-9582-895c1e40da0b'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "uuid": "a42acf86-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "6bcc154f-f513-4e00-9039-730889295182",
                "is_error": false,
                "summary": "Cache Reset",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1614105711000,
                "logs_list": [],
                "parameters": {}
            },
            {
                "uuid": "a42d5594-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "a8ad6eb7-97c3-44c6-b0ea-75e34aafa94e",
                "is_error": false,
                "summary": "",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1614105664000,
                "logs_list": [
                    {
                        "id": 0,
                        "log": "Compañía Estándar Admin: Ventana #511 -  Proceso #651 -  Forma Especial #47 -  Smart Browse #95 -  Flujo de Trabajo #75 -  Acción en el Documento #3584 -  Contenido Tablero Control #8"
                    }
                ],
                "parameters": {
                    "AD_Client_ID": 1000000,
                    "AD_Role_ID": 1000000
                }
            },
            {
                "uuid": "a42ab0fa-fb40-11e8-a479-7a0060f0aa01",
                "instance_uuid": "f56ebeab-e512-49ba-ad62-7eeba9aa702b",
                "is_error": true,
                "summary": "",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1614105455000,
                "logs_list": [],
                "parameters": {}
            },
            {
                "uuid": "e1921bf6-2fb9-11e9-ba31-0242ac140002",
                "instance_uuid": "0c7fb602-68e6-4fbc-9a60-a42b64ab1fb3",
                "is_error": false,
                "summary": "Proceso Adicionado 1",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1602607733000,
                "logs_list": [],
                "parameters": {
                    "IsDependentEntities": true,
                    "IsReadWrite": true
                }
            },
            {
                "uuid": "e1921bf6-2fb9-11e9-ba31-0242ac140002",
                "instance_uuid": "bc83a7d5-95ef-4d7d-a0fb-60ef8c95dc09",
                "is_error": false,
                "summary": "Proceso Adicionado 1",
                "result_table_name": "",
                "is_processing": false,
                "last_run": 1602607703000,
                "logs_list": [],
                "parameters": {
                    "IsDependentEntities": true,
                    "IsReadWrite": true
                }
            }
        ]
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/user/log/entity-logs

Obtiene Registros de entidades

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
-`page_size` - tamaño de la página (personalizado)
-`page_token` - token de la página (opcional para obtener una página específica)
-`table_name` - nombre de la tabla (obligatorio para obtener la traducción)
-`uuid` - consulta personalizada en lugar de un nombre de tabla basado en SQL
-`id` - referencia de id
-`uuid` - referencia al uuid

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user/log/entity-logs?token=%3Ctoken-generated-for-demo-api%3E&language=es&user_uuid=43adbe9d-04a7-4cf6-9582-895c1e40da0b'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 288,
        "next_page_token": "<token-generated-for-demo-api>-1",
        "records": [
            {
                "log_id": 1159120,
                "id": 1135480,
                "uuid": "d5dae172-c792-401d-8e64-a58355ef4bac",
                "table_name": "AD_Issue",
                "session_uuid": "<token-generated-for-demo-api>",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "transaction_name": "POSave_faf3994f-29d2-4649-8717-0a0465ddce84",
                "event_type": 0,
                "event_type_name": 0,
                "log_date": "2021-05-14T17:54:46.000Z",
                "change_logs": [
                    {
                        "column_name": "AD_Issue_ID",
                        "display_column_name": "Problema Sistema",
                        "old_value": "NULL",
                        "new_value": "1135480",
                        "old_display_value": "",
                        "new_display_value": "1135480",
                        "description": ""
                    }
                ]
            },
            {
                "log_id": 1158738,
                "id": 1008369,
                "uuid": "",
                "table_name": "AD_RecentItem",
                "session_uuid": "<token-generated-for-demo-api>",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "transaction_name": "POSave_6b82a9cf-79ff-4286-85a7-637c0b20b9b1",
                "event_type": 0,
                "event_type_name": 0,
                "log_date": "2021-05-13T20:59:06.000Z",
                "change_logs": [
                    {
                        "column_name": "AD_RecentItem_ID",
                        "display_column_name": "Recent Item",
                        "old_value": "NULL",
                        "new_value": "1008369",
                        "old_display_value": "",
                        "new_display_value": "1008369",
                        "description": ""
                    }
                ]
            },
            {
                "log_id": 1159125,
                "id": 1135484,
                "uuid": "776e97b5-1c99-434e-869b-9b954d94c121",
                "table_name": "AD_Issue",
                "session_uuid": "<token-generated-for-demo-api>",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "transaction_name": "POSave_0441f55f-1bde-4198-a0a4-e67f75d927d6",
                "event_type": 0,
                "event_type_name": 0,
                "log_date": "2021-05-14T18:06:48.000Z",
                "change_logs": [
                    {
                        "column_name": "AD_Issue_ID",
                        "display_column_name": "Problema Sistema",
                        "old_value": "NULL",
                        "new_value": "1135484",
                        "old_display_value": "",
                        "new_display_value": "1135484",
                        "description": ""
                    }
                ]
            },
            {
                "log_id": 1159201,
                "id": 1135513,
                "uuid": "b2a15fff-44a6-42fb-91dc-bea5d4217a1d",
                "table_name": "AD_Issue",
                "session_uuid": "<token-generated-for-demo-api>",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "transaction_name": "POSave_82754947-f1d9-475a-b1c8-3e3300d884c6",
                "event_type": 0,
                "event_type_name": 0,
                "log_date": "2021-05-14T19:42:44.000Z",
                "change_logs": [
                    {
                        "column_name": "AD_Issue_ID",
                        "display_column_name": "Problema Sistema",
                        "old_value": "NULL",
                        "new_value": "1135513",
                        "old_display_value": "",
                        "new_display_value": "1135513",
                        "description": ""
                    }
                ]
            }
        ]
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/user/log/entity-chats

Obtener lista de chats de entidades

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
-`page_size` - tamaño de la página (personalizado)
-`page_token` - token de la página (opcional para obtener una página específica)
-`table_name` - nombre de la tabla (obligatorio para obtener la traducción)
-`uuid` - consulta personalizada en lugar de un nombre de tabla basado en SQL
-`id` - referencia de id

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user/log/entity-chats?token=%3Ctoken-generated-for-demo-api%3E&language=es&id=103&uuid=db4f0106-eace-44bd-b761-f03f6efd4852&table_name=Test'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 2,
        "next_page_token": "",
        "records": [
            {
                "chat_uuid": "75d9fd54-9517-4224-accf-840e625e7ee1",
                "id": 103,
                "uuid": "db4f0106-eace-44bd-b761-f03f6efd4852",
                "table_name": "Test",
                "chat_type_uuid": "",
                "description": "ID de la Prueba: Test Record",
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderation_type": 0,
                "moderation_type_name": 0,
                "log_date": "2021-03-15T00:16:03.000Z"
            },
            {
                "chat_uuid": "76d1e4fa-6735-48e0-9021-d4736575ea16",
                "id": 103,
                "uuid": "db4f0106-eace-44bd-b761-f03f6efd4852",
                "table_name": "Test",
                "chat_type_uuid": "",
                "description": "<103>",
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderation_type": 0,
                "moderation_type_name": 0,
                "log_date": "2021-05-17T00:07:36.000Z"
            }
        ]
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/user/log/chat-entries

Obtener chats de entidades

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
-`page_size` - tamaño de la página (personalizado)
-`page_token` - token de la página (opcional para obtener una página específica)
-`uuid` - consulta personalizada en lugar de un nombre de tabla basado en SQL
-`id` - referencia de id

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user/log/chat-entries?token=%3Ctoken-generated-for-demo-api%3E&language=es&id=1000002&uuid=75d9fd54-9517-4224-accf-840e625e7ee1'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 2,
        "next_page_token": "",
        "records": [
            {
                "chat_uuid": "5521a156-0405-478c-9496-1333d2983903",
                "uuid": "8882ae7e-f3fc-4344-a257-df0fb63dadff",
                "id": 1000002,
                "subject": "",
                "character_data": "drdsdsdf",
                "user_uuid": "",
                "user_name": "",
                "chat_entry_type": 0,
                "chat_entry_type_name": 0,
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderator_status": 1,
                "moderator_status_bname": 1,
                "log_date": "2021-03-23T17:51:11.000Z"
            },
            {
                "chat_uuid": "5521a156-0405-478c-9496-1333d2983903",
                "uuid": "251bdf15-4152-4d2a-ab7d-1ddd3212658a",
                "id": 1000006,
                "subject": "",
                "character_data": "Hola\n- Epale\n- Epale1\n- Hola 2\n\n**Hola**",
                "user_uuid": "",
                "user_name": "",
                "chat_entry_type": 0,
                "chat_entry_type_name": 0,
                "confidential_type": 0,
                "confidential_type_name": 0,
                "moderator_status": 1,
                "moderator_status_bname": 1,
                "log_date": "2021-03-24T15:09:20.000Z"
            }
        ]
    }
}  }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/user/log/workflow-logs

Lista de registros del flujo de trabajo

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
-`page_size` - tamaño de la página (personalizado)
-`page_token` - token de la página (opcional para obtener una página específica)
-`table_name` - nombre de la tabla (obligatorio para obtener la traducción)
-`uuid` - consulta personalizada en lugar de un nombre de tabla basado en SQL
-`id` - referencia de id

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user/log/workflow-logs?token=%3Ctoken-generated-for-demo-api%3E&language=es&uuid=e22d49ba-39c3-4edb-bd84-4bb7066429b8&table_name=C_Order'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 4,
        "next_page_token": "",
        "records": [
            {
                "process_uuid": "347e0368-2e6b-4ab9-89ce-7b46df95b17d",
                "workflow_uuid": "a5264208-fb40-11e8-a479-7a0060f0aa01",
                "workflow_name": "Proceso Órdenes",
                "id": 0,
                "uuid": "",
                "table_name": "C_Order",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                "responsible_name": "Invoker",
                "text_message": "No PO with ID=0\n -  (0): org.compiere.wf.MWFProcess.setWorkflowProcessTransaction(MWFProcess.java:603)\n (1): org.compiere.wf.MWorkflow.start(MWorkflow.java:728)\n (2): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (3): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (4): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (5): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (8): org.compiere.util.Trx.run(Trx.java:529)\n (9): org.compiere.util.Trx.run(Trx.java:497)\n\n - Periodo Cerrado",
                "processed": true,
                "workflow_state_name": 3,
                "workflow_state": 3,
                "priority": 0,
                "priority_name": 0,
                "workflow_events": [
                    {
                        "node_uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(Start)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                        "user_name": "demo",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "",
                        "time_elapsed": 466,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 1,
                        "workflow_state_name": 1,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-28T16:16:50.000Z"
                    },
                    {
                        "node_uuid": "a51e58e0-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(DocAuto)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                        "user_name": "demo",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "null: Gran Total=0\n - C_BPartner_ID is mandatory.\n - org.adempiere.exceptions.AdempiereException: C_BPartner_ID is mandatory. (0): org.compiere.model.PO.saveEx(PO.java:2317)\n (1): org.compiere.wf.MWFActivity.performWork(MWFActivity.java:885)\n (2): org.compiere.wf.MWFActivity.run(MWFActivity.java:781)\n (3): org.compiere.wf.MWFProcess.startNext(MWFProcess.java:341)\n (4): org.compiere.wf.MWFProcess.checkActivities(MWFProcess.java:256)\n (5): org.compiere.wf.MWFActivity.setWFState(MWFActivity.java:284)\n (6): org.compiere.wf.MWFActivity.run(MWFActivity.java:784)\n (7): org.compiere.wf.MWFProcess.startWork(MWFProcess.java:471)\n (8): org.compiere.wf.MWorkflow.start(MWorkflow.java:731)\n (9): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (10): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (11): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (12): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (15): org.compiere.util.Trx.run(Trx.java:529)\n (16): org.compiere.util.Trx.run(Trx.java:497)\n",
                        "time_elapsed": 907,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 3,
                        "workflow_state_name": 3,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-28T16:16:50.000Z"
                    }
                ],
                "log_date": "2021-04-28T16:16:50.000Z"
            },
            {
                "process_uuid": "acb2559b-d6f6-43f8-a0d9-46982e5c5fd8",
                "workflow_uuid": "a5264208-fb40-11e8-a479-7a0060f0aa01",
                "workflow_name": "Proceso Órdenes",
                "id": 0,
                "uuid": "",
                "table_name": "C_Order",
                "user_uuid": "5adc9357-9158-40fe-86f1-4ce383586f5b",
                "user_name": "rMunoz",
                "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                "responsible_name": "Invoker",
                "text_message": "No PO with ID=0\n -  (0): org.compiere.wf.MWFProcess.setWorkflowProcessTransaction(MWFProcess.java:603)\n (1): org.compiere.wf.MWorkflow.start(MWorkflow.java:728)\n (2): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (3): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (4): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (5): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (8): org.compiere.util.Trx.run(Trx.java:529)\n (9): org.compiere.util.Trx.run(Trx.java:497)\n\n - Periodo Cerrado",
                "processed": true,
                "workflow_state_name": 3,
                "workflow_state": 3,
                "priority": 0,
                "priority_name": 0,
                "workflow_events": [
                    {
                        "node_uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(Start)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "5adc9357-9158-40fe-86f1-4ce383586f5b",
                        "user_name": "rMunoz",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "",
                        "time_elapsed": 235,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 1,
                        "workflow_state_name": 1,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-30T16:03:33.000Z"
                    },
                    {
                        "node_uuid": "a51e58e0-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(DocAuto)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "5adc9357-9158-40fe-86f1-4ce383586f5b",
                        "user_name": "rMunoz",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "null: Gran Total=0\n - Llenar campos obligatorios:  Almacén\n - org.adempiere.exceptions.AdempiereException: Llenar campos obligatorios:  Almacén (0): org.compiere.model.PO.saveEx(PO.java:2317)\n (1): org.compiere.wf.MWFActivity.performWork(MWFActivity.java:885)\n (2): org.compiere.wf.MWFActivity.run(MWFActivity.java:781)\n (3): org.compiere.wf.MWFProcess.startNext(MWFProcess.java:341)\n (4): org.compiere.wf.MWFProcess.checkActivities(MWFProcess.java:256)\n (5): org.compiere.wf.MWFActivity.setWFState(MWFActivity.java:284)\n (6): org.compiere.wf.MWFActivity.run(MWFActivity.java:784)\n (7): org.compiere.wf.MWFProcess.startWork(MWFProcess.java:471)\n (8): org.compiere.wf.MWorkflow.start(MWorkflow.java:731)\n (9): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (10): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (11): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (12): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (15): org.compiere.util.Trx.run(Trx.java:529)\n (16): org.compiere.util.Trx.run(Trx.java:497)\n",
                        "time_elapsed": 526,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 3,
                        "workflow_state_name": 3,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-30T16:03:33.000Z"
                    }
                ],
                "log_date": "2021-04-30T16:03:32.000Z"
            },
            {
                "process_uuid": "5410ae6a-4fdb-42be-8590-9c4725222b5c",
                "workflow_uuid": "a5264208-fb40-11e8-a479-7a0060f0aa01",
                "workflow_name": "Proceso Órdenes",
                "id": 0,
                "uuid": "",
                "table_name": "C_Order",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                "responsible_name": "Invoker",
                "text_message": "No PO with ID=0\n -  (0): org.compiere.wf.MWFProcess.setWorkflowProcessTransaction(MWFProcess.java:603)\n (1): org.compiere.wf.MWorkflow.start(MWorkflow.java:728)\n (2): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (3): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (4): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (5): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (8): org.compiere.util.Trx.run(Trx.java:529)\n (9): org.compiere.util.Trx.run(Trx.java:497)\n\n - Periodo Cerrado",
                "processed": true,
                "workflow_state_name": 3,
                "workflow_state": 3,
                "priority": 0,
                "priority_name": 0,
                "workflow_events": [
                    {
                        "node_uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(Start)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                        "user_name": "demo",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "",
                        "time_elapsed": 641,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 1,
                        "workflow_state_name": 1,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-28T16:26:18.000Z"
                    },
                    {
                        "node_uuid": "a51e58e0-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(DocAuto)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                        "user_name": "demo",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "null: Gran Total=0\n - C_BPartner_ID is mandatory.\n - org.adempiere.exceptions.AdempiereException: C_BPartner_ID is mandatory. (0): org.compiere.model.PO.saveEx(PO.java:2317)\n (1): org.compiere.wf.MWFActivity.performWork(MWFActivity.java:885)\n (2): org.compiere.wf.MWFActivity.run(MWFActivity.java:781)\n (3): org.compiere.wf.MWFProcess.startNext(MWFProcess.java:341)\n (4): org.compiere.wf.MWFProcess.checkActivities(MWFProcess.java:256)\n (5): org.compiere.wf.MWFActivity.setWFState(MWFActivity.java:284)\n (6): org.compiere.wf.MWFActivity.run(MWFActivity.java:784)\n (7): org.compiere.wf.MWFProcess.startWork(MWFProcess.java:471)\n (8): org.compiere.wf.MWorkflow.start(MWorkflow.java:731)\n (9): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (10): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (11): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (12): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (15): org.compiere.util.Trx.run(Trx.java:529)\n (16): org.compiere.util.Trx.run(Trx.java:497)\n",
                        "time_elapsed": 935,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 3,
                        "workflow_state_name": 3,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-28T16:26:18.000Z"
                    }
                ],
                "log_date": "2021-04-28T16:26:18.000Z"
            },
            {
                "process_uuid": "eee837dd-a2cf-49b1-8481-74ae6cfa4f8f",
                "workflow_uuid": "a5264208-fb40-11e8-a479-7a0060f0aa01",
                "workflow_name": "Proceso Órdenes",
                "id": 0,
                "uuid": "",
                "table_name": "C_Order",
                "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                "user_name": "demo",
                "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                "responsible_name": "Invoker",
                "text_message": "No PO with ID=0\n -  (0): org.compiere.wf.MWFProcess.setWorkflowProcessTransaction(MWFProcess.java:603)\n (1): org.compiere.wf.MWorkflow.start(MWorkflow.java:728)\n (2): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (3): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (4): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (5): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (8): org.compiere.util.Trx.run(Trx.java:529)\n (9): org.compiere.util.Trx.run(Trx.java:497)\n\n - Periodo Cerrado",
                "processed": true,
                "workflow_state_name": 3,
                "workflow_state": 3,
                "priority": 0,
                "priority_name": 0,
                "workflow_events": [
                    {
                        "node_uuid": "a51e5868-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(Start)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                        "user_name": "demo",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "",
                        "time_elapsed": 259,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 1,
                        "workflow_state_name": 1,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-01T20:41:57.000Z"
                    },
                    {
                        "node_uuid": "a51e58e0-fb40-11e8-a479-7a0060f0aa01",
                        "node_name": "(DocAuto)",
                        "id": 0,
                        "uuid": "",
                        "table_name": "C_Order",
                        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
                        "user_name": "demo",
                        "responsible_uuid": "a5207594-fb40-11e8-a479-7a0060f0aa01",
                        "responsible_name": "Invoker",
                        "text_message": "null: Gran Total=0\n - C_BPartner_ID is mandatory.\n - org.adempiere.exceptions.AdempiereException: C_BPartner_ID is mandatory. (0): org.compiere.model.PO.saveEx(PO.java:2317)\n (1): org.compiere.wf.MWFActivity.performWork(MWFActivity.java:885)\n (2): org.compiere.wf.MWFActivity.run(MWFActivity.java:781)\n (3): org.compiere.wf.MWFProcess.startNext(MWFProcess.java:341)\n (4): org.compiere.wf.MWFProcess.checkActivities(MWFProcess.java:256)\n (5): org.compiere.wf.MWFActivity.setWFState(MWFActivity.java:284)\n (6): org.compiere.wf.MWFActivity.run(MWFActivity.java:784)\n (7): org.compiere.wf.MWFProcess.startWork(MWFProcess.java:471)\n (8): org.compiere.wf.MWorkflow.start(MWorkflow.java:731)\n (9): org.compiere.wf.MWorkflow.startWait(MWorkflow.java:787)\n (10): org.adempiere.util.ProcessUtil.startWorkFlow(ProcessUtil.java:304)\n (11): org.compiere.process.ServerProcessCtl.startWorkflow(ServerProcessCtl.java:282)\n (12): org.compiere.process.ServerProcessCtl.run(ServerProcessCtl.java:181)\n (15): org.compiere.util.Trx.run(Trx.java:529)\n (16): org.compiere.util.Trx.run(Trx.java:497)\n",
                        "time_elapsed": 594,
                        "attribute_name": "",
                        "old_value": "",
                        "new_value": "",
                        "workflow_state": 3,
                        "workflow_state_name": 3,
                        "event_type": 0,
                        "event_type_name": 0,
                        "log_date": "2021-04-01T20:41:57.000Z"
                    }
                ],
                "log_date": "2021-04-01T20:41:56.000Z"
            }
        ]
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

## Inscripción

### POST /api/user/enrollment/enroll

Inscribir un usuario

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

`user_name` - codigo del usuario.
`name` - nombre del usuario.
`email` - correo del usuario.
`client_version` - version de aplicaciòn del cliente.
`application_type` - tipo de aplicacion.
`password` - contraseña del usuario.

```json
{
    "user_name": "Test1",
    "name": "Test1",
    "email": "ExampleService@Test.com"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user/enrollment/enroll?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_name": "Test1",
    "name": "Test1",
    "email": "ExampleService@Test.com"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "user_name": "Test1",
        "name": "Test1",
        "email": "ExampleService@Test.com"
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/user/enrollment/reset-password

Solicitar el restablecimiento de la contraseña

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

`user_name` - codigo del usuario.
`email` - correo del usuario.
`client_version` - version de aplicaciòn del cliente.

```json
{
    "user_name": "Test1",
    "email": "ExampleService@Test.com"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user/enrollment/reset-password?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user_name": "Test1",
    "email": "ExampleService@Test.com"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/user/enrollment/change-password

Solicitar el restablecimiento de la contraseña

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

`password` - correo del usuario.
`client_version` - version de aplicaciòn del cliente.

```json
{
    "password": "ExampleService@Test.com"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user/enrollment/change-password?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
	"password":"TopSecretPassword"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error
### POST /api/user/enrollment/activate-user
Activar usuario

#### Paràmetros:

`token` - token del usuario.
`client_version` - version de aplicaciòn del cliente.

#### Cuerpo de la Peticiòn:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com//api/user/enrollment/activate-user' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"token":"akhjgdsfsdq476328463249234032anbfkd""}'
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error