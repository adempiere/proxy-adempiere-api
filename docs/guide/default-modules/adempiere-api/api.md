# REST Interface from ADempiere

This product manages to be platform-agnostic thanks to dedicated API connectors for [gRPC ADempiere Server](https://github.com/adempiere/adempiere-gRPC-Server) backend platform.

The Proxy ADempiere API offers two basic ways of querying the data:
- GraphQL for read access
- REST for read and write access: Supported by default


**Note:** This API specification is related to the `packages/default-vsf` module. You can create your own custom module with totally different APIs! Read more on [modules](../modules/introduction.md)

## REST API specification

All methods accept and respond with the `application/json` content type.


## Default Response codes:

- `200` Response is Ok
- `500` A error is throw

A complete list can be readed here: [HTTP Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
