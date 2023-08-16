const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      '29270cf4.r8.vip.cpolar.cn', // 允许访问的域名地址，k
    ],
  },
})
