<template>
  <div class="submits">
    <div class="col s12">
    <div class="card">
      <div class="card-content">
        <!-- <div class="submit" v-for="previousSubmits in previousSubmits" :key="previousSubmits.id" >
          <ul class="collection">
            <li class="collection-item">
              <i class="material-icons circle delete" @click="deleteSubmit(previousSubmits.id)">delete</i>
              <p><b>Meter reading: </b>{{ previousSubmits.number }}</p>
              <p><b>Average use: </b> {{previousSubmits.usage}}</p>
              <p><b>Date: </b>{{ previousSubmits.timestamp }}</p>
            </li>
          </ul>
        </div> -->

         <table>
            <thead>
              <tr>
                <th>Meter reading</th>
                <th>Average use</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
               </thead>
              <tbody>
              <tr class="submit" v-for="previousSubmits in previousSubmits" :key="previousSubmits.id" >
                  <td>{{ previousSubmits.number }}</td>
                  <td>{{previousSubmits.usage}}</td>
                  <td>{{ previousSubmits.timestamp }}</td>
                  <td>
                    <i class="material-icons circle delete" @click="deleteSubmit(previousSubmits.id)">delete</i>
                  </td>
                </tr>
              </tbody>

          </table>
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
    cursor: pointer;
    font-size: 1.4em;
  }
</style>
