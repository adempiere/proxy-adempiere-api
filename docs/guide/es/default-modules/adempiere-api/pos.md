## Servicios del Punto de Venta

### GET /api/form/addons/point-of-sales/selling-points

Lista todos los puntos de venta asociados al usuario actual
#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `user_uuid` - uuid del usuario

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/selling-points?token=%3Ctoken-generated-for-demo-api%3E&language=es&user_uuid=5adc9357-9158-40fe-86f1-4ce383586f5b'
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
                "uuid": "421173e1-c58d-4474-89e5-9872f07baf47",
                "id": 1000010,
                "name": "Auto-Servicio 01",
                "description": "",
                "help": "",
                "is_modify_price": false,
                "is_pos_required_pin": false,
                "is_aisle_seller": false,
                "is_shared_pos": false,
                "cash_bank_account": {
                    "uuid": "9ab9ac19-d452-42ec-90a1-e9b5da967254",
                    "id": 1000000,
                    "name": "Caja Administrativa  Caja Adtva VIC",
                    "account_no": "Caja Adtva VIC",
                    "description": "VIC",
                    "currency": {
                        "id": 50001,
                        "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                        "iso_code": "VES",
                        "currency_symbol": "Bs.S",
                        "description": "Bolivar",
                        "standard_precision": 2,
                        "costing_precision": 2
                    },
                    "bban": "",
                    "iban": "",
                    "credit_limit": 0,
                    "current_balance": 36319282.59,
                    "is_default": false,
                    "business_partner": {
                        "uuid": "",
                        "id": 0,
                        "value": "",
                        "tax_id": "",
                        "duns": "",
                        "naics": "",
                        "name": "",
                        "last_name": "",
                        "description": ""
                    },
                    "bank_account_type": 0,
                    "bank_account_type_name": 0
                },
                "sales_representative": {
                    "uuid": "2fe53d6b-8b4d-4846-87c9-f263a99a1819",
                    "id": 1000339,
                    "name": "ANGELA RODRIGUEZ",
                    "description": ""
                },
                "template_business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                },
                "price_list": {
                    "uuid": "54745978-ce79-11e9-aa53-0242ac110002",
                    "id": 1000007,
                    "name": "Ventas (VES)",
                    "description": "",
                    "currency": {
                        "id": 50001,
                        "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                        "iso_code": "VES",
                        "currency_symbol": "Bs.S",
                        "description": "Bolivar",
                        "standard_precision": 2,
                        "costing_precision": 2
                    },
                    "is_default": true,
                    "is_tax_included": false,
                    "is_enforce_price_limit": false,
                    "is_net_price": false,
                    "price_precision": 2
                },
                "conversion_type_uuid": "40767cd6-b6cf-4058-ae34-42ea1ea3ce71",
                "key_layout_uuid": "0c65bace-ec5f-4e90-822c-ee9b7bd0c539"
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/form/addons/point-of-sales/point-of-sales

Obtener Punto de Venta
#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `pos_uuid` - uuid del Punto de Venta

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/point-of-sales?token=%3Ctoken-generated-for-demo-api%3E&language=es&pos_uuid=eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
        "id": 1000002,
        "name": "Punto de Venta (USD)",
        "description": "",
        "help": "",
        "is_modify_price": true,
        "is_pos_required_pin": true,
        "is_aisle_seller": false,
        "is_shared_pos": true,
        "cash_bank_account": {
            "uuid": "b6934f9a-c8b4-47fd-bac0-85ad010c164c",
            "id": 0,
            "name": "Caja Administrativa Administrativa (USD)",
            "account_no": "Administrativa (USD)",
            "description": "",
            "currency": {
                "id": 100,
                "uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
                "iso_code": "USD",
                "currency_symbol": "$",
                "description": "US Dollar",
                "standard_precision": 2,
                "costing_precision": 4
            },
            "bban": "",
            "iban": "",
            "credit_limit": 0,
            "current_balance": 0,
            "is_default": false,
            "business_partner": {
                "uuid": "",
                "id": 0,
                "value": "",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "",
                "last_name": "",
                "description": ""
            },
            "bank_account_type": 0,
            "bank_account_type_name": 0
        },
        "sales_representative": {
            "uuid": "519d0bf8-74a0-4b68-af6d-2384bff7d7ce",
            "id": 1000020,
            "name": "E.R.P. Consultores y Asociados, C.A.",
            "description": ""
        },
        "template_business_partner": {
            "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
            "id": 1000006,
            "value": "J400788315",
            "tax_id": "Estándar",
            "duns": "",
            "naics": "",
            "name": "E.R.P. Consultores y Asociados, C.A.",
            "last_name": "ERPyA",
            "description": ""
        },
        "price_list": {
            "uuid": "57b868e5-4046-4b8c-b2cf-5a34693acd59",
            "id": 1000013,
            "name": "Ventas (USD)",
            "description": "",
            "currency": {
                "id": 100,
                "uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
                "iso_code": "USD",
                "currency_symbol": "$",
                "description": "US Dollar",
                "standard_precision": 2,
                "costing_precision": 4
            },
            "is_default": false,
            "is_tax_included": false,
            "is_enforce_price_limit": false,
            "is_net_price": false,
            "price_precision": 2
        },
        "conversion_type_uuid": "40767cd6-b6cf-4058-ae34-42ea1ea3ce71",
        "key_layout_uuid": "0c65bace-ec5f-4e90-822c-ee9b7bd0c539"
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/form/addons/point-of-sales/product-price

