## Módulo Interfaz de Usuario

### POST /adempiere-api/ui/attachment

Obtener Adjunto

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id de referencia.
`uuid` - uuid de referencia.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/attachment?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "Test","id": "103","uuid": "db4f0106-eace-44bd-b761-f03f6efd4852"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "attachmentUuid": "771d2187-6103-430a-acfc-aee208f22a0c",
        "title": "Attachment Title",
        "textMsg": "",
        "resourceReferencesList": [
            {
                "tableName": "AD_Test",
                "resourceUuid": "771d2187-6103-430a-acfc-aee208f22a0c"
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/resource-reference

Información de referencia de recursos

#### Paràmetros POST:

`image_id` - id de la imagen
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/resource-reference?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"imageId": 5475}'
    
```
#### Cuerpo de Respuesta:

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
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/create-chat-entry

Crear una entrada de chat

#### Paràmetros POST:

`uuid` - uuid del registro.
`id` - id del registro.
`table_name` - nombre de la tabla (obligatorio para obtener la traducción).
`comment` - comentario

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/create-chat-entry?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "C_Order","id": "1073741", "uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66", "comment": "add comment"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "chat_uuid": "e22d49ba-39c3-4edb-bd84-4bb7066429b8",
        "uuid": "2ac7eee1-dbe8-4834-beee-663dde88cd60",
        "id": 1000005,
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
        "log_date": "2021-02-18T20:21:05.000Z"
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/get-report-output

Obtener la salida del informe

#### Paràmetros POST:

`printFormatUuid` - referencia de formato de impresión.
`reportViewUuid` - referencia de la vista del informe.
`isSummary` - resumen.
`reportName` - nombre del informe.
`reportType` - tipo de informe.
`columns` - columnas de la consulta.
`filters` - filtros de la consulta.
`tableName` - nombre de la tabla (obligatorio si no es una consulta).
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
`whereClause` - cláusula where de la búsqueda basada en SQL.
`orderByClause` - cláusula order by basada en SQL.
`limit` - límite de registros.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/get-report-output?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"printFormatUuid": "771d2187-6103-430a-acfc-aee208f22a0c","reportViewUuid": "831d2187-1233-430a-acfc-aee208f64a0zv","isSummary": false,"reportName": "Report Name Test","reportType": "pdf","tableName": "AD_TEST","parametersList": []}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result":{
        "uuid": "771d2187-6103-430a-acfc-aee208f22a0c",
        "name": "Report Test",
        "description": "",
        "fileName": "",
        "output": [],
        "mimeType": "pdf",
        "dataCols": 7,
        "dataRows": 8,
        "headerName": "",
        "footerName": "",
        "printFormatUuid": "sd1d2199-6103-430a-acfc-aee208f22a0c",
        "reportViewUuid": "831d2187-1233-430a-acfc-aee208f64a0zv",
        "tableName": "",
        "outputStream": [],
        "reportType": "pdf"
    }

}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/ui/list-drill-tables

Obtener tablas para el taladro

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "pageSize": 50
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/list-drill-tables?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"tableName": "AD_TEST"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code":200,
    "result":{
    "recordCount": 2,
    "drillTablesList": [{
        "tableName": "AD_TEST",
        "printName": "Test Name"
    },
        {
            "tableName": "AD_TEST",
            "printName": "Test Name 2"
        }
    ],
    "nextPageToken": "771d2187-6103-430a-acfc-aee208f22a0c-1"
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/list-report-views

Obtener tablas para la grilla

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`processUuid` - uuid del proceso

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "pageSize": 50
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/list-drill-tables?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name":"RV_OpenItem"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "report_view_uuid": "a4883f9a-fb40-11e8-a479-7a0060f0aa01",
                "name": "PrintFormat Detail",
                "description": "PrintFormat Detail",
                "table_name": "RV_PrintFormatDetail"
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/list-print-formatss

Obtener formatos de impresión

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`processUuid` - uuid del proceso.
`reportViewUuid` - uuid de la vista del informe.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es",
    "pageSize": 50
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/list-print-formatss?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{process_uuid: "a42a74fa-fb40-11e8-a479-7a0060f0aa01"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "print_format_uuid": "c35aefe8-1eec-46f9-b59c-d072f800e183",
                "name": "MIGO -> Imprimir Detalle de Formato",
                "description": "",
                "table_name": "RV_PrintFormatDetail",
                "is_default": false,
                "report_view_uuid": "a4883f9a-fb40-11e8-a479-7a0060f0aa01"
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/unlock-private-access

Desbloquear un acceso privado

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id del registro.
`uuid` - uuid del registro.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/unlock-private-access?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "C_Order","id": "1073741","uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b"
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/lock-private-access

Bloquear un acceso privado

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id del registro.
`uuid` - uuid del registro.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/lock-private-access?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "C_Order","id": "1073741","uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b"
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/get-private-access

Obtener acceso privado de la tabla y el registro

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id del registro.
`uuid` - uuid del registro.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/get-private-access?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "C_Order","id": "1073741","uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "table_name": "C_Order",
        "id": 1073741,
        "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b"
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/get-context-info-value

Obtener información de contexto

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`uuid` - uuid del registro.
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL..

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui//get-context-info-value?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"query": "SELECT * FROM Test","uuid": "a61073be-fb40-11e8-a479-7a0060f0aa01", "table_name":"Test"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "message_text": "",
        "message_tip": ""
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/list-references

Lista de referencias

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id del registro.
`uuid` - uuid del registro.
`windowUuid` - uuid de la ventana
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/list-references?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "C_Order","id": "1073741","uuid": "6ff7ed30-4bb1-4eeb-9e84-b6fa01978d66", "window_uuid": "a52192bc-fb40-11e8-a479-7a0060f0aa01"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": [
            {
                "uuid": "42c7a1af-c473-4bf5-83c6-00293b516b98",
                "window_uuid": "a5219852-fb40-11e8-a479-7a0060f0aa01",
                "display_name": "Ver Registros MRP (#1)",
                "table_name": "RV_PP_MRP",
                "where_clause": "(RV_PP_MRP.C_Order_ID=1073741)",
                "record_count": 1
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/list-browser-items

Lista de elementos del navegador

#### Paràmetros POST:

`uuid` - uuid del buscador.
`parameters` - parametros del buscador
`columns` - columnas de la consulta.
`filters` - filtros de la consulta.
`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
`where_clause` - cláusula where de la búsqueda basada en SQL.
`order_by_clause` - cláusula order by basada en SQL.
`limit` - límite de registros.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/list-browser-items?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"uuid":"8aaefbc2-fb40-11e8-a479-7a0060f0aa01","filters":[{"key":"O_IsSOTrx","value":true,"values":[]},{"key":"O_DocStatus","value":"DR","values":[]}],"query":"SELECT o.Processing AS \"O_Processing\",o.C_Opportunity_ID AS \"O_C_Opportunity_ID\",o.DocStatus AS \"O_DocStatus\",o.DropShip_BPartner_ID AS \"O_DropShip_BPartner_ID\",o.DropShip_Location_ID AS \"O_DropShip_Location_ID\",o.DropShip_User_ID AS \"O_DropShip_User_ID\",o.FreightAmt AS \"O_FreightAmt\",o.IsSelected AS \"O_IsSelected\",o.CopyFrom AS \"O_CopyFrom\",o.IsDelivered AS \"O_IsDelivered\",o.Bill_Location_ID AS \"O_Bill_Location_ID\",o.Pay_BPartner_ID AS \"O_Pay_BPartner_ID\",o.AmountRefunded AS \"O_AmountRefunded\",o.Bill_User_ID AS \"O_Bill_User_ID\",o.Pay_Location_ID AS \"O_Pay_Location_ID\",o.C_Activity_ID AS \"O_C_Activity_ID\",o.C_BPartner_ID AS \"O_C_BPartner_ID\",o.PaymentRule AS \"O_PaymentRule\",o.Posted AS \"O_Posted\",o.DocumentNo AS \"O_DocumentNo\",o.DateOrdered AS \"O_DateOrdered\",o.M_Shipper_ID AS \"O_M_Shipper_ID\",o.M_Warehouse_ID AS \"O_M_Warehouse_ID\",o.OrderType AS \"O_OrderType\",o.AD_Client_ID AS \"O_AD_Client_ID\",o.AD_Org_ID AS \"O_AD_Org_ID\",o.AD_OrgTrx_ID AS \"O_AD_OrgTrx_ID\",o.AD_User_ID AS \"O_AD_User_ID\",o.AmountTendered AS \"O_AmountTendered\",o.Bill_BPartner_ID AS \"O_Bill_BPartner_ID\",o.Weight AS \"O_Weight\",o.C_BPartner_Location_ID AS \"O_C_BPartner_Location_ID\",o.C_Campaign_ID AS \"O_C_Campaign_ID\",o.C_CashLine_ID AS \"O_C_CashLine_ID\",o.C_Charge_ID AS \"O_C_Charge_ID\",o.C_ConversionType_ID AS \"O_C_ConversionType_ID\",o.C_Currency_ID AS \"O_C_Currency_ID\",o.C_DocType_ID AS \"O_C_DocType_ID\",o.C_DocTypeTarget_ID AS \"O_C_DocTypeTarget_ID\",o.ChargeAmt AS \"O_ChargeAmt\",o.C_Order_ID AS \"O_C_Order_ID\",o.C_OrderSource_ID AS \"O_C_OrderSource_ID\",o.C_Payment_ID AS \"O_C_Payment_ID\",o.C_PaymentTerm_ID AS \"O_C_PaymentTerm_ID\",o.C_POS_ID AS \"O_C_POS_ID\",o.C_Project_ID AS \"O_C_Project_ID\",o.Created AS \"O_Created\",o.CreatedBy AS \"O_CreatedBy\",o.DateAcct AS \"O_DateAcct\",o.DatePrinted AS \"O_DatePrinted\",o.DatePromised AS \"O_DatePromised\",o.DeliveryRule AS \"O_DeliveryRule\",o.DeliveryViaRule AS \"O_DeliveryViaRule\",o.Description AS \"O_Description\",o.DocAction AS \"O_DocAction\",o.FreightCostRule AS \"O_FreightCostRule\",o.GrandTotal AS \"O_GrandTotal\",o.InvoiceRule AS \"O_InvoiceRule\",o.UpdatedBy AS \"O_UpdatedBy\",o.IsActive AS \"O_IsActive\",o.IsApproved AS \"O_IsApproved\",o.IsCreditApproved AS \"O_IsCreditApproved\",o.IsDiscountPrinted AS \"O_IsDiscountPrinted\",o.IsDropShip AS \"O_IsDropShip\",o.IsInvoiced AS \"O_IsInvoiced\",o.IsPrinted AS \"O_IsPrinted\",o.IsSelfService AS \"O_IsSelfService\",o.IsSOTrx AS \"O_IsSOTrx\",o.IsTaxIncluded AS \"O_IsTaxIncluded\",o.IsTransferred AS \"O_IsTransferred\",o.Link_Order_ID AS \"O_Link_Order_ID\",o.M_FreightCategory_ID AS \"O_M_FreightCategory_ID\",o.M_PriceList_ID AS \"O_M_PriceList_ID\",o.POReference AS \"O_POReference\",o.PriorityRule AS \"O_PriorityRule\",o.Processed AS \"O_Processed\",o.ProcessedOn AS \"O_ProcessedOn\",o.PromotionCode AS \"O_PromotionCode\",o.Ref_Order_ID AS \"O_Ref_Order_ID\",o.SalesRep_ID AS \"O_SalesRep_ID\",o.SendEMail AS \"O_SendEMail\",o.TotalLines AS \"O_TotalLines\",o.Updated AS \"O_Updated\",o.User1_ID AS \"O_User1_ID\",o.User2_ID AS \"O_User2_ID\",o.Volume AS \"O_Volume\", (SELECT NVL(C_BPartner.Name,'') FROM C_BPartner WHERE o.C_BPartner_ID=C_BPartner.C_BPartner_ID) AS \"DisplayColumn_O_C_BPartner_ID\", C_DocTypeTarget_ID_C_DocType_Trl.Name AS \"DisplayColumn_O_C_DocTypeTarget_ID\", DeliveryRule_AD_Ref_List_Trl.Name AS \"DisplayColumn_O_DeliveryRule\", DocStatus_AD_Ref_List_Trl.Name AS \"DisplayColumn_O_DocStatus\" FROM C_Order o LEFT JOIN C_DocType AS C_DocTypeTarget_ID_C_DocType ON(C_DocTypeTarget_ID_C_DocType.C_DocType_ID = o.C_DocTypeTarget_ID) LEFT JOIN C_DocType_Trl AS C_DocTypeTarget_ID_C_DocType_Trl ON(C_DocTypeTarget_ID_C_DocType_Trl.C_DocType_ID = C_DocTypeTarget_ID_C_DocType.C_DocType_ID AND C_DocTypeTarget_ID_C_DocType_Trl.AD_Language = 'es_VE') LEFT JOIN AD_Ref_List AS DeliveryRule_AD_Ref_List ON(DeliveryRule_AD_Ref_List.Value = o.DeliveryRule AND DeliveryRule_AD_Ref_List.AD_Reference_ID = 151) LEFT JOIN AD_Ref_List_Trl AS DeliveryRule_AD_Ref_List_Trl ON(DeliveryRule_AD_Ref_List_Trl.AD_Ref_List_ID = DeliveryRule_AD_Ref_List.AD_Ref_List_ID AND DeliveryRule_AD_Ref_List_Trl.AD_Language = 'es_VE') LEFT JOIN AD_Ref_List AS DocStatus_AD_Ref_List ON(DocStatus_AD_Ref_List.Value = o.DocStatus AND DocStatus_AD_Ref_List.AD_Reference_ID = 131) LEFT JOIN AD_Ref_List_Trl AS DocStatus_AD_Ref_List_Trl ON(DocStatus_AD_Ref_List_Trl.AD_Ref_List_ID = DocStatus_AD_Ref_List.AD_Ref_List_ID AND DocStatus_AD_Ref_List_Trl.AD_Language = 'es_VE')","where_clause":"o.DocStatus NOT IN('VO')","order_by_clause":""}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 50,
        "next_page_token": "d3bb9377-b46e-4ec2-96b2-93dd60c71ead-1",
        "records": [
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "INVERSIONES DPJ, C.A"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden de Compra Nacional"
                    },
                    {
                        "key": "DisplayColumn_O_DeliveryRule",
                        "value": "Disponibilidad"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID",
                        "value": 1000437
                    },
                    {
                        "key": "O_AmountRefunded",
                        "value": 0
                    },
                    {
                        "key": "O_AmountTendered",
                        "value": 0
                    },
                    {
                        "key": "O_Bill_BPartner_ID",
                        "value": 1000488
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1004666
                    },
                    {
                        "key": "O_Bill_User_ID",
                        "value": 1000437
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000488
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1004666
                    },
                    {
                        "key": "O_C_Campaign_ID"
                    },
                    {
                        "key": "O_C_CashLine_ID"
                    },
                    {
                        "key": "O_C_Charge_ID"
                    },
                    {
                        "key": "O_C_ConversionType_ID",
                        "value": 1000001
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000119
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000119
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1056843
                    },
                    {
                        "key": "O_C_POS_ID"
                    },
                    {
                        "key": "O_C_PaymentTerm_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_C_Payment_ID"
                    },
                    {
                        "key": "O_C_Project_ID"
                    },
                    {
                        "key": "O_ChargeAmt",
                        "value": 0
                    },
                    {
                        "key": "O_CopyFrom"
                    },
                    {
                        "key": "O_Created",
                        "value": "2020-11-17T16:45:44.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000387
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-01T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-01T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-11-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "A"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description",
                        "value": "MIGRACION CONSIGNACION"
                    },
                    {
                        "key": "O_DocAction"
                    },
                    {
                        "key": "O_DocStatus",
                        "value": "CO"
                    },
                    {
                        "key": "O_DocumentNo",
                        "value": "OCN-1163"
                    },
                    {
                        "key": "O_DropShip_BPartner_ID"
                    },
                    {
                        "key": "O_DropShip_Location_ID"
                    },
                    {
                        "key": "O_DropShip_User_ID"
                    },
                    {
                        "key": "O_FreightAmt",
                        "value": 0
                    },
                    {
                        "key": "O_FreightCostRule",
                        "value": "I"
                    },
                    {
                        "key": "O_GrandTotal",
                        "value": 136276800
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "D"
                    },
                    {
                        "key": "O_IsActive",
                        "value": true
                    },
                    {
                        "key": "O_IsApproved",
                        "value": true
                    },
                    {
                        "key": "O_IsCreditApproved",
                        "value": false
                    },
                    {
                        "key": "O_IsDelivered",
                        "value": "Y"
                    },
                    {
                        "key": "O_IsDiscountPrinted",
                        "value": false
                    },
                    {
                        "key": "O_IsDropShip",
                        "value": false
                    },
                    {
                        "key": "O_IsInvoiced",
                        "value": "N"
                    },
                    {
                        "key": "O_IsPrinted",
                        "value": false
                    },
                    {
                        "key": "O_IsSOTrx",
                        "value": false
                    },
                    {
                        "key": "O_IsSelected",
                        "value": false
                    },
                    {
                        "key": "O_IsSelfService",
                        "value": "N"
                    },
                    {
                        "key": "O_IsTaxIncluded",
                        "value": false
                    },
                    {
                        "key": "O_IsTransferred",
                        "value": false
                    },
                    {
                        "key": "O_Link_Order_ID"
                    },
                    {
                        "key": "O_M_FreightCategory_ID"
                    },
                    {
                        "key": "O_M_PriceList_ID",
                        "value": 1000003
                    },
                    {
                        "key": "O_M_Shipper_ID"
                    },
                    {
                        "key": "O_M_Warehouse_ID",
                        "value": 1000002
                    },
                    {
                        "key": "O_OrderType"
                    },
                    {
                        "key": "O_POReference"
                    },
                    {
                        "key": "O_Pay_BPartner_ID"
                    },
                    {
                        "key": "O_Pay_Location_ID"
                    },
                    {
                        "key": "O_PaymentRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Posted"
                    },
                    {
                        "key": "O_PriorityRule",
                        "value": "5"
                    },
                    {
                        "key": "O_Processed",
                        "value": true
                    },
                    {
                        "key": "O_ProcessedOn",
                        "value": 1605631694351.3513
                    },
                    {
                        "key": "O_Processing"
                    },
                    {
                        "key": "O_PromotionCode"
                    },
                    {
                        "key": "O_Ref_Order_ID"
                    },
                    {
                        "key": "O_SalesRep_ID",
                        "value": 1000387
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 117480000
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-11-17T17:29:42.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000402
                    },
                    {
                        "key": "O_User1_ID"
                    },
                    {
                        "key": "O_User2_ID"
                    },
                    {
                        "key": "O_Volume",
                        "value": 0
                    },
                    {
                        "key": "O_Weight",
                        "value": 0
                    }
                ]
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/list-lookup-items

