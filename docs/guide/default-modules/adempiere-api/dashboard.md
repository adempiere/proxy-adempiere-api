## Dashboarding Service

### POST /adempiere-api/dashboard/list-dashboards

Get a complete list of allowed dashboards for current role or user.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
{
    "role_id": 1000000,
    "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dashboard/list-dashboards?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"role_id":1000000,"role_uuid":"f855ca25-07b2-4760-aec6-676db1a5cb19"}'
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
				"window_uuid": "",
				"browser_uuid": "",
				"dashboard_name": "Favorites (User)",
				"dashboard_description": "User's Favorites Menu Display",
				"dashboard_html": "",
				"column_no": 0,
				"line_no": 1,
				"is_collapsible": true,
				"is_open_by_default": true,
				"is_event_required": false,
				"file_name": "userfavorites"
			},
			{
				"window_uuid": "",
				"browser_uuid": "",
				"dashboard_name": "Recent Items",
				"dashboard_description": "Recent items",
				"dashboard_html": "",
				"column_no": 0,
				"line_no": 2,
				"is_collapsible": true,
				"is_open_by_default": true,
				"is_event_required": false,
				"file_name": "recentItems"
			}
		]
	}
}
```

#### Response codes:

- `200` respose ok
- `500` a error is throw


### POST /adempiere-api/dashboard/list-recent-items

Get a list of recent items for current user.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
{
    "user_uuid": "901d9a74-6334-4309-aa8a-6d5b39d8ceb1",
    "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19",
    "current_session": true
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/logs/list-recent-items?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"user_uuid":"5adc9357-9158-40fe-86f1-4ce383586f5b","role_uuid":"f855ca25-07b2-4760-aec6-676db1a5cb19","current_session":true}'
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
				"menu_uuid": "8e50f4ec-fb40-11e8-a479-7a0060f0aa01",
				"menu_name": "Session Audit",
				"menu_description": "Audit of User Sessions",
				"window_uuid": "a521a9e6-fb40-11e8-a479-7a0060f0aa01",
				"tab_uuid": "",
				"table_id": 0,
				"table_name": "",
				"id": 0,
				"uuid": "",
				"display_name": "Session Audit",
				"updated": "2020-10-07T16:14:03.959Z",
				"reference_uuid": "a521a9e6-fb40-11e8-a479-7a0060f0aa01",
				"action": "W"
			},
			{
				"menu_uuid": "8e513a92-fb40-11e8-a479-7a0060f0aa01",
				"menu_name": "User",
				"menu_description": "Maintain Users of the system",
				"window_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
				"tab_uuid": "a4a05e7c-fb40-11e8-a479-7a0060f0aa01",
				"table_id": 114,
				"table_name": "AD_User",
				"id": 1000407,
				"uuid": "901d9a74-6334-4309-aa8a-6d5b39d8ceb1",
				"display_name": "User: _Store Administrator",
				"updated": "2020-10-06T20:52:57.529Z",
				"reference_uuid": "a5216710-fb40-11e8-a479-7a0060f0aa01",
				"action": "W"
			}
		]
	}
}
```

#### Response codes:

- `200` respose ok
- `500` a error is throw


### POST /adempiere-api/dashboard/list-pending-documents

Get a list of pending documents for user or role.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `page_size` - default page size.
- `page_token` - page token for specific page.

#### Request Body:

```json
{
    "user_uuid": "901d9a74-6334-4309-aa8a-6d5b39d8ceb1",
    "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19"
}
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dashboard/list-pending-documents?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"user_uuid":"901d9a74-6334-4309-aa8a-6d5b39d8ceb1","role_uuid":"f855ca25-07b2-4760-aec6-676db1a5cb19"}'
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
				"window_uuid": "",
				"form_uuid": "",
				"document_name": "Órdenes de Venta Pendientes por Facturar",
				"document_description": "",
				"sequence": 0,
				"record_count": 81,
				"criteria": {
					"table_name": "C_Order",
					"query": "",
					"where_clause": "C_Order.IsSOTrx='Y' \nAND C_Order.DocStatus = 'CO'\nAND EXISTS(SELECT 1 \n    FROM C_OrderLine ol \n    WHERE ol.C_Order_ID = C_Order.C_Order_ID\n    AND ol.QtyOrdered <> ol.QtyInvoiced\n)",
					"order_by_clause": "",
					"reference_uuid": "",
					"filters": [],
					"values": [],
					"order_by_columns": [],
					"limit": 0
				}
			},
			{
				"window_uuid": "",
				"form_uuid": "",
				"document_name": "Entregas No Válidas",
				"document_description": "",
				"sequence": 0,
				"record_count": 1,
				"criteria": {
					"table_name": "M_InOut",
					"query": "",
					"where_clause": "M_InOut.DocStatus = 'IN'\nAND M_InOut.IsSOTrx = 'Y'",
					"order_by_clause": "",
					"reference_uuid": "",
					"filters": [],
					"values": [],
					"order_by_columns": [],
					"limit": 0
				}
			}
		]
	}
}
```

#### Response codes:

- `200` respose ok
- `500` a error is throw
