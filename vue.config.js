const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      '6da521b5.r1.vip.cpolar.cn', // 允许访问的域名地址，k
      'www.cyberroc.work',
      'http://120.79.254.225/' ,
      '192.168.125.95:8080'
      
    ],
  },
})