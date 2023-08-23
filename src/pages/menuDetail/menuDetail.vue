<template>
  <view class="container">
    <view class="bgImg"></view>
    <uni-card
        :is-full="true"
        padding="0"
    >
      <template #title>
        <menu-lable :show="showSvg">狗狗大餐</menu-lable>
        <view>信息介绍</view>
      </template>
    </uni-card>
    <view style="background-color: #eeecec;height: 20rpx"></view>
    <uni-card
        :is-full="true"
        padding="0"
    >
      <template #title>
        <menu-lable></menu-lable>
        <view>步骤</view>
      </template>
    </uni-card>
    <view class="detail-bottom">--没有更多了哦，快去添加吧！--</view>
  </view>
</template>

<script lang="ts" setup>
import menuLable from '@/components/menuLable/menuLable.vue'
import getMenuDetailHook from '@/pages/menuDetail/menuDetailHook'
const { showSvg } = getMenuDetailHook()
</script>

<style lang="scss" scoped>
page{
  background-color: #eeecec;
}
.container{
  width:100%;
  .bgImg{
    background-image: url("@/assets/image/dog.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    //background-position: center;
    width: (100vw);
    height: (50vh);
    margin-bottom: 20rpx;
  }
  .detail-description{
    margin-left: 70rpx;
  }
  .content{

  }
  .detail-bottom{
    color: #e03923;
   text-align: center;
  }
}
</style>
