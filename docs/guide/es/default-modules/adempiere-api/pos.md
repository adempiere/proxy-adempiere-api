## Módulo Pos

### POST /adempiere-api/pos/list-point-of-sales

Lista todos los puntos de venta asociados al usuario actual
#### Parámetros POST:

`user_uuid` - uuid del usuario

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/list-point-of-sales?token=98a713be-276c-4e45-8c5e-c364cc702153&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"user_uuid":"43adbe9d-04a7-4cf6-9582-895c1e40da0b"}'
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

### POST /adempiere-api/pos/get-product-price

Obtener el precio del producto
#### Parámetros POST:

`search_value` - Valor de búsqueda del producto.
`upc` - UPC del producto.
`value` - Valor del producto.
`name` - Nombre del producto.
`price_list_uuid` - Referencia UUID de la lista de precios.
`business_partner_uuid` - Referencia al UUID del socio comercial.
`warehouse_uuid` - Referencia al UUID del almacén.
`valid_from` - Lista de precios válida desde.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/get-product-price?token=5546436e-1146-47ae-a6b3-3895680ccade&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"search_value":"3933-018MC","price_list_uuid":"54745978-ce79-11e9-aa53-0242ac110002"}'
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
            "name": "IVA 16% (Ingreso)",
            "description": "Alícuota General (16%) (Ingreso)",
            "tax_indicator": "16%",
            "rate": 16
        },
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
        "price_list": 5467363.01,
        "price_standard": 5467363.01,
        "price_limit": 3827152.58,
        "price_list_name": "Ventas (VES)",
        "is_tax_included": false,
        "valid_from": 1613534400000,
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
        "schema_price_list": 5467363.01,
        "schema_price_standard": 5467363.01,
        "schema_price_limit": 3827152.58
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/pos/list-product-prices

Precio de lista del producto
#### Parámetros POST:

