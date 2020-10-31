## Módulo Imagen

### GET /adempiere-api/img

Obtiene los datos del país.

#### PARÁMENTROS GET:

`token` - token de usuario devuelto de `POST /adempiere-api/user/login`.
`language` - idioma para las traducciones de la respuesta.
`action` - una de las operaciones soportadas por [Imageable](https://github.com/sdepold/node-imageable): recortar, ajustar, redimensionar, identificar (para obtener los datos EXIF de la imagen).
`width` - un valor numérico del ancho de la imagen - para ser "redimensionado", "recortado" ... en relación con el parámetro `action`.
`height` - un valor numérico de la altura de la imagen - para ser "redimensionado", "recortado" ... en relación con el parámetro `action`.

#### CUERPO DE LA PETICIÓN:

```
null
```

#### EJEMPLO DE LLAMADA:

```bash
curl 'https://your-domain.example.com/adempiere-api/img?action=fit&width=100&height=100&url=4c374d54-0e21-4a2f-9e18-9b03b22b5d6c-chavo_crop1595979643620.jpg_1902800913.jpg' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8'
```

#### CUERPO DE RESPUESTA:

```json

```
