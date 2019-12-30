import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import AboutRoutes from './routes.about'
import Routes2 from './routes.module2'
import { AuthenticationContext } from 'vue-adal'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  ...AboutRoutes,
  ...Routes2,
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  console.log(to, AuthenticationContext.isAuthenticated())
  // const { requireAuth2 } = to.meta
  let flag = to.matched.some(record => record.meta.requireAuth2)
  if (flag && !AuthenticationContext.isAuthenticated()) {
    next({ path: '/home' })
  } else {
    next()
  }
})

export default router
