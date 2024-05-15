import type { RouterScrollBehavior } from 'vue-router'

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior: RouterScrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position: Record<string, any> = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.el = to.hash
      position.behavior = 'smooth'

      if (/^#\w/.test(to.hash) || document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise((resolve) => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some((m) => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.left = 0
        position.top = 0
      }

      resolve(position)
    })
  }
}

export default scrollBehavior
