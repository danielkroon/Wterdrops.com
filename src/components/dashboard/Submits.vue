<template>
  <div class="submits">
    <h2 class="center">submits</h2>
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="submit" v-for="previousSubmits in previousSubmits" :key="previousSubmits.id" >
          <ul class="collection">
            <li class="collection-item">
              <i class="material-icons circle delete" @click="deleteSubmit(previousSubmits.id)">delete</i>
              <p><b>Meter reading: </b>{{ previousSubmits.number }}</p>
              <p><b>Average use: </b> {{previousSubmits.usage}}</p>
              <p><b>Date: </b>{{ previousSubmits.timestamp }}</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'
import firebase from 'firebase'

export default {
  name: 'submits',
  data () {
    return {
      previousSubmits: []
    }
  },
  methods: {
    deleteSubmit (id) {
      // delete doc from firestore
      db.collection('submits').doc(id).delete()
        .then(() => {
          this.previousSubmits = this.previousSubmits.filter(submit => {
            return submit.id !== id
          })
        })
    }
  },
  created () {
    let ref = db.collection('users')

    // get current user
    ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data()
          this.user = doc.id
        })
      })
      .then(() => {
        // fetch the user previous submits from the firestore
        db.collection('submits').where('user', '==', this.user).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              let submit = doc.data()
              submit.id = doc.id
              submit.timestamp = moment(doc.data().timestamp).format('lll')
              this.previousSubmits.push(submit)

              // sort previousSubmits array by date
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
   .delete {
    position: absolute;
    cursor: pointer;
    top: 4px;
    right: 4px;
    font-size: 1.4em;
  }
</style>