`search_value` - Valor de búsqueda del producto.
`upc` - UPC del producto.
`value` - Valor del producto.
`name` - Nombre del producto.
`price_list_uuid` - Referencia UUID de la lista de precios.
`business_partner_uuid` - Referencia al UUID del socio comercial.
`warehouse_uuid` - Referencia al UUID del almacén.
`valid_from` - Lista de precios válida desde.
`tableName` - Nombre de la tabla (obligatorio si no es una consulta).
`filters` -  Filtros.
`columns` -  Columnas.
`query` - Consulta personalizada en lugar de un nombre de tabla basado en SQL.
`whereClause` - Cláusula where de la búsqueda basada en SQL.
`orderByClause` - Cláusula order by basada en SQL.
`limit` - Limite de registro.
`pageSize` - Tamaño de página personalizado para el lote.
`pageToken` - Token de página específico.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/list-product-prices?token=5546436e-1146-47ae-a6b3-3895680ccade&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"price_list_uuid":"54745978-ce79-11e9-aa53-0242ac110002","business_partner_uuid":"9f6cf428-9209-11e9-8046-0242ac140002","warehouse_uuid":"0b1fe9d4-9bdd-4e69-8573-9a3b50d8251e"}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 11062,
        "next_page_token": "5546436e-1146-47ae-a6b3-3895680ccade-1",
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
                    "name": "IVA 16% (Ingreso)",
                    "description": "Alícuota General (16%) (Ingreso)",
                    "tax_indicator": "16%",
                    "rate": 16
                },
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
                "price_list": 5467363.01,
                "price_standard": 5467363.01,
                "price_limit": 3827152.58,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 5467363.01,
                "schema_price_standard": 5467363.01,
                "schema_price_limit": 3827152.58
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
                    "uuid": "5e1a2502-7f37-46b4-a5cc-f9cae0ff62bb",
                    "id": 1011195,
                    "value": "1013-017",
                    "name": "HARINA DE TRIGO FINNA 1KG",
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
                    "product_group_name": "ALIMENTOS Y BEBIDAS",
                    "product_class_name": "HARINAS MAIZ, TRIGO Y OTROS CEREALES",
                    "product_classification_name": "ALERTA rotación de Capital",
                    "weight": 1,
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
                    "description": "1000001"
                },
                "price_list": 2548604.16,
                "price_standard": 2548604.16,
                "price_limit": 2166312.78,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 2548604.16,
                "schema_price_standard": 2548604.16,
                "schema_price_limit": 2166312.78
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
                    "name": "IVA 16% (Ingreso)",
                    "description": "Alícuota General (16%) (Ingreso)",
                    "tax_indicator": "16%",
                    "rate": 16
                },
                "product": {
                    "uuid": "c326a718-2de9-45ad-8502-232f32937037",
                    "id": 1010365,
                    "value": "3392-392MC",
                    "name": "PINT COLLET PROMO BLC  T-C 1GL BASIC",
                    "help": "",
                    "document_note": "",
                    "uom_name": "Gallon",
                    "product_type": "",
                    "is_stocked": true,
                    "is_drop_ship": false,
                    "is_purchased": true,
                    "is_sold": true,
                    "image_url": "",
                    "product_category_name": "Mercancía en Consignación",
                    "product_group_name": "PINTURAS",
                    "product_class_name": "JMC CIENTIFICA, C,A (COLLET)",
                    "product_classification_name": "Baja Rotación",
                    "weight": 0,
                    "volume": 0,
                    "upc": "2327201705212",
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
                "price_list": 17278930.28,
                "price_standard": 17278930.28,
                "price_limit": 12095246.36,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 17278930.28,
                "schema_price_standard": 17278930.28,
                "schema_price_limit": 12095246.36
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
                    "name": "IVA 16% (Ingreso)",
                    "description": "Alícuota General (16%) (Ingreso)",
                    "tax_indicator": "16%",
                    "rate": 16
                },
                "product": {
                    "uuid": "2cf9e4a0-1c77-4fcd-a0e2-2c3b3c3ab830",
                    "id": 1009385,
                    "value": "0110-793MC",
                    "name": "AKSU LIMPIA PARABRISAS AT32 20\"",
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
                    "product_group_name": "AUTOMOTRIZ",
                    "product_class_name": "LATINIMPORT ARAGUA, C.A",
                    "product_classification_name": "Baja Rotación",
                    "weight": 0,
                    "volume": 0,
                    "upc": "7592393002530",
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
                "price_list": 6163678.11,
                "price_standard": 6163678.11,
                "price_limit": 4314572.95,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 6163678.11,
                "schema_price_standard": 6163678.11,
                "schema_price_limit": 4314572.95
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
                    "name": "IVA 16% (Ingreso)",
                    "description": "Alícuota General (16%) (Ingreso)",
                    "tax_indicator": "16%",
                    "rate": 16
                },
                "product": {
                    "uuid": "449ed773-9ed5-4849-9493-287eac65a6ff",
                    "id": 1009387,
                    "value": "0110-788MC",
                    "name": "REFRIGERANTE ROJO GALON SKI",
                    "help": "",
                    "document_note": "",
                    "uom_name": "Gallon",
                    "product_type": "",
                    "is_stocked": true,
                    "is_drop_ship": false,
                    "is_purchased": true,
                    "is_sold": true,
                    "image_url": "",
                    "product_category_name": "Mercancía en Consignación",
                    "product_group_name": "AUTOMOTRIZ",
                    "product_class_name": "LATINIMPORT ARAGUA, C.A",
                    "product_classification_name": "Baja Rotación",
                    "weight": 0,
                    "volume": 0,
                    "upc": "7593597000698",
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
                "price_list": 15473668.9,
                "price_standard": 15473668.9,
                "price_limit": 10831563.9,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 15473668.9,
                "schema_price_standard": 15473668.9,
                "schema_price_limit": 10831563.9
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
                    "name": "IVA 16% (Ingreso)",
                    "description": "Alícuota General (16%) (Ingreso)",
                    "tax_indicator": "16%",
                    "rate": 16
                },
                "product": {
                    "uuid": "94834969-7f6f-4f62-af8e-c3b4e55dc6cb",
                    "id": 1009383,
                    "value": "0107-883MC",
                    "name": "GRASA RODANOL GRAPHI-2 250GR",
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
                    "product_group_name": "AUTOMOTRIZ",
                    "product_class_name": "LATINIMPORT ARAGUA, C.A",
                    "product_classification_name": "Baja Rotación",
                    "weight": 0,
                    "volume": 0,
                    "upc": "7595821000191",
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
                "price_list": 4074732.81,
                "price_standard": 4074732.81,
                "price_limit": 2852311.83,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 4074732.81,
                "schema_price_standard": 4074732.81,
                "schema_price_limit": 2852311.83
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
                    "name": "IVA 16% (Ingreso)",
                    "description": "Alícuota General (16%) (Ingreso)",
                    "tax_indicator": "16%",
                    "rate": 16
                },
                "product": {
                    "uuid": "e65348ad-4f2e-4a98-809b-bba2ce467395",
                    "id": 1009388,
                    "value": "0107-880MC",
                    "name": "GRASA RODANOL FIBRO-3 TARRO",
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
                    "product_group_name": "AUTOMOTRIZ",
                    "product_class_name": "LATINIMPORT ARAGUA, C.A",
                    "product_classification_name": "Baja Rotación",
                    "weight": 0,
                    "volume": 0,
                    "upc": "7595821000979",
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
                "price_list": 3223681.02,
                "price_standard": 3223681.02,
                "price_limit": 2256575.81,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 3223681.02,
                "schema_price_standard": 3223681.02,
                "schema_price_limit": 2256575.81
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
                    "uuid": "d5ad50d3-c2e0-4c1f-82bf-482d58e73939",
                    "id": 1011196,
                    "value": "1011-030",
                    "name": "MARGARINA DELINE 500GR",
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
                    "product_group_name": "ALIMENTOS Y BEBIDAS",
                    "product_class_name": "MARGARINAS Y MAYONESAS",
                    "product_classification_name": "ALERTA rotación de Capital",
                    "weight": 1,
                    "volume": 0,
                    "upc": "789300098006",
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
                    "description": "1000002"
                },
                "price_list": 2548604.16,
                "price_standard": 2548604.16,
                "price_limit": 2166312.78,
                "price_list_name": "Ventas (VES)",
                "is_tax_included": false,
                "valid_from": 1613534400000,
                "price_precision": -1,
                "quantity_on_hand": 0,
                "quantity_reserved": 0,
                "quantity_ordered": 0,
                "quantity_available": 0,
                "schema_currency": {
                    "id": 50001,
                    "uuid": "a567befe-fb40-11e8-a479-7a0060f0aa01",
                    "iso_code": "VES",
                    "currency_symbol": "Bs.S",
                    "description": "Bolivar",
                    "standard_precision": 2,
                    "costing_precision": 2
                },
                "schema_price_list": 2548604.16,
                "schema_price_standard": 2548604.16,
                "schema_price_limit": 2166312.78
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error



