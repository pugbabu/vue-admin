---
title: MSS后台管理系统
tag: MSS, 后台管理
---

## 1、使用说明

### 前端服务启动
```
// 进入根目录
cd ..

// 安装依赖
npm install

// 启动本地服务
npm run dev
```
> 模块安装

``` 
npm install
```

> 开发

``` 
npm run dev
```

> 打包

``` 
npm run build
```

> 测试

``` 
npm run test
```

> 格式化文件

``` 
npm run lint
```

> 自定义配置

See [Configuration Reference](https://cli.vuejs.org/config/).

## 2、项目结构
```txt
+-- dist/                                   ---打包之后的dist目录
+-- public/                                 ---静态目录,/xx 直接引用，不需要public
|   --- index.html                          ---首页入口html文件
|   --- favicon.ico                         ---网页图标
+-- src/
+   ---/api/                                ---接口请求文件，protobuf接口先在api/config配置
+   ---assets/                              --- 资源文件
+   ---/components/                         ---组件目录，/components/base用于放公用组件
+   ---/filters/                            ---过滤器
+   ---/layout/                             ---布局方案
+   ---/mixins/                             ---mixins
+   ---/pages/                              ---页面
+   ---/plugins/                            ---项目所用插件
+   ---/proto/                              ---防止proto文件，然后项目根目录执行npm run proto，生成proto.js
+   ---/router/                             ---路由文件
+   ---/store/                              ---vuex状态管理，按不同module引入
+   ---/utils/                              ---工具js
|   ---main.js                              ---项目入口js文件
|   ---App.vue                              ---页面总入口
--- babel.config.js                         ---babel配置文件，配置ant-design-vue按需引入
--- README.md                               ---Readme
--- package-lock.json                        ---依赖包
--- package.json                            ---依赖包
--- vue.config.js                           ---配置vue脚手架的文件，包含本地跨域、base url更改等
```

## 3、项目结构详细说明
* vue.config.js 如果需要配置api代理转发，可以在vue.config.js文件中增加配置，如

```
  devServer: {
    proxy: {
      '/ats': {
        target: 'http://192.168.156.46:9005', // 后端服务器
        changeOrigin: true,
        pathRewrite: {
          '^/ats': '/ats'
        }
      },
      '/zc': {
        target: 'http://192.168.156.46:9005', // 后端服务器
        changeOrigin: true,
        pathRewrite: {
          '^/zc': '/zc'
        }
      },
    }
  }
```
* .babel.config.js 该文件用于配置ES6语法转ES5，实现浏览器兼容ES6语法，同时配置了ant-degisn-vue的模块按需引入
* .eslintrc.js 该文件用于配置ESlint的规则
* public 项目的静态目录，防止了模板index.html和网站图标
* src/main.js 项目入口，需要全局挂载的文件可以在main.js中引入
* src/App.vue 项目根组件，在该组件中，引入了公共的样式
* src/api/config.js http协议请求proto数据接口需要在这个文件中做配置，配置如下：
```
/**
  * @description ats主机状态接口
  * @param {*} requestTmp 请求体名称 
  * @param {*} responseTmp 响应体名称 
  */
{
  hostStatus:{
    url: '/ats/hoststat',
    requestTmp: 'HostStatRequest',
    responseTmp: 'HostStatReply'
  }
}
```
* src/api/index.js 该文件是封装的http请求protobuf数据
* src/assets 资源文件，包含images styles svg目录
* src/components 放置组件，src/components/base目录可以放置复用组件，其他组件可以单独创建目录，创建时也可以根据模块来命名
* src/filters/index.js 全局过滤器文件，可在文件中增加不同的过滤器
* src/layout 页面布局文件，基本不用动
* src/mixins 混合js
* src/plugins 有插件需要引入时，可以放置在本目录中
* src/proto 放置proto文件，放入proto文件后，在项目根目录执行npm run proto
* src/router 路由配置目录，在routes.js中增加你的路由页面，写法可参考文件中其他路由
* src/store 状态管理器文件，全局的状态管理写在modules/app.js中，非全局的可以分模块，比如设备监控的模块，写在device-monitor.js中
* src/utils index.js是公用的js方法 socket.js是封装的全局websocket请求方法

## 4、技术栈
1、vue + vue-router + axios
2、vuex状态管理
3、ant-design-vue组件快速开发
4、less语法
