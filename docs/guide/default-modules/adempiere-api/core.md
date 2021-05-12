## Core Service Provider

### GET api/common/country

Get Country information.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```json
null
```

#### A Call example:

```bash
curl 'https://api.erpya.com/api/common/country?token=<token-generated-for-demo-api>&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885&id=1012546' \
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
        "uuid": "901bff3b-6f85-4bbf-b068-a5b273866885",
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
            "uuid": "b108a3c4-cb99-41ef-b5c3-06adbf649b3b",
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

Get a list of organizations of user role allowed.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `role_id` - role id
- `role_uuid` - role uuid
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/api/common/organizations?token=<token-generated-for-demo-api>&language=es&role_id=321&role_uuid=f855ca25-07b2-4760-aec6-676db1a5cb19' \
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

- `200` when successful.
- `500` in case of error


### GET /api/common/warehouses

Get a list of warehouses from current organization.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `organization_id` - organization id.
- `organization_uuid` - organization uuid.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/api/common/warehouses?token=<token-generated-for-demo-api>&language=es&organization_id=0&organization_uuid=a3e5c878-fb40-11e8-a479-7a0060f0aa01' \
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

- `200` when successful.
- `500` in case of error


### GET /api/common/languages

Get a list of available languages.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
null
```

#### Call example:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/common/languages?token=<token-generated-for-demo-api>&language=es' \
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

- `200` when successful.
- `500` in case of error


### GET /api/common/business-partner

Get a specific business partner based on a query criteria or values.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `searchValue`- find by Value, TaxID or Name
- `value` - find by value of BP
- `name` - find by Name
- `contact_name` - find by contact name
- `email` - find by email
- `postal_code` - find by postal code of address
- `phone` - find by phone
- `table_name` - Used for custom query
- `filters` - a array with the follow structure:
```json
filters:
[
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
- `column_name` - name of column for criteria
- `value` - value of filter
- `value_to` - value to (used when a operator is BETWEEN)
- `values` - array with values (used for a operator like IN)
- `operator` - operator
- `query` - a custom query for get result
- `where_clause` - where clause for specific filter
- `order_by_clause` - order by clause
- `limit` - limit of search

#### Request Body:

```json
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/api/common/business-partner?token=<token-generated-for-demo-api>&language=es&uuid=9c5e65e6-8060-44bf-94ec-332578f7b5d7' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### POST /api/common/create-business-partner

Create Business Partner

#### Parameters:

- `value` - value.
- `tax_id` - tax identification number.
- `duns` - DUNS.
- `naics` - NAICS.
- `name` - Name.
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
- `token` - user token returned from `POST /adempiere-api/user/login`.
- `language` - language for response translations.

#### Request Body:

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

#### Call Example:

```bash
curl 'https://api.erpya.com/api/common/create-business-partner?token=<token-generated-for-demo-api>&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"value":"V1234567890","name":"Test","last_name":"Test 2","e_mail":"test@gmail.com","phone":"58+ 4145384801","address1":"Paez","address2":"Av Circuvalancio","address3":"Urbanicacion Altos de Camorucos","address4":"Lote 2 Garza Blanca","city_uuid":"fbda5b92-820a-4d98-9917-d975e4b97baf","city_name":"Acarigua","postal_code":"3301","region_uuid":"629317dd-88c2-419d-9c60-b116bd837a71","region_name":"Portuguesa","pos_uuid":"561359fb-e20a-4337-85d2-ff18538a94c5"}'
    
```
#### Response Body:

```json
{
    "``` code": 200,
    "result": {
        "uuid": "6b0d322a-5fb4-40de-a8af-b7d61fbe232c",
        "id": 1000258,
        "value": "v1234567890",
        "tax_id": "",
        "duns": "",
        "naics": "",
        "name": "test",
        "last_name": "Test 2",
        "description": ""
    }
}
```
#### Response Code:

- `200` when successful.
- `500` in case of error

### GET /api/common/business-partners

Get business partners

#### Parameters:

- `token` - user token returned from `POST /adempiere-api/user/login`.
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

#### Request body:

```json
null
```

#### Call Example:

```bash
curl 'https://api.erpya.com/api/common/business-partners?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&name=Test'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    
```
#### Response Body:

``` json
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
                "name": "test",
                "last_name": "Example",
                "description": ""
            },
            {
                "uuid": "325646c5-24d3-484c-85c1-6dd60111c2cb",
                }, { "id": 1000173,
                "value": "v1111111111",
                "tax_id": "V1111111111",
                "duns": "",
                "naics": "",
                "name": "test",
                "last_name": "A",
                "description": ""
            },
            {
                "uuid": "e4771f8c-a56b-4ece-8fd2-3ba12fb87ac5",
                }, { "id": 1000183,
                "value": "v3333333333333333",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "test",
                "last_name": "",
                "description": ""
            },
            {
                "uuid": "cae713fc-1bfe-4827-bc6d-287ca291afff",
                }, { "id": 1000188,
                }, "value": "v123456789",
                "tax_id": "V123456789",
                "duns": "",
                "naics": "",
                "name": "test",
                "last_name": "",
                "description": ""
            },
            {
                "uuid": "1f1e8661-4292-4c4b-ab41-e998bd6ddd77",
                }, { "id": "1000189",
                "value": "v123456782",
                "tax_id": "V123456782",
                "duns": "",
                "naics": "",
                "name": "test",
                "last_name": "Test2",
                "description": ""
            },
            {
                "uuid": "6b0d322a-5fb4-40de-a8af-b7d61fbe232c",
                }, { "id": 1000258,
                "value": "v1234567890",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "test",
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

#### POST parameters:
- `token` - user token returned from `POST /adempiere-api/user/login`.
- `language` - language for response translations.
- `page_size` - size of pagination lists.
- `page_token` - token the page number.
- `conversion_type_uuid` - conversion type reference UUID.
- `currency_from_uuid` - currency of the reference UUID.
- `currency_to_uuid` - Currency to reference UUID.
- `conversion_date` - Reference UUID of the conversion date.
#### Request Body:

```json
null
```

#### Call Example:

```bash
curl 'https://api.erpya.com/api/common/conversion-rate?token=<token-generated-for-demo-api>&language=es&conversion_type_uuid=40767cd6-b6cf-4058-ae34-42ea1ea3ce71&currency_from_uuid=a567befe-fb40-11e8-a479-7a0060f0aa01&currency_to_uuid=a5671df0-fb40-11e8-a479-7a0060f0aa01'\
    -X GET
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    
```
#### Response Body:

```json
{
	"``` code":200,
	"result":{
		"uuid":"a567befe-fb40-11e8-a479-7a0060f0aa01",
		"id":50001,
		"conversion_type_uuid":"a5671df0-fb40-11e8-a479-7a0060f0aa01"
		, "valid_from":0,
		"valid_to":0
	}
}
```
#### Response Code:

- `200` when successful
- `500` in case of error
