/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-01-08 23:28:19
 * @LastEditTime: 2022-01-09 13:38:08
 * @LastEditors: Do not edit
 * @FilePath: \proxysite\src\router\index.js
 * @Description: 耶斯莫拉
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/proxylist',
    name: 'ProxyList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProxyList.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
