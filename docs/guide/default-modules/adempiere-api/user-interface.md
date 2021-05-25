# User Interface Service
<style>
    img[alt*="borderline"] {
        border: 1px #000 solid;
    }
</style>

In this chapter, we will cover:

[[toc]]

## Common

### GET /api/user-interface/common/attachment

Get information about the entity's annex

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `table_name` - table name (required if not a query).
- `id` - reference id.
- `uuid` - reference uuid.

#### Body of the Petitión:

```json
null
```
#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/common/attachment?token=%3Ctoken-generated-for-demo-api%3E&language=es&table_name=Test&id=103&uuid=db4f0106-eace-44bd-b761-f03f6efd4852'
    
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "attachment_uuid": "4514fbe0-2433-479c-83d5-8d7e58571bf6",
        "title": "zip",
        "text_msg": "Prueba 1",
        "resource_references_list": []
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/common/resource-reference

Get reference information on the resources

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `image_id` - id of the image

#### Body of the Petitión:

```json
null
```
#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/common/resource-reference?token=%3Ctoken-generated-for-demo-api%3E&language=es&image_id=5472'

```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "resourceUuid": "771d2187-6103-430a-acfc-aee208f22a0c",
        "fileName": "test.jpeg",
        "fileSize": 1.3,
        "description": "any imgage test",
        "textMsg": "",
        "contentType": "image/jpeg"
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### POST /api/user-interface/common/rollback-entity

Get resource reference information

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.

#### Body of the Petitión:

- `table_name` - table name (required if it is not a query).
- `id` - reference id.
- `uuid` - reference uuid.ç
- `log_id` - log id

```json
{
    "id": 386,
    "uuid": "a5209254-fb40-11e8-a479-7a0060f0aa01",
    "table_name": "AD_Window"
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/common/rollback-entity?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 386,
    "uuid": "a5209254-fb40-11e8-a479-7a0060f0aa01",
    "table_name": "AD_Window"
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 386,
        "uuid": "a5209254-fb40-11e8-a479-7a0060f0aa01",
        "table_name": "AD_Window",
        "attributes": [
            {
                "key": "AD_Client_ID",
                "value": 0
            },
            {
                "key": "AD_Org_ID",
                "value": 0
            },
            {
                "key": "AD_Window_ID",
                "value": 386
            },
            {
                "key": "Created",
                "value": "2006-06-24T16:23:11.000Z"
            },
            {
                "key": "CreatedBy",
                "value": 100
            },
            {
                "key": "Description",
                "value": "Maintain Text Search Index"
            },
            {
                "key": "EntityType",
                "value": "D"
            },
            {
                "key": "Help",
                "value": "Text search index keyword and excerpt across documents"
            },
            {
                "key": "IsActive",
                "value": true
            },
            {
                "key": "IsBetaFunctionality",
                "value": false
            },
            {
                "key": "IsDefault",
                "value": false
            },
            {
                "key": "IsSOTrx",
                "value": true
            },
            {
                "key": "Name",
                "value": "Text Index"
            },
            {
                "key": "Processing"
            },
            {
                "key": "UUID",
                "value": "a5209254-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "key": "Updated",
                "value": "2021-05-16T23:55:21.296Z"
            },
            {
                "key": "UpdatedBy",
                "value": 1000032
            },
            {
                "key": "WinHeight",
                "value": 0
            },
            {
                "key": "WinWidth",
                "value": 0
            },
            {
                "key": "WindowType",
                "value": "M"
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

## Component
<style>
    img[alt*="borderline"] {
        border: 1px #000 solid;
    }
</style>

In this chapter, we will cover:

- <a href="http://localhost:8080/proxy-adempiere-api/guide/default-modules/adempiere-api/user-interface.html#notes"> Notes </a>
- <a href="http://localhost:8080/proxy-adempiere-api/guide/default-modules/adempiere-api/user-interface.html#preferences"> Preferences </a>
- <a href="hhttp://localhost:8080/proxy-adempiere-api/guide/default-modules/adempiere-api/user-interface.html#private-access"> Private Access </a>
- <a href="http://localhost:8080/proxy-adempiere-api/guide/default-modules/adempiere-api/user-interface.html#record-access"> Record Access </a>
- <a href="http://localhost:8080/proxy-adempiere-api/guide/default-modules/adempiere-api/user-interface.html#translations"> Translations </a>

### Notes <hr>

### POST /api/user-interface/component/notes/create-chat-entry

Create a chat entry

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
#### Body of the Petitión:

- `uuid` - uuid of the registry.
- `id` - id of the record.
- `table_name` - table name (required to get the translation).
- `comment` - comment
```json
{
    "table_name": "Test",
    "id": "103",
    "uuid": "db4f0106-eace-44bd-b761-f03f6efd4852",
    "comment": "add comment"
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/component/notes/create-chat-entry?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "Test",
    "id": "103",
    "uuid": "db4f0106-eace-44bd-b761-f03f6efd4852",
    "comment": "add comment"
}'  
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "chat_uuid": "76d1e4fa-6735-48e0-9021-d4736575ea16",
        "uuid": "2dc4bdfe-3143-40fe-8a84-39df526a5ca1",
        "id": 1000071,
        "subject": "",
        "character_data": "add comment",
        "user_uuid": "",
        "user_name": "",
        "chat_entry_type": 0,
        "chat_entry_type_name": 0,
        "confidential_type": 0,
        "confidential_type_name": 0,
        "moderator_status": 1,
        "moderator_status_bname": 1,
        "log_date": "2021-05-17T00:07:36.000Z"
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### Preferences <hr>

### POST /api/user-interface/component/preference/set-preference
Set user preferences

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
#### Body of the Petitión:
- `container_uuid` - UUID of the container, usually a window
- `column_name` - attribute or column name
- `is_for_current_user` - apply to current user (boolean)
- `is_for_current_client` - apply to current client (boolean)
- `is_for_current_organization` - apply to current organization (Boolean)
- `is_for_current_container` - apply to current container (boolean)
- `value` - value to set in preference

```json
{
    "container_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
    "column_name": "Name",
    "value": "System",
    "is_for_current_user": true,
    "is_for_current_client": true,
    "is_for_current_organization": false,
    "is_for_current_container": true
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/component/preference/set-preference?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "container_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
    "column_name": "Name",
    "value": "System",
    "is_for_current_user": true,
    "is_for_current_client": true,
    "is_for_current_organization": false,
    "is_for_current_container": true
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "container_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
        "column_name": "Name",
        "user_uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
        "client_uuid": "894a23a8-24e7-4ae1-a2e5-eda113607852",
        "organization_uuid": "",
        "type": 0,
        "value": "System"
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### POST /api/user-interface/component/preference/delete-preference
Clear user preferences

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
#### Body of the Petitión:

- `container_uuid` - UUID of the container, usually a window
- `column_name` - attribute or column name
- `is_for_current_user` - apply to current user (boolean)
- `is_for_current_client` - apply to current client (boolean)
- `is_for_current_organization` - apply to current organization (Boolean)
- `is_for_current_container` - apply to current container (boolean)
- `value` - value to set in preference

```json
{
    "container_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
    "column_name": "Name",
    "is_for_current_user": true,
    "is_for_current_client": true,
    "is_for_current_organization": false,
    "is_for_current_container": true
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/component/preference/delete-preference?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "container_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
    "column_name": "Name",
    "is_for_current_user": true,
    "is_for_current_client": true,
    "is_for_current_organization": false,
    "is_for_current_container": true
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": "Ok"
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### Private Access <hr>

### POST /api/user-interface/component/private-access/unlock-private-access

Unlock a private access

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
#### Body of the Petitión:

- `table_name` - table name (required if not a query).
- `id` - id of the record.
- `uuid` - uuid of the registry.

```json
{
    "table_name": "C_Order",
    "id": "1073741",
    "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/component/private-access/unlock-private-access?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "C_Order",
    "id": "1073741",
    "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
        "is_locked": false
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### POST /api/user-interface/component/private-access/lock-private-access

Block a private access

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
#### Body of the Petitión:

- `table_name` - table name (required if not a query).
- `id` - id of the record.
- `uuid` - uuid of the registry.

```json
{
    "table_name": "C_Order",
    "id": "1073741",
    "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/component/private-access/unlock-private-access?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "C_Order",
    "id": "1073741",
    "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
        "is_locked": false
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error
### GET /api/user-interface/component/private-access/private-access

Get private access to the table and the registry

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `table_name` - table name (required if not a query).
- `id` - id of the record.
- `uuid` - uuid of the registry.
#### Body of the Petitión:

```json
null
```
#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/component/private-access/private-access?token=%3Ctoken-generated-for-demo-api%3E&language=es&table_name=C_Order,&id=1073741,&uuid=6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "8a702ba2-8e7c-4fc5-ba39-a7fc3f959068",
        "is_locked": false
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### Record Access <hr>

### GET /api/user-interface/component/record-access/record-access

Get access to the entity's registry

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `table_name` - table name (required if not a query).
- `id` - id of the record.
- `uuid` - uuid of the registry.
#### Body of the Petitión:

```json
null
```
#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/component/record-access/record-access?token=%3Ctoken-generated-for-demo-api%3E&language=es&table_name=C_Order&id=1073741&uuid=6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66",
        "available_roles": [
            {
                "role_id": 1000001,
                "role_uuid": "6e45fd2b-0ec4-4086-8930-544961926673",
                "role_name": "Compañía Estándar User",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000083,
                "role_uuid": "a36ba44b-5e1f-4548-8599-df4ae08dc5c7",
                "role_name": "Analista de Asistencia Técnica",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000084,
                "role_uuid": "ccaba064-da21-495b-b612-8f61db11b9cb",
                "role_name": "Asesor de POS",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000070,
                "role_uuid": "f651466d-1444-4563-a2cf-69dd5f1abf2c",
                "role_name": "MiniERP: Compras",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000073,
                "role_uuid": "54c2d33d-a0a0-43b6-8da6-0bc2857c7f6a",
                "role_name": "MiniERP: Ventas",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000088,
                "role_uuid": "9aad6573-61ff-46e9-b2d0-a5c25105a559",
                "role_name": "MiniERP: POS",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000078,
                "role_uuid": "4286a406-8d67-4e0d-a25c-85a65b6a9a45",
                "role_name": "MiniERP: Ventas / Agencia de Viajes",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000091,
                "role_uuid": "377190ef-752c-4a12-94b2-cfa48b92035e",
                "role_name": "MiniERP: Administrativo / Tienda",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000079,
                "role_uuid": "1acfb3f4-850d-4b32-ab57-7f29fe28cd75",
                "role_name": "MiniERP: Administrativo / Agencia",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000094,
                "role_uuid": "07db7fee-eb3c-4d8f-893c-a90f7ea911bd",
                "role_name": "MiniERP: Administrativo / Servicio / Reparación",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000095,
                "role_uuid": "90de9c18-34b8-40a5-9e81-57d9448735f4",
                "role_name": "MiniERP: Ventas / Servicio / Reparación",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000092,
                "role_uuid": "7aa4242a-93c0-42d8-92be-8250002d3e3c",
                "role_name": "Demo",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            }
        ],
        "current_roles": []
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### POST /api/user-interface/component/record-access/record-access

Establish access to the registry.

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.

#### Body of the Petitión:

- `id` - id of the entity.
- `uuid` - uuid of the entity.
- `table_name` - name of the entity table
- `record_accesses` - list of accesses by role

```json
{
    "table_name": "M_Product_Group",
    "id": 1000002,
    "uuid": "a46108d8-40ed-11e9-91a1-0242ac140002",
    "record_accesses": [
        {
            "role_id": 1000001,
            "role_uuid": "6e45fd2b-0ec4-4086-8930-544961926673",
            "role_name": "Compañía Estándar User",
            "is_active": false,
            "is_exclude": false,
            "is_read_only": false,
            "is_dependent_entities": true
        },
        {
            "role_id": 1000065,
            "role_uuid": "b7d155ff-117d-48cf-b9e9-e488b4ea381f",
            "role_name": "Proveedor (Agente Externo)",
            "is_active": false,
            "is_exclude": true,
            "is_read_only": true,
            "is_dependent_entities": false
        }
    ]
}
```
#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/component/record-access/set-record-access?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "M_Product_Group",
    "id": 1000002,
    "uuid": "a46108d8-40ed-11e9-91a1-0242ac140002",
    "record_accesses": [
        {
            "role_id": 1000001,
            "role_uuid": "6e45fd2b-0ec4-4086-8930-544961926673",
            "role_name": "Compañía Estándar User",
            "is_active": false,
            "is_exclude": false,
            "is_read_only": false,
            "is_dependent_entities": true
        },
        {
            "role_id": 1000065,
            "role_uuid": "b7d155ff-117d-48cf-b9e9-e488b4ea381f",
            "role_name": "Proveedor (Agente Externo)",
            "is_active": false,
            "is_exclude": true,
            "is_read_only": true,
            "is_dependent_entities": false
        }
    ]
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66",
        "available_roles": [
            {
                "role_id": 1000001,
                "role_uuid": "6e45fd2b-0ec4-4086-8930-544961926673",
                "role_name": "Compañía Estándar User",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000083,
                "role_uuid": "a36ba44b-5e1f-4548-8599-df4ae08dc5c7",
                "role_name": "Analista de Asistencia Técnica",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000084,
                "role_uuid": "ccaba064-da21-495b-b612-8f61db11b9cb",
                "role_name": "Asesor de POS",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000070,
                "role_uuid": "f651466d-1444-4563-a2cf-69dd5f1abf2c",
                "role_name": "MiniERP: Compras",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000073,
                "role_uuid": "54c2d33d-a0a0-43b6-8da6-0bc2857c7f6a",
                "role_name": "MiniERP: Ventas",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000088,
                "role_uuid": "9aad6573-61ff-46e9-b2d0-a5c25105a559",
                "role_name": "MiniERP: POS",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000078,
                "role_uuid": "4286a406-8d67-4e0d-a25c-85a65b6a9a45",
                "role_name": "MiniERP: Ventas / Agencia de Viajes",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000091,
                "role_uuid": "377190ef-752c-4a12-94b2-cfa48b92035e",
                "role_name": "MiniERP: Administrativo / Tienda",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000079,
                "role_uuid": "1acfb3f4-850d-4b32-ab57-7f29fe28cd75",
                "role_name": "MiniERP: Administrativo / Agencia",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000094,
                "role_uuid": "07db7fee-eb3c-4d8f-893c-a90f7ea911bd",
                "role_name": "MiniERP: Administrativo / Servicio / Reparación",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000095,
                "role_uuid": "90de9c18-34b8-40a5-9e81-57d9448735f4",
                "role_name": "MiniERP: Ventas / Servicio / Reparación",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000092,
                "role_uuid": "7aa4242a-93c0-42d8-92be-8250002d3e3c",
                "role_name": "Demo",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            }
        ],
        "current_roles": []
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### Translations <hr>

### GET /api/user-interface/component/translations/translations

Get Translations

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `table_name` - table name (required if not a query).
- `id` - id of the record.
- `uuid` - uuid of the registry.
- `page_size` - page size (custom).
- `page_token` - page token (optional to get a specific page).

#### Body of the Petitión:

```json
null
```
#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/component/translation/translations?token=%3Ctoken-generated-for-demo-api%3E&language=es&table_name=AD_View&id=50000&uuid=a4cb498e-fb40-11e8-a479-7a0060f0aa01'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "language": "es_VE",
                "uuid": "",
                "values": {
                    "Description": "Allow select the Sales Order lines to create a Outbound Order",
                    "Name": "Sales Order to Picking"
                }
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

## Process

### GET /api/user-interface/process/report-output

Get the report output

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `print_format_uuid` - print format reference
- `report_view_uuid` - report view reference
- `is_summary` - summary
- `report_name` - report name
- `report_type` - report type
- `filters` - query filters
- `columns` - query columns
- `table_name` - table name (required if not a query)
- `query` - custom query instead of a SQL based table name
- `where_clause` - where clause of the SQL-based search
- `order_by_clause` - SQL based order by clause
- `limit` - record limit
#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/process/report-output?token=%3Ctoken-generated-for-demo-api%3E&table_name=RV_OpenItem&print_format_uuid=8eb10f96-bee8-11e9-a3f9-0242ac110003&report_view_uuid=a48826f4-fb40-11e8-a479-7a0060f0aa01&is_summary=false&report_name=Saldos+Abiertos&report_type=html&language=es'
    
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "attachment_uuid": "4514fbe0-2433-479c-83d5-8d7e58571bf6",
        "title": "zip",
        "text_msg": "Prueba 1",
        "resource_references_list": []
    }
}
```

#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/process/drill-tables

Get boards for the drill

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
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/process/drill-tables?token=%3Ctoken-generated-for-demo-api%3E&table_name=C_BP_Group&language=es'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "table_name": "C_BPartner",
                "print_name": "Socio del Negocio"
            },
            {
                "table_name": "C_CommissionLine",
                "print_name": "Partida de la comisión"
            },
            {
                "table_name": "I_BPartner",
                "print_name": "Importar Socios del Negocio"
            },
            {
                "table_name": "PA_GoalRestriction",
                "print_name": "Retricción de Meta"
            },
            {
                "table_name": "C_TaxDefinition",
                "print_name": "Configuración Impuesto"
            },
            {
                "table_name": "HR_Concept_Acct",
                "print_name": "Cuenta Concepto Nómina"
            },
            {
                "table_name": "HR_Movement",
                "print_name": "Movimiento Nómina"
            },
            {
                "table_name": "M_PromotionPreCondition",
                "print_name": "Precondición Promoción"
            },
            {
                "table_name": "WM_Definition",
                "print_name": "Definición de Entrada y Salida"
            },
            {
                "table_name": "I_SalesHistory",
                "print_name": "Import Sales History ID"
            },
            {
                "table_name": "C_SalesHistory",
                "print_name": "Sales History"
            },
            {
                "table_name": "PP_ForecastDefinitionLine",
                "print_name": "Forecast Definition Line"
            },
            {
                "table_name": "FM_ProductApplicability",
                "print_name": "Aplicación de Producto Financiero"
            }
        ]
    }
}
```

#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/process/report-views

Get report views

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - page size
- `page_token` - token page
- `table_name` - Table name (required if not a query)
- `process_uuid` - process uuid

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/process/report-views?token=%3Ctoken-generated-for-demo-api%3E&table_name=RV_OpenItem&process_uuid=a42b9c36-fb40-11e8-a479-7a0060f0aa01&language=es'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01",
                "name": "Open Item",
                "description": "Open Item",
                "table_name": "RV_OpenItem"
            }
        ]
    }
}
```

#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/process/print-formats

Get report views

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - page size
- `page_token` - token page
- `table_name` - Table name (required if not a query)
- `process_uuid` - process uuid
- `reportViewUuid` - report view uuid

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/process/print-formats?token=%3Ctoken-generated-for-demo-api%3E&table_name=RV_OpenItem&process_uuid=a42b9c36-fb40-11e8-a479-7a0060f0aa01&language=es'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "print_format_uuid": "8eb10f96-bee8-11e9-a3f9-0242ac110003",
                "name": "Saldos Abiertos",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": true,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "print_format_uuid": "0abe35d1-2fa9-425f-a7aa-79031a28da38",
                "name": "Saldos Abiertos (Multi-Moneda)",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": false,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "print_format_uuid": "d23c05ea-639d-4f68-a78c-6bd90d594dcd",
                "name": "Saldos Abiertos (Ordenado por Fecha)",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": false,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "print_format_uuid": "5166f6a2-d331-11e9-a278-0242ac110002",
                "name": "Saldos Abiertos por Agente Comercial",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": false,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "print_format_uuid": "454f2bc5-326a-40cf-9491-2881b6a307fb",
                "name": "Saldos Abiertos (Por Lista de Precios)",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": true,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "print_format_uuid": "d345f00b-8113-45ee-b7c6-191896d75925",
                "name": "Saldos Abiertos por Tipo de Documento",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": true,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            },
            {
                "print_format_uuid": "ac4125de-d660-11e9-9c36-0242ac110002",
                "name": "Saldos Abiertos por Vencimiento",
                "description": "",
                "table_name": "RV_OpenItem",
                "is_default": false,
                "report_view_uuid": "a48826f4-fb40-11e8-a479-7a0060f0aa01"
            }
        ]
    }
}
```

#### Response Code:

- `200` when successful.
- `500` in case of error

## Smart Browser

### GET /api/user-interface/smart-browser/browser-items

Browser item list

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `uuid` - uuid of the search engine.
- `parameters` - search engine parameters
- `columns` - columns of the query.
- `filters` - query filters.
- `table_name` - table name (required if not a query).
- `query` - custom query instead of a SQL based table name.
- `where_clause` - where clause of the SQL-based search.
- `order_by_clause` - SQL based order by clause.
- `limit` - record limit.
#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location -g --request GET 'https://api.erpya.com/api/adempiere/user-interface/smart-browser/browser-items?uuid=8aaefbc2-fb40-11e8-a479-7a0060f0aa01&filters[]=%7B%22key%22:%22O_IsSOTrx%22,%22value%22:true,%22values%22:[]%7D&filters[]=%7B%22key%22:%22O_DocStatus%22,%22value%22:%22DR%22,%22values%22:[]%7D&query=SELECT+o.Processing+AS+%22O_Processing%22,o.C_Opportunity_ID+AS+%22O_C_Opportunity_ID%22,o.DocStatus+AS+%22O_DocStatus%22,o.DropShip_BPartner_ID+AS+%22O_DropShip_BPartner_ID%22,o.DropShip_Location_ID+AS+%22O_DropShip_Location_ID%22,o.DropShip_User_ID+AS+%22O_DropShip_User_ID%22,o.FreightAmt+AS+%22O_FreightAmt%22,o.IsSelected+AS+%22O_IsSelected%22,o.CopyFrom+AS+%22O_CopyFrom%22,o.IsDelivered+AS+%22O_IsDelivered%22,o.Bill_Location_ID+AS+%22O_Bill_Location_ID%22,o.Pay_BPartner_ID+AS+%22O_Pay_BPartner_ID%22,o.AmountRefunded+AS+%22O_AmountRefunded%22,o.Bill_User_ID+AS+%22O_Bill_User_ID%22,o.Pay_Location_ID+AS+%22O_Pay_Location_ID%22,o.C_Activity_ID+AS+%22O_C_Activity_ID%22,o.PaymentRule+AS+%22O_PaymentRule%22,o.Posted+AS+%22O_Posted%22,o.C_BPartner_ID+AS+%22O_C_BPartner_ID%22,o.DocumentNo+AS+%22O_DocumentNo%22,o.DateOrdered+AS+%22O_DateOrdered%22,o.M_Shipper_ID+AS+%22O_M_Shipper_ID%22,o.M_Warehouse_ID+AS+%22O_M_Warehouse_ID%22,o.OrderType+AS+%22O_OrderType%22,o.AD_Client_ID+AS+%22O_AD_Client_ID%22,o.AD_Org_ID+AS+%22O_AD_Org_ID%22,o.AD_OrgTrx_ID+AS+%22O_AD_OrgTrx_ID%22,o.AD_User_ID+AS+%22O_AD_User_ID%22,o.AmountTendered+AS+%22O_AmountTendered%22,o.Bill_BPartner_ID+AS+%22O_Bill_BPartner_ID%22,o.Weight+AS+%22O_Weight%22,o.C_BPartner_Location_ID+AS+%22O_C_BPartner_Location_ID%22,o.C_Campaign_ID+AS+%22O_C_Campaign_ID%22,o.C_CashLine_ID+AS+%22O_C_CashLine_ID%22,o.C_Charge_ID+AS+%22O_C_Charge_ID%22,o.C_ConversionType_ID+AS+%22O_C_ConversionType_ID%22,o.C_Currency_ID+AS+%22O_C_Currency_ID%22,o.C_DocType_ID+AS+%22O_C_DocType_ID%22,o.C_DocTypeTarget_ID+AS+%22O_C_DocTypeTarget_ID%22,o.ChargeAmt+AS+%22O_ChargeAmt%22,o.C_Order_ID+AS+%22O_C_Order_ID%22,o.C_OrderSource_ID+AS+%22O_C_OrderSource_ID%22,o.C_Payment_ID+AS+%22O_C_Payment_ID%22,o.C_PaymentTerm_ID+AS+%22O_C_PaymentTerm_ID%22,o.C_POS_ID+AS+%22O_C_POS_ID%22,o.C_Project_ID+AS+%22O_C_Project_ID%22,o.Created+AS+%22O_Created%22,o.CreatedBy+AS+%22O_CreatedBy%22,o.DateAcct+AS+%22O_DateAcct%22,o.DatePrinted+AS+%22O_DatePrinted%22,o.DatePromised+AS+%22O_DatePromised%22,o.DeliveryRule+AS+%22O_DeliveryRule%22,o.DeliveryViaRule+AS+%22O_DeliveryViaRule%22,o.Description+AS+%22O_Description%22,o.DocAction+AS+%22O_DocAction%22,o.FreightCostRule+AS+%22O_FreightCostRule%22,o.GrandTotal+AS+%22O_GrandTotal%22,o.InvoiceRule+AS+%22O_InvoiceRule%22,o.UpdatedBy+AS+%22O_UpdatedBy%22,o.IsActive+AS+%22O_IsActive%22,o.IsApproved+AS+%22O_IsApproved%22,o.IsCreditApproved+AS+%22O_IsCreditApproved%22,o.IsDiscountPrinted+AS+%22O_IsDiscountPrinted%22,o.IsDropShip+AS+%22O_IsDropShip%22,o.IsInvoiced+AS+%22O_IsInvoiced%22,o.IsPrinted+AS+%22O_IsPrinted%22,o.IsSelfService+AS+%22O_IsSelfService%22,o.IsSOTrx+AS+%22O_IsSOTrx%22,o.IsTaxIncluded+AS+%22O_IsTaxIncluded%22,o.IsTransferred+AS+%22O_IsTransferred%22,o.Link_Order_ID+AS+%22O_Link_Order_ID%22,o.M_FreightCategory_ID+AS+%22O_M_FreightCategory_ID%22,o.M_PriceList_ID+AS+%22O_M_PriceList_ID%22,o.POReference+AS+%22O_POReference%22,o.PriorityRule+AS+%22O_PriorityRule%22,o.Processed+AS+%22O_Processed%22,o.ProcessedOn+AS+%22O_ProcessedOn%22,o.PromotionCode+AS+%22O_PromotionCode%22,o.Ref_Order_ID+AS+%22O_Ref_Order_ID%22,o.SalesRep_ID+AS+%22O_SalesRep_ID%22,o.SendEMail+AS+%22O_SendEMail%22,o.TotalLines+AS+%22O_TotalLines%22,o.Updated+AS+%22O_Updated%22,o.User1_ID+AS+%22O_User1_ID%22,o.User2_ID+AS+%22O_User2_ID%22,o.Volume+AS+%22O_Volume%22,+(SELECT+NVL(C_BPartner.Name,%27%27)+FROM+C_BPartner+WHERE+o.C_BPartner_ID%3DC_BPartner.C_BPartner_ID)+AS+%22DisplayColumn_O_C_BPartner_ID%22,+C_DocTypeTarget_ID_C_DocType_Trl.Name+AS+%22DisplayColumn_O_C_DocTypeTarget_ID%22,+DeliveryRule_AD_Ref_List_Trl.Name+AS+%22DisplayColumn_O_DeliveryRule%22,+DocStatus_AD_Ref_List_Trl.Name+AS+%22DisplayColumn_O_DocStatus%22+FROM+C_Order+o+LEFT+JOIN+C_DocType+AS+C_DocTypeTarget_ID_C_DocType+ON(C_DocTypeTarget_ID_C_DocType.C_DocType_ID+%3D+o.C_DocTypeTarget_ID)+LEFT+JOIN+C_DocType_Trl+AS+C_DocTypeTarget_ID_C_DocType_Trl+ON(C_DocTypeTarget_ID_C_DocType_Trl.C_DocType_ID+%3D+C_DocTypeTarget_ID_C_DocType.C_DocType_ID+AND+C_DocTypeTarget_ID_C_DocType_Trl.AD_Language+%3D+%27es_VE%27)+LEFT+JOIN+AD_Ref_List+AS+DeliveryRule_AD_Ref_List+ON(DeliveryRule_AD_Ref_List.Value+%3D+o.DeliveryRule+AND+DeliveryRule_AD_Ref_List.AD_Reference_ID+%3D+151)+LEFT+JOIN+AD_Ref_List_Trl+AS+DeliveryRule_AD_Ref_List_Trl+ON(DeliveryRule_AD_Ref_List_Trl.AD_Ref_List_ID+%3D+DeliveryRule_AD_Ref_List.AD_Ref_List_ID+AND+DeliveryRule_AD_Ref_List_Trl.AD_Language+%3D+%27es_VE%27)+LEFT+JOIN+AD_Ref_List+AS+DocStatus_AD_Ref_List+ON(DocStatus_AD_Ref_List.Value+%3D+o.DocStatus+AND+DocStatus_AD_Ref_List.AD_Reference_ID+%3D+131)+LEFT+JOIN+AD_Ref_List_Trl+AS+DocStatus_AD_Ref_List_Trl+ON(DocStatus_AD_Ref_List_Trl.AD_Ref_List_ID+%3D+DocStatus_AD_Ref_List.AD_Ref_List_ID+AND+DocStatus_AD_Ref_List_Trl.AD_Language+%3D+%27es_VE%27)&where_clause=o.DocStatus+NOT+IN(%27VO%27)&order_by_clause=&token=%3Ctoken-generated-for-demo-api%3E&language=es'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 50,
        "next_page_token": "<token-generated-for-demo-api>-1",
        "records": [
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "E.R.P. Consultores y Asociados, C.A."
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS"
                    },
                    {
                        "key": "DisplayColumn_O_DeliveryRule",
                        "value": "Forzado"
                    },
                    {
                        "key": "DisplayColumn_O_DocStatus",
                        "value": "Completo"
                    },
                    {
                        "key": "O_AD_Client_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2021-02-26T04:00:00.000Z"
                    },
                    {
                        "key": "O_GrandTotal",
                        "value": 7.85
                    },
                    {
                        "key": "O_IsActive",
                        "value": true
                    }
                ]
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "Keyka Silva"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS"
                    },
                    {
                        "key": "DisplayColumn_O_DeliveryRule",
                        "value": "Disponibilidad"
                    },
                    {
                        "key": "DisplayColumn_O_DocStatus",
                        "value": "Borrador"
                    },
                    {
                        "key": "O_AD_Client_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2021-04-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_GrandTotal",
                        "value": 14.77
                    },
                    {
                        "key": "O_IsActive",
                        "value": true
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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

## Ventana

### GET /api/user-interface/window/context-info-value

Get context information

#### Parameters POST:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `uuid` - uuid of the registry.
- `query` - custom query instead of a SQL based table name.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/window/context-info-value?query=SELECT+bp.SO_CreditLimit,+bp.SO_CreditUsed,+bp.TotalOpenBalance,+bp.FirstSale%0AFROM+C_BPartner+bp%0AWHERE+bp.C_BPartner_ID+%3D+SELECT+C_BPartner_ID+AS+DefaultValue+FROM+C_Order+WHERE+C_Order_ID%3D0&uuid=8cb3c812-fb40-11e8-a479-7a0060f0aa01&id=50005&token=%3Ctoken-generated-for-demo-api%3E&language=es'
    
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "message_text": "",
        "message_tip": ""
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/window/references

List of references

#### Parameters POST:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `table_name` - table name (required if not a query).
- `id` - id of the record.
- `uuid` - uuid of the registry.
- `windowUuid` - window uuid

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/window/references?token=%3Ctoken-generated-for-demo-api%3E&language=es&uuid=d30bfb69-da77-40c9-9b63-da56c62a393a&window_uuid=a520de12-fb40-11e8-a479-7a0060f0aa01&table_name=C_BPartner'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "uuid": "4c818c6a-9d4b-46b7-a74d-8501eb265ea2",
                "window_uuid": "a5219dfc-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Devolución a Proveedor (#2)",
                "table_name": "M_InOut",
                "where_clause": "(M_InOut.MovementType IN ('V-') AND M_InOut.C_BPartner_ID=1000259)",
                "record_count": 2
            },
            {
                "uuid": "e7c6410e-36d2-49e0-a553-64394adad8af",
                "window_uuid": "a520e312-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Documentos por Pagar (Pendientes) (#2)",
                "table_name": "C_Invoice",
                "where_clause": "(C_Invoice.C_BPartner_ID = 1000259\nAND C_Invoice.IsSOTrx = 'N'\nAND invoiceOpen(C_Invoice.C_Invoice_ID, 0) <> 0)",
                "record_count": 2
            },
            {
                "uuid": "2ec7ec83-f524-4fc8-a878-83694c2016ae",
                "window_uuid": "a52115e4-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Asientos Contables (#106)",
                "table_name": "Fact_Acct",
                "where_clause": "(Fact_Acct.C_BPartner_ID=1000259)",
                "record_count": 106
            },
            {
                "uuid": "ea9e4a60-590a-460f-bd35-3467ca9a3e02",
                "window_uuid": "a5216814-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Consulta de Asignación (#13)",
                "table_name": "C_AllocationLine",
                "where_clause": "(C_AllocationLine.C_BPartner_ID=1000259)",
                "record_count": 13
            },
            {
                "uuid": "98133744-53de-4508-9de0-3c4957961f6f",
                "window_uuid": "a520e312-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Documentos por Pagar (#19)",
                "table_name": "C_Invoice",
                "where_clause": "(C_Invoice.C_BPartner_ID=1000259 AND (C_Invoice.IsSOTrx='N'))",
                "record_count": 19
            },
            {
                "uuid": "d5de6bda-e3f6-4bda-9b9f-3c35bdc344f8",
                "window_uuid": "a52122be-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Documentos sin Aplicar (#8)",
                "table_name": "RV_UnPosted",
                "where_clause": "(RV_UnPosted.C_BPartner_ID=1000259)",
                "record_count": 8
            },
            {
                "uuid": "1e392c43-342c-4292-83be-3fdb6b43f29f",
                "window_uuid": "a521a07c-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Recepción de Productos (#3)",
                "table_name": "M_InOut",
                "where_clause": "(M_InOut.C_BPartner_ID=1000259 AND (M_InOut.MovementType IN ('V+')))",
                "record_count": 3
            },
            {
                "uuid": "e7a576aa-6faa-415f-ae20-ee79862aaff1",
                "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Órdenes de Venta (#1)",
                "table_name": "C_Order",
                "where_clause": "(C_Order.C_BPartner_ID=1000259 AND (C_Order.IsSOTrx='Y' AND EXISTS(SELECT 1 FROM C_DocType dt WHERE dt.C_DocType_ID = C_Order.C_DocTypeTarget_ID AND dt.DocBaseType = 'SOO' AND (dt.DocSubTypeSO IS NULL OR dt.DocSubTypeSO <> 'RM'))))",
                "record_count": 1
            },
            {
                "uuid": "a6664a1a-0aec-40c2-89cd-e7f6a71487d5",
                "window_uuid": "a5220b20-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Órdenes de Compra (#1)",
                "table_name": "C_Order",
                "where_clause": "(C_Order.C_BPartner_ID=1000259 AND (C_Order.IsSOTrx='N' AND EXISTS(SELECT 1 FROM C_DocType dt WHERE dt.C_DocType_ID = C_Order.C_DocTypeTarget_ID AND dt.DocBaseType = 'POO' AND (dt.DocSubTypeSO IS NULL OR dt.DocSubTypeSO <> 'RM'))))",
                "record_count": 1
            },
            {
                "uuid": "510b9ac6-fa8d-41e7-8fbc-37a49b7c35fc",
                "window_uuid": "a5211e40-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Pago/Cobro (#1)",
                "table_name": "C_Payment",
                "where_clause": "(C_Payment.C_BPartner_ID=1000259 AND (C_Payment.C_BPartner_ID IS NOT NULL AND EXISTS(SELECT 1 FROM C_BankAccount ba INNER JOIN C_Bank b ON(b.C_Bank_ID = ba.C_Bank_ID) WHERE ba.C_BankAccount_ID = C_Payment.C_BankAccount_ID AND b.BankType = 'B')))",
                "record_count": 1
            },
            {
                "uuid": "5527ee58-aedc-4b10-8a93-f16bee817041",
                "window_uuid": "137b0620-8be8-11e9-b1db-0242ac140011",
                "display_name": "Retención Generada (#1)",
                "table_name": "WH_Withholding",
                "where_clause": "(WH_Withholding.C_BPartner_ID=1000259)",
                "record_count": 1
            },
            {
                "uuid": "383695ab-84c7-482f-ad18-5d02a4fbf243",
                "window_uuid": "a521532e-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Transacciones de Balances Contables (#16)",
                "table_name": "RV_Fact_Acct_Balance",
                "where_clause": "(RV_Fact_Acct_Balance.C_BPartner_ID=1000259)",
                "record_count": 16
            },
            {
                "uuid": "31397fa4-f193-4758-992c-61c57547d8df",
                "window_uuid": "a5219852-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Ver Registros MRP (#3)",
                "table_name": "RV_PP_MRP",
                "where_clause": "(RV_PP_MRP.C_BPartner_ID=1000259)",
                "record_count": 3
            },
            {
                "uuid": "0e32efa6-86d8-4b02-a019-80f1da8f8847",
                "window_uuid": "a521c41c-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Vista de demandas del MRP (#2)",
                "table_name": "RV_PP_MRP_Demand",
                "where_clause": "(RV_PP_MRP_Demand.C_BPartner_ID=1000259)",
                "record_count": 2
            },
            {
                "uuid": "9a707006-d2e9-4611-a66c-7e11441eef7b",
                "window_uuid": "a521c494-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Vista de Suministros del MRP (#1)",
                "table_name": "RV_PP_MRP_Supply",
                "where_clause": "(RV_PP_MRP_Supply.C_BPartner_ID=1000259)",
                "record_count": 1
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error


### GET /api/user-interface/window/lookup-items

Get search item

#### Parameters:

- `token` - user token returned from` POST/api/user/login`.
- `language` - language for the response translations.
- `page_size` - page size (custom)
- `page_token` - page token (optional to get a specific page)
- `filters` - query filters
- `table_name` - table name (Required if not a query)
- `query` - custom query instead of a SQL based table name
- `where_clause` - SQL based search where clause
- `order_by_clause` - order by clause based on SQL
- `limit` - record limit

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/window/lookup-items?language=es&table_name=AD_Org&query=SELECT+AD_Org.AD_Org_ID,NULL,NVL(AD_Org.Name,%27-1%27),AD_Org.IsActive,+AD_Org.UUID+FROM+AD_Org+WHERE+(AD_Org.IsSummary%3D%27N%27+OR+AD_Org.AD_Org_ID%3D0)+ORDER+BY+3&token=%3Ctoken-generated-for-demo-api%3E'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 2,
        "next_page_token": "",
        "records": [
            {
                "id": 0,
                "uuid": "a3e5c878-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "*",
                    "KeyColumn": 0
                }
            },
            {
                "id": 1000000,
                "uuid": "d97027fd-4cd5-445e-8fd8-ef5d3f7959b4",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Organización",
                    "KeyColumn": 1000000
                }
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/window/lookup-item

Obtener elemento de búsqueda

#### Parameters:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de la página (personalizado)
- `page_token` - token de la página (opcional para obtener una página específica)
- `table_name` - nombre de la tabla (Obligatorio si no es una consulta)
- `query` - consulta personalizada en lugar de un nombre de tabla basado en SQL
- `where_clause` - cláusula where de búsqueda basada en SQL
- `order_by_clause` - orden por cláusula basada en SQL
- `límite` - límite de registros
- `filters` - filtros de consulta

#### Estructura del `filters`
```json
    filters: [
        {
            "column_name": "DocStatus",
            "operator": "EQUAL",
            "value": "CO"
        },
        {
            "column_name": "DateInvoiced",
            "operator": "BETWEEN",
            "value": "2020-01-01",
            "value_to": "2020-09-01"
        },
        {
            "column_name": "C_DocType_ID",
            "operator": "IN",
            "values": [
                1000000,
                1000562
            ]
        } 
    ]

