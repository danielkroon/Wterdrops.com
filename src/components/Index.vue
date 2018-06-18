<template>
  <div class="index">
    <cards :submits="submits"/>
    <chartusage />
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'
import Chartusage from '@/components/dashboard/ChartUsage'
import Cards from '@/components/dashboard/Cards'

export default {
  name: 'Index',
  components: {
    Chartusage,
    Cards
  },
  data () {
    return {
      submits: []
    }
  },
  created () {
    // fetch data from the firestore
    db.collection('submits').orderBy('timestamp', 'desc').get()
      .then(snaptshot => {
        snaptshot.forEach(doc => {
          let submit = doc.data()
          submit.id = doc.id
          submit.timestamp = moment(doc.data().timestamp).format('lll')
          this.submits.push(submit)
        })
      })
  },
  mounted () {
    console.log(firebase.auth().currentUser)
  }
}
</script>

<style>
</style>
