# REST Interfaces from ADempiere

This product manages to be platform-agnostic thanks to dedicated API connectors for eCommerce backend platforms. The data format in the `default-catalog` and `default-vsf` modules is always the same for any platform, which means no matter what eCommerce backend you use, your frontend remains the same without any change.

The Storefront API Default catalog offers two basic ways of querying the data:
- GraphQL for read access
- REST for read and write access


**Note:** This API specification is related to the `packages/default-vsf` module. You can create your own custom module with totally different APIs! Read more on [modules](../modules/introduction.md)

## REST API specification

All methods accept and respond with the `application/json` content type.


## CÓDIGOS DE RESPUESTA:

- `200` cuando es exitoso
- `500` en caso de error
