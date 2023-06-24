<template>
  <view class="container">
    <view class="top-contain">
      <image
        src="@/assets/image/dog.jpg"
        class="top-image"
      />
      <view class="top-leftcon">
        <text class="top-text">云姐菜谱</text>
        <text>大概需要一个小时制作哦！</text>
      </view>
    </view>
    <view class="bottom-contain">
      <image
        src="@/assets/image/news.png"
        class="bottom-image"
      />
      <text>新上紫菜蛋花汤，酸菜鱼，欢迎品尝~</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

</script>

<style lang="scss" scoped>
.container {
  width: 704rpx;
  height: 200rpx;
  background-color: #f8f8f8;
  border-radius: 30rpx;

  .top-contain {
    display: flex;
    height: 100rpx;
    margin: 30rpx 30rpx 10rpx 30rpx;

    .top-image {
      width: 100rpx;
      height: 100rpx;
    }

    .top-leftcon {
      display: flex;
      flex-direction: column;
      margin-left: 30rpx;
      justify-content: center;

      .top-text {
        font-weight: 600;
      }
    }
  }

  .bottom-contain {
    margin: 0 30rpx;
    display: flex;

    .bottom-image {
      width: 44rpx;
      height: 44rpx;
    }

    text {
      color: red;
      margin-left: 15rpx;
    }
  }
}
</style>