Lista de elementos de búsqueda

#### Paràmetros POST:

`filters` - filtros de la consulta.
`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
`where_clause` - cláusula where de la búsqueda basada en SQL.
`order_by_clause` - cláusula order by basada en SQL.
`limit` - límite de registros.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/ui/list-lookup-items?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{"table_name":"AD_Org","query":"SELECT AD_Org.AD_Org_ID,NULL,NVL(AD_Org.Name,'\''-1'\''),AD_Org.IsActive, AD_Org.UUID FROM AD_Org ORDER BY 3","filters":[]}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 12,
        "next_page_token": "",
        "records": [
            {
                "id": 0,
                "uuid": "a455ffe4-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Anulado",
                    "KeyColumn": "VO",
                    "ValueColumn": "VO"
                }
            },
            {
                "id": 0,
                "uuid": "a455fdb4-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Aprobado",
                    "KeyColumn": "AP",
                    "ValueColumn": "AP"
                }
            },
            {
                "id": 0,
                "uuid": "a459d506-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Borrador",
                    "KeyColumn": "DR",
                    "ValueColumn": "DR"
                }
            },
            {
                "id": 0,
                "uuid": "a455fe36-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Cerrado",
                    "KeyColumn": "CL",
                    "ValueColumn": "CL"
                }
            },
            {
                "id": 0,
                "uuid": "a455fea4-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Completo",
                    "KeyColumn": "CO",
                    "ValueColumn": "CO"
                }
            },
            {
                "id": 0,
                "uuid": "a4560692-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Desconocido",
                    "KeyColumn": "??",
                    "ValueColumn": "??"
                }
            },
            {
                "id": 0,
                "uuid": "a456aec6-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "En Proceso",
                    "KeyColumn": "IP",
                    "ValueColumn": "IP"
                }
            },
            {
                "id": 0,
                "uuid": "a46776f2-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Esperando Confirmación",
                    "KeyColumn": "WC",
                    "ValueColumn": "WC"
                }
            },
            {
                "id": 0,
                "uuid": "a459d308-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Esperando Pago",
                    "KeyColumn": "WP",
                    "ValueColumn": "WP"
                }
            },
            {
                "id": 0,
                "uuid": "a459d290-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "No Aprobado",
                    "KeyColumn": "NA",
                    "ValueColumn": "NA"
                }
            },
            {
                "id": 0,
                "uuid": "a455ff08-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "No-Válido",
                    "KeyColumn": "IN",
                    "ValueColumn": "IN"
                }
            },
            {
                "id": 0,
                "uuid": "a455ff76-fb40-11e8-a479-7a0060f0aa01",
                "table_name": "",
                "values": {
                    "DisplayColumn": "Reversado",
                    "KeyColumn": "RE",
                    "ValueColumn": "RE"
                }
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/get-lookup-item

Obtener elemento de búsqueda

#### Paràmetros POST:

`filters` - filtros de la consulta.
`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
`where_clause` - cláusula where de la búsqueda basada en SQL.
`order_by_clause` - cláusula order by basada en SQL.
`limit` - límite de registros.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/ui/get-lookup-item?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{"table_name":"AD_Org","query":"SELECT AD_Org.AD_Org_ID,NULL,NVL(AD_Org.Name,'\''-1'\''),AD_Org.IsActive, AD_Org.UUID FROM AD_Org ORDER BY 3","filters":[]}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "id": 0,
        "uuid": "a455ffe4-fb40-11e8-a479-7a0060f0aa01",
        "table_name": "",
        "values": {
            "DisplayColumn": "Anulado",
            "KeyColumn": "VO",
            "ValueColumn": "VO"
        }
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/list-translations

