## Dictionary Service

### GET /adempiere-api/dictionary/window

Get all meta-data of window, tab and fields.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dictionary/window?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=a52192bc-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

```json
{
	"code": 200,
	"result": {
		"id": 53102,
		"uuid": "a52192bc-fb40-11e8-a479-7a0060f0aa01",
		"name": "Relation Type",
		"description": "",
		"help": "",
		"is_active": true,
		"is_sales_transaction": true,
		"window_type": "M",
		"tabs": [
			{
				"id": 53285,
				"uuid": "a4a25ff6-fb40-11e8-a479-7a0060f0aa01",
				"name": "Relation Type",
				"description": "",
				"help": "",
				"table_name": "AD_RelationType",
				"sequence": 10,
				"tab_level": 0,
				"is_active": true,
				"is_single_row": false,
				"is_advanced_tab": false,
				"is_has_tree": false,
				"is_info_tab": false,
				"is_sort_tab": false,
				"is_translation_tab": false,
				"is_read_only": false,
				"is_insert_record": true,
				"is_view": false,
				"is_deleteable": true,
				"is_document": false,
				"is_change_log": false,
				"access_level": 7,
				"link_column_name": "",
				"sort_order_column_name": "",
				"sort_yes_no_column_name": "",
				"parent_column_name": "",
				"display_logic": "",
				"commit_warning": "",
				"query": "SELECT AD_RelationType.*, (SELECT NVL(AD_Client.Name,'') FROM AD_Client WHERE AD_RelationType.AD_Client_ID=AD_Client.AD_Client_ID) AS \"DisplayColumn_AD_Client_ID\", (SELECT NVL(AD_Org.Name,'') FROM AD_Org WHERE AD_RelationType.AD_Org_ID=AD_Org.AD_Org_ID) AS \"DisplayColumn_AD_Org_ID\", Type_AD_Ref_List.Name AS \"DisplayColumn_Type\", AD_Reference_Source_ID_AD_Reference.Name AS \"DisplayColumn_AD_Reference_Source_ID\", Role_Source_AD_Ref_List.Name AS \"DisplayColumn_Role_Source\", AD_Reference_Target_ID_AD_Reference.Name AS \"DisplayColumn_AD_Reference_Target_ID\", Role_Target_AD_Ref_List.Name AS \"DisplayColumn_Role_Target\" FROM AD_RelationType AS AD_RelationType LEFT JOIN AD_Ref_List AS Type_AD_Ref_List ON(Type_AD_Ref_List.Value = AD_RelationType.Type AND Type_AD_Ref_List.AD_Reference_ID = 53332) LEFT JOIN AD_Reference AS AD_Reference_Source_ID_AD_Reference ON(AD_Reference_Source_ID_AD_Reference.AD_Reference_ID = AD_RelationType.AD_Reference_Source_ID) LEFT JOIN AD_Ref_List AS Role_Source_AD_Ref_List ON(Role_Source_AD_Ref_List.Value = AD_RelationType.Role_Source AND Role_Source_AD_Ref_List.AD_Reference_ID = 53331) LEFT JOIN AD_Reference AS AD_Reference_Target_ID_AD_Reference ON(AD_Reference_Target_ID_AD_Reference.AD_Reference_ID = AD_RelationType.AD_Reference_Target_ID) LEFT JOIN AD_Ref_List AS Role_Target_AD_Ref_List ON(Role_Target_AD_Ref_List.Value = AD_RelationType.Role_Target AND Role_Target_AD_Ref_List.AD_Reference_ID = 53331)",
				"where_clause": "",
				"order_by_clause": "",
				"parent_tab_uuid": "",
				"processes": [],
				"fields": [
					{
						"id": 58065,
						"uuid": "8d85bffc-fb40-11e8-a479-7a0060f0aa01",
						"name": "Client",
						"description": "Client/Tenant for this installation.",
						"help": "A Client is a company or a legal entity. You cannot share data between Clients. Tenant is a synonym for Client.",
						"sequence": 10,
						"column_name": "AD_Client_ID",
						"element_name": "AD_Client_ID",
						"is_displayed": true,
						"is_displayed_grid": true,
						"is_read_only": false,
						"is_allow_copy": false,
						"is_encrypted": false,
						"is_same_line": false,
						"is_heading": false,
						"is_field_only": false,
						"is_quick_entry": false,
						"is_mandatory": true,
						"is_key": false,
						"is_parent": false,
						"is_updateable": false,
						"is_identifier": false,
						"is_allow_logging": true,
						"is_selection_column": false,
						"is_range": false,
						"is_always_updateable": false,
						"is_translated": false,
						"identifier_sequence": 0,
						"display_logic": "",
						"display_type": 19,
						"default_value": "@#AD_Client_ID@",
						"read_only_logic": "",
						"mandatory_logic": "",
						"callout": "",
						"column_sql": "",
						"v_format": "",
						"value_min": "",
						"value_max": "",
						"format_pattern": "",
						"reference": {
							"table_name": "AD_Client",
							"key_column_name": "AD_Client.AD_Client_ID",
							"display_column_name": "",
							"query": "SELECT AD_Client.AD_Client_ID,NULL,NVL(AD_Client.Name,'-1'),AD_Client.IsActive, AD_Client.UUID FROM AD_Client WHERE AD_Client.AD_Client_ID <> 0 ORDER BY 3",
							"direct_query": "SELECT AD_Client.AD_Client_ID,NULL,NVL(AD_Client.Name,'-1'),AD_Client.IsActive, AD_Client.UUID FROM AD_Client WHERE AD_Client.AD_Client_ID=?",
							"validation_code": "AD_Client.AD_Client_ID <> 0",
							"zoom_windows": [
								{
									"id": 109,
									"uuid": "a521762e-fb40-11e8-a479-7a0060f0aa01",
									"name": "Client",
									"description": "Maintain Clients/Tenants",
									"is_sales_transaction": true,
									"is_active": false
								}
							]
						},
						"is_query_criteria": false,
						"is_order_by": false,
						"seq_no_grid": 0,
						"sort_no": 0,
						"is_info_only": false,
						"is_active": true,
						"default_value_to": "",
						"field_length": 10
					}
				]
			}
		]
	}
}
```


