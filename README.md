Proxy ADempiere-API (A ADempiere Gateway using Rest API)
==============

<div align="center"><img src="https://camo.githubusercontent.com/911c5d54ded447403e56de3f96f332c06bceb8bd/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62312f4164656d70696572652d6c6f676f2e706e67" style="text-align:center;" width="400" /></div>

<p align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/node-v14.x-blue.svg" alt="Node">
  </a>
  <a href="https://hub.docker.com/r/solopcloud/adempiere-proxy">
    <img src="https://img.shields.io/docker/pulls/solopcloud/adempiere-proxy.svg" alt="Docker Pulls">
  </a>
  <a href="https://github.com/solop-develop/proxy-adempiere-api/actions/workflows/publish.yml">
    <img src="https://github.com/solop-develop/proxy-adempiere-api/actions/workflows/publish.yml/badge.svg" alt="Publish GH Action">
  </a>
  <a href="https://github.com/solop-develop/proxy-adempiere-api/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/solop-develop/proxy-adempiere-api" alt="License">
  </a>
  <a href="https://github.com/solop-develop/proxy-adempiere-api/releases/latest">
    <img src="https://img.shields.io/github/release/solop-develop/proxy-adempiere-api.svg" alt="GitHub release">
  </a>
  <a href="https://discord.gg/T6eH6A7PJZ">
    <img src="https://badgen.net/badge/discord/join%20chat" alt="Discord">
  </a>
</p>

