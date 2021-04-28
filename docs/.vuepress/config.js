var nav = require('./nav.js')
var { EcosystemNav, ComponentNav, BackendNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  base: '/',
  markdown: {
    toc: {
      includeLevel: [2]
    }
  },
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    repo: 'adempiere/proxy-adempiere-api',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        lang: 'en-US',
        description: 'A documentation for Proxy of ADempiere Frontend',
        nav: [
          {
            text: 'ADempiere API',
            link: '/guide/'
          },
        ],
        sidebar: {
          '/guide/': [
             {
              title : 'General Information',
              collapsable: false,
              children: [
                'general/installation',
                'general/config',
                'general/extensions'
              ]
            },
            {
              title: 'ADempiere',
              collapsable: false,
              children: [
                'default-modules/adempiere-api/api',
                'default-modules/adempiere-api/core',
                'default-modules/adempiere-api/img',
                'default-modules/adempiere-api/user',
                'default-modules/adempiere-api/enrollment',
                'default-modules/adempiere-api/data',
                'default-modules/adempiere-api/dictionary',
                'default-modules/adempiere-api/resource',
                'default-modules/adempiere-api/user-log',
                'default-modules/adempiere-api/dashboard',
                'default-modules/adempiere-api/workflow',
                'default-modules/adempiere-api/pos'
              ]
            },
            {
              title: 'Default gateway',
              collapsable: true,
              children: [
                'default-modules/introduction',
                'default-modules/api',
                'default-modules/graphql',
                'default-modules/platforms',
                'default-modules/extensions'
              ],
            },
            {
              title: 'Modules',
              collapsable: true,
              children: [
                'modules/introduction',
                'modules/tutorial'
              ],
            },
            {
              title: 'Integrations',
              collapsable: true,
              children: [
                'integration/integration',
                'integration/prices-how-to',
                'integration/format-product',
                'integration/format-category',
                'integration/format-attribute',
                'integration/database-tools'
              ],
            }
          ],
        },
      },
      '/guide/es/': {
        lang: 'es-ES',
        description: 'Una documentación para el proxy de ADempiere',
        sidebar: {
          '/guide/es/': [
             {
              title : 'General Information',
              collapsable: false,
              children: [
                'general/installation',
                'general/config',
                'general/extensions'
              ]
            },
            {
              title: 'ADempiere',
              collapsable: true,
              children: [
                'default-modules/adempiere-api/api',
                'default-modules/adempiere-api/core',
                'default-modules/adempiere-api/img',
                'default-modules/adempiere-api/user',
                'default-modules/adempiere-api/enrollment',
                'default-modules/adempiere-api/data',
                'default-modules/adempiere-api/dictionary',
                'default-modules/adempiere-api/resource',
                'default-modules/adempiere-api/user-log',
                'default-modules/adempiere-api/dashboard',
                'default-modules/adempiere-api/workflow',
                'default-modules/adempiere-api/pos'
              ]
            },
            {
              title: 'Default gateway',
              collapsable: true,
              children: [
                'default-modules/introduction',
                'default-modules/api',
                'default-modules/graphql',
                'default-modules/platforms',
                'default-modules/extensions'
              ],
            },
            {
              title: 'Modules',
              collapsable: true,
              children: [
                'modules/introduction',
                'modules/tutorial'
              ],
            },
            {
              title: 'Integrations',
              collapsable: true,
              children: [
                'integration/integration',
                'integration/prices-how-to',
                'integration/format-product',
                'integration/format-category',
                'integration/format-attribute',
                'integration/database-tools'
              ],
            }
          ],
        },
      }
    }
  },
  title: 'ADempiere Proxy API',
  description: 'a proxy for ADempiere forntend',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A documentation for Proxy of ADempiere Frontend'
    },
    '/guide/es/': {
      lang: 'es-ES',
      description: 'Una documentación para el proxy de ADempiere'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
};
