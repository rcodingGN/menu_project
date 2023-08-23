import { ref } from 'vue'

export default function getMenuDetailHook() {
  const showSvg = ref('1')
  return {
    showSvg
  }
}
