## Interfaces REST de ADempiere

Este producto logra ser independiente de la plataforma gracias a los conectores API dedicados para plataformas de backend de comercio electrónico. El formato de datos en los módulos `default-catalog` y` default-vsf` es siempre el mismo para cualquier plataforma, lo que significa que no importa qué backend de comercio electrónico utilice, su frontend permanece igual sin ningún cambio.

El catálogo predeterminado de la API de Storefront ofrece dos formas básicas de consultar los datos:
- GraphQL para acceso de lectura
- REST para acceso de lectura y escritura


** Nota: ** Esta especificación de API está relacionada con el módulo `packages / default-vsf`. ¡Puede crear su propio módulo personalizado con API totalmente diferentes! Leer más sobre [módulos] (../ modules / introduction.md)

## Especificación de la API REST

Todos los métodos aceptan y responden con el tipo de contenido `application / json`.


## Código de Respuesta:

- `200` cuando es exitoso
- `500` en caso de error
