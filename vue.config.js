const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    /* 项目启动时默认的 ip和 port */
    host: 'localhost',
    port: 8080,
    /* 自动打开浏览器 */
    open: false,
    /* 使用代理: 配置之后前端所有以/api开头的请求都会经过这个proxy代理 ，将本地的请求地址转化为target中配置的地址 */
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
})
