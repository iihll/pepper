const navConfigFile = require('../../config/nav.config.json')

module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Pepper ui',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Pepper ui',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        sidebar: {
          '/guide/': navConfigFile['en-US'].guide
        }
      },
      '/zh-CN/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: {
          '/zh-CN/guide/': navConfigFile['zh-CN'].guide
        }
      }
    }
  }
}
