### FAQ
* [有类似实例变量的东西吗？](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)
* [实现`componentUpdated`生命周期方法](https://zh-hans.reactjs.org/docs/hooks-faq.html#can-i-run-an-effect-only-on-updates)
* [如何获取上一轮的`props`或`state`](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
  * 实现`usePrevious`自定`hooks`
* [stale props and state](https://zh-hans.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
  * 异步回调中读取`props`和`state`
  * 使用了`依赖数组`但没有正确的指定所有的依赖
  * 解决方法： 用`ref`保存它，修改它，并从中读取
* [有类似`forceUpdate`的东西吗?](https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate)
  * 实现方式
    1. 数字，每次更新时数字+1
    2. 每次更新时传入`{}`，这样会认为每次都传入一个新的对象，从而更新视图
* [我该如何测量 DOM 节点？](https://zh-hans.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
  * 仔细研究一下`demo`
  * callback ref 实现(why)
  * 实现功能对应的自定义`hooks`
### 一些不懂的知识点
* [我该如何实现 getDerivedStateFromProps？](https://zh-hans.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
* [我可以引用一个函数组件吗?](https://zh-hans.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)
  * `useImperativeHandle`的用法
* `useState`的简单原理
