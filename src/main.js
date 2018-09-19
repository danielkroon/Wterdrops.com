// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'chart.js'
import 'hchs-vue-charts'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Buefy from 'buefy'
import VueAnalytics from 'vue-analytics'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)

Vue.use(window.VueCharts)

Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-125402185-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})

let app = null

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(() => {
  // init app if not already created
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
