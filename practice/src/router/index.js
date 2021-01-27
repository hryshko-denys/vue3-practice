import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/request:id',
    name: 'Request',
    component: () => import(/* webpackChunkName: "about" */ '../views/Request.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requitedAuth = to.meta.auth

  if (requitedAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requitedAuth && !store.getters['auth/isAuthenticated']) {
    next('auth?message=auth')
  } else {
    next()
  }
})

export default router
