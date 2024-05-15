import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import scrollBehavior from './scrollBehavior'
import beforeEachGuard from './beforeEachGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior
})

router.beforeEach(beforeEachGuard)

export default router
