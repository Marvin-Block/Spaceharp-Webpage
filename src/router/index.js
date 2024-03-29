// Imports
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'SpacesharpDB',
          name: 'SpacesharpDB',
          component: () => import('@/views/db/Index.vue'),
        },
        {
          path: 'Login',
          name: 'Login',
          component: () => import('@/views/login/Index.vue'),
        },
        {
          path: 'Profile',
          name: 'Profile',
          component: () => import('@/views/login/Profile.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/404/Index.vue'),
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('@/views/404/Index.vue'),
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