Obtener el precio del producto
#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `search_value` - Valor de búsqueda del producto.
- `upc` - UPC del producto.
- `value` - Valor del producto.
- `name` - Nombre del producto.
- `price_list_uuid` - Referencia UUID de la lista de precios.
- `business_partner_uuid` - Referencia al UUID del socio comercial.
- `warehouse_uuid` - Referencia al UUID del almacén.
- `valid_from` - Lista de precios válida desde.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/product-price?token=%3Ctoken-generated-for-demo-api%3E&language=es&search_value=BTV-C2-SLIM&price_list_uuid=54745978-ce79-11e9-aa53-0242ac110002'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "currency": {
            "id": 50001,
            "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
            "iso_code": "VES",
            "currency_symbol": "Bs.S",
            "description": "Bolivar",
            "standard_precision": 2,
            "costing_precision": 2
        },
        "tax_rate": {
            "name": "Exento",
            "description": "Exento",
            "tax_indicator": "E",
            "rate": 0
        },
        "product": {
            "uuid": "deac8a94-385f-4375-9bd5-5302e2ed7344",
            "id": 1000129,
            "value": "BTV-C2-SLIM",
            "name": "BASE PARA TV FIJA C2 - FS SUPER SLIM DE 32\" A 57\"",
            "help": "",
            "document_note": "",
            "uom_name": "Each",
            "product_type": "",
            "is_stocked": true,
            "is_drop_ship": false,
            "is_purchased": true,
            "is_sold": true,
            "image_url": "",
            "product_category_name": "Comercialización Nacional",
            "product_group_name": "",
            "product_class_name": "",
            "product_classification_name": "",
            "weight": 0,
            "volume": 0,
            "upc": "",
            "sku": "",
            "shelf_width": 0,
            "shelf_height": 0,
            "shelf_depth": 0,
            "units_per_pack": 0,
            "units_per_pallet": 0,
            "guarantee_days": 0,
            "description_url": "",
            "version_no": "",
            "tax_category": "Exento",
            "description": ""
        },
        "price_list": 34500000,
        "price_standard": 34500000,
        "price_limit": 34500000,
        "price_list_name": "Ventas (VES)",
        "is_tax_included": false,
        "valid_from": 1620964800000,
        "price_precision": -1,
        "schema_currency": {
            "id": 50001,
            "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
            "iso_code": "VES",
            "currency_symbol": "Bs.S",
            "description": "Bolivar",
            "standard_precision": 2,
            "costing_precision": 2
        },
        "schema_price_list": 34500000,
        "schema_price_standard": 34500000,
        "schema_price_limit": 34500000
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/form/addons/point-of-sales/product-prices

