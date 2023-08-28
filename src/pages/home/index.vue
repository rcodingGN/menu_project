<template>
  <view class="content">
    <image
      src="@/assets/image/dog.jpg"
      class="bgstyle"
    />
    <introduce class="introduce-style"></introduce>
    <view class="middle-style">
      <text>分类</text>
      <usearch class="usearch-style"></usearch>
    </view>
    <view class="content-style">
      <slide-menu></slide-menu>
      <menu-card></menu-card>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import usearch from '@/components/usearch/usearch.vue'
import introduce from '@/components/introduce/introduce.vue'
import slideMenu from '@/components/slideMenu/slideMenu.vue'
import menuCard from '@/pages/menuCard/menuCard.vue'
import { HOME_API } from '@/api/index.js'

// const getList = () => {
//   HOME_API.getMenuTypeList().then((res) => {
//     console.log(res, 'aaa')
//   }).catch(() => {})
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:3001/api/menu/menuList', true)
xhr.onreadystatechange = function() {
  console.log(xhr.responseText, 'aaaa')
}
xhr.send()
// }
// getList()

</script>

<style lang="scss">
.content {
  //font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .bgstyle {
    width: 100%;
    height: 200rpx;
    z-index: 1;
  }

  .introduce-style {
    margin: -140rpx 20rpx 0 20rpx;
    z-index: 99;
  }

  .middle-style {
    display: flex;
    width: 100%;

    text {
      display: flex;
      font-size: 34rpx;
      align-items: center;
      border-bottom: 6rpx solid red;
      margin-left: 40rpx;
    }

    .usearch-style {
      justify-content: end;
      margin-left: auto;
      margin-right: 20rpx;
    }
  }
  .content-style{
    width: 100%;
    display: flex;
  }
}
</style>
