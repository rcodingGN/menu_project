module.exports = {
  transpileDependencies: ['@dcloudio/uni-ui'],
  productionSourceMap: false,
  devServe: {
    port: 8080, // 端口号
    open: true, // 项目启动后自动打开浏览器
    host: 'localhost', // 本地域名
    https: false,
    hotOnly: true, // 热更新
    overlay: { // 让浏览器同时显示警告和错误
      warnings: true,
      errors: true
    },
    proxy: { // 配置代理
    }

  }
}