Precio de lista del producto
#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `search_value` - Valor de búsqueda del producto.
- `upc` - UPC del producto.
- `value` - Valor del producto.
- `name` - Nombre del producto.
- `price_list_uuid` - Referencia UUID de la lista de precios.
- `business_partner_uuid` - Referencia al UUID del socio comercial.
- `warehouse_uuid` - Referencia al UUID del almacén.
- `valid_from` - Lista de precios válida desde.
- `tableName` - Nombre de la tabla (obligatorio si no es una consulta).
- `columns` -  Columnas.
- `query` - Consulta personalizada en lugar de un nombre de tabla basado en SQL.
- `whereClause` - Cláusula where de la búsqueda basada en SQL.
- `orderByClause` - Cláusula order by basada en SQL.
- `limit` - Limite de registro.
- `pageSize` - Tamaño de página personalizado para el lote.
- `pageToken` - Token de página específico.
#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/product-prices?token=%3Ctoken-generated-for-demo-api%3E&language=es&search_value=DELUXE&price_list_uuid=54745978-ce79-11e9-aa53-0242ac110002&warehouse_uuid=0b1fe9d4-9bdd-4e69-8573-9a3b50d8251e&business_partner_uuid=9f6cf428-9209-11e9-8046-0242ac140002&limit=50'
```
#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 2,
        "next_page_token": "",
        "records": [
            {
                "currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "tax_rate": {
                    "name": "Exento",
                    "description": "Exento",
                    "tax_indicator": "E",
                    "rate": 0
                },
                "product": {
                    "uuid": "acf3822f-6ade-4032-9087-e5bacd32ede3",
                    "id": 1000182,
                    "value": "6204-013MC",
                    "name": "LAVADORA G DELUXE 10KG LD-GDX100",
                    "help": "",
                    "document_note": "",
                    "uom_name": "Each",
                    "product_type": "",
                    "is_stocked": true,
                    "is_drop_ship": false,
                    "is_purchased": true,
                    "is_sold": false,
                    "image_url": "",
                    "product_category_name": "Comercialización Nacional",
                    "product_group_name": "",
                    "product_class_name": "",
                    "product_classification_name": "",
                    "weight": 0,
                    "volume": 0,
                    "upc": "",
                    "sku": "",
                    "shelf_width": 0,
                    "shelf_height": 0,
                    "shelf_depth": 0,
                    "units_per_pack": 0,
                    "units_per_pallet": 0,
                    "guarantee_days": 0,
                    "description_url": "",
                    "version_no": "",
                    "tax_category": "Exento",
                    "description": ""
                },
                "price_list": 728580000,
                "price_standard": 728580000,
                "price_limit": 728580000,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1620964800000,
                "price_precision": -1,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 728580000,
                "schema_price_standard": 728580000,
                "schema_price_limit": 728580000
            },
            {
                "currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "tax_rate": {
                    "name": "Exento",
                    "description": "Exento",
                    "tax_indicator": "E",
                    "rate": 0
                },
                "product": {
                    "uuid": "3eddb48f-4c47-433a-8852-30c4f15bd118",
                    "id": 1000183,
                    "value": "6204-014MC",
                    "name": "LAVADORA G DELUXE 11 KG LD-GDX110",
                    "help": "",
                    "document_note": "",
                    "uom_name": "Each",
                    "product_type": "",
                    "is_stocked": true,
                    "is_drop_ship": false,
                    "is_purchased": true,
                    "is_sold": false,
                    "image_url": "",
                    "product_category_name": "Comercialización Nacional",
                    "product_group_name": "",
                    "product_class_name": "",
                    "product_classification_name": "",
                    "weight": 0,
                    "volume": 0,
                    "upc": "",
                    "sku": "",
                    "shelf_width": 0,
                    "shelf_height": 0,
                    "shelf_depth": 0,
                    "units_per_pack": 0,
                    "units_per_pallet": 0,
                    "guarantee_days": 0,
                    "description_url": "",
                    "version_no": "",
                    "tax_category": "Exento",
                    "description": ""
                },
                "price_list": 792870000,
                "price_standard": 792870000,
                "price_limit": 792870000,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1620964800000,
                "price_precision": -1,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 792870000,
                "schema_price_standard": 792870000,
                "schema_price_limit": 792870000
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error



### POST /api/form/addons/point-of-sales/create-order

Crear un orden desde el punto de venta

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.


#### Cuerpo de la Petición:
- `pos_uuid` - Referencia del UUID del punto de venta
- `customer_uuid` - Referencia del UUID del Cliente
- `sales_representative_uuid` - Referencia del UUID del representante de venta


```json
{
    "pos_uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
    "customer_uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
    "sales_representative_uuid": "9f6cf428-9209-11e9-8046-0242ac140002"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/create-order?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pos_uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
    "customer_uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
    "sales_representative_uuid": "9f6cf428-9209-11e9-8046-0242ac140002"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "5359ab0f-3c1c-4ca9-9306-fe38e09367c4",
        "id": 1074586,
        "document_no": "OPOS-72800",
        "document_type": {
            "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
            "id": 1000039,
            "name": "Orden POS",
            "print_name": "Orden POS",
            "description": ""
        },
        "sales_representative": {
            "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
            "id": 1000022,
            "name": "mGallardo",
            "description": "Mariana Gallardo"
        },
        "document_status": {
            "value": "DR",
            "name": "Borrador",
            "description": ""
        },
        "total_lines": 0,
        "grand_total": 0,
        "date_ordered": "2021-02-17T04:00:00.000Z",
        "business_partner": {
            "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
            "id": 1000006,
            "value": "00000000",
            "tax_id": "00000000",
            "duns": "",
            "naics": "",
            "name": "Cliente Unico",
            "last_name": "",
            "description": ""
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/create-payment

Crear pago

#### Parámetros:
- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

- `pos_uuid` - Uuid del punto de venta.
- `order_uuid`- Referencia del UUID del pedido
- `invoice_uuid` - Referencia del UUID de la factura.
- `bank_uuid` - Referencia UUID del banco.
- `referenceNo` - Número de referencia.
- `description` - Descripción del pago.
- `amount` - Monto del pago.
- `tenderTypeCode` - Tipo o metodo de pago.
- `paymentDate` - Fecha del pago.
- `currencyUuid` - Uuid de la moneda

```json
{
    "pos_uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
    "order_uuid": "b278755b-2a43-4691-80a5-e3b532670aac",
    "amount": 23,
    "tender_type_code": "X",
    "currency_uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/create-payment?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pos_uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
    "order_uuid": "b278755b-2a43-4691-80a5-e3b532670aac",
    "amount": 23,
    "tender_type_code": "X",
    "currency_uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01"
}'
```

#### Cuerpo de Repuesta:

```json
{
  "code": 200,
  "result": {
    "uuid": "efe63e25-494e-435a-a75c-c4d055c21927",
    "id": 1012200,
    "document_no": "#",
    "document_status": {
      "value": "DR",
      "name": "Drafted",
      "description": ""
    },
    "amount": 16345.65,
    "tender_type_code": "",
    "currency_uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
    "description": "Order No OPOS-4631",
    "reference_no": "",
    "order_uuid": "511605dc-e035-4b97-979d-6096f6ae7289",
    "bank_uuid": "",
    "payment_date": "1970-01-01T00:00:00.000Z",
    "business_partner": {
      "uuid": "2a066a21-11dc-4c7f-9f78-83617377f83b",
      "id": 1013408,
      "value": "V00000000",
      "tax_id": "V00000000",
      "duns": "",
      "naics": "",
      "name": "Cliente Unico",
      "last_name": "",
      "description": ""
    }
  }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/delete-payment

Eliminar pago

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

- `payment_uuid` - Referencia del UUID de pago.

```json
{
    "payment_uuid": "7d505871-d28d-4c0a-b8cb-88dfb820f4bb"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/create-payment?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payment_uuid": "7d505871-d28d-4c0a-b8cb-88dfb820f4bb"
}'
```

#### Cuerpo de Repuesta:

```json
{
  "code": 200,
  "result": "OK"
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/update-payment

Actualizar pago

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

- `payment_uuid` - Referencia del UUID de pago.
- `bank_uuid` - Referencia UUID del banco.
- `referenceNo` - Número de referencia.
- `description` - Descripción del pago.
- `amount` - Monto del pago.
- `tenderTypeCode` - Tipo o metodo de pago.
- `paymentDate` - Fecha del pago.
- `currencyUuid` - Uuid de la moneda

```json
{
    "payment_uuid": "7d505871-d28d-4c0a-b8cb-88dfb820f4bb",
    "reference_no": "Nr 0000002",
    "amount": 12.08,
    "payment_date": "",
    "tender_type_code": "X"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/update-payment?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payment_uuid": "7d505871-d28d-4c0a-b8cb-88dfb820f4bb",
    "reference_no": "Nr 0000002",
    "amount": 12.08,
    "payment_date": "",
    "tender_type_code": "X"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "7d505871-d28d-4c0a-b8cb-88dfb820f4bb",
        "id": 1000445,
        "document_no": "CCxCN-302",
        "document_status": {
            "value": "DR",
            "name": "Borrador",
            "description": ""
        },
        "amount": 12.08,
        "tender_type_code": "X",
        "currency_uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
        "description": "Nr 0000002",
        "reference_no": "",
        "order_uuid": "f131d035-22fc-4e87-b580-3563a978d163",
        "bank_uuid": "",
        "payment_date": "1970-01-01T00:00:00.000Z",
        "business_partner": {
            "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
            "id": 1000006,
            "value": "J400788315",
            "tax_id": "Estándar",
            "duns": "",
            "naics": "",
            "name": "E.R.P. Consultores y Asociados, C.A.",
            "last_name": "ERPyA",
            "description": ""
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error



### GET /api/form/addons/point-of-sales/payments

Lista de pagos

#### Parámetros:

- `order_uuid`- Referencia del UUID del pedido
- `pos_uuid` - Referencia del UUID del punto de venta

#### Cuerpo de la Petición:

```json
null
```
#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/payments?token=%3Ctoken-generated-for-demo-api%3E&language=es&order_uuid=be142b43-0b6b-4378-8551-261756fad65e&pos_uuid=eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51&limit=20'
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
                "uuid": "bcb53221-a2c6-4a53-be1b-9a672288630f",
                "id": 1000446,
                "document_no": "CCxCN-303",
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "amount": 2.69,
                "tender_type_code": "X",
                "currency_uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
                "description": "",
                "reference_no": "",
                "order_uuid": "be142b43-0b6b-4378-8551-261756fad65e",
                "bank_uuid": "",
                "payment_date": "1970-01-01T00:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "J400788315",
                    "tax_id": "Estándar",
                    "duns": "",
                    "naics": "",
                    "name": "E.R.P. Consultores y Asociados, C.A.",
                    "last_name": "ERPyA",
                    "description": ""
                }
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/delete-order

Borrar pedido de venta

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

- `order_uuid`- Referencia del UUID del pedido

```json
{
	"order_uuid": "511605dc-e035-4b97-979d-6096f6ae7289"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/delete-order?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order_uuid": "f131d035-22fc-4e87-b580-3563a978d163"
}'}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/create-order-line

Crear línea de pedido de cliente

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

- `order_uuid`- Referencia del UUID del pedido.
- `product_uuid` - Referencia al UUID del producto.
- `charge_uuid` - Referencia al UUID del cargo.
- `description` - Referencia al UUID de la descripción.
- `quantity` - Referencia UUID de la cantidad.
- `price` - Referencia UUID del precio.
- `discount_rate` - Referencia UUID de descuento.
- `warehouse_uuid` - Referencia UUID del almacén.

```json
{
    "order_uuid": "be142b43-0b6b-4378-8551-261756fad65e",
    "product_uuid": "ea2dfa76-d43f-4def-be27-cbfbf9bb0033"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/create-order-line?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order_uuid": "be142b43-0b6b-4378-8551-261756fad65e",
    "product_uuid": "ea2dfa76-d43f-4def-be27-cbfbf9bb0033"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "0c033f43-29a3-44f7-980c-f25c82c83f4d",
        "order_uuid": "be142b43-0b6b-4378-8551-261756fad65e",
        "line": 10,
        "product": {
            "uuid": "ea2dfa76-d43f-4def-be27-cbfbf9bb0033",
            "id": 1000135,
            "value": "VILA1001249",
            "name": "LAVADORAS AUTOMATICA TOP LOADING 12 KG 110V DARK SIL VER/ VIOTTO",
            "help": "",
            "document_note": "",
            "uom_name": "Each",
            "product_type": "",
            "is_stocked": true,
            "is_drop_ship": false,
            "is_purchased": true,
            "is_sold": true,
            "image_url": "",
            "product_category_name": "Comercialización Nacional",
            "product_group_name": "",
            "product_class_name": "",
            "product_classification_name": "",
            "weight": 0,
            "volume": 0,
            "upc": "",
            "sku": "",
            "shelf_width": 0,
            "shelf_height": 0,
            "shelf_depth": 0,
            "units_per_pack": 0,
            "units_per_pallet": 0,
            "guarantee_days": 0,
            "description_url": "",
            "version_no": "",
            "tax_category": "Exento",
            "description": ""
        },
        "charge": {
            "uuid": "",
            "id": 0,
            "name": "",
            "description": ""
        },
        "description": "",
        "line_description": "LAVADORAS AUTOMATICA TOP LOADING 12 KG 110V DARK SIL VER/ VIOTTO",
        "quantity": 2,
        "price": 343.85,
        "discount_rate": 0,
        "line_net_amount": 687.7,
        "tax_rate": {
            "name": "Exento",
            "description": "Exento",
            "tax_indicator": "E",
            "rate": 0
        },
        "warehouse": {
            "id": 1000002,
            "uuid": "0de9a462-1e4e-11e9-8ea2-6c0b840adaed",
            "name": "Comercialización",
            "description": ""
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/delete-order-line

Borrar línea de pedido de cliente

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

- `order_line_uuid` - Referencia de UUID de línea de pedido de ventas.

```json
{
	"order_line_uuid": "425119ce-e323-444e-a867-0c5bf42dd3f0"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/delete-order-line?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order_line_uuid": "425119ce-e323-444e-a867-0c5bf42dd3f0"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/update-order

Actualizar la orden de venta.

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

- `pos_uuid` - Uuid del punto de venta.
- `order_uuid` - Uuid de la orden a actualizar.
- `customer_uuid` - Uuid del representante de venta de la orden `.
- `document-type-uuid` - Uuid del tipo de documento de la orde`.
- `description` - Descripción del la orden`.

```json
{
    "order_uuid": "be142b43-0b6b-4378-8551-261756fad65e",
    "posUuid": "421173e1-c58d-4474-89e5-9872f07baf47",
    "customerUuid": "097ccb44-b945-471a-a5e9-dad8e076c044"
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/update-order?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order_uuid": "be142b43-0b6b-4378-8551-261756fad65e",
    "posUuid": "421173e1-c58d-4474-89e5-9872f07baf47",
    "customerUuid": "097ccb44-b945-471a-a5e9-dad8e076c044"
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "be142b43-0b6b-4378-8551-261756fad65e",
        "id": 1000636,
        "document_no": "OPOS-387",
        "document_type": {
            "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
            "id": 1000039,
            "name": "Orden POS",
            "print_name": "Orden POS",
            "description": ""
        },
        "sales_representative": {
            "uuid": "5adc9357-9158-40fe-86f1-4ce383586f5b",
            "id": 1000019,
            "name": "rMunoz",
            "description": "Raul Muñoz"
        },
        "document_status": {
            "value": "DR",
            "name": "Borrador",
            "description": ""
        },
        "total_lines": 738.72,
        "grand_total": 738.72,
        "date_ordered": "2021-05-14T04:00:00.000Z",
        "business_partner": {
            "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
            "id": 1000006,
            "value": "J400788315",
            "tax_id": "Estándar",
            "duns": "",
            "naics": "",
            "name": "E.R.P. Consultores y Asociados, C.A.",
            "last_name": "ERPyA",
            "description": ""
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /api/form/addons/point-of-sales/update-order-line

Actualizar la línea de pedido de ventas

#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

`order_line_uuid` - Referencia del UUID del pedido.
`description` - Descripción.
`quantity` - Referencia del UUID de la cantidad.
`price` - Referencia UUID del precio.
`discount_rate` - Referencia al UUID de descuento.
`is_add_quantity` - Sólo añadir cantidad.

```json
{
    "order_line_uuid": "425119ce-e323-444e-a867-0c5bf42dd3f0",
    "quantity": 2,
    "discount_rate": 0
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/update-order-line?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order_line_uuid": "425119ce-e323-444e-a867-0c5bf42dd3f0",
    "quantity": 2,
    "discount_rate": 0
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "0ab0e045-1371-404b-b665-72ae64c59f81",
        "order_uuid": "2b505b8f-92b6-4d29-8919-2e7a90747dc2",
        "line": 10,
        "product": {
            "uuid": "6e081721-4710-40d6-85bd-ba0bc9bfd6db",
            "id": 1009433,
            "value": "3933-018MC",
            "name": "LAJA 15X5 MULTICOLOR (0.50MT)",
            "help": "",
            "document_note": "",
            "uom_name": "Each",
            "product_type": "",
            "is_stocked": true,
            "is_drop_ship": false,
            "is_purchased": true,
            "is_sold": true,
            "image_url": "",
            "product_category_name": "Mercancía en Consignación",
            "product_group_name": "",
            "product_class_name": "MACHIFERMA, C.A",
            "product_classification_name": "Baja Rotación",
            "weight": 0,
            "volume": 0,
            "upc": "",
            "sku": "",
            "shelf_width": 0,
            "shelf_height": 0,
            "shelf_depth": 0,
            "units_per_pack": 1,
            "units_per_pallet": 0,
            "guarantee_days": 0,
            "description_url": "",
            "version_no": "",
            "tax_category": "IVA Ventas",
            "description": ""
        },
        "charge": {
            "uuid": "",
            "id": 0,
            "name": "",
            "description": ""
        },
        "description": "",
        "line_description": "LAJA 15X5 MULTICOLOR (0.50MT)",
        "quantity": 2,
        "price": 5467363.01,
        "discount_rate": 0,
        "line_net_amount": 10934726.02,
        "tax_rate": {
            "name": "IVA 16% (Ingreso)",
            "description": "Alícuota General (16%) (Ingreso)",
            "tax_indicator": "16%",
            "rate": 16
        },
        "warehouse": {
            "id": 1000015,
            "uuid": "c255f892-c664-4af2-99d9-c2ac9731d7df",
            "name": "Comercialización (Palonegro)",
            "description": "A"
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/form/addons/point-of-sales/order

Obtener un pedido de venta

#### Parámetros:

`order_uuid` - Referencia al UUID del pedido.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/order?token=%3Ctoken-generated-for-demo-api%3E&language=es&order_uuid=be142b43-0b6b-4378-8551-261756fad65e'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "be142b43-0b6b-4378-8551-261756fad65e",
        "id": 1000636,
        "document_no": "OPOS-387",
        "document_type": {
            "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
            "id": 1000039,
            "name": "Orden POS",
            "print_name": "Orden POS",
            "description": ""
        },
        "sales_representative": {
            "uuid": "5adc9357-9158-40fe-86f1-4ce383586f5b",
            "id": 1000019,
            "name": "rMunoz",
            "description": "Raul Muñoz"
        },
        "document_status": {
            "value": "DR",
            "name": "Borrador",
            "description": ""
        },
        "total_lines": 786.05,
        "grand_total": 786.05,
        "date_ordered": "2021-05-14T04:00:00.000Z",
        "business_partner": {
            "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
            "id": 1000006,
            "value": "J400788315",
            "tax_id": "Estándar",
            "duns": "",
            "naics": "",
            "name": "E.R.P. Consultores y Asociados, C.A.",
            "last_name": "ERPyA",
            "description": ""
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /api/form/addons/point-of-sales/process-order

Esta solicitud permite procesar una orden de giro con pagos
#### Parámetros:

- `token` - token de usuario devuelto de `POST /api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
#### Cuerpo de la Petición:

- `pos_uuid` - Referencia al UUID del Punto de Venta.
- `order_uuid` - Referencia al UUID de la Orden.
- `createPayments` - Opcional crear pagos (si es verdadero entonces esperar matriz de pagos)
- `payments`- Pagos cargados de la orden

:::tip Nota
El pago debe ser una matriz de objectos con los sigientes atributos
- `invoice_uuid` - Referencia al UUID de la factura
- `bank_uuid` - Referencia UUID del banco
- `reference_no` - Número de referencia
- `description` - Descripción del pago
- `amount` - Importe del pago
- `tender_type_code` - Tipo de licitación
- `payment_date` - Fecha de pago (por defecto ahora)
- `currency_uuid` - Referencia de la moneda UUID
:::

```json
{
    "order_uuid": "f182c2ea-7c3d-44f1-b5f3-dd50ad063076",
    "pos_uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
    "create_payments": false
}
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request POST 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/process-order?token=%3Ctoken-generated-for-demo-api%3E&language=es' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order_uuid": "f182c2ea-7c3d-44f1-b5f3-dd50ad063076",
    "pos_uuid": "eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51",
    "create_payments": false
}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "be142b43-0b6b-4378-8551-261756fad65e",
        "id": 1000636,
        "document_no": "OPOS-387",
        "document_type": {
            "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
            "id": 1000039,
            "name": "Orden POS",
            "print_name": "Orden POS",
            "description": ""
        },
        "sales_representative": {
            "uuid": "5adc9357-9158-40fe-86f1-4ce383586f5b",
            "id": 1000019,
            "name": "rMunoz",
            "description": "Raul Muñoz"
        },
        "document_status": {
            "value": "CO",
            "name": "Completo",
            "description": ""
        },
        "total_lines": 786.05,
        "grand_total": 786.05,
        "date_ordered": "2021-05-14T20:42:05.833Z",
        "business_partner": {
            "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
            "id": 1000006,
            "value": "J400788315",
            "tax_id": "Estándar",
            "duns": "",
            "naics": "",
            "name": "E.R.P. Consultores y Asociados, C.A.",
            "last_name": "ERPyA",
            "description": ""
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error




### GET /api/form/addons/point-of-sales/orders

Lista de pedidos de venta

#### Parámetros:

`pos_uuid` - referencia de UUID de POS.
`document_no` - Documento No.
`business_partner_uuid` - referencia de UUID de socio comercial.
`grand_total` - Gran total.
`open_amount` - Importe pendiente.
`is_paid` - está pagado.
`is_processed` - está procesado.
`is_aisle_seller` - es de Aisle Seller.
`is_invoiced` - se factura.
`date_ordered_from` - fecha de pedido desde.
`date_ordered_to` - fecha de pedido.
`sales_representative_uuid` - referencia de UUID del representante de ventas.
`page_size` - tamaño de página personalizado para lotes.
`page_token` - token de página específico.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/orders?pos_uuid=eb1cc4da-1d2c-4b40-a44d-a8e55dbe1a51&page_token=16cc1c3e-f7c3-4543-9edd-da2b7817e327-2&token=%3Ctoken-generated-for-demo-api%3E&language=es'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 16,
        "next_page_token": "",
        "records": [
            {
                "uuid": "2b505b8f-92b6-4d29-8919-2e7a90747dc2",
                "id": 1074592,
                "document_no": "OPOS-72802",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 0,
                "grand_total": 0,
                "date_ordered": "2021-02-18T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "4c24d517-6b8d-4ec5-943a-6e42e2c1b7f5",
                "id": 1074589,
                "document_no": "OPOS-72801",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 5467363.01,
                "grand_total": 6342141.09,
                "date_ordered": "2021-02-17T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "9b4ed858-56e5-46ae-b573-2cf730c4325f",
                "id": 1074582,
                "document_no": "OPOS-72796",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "IP",
                    "name": "En Proceso",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-02-11T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "3ef98cfb-8f35-42c0-b243-277da8140dba",
                "id": 1074577,
                "document_no": "OPOS-72791",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-02-11T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "4685b5ea-1b87-4094-a208-00cf1f92a03d",
                "id": 1074576,
                "document_no": "OPOS-72790",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-02-11T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "48e8d675-9d9a-43e5-bfcd-8b9fd7482d91",
                "id": 1074574,
                "document_no": "OPOS-72788",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "IP",
                    "name": "En Proceso",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-02-11T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "e178e159-3ed0-4617-a6da-7ea75400ce1b",
                "id": 1074548,
                "document_no": "OPOS-72769",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "96c89476-b392-4919-a4cb-17678e8792fa",
                    "id": 1000340,
                    "name": "ADERKIS ORDAZ",
                    "description": ""
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-02-10T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "cc36a856-9627-407f-95d9-04e27e10d4bb",
                "id": 1074564,
                "document_no": "OPOS-72785",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-02-11T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "ea38151d-e375-4058-8049-0a534810b9de",
                "id": 1074558,
                "document_no": "OPOS-72779",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 155910784.01,
                "grand_total": 180856509.45,
                "date_ordered": "2021-02-11T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "3d052984-0493-4f33-b18b-c4500ca2ae2c",
                "id": 1074557,
                "document_no": "OPOS-72778",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 5467363.01,
                "grand_total": 6342141.09,
                "date_ordered": "2021-02-10T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "09d89071-4304-4960-8173-bffe07b45ef9",
                "id": 1074556,
                "document_no": "OPOS-72777",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "DR",
                    "name": "Borrador",
                    "description": ""
                },
                "total_lines": 5467363.01,
                "grand_total": 6342141.09,
                "date_ordered": "2021-02-10T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "d34b6087-6f59-472e-bbcf-96775720a8c5",
                "id": 1074555,
                "document_no": "OPOS-72776",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "IN",
                    "name": "No-Válido",
                    "description": ""
                },
                "total_lines": 0,
                "grand_total": 0,
                "date_ordered": "2021-02-10T04:00:00.000Z",
                "business_partner": {
                    "uuid": "9f6cf428-9209-11e9-8046-0242ac140002",
                    "id": 1000006,
                    "value": "00000000",
                    "tax_id": "00000000",
                    "duns": "",
                    "naics": "",
                    "name": "Cliente Unico",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "8e18843a-3fbf-4875-9779-6dc0671294a9",
                "id": 1074554,
                "document_no": "OPOS-72775",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "43adbe9d-04a7-4cf6-9582-895c1e40da0b",
                    "id": 1000022,
                    "name": "mGallardo",
                    "description": "Mariana Gallardo"
                },
                "document_status": {
                    "value": "IP",
                    "name": "En Proceso",
                    "description": ""
                },
                "total_lines": 5467363.01,
                "grand_total": 6342141.09,
                "date_ordered": "2021-02-10T04:00:00.000Z",
                "business_partner": {
                    "uuid": "082f6777-dc21-4a52-94d5-985012881911",
                    "id": 1010371,
                    "value": "v24683993",
                    "tax_id": "",
                    "duns": "",
                    "naics": "",
                    "name": "elsio sanchez",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "4b06fdd2-33ce-47e1-a6bb-c854e1be9dad",
                "id": 1073334,
                "document_no": "OPOS-71531",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "IP",
                    "name": "En Proceso",
                    "description": ""
                },
                "total_lines": 144976057.99,
                "grand_total": 168172227.27,
                "date_ordered": "2021-01-26T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "b8a75d11-5116-4d27-a37b-8bc443d76046",
                "id": 1073332,
                "document_no": "OPOS-71529",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "IP",
                    "name": "En Proceso",
                    "description": ""
                },
                "total_lines": 106730042.69,
                "grand_total": 123806849.52,
                "date_ordered": "2021-01-26T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            },
            {
                "uuid": "c982b03f-39ec-4830-a1f2-e35136d5d1e9",
                "id": 1073333,
                "document_no": "OPOS-71530",
                "document_type": {
                    "uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c",
                    "id": 1000039,
                    "name": "Orden POS",
                    "print_name": "Orden POS",
                    "description": ""
                },
                "sales_representative": {
                    "uuid": "e677bb34-4c69-4397-9471-7432e04ea2f3",
                    "id": 1000454,
                    "name": "Nerson Pulido",
                    "description": "nPulido"
                },
                "document_status": {
                    "value": "IP",
                    "name": "En Proceso",
                    "description": ""
                },
                "total_lines": 151814060.74,
                "grand_total": 176104310.46,
                "date_ordered": "2021-01-26T04:00:00.000Z",
                "business_partner": {
                    "uuid": "43e3839c-5e64-4c2f-80da-6029c5e1aadf",
                    "id": 1007410,
                    "value": "J41211225",
                    "tax_id": "J41211225",
                    "duns": "",
                    "naics": "",
                    "name": "INVERSIONES C&S 2019",
                    "last_name": "",
                    "description": ""
                }
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### GET /api/form/addons/point-of-sales/order-lines

Lista de Líneas de Pedidos de Ventas

#### Parámetros:

`order_uuid` - Referencia al UUID del pedido.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/order-lines?page_token=16cc1c3e-f7c3-4543-9edd-da2b7817e327-2&token=%3Ctoken-generated-for-demo-api%3E&language=es&order_uuid=498e59b3-3c70-4446-a42a-284311ca6569'
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
                "uuid": "f4dd9991-58cf-49b7-abc8-cf6b74a25ccd",
                "order_uuid": "498e59b3-3c70-4446-a42a-284311ca6569",
                "line": 10,
                "product": {
                    "uuid": "88fd3d4f-31bc-4d87-b59a-917fce6f8155",
                    "id": 1000155,
                    "value": "ROS37520",
                    "name": "ACEITE ROSHPACK HI-ENERGY SL 20W50 OT 16/1",
                    "help": "",
                    "document_note": "",
                    "uom_name": "Each",
                    "product_type": "",
                    "is_stocked": true,
                    "is_drop_ship": true,
                    "is_purchased": true,
                    "is_sold": true,
                    "image_url": "",
                    "product_category_name": "Comercialización Nacional",
                    "product_group_name": "",
                    "product_class_name": "",
                    "product_classification_name": "",
                    "weight": 0,
                    "volume": 0,
                    "upc": "",
                    "sku": "",
                    "shelf_width": 0,
                    "shelf_height": 0,
                    "shelf_depth": 0,
                    "units_per_pack": 0,
                    "units_per_pallet": 0,
                    "guarantee_days": 0,
                    "description_url": "",
                    "version_no": "",
                    "tax_category": "Exento",
                    "description": ""
                },
                "charge": {
                    "uuid": "",
                    "id": 0,
                    "name": "",
                    "description": ""
                },
                "description": "",
                "line_description": "ACEITE ROSHPACK HI-ENERGY SL 20W50 OT 16/1",
                "quantity": 1,
                "price": 3.69,
                "discount_rate": 0,
                "line_net_amount": 3.69,
                "tax_rate": {
                    "name": "Exento",
                    "description": "Exento",
                    "tax_indicator": "E",
                    "rate": 0
                },
                "warehouse": {
                    "id": 1000002,
                    "uuid": "0de9a462-1e4e-11e9-8ea2-6c0b840adaed",
                    "name": "Comercialización",
                    "description": ""
                }
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/form/addons/point-of-sales/key-layout

Obtenga el diseño de la llave

#### Parámetros:

`key_layout_uuid` - Referencia al UUID del diseño de la llave.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/adempiere/form/addons/point-of-sales/key-layout?page_token=16cc1c3e-f7c3-4543-9edd-da2b7817e327-2&token=%3Ctoken-generated-for-demo-api%3E&language=es&key_layout_uuid=0c65bace-ec5f-4e90-822c-ee9b7bd0c539'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "0c65bace-ec5f-4e90-822c-ee9b7bd0c539",
        "id": 1000001,
        "name": "Producto",
        "description": "",
        "help": "",
        "layout_type": "P",
        "columns": 0,
        "color": "",
        "keys": [
            {
                "uuid": "cddf89e6-e1bb-4fe4-8515-19482bea94bd",
                "id": 1000001,
                "name": "Pintura Caucho B",
                "description": "",
                "sub_key_layout_uuid": "",
                "color": "",
                "sequence": 10,
                "span_x": 0,
                "span_y": 0,
                "product_value": "CMBPRE001-4-C",
                "quantity": 1,
                "resource_reference": {
                    "resource_uuid": "",
                    "file_name": "",
                    "description": "",
                    "text_msg": "",
                    "content_type": ""
                }
            },
            {
                "uuid": "88a99595-b857-41d9-8b7c-878e03d025b7",
                "id": 1000001,
                "name": "Balón Basket 7",
                "description": "",
                "sub_key_layout_uuid": "",
                "color": "",
                "sequence": 20,
                "span_x": 0,
                "span_y": 0,
                "product_value": "B7250",
                "quantity": 1,
                "resource_reference": {
                    "resource_uuid": "",
                    "file_name": "",
                    "description": "",
                    "text_msg": "",
                    "content_type": ""
                }
            },
            {
                "uuid": "548272a0-1be5-420c-acd7-36a04a3e3000",
                "id": 1000001,
                "name": "Hi-Energy SL 20W50",
                "description": "",
                "sub_key_layout_uuid": "",
                "color": "",
                "sequence": 30,
                "span_x": 0,
                "span_y": 0,
                "product_value": "ROS37520",
                "quantity": 1,
                "resource_reference": {
                    "resource_uuid": "",
                    "file_name": "",
                    "description": "",
                    "text_msg": "",
                    "content_type": ""
                }
            },
            {
                "uuid": "71369e5b-aae7-4ee0-8250-8bd4180ccbe6",
                "id": 1000001,
                "name": "Electrodomésticos",
                "description": "",
                "sub_key_layout_uuid": "6417c8cd-1b2b-4ace-b1ec-42b40542d465",
                "color": "",
                "sequence": 40,
                "span_x": 0,
                "span_y": 0,
                "product_value": "",
                "quantity": 0,
                "resource_reference": {
                    "resource_uuid": "",
                    "file_name": "",
                    "description": "",
                    "text_msg": "",
                    "content_type": ""
                }
            },
            {
                "uuid": "22c02197-83a5-47b4-8b7a-e88294eff92e",
                "id": 1000001,
                "name": "Juguetes",
                "description": "",
                "sub_key_layout_uuid": "c00245bb-6a47-438e-b772-74dada16a2d4",
                "color": "",
                "sequence": 50,
                "span_x": 0,
                "span_y": 0,
                "product_value": "",
                "quantity": 0,
                "resource_reference": {
                    "resource_uuid": "",
                    "file_name": "",
                    "description": "",
                    "text_msg": "",
                    "content_type": ""
                }
            },
            {
                "uuid": "6182e88f-a11a-468d-b2b3-222e816a89a4",
                "id": 1000001,
                "name": "Pinturas",
                "description": "",
                "sub_key_layout_uuid": "4d14dce3-cd9f-4aec-b86e-f647bd69d002",
                "color": "",
                "sequence": 60,
                "span_x": 0,
                "span_y": 0,
                "product_value": "",
                "quantity": 0,
                "resource_reference": {
                    "resource_uuid": "",
                    "file_name": "",
                    "description": "",
                    "text_msg": "",
                    "content_type": ""
                }
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error