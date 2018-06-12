import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Submits from '@/components/Submits'
import AddSubmit from '@/components/AddSubmit'
import Signup from '@/components/auth/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/submits',
      name: 'Submits',
      component: Submits
    },
    {
      path: '/add',
      name: 'AddSubmit',
      component: AddSubmit
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
