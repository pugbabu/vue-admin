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


## 3、技术栈
1、vue + vue-router + axios
2、vuex状态管理
3、ant-design-vue组件快速开发
4、less语法
