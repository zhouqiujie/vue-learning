import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutRoutes from './routes.about'
import Routes2 from './routes.module2'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  }
  // ,
  // {
  //   path: '/home',
  //   // name: 'home',
  //   component: Home
  // }
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
].concat(AboutRoutes).concat(Routes2)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
