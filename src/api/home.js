import request from '@/utils/axios'

const HOME_API = {
  getMenuTypeList: async(params) => {
    return request({
      url: `/api/menu/menuList`,
      method: 'GET',
      params
    })
  },
  getMenuList: (params) => {
    return request({
      url: `/api/menu/menuType`,
      method: 'POST',
      params
    })
  }
}
export default HOME_API

