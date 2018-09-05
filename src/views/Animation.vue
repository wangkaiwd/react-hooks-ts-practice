<template>
  <div class="wk-animation">
    动画页面
    <div class="content">
      <button @click="visible=!visible">click</button>
      <transition name="xxx">
        <!-- <div class="box" v-if="visible">
          动画
        </div> -->
        <div v-if="visible">动画</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Animation",
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang="less" scoped>
.wk-animation {
  height: 100%;
  background-color: green;
  .box {
    width: 100px;
    height: 100px;
    background-color: pink;
    margin: 20px auto;
  }
  // 元素出现时的第一帧
  .xxx-enter {
    transform: scale(1.2) translateX(100px);
    opacity: 0;
    // background-color: transparent;
  }
  .xxx-enter-active {
    transition: all 1s;
  }
  // .xxx-enter-to {
  //   background-color: red;
  // }
  // 元素消失时的第一帧
  // .xxx-leave {
  //   background-color: black;
  // }
  .xxx-leave-active {
    transition: all 1s;
  }
  .xxx-leave-to {
    transform: scale(1.2) translateX(100px);
    opacity: 0;
    // background-color: transparent;
  }
  // 为什么v-enter-to和v-leave对应的类添加的动画效果不符合预期？
}
</style>