### GET /adempiere-api/dictionary/browser

Get meta-data from browser. Include fields, where clause, sorting and complete query.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### Call example:

```bash
curl --silent --location --request GET 'https://api.erpya.com/adempiere-api/dictionary/browser?uuid=91fa2410-12c9-11e9-865a-17caaf9b4956&token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'
```

#### Response Body:

```json
{
	"code": 200,
	"result": {
		"id": 53924,
		"uuid": "8aaefbc2-fb40-11e8-a479-7a0060f0aa01",
		"value": "SB_Order_Process",
		"name": "Process Orders of selection",
		"description": "",
		"help": "",
		"access_level": 3,
		"query": "SELECT o.Processing AS \"O_Processing\",o.C_Opportunity_ID AS \"O_C_Opportunity_ID\",o.DocStatus AS \"O_DocStatus\",o.DropShip_BPartner_ID AS \"O_DropShip_BPartner_ID\",o.DropShip_Location_ID AS \"O_DropShip_Location_ID\",o.DropShip_User_ID AS \"O_DropShip_User_ID\",o.FreightAmt AS \"O_FreightAmt\",o.IsSelected AS \"O_IsSelected\",o.CopyFrom AS \"O_CopyFrom\",o.IsDelivered AS \"O_IsDelivered\",o.Bill_Location_ID AS \"O_Bill_Location_ID\",o.Pay_BPartner_ID AS \"O_Pay_BPartner_ID\",o.AmountRefunded AS \"O_AmountRefunded\",o.Bill_User_ID AS \"O_Bill_User_ID\",o.Pay_Location_ID AS \"O_Pay_Location_ID\",o.C_Activity_ID AS \"O_C_Activity_ID\",o.C_BPartner_ID AS \"O_C_BPartner_ID\",o.PaymentRule AS \"O_PaymentRule\",o.Posted AS \"O_Posted\",o.DocumentNo AS \"O_DocumentNo\",o.DateOrdered AS \"O_DateOrdered\",o.M_Shipper_ID AS \"O_M_Shipper_ID\",o.M_Warehouse_ID AS \"O_M_Warehouse_ID\",o.OrderType AS \"O_OrderType\",o.AD_Client_ID AS \"O_AD_Client_ID\",o.AD_Org_ID AS \"O_AD_Org_ID\",o.AD_OrgTrx_ID AS \"O_AD_OrgTrx_ID\",o.AD_User_ID AS \"O_AD_User_ID\",o.AmountTendered AS \"O_AmountTendered\",o.Bill_BPartner_ID AS \"O_Bill_BPartner_ID\",o.Weight AS \"O_Weight\",o.C_BPartner_Location_ID AS \"O_C_BPartner_Location_ID\",o.C_Campaign_ID AS \"O_C_Campaign_ID\",o.C_CashLine_ID AS \"O_C_CashLine_ID\",o.C_Charge_ID AS \"O_C_Charge_ID\",o.C_ConversionType_ID AS \"O_C_ConversionType_ID\",o.C_Currency_ID AS \"O_C_Currency_ID\",o.C_DocType_ID AS \"O_C_DocType_ID\",o.C_DocTypeTarget_ID AS \"O_C_DocTypeTarget_ID\",o.ChargeAmt AS \"O_ChargeAmt\",o.C_Order_ID AS \"O_C_Order_ID\",o.C_OrderSource_ID AS \"O_C_OrderSource_ID\",o.C_Payment_ID AS \"O_C_Payment_ID\",o.C_PaymentTerm_ID AS \"O_C_PaymentTerm_ID\",o.C_POS_ID AS \"O_C_POS_ID\",o.C_Project_ID AS \"O_C_Project_ID\",o.Created AS \"O_Created\",o.CreatedBy AS \"O_CreatedBy\",o.DateAcct AS \"O_DateAcct\",o.DatePrinted AS \"O_DatePrinted\",o.DatePromised AS \"O_DatePromised\",o.DeliveryRule AS \"O_DeliveryRule\",o.DeliveryViaRule AS \"O_DeliveryViaRule\",o.Description AS \"O_Description\",o.DocAction AS \"O_DocAction\",o.FreightCostRule AS \"O_FreightCostRule\",o.GrandTotal AS \"O_GrandTotal\",o.InvoiceRule AS \"O_InvoiceRule\",o.UpdatedBy AS \"O_UpdatedBy\",o.IsActive AS \"O_IsActive\",o.IsApproved AS \"O_IsApproved\",o.IsCreditApproved AS \"O_IsCreditApproved\",o.IsDiscountPrinted AS \"O_IsDiscountPrinted\",o.IsDropShip AS \"O_IsDropShip\",o.IsInvoiced AS \"O_IsInvoiced\",o.IsPrinted AS \"O_IsPrinted\",o.IsSelfService AS \"O_IsSelfService\",o.IsSOTrx AS \"O_IsSOTrx\",o.IsTaxIncluded AS \"O_IsTaxIncluded\",o.IsTransferred AS \"O_IsTransferred\",o.Link_Order_ID AS \"O_Link_Order_ID\",o.M_FreightCategory_ID AS \"O_M_FreightCategory_ID\",o.M_PriceList_ID AS \"O_M_PriceList_ID\",o.POReference AS \"O_POReference\",o.PriorityRule AS \"O_PriorityRule\",o.Processed AS \"O_Processed\",o.ProcessedOn AS \"O_ProcessedOn\",o.PromotionCode AS \"O_PromotionCode\",o.Ref_Order_ID AS \"O_Ref_Order_ID\",o.SalesRep_ID AS \"O_SalesRep_ID\",o.SendEMail AS \"O_SendEMail\",o.TotalLines AS \"O_TotalLines\",o.Updated AS \"O_Updated\",o.User1_ID AS \"O_User1_ID\",o.User2_ID AS \"O_User2_ID\",o.Volume AS \"O_Volume\", (SELECT NVL(C_BPartner.Name,'') FROM C_BPartner WHERE o.C_BPartner_ID=C_BPartner.C_BPartner_ID) AS \"DisplayColumn_O_C_BPartner_ID\", C_DocTypeTarget_ID_C_DocType.Name AS \"DisplayColumn_O_C_DocTypeTarget_ID\", DeliveryRule_AD_Ref_List.Name AS \"DisplayColumn_O_DeliveryRule\", DocStatus_AD_Ref_List.Name AS \"DisplayColumn_O_DocStatus\" FROM C_Order o LEFT JOIN C_DocType AS C_DocTypeTarget_ID_C_DocType ON(C_DocTypeTarget_ID_C_DocType.C_DocType_ID = o.C_DocTypeTarget_ID) LEFT JOIN AD_Ref_List AS DeliveryRule_AD_Ref_List ON(DeliveryRule_AD_Ref_List.Value = o.DeliveryRule AND DeliveryRule_AD_Ref_List.AD_Reference_ID = 151) LEFT JOIN AD_Ref_List AS DocStatus_AD_Ref_List ON(DocStatus_AD_Ref_List.Value = o.DocStatus AND DocStatus_AD_Ref_List.AD_Reference_ID = 131)",
		"where_clause": "o.DocStatus NOT IN('VO')",
		"order_by_clause": "",
		"is_updateable": false,
		"is_deleteable": false,
		"is_selected_by_default": false,
		"is_collapsible_by_default": true,
		"is_executed_query_by_default": false,
		"is_show_total": true,
		"view_uuid": "a4cb5550-fb40-11e8-a479-7a0060f0aa01",
		"window": {
			"id": 143,
			"uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
			"name": "Sales Order",
			"description": "Enter and change sales orders",
			"help": "The Order Window allows you to enter and modify Sales Orders.  ",
			"is_active": true,
			"is_sales_transaction": true,
			"window_type": "T",
			"context_info": {
				"id": 50000,
				"uuid": "8cb3c434-fb40-11e8-a479-7a0060f0aa01",
				"name": "Order Status",
				"description": "Used for show a Status of Order",
				"sql_statement": "SELECT COUNT(*) AS Lines, o.TotalLines, o.GrandTotal, c.ISO_Code,  currencyBase(o.GrandTotal,o.C_Currency_ID,o.DateAcct, o.AD_Client_ID,o.AD_Org_ID) AS ConvAmt \nFROM C_Order o \nINNER JOIN C_Currency c ON (o.C_Currency_ID=c.C_Currency_ID) \nINNER JOIN C_OrderLine l ON (o.C_Order_ID=l.C_Order_ID) \nWHERE o.C_Order_ID=@C_Order_ID@\nGROUP BY o.C_Currency_ID, c.ISO_Code, o.TotalLines, o.GrandTotal, o.DateAcct, o.AD_Client_ID, o.AD_Org_ID",
				"message_text": {
					"id": 377,
					"uuid": "8e565392-fb40-11e8-a479-7a0060f0aa01",
					"value": "OrderSummary",
					"message_type": "",
					"message_text": "{0} Line(s) - {1,number,#,##0.00} -  Total: {2,number,#,##0.00}  {3}  =  {4,number,#,##0.00}",
					"message_tip": "",
					"is_active": false
				},
				"is_active": false
			},
			"tabs": []
		},
		"process": {
			"id": 53924,
			"uuid": "a42d0c38-fb40-11e8-a479-7a0060f0aa01",
			"name": "SB_C_Order_Process",
			"description": "",
			"help": "",
			"is_report": false,
			"access_level": 3,
			"show_help": "",
			"is_direct_print": false,
			"is_active": true,
			"report_export_types": [],
			"parameters": []
		},
		"is_active": true,
		"fields": [
			{
				"id": 56347,
				"uuid": "8ad41830-fb40-11e8-a479-7a0060f0aa01",
				"name": "Priority",
				"description": "Priority of a document",
				"help": "The Priority indicates the importance (high, medium, low) of this document",
				"sequence": 0,
				"column_name": "O_PriorityRule",
				"element_name": "PriorityRule",
				"is_displayed": false,
				"is_displayed_grid": false,
				"is_read_only": true,
				"is_allow_copy": false,
				"is_encrypted": false,
				"is_same_line": false,
				"is_heading": false,
				"is_field_only": false,
				"is_quick_entry": false,
				"is_mandatory": false,
				"is_key": false,
				"is_parent": false,
				"is_updateable": false,
				"is_identifier": false,
				"is_allow_logging": false,
				"is_selection_column": false,
				"is_range": false,
				"is_always_updateable": false,
				"is_translated": false,
				"identifier_sequence": 0,
				"display_logic": "",
				"display_type": 17,
				"default_value": "",
				"read_only_logic": "",
				"mandatory_logic": "",
				"callout": "",
				"column_sql": "",
				"v_format": "",
				"value_min": "",
				"value_max": "",
				"format_pattern": "",
				"reference": {
					"table_name": "AD_Ref_List",
					"key_column_name": "AD_Ref_List.Value",
					"display_column_name": "Name",
					"query": "SELECT NULL, AD_Ref_List.Value,AD_Ref_List.Name,AD_Ref_List.IsActive, AD_Ref_List.UUID FROM AD_Ref_List WHERE AD_Ref_List.AD_Reference_ID=154 ORDER BY 3",
					"direct_query": "SELECT NULL, AD_Ref_List.Value,AD_Ref_List.Name,AD_Ref_List.IsActive, AD_Ref_List.UUID FROM AD_Ref_List WHERE AD_Ref_List.AD_Reference_ID=154 AND AD_Ref_List.Value=?",
					"validation_code": "",
					"zoom_windows": [
						{
							"id": 101,
							"uuid": "a5212b92-fb40-11e8-a479-7a0060f0aa01",
							"name": "Reference",
							"description": "Maintain System References",
							"is_sales_transaction": true,
							"is_active": false
						},
						{
							"id": 101,
							"uuid": "a5212b92-fb40-11e8-a479-7a0060f0aa01",
							"name": "Reference",
							"description": "Maintain System References",
							"is_sales_transaction": true,
							"is_active": false
						}
					]
				},
				"is_query_criteria": false,
				"is_order_by": false,
				"seq_no_grid": 0,
				"sort_no": 0,
				"is_info_only": false,
				"is_active": true,
				"default_value_to": "",
				"field_length": 0
			}
		]
	}
}
```

