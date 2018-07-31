<template>
  <div class="wk-mine">
    <h4>Mine</h4>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      msg: "进入之前"
    };
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
  }
};
</script>

<style lang="less" scoped>
</style>