### POST /adempiere-api/pos/create-order

Crear un orden desde el punto de venta

#### Parámetros POST:

`pos_uuid` - Uuid del punto de venta.
`customer_uuid` - Uuid del representante de ventas`.


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/create-order?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"pos_uuid":"421173e1-c58d-4474-89e5-9872f07baf47","customer_uuid":"9f6cf428-9209-11e9-8046-0242ac140002","sales_representative_uuid":"43adbe9d-04a7-4cf6-9582-895c1e40da0b"}'
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

### POST /adempiere-api/pos/create-payment

Crear pago

#### Parámetros POST:

`pos_uuid` - Uuid del punto de venta.
`order_uuid`- Referencia del UUID del pedido
`invoice_uuid` - Referencia del UUID de la factura.
`bank_uuid` - Referencia UUID del banco.
`referenceNo` - Número de referencia.
`description` - Descripción del pago.
`amount` - Monto del pago.
`tenderTypeCode` - Tipo o metodo de pago.
`paymentDate` - Fecha del pago.
`currencyUuid` - Uuid de la moneda


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/create-payment?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_uuid": "511605dc-e035-4b97-979d-6096f6ae7289","tender_type_code": "K","currency_uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01","amount": "16345.65"}'
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

### POST /adempiere-api/pos/delete-payment

Eliminar pago

#### Parámetros POST:

`payment_uuid` - Referencia del UUID de pago.


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/delete-payment?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"payment_uuid": "efe63e25-494e-435a-a75c-c4d055c21927", amount": "100.00"}'
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

### POST /adempiere-api/pos/update-payment

Actualizar pago

#### Parámetros POST:

`payment_uuid` - Referencia del UUID de pago.
`bank_uuid` - Referencia UUID del banco.
`referenceNo` - Número de referencia.
`description` - Descripción del pago.
`amount` - Monto del pago.
`tenderTypeCode` - Tipo o metodo de pago.
`paymentDate` - Fecha del pago.
`currencyUuid` - Uuid de la moneda


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/update-payment?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"payment_uuid": "efe63e25-494e-435a-a75c-c4d055c21927"}'
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
    "amount": 100.00,
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



### GET /adempiere-api/pos/list-payments

Lista de pagos

#### Parámetros GET:

`order_uuid`- Referencia del UUID del pedido


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/list-payments?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_uuid": "5359ab0f-3c1c-4ca9-9306-fe38e09367c4"}'
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
        "uuid": "e67e1589-8316-4545-ba37-7751f014613c",
        "id": 1012189,
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
      },
      {
        "uuid": "74a2ad48-f1db-4392-bde4-278fac36c479",
        "id": 1012190,
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
      },
      {
        "uuid": "16273eba-a375-4ac9-952f-10bc93a9e6e0",
        "id": 1012191,
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
      },
      {
        "uuid": "816dbf1e-bef7-414d-97c7-19e1aa86e88c",
        "id": 1012183,
        "document_no": "#",
        "document_status": {
          "value": "DR",
          "name": "Drafted",
          "description": ""
        },
        "amount": 0,
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
      },
      {
        "uuid": "dbc2150e-af44-41e6-924b-392ce703848d",
        "id": 1012184,
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
      },
      {
        "uuid": "9cbf9d9d-4994-460c-babd-0417a60ff50b",
        "id": 1012187,
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
      },
      {
        "uuid": "9880eee0-b8ba-43b0-89b6-046da5a76e67",
        "id": 1012186,
        "document_no": "M - 1/3",
        "document_status": {
          "value": "DR",
          "name": "Drafted",
          "description": ""
        },
        "amount": 999.68,
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
      },
      {
        "uuid": "c7a54789-3b41-4ab0-8a7a-170fc8a4f51d",
        "id": 1012188,
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
      },
      {
        "uuid": "ca6a7d9a-7dd2-4ae7-be6c-2767f77c57a8",
        "id": 1012192,
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
      },
      {
        "uuid": "c4ce1202-f16b-4029-89ee-27ed1e46de31",
        "id": 1012193,
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
      },
      {
        "uuid": "c3fcc0f4-5963-45ef-91fa-7f9c38719ae2",
        "id": 1012194,
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
      },
      {
        "uuid": "4559e878-7985-4b34-8aba-5f474b9d3489",
        "id": 1012195,
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
    ]
  }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/pos/delete-order

Borrar pedido de venta

#### Parámetros POST:

`order_uuid`- Referencia del UUID del pedido


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/delete-order?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_uuid": "511605dc-e035-4b97-979d-6096f6ae7289"}'
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

### POST /adempiere-api/pos/create-order-line

Crear línea de pedido de cliente

#### Parámetros POST:

`order_uuid`- Referencia del UUID del pedido.
`product_uuid` - Referencia al UUID del producto.
`charge_uuid` - Referencia al UUID del cargo.
`description` - Referencia al UUID de la descripción.
`quantity` - Referencia UUID de la cantidad.
`price` - Referencia UUID del precio.
`discount_rate` - Referencia UUID de descuento.
`warehouse_uuid` - Referencia UUID del almacén.


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/create-order-line?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_uuid":"2b505b8f-92b6-4d29-8919-2e7a90747dc2","product_uuid":"6e081721-4710-40d6-85bd-ba0bc9bfd6db"}'
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
        "quantity": 1,
        "price": 5467363.01,
        "discount_rate": 0,
        "line_net_amount": 5467363.01,
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

### POST /adempiere-api/pos/delete-order-line

Delete Sales Order Line

#### Parámetros POST:

`order_line_uuid` - Referencia de UUID de línea de pedido de ventas.


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/delete-order-line?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_line_uuid": "0ab0e045-1371-404b-b665-72ae64c59f81"}'
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

### POST /adempiere-api/pos/update-order

Actualizar la orden de venta.

#### Parámetros POST:

`pos_uuid` - Uuid del punto de venta.
`order_uuid` - Uuid de la orden a actualizar.
`customer_uuid` - Uuid del representante de venta de la orden `.
`document-type-uuid` - Uuid del tipo de documento de la orde`.
`description` - Descripción del la orden`.


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/update-order?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"pos_uuid": "421173e1-c58d-4474-89e5-9872f07baf47","order_uuid": "5359ab0f-3c1c-4ca9-9306-fe38e09367c4","customer_uuid": "9f6cf428-9209-11e9-8046-0242ac140002","document-type-uuid": "45494bd2-12d8-41c4-b7e2-a1968b18e86c","description": "test update order"}'
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

