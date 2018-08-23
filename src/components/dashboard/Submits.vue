<template>
  <div class="columns is-multiline">
    <div class="column">
      <div class="box notification">
        <div class="heading">
          Recent submitted water meter readings
        </div>
        <div class="title">
          Submits
        </div>
        <b-table :data="previousSubmits" :columns="columns"></b-table>

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
      previousSubmits: [],
      columns: [
        {
          field: 'number',
          label: 'Meter reading',
          sortable: true

        },
        {
          field: 'usage',
          label: 'Average use',
          sortable: true

        },
        {
          field: 'timestamp',
          label: 'Date'
        }
      ]
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
    console.log(this.previousSubmits)
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
  cursor: pointer;
  font-size: 1.4em;
}
</style>
