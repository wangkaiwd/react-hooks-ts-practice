# vue-tips

> A Vue.js project


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

**参数to,from,next:**  

to和from是**将要进入和将要离开的路由对象**。路由对象：通过`this.$route`获取到的对象。

**next:function** 这个参数是一个函数，且**必须调用，否则不能进入路由**(页面空白)
* `next()`:进行管道中的下一个钩子。如果钩子全部执行完了，则导航的状态就是confirmed(确认的)。
* `next(false)`: 中断当前导航，URL地址重置到`from`路由对应的地址
* `next('/')`或`next({path:'/'})`:跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。传参方式类似于`router-link`的`to` `prop`或`router.push`中的选项

### 路由组件内的守卫
可以在**路由组件**内指直接定义
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
**使用`keep-alive`就不会调用`beforeDestory`(组件销毁前钩子)和`destoryed`(组件销毁)，因为组件没被销毁，被缓存起来了。** 如果你缓存了组件，要在组件销毁的时候做一些事情，你可以放在这个钩子里

离开路由会依次触发:
```js
组件内的离开当前路由钩子beforeRouteLeave => 路由全局前置守卫beforeEach => 路由全局解析守卫beforeResolve
全局后置守卫钩子 afterEach => deactivated 离开缓存组件 => activated 进入缓存组件（如果你进入的也是缓存路由）
// 如果离开的组件没有缓存的话 beforeDestory会替换deactivated
// 如果进入的路由也没有缓存的话 全局后置钩子afterEach => 销毁 destoryed => beforeCreated等
```
### 缓存你想缓存的路由
* `include`:匹配的路由/组件会被缓存
* `exclude`:匹配的路由/组件不会被缓存

`include`和`exclude`缓存路由的方式：
1. 逗号分隔字符串：
    ```html
    <keep-alive>
      <router-view include="a,b"></router-view>
    </keep-alive>
    ```
2. 正则表达式：
    ```html
    <keep-alive>
      <!-- 要用v-bind绑定，否则获取的内容为字符串 -->
      <router-view :exclude="/a|b/"></router-view>
    </keep-alive>
    ```
3. 数组：
    ```html
    <keep-alive>
      <!-- 要用v-bind绑定，否则获取的内容为字符串 -->
      <router-view :include="['a','b']"></router-view>
    </keep-alive>
    ```

`exclude`和`include`匹配规则：
1. 匹配首先检查组件自身的`name`选项
2. 如果`name`选项不可用，则匹配它的局部注册名称（父组件`components`对应的键值）。
3. 只能匹配当前被包裹的组件，**不能匹配更下面嵌套的子组件**，即：**只能匹配和不匹配路由对应的组件，路由对应组件中的子组件并不能取消缓存**
    ```html
    <!-- App.vue -->
    <div class="change-content">
      <keep-alive exclude="children">
        <router-view/>
      </keep-alive>
    </div>

    <!-- Mine.vue -->
    <div class="wk-mine">
      <h4>Mine</h4>
      <h1>{{msg}}</h1>
      <!-- children是Mine中的子组件，并不能取消缓存 -->
      <children></children>
      <button @click="msg = 'hello'">改变msg</button>
    </div>
    ```
4. `exclude`的优先级大于`include`
    ```html
    <div class="change-content">
      <!-- 组件名为Mine的路由组件及其子组件取消缓存 -->
      <keep-alive include="Mine" exclude="Mine">
        <router-view/>
      </keep-alive>
    </div>
    ```
