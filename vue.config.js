const { defineConfig } = require('@vue/cli-service')
// const { data } = require('autoprefixer')
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //       .tap(options => {
  //         // 确保使用Vue 3
  //         options.compiler = '@vue/compiler-sfc'
  //         return options
  //       })
  // },
  css:{
    loaderOptions:{
      sass:{
        additionalData:`@import '@/public/scss/global.scss';`
      }
    }
  },
  define:{
    'process.env.BASE_URL':JSON.stringify('http://localhost:5000')
}
})
