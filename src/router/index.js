import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Goods from '@/views/Goods'
import Mine from '@/views/Mine'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      name: '首页'
    },
    {
      path: '/goods',
      component: Goods,
      name: '商品页'
    },
    {
      path: '/mine',
      component: Mine,
      name: '我的'
    }
  ]
})
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

export default router;
