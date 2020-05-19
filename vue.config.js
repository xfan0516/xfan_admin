module.exports = {
  // 选项...
  publicPath: './',
  assetsDir: 'static',
  devServer: {
    host: '0.0.0.0',
    port: 8088,
    proxy: 'http://localhost:8088'
  },
  // 配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/mixin.scss";`
      }
    },
    sourceMap: true,
  },
}