const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default;

let routes = [
  '/', '/gamelist','/gamepass'
]

module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === 'production'
  // ? ''
  // : '',
  chainWebpack: config => {
    config.plugin("sitemap").use(SitemapPlugin, [
      {
        base: 'https://xboxstore.gameqb.net/',
        //base: 'localhost',
        paths: routes,
        options: {
          //生成的站点地图文件名
          filename: 'sitemap.xml',
          //lastMod属性是否开启
          lastMod: true,
          //更新频率
          changefreq: 'monthly'
        },
      }
    ])

  },
  pwa:{
    "name": "xbox-store-遊戲資訊網",
    "short_name": "xbox-store",
    "theme_color": "#019858",
    "lang": "zh-Hant-TW",
    "description": "歡迎使用XBOX Game Pass 遊戲資訊網，XBOX Game Pass 遊戲資訊網可以快速查詢XBOX遊戲、XBOX Game Pass資訊：即將加入、遊戲總覽、即將離開，以及快速遊覽特價遊戲，讓你能透過簡單快速的介面探索所有XBOX主機的樂趣。",
    "icons": [
      {
        "src": "./img/icons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "background_color": "#000000"
  }
  // devServer: {
    //open: "ture",
    // host: "0.0.0.0",
    // port: "80",
    //https: false,
    //hot: "only",
    // proxy: {
    //   '/api' : {
    //     target: "https://xboxstoreapi.gameqb.net/",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api' : ''
    //     }
    //   }
    // },
    //allowedHosts: "all",
  //}
})


