import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "projects" */ './views/Blog.vue')
    }
  ]
})
