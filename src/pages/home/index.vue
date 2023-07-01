<template>
  <view class="content">
    <image
      src="@/assets/image/dog.jpg"
      class="bgstyle"
    />
    <introduce class="introduce-style"></introduce>
    <view class="middle-style">
      <text>点菜</text>
      <usearch class="usearch-style"></usearch>
    </view>
    <view class="content-style">
      <slide-menu
        :menu-list="menuList"
        class="menu-style"
      ></slide-menu>
    </view>

  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import usearch from '@/components/usearch/usearch.vue'
import introduce from '@/components/introduce/introduce.vue'
import slideMenu from '@/components/slideMenu/slideMenu.vue'


const menuList = reactive([
  {
    index: 0,
    name: '嗨猪大餐'
  },
  {
    index: 1,
    name: '猪吃肉肉'
  },
  {
    index: 2,
    name: '小猪爆炒'
  },
  {
    index: 3,
    name: '煲锅猪汤'
  },
  {
    index: 4,
    name: '甜宝猪咪'
  },
  {
    index: 5,
    name: '鲜灵菜猪'
  },
  {
    index: 6,
    name: '小猪独食'
  },
  {
    index: 7,
    name: '猪一锅出'
  },
])
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
    height: 200 rpx;
    z-index: 1;
  }

  .introduce-style {
    margin: -140rpx 20 rpx 0 20 rpx;
    z-index: 99;
  }

  .middle-style {
    display: flex;
    width: 100%;

    text {
      display: flex;
      font-size: 34 rpx;
      align-items: center;
      border-bottom: 6 rpx solid red;
      margin-left: 40 rpx;
    }

    .usearch-style {
      justify-content: end;
      margin-left: auto;
      margin-right: 20 rpx;
    }
  }

  .content-style {
    display: flex;

    .menu-style {
      align-items: normal;
    }
  }

}
</style>
