import Vue from 'vue'
import Router from 'vue-router'

// when the import statements for components are declared like this in the router, it will be automatically code-split by webpack
// this way the components will load only when necessary (more info: https://router.vuejs.org/en/advanced/lazy-loading.html)
const PageHome = () =>
  import(/* webpackChunkName: "page-home" */ '@/components/page-home')
const Page404 = () =>
  import(/* webpackChunkName: "page-404" */ '@/components/page-404')
const PageVueProperImage = () =>
  import(/* webpackChunkName: "vue-proper-image" */ '@/components/page-vue-proper-image')

Vue.use(Router)

var AppRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/vue-proper-image',
      name: 'vue-proper-image',
      component: PageVueProperImage
    },
    {
      path: '/error/404', // path to 404 page
      name: 'error-404',
      component: Page404
    },
    {
      path: '/*', // redirect everything that doesn't match to any route to 404 page
      redirect: '/error/404'
    }
  ]
})

AppRouter.beforeEach(function(from, to, next) {
  setTimeout(function() {
    window.scrollTo(0, 0)
    next()
  }, 100)
})

export default AppRouter
