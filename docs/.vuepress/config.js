const navConfigFile = require('../../config/nav.config.json')

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Pepper',
      description: 'A Desktop UI Library'
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Pepper',
      description: '网站快速成型工具'
    }
  },
  themeConfig: {
    locales: {
      '/zh-CN/': {
        nav: navConfigFile['zh-CN'].nav,
        sidebar: {
          '/zh-CN/component/': navConfigFile['zh-CN'].component
        }
      },
      '/': {
        nav: navConfigFile['en-US'].nav,
        sidebar: {
          '/component/': navConfigFile['en-US'].component
        }
      }
    }
  }
}
