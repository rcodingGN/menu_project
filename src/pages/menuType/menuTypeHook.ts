import { ref } from 'vue'

export default function getMenuTypeHook() {
  const menuFormsRef = ref()
  const typeList = ['1', '2', '3']
  return {
    menuFormsRef,
    typeList
  }
}
