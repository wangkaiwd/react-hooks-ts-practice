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
    </ul>
    <div class="change-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
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