### POST /adempiere-api/pos/update-order-line

Actualizar la línea de pedido de ventas

#### Parámetros POST:

`order_line_uuid` - Referencia del UUID del pedido.
`description` - Descripción.
`quantity` - Referencia del UUID de la cantidad.
`price` - Referencia UUID del precio.
`discount_rate` - Referencia al UUID de descuento.
`is_add_quantity` - Sólo añadir cantidad.


#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/update-order-line?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_line_uuid":"0ab0e045-1371-404b-b665-72ae64c59f81","quantity":2,"discount_rate":0}'
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

## GET /adempiere-api/pos/get-order

Obtener un pedido de venta

#### Parámetros GET:

`order_uuid` - Referencia al UUID del pedido.
`pos_uuid` - Referencia al UUID del punto de venta.
`customer_uuid` - Referencia al UUID del cliente.
`document_type_uuid` - Referencia al UUID del tipo de documento.
`sales_representative_uuid` - Referencia de UUID de representante de ventas.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/get-order?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"pos_uuid": "421173e1-c58d-4474-89e5-9872f07baf47","order_uuid": "2b505b8f-92b6-4d29-8919-2e7a90747dc2"}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
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
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/pos/list-orders

Lista de pedidos de venta

#### Parámetros POST:

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
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/list-orders?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"pos_uuid":"561359fb-e20a-4337-85d2-ff18538a94c5","is_paid":false,"is_processed":false,"is_aisle_seller":false,"is_invoiced":false}'
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


