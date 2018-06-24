<template>
  <div class="dashboard">
    <cards :userDataProp="currentUserData"/>
    <chartusage v-if="previousSubmits.length > 0" :user-submits-prop="previousSubmits" />
    <submits />
  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'
import Chartusage from '@/components/dashboard/ChartUsage'
import Cards from '@/components/dashboard/Cards'
import Submits from '@/components/dashboard/Submits'

export default {
  name: 'Dashboard',
  components: {
    Chartusage,
    Cards,
    Submits
  },
  data () {
    return {
      currentUserData: {},
      previousSubmits: []
    }
  },
  created () {
    let user = firebase.auth().currentUser

    // find the user record
    db.collection('users').where('user_id', '==', user.uid).get()
      .then(snapshot => {
        snapshot.forEach((doc) => {
          let userData = doc.data()
          userData.timestamp = moment(doc.data().timestamp).format('lll')
          this.currentUserData = userData
        })
      })
      .then(() => {
        // fetch the user previous submits from the firestore
        db.collection('submits').where('user', '==', this.currentUserData.alias).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              let submit = doc.data()
              submit.id = doc.id
              submit.timestamp = moment(doc.data().timestamp).format('lll')
              this.previousSubmits.push(submit)

              // sort previousSubmits array by date ascending
              this.previousSubmits.sort((a, b) => {
                a = new Date(a.timestamp)
                b = new Date(b.timestamp)
                return b - a
              })
            })
          })
      })
  }
}
</script>

<style>
</style>
