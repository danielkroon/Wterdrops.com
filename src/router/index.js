import Vue from 'vue'
import Router from 'vue-router'
import SubmitNumber from '@/components/SubmitNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SubmitNumber',
      component: SubmitNumber
    }
  ]
})
