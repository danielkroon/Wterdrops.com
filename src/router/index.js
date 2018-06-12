import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Submits from '@/components/Submits'
import AddSubmit from '@/components/AddSubmit'
import ChartUsage from '@/components/dashboard/ChartUsage'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/usage',
      name: 'Chartusage',
      component: ChartUsage
    }
  ]
})
