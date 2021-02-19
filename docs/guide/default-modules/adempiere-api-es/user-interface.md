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
curl 'https://your-domain.example.com/adempiere-api/ui/attachment?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name": "AD_Test","id": "50000","uuid": "a4cb498e-fb40-11e8-a479-7a0060f0aa01"}'
    
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
curl 'https://your-domain.example.com/adempiere-api/ui/resource-reference?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/create-chat-entry?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/get-report-output?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-drill-tables?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-report-views?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name":"RV_PrintFormatDetail","process_uuid":"a42a74fa-fb40-11e8-a479-7a0060f0aa01"}'
    
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-print-formatss?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/unlock-private-access?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/lock-private-access?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/get-private-access?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/get-private-access?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"query": "SELECT * FROM AD_Test","uuid": "771d2187-6103-430a-acfc-aee208f22a0c"}'
    
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-references?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-browser-items?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MIGOCERAMICAS, C.A. I"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000434
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000295
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000434
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000295
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000130
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
                        "value": "2020-03-03T22:30:01.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000341
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-02T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-02T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-03T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-11"
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
                        "value": 150377.33
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583333578134.135
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 129635.63
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-04T20:19:09.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000021
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JUAN LEDEZMA"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Autorización Devolución Cliente POS"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1005604
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1005411
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005604
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1005411
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000266
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000266
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1036015
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-08-31T16:53:20.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000402
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-35386"
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
                        "value": 4590585.83
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1598892805641.641
                    },
                    {
                        "key": "O_Processing"
                    },
                    {
                        "key": "O_PromotionCode"
                    },
                    {
                        "key": "O_Ref_Order_ID",
                        "value": 1035966
                    },
                    {
                        "key": "O_SalesRep_ID",
                        "value": 1000347
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 3957401.58
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-10-19T17:43:37.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "OSCAR RAMON "
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
                        "key": "O_AD_User_ID"
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
                        "value": 1005120
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1004929
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005120
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1004929
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1030821
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2020-08-13T12:46:23.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000360
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-08-13T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-08-13T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-08-13T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-30266"
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
                        "value": 249819.72
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1597323081289.2898
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
                        "value": 1000360
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 249819.72
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-08-13T13:32:20.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
                        "value": 1
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
                        "value": "GUSTAVO RAMIREZ"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000606
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000437
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000606
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000437
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000170
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
                        "value": "2020-03-04T02:53:17.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000341
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-02T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-02T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-03T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-49"
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
                        "value": 55993.2
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583334268411.4111
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 48270
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-04T20:20:14.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000021
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "GILBERTO CASIQUE"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1002260
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1002065
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1002260
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1002065
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1037330
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-09-04T14:55:18.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000359
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-36684"
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
                        "value": 520217.56
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1599231506592.5928
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 520217.56
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-04T15:06:17.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
                        "value": 2
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
                        "value": "JOSE RICO"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
                    },
                    {
                        "key": "DisplayColumn_O_DeliveryRule",
                        "value": "Disponibilidad"
                    },
                    {
                        "key": "DisplayColumn_O_DocStatus",
                        "value": "Cerrado"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000552
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000384
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000552
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000384
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000120
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
                        "value": "2020-03-03T19:42:21.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000341
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-02T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-02T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-03T04:00:00.000Z"
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
                        "key": "O_Description"
                    },
                    {
                        "key": "O_DocAction"
                    },
                    {
                        "key": "O_DocStatus",
                        "value": "CL"
                    },
                    {
                        "key": "O_DocumentNo",
                        "value": "OPOS-1"
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
                        "value": 16945.26
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": "N"
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
                        "value": true
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
                        "value": 1000007
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
                        "key": "O_POReference",
                        "value": "rubelys "
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
                        "value": 1583333503411.4119
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 0
                    },
                    {
                        "key": "O_Updated",
                        "value": "2021-01-05T18:32:06.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000347
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "INDUSTRIA VENEZOLANA DE CEMENTO (INVECEM) S.A"
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
                        "value": "Borrador"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000380
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000241
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000380
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000241
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
                        "value": 0
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000175
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
                        "value": "2020-03-04T16:32:08.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000350
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-04T04:00:00.000Z"
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
                        "key": "O_Description"
                    },
                    {
                        "key": "O_DocAction"
                    },
                    {
                        "key": "O_DocStatus",
                        "value": "DR"
                    },
                    {
                        "key": "O_DocumentNo",
                        "value": "OCN-4"
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
                        "value": 0
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
                        "value": "N"
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
                        "value": false
                    },
                    {
                        "key": "O_ProcessedOn",
                        "value": 0
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
                        "value": 1000313
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 0
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-04T18:51:28.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000350
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "ALZA TORRES "
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000650
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000480
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000650
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000480
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000221
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
                        "value": "2020-03-05T00:30:07.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000341
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-03T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-03T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-98"
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
                        "value": 178417.42
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583436744707.7073
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 178417.42
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-12T18:04:24.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000022
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MARIA FLORES"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1000654
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000484
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000654
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000484
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000226
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
                        "value": "2020-03-05T01:25:37.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000341
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-03T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-03T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-103"
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
                        "value": 1028131.2
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583967530608.609
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
                        "value": 1000351
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 886320
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-11T22:59:20.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000022
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MANUEL ACASIO DA SILVA BRAZAO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000856
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000682
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000856
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000682
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1014248
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-06-17T13:20:19.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-06-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-06-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-06-17T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-14097"
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
                        "value": 2269385.31
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1592410432928.929
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 1956366.64
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-17T14:08:23.000Z"
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "BALGRES, C.A."
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
                        "value": 1000001
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1005701
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1005726
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005701
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1005726
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
                        "value": 1054643
                    },
                    {
                        "key": "O_C_POS_ID"
                    },
                    {
                        "key": "O_C_PaymentTerm_ID",
                        "value": 1000053
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
                        "value": "2020-11-10T19:28:41.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000387
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-11-10T04:00:00.000Z"
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
                        "value": "NUEVA CONSIGNACION RECIBIDA CON SAINT OC 21565 17-09"
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
                        "value": "OCN-1119"
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
                        "value": 778250844
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
                        "value": 1000015
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
                        "value": 1605037014919.92
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
                        "value": 670905900
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-11-12T13:19:45.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000328
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "WENDY MEJIA"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1006361
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1006169
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1006361
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1006169
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1040734
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2020-09-18T12:13:53.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000351
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-18T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-18T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-18T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-39928"
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
                        "value": 14806411.65
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1600431660249.2493
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
                        "value": 1000351
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 12764147.97
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-19T14:56:02.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "ALEJANDRA BERMUDEZ "
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000628
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000459
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000628
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000459
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000407
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
                        "value": "2020-03-06T00:32:41.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-05T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-275"
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
                        "value": 117471.03
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1583442925520.5203
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 101268.13
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-13T15:21:11.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000339
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JAIRO ROMERO"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1000727
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000557
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000727
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000557
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000336
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
                        "value": "2020-03-05T21:22:25.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-05T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-204"
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
                        "value": 5694801.92
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583443266217.2173
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
                        "value": 1000351
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 4909312
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-13T14:52:57.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000339
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "ALBATROS CONNETION C.A"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000731
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000561
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000731
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000561
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000340
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
                        "value": "2020-03-05T21:26:00.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-05T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-208"
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
                        "value": 525290.92
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583443290872.8728
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 452837
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-13T15:32:56.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000339
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "DANIEL ARIAS"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
                    },
                    {
                        "key": "DisplayColumn_O_DeliveryRule",
                        "value": "Forzado"
                    },
                    {
                        "key": "DisplayColumn_O_DocStatus",
                        "value": "Cerrado"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000733
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000563
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000733
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000563
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000342
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
                        "value": "2020-03-05T21:31:38.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-05T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
                    },
                    {
                        "key": "O_DocAction"
                    },
                    {
                        "key": "O_DocStatus",
                        "value": "CL"
                    },
                    {
                        "key": "O_DocumentNo",
                        "value": "OPOS-210"
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
                        "value": 589294.4
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": "N"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583443318951.9514
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 0
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-06T20:45:51.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000341
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "YAJAIRA FREY "
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000734
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000564
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000734
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000564
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000344
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
                        "value": "2020-03-05T21:32:56.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000341
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-05T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-212"
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
                        "value": 967519.46
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583445544554.5542
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 919288.73
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-13T14:46:33.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000339
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JUANCHOS CAFE C.A"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1000714
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000544
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000714
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000544
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000308
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-05T19:35:37.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000351
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-05T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-05T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-05T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-177"
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
                        "value": 111269.38
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583931904852.8523
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
                        "value": 1000351
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 95921.88
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-11T17:05:34.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000022
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "PEDRO MIGUEL MENDEZ RODRIGUEZ"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000795
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000625
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000795
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000625
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000488
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-06T18:27:39.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000348
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-350"
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
                        "value": 109033.09
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583505605273.2732
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 93994.04
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-04-16T17:09:42.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000355
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "vagas castillo"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000811
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000641
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000811
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000641
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000491
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-06T18:34:01.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-353"
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
                        "value": 908264.22
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583506248298.2986
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 782986.4
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-06T19:00:34.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "Cliente Unico"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000001
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1000006
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000003
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000006
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000003
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 0
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1074565
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000015
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
                        "value": "2021-02-11T15:13:54.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000019
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2021-02-10T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2021-02-10T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2021-02-10T04:00:00.000Z"
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
                        "key": "O_Description"
                    },
                    {
                        "key": "O_DocAction"
                    },
                    {
                        "key": "O_DocStatus",
                        "value": "DR"
                    },
                    {
                        "key": "O_DocumentNo",
                        "value": "OPOS-72766"
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
                        "value": 0
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
                    },
                    {
                        "key": "O_IsActive",
                        "value": true
                    },
                    {
                        "key": "O_IsApproved",
                        "value": false
                    },
                    {
                        "key": "O_IsCreditApproved",
                        "value": false
                    },
                    {
                        "key": "O_IsDelivered",
                        "value": "N"
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
                        "value": true
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
                        "value": 1000007
                    },
                    {
                        "key": "O_M_Shipper_ID"
                    },
                    {
                        "key": "O_M_Warehouse_ID",
                        "value": 1000015
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
                        "value": false
                    },
                    {
                        "key": "O_ProcessedOn"
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
                        "value": 1000406
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 0
                    },
                    {
                        "key": "O_Updated",
                        "value": "2021-02-11T15:17:13.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000019
                    },
                    {
                        "key": "O_User1_ID"
                    },
                    {
                        "key": "O_User2_ID"
                    },
                    {
                        "key": "O_Volume"
                    },
                    {
                        "key": "O_Weight"
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
                        "value": "LUIS ALONSO TREJO GERIG"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000861
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000687
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000861
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000687
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000661
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-07T17:50:04.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-07T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-506"
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
                        "value": 109033.09
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583591605665.6653
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 93994.04
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-04-13T19:37:48.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "CARLOS MORENO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000866
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000692
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000866
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000692
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000669
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-07T18:39:47.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000359
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-07T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-514"
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
                        "value": 472317.05
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583592371664.6643
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 449619.4
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-04-13T23:30:56.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000327
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "BEATRIZ HERNANDEZ"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1003429
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1003236
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1003429
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1003236
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1057054
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2020-11-18T15:41:15.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000348
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-11-18T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-11-18T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-11-18T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-55675"
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
                        "value": 34479881.01
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1605715616841.8418
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 29905552.6
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-11-18T16:18:59.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "ALEXANDER MONTERO"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1001886
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1001692
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1001886
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1001692
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1004818
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
                        "value": "2020-05-04T17:59:41.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-04-30T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-04-30T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-05-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-4579"
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
                        "value": 742353.6
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1588600929315.3157
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 639960
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-05-04T18:16:11.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "DAVID ENRIQUE DONATO BRACAMONTE"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000787
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000618
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000787
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000618
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000472
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-06T17:56:00.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000347
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-335"
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
                        "value": 4463541.31
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583505119795.7952
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
                        "value": 1000347
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 3847880.44
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-10T16:36:46.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "ANGEL EDUARDO QUEVEDO ROMERO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000812
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000642
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000812
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000642
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000494
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-06T18:53:27.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-356"
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
                        "value": 3883760.04
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583507165043.434
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
                        "value": 1000347
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 3348069
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-06T21:51:57.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MARCO JUNIOR DIAZ FLORES"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000813
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000643
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000813
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000643
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000496
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-06T18:57:59.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-358"
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
                        "value": 1998259.44
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583507703143.144
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
                        "value": 1000347
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 1722637.45
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-11T16:49:25.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "EMPRESA ECOLOGICA ECOLIMPIO, C.A."
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000508
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000344
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000508
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000344
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
                        "value": 1000510
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
                        "value": "2020-03-06T19:17:48.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000327
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OCN-19"
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
                        "value": 139423.16
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
                        "value": "N"
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
                        "value": 1583507908599.5999
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
                        "value": 1000350
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 139423.16
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-06T19:18:28.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000327
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "SERDIN, C.A"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000517
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000353
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000517
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000353
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
                        "value": 1000597
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
                        "value": "2020-03-06T22:24:29.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000327
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OCN-26"
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
                        "value": 2205150
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
                        "value": "N"
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
                        "value": 1583519227603.6033
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
                        "value": 1000350
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 2205150
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-06T22:27:07.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000327
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MISS HORTALIZAS DEL VALLE C.A"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID"
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
                        "value": 1001282
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1001087
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1001282
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1001087
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1024508
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
                        "value": "2020-07-22T22:08:43.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000325
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-24154"
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
                        "value": 488126.34
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1595455845834.8342
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
                        "value": 1000339
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 420798.57
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-07-22T22:13:20.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000325
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "LUIS ALBERTO"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_OrgTrx_ID"
                    },
                    {
                        "key": "O_AD_Org_ID",
                        "value": 1000000
                    },
                    {
                        "key": "O_AD_User_ID",
                        "value": 1000049
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
                        "value": 1000193
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000182
                    },
                    {
                        "key": "O_Bill_User_ID",
                        "value": 1000049
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000193
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000182
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1024510
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
                        "value": "2020-07-22T22:20:09.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000325
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
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
                        "value": "OPOS-24156"
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
                        "value": 82094.15
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1595456435307.3074
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
                        "value": 1000339
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 70770.82
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-07-22T22:22:28.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000325
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JUAN CARLOS SANTANA"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
                    },
                    {
                        "key": "DisplayColumn_O_DeliveryRule",
                        "value": "Forzado"
                    },
                    {
                        "key": "DisplayColumn_O_DocStatus",
                        "value": "Cerrado"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1004420
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1004228
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1004420
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1004228
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1024512
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
                        "value": "2020-07-22T22:32:24.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000325
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DeliveryRule",
                        "value": "F"
                    },
                    {
                        "key": "O_DeliveryViaRule",
                        "value": "P"
                    },
                    {
                        "key": "O_Description"
                    },
                    {
                        "key": "O_DocAction"
                    },
                    {
                        "key": "O_DocStatus",
                        "value": "CL"
                    },
                    {
                        "key": "O_DocumentNo",
                        "value": "OPOS-24158"
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
                        "value": 24671.28
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": "N"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1595457211578.5781
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
                        "value": 1000339
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 0
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-07-28T21:55:53.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000327
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JOSE SILVA"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000846
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000672
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000846
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000672
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1025515
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
                        "value": "2020-07-26T17:22:15.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-25156"
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
                        "value": 3995029.42
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1595784446297.2979
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
                        "value": 1000339
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 3443990.88
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-15T15:02:14.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "DARWIN DARIO RUIZ CAMACARO"
                    },
                    {
                        "key": "DisplayColumn_O_C_DocTypeTarget_ID",
                        "value": "Orden POS (Manual)"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000800
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000630
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000800
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000630
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
                        "value": 1000271
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000271
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1027640
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
                        "value": "2020-08-03T18:22:09.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000339
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-27178"
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
                        "value": 1165128.01
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1596478965491.4912
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
                        "value": 1000339
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 1004420.7
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-08-03T18:24:05.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000339
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MANUEL ACASIO DA SILVA BRAZAO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000856
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000682
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000856
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000682
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000615
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-06T22:51:28.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-07T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-460"
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
                        "value": 279571.67
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583584706028.283
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 241010.06
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-04-13T19:35:21.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "maudi   duran"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000857
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000683
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000857
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000683
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000638
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-07T16:35:16.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000365
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-07T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-483"
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
                        "value": 289890.64
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583584978366.366
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
                        "value": 1000365
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 249905.72
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-07T16:46:13.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "Mariela"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1000862
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000688
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000862
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000688
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1000666
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-03-07T18:22:48.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000359
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-03-07T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-03-07T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-511"
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
                        "value": 150755.5
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1583591441702.7026
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 129961.64
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-03-07T18:39:18.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "RAMON PEREZ "
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
                        "key": "O_AD_User_ID"
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
                        "value": 1005850
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1005656
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005850
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1005656
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1037325
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2020-09-04T14:52:07.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000348
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-36679"
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
                        "value": 1088743.29
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1599233864776.7761
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 938571.8
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-04T15:41:22.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "MIGUEL CANELON"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1005861
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1005667
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005861
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1005667
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1037379
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-09-04T15:41:44.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000347
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-36733"
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
                        "value": 1173423.32
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1599234419788.7883
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
                        "value": 1000347
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 1011571.83
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-04T15:54:45.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "CARIDAD AQUINO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1003031
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1002838
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1003031
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1002838
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1037412
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-09-04T16:26:08.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000359
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-36766"
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
                        "value": 1270556.06
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1599237027865.866
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 1270556.06
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-10-05T18:03:31.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
                        "value": 2
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
                        "value": "SHEILA JIMENEZ "
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
                        "key": "O_AD_User_ID"
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
                        "value": 1005259
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1005066
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005259
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1005066
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1037422
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-09-04T16:31:02.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000359
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-36776"
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
                        "value": 808639.22
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1599237253970.9707
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 808639.22
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-04T18:04:05.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
                        "value": 3
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
                        "value": "FERNANDO RODRIGUEZ"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1003857
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1003664
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1003857
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1003664
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1019277
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000001
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
                        "value": "2020-07-04T17:07:32.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000351
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-07-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-07-04T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-07-04T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-19024"
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
                        "value": 438240.19
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1593882810893.893
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
                        "value": 1000351
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 377793.27
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-07-04T17:18:59.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "ALEXIS SUVERO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1003867
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1003674
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1003867
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1003674
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1019324
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-07-06T12:45:19.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000360
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-07-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-07-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-07-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-19071"
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
                        "value": 454462.18
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1594041746447.4473
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
                        "value": 1000360
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 391777.74
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-07-06T13:25:15.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JOSEP´HIL YN DENISSE CAMPANELLI MADRIO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1003866
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1003673
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1003866
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1003673
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1019351
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2020-07-06T13:14:14.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-07-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-07-06T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-07-06T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-19095"
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
                        "value": 9570725
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1594042210232.2324
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
                        "value": 1000348
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 8250625
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-07-06T13:47:06.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "POSADA LOMA BRISA C.A"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1006343
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1006151
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1006343
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1006151
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1069794
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2021-01-11T14:12:50.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000345
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2021-01-11T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2021-01-11T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2021-01-11T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-68069"
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
                        "value": 15704749.13
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1610374902870.8706
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
                        "value": 1000345
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 13538576.84
                    },
                    {
                        "key": "O_Updated",
                        "value": "2021-01-11T14:22:56.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "FREDY GARRIDO"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1006278
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1006086
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1006278
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1006086
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1040662
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000004
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
                        "value": "2020-09-17T16:41:44.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000359
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-09-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-09-17T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-09-17T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-39857"
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
                        "value": 162017.94
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1600361028801.8018
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
                        "value": 1000359
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 139670.64
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-18T11:56:40.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000353
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "DISTRIBUIDORA BM 2014, C.A"
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
                        "value": 1000275
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
                        "value": 1000453
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1000313
                    },
                    {
                        "key": "O_Bill_User_ID",
                        "value": 1000275
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1000453
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1000313
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
                        "value": 1035863
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
                        "value": "2020-08-31T13:53:25.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000311
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-08-31T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OCN-698"
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
                        "value": 6032000
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
                        "value": 1598882590582.5825
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
                        "value": 1000311
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 5200000
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-08-31T14:17:12.000Z"
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
            },
            {
                "id": 0,
                "uuid": "",
                "table_name": "",
                "attributes": [
                    {
                        "key": "DisplayColumn_O_C_BPartner_ID",
                        "value": "JOSE LASTRAS"
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
                        "key": "O_AD_User_ID"
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
                        "value": 1005678
                    },
                    {
                        "key": "O_Bill_Location_ID",
                        "value": 1005485
                    },
                    {
                        "key": "O_Bill_User_ID"
                    },
                    {
                        "key": "O_C_Activity_ID"
                    },
                    {
                        "key": "O_C_BPartner_ID",
                        "value": 1005678
                    },
                    {
                        "key": "O_C_BPartner_Location_ID",
                        "value": 1005485
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
                        "key": "O_C_ConversionType_ID"
                    },
                    {
                        "key": "O_C_Currency_ID",
                        "value": 50001
                    },
                    {
                        "key": "O_C_DocTypeTarget_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_DocType_ID",
                        "value": 1000039
                    },
                    {
                        "key": "O_C_Opportunity_ID"
                    },
                    {
                        "key": "O_C_OrderSource_ID"
                    },
                    {
                        "key": "O_C_Order_ID",
                        "value": 1035931
                    },
                    {
                        "key": "O_C_POS_ID",
                        "value": 1000003
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
                        "value": "2020-08-31T14:49:26.000Z"
                    },
                    {
                        "key": "O_CreatedBy",
                        "value": 1000364
                    },
                    {
                        "key": "O_DateAcct",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DateOrdered",
                        "value": "2020-08-31T04:00:00.000Z"
                    },
                    {
                        "key": "O_DatePrinted"
                    },
                    {
                        "key": "O_DatePromised",
                        "value": "2020-08-31T04:00:00.000Z"
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
                        "key": "O_Description"
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
                        "value": "OPOS-35304"
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
                        "value": 2980818.58
                    },
                    {
                        "key": "O_InvoiceRule",
                        "value": "I"
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
                        "value": true
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
                        "value": 1000007
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
                        "value": 1598885841043.4373
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
                        "value": 1000364
                    },
                    {
                        "key": "O_SendEMail",
                        "value": false
                    },
                    {
                        "key": "O_TotalLines",
                        "value": 2620389.26
                    },
                    {
                        "key": "O_Updated",
                        "value": "2020-09-01T15:42:03.000Z"
                    },
                    {
                        "key": "O_UpdatedBy",
                        "value": 1000352
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-lookup-items?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name":"AD_Ref_List","query":"SELECT NULL, AD_Ref_List.Value,trl.Name, AD_Ref_List.IsActive, AD_Ref_List.UUID FROM AD_Ref_List INNER JOIN AD_Ref_List_Trl trl  ON (AD_Ref_List.AD_Ref_List_ID=trl.AD_Ref_List_ID AND trl.AD_Language='es_VE') WHERE AD_Ref_List.AD_Reference_ID=131 ORDER BY 3","filters":[]}'
    
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
curl 'https://your-domain.example.com/adempiere-api/ui/get-lookup-item?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"table_name":"AD_Ref_List","query":"SELECT NULL, AD_Ref_List.Value,trl.Name, AD_Ref_List.IsActive, AD_Ref_List.UUID FROM AD_Ref_List INNER JOIN AD_Ref_List_Trl trl  ON (AD_Ref_List.AD_Ref_List_ID=trl.AD_Ref_List_ID AND trl.AD_Language='es_VE') WHERE AD_Ref_List.AD_Reference_ID=131 ORDER BY 3","filters":[]}'
    
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
curl 'https://your-domain.example.com/adempiere-api/ui/list-translations?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/get-default-value?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
curl 'https://your-domain.example.com/adempiere-api/ui/run-callout?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"tableName": "AD_TEST","windowUuid": "771d2187-6103-430a-acfc-aee208f22a0c","callout": "INSERT","columnName": "IsActive","oldValue": false,"value": true,"tabUuid": "987d2187-6103-430a-acfc-aee208f22a0c","windowNo": 2,"attributesList": []}'
    
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
curl 'https://your-domain.example.com/adempiere-api/ui/rollback-entity?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"tableName": "AD_TEST","id": 15,"uuid": "771d2187-6103-430a-acfc-aee208f22a0c"}'
    
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
