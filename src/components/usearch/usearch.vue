<template>
  <view class="container">
    <uni-search-bar
      v-model="searchValue"
      placeholder="请输入您想要搜索的内容"
      radius="100"
      cancel-button="none"
    >
    </uni-search-bar>
    <button
      class="button-style"
      @click="search"
    >搜索
    </button>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue'

const props = defineProps({
  searchValue: String,
})
const { searchValue } = toRefs(props)
const getSearch = (e) => {
  console.log(e, '让我看看点中了谁')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;

  :deep(.uni-searchbar__box) {
    border: 1px solid red;
    // width: 478rpx;
    height: 66rpx;
    justify-content: normal;
  }

  :deep(.uniui-search) {
    color: red !important;
    margin-right: auto;
  }

  .button-style {
    // width: 114rpx;
    height: 56rpx;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 30rpx;
    margin: auto;
    background-color: rgb(255, 0, 0);
    color: #fff;
  }
}
</style>
