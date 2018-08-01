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
## `Vue-Router`导航守卫
### 全局守卫
全局守卫有三个：
1. `router.beforeEach`:全局前置守卫,进入路由之前
2. `router.beforeResolve`: 全局解析守卫,在`beforeRouteEnter`调用之后调用
3. `router.afterEach`: 全局后置钩子，进入路由之后

使用方式：
```js
const router = new VueRouter({ ... })
router.beforeEach((to, from, next) => {
  console.log('beforeEach: 全局前置守卫');
  // 当将要进入的路由路径是'/goods'时，跳转到'/home'
  if (to.fullPath === '/goods') {
    return next('/home');
  }
  next();
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve:全局解析守卫');
  next();
})

router.afterEach((to, from) => {
  // 不会接受`next`函数也不会改变导航本身为
  console.log('afterEach:全局后置守卫');
})
```

## 你不知道的`keep-alive`
`keep-alive`: **缓存组件内部状态，避免重新渲染**
> 文档：和`transition`相似，`keep-alive`是一个抽象组件：它自身不会渲染一个`DOM`元素，也不会出现在父组件链中

### 缓存路由组件
使用`keep-alive`可以将所有路径匹配到的路由组件都缓存起来，包括路由组件里的组件。这是`keep-alive`的大多数使用场景。
```html
<keep-alive>
  <router-view></router-view>
</keep-alive>
```

在被`keep-alive`包含的组件/路由中，会多出2个生命周期的钩子：`activated`和`deactivated`。
> 文档：在2.2.0及更高版本中，`activated`和`deactivated`将会在树内的**所有嵌套组件**中触发
### `activated`
**`activated`在组件第一次渲染时会被调用,之后在每次缓存组件被激活时调用**  
