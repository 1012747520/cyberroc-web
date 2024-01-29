const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    allowedHosts:'all',
    port: 3000,
    proxy: {
      '/api':{
        target: 'http://192.168.70.25:7879',
        changeOrigin: true,
        pathRewrite: {
          '/api': ""
        }
      }
    }
  },
}