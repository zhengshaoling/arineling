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

# 骨架搭建
  * 初始化一个项目 node init webpack arine, npm install, npm run dev 跑起来
  * 设置npm淘宝镜像:npm config set registry https://registry.npm.taobao.org
  * 连接到git git init, 在github上new一个项目, 把本地项目添加上去 git remote add origin https://XXXXXXXXXXX.org
  * 安装各个工具包.依赖: element-ui (vue add element), normalize.css, NProgress, moment.js, core-js, underscore, vuex, axios, vue-editor-wrap, vue-loader等,并在相关文件引用. 
    1. element: vue add element,生成一个plugins文件夹,再main.js中引入该文件夹中的文件
    2. normalize: 初始化基础样式 npm i normalize -S,在main.js中引用:import normalize.css/normalize.css
    3. NProgress: 用于页面跳转的交互效果, npm i nprogress -S
      * 在路由中引用,该项目中另建了个permission.js文件用于控制路由权限跳转已经跳转效果,在该文件下: 配置
      router.beforeEach((to, from, next) =>{
        NProgress.start()
        next()
      })
      router.afterEach((to, from, next) => {
        NProgress.done()
        next()
      })
      关掉转圈圈式的加载:
      NProgress.configure({ showSpinner: false })
      * 在request请求接口中引用,在配置中,
      
      配置下基础项:
      NProgress,configure({ showSpinner: false})
      
      在axios的配置中,添加showLoading项:
      const service = axios.create({
        showLoading: true
      })
      
      配置拦截器:
      service.interceptors.request.use(
        config => {
          if(config.headers.showLoading) {
            NProgress.start()
            delete config.headers.showLoading
          }
          ......
          return config;
        }
      )
      
      配置响应拦截器:
      service.interceptors.response.use(
        response => {
          NProgress.done()
          ......
        },
        error => {
          NProgress.done()
          ......
        }
      )
      export default service

      如果在某个具体的请求中,不需要有请求交互的效果,如下配置:
      export default({
        test() {
          return request.get('https://......', {
            headers: { showLoading: false }
          })
        }
      })

    4. core-js在整个包中已经装好,无需再安装.
  * 新建几个文件夹filters, utils, layout, services, policies, views, router分别用来存放过滤器相关文件, 功能文件, 页面整体布局, api接口文件, 安全策略相关文件, 视图文件, 路由文件
  * 路由优化:
# tips 
  * git push -u origin master 时报出错误: fatal: Authentication failed for 'https://github.com/XXXXXXXXXXXXX.git'
    * 解决方法:
      1. 控制面板 -> 用户账户 -> 管理windows凭剧 -> 添加普通凭据 -> 添加IP地址+user+password(IP地址可以通过ping www.github.com,就能看到IP地址了)
      2. 再次尝试push代码,就能提交上去了.
  * 