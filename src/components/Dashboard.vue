<template>
  <section class="column">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="title has-text-primary">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
    <cards :userDataProp="currentUserData" />
    <chartusage v-if="previousSubmits.length > 0" :user-submits-prop="previousSubmits" />
    <submits />
    <fab />
  </section>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import moment from 'moment'
import Chartusage from '@/components/dashboard/ChartUsage'
import Cards from '@/components/dashboard/Cards'
import Submits from '@/components/dashboard/Submits'
import Fab from '@/components/Fab'

export default {
  name: 'Dashboard',
  components: {
    Chartusage,
    Cards,
    Submits,
    Fab
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
        db.collection('submits').where('user', '==', this.currentUserData.user_id).get()
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
.dashboard {
  max-width: 1280px;
  margin-top: 20px;
  margin: 0 auto;
  width: 85%;
}
</style>
