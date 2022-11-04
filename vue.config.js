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


