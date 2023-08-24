import http from './request'

// export interface PublicRole {
//   url: string
//   method: string
//   data?: any
//   params?: any
//   headers?: Object
// }

const request = (requestConfig, requestOptions = {}) => {
  requestConfig = {
    ...requestConfig,
    method: requestConfig.method || 'get'
  }
  return http.fetch(...requestConfig, ...requestOptions)
}
export default request
