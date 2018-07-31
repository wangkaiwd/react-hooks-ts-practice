import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Goods from '@/views/Goods'
import Mine from '@/views/Mine'

Vue.use(Router)

export default new Router({
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
