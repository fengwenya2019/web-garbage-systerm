import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: () => import('./components/Index.vue'),
        },
        {
          path: '/home/guide',
          name: 'guide',
          component: () => import('./components/Guide.vue'),
        },
        {
          path: '/home/site',
          name: 'site',
          component: () => import('./components/Site.vue'),
        },
        // {
        //   path: '/deleteguide',
        //   name: 'deleteguide',
        //   component: () => import('./components/DeleteGuide.vue'),
        // },
      ]
    }
  ]
})
