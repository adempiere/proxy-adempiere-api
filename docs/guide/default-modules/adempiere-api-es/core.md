## Módulo núcleo

### GET /adempiere-api/core/country

Obtiene los datos del país.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`id` - identificador del país.
`uuid` - identificador único universal del país.

#### Cuerpo de la Petición:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/country&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

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

## Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/core/list-organizations

Obtiene la lista de organizaciones a las que el usuario tiene acceso según su rol.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`page_size` - tamaño de las listas de la paginación.
`page_token` - token el numero de la página.

#### Cuerpo de la Petición:

```json
{
	"role_id": 321,
    "role_uuid": "f855ca25-07b2-4760-aec6-676db1a5cb19"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/list-organizations&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es&page_size=50&page_token=47e1c737-418d-4340-b552-797860bd125f-3' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"role_uuid":"f855ca25-07b2-4760-aec6-676db1a5cb19"}'
```

#### Cuerpo de Repuesta:

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

## Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/core/list-warehouses

Obtiene la lista de organizaciones a las que el usuario tiene acceso según su rol.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`page_size` - tamaño de las listas de la paginación.
`page_token` - token el numero de la página.

#### Cuerpo de la Petición:

```json
{
	"organization_id": 432,
    "organization_uuid": "a3e5c878-fb40-11e8-a479-7a0060f0aa01"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/list-warehouses&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es&page_size=50&page_token=47e1c737-418d-4340-b552-797860bd125f-3' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"organization_uuid":"a3e5c878-fb40-11e8-a479-7a0060f0aa01"}'
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
				"id": 0,
				"uuid": "a5f64584-fb40-11e8-a479-7a0060f0aa01",
				"name": "*",
				"description": "ALL WAREHOUSE"
			}
		]
	}
}
```
## Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/core/list-languages

Obtiene la lista de idiomas disponibles.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`page_size` - tamaño de las listas de la paginación.
`page_token` - token el numero de la página.

#### Cuerpo de la Petición:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/list-languages&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es&page_size=50&page_token=47e1c737-418d-4340-b552-797860bd125f-1' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### Cuerpo de Repuesta:

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

## Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/core/get-business-partner

Obtiene los datos del país.

#### Parámetros GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

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

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/get-business-partner&token=xu3h02nd67yq0gapyj8x3kpqwzcy02om&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

## Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/core/create-business-partner

Crear Socio de Negocios

#### Paràmetros POST:

`valor` - valor.
`tax_id`: número de identificación fiscal.
`duns` - DUNS.
`naics` - NAICS.
`name` - Nombre.
`last_name` - Apellido.
`description` - Descripción.
`contact_name` - Nombre de contacto.
`email`: correo electrónico.
`phone`: teléfono.
`business_partner_group_uuid` - Grupo de socios comerciales.
`address1` - Dirección 1.
`address2` - Dirección 2.
`address3` - Dirección 3.
`address4` - Dirección 4.
`city_uuid`: UUID de la ciudad.
`city_name`: nombre de la ciudad.
`postal_code`: código postal.
`region_uuid`: UUID de la región.
`region_name` - Nombre de la región.
`country_uuid`: UUID del país.
`pos_uuid`: UUID de POS.
`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/create-business-partner?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"value":"V123456789","name":"Test","e_mail":"test@gmail.com","phone":"58+ 4145384801","address1":"Paez","address2":"Av Circuvalancio","address3":"Urbanicacion Altos de Camorucos","address4":"Lote 2 Garza Blanca","city_uuid":"fbda5b92-820a-4d98-9917-d975e4b97baf","city_name":"Acarigua","postal_code":"3301","region_uuid":"629317dd-88c2-419d-9c60-b116bd837a71","region_name":"Portuguesa","pos_uuid":"561359fb-e20a-4337-85d2-ff18538a94c5"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "69a7914f-3db6-4cc5-b127-a6aecc50a504",
        "id": 1011700,
        "value": "V123456789",
        "tax_id": "",
        "duns": "",
        "naics": "",
        "name": "Test",
        "last_name": "",
        "description": ""
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/core/list-business-partner

Lista de socios comerciales

#### Paràmetros POST:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`page_size` - tamaño de las listas de la paginación.
`page_token` - token el numero de la página.
`search_value` - Valor de búsqueda.
`value`: valor.
`name` - Nombre.
`contact_name` - Nombre de contacto.
`email`: correo electrónico.
`postal_code`: código postal.
`phone`: teléfono.
`table_name` - nombre de la tabla (Obligatorio si no es una consulta).
`query`: consulta personalizada en lugar de un nombre de tabla basado en SQL.
`where_clause` - cláusula where de búsqueda basada en SQL.
`order_by_clause`: ordena por cláusula basada en SQL.
`limit` - límite de registros.

#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
	"language": "es",
	"page_token": "page_token=9b403b14-d063-4f65-9720-358a6de8c55e-1"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/list-business-partner?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"search_value": "V1234567"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 1,
        "next_page_token": "",
        "records": [
            {
                "uuid": "69a7914f-3db6-4cc5-b127-a6aecc50a504",
                "id": 1011700,
                "value": "V123456789",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "",
                "description": ""
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /adempiere-api/core//get-conversion-rate

Obtener Tasa de Conversión

#### Paràmetros POST:
`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`page_size` - tamaño de las listas de la paginación.
`page_token` - token el numero de la página.
`conversion_type_uuid`: UUID de referencia del tipo de conversión.
`currency_from_uuid` - Moneda del UUID de referencia.
`currency_to_uuid` - Moneda Para hacer referencia al UUID.
`conversion_date`: UUID de referencia de la fecha de conversión.
#### Cuerpo de la Petición:

```json
{
	"token": "5339c283-dc77-4001-8315-22905596d6c0",
    "language": "es"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/adempiere-api/core/get-conversion-rate?token=9938867d-b2c5-45bc-8650-c2b484b4887f&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    --data-binary '{"conversion_type_uuid":"40767cd6-b6cf-4058-ae34-42ea1ea3ce71","currency_from_uuid":"a567befe-fb40-11e8-a479-7a0060f0aa01","currency_to_uuid":"a5671df0-fb40-11e8-a479-7a0060f0aa01"}'
    
```
#### Cuerpo de Respuesta:

```json
{
	"code":200,
	"result":{
		"uuid":"a567befe-fb40-11e8-a479-7a0060f0aa01",
		"id":50001,
		"conversion_type_uuid":"a5671df0-fb40-11e8-a479-7a0060f0aa01"
		,"valid_from":0,
		"valid_to":0
	}
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