Lista de traducciones

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id de referencia.
`uuid` - uuid de referencia.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/list-translations?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name": "AD_View","id": "50000","uuid": "a4cb498e-fb40-11e8-a479-7a0060f0aa01"}'
    
```
#### Cuerpo de Respuesta:

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
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/get-default-value

Obtener valor por defecto

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/get-default-value?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"query": "SELECT Name from AD_TEST WHERE IsActive = 'Y' AND (SELECT MAX(AD_TEST_ID) FROM AD_TEST)"}'
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/ui/run-callout

Ejecutar llamada

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`tab_uuid` - uuid de la pestaña.
`windowUuid` - uuid de la ventana.
`callout` - llamada.
`columnName` - nombre de la columna de la llamada.
`old_value` - valor antiguo para la columna.
`value` - nuevo valor de  la columna.
`window_no` - número de ventana.
`attributes` - atributos de la entidad.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/ui/run-callout?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"table_name":"C_Order","window_uuid":"a52203d2-fb40-11e8-a479-7a0060f0aa01","tab_uuid":"a49ff9be-fb40-11e8-a479-7a0060f0aa01","callout":"org.compiere.model.CalloutOrder.bPartner","column_name":"C_BPartner_ID","value":1000029,"window_no":5,"attributes":[{"columnName":"IsTransferred","value":false,"values":[]},{"columnName":"DateAcct","value":"2021-04-30T15:43:38.000Z","values":[]},{"columnName":"C_Order_ID","value":0,"values":[]},{"columnName":"SendEMail","value":false,"values":[]},{"columnName":"Processed","value":false,"values":[]},{"columnName":"IsSelected","value":false,"values":[]},{"columnName":"IsTaxIncluded","value":false,"values":[]},{"columnName":"IsSOTrx","value":true,"values":[]},{"columnName":"IsActive","value":true,"values":[]},{"columnName":"IsApproved","value":false,"values":[]},{"columnName":"IsCreditApproved","values":[]},{"columnName":"IsDelivered","value":false,"values":[]},{"columnName":"IsInvoiced","value":false,"values":[]},{"columnName":"IsPrinted","value":false,"values":[]},{"columnName":"AD_Client_ID","value":1000000,"values":[]},{"columnName":"AD_Org_ID","value":1000000,"values":[]},{"columnName":"DocumentNo","values":[]},{"columnName":"C_DocTypeTarget_ID","value":1000026,"values":[]},{"columnName":"IsSelfService","value":false,"values":[]},{"columnName":"DateOrdered","value":"2021-04-30T15:43:38.000Z","values":[]},{"columnName":"DatePromised","value":"2021-04-30T15:43:38.000Z","values":[]},{"columnName":"C_BPartner_ID","value":1000029,"values":[]},{"columnName":"C_BPartner_Location_ID","values":[]},{"columnName":"DeliveryRule","values":[]},{"columnName":"PriorityRule","values":[]},{"columnName":"M_Warehouse_ID","values":[]},{"columnName":"IsDropShip","values":[]},{"columnName":"DeliveryViaRule","values":[]},{"columnName":"FreightCostRule","values":[]},{"columnName":"FreightAmt","values":[]},{"columnName":"InvoiceRule","values":[]},{"columnName":"M_PriceList_ID","values":[]},{"columnName":"C_Currency_ID","value":50001,"values":[]},{"columnName":"IsGeneratedCurrencyType","value":false,"values":[]},{"columnName":"SalesRep_ID","values":[]},{"columnName":"IsDiscountPrinted","value":false,"values":[]},{"columnName":"PaymentRule","values":[]},{"columnName":"C_PaymentTerm_ID","values":[]},{"columnName":"IsFarmerAssistanceProgram","value":false,"values":[]},{"columnName":"TotalLines","value":0,"values":[]},{"columnName":"GrandTotal","value":0,"values":[]},{"columnName":"DocStatus","value":"DR","values":[]},{"columnName":"C_DocType_ID","value":0,"values":[]},{"columnName":"DocAction","value":"CO","values":[]},{"columnName":"Posted","values":[]}]}'
```
#### Cuerpo de Respuesta:

