## Common Services

### GET api/common/country

Obtains country data.

#### Parameters

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `id` - country identifier.
- `uuid` - universally unique country identifier.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl 'https://api.erpya.com/api/adempiere/common/country?token=<token-generated-for-demo-api>&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885&id=1012546' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 100,
        "uuid": "a5653044-fb40-11e8-a479-7a0060f0aa01",
        "country_code": "US",
        "name": "United States",
        "description": "United States of America",
        "has_region": true,
        "region_name": "State",
        "display_sequence": "@C@, @R@ @P@",
        "is_address_lines_reverse": false,
        "capture_sequence": "@A1@ @A2@ @A3@ @A4@ @C@, @R@ @P@ @CO@",
        "display_sequence_local": "@C@, @R@ @P@",
        "is_address_lines_local_reverse": false,
        "expression_postal": "",
        "has_postal_add": false,
        "expression_phone": "(000) 000-0000",
        "media_size": "",
        "expression_bank_routing_no": "",
        "expression_bank_account_no": "",
        "language": "en_US",
        "allow_cities_out_of_list": true,
        "is_postcode_lookup": false,
        "currency": {
            "id": 100,
            "uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
            "iso_code": "USD",
            "currency_symbol": "$",
            "description": "US Dollar",
            "standard_precision": 2,
            "costing_precision": 4
        }
    }
}
```

#### Response Code:

- `200` when successful.
- `500` in case of error

### GET api/common/organizations

Gets the list of organizations to which the user has access according to his role.

#### Parameters

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `role_id` - id of current role.
- `role_uuid` - uuid of the current role.
- `page_size` - size of pagination lists.
- `page_token` - token the page number.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl 'https://api.erpya.com/api/adempiere/common/organizations?token=<token-generated-for-demo-api>&language=es&role_id=321&role_uuid=f855ca25-07b2-4760-aec6-676db1a5cb19' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
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
                "id": 0,
                "uuid": "a3e5c878-fb40-11e8-a479-7a0060f0aa01",
                "name": "*",
                "description": "All Organizations",
                "is_read_only": false,
                "duns": "0          ",
                "tax_id": "0",
                "phone": "",
                "phone2": "",
                "fax": "",
                "corporate_branding_image": ""
            }
        ]
    }
}
```

#### Response Code:

- `200` when successful
- `500` in case of error

### GET /api/common/warehouses

Gets the list of warehouses

#### Parameters

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `organization_id` - id of current organization.
- `organization_uuid` - uuid of the current organization.
- `page_size` - size of pagination lists.
- `page_token` - token the page number.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl 'https://api.erpya.com/api/adempiere/common/warehouses?token=<token-generated-for-demo-api>&language=es&organization_id=0&organization_uuid=a3e5c878-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
				"id": 0,
				"uuid": "a5f64584-fb40-11e8-a479-7a0060f0aa01",
				"name": "*",
				"description": "ALL WAREHOUSE"
			}
		]
	}
}
```
#### Response Code:

- `200` when successful
- `500` in case of error


### GET /api/common/languages

Gets the list of available languages.

#### Parameters

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - size of pagination lists.
- `page_token` - token the page number.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/common/languages?token=<token-generated-for-demo-api>&language=es' \
-X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
				"language": "en_US",
				"language_name": "English (USA)",
				"language_iso": "en",
				"country_code": "US",
				"is_base_language": true,
				"is_system_language": false,
				"is_decimal_point": true,
				"date_pattern": "MM/dd/yyyy",
				"time_pattern": "h:mm:ss a z"
			},
			{
				"language": "es_MX",
				"language_name": "Spanish (Mexico)",
				"language_iso": "es",
				"country_code": "MX",
				"is_base_language": false,
				"is_system_language": true,
				"is_decimal_point": true,
				"date_pattern": "dd/MM/yyyy",
				"time_pattern": "hh:mm:ss a z"
			}
		]
	}
}
```

#### Response Code:

- `200` when successful
- `500` in case of error


### GET /api/common/business-partner

Get a business partner

#### Parameters