```

:::tip Nota
- `value` - valor de la condición,
- `value_to`-  valor de la condición a,
- `values` - valores de la condición,
- `operator` - condición operador
:::
#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/window/lookup-item?table_name=R_MailText&query=SELECT%20R_MailText.R_MailText_ID,NULL,NVL(R_MailText_Trl.Name,%27-1%27),R_MailText.IsActive,%20R_MailText.UUID%20FROM%20R_MailText%20INNER%20JOIN%20R_MailText_TRL%20ON%20(R_MailText.R_MailText_ID=R_MailText_Trl.R_MailText_ID%20AND%20R_MailText_Trl.AD_Language=%27es_VE%27)%20ORDER%20BY%203&token=63e90c4e-348c-4706-ac58-400e9de6cf5a&language=es'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 1000124,
        "uuid": "941b92d1-6864-48e0-accb-b9955465c653",
        "table_name": "",
        "values": {
            "DisplayColumn": "Agente / Miembro: Alerta al Transferir un Ticket",
            "KeyColumn": 1000124
        }
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/window/default-value

Get search itemObtener elemento de búsqueda

#### Parameters:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- ` query` -  custom query instead a table name based on SQL

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/user-interface/window/default-value?table_name=R_MailText&query=SELECT%20Name%20from%20AD_TEST%20WHERE%20IsActive%20=%20%27Y%27%20AND%20(SELECT%20MAX(AD_TEST_ID)%20FROM%20AD_TEST)&token=63e90c4e-348c-4706-ac58-400e9de6cf5a&language=es'
```
#### Response Body:

