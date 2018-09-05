<template>
  <div class="wk-mine">
    <h4>Mine</h4>
    <h1>{{msg}}</h1>
    <children></children>
    <button @click="msg = 'hello'">改变msg</button>
  </div>
</template>

<script>
import children from "@/components/children";
export default {
  name: "Mine",
  data() {
    return {
      msg: "进入之前"
    };
  },
  components: {
    children
  },
  beforeCreate() {
    console.log("beforeCreated：组件实例创建之前");
  },
  created() {
    console.log("created");
  },
  mounted() {
    this.msg = "进入之后";
    console.log("mounted");
  }
  // activated() {
  //   console.log("activated");
  // },
  // deactivated() {
  //   console.log("deactivated");
  // },
  // beforeRouteEnter(to, from, next) {
  //   console.log("beforeRouteEnter");
  //   // 渲染该组件的对应路由被confirm前调用
  //   // 不能获取组件实例this。在beforeRouteEnter这个钩子函数执行的时候，组件实例还没被创建
  //   // 该钩子函数会在组件一开始加载的时候最先执行，要在created函数之前
  //   next(vm => {
  //     // 可以在next调用的时候传参：参数是当前的Vue实例
  //     console.log("路由对象");
  //     console.log(vm.$route);
  //     console.log(to);
  //   });
  // }
  // beforeRouteUpdate(to, from, next) {
  //   console.log("beforeRouteUpdate");
  //   next();
  // }
  // beforeRouteLeave(to, from, next) {
  //   console.log("beforeRouteLeave");
  //   next();
  // }
};
</script>

<style lang="less" scoped>
.wk-mine {
  height: 100%;
  background-color: red;
}
</style>
