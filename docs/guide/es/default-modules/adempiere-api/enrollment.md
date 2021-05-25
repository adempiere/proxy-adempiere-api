## Módulo Inscripción

### POST /adempiere-api/enrollment/enroll
Inscribir un usuario

#### Paràmetros POST:

`user_name` - codigo del usuario.
`name` - nombre del usuario.
`email` - correo del usuario.
`client_version` - version de aplicaciòn del cliente.
`application_type` - tipo de aplicacion.
`password` - contraseña del usuario.

#### Cuerpo de la Peticiòn:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/enrollment/enroll' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"user_name": "Prueba1","name": "Prueba","email": "prueba@test.com"}'
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": {
        "user_name": "Prueba1",
        "name": "Prueba",
        "email": "prueba@test.com"
    }
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error
### POST /adempiere-api/enrollment/reset-password
Solicitar el restablecimiento de la contraseña

#### Paràmetros POST:

`user_name` - nombre de usuario del usuario.
`email` - correo del usuario.
`client_version` - version de aplicaciòn del cliente.

#### Cuerpo de la Peticiòn:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/enrollment/reset-password' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"user_name": "Prueba1","email": "prueba@test.com"}'
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error
### POST /adempiere-api/enrollment/change-password
Cambiar la contraseña del token

#### Paràmetros POST:

`user_name` - codigo del usuario.
`password` - contasea del usuario.
`token` - token del usuario.
`client_version` - version de aplicaciòn del cliente.

#### Cuerpo de la Peticiòn:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/enrollment/change-password' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"token":"akhjgdsfsdq476328463249234032anbfkd", "password":"TopSecretPassword"}'
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error

### POST /adempiere-api/enrollment/activate-user
Activar usuario

#### Paràmetros POST:

`token` - token del usuario.
`client_version` - version de aplicaciòn del cliente.

#### Cuerpo de la Peticiòn:

```
null
```

#### Ejemplo de Llamada:

```bash
curl 'https://api.erpya.com/api/adempiere/enrollment/activate-user' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"token":"akhjgdsfsdq476328463249234032anbfkd""}'
```
#### Cuerpo de Respuesta:

```json
{
    "code": 200,
    "result": "OK"
}
```
#### Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error