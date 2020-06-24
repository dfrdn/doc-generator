import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Employment from '../views/Employment.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Employment',
    component: Employment
  },
  {
    path: '/about',
    name: 'About'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