```json 
{
    "code": 500,
    "result": {
        "created": "2020-09-18T17:22:59-04:30",
        "id": 10,
        "uuid": "771d2187-6103-430a-acfc-aee208f22a0c",
        "name": "Test Name",
        "description": "Test Description",
        "help": "Test Help",
        "IsProcessed": true,
        "isActive": true
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/ui/rollback-entity

Obtener información de contexto

#### Paràmetros POST:

`table_name` - nombre de la tabla (obligatorio si no es una consulta).
`id` - id de referencia.
`uuid` - uuid de referencia.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/ui/rollback-entity?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 386,
    "uuid": "a5209254-fb40-11e8-a479-7a0060f0aa01",
    "table_name": "AD_Window"
}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 500,
    "result": {
        "created": "2020-09-18T17:22:59-04:30",
        "id": 10,
        "uuid": "771d2187-6103-430a-acfc-aee208f22a0c",
        "name": "Test Name",
        "description": "Test Description",
        "help": "Test Help",
        "IsProcessed": true,
        "isActive": true
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET adempiere-api/ui/record-access

Optener Acceso al registro de entidades.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`id` - id de la entidad.
`uuid` - uuid de la entidad.
`table_name` - nombre de la tabla de la entidad

#### Cuerpo de la Petición:

```json
{
	"table_name": "M_Product_Group",
	"id": "1000002",
	"uuid": "a46108d8-40ed-11e9-91a1-0242ac140002",
	"language": "es",
    "token": "b6d0c7c7-0785-4302-bb20-94c1bd5488b2"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/adempiere-api/ui/record-access?table_name=M_Product_Group&id=1000002&uuid=a46108d8-40ed-11e9-91a1-0242ac140002&		token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "table_name": "M_Product_Group",
        "id": 1000002,
        "uuid": "a46108d8-40ed-11e9-91a1-0242ac140002",
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
                "role_id": 1000040,
                "role_uuid": "a7d7a2ae-4045-11e9-b658-0242ac140002",
                "role_name": "Jefe de Ventas",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000065,
                "role_uuid": "b7d155ff-117d-48cf-b9e9-e488b4ea381f",
                "role_name": "Proveedor (Agente Externo)",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000023,
                "role_uuid": "49fe8e82-6dd5-11e9-bbd2-0242ac140002",
                "role_name": "Analista de Almacén",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000048,
                "role_uuid": "eb1d886f-e3de-42e8-9e21-44d83ca30595",
                "role_name": "Analista de Pos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000038,
                "role_uuid": "d803b88c-d8a2-11e9-ba4c-0242ac110002",
                "role_name": "Gerencia",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000013,
                "role_uuid": "e303fe6a-a975-11e9-accf-0242ac110004",
                "role_name": "Jefe de Capacitación",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000027,
                "role_uuid": "a7d79f66-4045-11e9-b658-0242ac140002",
                "role_name": "Jefe de Compras",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000034,
                "role_uuid": "2112777c-e396-11e9-aedf-0242ac110002",
                "role_name": "Jefe de Control de Calidad",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000018,
                "role_uuid": "ef4b931c-ad7c-11e9-b5a2-0242ac110003",
                "role_name": "Jefe de Fábrica",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000014,
                "role_uuid": "cfdefe3c-ac97-11e9-9461-0242ac110004",
                "role_name": "Jefe de Logística y Eventos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000011,
                "role_uuid": "42ec2960-a895-11e9-9182-0242ac110004",
                "role_name": "Jefe de Nómina",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000047,
                "role_uuid": "848c17eb-f31b-43ae-8a1e-cc9afcf4626a",
                "role_name": "Jefe de Pos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000042,
                "role_uuid": "99594706-c3ca-11e9-b272-0242ac110004",
                "role_name": "Jefe de Producción",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000017,
                "role_uuid": "1e5c00a4-a8ca-11e9-aab3-0242ac110004",
                "role_name": "Jefe de Reclutamiento",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000010,
                "role_uuid": "754ef5a0-a7e0-11e9-bafa-0242ac110004",
                "role_name": "Jefe de Recursos Humanos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000032,
                "role_uuid": "a0469494-cd87-11e9-ae5c-0242ac110002",
                "role_name": "Jefe de Romana",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000052,
                "role_uuid": "b5463eda-ea62-4d1a-aef4-efc71160f727",
                "role_name": "Jefe de Sistema",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000004,
                "role_uuid": "fef600fc-7039-11e9-934e-0242ac140002",
                "role_name": "Jefe de Tesorería",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000050,
                "role_uuid": "be8711de-6101-4bc7-aab5-202cd70ad8fc",
                "role_name": "Jefe de Tributo",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000044,
                "role_uuid": "5d5c8e9e-cf77-11e9-9d7c-0242ac110002",
                "role_name": "Jefe de Almacén de Insumos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000007,
                "role_uuid": "a7d7a114-4045-11e9-b658-0242ac140002",
                "role_name": "Autogestión",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000062,
                "role_uuid": "1882bf57-4c3c-4de1-a64b-74fc72214342",
                "role_name": "Analista de Gestión Financiera",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000016,
                "role_uuid": "cde16a52-ac8d-11e9-b881-0242ac110004",
                "role_name": "Analista de Logística y Evento",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000031,
                "role_uuid": "abb91888-c3c8-11e9-8786-0242ac110004",
                "role_name": "Analista de Producción",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000012,
                "role_uuid": "2fb20d1c-a8c5-11e9-8a75-0242ac110004",
                "role_name": "Analista de Reclutamiento",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000066,
                "role_uuid": "38f17d4f-cedc-49a9-84de-92e8b9f2cb31",
                "role_name": "Jefe de CxC/Ventas/Almacén",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000009,
                "role_uuid": "e98bbbb4-a8a9-11e9-8376-0242ac110004",
                "role_name": "Analista de Recursos Humanos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000049,
                "role_uuid": "65f8c7ae-a724-433b-86a7-074d90df3a3c",
                "role_name": "Analista de Tributo",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000008,
                "role_uuid": "a7d7a1dc-4045-11e9-b658-0242ac140002",
                "role_name": "Analista de Ventas",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000064,
                "role_uuid": "a4eb17c2-3f65-47b8-8df3-c439dc13aee7",
                "role_name": "Información del Producto",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000026,
                "role_uuid": "0666a2ce-3b83-11e9-a324-0242ac140002",
                "role_name": "Jefe Autogestión",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000022,
                "role_uuid": "749a4d28-6dd7-11e9-a766-0242ac140002",
                "role_name": "Jefe de Almacén",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000024,
                "role_uuid": "2ec12fa6-c2d2-11e9-82ae-0242ac110004",
                "role_name": "Jefe de Cobranza",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000036,
                "role_uuid": "a0faede6-ce8a-11e9-84c8-0242ac110002",
                "role_name": "Jefe de Contabilidad",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000021,
                "role_uuid": "7030bb48-7663-11e9-974a-0242ac140009",
                "role_name": "Jefe de CxC",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000030,
                "role_uuid": "915f4c36-6dcf-11e9-bddb-0242ac140002",
                "role_name": "Jefe de CxP",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000053,
                "role_uuid": "981f9e14-c020-46d3-af1c-11a7168e4fd8",
                "role_name": "Mantenimiento de Solicitudes",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000006,
                "role_uuid": "f200c234-a805-11e9-9aa6-0242ac110004",
                "role_name": "Analista de Nómina",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000015,
                "role_uuid": "936767b6-a97a-11e9-b561-0242ac110004",
                "role_name": "Analista de Capacitación",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000025,
                "role_uuid": "f2676262-c2bf-11e9-943c-0242ac110004",
                "role_name": "Analista de Cobranza",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000028,
                "role_uuid": "a7d7a042-4045-11e9-b658-0242ac140002",
                "role_name": "Analista de Compras",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000037,
                "role_uuid": "73fa4b64-cdd8-11e9-9c84-0242ac110002",
                "role_name": "Analista de Contabilidad",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000035,
                "role_uuid": "7561c1f8-e395-11e9-aedf-0242ac110002",
                "role_name": "Analista de Control de Calidad",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000020,
                "role_uuid": "877746a8-765b-11e9-8afc-0242ac140009",
                "role_name": "Analista de CxC",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000029,
                "role_uuid": "c3913ab0-6dc1-11e9-b6c2-0242ac140002",
                "role_name": "Analista de CxP",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000019,
                "role_uuid": "d5e8d640-acb0-11e9-9ad6-0242ac110004",
                "role_name": "Analista de Fábrica",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000043,
                "role_uuid": "841a1048-c445-11e9-b99e-0242ac110004",
                "role_name": "Analista de Logística",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000033,
                "role_uuid": "e984142e-cda0-11e9-91de-0242ac110002",
                "role_name": "Analista de Romana",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000051,
                "role_uuid": "52c4c5b5-8396-480a-b385-4741309b6b45",
                "role_name": "Analista de Sistema",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000005,
                "role_uuid": "4f044aa6-7038-11e9-9ccd-0242ac140002",
                "role_name": "Analista de Tesorería",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000061,
                "role_uuid": "05bd78fe-9922-4254-8dae-88c6eba0c31d",
                "role_name": "Importación de Datos",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000063,
                "role_uuid": "d112fab2-fe0a-4865-8bcd-9fb38e3b4ab5",
                "role_name": "Jefe de Gestión Financiera",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000039,
                "role_uuid": "b76e8eec-c445-11e9-8b08-0242ac110004",
                "role_name": "Jefe de Logística",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000000,
                "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19",
                "role_name": "Compañía Estándar Admin",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000080,
                "role_uuid": "8f80b5f7-bbe2-4c99-a33c-8338a71a2402",
                "role_name": "Jefe de Recursos Humanos/Nómina",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000081,
                "role_uuid": "26d4bf39-53e5-42eb-b268-ba4569b72b35",
                "role_name": "Jefe de CxP/Compras",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000082,
                "role_uuid": "ed2128b8-bf40-486e-9450-499ede7610c0",
                "role_name": "Jefe de Comisiones",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000077,
                "role_uuid": "fdb386e9-413e-4617-9d86-1a82557e857f",
                "role_name": "MiniERP: Administrativo",
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
                "role_id": 1000085,
                "role_uuid": "cb22efd9-718b-4217-b572-80fdeb9f7c90",
                "role_name": "Gestor de Sistema",
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
            },
            {
                "role_id": 1000093,
                "role_uuid": "29acffbc-73d1-4690-8409-6820a17d6130",
                "role_name": "Test 1",
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
            }
        ],
        "current_roles": []
    }
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST adempiere-api/ui/set-record-access

