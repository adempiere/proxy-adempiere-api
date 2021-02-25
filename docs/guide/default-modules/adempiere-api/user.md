## User service

### POST /adempiere-api/user/login

Call a login from ADempiere using default security of ADempiere server based on role allocated to user.

#### Parameters:

```
null
```

#### Request Body:

```json
{
    "username": "info@erpya.com",
    "password": "TopSecretPassword"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/login' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"username":"info@erpya.com","password":"TopSecretPassword"}'
```

#### Response Body:

```json
{
    "code": 200,
    "result": "xu3h02nd67yq0gapyj8x3kpqwzcy02om"
}
```

#### Response codes:

- `200` ok response
- `500` a error is throw



### GET /adempiere-api/user/info

Get default role for user. Is called after login `POST /adempiere-api/user/login`.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.


#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/info&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

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

#### Response codes:

- `200` ok response
- `500` a error is throw


### GET /adempiere-api/user/session

Get information about current session. Is called after login `POST /adempiere-api/user/login`.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.


#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/session&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 1017271,
        "uuid": "xu3h02nd67yq0gapyj8x3kpqwzcy02om",
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

#### Response codes:

- `200` ok response
- `500` a error is throw




### GET /adempiere-api/user/roles

Get a complete list of roles allocated for current user.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/roles&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

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

#### Response codes:

- `200` ok response
- `500` a error is throw




### GET /adempiere-api/user/menu

Get Default tree for current session.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/menu&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

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

#### Response codes:

- `200` ok response
- `500` a error is throw

### POST /adempiere-api/user/change-role

Make a change of role and current session is expired automatically.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.


#### Request Body:

```json
{
	"organization": "a3e5c878-fb40-11e8-a479-7a0060f0aa01",
	"role": "a48d2596-fb40-11e8-a479-7a0060f0aa01"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/session&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"role":"a48d2596-fb40-11e8-a479-7a0060f0aa01","organization":"a3e5c878-fb40-11e8-a479-7a0060f0aa01"}'
```

#### Response Body:

```json
{
	"code": 200,
	"result": {
		"id": 1017302,
		"uuid": "98146957-a41a-4ef7-bcf5-b368310ef08c",
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

#### Response codes:

- `200` ok response
- `500` a error is throw


### POST /adempiere-api/user/logout

Logout from current session, after it is need make login for get any request.

#### Parameters:

```
null
```

#### Request Body:

```json
{
    "token": "98146957-a41a-4ef7-bcf5-b368310ef08c"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/user/logout' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"token":"98146957-a41a-4ef7-bcf5-b368310ef08c"}'
```

#### Response Body:

```json
{
	"code": 200,
	"result": "Ok"
}
```

#### Response codes:

- `200` ok response
- `500` a error is throw
