import {ref} from 'vue'

export default function getMenuTypeHook() {
  const menuFormsRef = ref()
  const typeList = [{ value: 100101, text: '嗨吃大餐' }, { value: 100102, text: '好好吃饭' }, { value: 100103, text: '面条' }]
  const formData = ref({
    menuSort: '', // 分类
    // fileLists: [], // 文件列表  至少需要三个属性（必填） name,extname,url
    description: '' // 步骤描述
  })
  const fileLists =ref([])
  // 选择分类
  function getSelectChange(changeEvent:any) {
    console.log(changeEvent, '我是选择改变')
  }
  function useProgress(progressParams:any) {
    console.log(progressParams,'我是上传进度')
  }
  function useSuccess(successParams:any) {
    console.log(successParams,'我是上传成功')

  }
  function useFail(failParams:any) {
    console.log(failParams,'我是上传失败')

  }
  function useSelect(selectParams:any) {
    console.log(selectParams,'我是上传选择')
    const {tempFiles} = selectParams
    tempFiles.forEach((item:any)=>{
      // @ts-ignore
      fileLists.value.push({
        name:item.name,
        extname:item.extname,
        url:item.path
      })
      // 图片大小校验
      // if (item.size > 2 * 1024 * 1024) {
      //   uni.showToast({
      //     title: '图片大小不能超过2M',
      //     icon: 'none'
      //   })
      //   useDelete(item)
      //   return
      // }
    })
  }
  function useDelete(deleteParams:any) {
  console.log(fileLists.value)
    // if (deleteParams.tempFiles){
      const {tempFiles} = deleteParams
      // @ts-ignore
      fileLists.value = fileLists.value.filter(item=>item.name !== tempFiles.name)
    // }else{
    //   // @ts-ignore
    //   fileLists.value = fileLists.value.filter(item=>item.name !== deleteParams.name)
    // }
  }
  // 提交
  function handleConfirm() {
    const params = {
      ...formData,
      fileLists:fileLists.value
    }
  }
  return {
    menuFormsRef,
    typeList,
    formData,
    fileLists,
    handleConfirm,
    getSelectChange,
    useProgress,
    useSuccess,
    useFail,
    useSelect,
    useDelete
  }
}