### GET /adempiere-api/dictionary/process

Get meta-data from process, process definition and parameters.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dictionary/process?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=8aaefbc2-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```

#### Response Body:

```json
{
	"code": 200,
	"result": {
		"id": 53924,
		"uuid": "a42d0c38-fb40-11e8-a479-7a0060f0aa01",
		"name": "SB_C_Order_Process",
		"description": "",
		"help": "",
		"is_report": false,
		"access_level": 3,
		"show_help": "",
		"is_direct_print": false,
		"is_active": true,
		"report_export_types": [],
		"parameters": [
			{
				"id": 55690,
				"uuid": "a43c9af4-fb40-11e8-a479-7a0060f0aa01",
				"name": "Document Action",
				"description": "The targeted status of the document",
				"help": "You find the current status in the Document Status field. The options are listed in a popup",
				"sequence": 10,
				"column_name": "DocAction",
				"element_name": "DocAction",
				"is_displayed": true,
				"is_displayed_grid": false,
				"is_read_only": false,
				"is_allow_copy": false,
				"is_encrypted": false,
				"is_same_line": false,
				"is_heading": false,
				"is_field_only": false,
				"is_quick_entry": false,
				"is_mandatory": true,
				"is_key": false,
				"is_parent": false,
				"is_updateable": false,
				"is_identifier": false,
				"is_allow_logging": false,
				"is_selection_column": false,
				"is_range": false,
				"is_always_updateable": false,
				"is_translated": false,
				"identifier_sequence": 0,
				"display_logic": "",
				"display_type": 17,
				"default_value": "",
				"read_only_logic": "",
				"mandatory_logic": "",
				"callout": "",
				"column_sql": "",
				"v_format": "",
				"value_min": "",
				"value_max": "",
				"format_pattern": "",
				"reference": {
					"table_name": "AD_Ref_List",
					"key_column_name": "AD_Ref_List.Value",
					"display_column_name": "Name",
					"query": "SELECT NULL, AD_Ref_List.Value,AD_Ref_List.Name,AD_Ref_List.IsActive, AD_Ref_List.UUID FROM AD_Ref_List WHERE AD_Ref_List.AD_Reference_ID=135 ORDER BY 3",
					"direct_query": "SELECT NULL, AD_Ref_List.Value,AD_Ref_List.Name,AD_Ref_List.IsActive, AD_Ref_List.UUID FROM AD_Ref_List WHERE AD_Ref_List.AD_Reference_ID=135 AND AD_Ref_List.Value=?",
					"validation_code": "",
					"zoom_windows": [
						{
							"id": 101,
							"uuid": "a5212b92-fb40-11e8-a479-7a0060f0aa01",
							"name": "Reference",
							"description": "Maintain System References",
							"is_sales_transaction": true,
							"is_active": false
						},
						{
							"id": 101,
							"uuid": "a5212b92-fb40-11e8-a479-7a0060f0aa01",
							"name": "Reference",
							"description": "Maintain System References",
							"is_sales_transaction": true,
							"is_active": false
						}
					]
				},
				"is_query_criteria": false,
				"is_order_by": false,
				"seq_no_grid": 0,
				"sort_no": 0,
				"is_info_only": false,
				"is_active": true,
				"default_value_to": "",
				"field_length": 2
			}
		]
	}
}
```

### GET /adempiere-api/dictionary/form

Get meta-data of form based on dictionary.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dictionary/form?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=8e427700-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```

