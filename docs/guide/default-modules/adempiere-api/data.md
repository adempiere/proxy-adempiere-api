## Módulo Data

### POST /adempiere-api/user/data/create

Crear Entidad. Se llama al guardar un nuevo registro dede la aplicación.Devuelve los datos del registro creado
#### Parámetros POST:

`tableName` - Nombre de la tabla de la entidad a crear.
`attributesList` - Lista de atributos con los que se creara la entidad.

#### Cuerpo de la Petición:

```json
{
	"token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/data/create?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name":"AD_RelationType","attributes":[{"key":"AD_RelationType_ID","value":0},{"key":"AD_Client_ID","value":1000000},{"key":"AD_Org_ID","value":1000000},{"key":"Name","value":"e"},{"key":"IsActive","value":true},{"key":"IsDirected","value":false},{"key":"Type","value":"I"}]}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "id": 1000000,
        "uuid": "c6d3de0c-ce12-4e40-938d-d2e34aa839ce",
        "table_name": "AD_RelationType",
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
                "key": "AD_RelationType_ID",
                "value": 1000001
            },
            {
                "key": "Created",
                "value": "2021-02-17T14:47:14.000Z"
            },
            {
                "key": "CreatedBy",
                "value": 1000022
            },
            {
                "key": "IsActive",
                "value": true
            },
            {
                "key": "IsDirected",
                "value": false
            },
            {
                "key": "Name",
                "value": "Service"
            },
            {
                "key": "Type",
                "value": "I"
            },
            {
                "key": "UUID",
                "value": "3cc54474-18ce-4533-9b79-b12da86e4b6b"
            },
            {
                "key": "Updated",
                "value": "2021-02-17T14:47:14.000Z"
            },
            {
                "key": "UpdatedBy",
                "value": 1000022
            }
        ]
    }
}
```

#### Código de Respuestas:

- `200` cuando es exitoso
- `500` en caso de error



### POST /adempiere-api/data/update

Se utiliza para actualizar la entidad

#### Parámetros POST:

