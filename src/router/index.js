import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Homepage from '@/components/Homepage'
import Dashboard from '@/components/Dashboard'
import AddSubmit from '@/components/AddSubmit'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import Faq from '@/components/Faq'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add',
      name: 'AddSubmit',
      component: AddSubmit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    // if user is true
    if (user) {
      // user signed in, proceed to route
      next()
    } else {
      // no user signed in, redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
