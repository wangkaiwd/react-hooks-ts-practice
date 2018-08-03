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

**`activated`调用时机**:  
第一次进入缓存路由/组件，在`mounted`后面，`beforeRouteEnter`守卫传给`next`的回调函数之前调用：  
```js
// 执行流程
beforeMount => 如果你是从别的路由/组件进来(组件销毁`destroyed`/或离开缓存`deactivated`) => 
mounted => activated 进入缓存组件 => 执行 beforeRouteEnter回调
```
因为组件被缓存了,**再次进入缓存路由/组件时,不会触发这些钩子函数**: `beforeCreated created beforeMount mounted`。而且`data`中的数据还是上一次离开时的数据,解决`data`中数据缓存问题的方式： 
1. 在`activated`钩子函数中进行初始化页面`data`中的数据
2. 在`deactivated`钩子中，当缓存页面离开时进行`data`中数据的初始化操作
3. 禁用该组件的缓存  

之后的调用时机：
```js
组件销毁destoryed/或离开缓存deactivated => activated 进入当前缓存
=> 执行 beforeRouteEnter回调
// 组件缓存或销毁，嵌套组件的销毁和缓存也在这里触发
```

### `deactivated`
**组件被停用(离开路由)时调用**
