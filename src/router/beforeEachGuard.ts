import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default async function beforeEachGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const isAuth = to?.meta?.isAuth
  const { userToken } = storeToRefs(useUserStore())

  // determine whether the user has logged in
  if (userToken.value) {
    next()
  } else {
    // has no token
    if (!isAuth) {
      //public page  go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/')
    }
  }
}
