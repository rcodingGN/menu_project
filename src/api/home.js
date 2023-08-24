import request from '@/utils/axios'

const HOME_API = {
  getMenuTypeList: async(params) => {
    return request({
      url: ``,
      method: 'POST',
      params
    })
  },
  getMenuList: (params) => {
    return request({
      url: ``,
      method: 'POST',
      params
    })
  }
}
export default HOME_API

