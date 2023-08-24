<template>
  <view class="container">
    <menu-form ref="menuFormsRef" label-width="150rpx">
      <menu-form-item label="分类" required name="menuSort">
        <uni-data-select v-model="formData.menuSort" :localdata="typeList" @change="getSelectChange"></uni-data-select>
      </menu-form-item>
      <menu-form-item label="主图" required name="fileLists">
        <uni-file-picker
          v-model="fileLists"
          file-extname="png,jpg,jpeg"
          file-mediatype="image"
          limit="6"
          :del-icon="true"
          :disable-preview="false"
          :auto-upload="false"
          @delete="useDelete"
          @progress="useProgress"
          @success="useSuccess"
          @fail="useFail"
          @select="useSelect"
        />
      </menu-form-item>
      <menu-form-item label="详细描述" name="description" required>
        <uni-easyinput v-model="formData.description"></uni-easyinput>
      </menu-form-item>
    </menu-form>
    <button type="primary" @click="handleConfirm">提交</button>
  </view>
</template>

<script lang="ts" setup>
import menuForm from '@/components/menuForm/menuForm.vue'
import menuFormItem from '@/components/menuForm/menuFormItem.vue'
import getMenuTypeHook from '@/pages/menuType/menuTypeHook'

const { menuFormsRef, typeList, formData, fileLists, handleConfirm, getSelectChange, useProgress, useSuccess, useFail, useSelect, useDelete } = getMenuTypeHook()
</script>

<style lang="scss" scoped>
.container{
  padding: 10rpx;
}
</style>
