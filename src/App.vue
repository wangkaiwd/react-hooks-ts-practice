<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/goods">商品页</router-link>
      </li>
      <li>
        <router-link to="/mine">我的</router-link>
      </li>
      <li>
        <router-link to="/animation">动画</router-link>
      </li>
    </ul>
    <transition 
      name="slide-fade" 
      mode="out-in"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
    >
      <div class="change-content" :key="$route.fullPath">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
.router-link-active {
  color: red;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
// .slide-fade-enter-active,
// .slide-fade-leave-active {
//   transition: all 1s ease-in-out;
// }

// .slide-fade-enter {
//   transform: translateX(100px) rotate(100deg);
//   opacity: 0;
// }
// .slide-fade-leave-to {
//   transform: translateX(-100px);
//   opacity: 0;
// }
.change-content {
  position: fixed;
  top: 100px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding-left: 20px;
  color: #fff;
}
</style>
