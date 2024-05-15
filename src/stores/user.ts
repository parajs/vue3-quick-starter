import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLocalStorage, setLocalStorage } from '@/utils'

export const useUserStore = defineStore('user', () => {
  const userToken = ref(getLocalStorage('userToken'))

  const refreshToken = () => {
    const token = 'xxxxx'
    setLocalStorage('userToken', token)
    userToken.value = token
  }

  return { userToken, refreshToken }
})
