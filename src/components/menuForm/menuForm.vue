<template>
  <view class="container">
    <uni-forms
      ref="formData"
      v-bind="$attrs"
      >
     <slot></slot>
    </uni-forms>
  </view>
</template>
<script setup lang="ts">
import getMenuFormHook from '@/components/menuForm/menuFormHook'

const { formData } = getMenuFormHook()
</script>
<style lang="scss" scoped></style>
