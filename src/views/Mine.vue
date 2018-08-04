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
  created() {
    console.log("created");
  },
  mounted() {
    this.msg = "进入之后";
    console.log("mounted");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  }
};
</script>

<style lang="less" scoped>
</style>
