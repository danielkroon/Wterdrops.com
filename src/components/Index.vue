<template>
  <div class="index">
    <cards :submits="submits"/>
    <chartusage />
  </div>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'
import Chartusage from '@/components/ChartUsage'
import Cards from '@/components/Cards'

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
  }

}
</script>

<style>
</style>