### POST /adempiere-api/pos/list-order-lines

Lista de Líneas de Pedidos de Ventas

#### Parámetros POST:

`order_uuid` - Referencia al UUID del pedido.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/list-order-lines?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"order_uuid":"2b505b8f-92b6-4d29-8919-2e7a90747dc2"}'
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
                "quantity": 1,
                "price": 5467363.01,
                "discount_rate": 0,
                "line_net_amount": 5467363.01,
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
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/pos/get-key-layout

Obtenga el diseño de la llave

#### Parámetros POST:

`key_layout_uuid` - Referencia al UUID del diseño de la llave.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/pos/get-key-layout?token=4646490c-3eaa-4737-9ee9-0e618af0cbb8&language=es' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"key_layout_uuid": "0c65bace-ec5f-4e90-822c-ee9b7bd0c539"}'
```

#### Cuerpo de Repuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "0c65bace-ec5f-4e90-822c-ee9b7bd0c539",
        "id": 1000001,
        "name": "Productos de Ventas",
        "description": "",
        "help": "",
        "layout_type": "P",
        "columns": 4,
        "color": "",
        "keys": [
            {
                "uuid": "483d11c7-80aa-4b0c-a53e-514a8ffd5969",
                "id": 1000001,
                "name": "MIGO OFERTAS",
                "description": "",
                "sub_key_layout_uuid": "983ff4d2-f85d-4c70-a14b-fe727230a844",
                "color": "",
                "sequence": 10,
                "span_x": 4,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "747039c1-6dd9-4cab-92ba-cafd416aec10",
                "id": 1000001,
                "name": "Categoría 01",
                "description": "",
                "sub_key_layout_uuid": "0bc8ca7c-3af2-449e-be60-337c16775301",
                "color": "",
                "sequence": 20,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "d28961cc-70ab-4872-bc8a-2ad7aa025c1f",
                "id": 1000001,
                "name": "Categoría 02",
                "description": "",
                "sub_key_layout_uuid": "363ddd12-d2bc-41f1-8ff2-e2ddb8024394",
                "color": "",
                "sequence": 30,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "0d087cf2-1fee-48f7-a0ee-4c6d96de761f",
                "id": 1000001,
                "name": "Categoría 03",
                "description": "",
                "sub_key_layout_uuid": "4ab6c4f3-df8f-4787-9bc7-b4ab912d9043",
                "color": "",
                "sequence": 40,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "c0ca98f8-ac31-43a8-8046-5e3942a495c9",
                "id": 1000001,
                "name": "Categoría 04",
                "description": "",
                "sub_key_layout_uuid": "194e94fe-006c-4676-ac12-ecc1aeb3f23f",
                "color": "",
                "sequence": 50,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "7f0e22a3-09fa-4bc7-94bb-23ae7c3373cb",
                "id": 1000001,
                "name": "Categoría 05",
                "description": "",
                "sub_key_layout_uuid": "54627209-15c3-4e8d-ac88-3d72814bf6e5",
                "color": "",
                "sequence": 60,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "780bf4c5-f0bc-47a1-80e8-800927022a18",
                "id": 1000001,
                "name": "Categoría 06",
                "description": "",
                "sub_key_layout_uuid": "08009563-7442-4618-ba78-e01f18556a0a",
                "color": "",
                "sequence": 70,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "66d698bb-8bee-4bc2-adcc-6c369691818e",
                "id": 1000001,
                "name": "Categoría 07",
                "description": "",
                "sub_key_layout_uuid": "025e77d2-1f82-45ca-b3d4-8f8584489713",
                "color": "",
                "sequence": 80,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "20abeab0-463c-4f03-80c3-d0565311250b",
                "id": 1000001,
                "name": "Categoría 08",
                "description": "",
                "sub_key_layout_uuid": "51d8b471-1437-4fbf-9673-2cffc29b7977",
                "color": "",
                "sequence": 90,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "c7a05b5e-651e-4750-a41a-45560b8f3255",
                "id": 1000001,
                "name": "Ofertas de Temporada",
                "description": "",
                "sub_key_layout_uuid": "f3008bc2-c4b2-4dbd-97a9-15da11ab1002",
                "color": "",
                "sequence": 100,
                "span_x": 4,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "ee22d262-0417-4296-93de-319b5f68bd11",
                "id": 1000001,
                "name": "Categoría 09",
                "description": "",
                "sub_key_layout_uuid": "b8435afc-4b59-4699-8c6b-64def1b236bb",
                "color": "",
                "sequence": 110,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "9836688c-60ba-44c4-b966-a6c91f1b8e5a",
                "id": 1000001,
                "name": "Categoría 10",
                "description": "",
                "sub_key_layout_uuid": "e03805c3-d991-4912-8c36-62110c5da630",
                "color": "",
                "sequence": 120,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "327ca385-064d-4c17-ae11-338c16ea7b24",
                "id": 1000001,
                "name": "Categoría 11",
                "description": "",
                "sub_key_layout_uuid": "6c5d1417-60b0-4fe1-941e-5c5d6a124e90",
                "color": "",
                "sequence": 130,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
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
                "uuid": "a9315438-43c0-4bdc-925c-0932d889cf40",
                "id": 1000001,
                "name": "Categoría 12",
                "description": "",
                "sub_key_layout_uuid": "ef4fcfdd-1a2d-46ca-99c7-a6bced59ce13",
                "color": "",
                "sequence": 140,
                "span_x": 0,
                "span_y": 0,
                "product_uuid": "",
                "quantity": 1,
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