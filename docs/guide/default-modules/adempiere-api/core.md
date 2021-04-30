## Core Service Provider

### GET /adempiere-api/core/country

Get Country information.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### A Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/core/country?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885' \
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


### POST /adempiere-api/core/list-organizations

Get a list of organizations of user role allowed.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
{
	"role_id": 321,
    "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/core/list-organizations?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&page_size=50&page_token=47e1c737-418d-4340-b552-797860bd125f-3' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"role_uuid":"f855ca25-07b2-4760-aec6-676db1a5cb19"}'
```

#### Response Body:

```json
{
    "code":200,
	"result": {
		"record_count": 2,
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
				"fax": ""
			},
			{
				"id": 1000000,
				"uuid": "d97027fd-4cd5-445e-8fd8-ef5d3f7959b4",
				"name": "Compañía Estándar",
				"description": "",
				"is_read_only": false,
				"duns": "?          ",
				"tax_id": "J075537106",
				"phone": "02443213777",
				"phone2": "04241006446",
				"fax": ""
			}
		]
	}
}
```


### POST /adempiere-api/core/list-warehouses

Get a list of warehouses from current organization.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
{
	"organization_id": 432,
    "organization_uuid": "a3e5c878-fb40-11e8-a479-7a0060f0aa01"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/core/list-warehouses?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&page_size=50&page_token=47e1c737-418d-4340-b552-797860bd125f-3' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"organization_uuid":"a3e5c878-fb40-11e8-a479-7a0060f0aa01"}'
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


### POST /adempiere-api/core/list-languages

Get a list of available languages.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```
null
```

#### Call example:

```bash
curl --silent --location --request GET 'https://api.erpya.com/adempiere-api/core/country?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es?' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 1073741,
    "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"
}'
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


### POST /adempiere-api/core/get-business-partner

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
{
	"role_id": 321,
  "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19",
	"searchValue": "",
	"value": "",
	"name": "",
	"contact_name": "",
	"email": "",
	"postal_code": "",
	"phone": "",
	"table_name": "",
	"filters": [
		{
			"column_name": "AD_Client_ID",
			"value": 0,
		},
		{
			"column_name": "AD_Org_ID",
			"values": [
				0,
				1234
			]
		}
	],
	"columns": [],
	//  Custom Query
	"query": "",
	"where_clause": "",
	"order_by_clause": "",
	"limit": ""
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/core/get-business-partner?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```
