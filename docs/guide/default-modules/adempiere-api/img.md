## Image Service

### GET /adempiere-api/img

Obtiene los datos del país.

#### Parameters:

- `token` - user token getted from `POST /adempiere-api/user/login` (Mandatory).
- `language` - language from client.
- `action` - una de las operaciones soportadas por [Imageable](https://github.com/sdepold/node-imageable): recortar, ajustar, redimensionar, identificar (para obtener los datos EXIF de la imagen).
- `width`  - a numeric value of the picure width - to be "resized", "cropped" ... regarding the operation parameter.
`height` - a numeric value of the picure height - to be "resized", "cropped" ... regarding the operation parameter. regarding the `operation` parameter.
- `operation` - one of the operations supported by Imageable: `crop`, `fit`, `resize`, identify (to get the picture EXIF data).

#### Request Body:

```
null
```

#### Call example:

```bash
curl 'https://api.erpya.com/adempiere-api/img?action=fit&width=100&height=100&url=4c374d54-0e21-4a2f-9e18-9b03b22b5d6c-chavo_crop1595979643620.jpg_1902800913.jpg' \
    -X GET \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' 
```

#### Response Body:

```json

```