- `token` - user token returned from `POST /api/user/login`.
- `language` - login language.
- `page_size` - page size (custom).
- `page_token` - page token (optional to get a specific page).
- `search_value` - search value.
- `value` - value.
- `name` - Name.
- `contact_name` - Contact name.
- `email` - Email address.
- `postal_code` - Postal code.
- `phone` - Phone.
- `table_name` - table name (required if not a query).
- `query` - custom query instead of SQL based table name.
- `where_clause` - where clause of the SQL-based query.
- `order_by_clause` - SQL-based order by clause.
- `limit` - record limit.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/common/business-partner?token=%3Ctoken-generated-for-demo-api%3E&language=es&uuid=9c5e65e6-8060-44bf-94ec-332578f7b5d7'
```
#### Response Body:
```json
{
    "code": 200,
    "result": {
        "uuid": "38a7e13e-a890-45cd-bdf5-bc9c9223bad3",
        "id": 1000271,
        "value": "V0000000100087999",
        "tax_id": "V00000001",
        "duns": "",
        "naics": "",
        "name": "olinda",
        "last_name": "jumenez",
        "description": ""
    }
}
```
#### Response Code:

- `200` when successful
- `500` in case of error


### POST /api/common/create-business-partner

Create Business Partner

#### Paràmetros

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.

#### Body of the Petitión:

- `value` - value.
- `tax_id` - tax identification number.
- `duns` - DUNS.
- `naics` - NAICS.
- `name` - First name.
- `last_name` - Last name.
- `description` - Description.
- `contact_name` - Contact name.
- `email` - E-mail.
- `phone` - Telephone.
- `business_partner_group_uuid` - Business partner group.
- `address1` - Address 1.
- `address2` - Address 2.
- `address3` - Address 3.
- `address4` - Address 4.
- `city_uuid`: UUID of the city.
- `city_name` - City name.
- `postal_code` - Postal code.
- `region_uuid`: UUID of the region.
- `region_name` - Region name.
- `country_uuid`: UUID of the country.
- `pos_uuid`: UUID of POS.


```json
{
    "value": "V1234567890",
    "name": "Test",
    "last_name": "Test 2",
    "e_mail": "test@gmail.com",
    "phone": "58+ 4145384801",
    "address1": "Paez",
    "address2": "Av Circuvalancio",
    "address3": "Urbanicacion Altos de Camorucos",
    "address4": "Lote 2 Garza Blanca",
    "city_uuid": "fbda5b92-820a-4d98-9917-d975e4b97baf",
    "city_name": "Acarigua",
    "postal_code": "3301",
    "region_uuid": "629317dd-88c2-419d-9c60-b116bd837a71",
    "region_name": "Portuguesa",
    "pos_uuid": "561359fb-e20a-4337-85d2-ff18538a94c5"
}
```

#### Example of a Call:

```bash
curl 'https://api.erpya.com/api/adempiere/common/create-business-partner?token=<token-generated-for-demo-api>&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"value":"V1234567890","name":"Test","last_name":"Test 2","e_mail":"test@gmail.com","phone":"58+ 4145384801","address1":"Paez","address2":"Av Circuvalancio","address3":"Urbanicacion Altos de Camorucos","address4":"Lote 2 Garza Blanca","city_uuid":"fbda5b92-820a-4d98-9917-d975e4b97baf","city_name":"Acarigua","postal_code":"3301","region_uuid":"629317dd-88c2-419d-9c60-b116bd837a71","region_name":"Portuguesa","pos_uuid":"561359fb-e20a-4337-85d2-ff18538a94c5"}'
    
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "uuid": "6b0d322a-5fb4-40de-a8af-b7d61fbe232c",
        "id": 1000258,
        "value": "V1234567890",
        "tax_id": "",
        "duns": "",
        "naics": "",
        "name": "Test",
        "last_name": "Test 2",
        "description": ""
    }
}
```
#### Response Code:

- `200` when successful
- `500` in case of error

### GET /api/common/business-partners

Get business partners

#### Paràmetros

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - size of pagination lists.
- `page_token` - token the page number.
- `search_value` - search value.
- `value` - value.
- `name` - name.
- `contact_name` - contact name.
- `email` - E-mail.
- `postal_code` - Postal code.
- `phone`: telephone.
- `table_name` - table name (Required if not a query).
- `query` - custom query instead of SQL based table name.
- `where_clause` - SQL based search where clause.
- `order_by_clause` - order by clause based on SQL.
- `limit` - record limit.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl 'https://api.erpya.com/api/adempiere/common/business-partners?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&name=Test'\
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    
```
#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 6,
        "next_page_token": "",
        "records": [
            {
                "uuid": "c0052032-a8f5-45f5-b0eb-df081c42f622",
                "id": 1000178,
                "value": "J123456789",
                "tax_id": "J123456789",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "Example",
                "description": ""
            },
            {
                "uuid": "325646c5-24d3-484c-85c1-6dd60111c2cb",
                "id": 1000173,
                "value": "V11111111",
                "tax_id": "V11111111",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "A",
                "description": ""
            },
            {
                "uuid": "e4771f8c-a56b-4ece-8fd2-3ba12fb87ac5",
                "id": 1000183,
                "value": "V3333333333",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "test",
                "last_name": "",
                "description": ""
            },
            {
                "uuid": "cae713fc-1bfe-4827-bc6d-287ca291afff",
                "id": 1000188,
                "value": "V123456789",
                "tax_id": "V123456789",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "",
                "description": ""
            },
            {
                "uuid": "1f1e8661-4292-4c4b-ab41-e998bd6ddd77",
                "id": 1000189,
                "value": "V123456782",
                "tax_id": "V123456782",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "Test2",
                "description": ""
            },
            {
                "uuid": "6b0d322a-5fb4-40de-a8af-b7d61fbe232c",
                "id": 1000258,
                "value": "V1234567890",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "Test 2",
                "description": ""
            }
        ]
    }
}
```
#### Response Code:

- `200` when successful
- `500` in case of error


### GET /api/common/conversion-rate

Get Conversion Rate

#### Paràmetros

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `page_size` - size of pagination lists.
- `page_token` - token the page number.
- `conversion_type_uuid` - conversion type reference UUID.
- `currency_from_uuid` - currency of the reference UUID.
- `currency_to_uuid` - Currency to reference UUID.
- `conversion_date` - Reference UUID of the conversion date.

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl 'https://api.erpya.com/api/adempiere/common/conversion-rate?token=<token-generated-for-demo-api>&language=es&conversion_type_uuid=40767cd6-b6cf-4058-ae34-42ea1ea3ce71&currency_from_uuid=a567befe-fb40-11e8-a479-7a0060f0aa01&currency_to_uuid=a5671df0-fb40-11e8-a479-7a0060f0aa01'\
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    
```
#### Response Body:

```json
{
	"code":200,
	"result":{
		"uuid":"a567befe-fb40-11e8-a479-7a0060f0aa01",
		"id":50001,
		"conversion_type_uuid":"a5671df0-fb40-11e8-a479-7a0060f0aa01"
		,"valid_from":0,
		"valid_to":0
	}
}
```
#### Response Code:

- `200` when successful
- `500` in case of error


## Common Services Api

### GET /api/common/api/entity

Get the entity from the table name and the id or uuid of the record.

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.
- `id` - id of entity
- `uuid` - uuid of entity
- `table_name` - table name of entity

#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'http://api.erpya.com/api/common/api/entity?token=%3Ctoken-generated-for-demo-api%3E&id=1000000&uuid=894a23a8-24e7-4ae1-a2e5-eda113607852&language=es&table_name=AD_Client'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 1000000,
        "uuid": "894a23a8-24e7-4ae1-a2e5-eda113607852",
        "table_name": "AD_Client",
        "attributes": [
            {
                "key": "AD_Client_ID",
                "value": 1000000
            },
            {
                "key": "AD_EMailConfig_ID",
                "value": 50001
            },
            {
                "key": "AD_Language",
                "value": "es_VE"
            },
            {
                "key": "AD_Org_ID",
                "value": 0
            },
            {
                "key": "AutoArchive",
                "value": "3"
            },
            {
                "key": "Created",
                "value": "2019-10-17T21:49:17.000Z"
            },
            {
                "key": "CreatedBy",
                "value": 100
            },
            {
                "key": "IsActive",
                "value": true
            },
            {
                "key": "IsCostImmediate",
                "value": false
            },
            {
                "key": "IsMultiLingualDocument",
                "value": true
            },
            {
                "key": "IsPostImmediate",
                "value": false
            },
            {
                "key": "IsServerEMail",
                "value": true
            },
            {
                "key": "IsUseASP",
                "value": true
            },
            {
                "key": "IsUseBetaFunctions",
                "value": true
            },
            {
                "key": "MMPolicy",
                "value": "F"
            },
            {
                "key": "Name",
                "value": "Compañía Estándar"
            },
            {
                "key": "RequestEMail",
                "value": "adempiere@lubosistemas.com.ve"
            },
            {
                "key": "RequestUser",
                "value": "adempiere@lubosistemas.com.ve"
            },
            {
                "key": "RequestUserPW",
                "value": "7yVsW7ZrZi9XghT"
            },
            {
                "key": "StoreArchiveOnFileSystem",
                "value": false
            },
            {
                "key": "StoreAttachmentsOnFileSystem",
                "value": false
            },
            {
                "key": "UUID",
                "value": "894a23a8-24e7-4ae1-a2e5-eda113607852"
            },
            {
                "key": "Updated",
                "value": "2021-04-07T14:30:20.000Z"
            },
            {
                "key": "UpdatedBy",
                "value": 1000019
            },
            {
                "key": "Value",
                "value": "Compañía Estándar"
            }
        ]
    }
}
```

#### Response Codes:

- `200` when successful
- `500` in case of error

### GET /api/common/api/entites

List Entities.

#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `page_size` - custom page size for the batch
- `page_token` - specific page token
- `language` - language for response translations.
- `columns` - columnas de la consulta
- `table_name` - nombre de la tabla (obligatorio si no es una consulta)
- `query` - consulta personalizada en lugar de un nombre de tabla basado en SQL
- `where_clause` - cláusula where de la búsqueda basada en SQL
- `order_by_clause` - cláusula order by basada en SQL
- `limit` - límite de registros
- `filters` - query filters

#### Structure `filters`
```json
    filters: [
        {
            "nombre_columna": "DocStatus",
            "operador": "EQUAL",
            "valor": "CO"
        },
        {
            "nombre_columna": "DateInvoiced",
            "operador": "BETWEEN",
            "valor": "2020-01-01",
            "valor_hasta": "2020-09-01"
        },
        {
            "nombre_columna": "C_DocType_ID",
            "operador": "IN",
            "valores": [
                1000000,
                1000562
            ]
        } 
    ] 

