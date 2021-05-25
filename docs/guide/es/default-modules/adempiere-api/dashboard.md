## Servicios del Panel de Control

### GET /api/dashboard/dashboards

Obtiene la lista de tableros o paneles de control los que el usuario tiene acceso según su rol.

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de la página (personalizado)
- `page_token` - token de la página (opcional para obtener una página específica)
- `role_uuid` - uuid del rol actual
- `role_id` - id del rol actual

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/dashboard/dashboards?token=%3Ctoken-generated-for-demo-api%3E&language=es&role_id=1000000&role_uuid=f855ca25-07b2-4760-aec6-676db1a5cb19'
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

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error



## Servicios del Panel de Control del Usuario

### GET /api/dashboard/addons/user/favorites

Lista de favoritos

#### Parámetros:

`token` - token de usuario devuelto de `POST /api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`page_size` - tamaño de las listas de la paginación.
`page_token` - token el numero de la página.
`user_uuid` - uuid del usuario.
`user_id` - id del usuario

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/dashboard/addons/user/favorites?token=%3Ctoken-generated-for-demo-api%3E&language=es&user_uuid=901d9a74-6334-4309-aa8a-6d5b39d8ceb1'}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 0,
        "next_page_token": "",
        "records": []
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### GET /api/dashboard/addons/user/recent-items

Obtiene la lista de elementos recientes a los que accedio el usuario y/o rol.

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de la página (personalizado)
- `page_token` - token de la página (opcional para obtener una página específica)
- `user_uuid` - uuid de usuario
- `role_uuid` - uuid de rol
- `current_session` - es la sesión actual

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/dashboard/addons/user/recent-items?token=%3Ctoken-generated-for-demo-api%3E&language=es&user_uuid=5adc9357-9158-40fe-86f1-4ce383586f5b&role_uuid=f855ca25-07b2-4760-aec6-676db1a5cb19&current_session=true'
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
                "menu_uuid": "8e50f316-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Documentos por Pagar",
                "menu_description": "Entrar Facturas de Proveedor",
                "window_uuid": "a520e312-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "a4a0f22e-fb40-11e8-a479-7a0060f0aa01",
                "table_id": 318,
                "table_name": "C_Invoice",
                "id": 1000571,
                "uuid": "231c7841-3ffb-424b-8ac6-e73529cf3ffa",
                "display_name": "Documentos por Pagar: _1000136_13/05/2021_6000000",
                "updated": "2021-05-14T12:24:50.632Z",
                "reference_uuid": "a520e312-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "f478f578-8356-11e9-bd5a-fb093b8e4611",
                "menu_name": "Referencia de Adjunto",
                "menu_description": "Usado para guardar referencia de todos los adjuntos",
                "window_uuid": "f5cd4e3e-8355-11e9-9bb0-7317b9981235",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Referencia de Adjunto",
                "updated": "2021-05-14T07:36:33.655Z",
                "reference_uuid": "f5cd4e3e-8355-11e9-9bb0-7317b9981235",
                "action": "W"
            },
            {
                "menu_uuid": "8e529554-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Mantenimiento del Árbol",
                "menu_description": "Mantener árboles",
                "window_uuid": "a520e6be-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Mantenimiento del Árbol",
                "updated": "2021-05-14T07:27:21.000Z",
                "reference_uuid": "8e4266e8-fb40-11e8-a479-7a0060f0aa01",
                "action": "X"
            },
            {
                "menu_uuid": "94f41bb2-57bb-432f-a22a-488cbf82dc87",
                "menu_name": "Check Price",
                "menu_description": "Check Product Price and values",
                "window_uuid": "a5219b72-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Check Price",
                "updated": "2021-05-14T07:26:54.179Z",
                "reference_uuid": "5aacaab1-1ba0-4cf0-992a-0da34c460ffe",
                "action": "X"
            },
            {
                "menu_uuid": "8e50d7c8-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Órdenes de Venta",
                "menu_description": "Entrar y cambiar ordenes de ventas",
                "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "a49ff9be-fb40-11e8-a479-7a0060f0aa01",
                "table_id": 259,
                "table_name": "C_Order",
                "id": 1000613,
                "uuid": "9f47d337-ebb7-45d6-ac88-fdd26978ac89",
                "display_name": "Órdenes de Venta: _OVN-62_13/05/2021",
                "updated": "2021-05-14T07:26:05.771Z",
                "reference_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e5215a2-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Punto de Venta",
                "menu_description": "Terminal de Punto de Venta",
                "window_uuid": "a520d304-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Punto de Venta",
                "updated": "2021-05-13T21:28:56.432Z",
                "reference_uuid": "8e427700-fb40-11e8-a479-7a0060f0aa01",
                "action": "X"
            },
            {
                "menu_uuid": "8e50f4ec-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Sesión",
                "menu_description": "Lista sesiones de usuario",
                "window_uuid": "a521a9e6-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Sesión",
                "updated": "2021-05-13T20:59:06.000Z",
                "reference_uuid": "a521a9e6-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e51992e-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Documentos por Cobrar",
                "menu_description": "Entrar factura de cliente",
                "window_uuid": "a5220bac-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "a4a10c8c-fb40-11e8-a479-7a0060f0aa01",
                "table_id": 318,
                "table_name": "C_Invoice",
                "id": 1000551,
                "uuid": "b30e9000-4364-4224-b55a-51235e2a80a1",
                "display_name": "Documentos por Cobrar: _AJDCCXC-5_12/05/2021_4800000.00",
                "updated": "2021-05-13T19:43:30.238Z",
                "reference_uuid": "a5220bac-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "f3426278-12c9-11e9-86d6-03910c824783",
                "menu_name": "Calendario de RRHH",
                "menu_description": "Mantenimiento de Calendario de RRHH",
                "window_uuid": "1bb347f6-12c8-11e9-ab6d-af84ed4eb83b",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Calendario de RRHH",
                "updated": "2021-05-13T19:07:28.000Z",
                "reference_uuid": "1bb347f6-12c8-11e9-ab6d-af84ed4eb83b",
                "action": "W"
            },
            {
                "menu_uuid": "f2bf71a6-12c9-11e9-86d2-8f4ce3157106",
                "menu_name": "Incidencia de Nómina",
                "menu_description": "Incidencia de Nómina",
                "window_uuid": "c31e4ff0-12c7-11e9-a96e-23babc97a8af",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Incidencia de Nómina",
                "updated": "2021-05-13T19:06:53.000Z",
                "reference_uuid": "c31e4ff0-12c7-11e9-a96e-23babc97a8af",
                "action": "W"
            },
            {
                "menu_uuid": "8e50e75e-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Posición",
                "menu_description": "Mantener posiciones.",
                "window_uuid": "a5213cfe-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Posición",
                "updated": "2021-05-13T19:04:07.000Z",
                "reference_uuid": "a5213cfe-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e50e7ae-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Categoría de Posición",
                "menu_description": "Categoría de posición",
                "window_uuid": "a5213dc6-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Categoría de Posición",
                "updated": "2021-05-13T19:03:58.448Z",
                "reference_uuid": "a5213dc6-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e5267f0-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Procesar Nómina",
                "menu_description": "El procesamiento de nómina es usado para procesar una nómina, se puede calcular para un empleado o todos",
                "window_uuid": "",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Procesar Nómina",
                "updated": "2021-05-13T19:03:42.000Z",
                "reference_uuid": "a42c65f8-fb40-11e8-a479-7a0060f0aa01",
                "action": "P"
            },
            {
                "menu_uuid": "8e52b5a2-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Imprimir/Exportar Pagos",
                "menu_description": "Imprimir o exportar sus pagos",
                "window_uuid": "",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Imprimir/Exportar Pagos",
                "updated": "2021-05-13T18:36:59.021Z",
                "reference_uuid": "8e426968-fb40-11e8-a479-7a0060f0aa01",
                "action": "X"
            },
            {
                "menu_uuid": "8e50bafe-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Selección de Pago",
                "menu_description": "Seleccionar facturas para pago",
                "window_uuid": "a5210e14-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "a49ffd74-fb40-11e8-a479-7a0060f0aa01",
                "table_id": 426,
                "table_name": "C_PaySelection",
                "id": 1000045,
                "uuid": "a6589b06-37e5-4bcf-9c6b-63b0d461c029",
                "display_name": "Selección de Pago: _1000035_8841057.68",
                "updated": "2021-05-13T18:34:49.680Z",
                "reference_uuid": "a5210e14-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e50bbda-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Proceso Nómina",
                "menu_description": "Proceso Nómina",
                "window_uuid": "a521a356-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "a4a1ee54-fb40-11e8-a479-7a0060f0aa01",
                "table_id": 53092,
                "table_name": "HR_Process",
                "id": 1000046,
                "uuid": "58c5096d-f83f-48f0-9703-6a50c611aa01",
                "display_name": "Proceso Nómina: _NQ-11_Nómina Quincenal",
                "updated": "2021-05-13T18:25:17.130Z",
                "reference_uuid": "a521a356-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e516756-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Tipo de Recurso de Manufactura",
                "menu_description": "Mantener tipos de recursos",
                "window_uuid": "a5212994-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Tipo de Recurso de Manufactura",
                "updated": "2021-05-13T18:07:35.706Z",
                "reference_uuid": "a5212994-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e5100f4-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Pago/Cobro",
                "menu_description": "Procesar Pagos y Cobros",
                "window_uuid": "a5211e40-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "a4a3907e-fb40-11e8-a479-7a0060f0aa01",
                "table_id": 335,
                "table_name": "C_Payment",
                "id": 1000223,
                "uuid": "9bd31f95-b903-4397-8973-1b0c9dfb85e7",
                "display_name": "Pago/Cobro: _CCxCN-123_30/03/2021_100.00",
                "updated": "2021-05-13T17:36:06.000Z",
                "reference_uuid": "a5211e40-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e50d818-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Categoría de Producto",
                "menu_description": "Mantener categorías de producto",
                "window_uuid": "a520fdde-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Categoría de Producto",
                "updated": "2021-05-13T16:42:41.000Z",
                "reference_uuid": "a520fdde-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            },
            {
                "menu_uuid": "8e51318c-fb40-11e8-a479-7a0060f0aa01",
                "menu_name": "Producción",
                "menu_description": "Producción basada en Lista de Partes",
                "window_uuid": "a520e88a-fb40-11e8-a479-7a0060f0aa01",
                "tab_uuid": "",
                "table_id": 0,
                "table_name": "",
                "id": 0,
                "uuid": "",
                "display_name": "Producción",
                "updated": "2021-05-13T16:41:05.000Z",
                "reference_uuid": "a520e88a-fb40-11e8-a479-7a0060f0aa01",
                "action": "W"
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

## Servicios del Panel de Control de Tareas
### GET /api/dashboard/addons/tasks/pending-documents

Obtiene la lista de los documentos pendiente.

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de la página (personalizado)
- `page_token` - token de la página (opcional para obtener una página específica)
- `user_uuid` - uuid del usuario actual
- `user_id` - id del usuario actual
- `role_uuid` - uuid del rol actual
- `role_id` - id del rol actual

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/dashboard/addons/tasks/pending-documents?token=%3Ctoken-generated-for-demo-api%3E&language=es&user_uuid=5adc9357-9158-40fe-86f1-4ce383586f5b&role_uuid=f855ca25-07b2-4760-aec6-676db1a5cb19&current_session=true'
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
                "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Venta (A Granel) Pendientes por Cerrar",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "C_Order",
                    "query": "",
                    "where_clause": "C_Order.IsSOTrx='Y' \nAND C_Order.DocStatus = 'CO'\nAND EXISTS(SELECT 1 \n    FROM C_OrderLine ol \n    WHERE ol.C_Order_ID = C_Order.C_Order_ID\n    AND EXISTS(SELECT 1 FROM M_Product p WHERE p.M_Product_ID = ol.M_Product_ID AND p.IsBulkProduct = 'Y')\n    AND ol.QtyInvoiced <> 0\n    AND ol.QtyDelivered <> 0\n    AND ol.QtyOrdered <> ol.QtyInvoiced\n    AND ol.QtyOrdered <> ol.QtyDelivered\n)",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Venta Pendientes por Facturar",
                "document_description": "",
                "sequence": 0,
                "record_count": 16,
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
                "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Venta Pendientes por Entregar",
                "document_description": "",
                "sequence": 0,
                "record_count": 23,
                "criteria": {
                    "table_name": "C_Order",
                    "query": "",
                    "where_clause": "C_Order.IsSOTrx='Y' \nAND C_Order.DocStatus = 'CO'\nAND EXISTS(SELECT 1 \n    FROM C_OrderLine ol \n    WHERE ol.C_Order_ID = C_Order.C_Order_ID\n    AND ol.QtyOrdered <> ol.QtyDelivered\n)",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a52203d2-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Venta Pendientes por Completar",
                "document_description": "",
                "sequence": 0,
                "record_count": 284,
                "criteria": {
                    "table_name": "C_Order",
                    "query": "",
                    "where_clause": "C_Order.IsSOTrx='Y' AND C_Order.Processed='N' AND C_Order.DocStatus NOT IN('VO')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f112-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Producción por Completar",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "M_ProductionBatch",
                    "query": "",
                    "where_clause": "M_ProductionBatch.Processed = 'N'",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f112-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Producción por Ejecutar",
                "document_description": "",
                "sequence": 0,
                "record_count": 1,
                "criteria": {
                    "table_name": "M_ProductionBatch",
                    "query": "",
                    "where_clause": "M_ProductionBatch.DocStatus = 'CO'\nAND COALESCE(M_ProductionBatch.TargetQty, 0) > 0 \nAND COALESCE(M_ProductionBatch.QtyOrdered, 0) = 0",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f112-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Producción Abiertas",
                "document_description": "",
                "sequence": 0,
                "record_count": 2,
                "criteria": {
                    "table_name": "M_ProductionBatch",
                    "query": "",
                    "where_clause": "M_ProductionBatch.DocStatus = 'CO'\nAND COALESCE(M_ProductionBatch.TargetQty, 0) > COALESCE(M_ProductionBatch.QtyOrdered, 0)\nAND COALESCE(M_ProductionBatch.QtyOrdered, 0) > 0",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a5220b20-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Compra Pendientes por Recepcionar",
                "document_description": "",
                "sequence": 0,
                "record_count": 20,
                "criteria": {
                    "table_name": "C_Order",
                    "query": "",
                    "where_clause": "C_Order.IsSOTrx='N' \nAND C_Order.DocStatus = 'CO'\nAND EXISTS(SELECT 1 \n    FROM C_OrderLine ol \n    WHERE ol.C_Order_ID = C_Order.C_Order_ID\n    AND ol.QtyOrdered <> ol.QtyDelivered\n)",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a5220b20-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Órdenes de Compra Pendientes por Cargar Factura",
                "document_description": "",
                "sequence": 0,
                "record_count": 18,
                "criteria": {
                    "table_name": "C_Order",
                    "query": "",
                    "where_clause": "C_Order.IsSOTrx='N' \nAND C_Order.DocStatus = 'CO'\nAND EXISTS(SELECT 1 \n    FROM C_OrderLine ol \n    WHERE ol.C_Order_ID = C_Order.C_Order_ID\n    AND ol.QtyOrdered <> ol.QtyInvoiced\n)",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521a3d8-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Entregas No Válidas",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
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
            },
            {
                "window_uuid": "a521a07c-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Recepciones No Válidas",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "M_InOut",
                    "query": "",
                    "where_clause": "M_InOut.DocStatus = 'IN'\nAND M_InOut.IsSOTrx = 'N'",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "29c8bca0-d5b8-11e9-878e-0242ac110002",
                "form_uuid": "",
                "document_name": "Registros de Peso No Válidos",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "DD_RecordWeight",
                    "query": "",
                    "where_clause": "DD_RecordWeight.DocStatus = 'IN'",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "29c8bca0-d5b8-11e9-878e-0242ac110002",
                "form_uuid": "",
                "document_name": "Registros de Peso Por Procesar",
                "document_description": "",
                "sequence": 0,
                "record_count": 1,
                "criteria": {
                    "table_name": "DD_RecordWeight",
                    "query": "",
                    "where_clause": "DD_RecordWeight.Processed = 'N' AND DD_RecordWeight.DocStatus NOT IN('VO', 'RE')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "29c8bca0-d5b8-11e9-878e-0242ac110002",
                "form_uuid": "",
                "document_name": "Vehículos por Cargar",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "DD_RecordWeight",
                    "query": "",
                    "where_clause": "DD_RecordWeight.IsSOTrx = 'Y'\nAND DD_RecordWeight.WeightStatus = 'G'",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "29c8bca0-d5b8-11e9-878e-0242ac110002",
                "form_uuid": "",
                "document_name": "Vehículos por Descargar",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "DD_RecordWeight",
                    "query": "",
                    "where_clause": "DD_RecordWeight.IsSOTrx = 'N'\nAND DD_RecordWeight.WeightStatus = 'T'",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a5211e40-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Pagos Pendientes por Conciliar",
                "document_description": "",
                "sequence": 0,
                "record_count": 11,
                "criteria": {
                    "table_name": "C_Payment",
                    "query": "",
                    "where_clause": "C_Payment.Processed = 'Y'\nAND C_Payment.DocStatus IN('CO', 'CL')\nAND C_Payment.IsReconciled = 'N'\nAND EXISTS(SELECT 1 FROM C_Bank b INNER JOIN C_BankAccount ba ON(ba.C_Bank_ID = b.C_Bank_ID) WHERE ba.C_BankAccount_ID = C_Payment.C_BankAccount_ID AND b.BankType = 'B')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a5211e40-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Pagos Pendientes por Identificar",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "C_Payment",
                    "query": "",
                    "where_clause": "C_Payment.DocStatus IN('CO', 'CL')\nAND EXISTS(SELECT 1 FROM C_Bank b INNER JOIN C_BankAccount ba ON(ba.C_Bank_ID = b.C_Bank_ID) WHERE ba.C_BankAccount_ID = C_Payment.C_BankAccount_ID AND b.BankType = 'B')  AND C_Payment.IsUnidentifiedPayment = 'Y'  AND NOT EXISTS(SELECT 1 FROM C_Payment p WHERE p.Ref_Payment_ID = C_Payment.C_Payment_ID AND p.IsUnidentifiedPayment = 'N' AND p.DocStatus IN('CO', 'CL'))",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a5211e40-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Pagos sin Asignar",
                "document_description": "",
                "sequence": 0,
                "record_count": 2,
                "criteria": {
                    "table_name": "C_Payment",
                    "query": "",
                    "where_clause": "C_Payment.DocStatus IN('CO', 'CL')\nAND EXISTS(SELECT 1 FROM C_Bank b INNER JOIN C_BankAccount ba ON(ba.C_Bank_ID = b.C_Bank_ID) WHERE ba.C_BankAccount_ID = C_Payment.C_BankAccount_ID AND b.BankType = 'B')  \nAND C_Payment.IsUnidentifiedPayment = 'N' \nAND C_Payment.IsAllocated='N' ",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a5220670-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Documentos de Caja Pendientes por Cerrar",
                "document_description": "",
                "sequence": 0,
                "record_count": 33,
                "criteria": {
                    "table_name": "C_Payment",
                    "query": "",
                    "where_clause": "C_Payment.DocStatus IN('CO', 'CL')\nAND C_Payment.Processed = 'Y'\nAND C_Payment.IsReconciled = 'N'\nAND EXISTS(SELECT 1 FROM C_Bank b INNER JOIN C_BankAccount ba ON(ba.C_Bank_ID = b.C_Bank_ID) WHERE ba.C_BankAccount_ID = C_Payment.C_BankAccount_ID AND b.BankType = 'C')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f428-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Empleados sin Contrato",
                "document_description": "",
                "sequence": 0,
                "record_count": 44,
                "criteria": {
                    "table_name": "C_BPartner",
                    "query": "",
                    "where_clause": "C_BPartner.IsActive = 'Y'\nAND C_BPartner.IsEmployee = 'Y'\nAND NOT EXISTS(SELECT 1 FROM HR_Employee e WHERE e.C_BPartner_ID = C_BPartner.C_BPartner_ID AND e.IsActive = 'Y')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f428-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Empleados sin Cuenta Bancaria",
                "document_description": "",
                "sequence": 0,
                "record_count": 55,
                "criteria": {
                    "table_name": "C_BPartner",
                    "query": "",
                    "where_clause": "C_BPartner.IsActive = 'Y'\nAND C_BPartner.IsEmployee = 'Y'\nAND NOT EXISTS(SELECT 1 FROM C_BP_BankAccount ba WHERE ba.C_BPartner_ID = C_BPartner.C_BPartner_ID AND ba.IsPayrollAccount = 'Y')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f428-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Empleados sin Salario Definido",
                "document_description": "",
                "sequence": 0,
                "record_count": 11,
                "criteria": {
                    "table_name": "C_BPartner",
                    "query": "",
                    "where_clause": "C_BPartner.IsActive = 'Y'\nAND C_BPartner.IsEmployee = 'Y'\nAND EXISTS(SELECT 1 FROM HR_Employee e WHERE e.C_BPartner_ID = C_BPartner.C_BPartner_ID AND e.IsActive = 'Y')\nAND NOT EXISTS(SELECT 1 FROM HR_Attribute ca \n                    WHERE ca.C_BPartner_ID = C_BPartner.C_BPartner_ID AND ca.IsActive = 'Y')",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521f428-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Empleados sin Regla de Pago",
                "document_description": "",
                "sequence": 0,
                "record_count": 11,
                "criteria": {
                    "table_name": "C_BPartner",
                    "query": "",
                    "where_clause": "C_BPartner.IsActive = 'Y'\nAND C_BPartner.IsEmployee = 'Y'\nAND EXISTS(SELECT 1 FROM HR_Employee e WHERE e.C_BPartner_ID = C_BPartner.C_BPartner_ID AND e.PaymentRule IS NULL)",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521a356-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Nóminas por Pagar",
                "document_description": "",
                "sequence": 0,
                "record_count": 2,
                "criteria": {
                    "table_name": "HR_Process",
                    "query": "",
                    "where_clause": "HR_Process.DocStatus = 'CO'\nAND EXISTS(SELECT 1 FROM HR_Movement m\n                WHERE m.HR_Process_ID = HR_Process.HR_Process_ID\n                AND EXISTS(SELECT 1 FROM HR_Concept c WHERE c.HR_Concept_ID = m.HR_Concept_ID AND c.IsPaid = 'Y')\n                AND NOT EXISTS(SELECT 1 FROM C_PaySelection ps\n                                INNER JOIN C_PaySelectionLine psl ON(psl.C_PaySelection_ID = ps.C_PaySelection_ID)\n                                WHERE psl.HR_Movement_ID = m.HR_Movement_ID\n                                AND ps.DocStatus IN('CO', 'CL')))",
                    "order_by_clause": "",
                    "reference_uuid": "",
                    "filters": [],
                    "values": [],
                    "order_by_columns": [],
                    "limit": 0
                }
            },
            {
                "window_uuid": "a521a356-fb40-11e8-a479-7a0060f0aa01",
                "form_uuid": "",
                "document_name": "Nóminas por Cerrar",
                "document_description": "",
                "sequence": 0,
                "record_count": 0,
                "criteria": {
                    "table_name": "HR_Process",
                    "query": "",
                    "where_clause": "HR_Process.DocStatus = 'CO'\nAND NOT EXISTS(SELECT 1 FROM HR_Movement m\n                WHERE m.HR_Process_ID = HR_Process.HR_Process_ID\n                AND EXISTS(SELECT 1 FROM HR_Concept c WHERE c.HR_Concept_ID = m.HR_Concept_ID AND c.IsPaid = 'Y')\n                AND NOT EXISTS(SELECT 1 FROM C_PaySelection ps\n                                INNER JOIN C_PaySelectionLine psl ON(psl.C_PaySelection_ID = ps.C_PaySelection_ID)\n                                WHERE psl.HR_Movement_ID = m.HR_Movement_ID\n                                AND ps.DocStatus IN('CO', 'CL')))",
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

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

