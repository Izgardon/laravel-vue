const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{
    proxy:{
      '^/api':{
        target:'http://127.0.0.1:8000/api',
        changeOrigin: true,
        logLevel:'debug',
        pathRewrite:{'^/api':'/'}
      }
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
}
