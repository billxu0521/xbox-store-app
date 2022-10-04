const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === 'production'
  // ? ''
  // : '',
  devServer: {
    //open: "ture",
    // host: "0.0.0.0",
    // port: "80",
    //https: false,
    //hot: "only",
    // proxy: {
    //   '/api' : {
    //     target: "http://localhost:3031",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api' : ''
    //     }
    //   }
    // },
    allowedHosts: "all",
  }
})
