# 骨架搭建
  * 初始化一个项目 node init webpack arine, npm install, npm run dev 跑起来
  * 设置npm淘宝镜像:npm config set registry https://registry.npm.taobao.org
  * 连接到git git init, 在github上new一个项目, 把本地项目添加上去 git remote add origin https://XXXXXXXXXXX.org
  * 安装各个工具包.依赖: element-ui (vue add element), normalize.css, NProgress, moment.js, core-js, underscore, vuex, axios, vue-editor-wrap, vue-loader等,并在相关文件引用. 
    1. element: vue add element,生成一个plugins文件夹,再main.js中引入该文件夹中的文件
    2. normalize: 初始化基础样式 npm i normalize -S,在main.js中引用:import normalize.css/normalize.css
    3. NProgress: 用于页面跳转的交互效果, npm i nprogress -S
      * 在路由中引用,该项目中另建了个permission.js文件用于控制路由权限跳转已经跳转效果,在该文件下: 配置
      ``` bash
      router.beforeEach((to, from, next) => {
        NProgress.start()
        next()
      })
      router.afterEach((to, from, next) => {
        NProgress.done()
        next()
      })
      ```

      关掉转圈圈式的加载:
      ``` bash
      NProgress.configure({ showSpinner: false })
      ```
      * 在request请求接口中引用,在配置中,
      
      配置下基础项:
      ``` bash
      NProgress,configure({ showSpinner: false})
      ```
      在axios的配置中,添加showLoading项:
      ``` bash
      const service = axios.create({
        showLoading: true
      })
      ```
      配置拦截器:
      ```bash
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
      ```
      配置响应拦截器:
      ``` bash
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
      ```

      如果在某个具体的请求中,不需要有请求交互的效果,如下配置:
      ``` bash
      export default({
        test() {
          return request.get('https://......', {
            headers: { showLoading: false }
          })
        }
      })  
      ``` 
    4. core-js在整个包中已经装好,无需再安装.
  * 新建几个文件夹filters, utils, layout, services, policies, views, router分别用来存放过滤器相关文件, 功能文件, 页面整体布局, api接口文件, 安全策略相关文件, 视图文件, 路由文件
  * 路由优化:
    * 路由meta中实现权限控制
    在user.js中添加meta项
    ```bash
    export const router = [
      {
        path: '/user',
        name: 'User',
        component: _import('User/list'),
        meta: { auth: true }
      }
    ];
    ```
    在permission.js中,router.beforeEach中,配置如果没有权限则跳转到主页,并且显示提示
    ```bash
    router.beforeEach((to, from, next) => {
      NProgress.start() // 开始进度条
      if (to.matched.some(router => router.meta.auth)) {
        Notification({
          title: '提示',
          message: '您没有权限请求当前页面',
          type: 'warning',
          duration: 1500
        });
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
      .......
    })
    ```
  * vue.config.配置
    * cssloader,在官网cli中可以查看详情,在安装sass-loader的时候安装的版本如果太高,兼容不了报错,就安装个低一点版本的即可,这里安装的7开头的版本.
    将element-variables.scss 移入styles中,在styles中新建一个_var.scss文件,定义一些通用样式,在element-variables.scss中引用_var.scss文件,用于写通用类
    ```bash
    # icon font path, required
    $--font-path: '~element-ui/lib/theme-chalk/fonts';
    @import './var';
    @import "~element-ui/packages/theme-chalk/src/index";
    # 写通用类
    .text-primary {
      color: $--color-primary
    }
    ```
    在_var.scss中写通用样式,如下: 
    ```bash
    $--color-primary: teal;
    ```
    这样就能替换原本element规定的样式,制定自己专属的样式,若在页面中项引用_var.scss所写的样式,需要引入_var.scss,如下
    ```bash
    <style lang='scss' scoped>
      @import '@/styles/_var.scss';
      p {
        color: $--color-primary
      }
    </style>
    ```
    如果存在很多页面需要用到通用样式,这样子每个vue文件都要引一遍_var.scss很麻烦,所以可采取在根目录下新建一个vue.config.js文件,在里面定义好css-loader,r如下:
    ```bash
    module.exports = {
      css: {
        loaderOptions: {
          sass: {
            data: `@import "@/styles/_var.scss";`
          }
        }
      }
    }
    ```
    这样子在页面中就不再需要单独引入_var.scss这个文件了
    # 但是但是,我引入失败了,那个_var.scss没有生效,还没找到解决方法呢!
# tips 
  * git push -u origin master 时报出错误: fatal: Authentication failed for 'https://github.com/XXXXXXXXXXXXX.git'
    * 解决方法:
      1. 控制面板 -> 用户账户 -> 管理windows凭剧 -> 添加普通凭据 -> 添加IP地址+user+password(IP地址可以通过ping www.github.com,就能看到IP地址了)
      2. 再次尝试push代码,就能提交上去了.
# 开发过程
  * 终于写好路由和布局了,该项目连接了我公司的sit作为测试
  * 添加了table的封装还有表格列的筛选封装,搜索模块的封装,安装了underscore.js和i18n国际化语言等依赖
  * 写了一半echarts的内容,今天状态不好啊啊啊啊啊,很痛苦,写不下去,全身乏力
  * 添加了lodash.js,并且在main.js中全局引用了下,只需要Vue.prototype._.XXXX即可調用