```
:::tip Note
- `value` - conditionvalue,
- `valueTo`-  condition value to,
- `valores` - condition values,
- `operador` - condición operador
:::


#### Body of the Petitión:

```json
null
```

#### Example of a Call:

```bash
curl --silent --location --request GET 'http://api.erpya.com/api/common/api/entites?token=%3Ctoken-generated-for-demo-api%3E&id=1000000&uuid=894a23a8-24e7-4ae1-a2e5-eda113607852&language=es&table_name=AD_Client'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "record_count": 3,
        "next_page_token": "",
        "records": [
            {
                "id": 0,
                "uuid": "8b2f5420-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "AD_Client",
                "attributes": [
                    {
                        "key": "AD_Client_ID",
                        "value": 0
                    },
                    {
                        "key": "AD_Language",
                        "value": "es_VE"
                    },
                    {
                        "key": "AD_Org_ID",
                        "value": 0
                    },
                    {
                        "key": "AutoArchive",
                        "value": "N"
                    },
                    {
                        "key": "Created",
                        "value": "2006-08-11T00:22:41.000Z"
                    },
                    {
                        "key": "CreatedBy",
                        "value": 0
                    },
                    {
                        "key": "Description",
                        "value": "System Client"
                    },
                    {
                        "key": "IsActive",
                        "value": true
                    },
                    {
                        "key": "IsCostImmediate",
                        "value": false
                    },
                    {
                        "key": "IsMultiLingualDocument",
                        "value": true
                    },
                    {
                        "key": "IsPostImmediate",
                        "value": false
                    },
                    {
                        "key": "IsServerEMail",
                        "value": false
                    },
                    {
                        "key": "IsUseASP",
                        "value": false
                    },
                    {
                        "key": "IsUseBetaFunctions",
                        "value": true
                    },
                    {
                        "key": "MMPolicy",
                        "value": "F"
                    },
                    {
                        "key": "Name",
                        "value": "System"
                    },
                    {
                        "key": "RequestEMail",
                        "value": "you @ company.org"
                    },
                    {
                        "key": "RequestFolder",
                        "value": "request"
                    },
                    {
                        "key": "RequestUser",
                        "value": "you"
                    },
                    {
                        "key": "RequestUserPW",
                        "value": "yourpwd"
                    },
                    {
                        "key": "StoreArchiveOnFileSystem",
                        "value": false
                    },
                    {
                        "key": "StoreAttachmentsOnFileSystem",
                        "value": false
                    },
                    {
                        "key": "UUID",
                        "value": "8b2f5420-fb40-11e8-a479-7a0060f0aa01"
                    },
                    {
                        "key": "Updated",
                        "value": "2021-03-14T16:33:27.000Z"
                    },
                    {
                        "key": "UpdatedBy",
                        "value": 1000032
                    },
                    {
                        "key": "Value",
                        "value": "SYSTEM"
                    }
                ]
            },
            {
                "id": 11,
                "uuid": "4f44d9c4-93c7-4fd5-aa99-72412b0cc0bc",
                "table_name": "AD_Client",
                "attributes": [
                    {
                        "key": "AD_Client_ID",
                        "value": 11
                    },
                    {
                        "key": "AD_EMailConfig_ID",
                        "value": 50000
                    },
                    {
                        "key": "AD_Language",
                        "value": "en_US"
                    },
                    {
                        "key": "AD_Org_ID",
                        "value": 0
                    },
                    {
                        "key": "AutoArchive",
                        "value": "N"
                    },
                    {
                        "key": "Created",
                        "value": "2006-08-11T00:22:41.000Z"
                    },
                    {
                        "key": "CreatedBy",
                        "value": 0
                    },
                    {
                        "key": "Description",
                        "value": "GardenWorld"
                    },
                    {
                        "key": "IsActive",
                        "value": true
                    },
                    {
                        "key": "IsCostImmediate",
                        "value": true
                    },
                    {
                        "key": "IsMultiLingualDocument",
                        "value": false
                    },
                    {
                        "key": "IsPostImmediate",
                        "value": false
                    },
                    {
                        "key": "IsServerEMail",
                        "value": false
                    },
                    {
                        "key": "IsUseASP",
                        "value": false
                    },
                    {
                        "key": "IsUseBetaFunctions",
                        "value": true
                    },
                    {
                        "key": "MMPolicy",
                        "value": "F"
                    },
                    {
                        "key": "ModelValidationClasses",
                        "value": "compiere.model.MyValidator"
                    },
                    {
                        "key": "Name",
                        "value": "GardenWorld"
                    },
                    {
                        "key": "RequestEMail",
                        "value": "you @ company.org"
                    },
                    {
                        "key": "RequestFolder",
                        "value": "request"
                    },
                    {
                        "key": "RequestUser",
                        "value": "you"
                    },
                    {
                        "key": "RequestUserPW",
                        "value": "yourpwd"
                    },
                    {
                        "key": "StoreArchiveOnFileSystem",
                        "value": false
                    },
                    {
                        "key": "StoreAttachmentsOnFileSystem",
                        "value": false
                    },
                    {
                        "key": "UUID",
                        "value": "4f44d9c4-93c7-4fd5-aa99-72412b0cc0bc"
                    },
                    {
                        "key": "Updated",
                        "value": "2017-08-01T01:36:59.000Z"
                    },
                    {
                        "key": "UpdatedBy",
                        "value": 0
                    },
                    {
                        "key": "Value",
                        "value": "GardenWorld"
                    }
                ]
            },
            {
                "id": 1000000,
                "uuid": "894a23a8-24e7-4ae1-a2e5-eda113607852",
                "table_name": "AD_Client",
                "attributes": [
                    {
                        "key": "AD_Client_ID",
                        "value": 1000000
                    },
                    {
                        "key": "AD_EMailConfig_ID",
                        "value": 50001
                    },
                    {
                        "key": "AD_Language",
                        "value": "es_VE"
                    },
                    {
                        "key": "AD_Org_ID",
                        "value": 0
                    },
                    {
                        "key": "AutoArchive",
                        "value": "3"
                    },
                    {
                        "key": "Created",
                        "value": "2019-10-17T21:49:17.000Z"
                    },
                    {
                        "key": "CreatedBy",
                        "value": 100
                    },
                    {
                        "key": "IsActive",
                        "value": true
                    },
                    {
                        "key": "IsCostImmediate",
                        "value": false
                    },
                    {
                        "key": "IsMultiLingualDocument",
                        "value": true
                    },
                    {
                        "key": "IsPostImmediate",
                        "value": false
                    },
                    {
                        "key": "IsServerEMail",
                        "value": true
                    },
                    {
                        "key": "IsUseASP",
                        "value": true
                    },
                    {
                        "key": "IsUseBetaFunctions",
                        "value": true
                    },
                    {
                        "key": "MMPolicy",
                        "value": "F"
                    },
                    {
                        "key": "Name",
                        "value": "Compañía Estándar"
                    },
                    {
                        "key": "RequestEMail",
                        "value": "adempiere@lubosistemas.com.ve"
                    },
                    {
                        "key": "RequestUser",
                        "value": "adempiere@lubosistemas.com.ve"
                    },
                    {
                        "key": "RequestUserPW",
                        "value": "7yVsW7ZrZi9XghT"
                    },
                    {
                        "key": "StoreArchiveOnFileSystem",
                        "value": false
                    },
                    {
                        "key": "StoreAttachmentsOnFileSystem",
                        "value": false
                    },
                    {
                        "key": "UUID",
                        "value": "894a23a8-24e7-4ae1-a2e5-eda113607852"
                    },
                    {
                        "key": "Updated",
                        "value": "2021-04-07T14:30:20.000Z"
                    },
                    {
                        "key": "UpdatedBy",
                        "value": 1000019
                    },
                    {
                        "key": "Value",
                        "value": "Compañía Estándar"
                    }
                ]
            }
        ]
    }
}
```

#### Response Codes:

- `200` when successful
- `500` in case of error

### POST /api/common/api/create

Create Entity. Called when saving a new record from the application, it returns the data of the created record.
#### Parameters:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.

#### Body of the Petitión:

```json
{
    "table_name": "AD_RelationType",
    "attributes": [
        {
            "key": "AD_RelationType_ID",
            "value": 0
        },
        {
            "key": "AD_Client_ID",
            "value": 1000000
        },
        {
            "key": "AD_Org_ID",
            "value": 1000000
        },
        {
            "key": "Name",
            "value": "e"
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
            "key": "Type",
            "value": "I"
        }
    ]
}
```

#### Example of a Call:

```bash
curl --silent --location --request POST 'http://api.erpya.com/api/common/api/create?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "table_name": "AD_RelationType",
    "attributes": [
        {
            "key": "AD_RelationType_ID",
            "value": 0
        },
        {
            "key": "AD_Client_ID",
            "value": 1000000
        },
        {
            "key": "AD_Org_ID",
            "value": 1000000
        },
        {
            "key": "Name",
            "value": "e"
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
            "key": "Type",
            "value": "I"
        }
    ]
}'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 1000000,
        "uuid": "623ed7a8-378b-44c8-b1d9-de8be1914357",
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
                "value": "2021-05-12T21:06:06.000Z"
            },
            {
                "key": "CreatedBy",
                "value": 1000032
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
                "value": "e"
            },
            {
                "key": "Type",
                "value": "I"
            },
            {
                "key": "UUID",
                "value": "623ed7a8-378b-44c8-b1d9-de8be1914357"
            },
            {
                "key": "Updated",
                "value": "2021-05-12T21:06:06.000Z"
            },
            {
                "key": "UpdatedBy",
                "value": 1000032
            }
        ]
    }
}
```

#### Response Codes:

- `200` when successful
- `500` in case of error


### GET /api/common/api/update

It is used to update the entity

#### Parameters POS:

- `token` - user token returned from `POST /api/user/login`.
- `language` - language for response translations.


#### Body of the Petitión:

```json
{
    "table_name": "AD_RelationType",
    "uuid": "7b11bbce-643a-4c7c-8a20-9d07ae7f79f3",
    "id": 1000001,
    "attributes": [
        {
            "key": "Name",
            "value": "Test"
        }
    ]
}
```

#### Example of a Call:

```bash
curl --silent --location --request POST 'http://api.erpya.com/api/common/api/update?language=es&token=%3Ctoken-generated-for-demo-api%3E' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 1000000,
    "uuid": "623ed7a8-378b-44c8-b1d9-de8be1914357",
    "table_name": "AD_RelationType",
    "attributes": [
        {
            "key": "Name",
            "value": "Test2"
        }
    ]
}'
```

#### Response Body:

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

#### Response Codes:

- `200` when successful
- `500` in case of error

