import { useUserStore } from '@/stores/user'
import { getLocalStorage } from './localStorage'

let subscribers: Function[] = []
let pending = false //同时请求多个过期链接，保证只请求一次获取短token

export const addSubscriber = (request: () => any) => {
  subscribers.push(request)
}

export const retryRequest = () => {
  subscribers.forEach((request) => request())
  subscribers = []
}

export const refreshAccessToken = async () => {
  if (!pending) {
    try {
      pending = true
      const storageToken = getLocalStorage('userToken')
      const userStore = useUserStore()
      if (storageToken) {
        /* 重新获取短token */
        await userStore.refreshToken()
        retryRequest()
      }
      return
    } catch (e) {
      // const { disconnect } = useWeb3();
      // disconnect();
      return
    } finally {
      pending = false
    }
  }
}
