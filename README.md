# websitemul

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

## structure
> 项目目录说明
```
#基本的文件目录是vue-cli生成的webpack标准模板目录，简单说明如下：
*build目录放置的是编译打包相关文件
*config目录放置的是配合编译环境的配置文件
*node_modules是npm安装的各种插件包（此目录不会手动管理）
*src目录是项目的编码文件，所有软件功能的架构和业务实现都在这里,编码时src目录的别名为"@"
*static放置静态资源
*doc放置一些重要的文档或图解
```
```
#除标准目录结构外，依据架构需要：
*src下面增加了pages、util、mixin、api、sass目录，依次说明如下：
*pages用于放置路由页面，包含app启动页面、app主功能页面等及其子页面，
各页面中使用的组件都放置在components下
*util目录放置通用的工具函数
*api目录放置的是协议定义，以及数据收发处理接口函数
*sass目录放置css文件（使用scss语法），其下又有base、lib、libfix
  sass
  	|-base,此目录下放置的是全局的定义和设置
  	|-lib，此目录下放置的是第三方的库
  	|-libfix，此目录下放置的是对lib中第三方库里某些组件样式的修改文件
*components目录下各组件的css样式，*直接在组件内部写*！！
```
## 开发规范：
```
1.语法：使用ES2015语法； 每行语句后面，推荐*不加*分号；
2.缩进：使用*两个空格*的缩进或一个tab（需设置tabsize=2),这样可以保证跟主流的开源js，以及主流IDE的默认缩进一致；
3.目录名使用全小写形式，如pathname
3.组件文件名采用小写kebab方式，hello-world.vue
4.js变量名采用驼峰Camel方式，如 let userName = '';
5.页面的css直接写在vue文件内的style标签里，并设置scoped属性如<style lang='scss' scoped></style>
6.css中的id和class、变量及其他属性命名采用肉串kebab方式，如<div id='some-div' class='other-cls' />
7.能抽象出独立模块的，尽量模块化开发，方便维护
```
##补充CSS说明
```
1.响应式方案采用手淘的flexible
2.UI设计稿尺寸为750*1334,高度超过1334的滚屏
	
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