Establecer el acceso al registro.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`id` - id de la entidad.
`uuid` - uuid de la entidad.
`table_name` - nombre de la tabla de la entidad
`record_accesses` - lista de accesos por rol

#### Cuerpo de la Petición:

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

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/adempiere-api/ui/set-record-access?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es' \
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

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "table_name": "M_Product_Group",
        "id": 1000002,
        "uuid": "a46108d8-40ed-11e9-91a1-0242ac140002",
        "available_roles": [
            {
                "role_id": 1000001,
                "role_uuid": "6e45fd2b-0ec4-4086-8930-544961926673",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000040,
                "role_uuid": "a7d7a2ae-4045-11e9-b658-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000065,
                "role_uuid": "b7d155ff-117d-48cf-b9e9-e488b4ea381f",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000023,
                "role_uuid": "49fe8e82-6dd5-11e9-bbd2-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000048,
                "role_uuid": "eb1d886f-e3de-42e8-9e21-44d83ca30595",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000038,
                "role_uuid": "d803b88c-d8a2-11e9-ba4c-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000013,
                "role_uuid": "e303fe6a-a975-11e9-accf-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000027,
                "role_uuid": "a7d79f66-4045-11e9-b658-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000034,
                "role_uuid": "2112777c-e396-11e9-aedf-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000018,
                "role_uuid": "ef4b931c-ad7c-11e9-b5a2-0242ac110003",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000014,
                "role_uuid": "cfdefe3c-ac97-11e9-9461-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000011,
                "role_uuid": "42ec2960-a895-11e9-9182-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000047,
                "role_uuid": "848c17eb-f31b-43ae-8a1e-cc9afcf4626a",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000042,
                "role_uuid": "99594706-c3ca-11e9-b272-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000017,
                "role_uuid": "1e5c00a4-a8ca-11e9-aab3-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000010,
                "role_uuid": "754ef5a0-a7e0-11e9-bafa-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000032,
                "role_uuid": "a0469494-cd87-11e9-ae5c-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000052,
                "role_uuid": "b5463eda-ea62-4d1a-aef4-efc71160f727",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000004,
                "role_uuid": "fef600fc-7039-11e9-934e-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000050,
                "role_uuid": "be8711de-6101-4bc7-aab5-202cd70ad8fc",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000044,
                "role_uuid": "5d5c8e9e-cf77-11e9-9d7c-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000007,
                "role_uuid": "a7d7a114-4045-11e9-b658-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000062,
                "role_uuid": "1882bf57-4c3c-4de1-a64b-74fc72214342",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000016,
                "role_uuid": "cde16a52-ac8d-11e9-b881-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000031,
                "role_uuid": "abb91888-c3c8-11e9-8786-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000012,
                "role_uuid": "2fb20d1c-a8c5-11e9-8a75-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000066,
                "role_uuid": "38f17d4f-cedc-49a9-84de-92e8b9f2cb31",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000009,
                "role_uuid": "e98bbbb4-a8a9-11e9-8376-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000049,
                "role_uuid": "65f8c7ae-a724-433b-86a7-074d90df3a3c",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000008,
                "role_uuid": "a7d7a1dc-4045-11e9-b658-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000064,
                "role_uuid": "a4eb17c2-3f65-47b8-8df3-c439dc13aee7",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000026,
                "role_uuid": "0666a2ce-3b83-11e9-a324-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000022,
                "role_uuid": "749a4d28-6dd7-11e9-a766-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000024,
                "role_uuid": "2ec12fa6-c2d2-11e9-82ae-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000036,
                "role_uuid": "a0faede6-ce8a-11e9-84c8-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000021,
                "role_uuid": "7030bb48-7663-11e9-974a-0242ac140009",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000030,
                "role_uuid": "915f4c36-6dcf-11e9-bddb-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000053,
                "role_uuid": "981f9e14-c020-46d3-af1c-11a7168e4fd8",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000006,
                "role_uuid": "f200c234-a805-11e9-9aa6-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000015,
                "role_uuid": "936767b6-a97a-11e9-b561-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000025,
                "role_uuid": "f2676262-c2bf-11e9-943c-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000028,
                "role_uuid": "a7d7a042-4045-11e9-b658-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000037,
                "role_uuid": "73fa4b64-cdd8-11e9-9c84-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000035,
                "role_uuid": "7561c1f8-e395-11e9-aedf-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000020,
                "role_uuid": "877746a8-765b-11e9-8afc-0242ac140009",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000029,
                "role_uuid": "c3913ab0-6dc1-11e9-b6c2-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000019,
                "role_uuid": "d5e8d640-acb0-11e9-9ad6-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000043,
                "role_uuid": "841a1048-c445-11e9-b99e-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000033,
                "role_uuid": "e984142e-cda0-11e9-91de-0242ac110002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000051,
                "role_uuid": "52c4c5b5-8396-480a-b385-4741309b6b45",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000005,
                "role_uuid": "4f044aa6-7038-11e9-9ccd-0242ac140002",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000061,
                "role_uuid": "05bd78fe-9922-4254-8dae-88c6eba0c31d",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000063,
                "role_uuid": "d112fab2-fe0a-4865-8bcd-9fb38e3b4ab5",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000039,
                "role_uuid": "b76e8eec-c445-11e9-8b08-0242ac110004",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000000,
                "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000080,
                "role_uuid": "8f80b5f7-bbe2-4c99-a33c-8338a71a2402",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000081,
                "role_uuid": "26d4bf39-53e5-42eb-b268-ba4569b72b35",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000082,
                "role_uuid": "ed2128b8-bf40-486e-9450-499ede7610c0",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000077,
                "role_uuid": "fdb386e9-413e-4617-9d86-1a82557e857f",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000083,
                "role_uuid": "a36ba44b-5e1f-4548-8599-df4ae08dc5c7",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000084,
                "role_uuid": "ccaba064-da21-495b-b612-8f61db11b9cb",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000085,
                "role_uuid": "cb22efd9-718b-4217-b572-80fdeb9f7c90",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000092,
                "role_uuid": "7aa4242a-93c0-42d8-92be-8250002d3e3c",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000093,
                "role_uuid": "29acffbc-73d1-4690-8409-6820a17d6130",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000070,
                "role_uuid": "f651466d-1444-4563-a2cf-69dd5f1abf2c",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000073,
                "role_uuid": "54c2d33d-a0a0-43b6-8da6-0bc2857c7f6a",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000088,
                "role_uuid": "9aad6573-61ff-46e9-b2d0-a5c25105a559",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000078,
                "role_uuid": "4286a406-8d67-4e0d-a25c-85a65b6a9a45",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000091,
                "role_uuid": "377190ef-752c-4a12-94b2-cfa48b92035e",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000079,
                "role_uuid": "1acfb3f4-850d-4b32-ab57-7f29fe28cd75",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000094,
                "role_uuid": "07db7fee-eb3c-4d8f-893c-a90f7ea911bd",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            },
            {
                "role_id": 1000095,
                "role_uuid": "90de9c18-34b8-40a5-9e81-57d9448735f4",
                "role_name": "",
                "is_active": false,
                "is_exclude": false,
                "is_read_only": false,
                "is_dependent_entities": false
            }
        ],
        "current_roles": [
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
}
```

#### Códigos de Repuesta:

- `200` cuando es exitoso
- `500` en caso de error