const path = require('path');
// const webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  publicPath: '/',
  transpileDependencies: ['resize-detector', 'ant-design-vue'],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('public', resolve('public'))
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'));
  },

  devServer: {
    proxy: {
      '/ats': {
        target: 'http://192.168.156.46:9005', // 后端服务器
        changeOrigin: true,
        pathRewrite: {
          '^/ats': '/ats'
        }
      }
    }
  }
};
