export default function getMenuCardHook() {

  function handleView(params: any) {
    console.log(params, 'aaa')
    uni.navigateTo({
      url:'/pages/menuDetail/menuDetail'
    })
  }
  return {
    handleView
  }
}
