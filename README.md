# arine

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader)
# 骨架搭建
* 初始化一个项目 node init webpack arine, npm install, npm run dev 跑起来
* 连接到git git init, 在github上new一个项目, 把本地项目添加上去 git remote add origin https://XXXXXXXXXXX.org
* 安装各个工具包: element: vue add element, normalize.css, NProgress, moment.js, core-js
* 新建几个文件夹filters, utils, layout, services, policies, views, router分别用来存放过滤器相关文件, 功能文件, 页面整体布局, api接口文件, 安全策略相关文件, 视图文件, 路由文件

# tips 
* git push -u origin master 时报出错误: fatal: Authentication failed for 'https://github.com/XXXXXXXXXXXXX.git'
  解决方法:
    1. 控制面板 -> 用户账户 -> 管理windows凭剧 -> 添加普通凭据 -> 添加IP地址+user+password(IP地址可以通过ping www.github.com,就能看到IP地址了)
    2. 再次尝试push代码,就能提交上去了.
* 