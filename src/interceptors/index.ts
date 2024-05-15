import { useUserStore } from '@/stores/user'
import { addSubscriber, messageError, refreshAccessToken } from '@/utils'
import axios from 'axios'
import { storeToRefs } from 'pinia'

axios.defaults.withCredentials = false

// request interceptor
axios.interceptors.request.use(
  (config) => {
    const { userToken } = storeToRefs(useUserStore())

    // do something before request is sent
    if (userToken.value) {
      // let each request carry token
      config.headers.Authorization = `Bearer ${userToken.value}`
    }

    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
axios.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  async (response) => {
    const { config, data } = response
    //retry:第一次请求过期，接口调用refreshAccessToken，第二次重新请求，还是过期则reject出去
    // @ts-ignore
    const { retry, showErrorMsg = true } = config
    return new Promise((resolve, reject) => {
      if (data.code !== 0) {
        if (data.code === 1701) {
          //   const { disconnect } = useWeb3()
          //   disconnect()
        } else if (data.code === 1700 && !retry) {
          // @ts-ignore
          config.retry = true
          addSubscriber(() => resolve(axios(config)))
          refreshAccessToken()
        } else {
          if (showErrorMsg) {
            messageError({ content: data.msg })
          }
          return reject({
            code: data.code,
            msg: data.msg || 'Error'
          })
        }
      } else {
        resolve(data.data)
      }
    })
  },
  (error) => {
    console.error('err' + error)
    messageError(error.message)
    return Promise.reject({ code: 1000, msg: error.message })
  }
)
