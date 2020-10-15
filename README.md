proxy-adempiere-apiproxy-adempiere-apiStorefront API
==============

<div align="center"><img src="https://divante.com/github/storefront-api/sfa-logo.png" style="text-align:center;" width="400" /></div>

![version](https://img.shields.io/badge/node-v10.x-blue.svg)
![Branch Develop](https://img.shields.io/badge/dev%20branch-develop-blue.svg)
<a href="http://slack.vuestorefront.io">![Join Slack](https://img.shields.io/badge/community%20chat-slack-FF1493.svg)</a>

### 🔨 Current status: Release Candidate 2 (rc2)

Most of the work has been done already. However, we are still developing and enhancing it. Storefront API 1.0rc2 is compatible with Vue Storefront 1.11+. The stable release (1.0) is planned for **2020Q4**. Only then, it will replace the `vue-storefront-api` middleware for Vue Storefront (release 1.13). Till then it's not recommended for production applications.

Storefront GraphQL API. Easy to use. Extendable. Blazingly fast. ElasticSearch included. [BFF (Backend for frontend)](https://samnewman.io/patterns/architectural/bff/) driven.
Works great with: Magento1, Magento2, Spree, OpenCart, and Pimcore - out of the box. [Easy to integrate with custom backends](https://docs.storefrontapi.com/guide/integration/integration.html#two-steps-for-the-integration).

You can use the **Storefront GraphQL API** to integrate **all your backend systems** with your eCommerce frontend under a single GraphQL/REST API.
By default, all catalog information is stored in ElasticSearch, and all the write operations are forwarded to the **platform driver** (Magento1, Magento2, Spree, and others available).

## How to get started?

Storefront API comes with a default product schema - compatible with the [Vue Storefront](https://github.com/DivanteLtd/vue-storefront) project - and can be a drop-in replacement for `vue-storefront-api`. You can  start a dev instance, including a demo data set integrated with a [Magento 2.3 demo instance](http://demo-magento2.vuestorefront.io).

To run `storefront-api` in `development` mode, please run:

`docker-compose up`

Restore the demo data set:
`docker exec -it sfa_app_1 yarn restore7`

After successful installation, you can start playing with GraphQL queries using your local GraphQL Playground, which is exposed under: [http://localhost:8080/graphql](http://localhost:8080/graphql)

Details:
- [Installation tutorial](https://docs.storefrontapi.com/guide/general/installation.html)
- [How to create a first module - tutorial](https://docs.storefrontapi.com/guide/modules/tutorial.html)
- [GraphQL schema](https://docs.storefrontapi.com/guide/default-modules/graphql.html)
- [REST API](https://docs.storefrontapi.com/guide/default-modules/api.html)
- [Configuration file explained](https://docs.storefrontapi.com/guide/general/config.html)

## Core Team

In case of any questions please contact our core team ([we are on Slack](https://slack.vuestorefront.io))

- `@resubaka` - Jens Sadowski
- `@pkarw` - Piotr Karwatka
- `@pandrzejewsky` - Patryk Andrzejewski


## Demo

You can play with the GraphQL endpoint over https://demo.storefrontapi.com/graphql/

Example query you can enter:

```graphql
{
  products (filter:{
      type_id:{eq:"configurable"}
  }) {
    items {
      name
      price
      description
      configurable_children { name, price }
    }
  }
}
```

## Key features

 - Fully functional and extendable eCommerce API Gateway,
 - Modular architecture with easy customizable default e-Commerce module,
 - Read/Write integrations with [Magento1](https://github.com/DivanteLtd/magento1-vsbridge-indexer), [EpiServer](https://github.com/makingwaves/epi-commerce-to-vue-storefront), [Magento2](https://github.com/DivanteLtd/magento2-vsbridge-indexer), [OpenCart](https://github.com/butopea/vue-storefront-opencart-vsbridge), [SpreeCommerce](https://github.com/spark-solutions/spree2vuestorefront),
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

Please check our [**Official documentation**](https://docs.storefrontapi.com/). You will find there some integration and customization tutorials, and the API specification.

## Example use cases

 - **Headless eCommerce data source** for any React/Vue/Angular frontend connected to Magento or any other supported eCommerce platform,
 - **GraphQL Gateway** which takes data from **an existing REST API and mixes it** with ElasticSearch or Database data,
 - **Custom GraphQL schema** - optimized for your backend platform,
 - **Custom eCommerce Backend** - by implementing custom Cart, User, Stock modules and re-using the Catalog service.

## Requirements

- Docker and Docker Compose

The following are already included in the `storefront-api` Docker image, but required if you do not use containerization:
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

If you like the idea behind Vue Storefront and want to become a contributor, do not hesitate and check our [list of the issues](https://github.com/DivanteLtd/proxy-adempiere-api/issues) or contact us directly via contributors@vuestorefront.io.

If you have discovered a bug, or have a feature suggestion, feel free to create an issue on Github.

## The Story

Storefront API is brought to you by the [**Vue Storefront Team**](https://www.vuestorefront.io/) and is based on [Vue Storefront API](https://github.com/adempiere/vue-storefront-api). The intention is to replace vue-storefront-api with a more general-purpose API Gateway which you may use with any web or mobile frontend, including Vue, React, Angular and native apps. Its a drop-in replacement for `vue-storefront-api` if you happened to use it before. It works great with [Vue Storefront](https://github.com/DivanteLtd/vue-storefront).

<img src="https://divante.com/github/proxy-adempiere-api/graphql-playground.png" alt="GraphQL Playground is included"/>
<em style="text-align:center;">This is a screenshot showing the GraphQL Playground on the proxy-adempiere-api schema. <a href="https://divanteltd.github.io/storefront-graphql-api-schema/">Check the schema docs</a>. It can be 100% customized.</em>


## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/"><img width="250px" src="https://i0.wp.com/spin-suite.com/erpya/wp-content/uploads/sites/28/2017/11/ERP-logotipo-H-color.png" /></a>

Partners are encouraged to support the project in various ways - mostly by contributing to the source code, performing marketing activities, evangelizing and, of course, implementing production projects. We support our partners via dedicated contact channels, workshops, and by sharing leads from merchants interested in implementations.

If you would like to become our Partner, just let us know via info@erpya.com.

## License

[MIT](./LICENSE)