```json
{
    "code": 200
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/user-interface/window/run-callout

Run Callout
#### Parameters:
- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Body of the Petitión:

- `table_name` - Name of the calling table
- `window_uuid` - uuid of the call window
- `tab_uuid` - uuid of the call tab
- `callout` - callout tag
- `column_name` - column name of the call
- `old_value` - old value for the column
- `value` - new value of the column
- `window_no` - window number
- `attributes` - attributes of the entity

#### Structure of the `attributes`
```json
"attributes": [
    {
    "key": "AD_Client_ID",
    "value": 1000000
    },
    {
    "key": "AD_Org_ID",
    "value": 1000000
    },
    {
    "key": "Created",
    "value": "2020-10-13T16:14:23.000Z"
    },
    {
    "key": "CreatedBy",
    "value": 1000017
    },
    {
    "key": "IsActive",
    "value": true
    },
    {
    "key": "Value",
    "value": "Solo Pruebas"
    }
]

```

:::tip Note
- `value` - Value,
- `key`-  column name or key,
:::

```json
{
    "table_name": "C_Order",
    "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
    "tab_uuid": "a49ff9be-fb40-11e8-a479-7a0060f0aa01",
    "callout": "org.compiere.model.CalloutOrder.bPartner",
    "column_name": "C_BPartner_ID",
    "value": 1000029,
    "window_no": 5,
    "attributes": [
        {
            "columnName": "IsTransferred",
            "value": false,
            "values": []
        },
        {
            "columnName": "DateAcct",
            "value": "2021-04-30T15:43:38.000Z",
            "values": []
        },
        {
            "columnName": "C_Order_ID",
            "value": 0,
            "values": []
        },
        {
            "columnName": "SendEMail",
            "value": false,
            "values": []
        },
        {
            "columnName": "Processed",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsSelected",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsTaxIncluded",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsSOTrx",
            "value": true,
            "values": []
        },
        {
            "columnName": "IsActive",
            "value": true,
            "values": []
        },
        {
            "columnName": "IsApproved",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsCreditApproved",
            "values": []
        },
        {
            "columnName": "IsDelivered",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsInvoiced",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsPrinted",
            "value": false,
            "values": []
        },
        {
            "columnName": "AD_Client_ID",
            "value": 1000000,
            "values": []
        },
        {
            "columnName": "AD_Org_ID",
            "value": 1000000,
            "values": []
        },
        {
            "columnName": "DocumentNo",
            "values": []
        },
        {
            "columnName": "C_DocTypeTarget_ID",
            "value": 1000026,
            "values": []
        },
        {
            "columnName": "IsSelfService",
            "value": false,
            "values": []
        },
        {
            "columnName": "DateOrdered",
            "value": "2021-04-30T15:43:38.000Z",
            "values": []
        },
        {
            "columnName": "DatePromised",
            "value": "2021-04-30T15:43:38.000Z",
            "values": []
        },
        {
            "columnName": "C_BPartner_ID",
            "value": 1000029,
            "values": []
        },
        {
            "columnName": "C_BPartner_Location_ID",
            "values": []
        },
        {
            "columnName": "DeliveryRule",
            "values": []
        },
        {
            "columnName": "PriorityRule",
            "values": []
        },
        {
            "columnName": "M_Warehouse_ID",
            "values": []
        },
        {
            "columnName": "IsDropShip",
            "values": []
        },
        {
            "columnName": "DeliveryViaRule",
            "values": []
        },
        {
            "columnName": "FreightCostRule",
            "values": []
        },
        {
            "columnName": "FreightAmt",
            "values": []
        },
        {
            "columnName": "InvoiceRule",
            "values": []
        },
        {
            "columnName": "M_PriceList_ID",
            "values": []
        },
        {
            "columnName": "C_Currency_ID",
            "value": 50001,
            "values": []
        },
        {
            "columnName": "IsGeneratedCurrencyType",
            "value": false,
            "values": []
        },
        {
            "columnName": "SalesRep_ID",
            "values": []
        },
        {
            "columnName": "IsDiscountPrinted",
            "value": false,
            "values": []
        },
        {
            "columnName": "PaymentRule",
            "values": []
        },
        {
            "columnName": "C_PaymentTerm_ID",
            "values": []
        },
        {
            "columnName": "IsFarmerAssistanceProgram",
            "value": false,
            "values": []
        },
        {
            "columnName": "TotalLines",
            "value": 0,
            "values": []
        },
        {
            "columnName": "GrandTotal",
            "value": 0,
            "values": []
        },
        {
            "columnName": "DocStatus",
            "value": "DR",
            "values": []
        },
        {
            "columnName": "C_DocType_ID",
            "value": 0,
            "values": []
        },
        {
            "columnName": "DocAction",
            "value": "CO",
            "values": []
        },
        {
            "columnName": "Posted",
            "values": []
        }
    ]
}
```

#### Example of a Call:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/user-interface/window/run-callout?token=63e90c4e-348c-4706-ac58-400e9de6cf5a&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "C_Order",
    "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
    "tab_uuid": "a49ff9be-fb40-11e8-a479-7a0060f0aa01",
    "callout": "org.compiere.model.CalloutOrder.bPartner",
    "column_name": "C_BPartner_ID",
    "value": 1000029,
    "window_no": 5,
    "attributes": [
        {
            "columnName": "IsTransferred",
            "value": false,
            "values": []
        },
        {
            "columnName": "DateAcct",
            "value": "2021-04-30T15:43:38.000Z",
            "values": []
        },
        {
            "columnName": "C_Order_ID",
            "value": 0,
            "values": []
        },
        {
            "columnName": "SendEMail",
            "value": false,
            "values": []
        },
        {
            "columnName": "Processed",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsSelected",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsTaxIncluded",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsSOTrx",
            "value": true,
            "values": []
        },
        {
            "columnName": "IsActive",
            "value": true,
            "values": []
        },
        {
            "columnName": "IsApproved",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsCreditApproved",
            "values": []
        },
        {
            "columnName": "IsDelivered",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsInvoiced",
            "value": false,
            "values": []
        },
        {
            "columnName": "IsPrinted",
            "value": false,
            "values": []
        },
        {
            "columnName": "AD_Client_ID",
            "value": 1000000,
            "values": []
        },
        {
            "columnName": "AD_Org_ID",
            "value": 1000000,
            "values": []
        },
        {
            "columnName": "DocumentNo",
            "values": []
        },
        {
            "columnName": "C_DocTypeTarget_ID",
            "value": 1000026,
            "values": []
        },
        {
            "columnName": "IsSelfService",
            "value": false,
            "values": []
        },
        {
            "columnName": "DateOrdered",
            "value": "2021-04-30T15:43:38.000Z",
            "values": []
        },
        {
            "columnName": "DatePromised",
            "value": "2021-04-30T15:43:38.000Z",
            "values": []
        },
        {
            "columnName": "C_BPartner_ID",
            "value": 1000029,
            "values": []
        },
        {
            "columnName": "C_BPartner_Location_ID",
            "values": []
        },
        {
            "columnName": "DeliveryRule",
            "values": []
        },
        {
            "columnName": "PriorityRule",
            "values": []
        },
        {
            "columnName": "M_Warehouse_ID",
            "values": []
        },
        {
            "columnName": "IsDropShip",
            "values": []
        },
        {
            "columnName": "DeliveryViaRule",
            "values": []
        },
        {
            "columnName": "FreightCostRule",
            "values": []
        },
        {
            "columnName": "FreightAmt",
            "values": []
        },
        {
            "columnName": "InvoiceRule",
            "values": []
        },
        {
            "columnName": "M_PriceList_ID",
            "values": []
        },
        {
            "columnName": "C_Currency_ID",
            "value": 50001,
            "values": []
        },
        {
            "columnName": "IsGeneratedCurrencyType",
            "value": false,
            "values": []
        },
        {
            "columnName": "SalesRep_ID",
            "values": []
        },
        {
            "columnName": "IsDiscountPrinted",
            "value": false,
            "values": []
        },
        {
            "columnName": "PaymentRule",
            "values": []
        },
        {
            "columnName": "C_PaymentTerm_ID",
            "values": []
        },
        {
            "columnName": "IsFarmerAssistanceProgram",
            "value": false,
            "values": []
        },
        {
            "columnName": "TotalLines",
            "value": 0,
            "values": []
        },
        {
            "columnName": "GrandTotal",
            "value": 0,
            "values": []
        },
        {
            "columnName": "DocStatus",
            "value": "DR",
            "values": []
        },
        {
            "columnName": "C_DocType_ID",
            "value": 0,
            "values": []
        },
        {
            "columnName": "DocAction",
            "value": "CO",
            "values": []
        },
        {
            "columnName": "Posted",
            "values": []
        }
    ]
}'
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "result": "",
        "values": {
            "Bill_BPartner_ID": 1000029,
            "Bill_Location_ID": 1000030,
            "C_BPartner_Location_ID": 1000030,
            "DeliveryRule": "A",
            "InvoiceRule": "I",
            "M_PriceList_ID": 1000007,
            "PaymentRule": "P"
        }
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error
