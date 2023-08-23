<template>
  <view class="container">
    <uni-card
      title="狗狗大餐"
      :is-full="true"
      sub-title="信息介绍"
      :thumbnail="DogImg"
      padding="0"
      extra="查看详细"
      @click="handleView"
    >
    </uni-card>
  </view>
</template>

<script lang="ts" setup>
import DogImg from '@/assets/image/dog.jpg'
import getMenuCardHook from './menuCardHook'
const { handleView } = getMenuCardHook()
</script>

<style lang="scss" scoped>
.container{
  width:100%;
  margin-left: 20rpx;
  .card-actions{
    display: flex;
    padding: 10rpx 0;
    .card-button{
      //width: 30rpx;
      //height: 30rpx;
      font-size: 10rpx;
    }
  }
}
</style>
