<template>
  <div class="dashboard">
    <cards :userDataProp="currentUserData"/>
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
  name: 'Dashboard',
  components: {
    Chartusage,
    Cards
  },
  data () {
    return {
      currentUserData: {}
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
          console.log(this.currentUserData)
        })
      })
  }
}
</script>

<style>
</style>