#### Response Body:

```json
{
	"code": 200,
	"result": {
		"id": 113,
		"uuid": "8e427700-fb40-11e8-a479-7a0060f0aa01",
		"name": "POS",
		"description": "Point Of Sales Terminal",
		"help": "Enter Transactions via a POS Terminal.  Automatically, scans or credit card swipes are recongized.",
		"access_level": 0,
		"file_name": "VPOS",
		"is_active": true
	}
}
```

### GET /adempiere-api/dictionary/field

Get field meta-data (Very useful for get info based on custom form).

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.
- `element_uuid` - element UUID.
- `table_name` - table name defined.
- `column_name` - column name.
- `element_column_name` - element column name.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dictionary/field?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=b6d0c7c7-0785-4302-bb20-94c1bd5488b2' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

```json
{
	"code": 200,
	"result": {
		"id": 1675,
		"uuid": "8cc8589a-fb40-11e8-a479-7a0060f0aa01",
		"name": "Product Key",
		"description": "Key of the Product",
		"help": "",
		"sequence": 0,
		"column_name": "ProductValue",
		"element_name": "ProductValue",
		"is_displayed": false,
		"is_displayed_grid": false,
		"is_read_only": false,
		"is_allow_copy": false,
		"is_encrypted": false,
		"is_same_line": false,
		"is_heading": false,
		"is_field_only": false,
		"is_quick_entry": false,
		"is_mandatory": false,
		"is_key": false,
		"is_parent": false,
		"is_updateable": false,
		"is_identifier": false,
		"is_allow_logging": false,
		"is_selection_column": false,
		"is_range": false,
		"is_always_updateable": false,
		"is_translated": false,
		"identifier_sequence": 0,
		"display_logic": "",
		"display_type": 10,
		"default_value": "",
		"read_only_logic": "",
		"mandatory_logic": "",
		"callout": "",
		"column_sql": "",
		"v_format": "",
		"value_min": "",
		"value_max": "",
		"format_pattern": "",
		"is_query_criteria": false,
		"is_order_by": false,
		"seq_no_grid": 0,
		"sort_no": 0,
		"is_info_only": false,
		"is_active": true,
		"default_value_to": "",
		"field_length": 40
	}
}
```

