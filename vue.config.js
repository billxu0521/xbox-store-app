module.exports = {
    filenameHashing: false,
    publicPath: process.env.NODE_ENV === 'development'
    ? ''
    : 'xbox-store-app/dist',
    pluginOptions: {
      cordovaPath: 'src-cordova'
    },
    //indexPath: "../dist/index.html",
}
