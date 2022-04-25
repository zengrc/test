const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (c) => {
    c.plugin('html')
      .tap(args => {
        args[0].inject = 'body'
        // args[0].scriptLoading = 'blocking'
        return args;
      });
  }
})
