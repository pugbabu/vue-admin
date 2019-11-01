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

## 2、目录结构
源代码位于src目录下，以下是src中的子目录说明：
*api
定义所有的接口地址

*assets
资源文件，包含css、images

*components
组件存放目录

*layout
本项目的布局结构，页面都在此结构中渲染

*mixins
混合文件存放目录，多个页面有相似的方法和变量，可提取mixin

*pages
页面存放地址，每个页面对应一个路由

*plugins
存放页面插件，包含ant-design-vue插件、vue-ls缓存插件

*proto
存放proto文件

*router
路由配置文件

*store
vuex状态管理配置文件

*utils
公用js文件

## 3、技术栈
1、vue + vue-router + axios
2、vuex状态管理
3、ant-design-vue组件快速开发
4、less语法
