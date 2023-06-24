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

<script setup>
import { ref, reactive, toRefs } from 'vue'

const props = defineProps({
  menuList: {
    type: Array,
    default: () => []
  }
})
const { menuList } = toRefs(props)

const getMenuName = (item) => {
  console.log(item, '看下我可以获取到item嘛')
}
</script>

<style lang="scss" scoped>
.container {
  background: #c0c0c0;
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