`tableName` - Nombre de la tabla de la entidad.
`uuid` - uuid de la entidad a actualizar`
`attributesList` - Lista de atributos de los campos actualizado de la entidad.


#### Cuerpo de la Petición:

```json
{
	"token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/data/update?language=en&token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "Test",
    "uuid": "11466bf8-5524-4428-82d0-aa082611172c",
    "attributes": [
        {
            "key": "Name",
            "value": "test0"
        }
    ]
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "id": 1000000,
        "uuid": "c6d3de0c-ce12-4e40-938d-d2e34aa839ce",
        "table_name": "AD_RelationType",
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
                "key": "AD_RelationType_ID",
                "value": 1000000
            },
            {
                "key": "Created",
                "value": "2021-02-17T14:46:23.000Z"
            },
            {
                "key": "CreatedBy",
                "value": 1000022
            },
            {
                "key": "IsActive",
                "value": true
            },
            {
                "key": "IsDirected",
                "value": false
            },
            {
                "key": "Name",
                "value": "Service-Update"
            },
            {
                "key": "Type",
                "value": "I"
            },
            {
                "key": "UUID",
                "value": "c6d3de0c-ce12-4e40-938d-d2e34aa839ce"
            },
            {
                "key": "Updated",
                "value": "2021-02-17T15:47:57.082Z"
            },
            {
                "key": "UpdatedBy",
                "value": 1000022
            }
        ]
    }
}
```

#### Código de Respuestas:

- `200` cuando es exitoso
- `500` en caso de error


### GET /adempiere-api/user/session

Elimina Entidad

#### Parámetros GET:

`tableName` - Nombre de la tabla de la entidad.
`uuid` - uuid de la entidad a eliminar


#### Cuerpo de la Petición:

```json
{
	"token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/data/delete?language=en&token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "Test",
    "id": 1000003,
    "uuid": "11466bf8-5524-4428-82d0-aa082611172c"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": "Ok"
}
```

#### Código de Respuestas:

- `200` cuando es exitoso
- `500` en caso de error




### GET /adempiere-api/data/rollback-entity

Entidad de retroceso (crear, actualizar, eliminar)

#### Parámetros GET:

`tableName` - Nombre de la tabla de la entidad.
`uuid` - uuid de la entidad a eliminar.
`eventType` - tipo de evento 

#### Cuerpo de la Petición:

```json
{
	"token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/data/rollback-entity?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

```json
{
	"code": 200,
	"result": [
		
	]
}
```

#### Código de Respuestas:

- `200` cuando es exitoso
- `500` en caso de error




### GET /adempiere-api/data/entity

Obtener la entidad a partir del nombre de la tabla y el id o uuid del registro.

#### Parámetros GET:

```
    null
```
#### Cuerpo de la Petición:

```json
{
    "token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2",
	"language": "es",
	"table_name": "AD_Client",
    "id": "1000000",
    "uuid": "894a23a8-24e7-4ae1-a2e5-eda113607852"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/data/entity?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&table_name=AD_Client&id=1000000&uuid=894a23a8-24e7-4ae1-a2e5-eda113607852' \
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

#### Código de Respuestas:

- `200` cuando es exitoso
- `500` en caso de error








### POST /adempiere-api/data/list

Listar las Entidades.

#### Parámetros GET:

`tableName` - nombre de la tabla.
`filters` - filtro de la lista.
`columns` - columnas de la consulta.
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
`where_clause` - cláusula where de la búsqueda basada en SQL.
`order_by_clause` - cláusula order by basada en SQL.
`limit` - límite de registros.


#### Cuerpo de la Petición:

```json
{
	"token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/data/list?pageToken=5c9ab4f8-334a-4171-b324-4df37e23ebd2-1&token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "AD_Window",
    "filters": [],
    "columns": [],
    "query": "SELECT AD_Window.*, (SELECT NVL(AD_Client.Name,'\'''\'') FROM AD_Client WHERE AD_Window.AD_Client_ID=AD_Client.AD_Client_ID) AS \"DisplayColumn_AD_Client_ID\", (SELECT NVL(AD_Org.Name,'\'''\'') FROM AD_Org WHERE AD_Window.AD_Org_ID=AD_Org.AD_Org_ID) AS \"DisplayColumn_AD_Org_ID\", WindowType_AD_Ref_List_Trl.Name AS \"DisplayColumn_WindowType\", (SELECT NVL(AD_Color.Name,'\'''\'') FROM AD_Color WHERE AD_Window.AD_Color_ID=AD_Color.AD_Color_ID) AS \"DisplayColumn_AD_Color_ID\", (SELECT NVL(AD_Image.Name,'\'''\'') FROM AD_Image WHERE AD_Window.AD_Image_ID=AD_Image.AD_Image_ID) AS \"DisplayColumn_AD_Image_ID\", EntityType_AD_EntityType.Name AS \"DisplayColumn_EntityType\", (SELECT NVL(AD_ContextInfo.Value,'\'''\'')||'\'' - '\''||NVL(AD_ContextInfo.Name,'\'''\'') FROM AD_ContextInfo WHERE AD_Window.AD_ContextInfo_ID=AD_ContextInfo.AD_ContextInfo_ID) AS \"DisplayColumn_AD_ContextInfo_ID\" FROM AD_Window AS AD_Window LEFT JOIN AD_Ref_List AS WindowType_AD_Ref_List ON(WindowType_AD_Ref_List.Value = AD_Window.WindowType AND WindowType_AD_Ref_List.AD_Reference_ID = 108) LEFT JOIN AD_Ref_List_Trl AS WindowType_AD_Ref_List_Trl ON(WindowType_AD_Ref_List_Trl.AD_Ref_List_ID = WindowType_AD_Ref_List.AD_Ref_List_ID AND WindowType_AD_Ref_List_Trl.AD_Language = '\''es_VE'\'') LEFT JOIN AD_EntityType AS EntityType_AD_EntityType ON(EntityType_AD_EntityType.EntityType = AD_Window.EntityType)",
    "where_clause": "",
    "order_by_clause": ""
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 1,
        "next_page_token": "",
        "records": [
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
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
                        "key": "AD_Reference_Source_ID",
                        "value": 53352
                    },
                    {
                        "key": "AD_Reference_Target_ID",
                        "value": 53354
                    },
                    {
                        "key": "AD_RelationType_ID",
                        "value": 50004
                    },
                    {
                        "key": "Created",
                        "value": "2010-03-22T12:00:22.000Z"
                    },
                    {
                        "key": "CreatedBy",
                        "value": 100
                    },
                    {
                        "key": "Description"
                    },
                    {
                        "key": "DisplayColumn_AD_Client_ID",
                        "value": "System"
                    },
                    {
                        "key": "DisplayColumn_AD_Org_ID",
                        "value": "*"
                    },
                    {
                        "key": "DisplayColumn_AD_Reference_Source_ID",
                        "value": "RelType C_BPartner_ID->Customer_RMA"
                    },
                    {
                        "key": "DisplayColumn_AD_Reference_Target_ID",
                        "value": "RelType Vendor_RMA <= C_BPartner_ID"
                    },
                    {
                        "key": "DisplayColumn_Type",
                        "value": "Implícito"
                    },
                    {
                        "key": "IsActive",
                        "value": true
                    },
                    {
                        "key": "IsDirected",
                        "value": false
                    },
                    {
                        "key": "Name",
                        "value": "BPartner<->VendorReturn"
                    },
                    {
                        "key": "Role_Source"
                    },
                    {
                        "key": "Role_Target"
                    },
                    {
                        "key": "Type",
                        "value": "I"
                    },
                    {
                        "key": "UUID",
                        "value": "a4853f84-fb40-11e8-a479-7a0060f0aa01"
                    },
                    {
                        "key": "Updated",
                        "value": "2010-03-22T17:36:03.000Z"
                    },
                    {
                        "key": "UpdatedBy",
                        "value": 100
                    }
                ]
            }
        ]
    }
}
```

#### Código de Respuestas:

- `200` cuando es exitoso
- `500` en caso de error