<template>
  <div class="children">
    儿子
  </div>
</template>

<script>
export default {
  name: "children",
  data() {
    return {};
  },
  activated() {
    console.log("children-activated");
  }
};
</script>

<style>
</style>
