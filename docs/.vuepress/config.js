module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Pepper ui',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh-CN/': {
      lang: '简体中文',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
}