### What is?
A simple proxy for synchronize ADempiere Backend based on [ADempiere-gRPC-Server](https://github.com/adempiere/adempiere-gRPC-Server) with any frontend using api REST ans GraphQL.

### Where is the documentation about it?
Just see it: https://adempiere.github.io/proxy-adempiere-api/

### Current status: Fisrt Release to be defined

This project is the first ADempiere proxy integration based on stronger StoreFront-API and use as backend gRPC server [ADempiere-gRPC-Server](https://github.com/adempiere/adempiere-gRPC-Server) for connect to ADempiere.

This project allows connect gRPC backend of ADempiere for Standard functionality with API RESTfull and ADempiere UI based on Vue [ADempiere Vue](https://github.com/adempiere/adempiere-vue)

Note that this project use default template of StoreFront API and have all instruction from [Easy to integrate with custom backends](https://docs.storefrontapi.com/guide/integration/integration.html#two-steps-for-the-integration)

For Web Store allows integrate VueStoreFront with ADempiere using adempiere-store service and server model using ElasticSearch.

You can use the **Storefront GraphQL API** to integrate **all your backend systems** with your eCommerce frontend under a single GraphQL/REST API.
By default, all catalog information is stored in ElasticSearch, and all the write operations are forwarded to the **platform driver** (Magento1, Magento2, Spree, and others available).

### How to get started? ¡¡Only for ADempiere Web Store integration!!

Storefront API comes with a default product schema - compatible with the [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) project - and can be a drop-in replacement for `vue-storefront-api`. You can  start a dev instance, including a demo data set integrated with a [Magento 2.3 demo instance](http://demo-magento2.vuestorefront.io).

To run `proxy-api` in `development` mode, please run:

`docker-compose up`
Or
`docker-compose -f docker-compose.yml up`

Bu default are running the follows modules:
- adempiere-api
- adempiere-store

Restore the demo data set:
`docker exec -it sfa_app_1 yarn restore7`

After successful installation, you can start playing with GraphQL queries using your local GraphQL Playground, which is exposed under: [http://localhost:8080/graphql](http://localhost:8080/graphql)

Details:
- [Installation tutorial](https://docs.storefrontapi.com/guide/general/installation.html)
- [How to create a first module - tutorial](https://docs.storefrontapi.com/guide/modules/tutorial.html)
- [GraphQL schema](https://docs.storefrontapi.com/guide/default-modules/graphql.html)
- [REST API](https://docs.storefrontapi.com/guide/default-modules/api.html)
- [Configuration file explained](https://docs.storefrontapi.com/guide/general/config.html)

### Using Locally

#### Linux (Debian Based)

```shell
apt install -y \
  curl \
  git \
  make \
  g++ \
  musl \
  ca-certificates \
  wget
```

its is working with `python2`

```shell
apt install -y python2
```

### Using Docker hub images
#### You can use images from Docker hub:
- ADempiere Base Zk: https://hub.docker.com/r/solopcloud/adempiere-base
- Backend gRPC Server: https://hub.docker.com/r/solopcloud/adempiere-backend
- ADempiere-Vue: https://hub.docker.com/r/solopcloud/adempiere-vue
- Proxy ADempiere API: https://hub.docker.com/r/solopcloud/adempiere-proxy

```shell
docker pull solopcloud/adempiere-proxy:alpine
```

#### Run with default connection
For generate your server you should generate a ADempiere Third Party Access token, see the follow image for generate it from ADempiere installed service
![Generate Token for ADempiere Access](https://user-images.githubusercontent.com/2333092/99605765-bd47a600-29de-11eb-9987-3a7a23f356e3.gif)

Run Docker Image
```shell
docker run -it -d \
	--name proxy-adempiere-api \
	-p 8085:8085 \
	-e SERVER_PORT="8085" \
	-e AD_DEFAULT_HOST="Your_gRPC_Server_IP" \
	-e AD_DEFAULT_PORT="50059" \
	docker pull solopcloud/adempiere-proxy:alpine
```
#### Environment variables for the configuration

* **`SERVER_PORT`**: Indicates the port on which the RESTful proxy service will start, by default its value is `8085`.

Location Settings:
* **`LANGUAGE`**: Indicate the language, by default its value is `en_US`
* **`TZ`**: (Time Zone) Indicates the time zone to set in the nginx-based container, the default value is `America/Caracas` (UTC -4:00).

Backend setting:
* **`AD_DEFAULT_HOST`**: Specifies the host to point to the gRPC service, by default its value is `localhost`. All hosts pointing to gRPC services will take the value you set for this environment variable unless you set a value to overwrite the specific service.
* **`AD_DEFAULT_PORT`**: Specifies the listening port to point to the gRPC service, by default its value is `50059`. All ports to be pointed to from gRPC services will take the value you set for this environment variable unless you set a value to overwrite the specific service.
* **`AD_ACCESS_HOST`**: If not set it takes the value of `AD_DEFAULT_HOST`, it is used to indicate the host for the adempiere access grpc service.
* **`AD_ACCESS_PORT`**: If not set it takes the value of `AD_DEFAULT_PORT`, it is used to indicate the port for the adempiere access grpc service.
* **`AD_BUSINESS_HOST`**: If not set it takes the value of `AD_DEFAULT_HOST`, it is used to indicate the host for the adempiere business data grpc service.
* **`AD_BUSINESS_PORT`**: If not set it takes the value of `AD_DEFAULT_PORT`, it is used to indicate the port for the adempiere business data grpc service.
* **`AD_DICTIONARY_HOST`**: If not set it takes the value of `AD_DEFAULT_HOST`, it is used to indicate the host for the adempiere dictionary grpc service.
* **`AD_DICTIONARY_PORT`**: If not set it takes the value of `AD_DEFAULT_PORT`, it is used to indicate the port for the adempiere dictionary grpc service.
* **`API_URL_IMAGES`**: By default its value is `localhost`.
* **`API_HTTP_BASED`**: By default its value is `false`.
* **`AD_TOKEN`**: ADempiere access token.

Backend e-Commerce Setting:
* **`AD_STORE_HOST`**: If not set it takes the value of `AD_DEFAULT_HOST`, it is used to indicate the host for the adempiere store data grpc service.
* **`AD_STORE_PORT`**: If not set it takes the value of `AD_DEFAULT_PORT`, it is used to indicate the port for the adempiere store data grpc service.
* **`AD_STORE_ACCESS_HOST`**: It is used to indicate the host for the adempiere access store grpc service. If not set it takes the value of `AD_STORE_HOST` (and if that is not defined then it takes the value of `AD_DEFAULT_HOST`).
* **`AD_STORE_ACCESS_PORT`**: It is used to indicate the port for the adempiere access store grpc service. If not set it takes the value of `AD_STORE_PORT` (and if that is not defined then it takes the value of `AD_DEFAULT_PORT`).
* **`STORE_URL_IMAGES`**: By default its value is `localhost`.
* **`STORE_HTTP_BASED`**: By default its value is `false`.
* **`AD_STORE_TOKEN`**: Store access token.

Elasticsearch Connection:
* **`ES_HOST`**: Indicates the host to point to where the elasticsearch service is, by default its value is `localhost`.
* **`ES_PORT`**: Indicates the listening port of the elasticsearch service to be pointed to, by default its value is `9200`.
* **`INDEX`**: Elasticsearch index (is like a ‘database’ in a relational database).
* **`RESTORE_DB`**: If you restore the database and product catalog, the only value that activates it is `Y`.

Redis Connection:
* **`REDIS_HOST`**: Indicates the host to point to where the redis service is, by default its value is `localhost`.
* **`REDIS_PORT`**: Indicates the listening port of the redis service to be pointed to, by default its value is `6379`.
* **`REDIS_DB`**: Indicates the data base to be pointed to, by default its value is `0`.


## Core Team

In case of any questions please contact our core team [![we are on Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/adempiere/adempiere-vue?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

- [@YamelSenih](https://github.com/YamelSenih)

## Demo

You can play with the Rest API endpoint over [Demo](https://api.erpya.com)

Example query you can enter:

```bash
curl 'https://api.erpya.com/api/adempiere/user/login' \
    -X POST \
    -H 'content-type: application/json' \
    -H 'accept: */*;charset=UTF-8' \
    --data-binary '{"username":"demo","password":"demo"}'
```

```bash
{
  "code":200,
  "result":"dc31ea82-0497-40ac-b1fe-5945c6bed860"
}
```

## Key features

 - Fully functional and extendable eCommerce and ADempiere API Gateway,
 - Modular architecture with easy customizable default e-Commerce+ ADempiere vue based module,
 - Read/Write integrations (Only e-Commerce) with [Magento1](https://github.com/DivanteLtd/magento1-vsbridge-indexer), [EpiServer](https://github.com/makingwaves/epi-commerce-to-vue-storefront), [Magento2](https://github.com/DivanteLtd/magento2-vsbridge-indexer), [OpenCart](https://github.com/butopea/vue-storefront-opencart-vsbridge), [SpreeCommerce](https://github.com/spark-solutions/spree2vuestorefront),
 - Additional integrations including [Prismic](https://forum.vuestorefront.io/t/prismic-connector/160) with GraphQL support,
 - [Vue Storefront](https://vuestorefront.io) PWA frontend support,
 - Blazingly fast - based on ElasticSearch with avg. response times < 100ms,
 - GraphQL API with 100% customizable [GraphQL schema](https://divanteltd.github.io/storefront-graphql-api-schema/),
 - REST API with [ElasticSearch DSL support](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html),
 - Catalog, Cart, User, Stock, Review, Order, and Image resizer modules available through the REST API,
 - Multistore support based on a store-views (aka. sales channels) concept,
 - Dynamic tax calculation engine,
 - Extendable via custom extensions (including GraphQL schema and resolver extensions),
 - ElasticSearch maintenance tools - dump/restore/schema maintenance/migrations,
 - Custom eCommerce Backend integrations via [an integration SDK](ocs.storefrontapi.com/guide/integration/integration.html#two-steps-for-the-integration).

## Modules

Storefront API does provide all the features, GraphQL schemas, ElasticSearch resolvers and API handlers via [Modules](https://docs.storefrontapi.com/guide/modules/introduction.html). That's it. The default schema and the features described in the further parts of the documentation have been implemented by the `default-catalog`, `default-img` and `default-vsf` modules. You can customize them, clone or disable.

Each module provides it's own:
- GraphQL schema and resolvers,
- ElasticSearch mappings,
- API methods - via express.js handlers and middlewares.

[Read more on Storefront API modules](https://docs.storefrontapi.com/guide/modules/introduction.html)
[Read more on The Default modules](https://docs.storefrontapi.com/guide/modules/default-modules/introduction.html)

<img src="https://divante.com//github/storefront-api/storefront-api-architecture.png" alt="Storefront API architecture" />

## Production-ready

Storefront API originated from the [`vue-storefront-api`](https://github.com/DivanteLtd/vue-storefront-api) project and is currently [backing 30+ production sites](https://www.vuestorefront.io/live-projects/), including: [Zadig&Voltaire](https://zadig-et-voltaire.com/pt/en/), [Klebefieber](https://www.klebefieber.de/), [Wonect](https://wonect.com/sg/) and others.

## Documentation

- Vue Storefront API: Please check our [**Official documentation for Vue Storefront**](https://docs.storefrontapi.com/). You will find there some integration and customization tutorials, and the API specification.
- ADempiere Proxy API: [**Initial Documentation for Proxy**](https://docs.erpya.com/)

## Example use cases

 - **Headless eCommerce data source** for any React/Vue/Angular frontend connected to Magento or any other supported eCommerce platform,
 - **GraphQL Gateway** which takes data from **an existing REST API and mixes it** with ElasticSearch or Database data,
 - **Custom GraphQL schema** - optimized for your backend platform,
 - **Custom eCommerce Backend** - by implementing custom Cart, User, Stock modules and re-using the Catalog service.

## Requirements

- Docker and Docker Compose

The following are already included in the `proxy-adempiere-api` Docker image, but required if you do not use containerization:
- Node.js 10.x or higher
- Yarn

## REST Access
Catalog API calls are compliant with ElasticSearch (they work like a filtering proxy to ES). More on ES query here: [ElasticSearch queries tutorial](http://okfnlabs.org/blog/2013/07/01/elasticsearch-query-tutorial.html)

The Elastic search endpoint is: `http://localhost:8080/api/catalog/search/<INDEX_NAME>/`. You can run the following command to check if everything is up and runing (it assumes `vue_storefront_catalog` as the default index name):

`curl -i http://elastic:changeme@localhost:8080/api/catalog/vue_storefront_catalog/_search`

## Data formats

The data formats can be easily modified to suit your needs by modifying the `src/graphql/elasticsearch/**` schemas and resolvers.
Check our [GraphQL Schema documentation](https://divanteltd.github.io/storefront-graphql-api-schema/) for the details regarding data formats.

## Adding custom modules with their dependencies (Yarn only)
When adding custom modules(https://docs.storefrontapi.com/guide/modules/introduction.html), you might want to define some dependencies inside them. Thanks to [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), dependencies defined inside your custom module will be installed when you execute `yarn` at the project root level, so it's way easier and faster than installing all modules dependencies separately.

To do this, define the `package.json` with your dependencies in your custom module:
- `src/modules/{your-custom-extension}/package.json`
- `src/platforms/{your-custom-platform}/package.json`

NOTE: `npm` users will still have to install the dependencies individually in their modules.

## Self-signed certificates

In non-production environments, other services often use self-signed certificates for secure connections.
You can easily set up the application to trust them by putting them in the config/certs directory.

## Contributing

If you like the idea behind ADempiere Proxy API and want to become a contributor, do not hesitate and check our [list of the issues](https://github.com/adempiere/proxy-adempiere-api/issues) or contact us directly via into@erpya.com.

If you have discovered a bug, or have a feature suggestion, feel free to create an issue on Github.

## The Story

Storefront API is brought to you by the [**Vue Storefront Team**](https://www.vuestorefront.io/) and is based on [Vue Storefront API](https://github.com/DivanteLtd/vue-storefront-api). The intention is to replace vue-storefront-api with a more general-purpose API Gateway which you may use with any web or mobile frontend, including Vue, React, Angular and native apps. Its a drop-in replacement for `vue-storefront-api` if you happened to use it before. It works great with [Vue Storefront](https://github.com/DivanteLtd/vue-storefront).

The parent project was forked by [Yamel Senih](https://github.com/YamelSenih) and now is used as proxy of ADempiere backend for new interface [ADempiere Proxy API](https://github.com/adempiere/proxy-adempiere-api)

## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/"><img width="250px" src="https://erpya.com/wp-content/uploads/2017/11/ERP-logotipo-H-color.png" /></a>

Partners are encouraged to support the project in various ways - mostly by contributing to the source code, performing marketing activities, evangelizing and, of course, implementing production projects. We support our partners via dedicated contact channels, workshops, and by sharing leads from merchants interested in implementations.

If you would like to become our Partner, just let us know via [info@erpya.com](info@erpya.com).

## License

[MIT](./LICENSE)
