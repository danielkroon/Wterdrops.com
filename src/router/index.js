import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SubmitNumber from '@/components/SubmitNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/submit',
      name: 'SubmitNumber',
      component: SubmitNumber
    }
  ]
})
