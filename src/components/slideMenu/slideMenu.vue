<template>
  <view class="container">
    <view
      v-for="item in menuList"
      :key="item.index"
      class="menu-style"
      @click="getMenuName(item)"
    >
      {{ item.name }}
    </view>
  </view>
</template>

<script lang="ts" setup>
// import { ref, reactive, toRefs } from "vue";
import getSlideMenuHook from './hook'
const { menuList, getMenuName } = getSlideMenuHook()

</script>

<style lang="scss" scoped>
.container {
  background: #eeecec;
  width: 200rpx;
  height: calc(100vh);
  .menu-style {
    height: 100rpx;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 34rpx;
  }

  .menu-style:hover {
    background: #ffffff;
  }
}
</style>
