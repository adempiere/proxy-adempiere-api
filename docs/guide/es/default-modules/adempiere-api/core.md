## Módulo núcleo

### GET api/common/country

Obtiene los datos del país.

#### Parámetros

- `token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `id` - identificador del país.
- `uuid` - identificador único universal del país.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/country?token=<token-generated-for-demo-api>&language=es&uuid=901bff3b-6f85-4bbf-b068-a5b273866885&id=1012546' \
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
        "uuid": "a5653044-fb40-11e8-a479-7a0060f0aa01",
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
            "uuid": "a5671df0-fb40-11e8-a479-7a0060f0aa01",
            "iso_code": "USD",
            "currency_symbol": "$",
            "description": "US Dollar",
            "standard_precision": 2,
            "costing_precision": 4
        }
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET api/common/organizations

Obtiene la lista de organizaciones a las que el usuario tiene acceso según su rol.

#### Parámetros

- `token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `role_id` - id del rol actual
- `role_uuid` - uuid del rol actual
- `page_size` - tamaño de las listas de la paginación.
- `page_token` - token el numero de la página.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/organizations?token=<token-generated-for-demo-api>&language=es&role_id=321&role_uuid=f855ca25-07b2-4760-aec6-676db1a5cb19' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
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
                "uuid": "a3e5c878-fb40-11e8-a479-7a0060f0aa01",
                "name": "*",
                "description": "All Organizations",
                "is_read_only": false,
                "duns": "0          ",
                "tax_id": "0",
                "phone": "",
                "phone2": "",
                "fax": "",
                "corporate_branding_image": ""
            }
        ]
    }
}
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/common/warehouses

Obtiene la lista de almacenes

#### Parámetros

- `token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `organization_id` - id de la organización actual.
- `organization_uuid` - uuid de la organización actual.
- `page_size` - tamaño de las listas de la paginación.
- `page_token` - token el numero de la página.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/warehouses?token=<token-generated-for-demo-api>&language=es&organization_id=0&organization_uuid=a3e5c878-fb40-11e8-a479-7a0060f0aa01' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
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
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### GET /api/common/languages

Obtiene la lista de idiomas disponibles.

#### Parámetros

- `token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de las listas de la paginación.
- `page_token` - token el numero de la página.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl --silent --location --request GET 'https://api.erpya.com/api/common/languages?token=<token-generated-for-demo-api>&language=es' \
-X GET \
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

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### GET /api/common/business-partner

obtener un socio comercial

#### Parámetros

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma de inicio de sesión.
- `page_size` - tamaño de la página (personalizado).
- `page_token` - token de la página (opcional para obtener una página específica).
- `search_value` - Valor de búsqueda.
- `value` - Valor.
- `name` - Nombre.
- `contact_name` - Nombre del contacto.
- `email` - Correo electrónico.
- `postal_code` - Código postal.
- `phone` - Teléfono.
- `table_name` - nombre de la tabla (obligatorio si no es una consulta).
- `query` - consulta personalizada en lugar de un nombre de tabla basado en SQL.
- `where_clause` - cláusula where de la búsqueda basada en SQL.
- `order_by_clause` - cláusula order by basada en SQL.
- `limit` - límite de registros.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/business-partner?token=<token-generated-for-demo-api>&language=es&uuid=9c5e65e6-8060-44bf-94ec-332578f7b5d7' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```

#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### POST /api/common/create-business-partner

Crear Socio de Negocios

#### Paràmetros