### GET /adempiere-api/dictionary/validation

Get validation rule from ID or UUID

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dictionary/validation?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=a4cac0ae-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "id": 52461,
        "uuid": "a4cac0ae-fb40-11e8-a479-7a0060f0aa01",
        "name": "AD_Process_Para of Link Column Process",
        "description": "",
        "validation_code": "AD_Process_Para.AD_Process_ID=(SELECT AD_Process_ID FROM AD_ColumnProcess WHERE AD_ColumnProcess_ID=@AD_ColumnProcess_ID@)",
        "type": "S"
    }
}
```

### GET /adempiere-api/dictionary/reference

Get reference orlookup based on uuid or id

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `id` - country identifier.
- `uuid` - UUID of country.

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/dictionary/reference?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&uuid=a47df90e-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Response Body:

```json
{
    "code": 200,
    "result": {
        "table_name": "AD_Column",
        "key_column_name": "AD_Column.AD_Column_ID",
        "display_column_name": "Name",
        "query": "SELECT AD_Column.AD_Column_ID,NULL,NVL(AD_Column.Name,'-1'),AD_Column.IsActive, AD_Column.UUID FROM AD_Column WHERE AD_Column.AD_Reference_ID=20 ORDER BY AD_Column.Name",
        "direct_query": "SELECT AD_Column.AD_Column_ID,NULL,NVL(AD_Column.Name,'-1'),AD_Column.IsActive, AD_Column.UUID FROM AD_Column WHERE AD_Column.AD_Reference_ID=20 AND AD_Column.AD_Column_ID=?",
        "validation_code": "",
        "zoom_windows": [
            {
                "id": 100,
                "uuid": "a5212b06-fb40-11e8-a479-7a0060f0aa01",
                "name": "Table and Column",
                "description": "Maintain Tables and Columns",
                "is_sales_transaction": true,
                "is_active": false
            }
        ]
    }
}
```
