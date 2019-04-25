module.exports = {
  base: '/blog/',
  title: '九林个人博客',
  description: '技术分享 | 学习成长',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      { text: '关于', link: '/about' },
    ],

    sidebar: [
      // '/',
      {
        title: '环境部署',
        children: [
          '/sys/installnodejs',
          '/sys/installmongodb',
          '/sys/installredis',
          '/sys/installyapi',
          '/sys/pm2',
        ]
      },

      {
        title: '前端技术笔记',
        children: [
          '/fe/gis'
        ]
      },
    ]
  }
}