- `valor` - valor.
- `tax_id`: número de identificación fiscal.
- `duns` - DUNS.
- `naics` - NAICS.
- `name` - Nombre.
- `last_name` - Apellido.
- `description` - Descripción.
- `contact_name` - Nombre de contacto.
- `email`: correo electrónico.
- `phone`: teléfono.
- `business_partner_group_uuid` - Grupo de socios comerciales.
- `address1` - Dirección 1.
- `address2` - Dirección 2.
- `address3` - Dirección 3.
- `address4` - Dirección 4.
- `city_uuid`: UUID de la ciudad.
- `city_name`: nombre de la ciudad.
- `postal_code`: código postal.
- `region_uuid`: UUID de la región.
- `region_name` - Nombre de la región.
- `country_uuid`: UUID del país.
- `pos_uuid`: UUID de POS.
- `token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.

#### Cuerpo de la Petición:

```json
{
    "value": "V1234567890",
    "name": "Test",
    "last_name": "Test 2",
    "e_mail": "test@gmail.com",
    "phone": "58+ 4145384801",
    "address1": "Paez",
    "address2": "Av Circuvalancio",
    "address3": "Urbanicacion Altos de Camorucos",
    "address4": "Lote 2 Garza Blanca",
    "city_uuid": "fbda5b92-820a-4d98-9917-d975e4b97baf",
    "city_name": "Acarigua",
    "postal_code": "3301",
    "region_uuid": "629317dd-88c2-419d-9c60-b116bd837a71",
    "region_name": "Portuguesa",
    "pos_uuid": "561359fb-e20a-4337-85d2-ff18538a94c5"
}
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/create-business-partner?token=<token-generated-for-demo-api>&language=es'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"value":"V1234567890","name":"Test","last_name":"Test 2","e_mail":"test@gmail.com","phone":"58+ 4145384801","address1":"Paez","address2":"Av Circuvalancio","address3":"Urbanicacion Altos de Camorucos","address4":"Lote 2 Garza Blanca","city_uuid":"fbda5b92-820a-4d98-9917-d975e4b97baf","city_name":"Acarigua","postal_code":"3301","region_uuid":"629317dd-88c2-419d-9c60-b116bd837a71","region_name":"Portuguesa","pos_uuid":"561359fb-e20a-4337-85d2-ff18538a94c5"}'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "uuid": "6b0d322a-5fb4-40de-a8af-b7d61fbe232c",
        "id": 1000258,
        "value": "V1234567890",
        "tax_id": "",
        "duns": "",
        "naics": "",
        "name": "Test",
        "last_name": "Test 2",
        "description": ""
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### GET /api/common/business-partners

Obtener socios comerciales

#### Paràmetros

- `token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de las listas de la paginación.
- `page_token` - token el numero de la página.
- `search_value` - Valor de búsqueda.
- `value`: valor.
- `name` - Nombre.
- `contact_name` - Nombre de contacto.
- `email`: correo electrónico.
- `postal_code`: código postal.
- `phone`: teléfono.
- `table_name` - nombre de la tabla (Obligatorio si no es una consulta).
- `query`: consulta personalizada en lugar de un nombre de tabla basado en SQL.
- `where_clause` - cláusula where de búsqueda basada en SQL.
- `order_by_clause`: ordena por cláusula basada en SQL.
- `limit` - límite de registros.

#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/business-partners?token=b6d0c7c7-0785-4302-bb20-94c1bd5488b2&language=es&name=Test'\
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "record_count": 6,
        "next_page_token": "",
        "records": [
            {
                "uuid": "c0052032-a8f5-45f5-b0eb-df081c42f622",
                "id": 1000178,
                "value": "J123456789",
                "tax_id": "J123456789",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "Example",
                "description": ""
            },
            {
                "uuid": "325646c5-24d3-484c-85c1-6dd60111c2cb",
                "id": 1000173,
                "value": "V11111111",
                "tax_id": "V11111111",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "A",
                "description": ""
            },
            {
                "uuid": "e4771f8c-a56b-4ece-8fd2-3ba12fb87ac5",
                "id": 1000183,
                "value": "V3333333333",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "test",
                "last_name": "",
                "description": ""
            },
            {
                "uuid": "cae713fc-1bfe-4827-bc6d-287ca291afff",
                "id": 1000188,
                "value": "V123456789",
                "tax_id": "V123456789",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "",
                "description": ""
            },
            {
                "uuid": "1f1e8661-4292-4c4b-ab41-e998bd6ddd77",
                "id": 1000189,
                "value": "V123456782",
                "tax_id": "V123456782",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "Test2",
                "description": ""
            },
            {
                "uuid": "6b0d322a-5fb4-40de-a8af-b7d61fbe232c",
                "id": 1000258,
                "value": "V1234567890",
                "tax_id": "",
                "duns": "",
                "naics": "",
                "name": "Test",
                "last_name": "Test 2",
                "description": ""
            }
        ]
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error


### GET /api/common/conversion-rate

Obtener Tasa de Conversión

#### Paràmetros
- token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
- `language` - idioma para las traducciones de la respuesta.
- `page_size` - tamaño de las listas de la paginación.
- `page_token` - token el numero de la página.
- `conversion_type_uuid`: UUID de referencia del tipo de conversión.
- `currency_from_uuid` - Moneda del UUID de referencia.
- `currency_to_uuid` - Moneda Para hacer referencia al UUID.
- `conversion_date`: UUID de referencia de la fecha de conversión.
#### Cuerpo de la Petición:

```json
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/common/conversion-rate?token=<token-generated-for-demo-api>&language=es&conversion_type_uuid=40767cd6-b6cf-4058-ae34-42ea1ea3ce71&currency_from_uuid=a567befe-fb40-11e8-a479-7a0060f0aa01&currency_to_uuid=a5671df0-fb40-11e8-a479-7a0060f0aa01'\
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
    
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


