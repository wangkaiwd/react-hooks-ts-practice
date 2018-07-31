# vue-tips

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
## 你不知道的`keep-alive`
`keep-alive`: **缓存组件内部状态，避免重新渲染**
> 文档：和`transition`相似，`keep-alive`是一个抽象组件：它自身不会渲染一个`DOM`元素，也不会出现在父组件链中

### 缓存路由组件
使用`keep-alive`可以将所有路径匹配到的路由组件都缓存起来，包括路由组件里的组件。这是`keep-alive`的大多数使用场景。

在被`keep-alive`包含的组件/路由中，会多出2个生命周期的钩子：`activated`和`deactivated`。
> 文档：在2.2.0及更高版本中，`activated`和`deactivated`将会在树内的**所有嵌套组件**中触发
