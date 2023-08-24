<template>
  <view class="container">
    <menu-form
      ref="menuFormsRef"
      label-width="100rpx">
      <menu-form-item
        label="分类"
        required>
        <uni-data-select></uni-data-select>
      </menu-form-item>
      <menu-form-item
        label="主图"
        required>
        <uni-file-picker
          file-extname="png,jpg,jpeg"
          file-mediatype="image"
          mode="grid"
          limit="5"
        />
      </menu-form-item>
    </menu-form>
  </view>
</template>

<script lang="ts" setup>
import menuForm from '@/components/menuForm/menuForm.vue'
import menuFormItem from '@/components/menuForm/menuFormItem.vue'

</script>

<style lang="scss" scoped>
.container{
  padding: 10rpx;
}
</style>
