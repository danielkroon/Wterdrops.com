<template>
  <div id="app">
    <div class="row">
      <form class="col s12" @submit.prevent="addSubmit">
        <div class="row">
          <div class="input-field col s6  offset-m3">
            Please fill in your water meter reading(M&#179;):
            <input id="numberInput" class="validate" v-model.number="number" type="number" placeholder="1234"/>
            <label for="numberInput"></label>
          </div>
        </div>
        <div class="row">
          <div class="col s5 offset-m4">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
          </div>
        <div class="col s3  offset-m5">
          <button class="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'AddSubmit',
  // data function avails data to the template
  data () {
    return {
      submits: [],
      lastSubmitted: null,
      increasePerDay: null,
      // // create number array
      number: 0,
      timestamp: null,
      usage: 0,
      feedback: null,
      currentUser: null
    }
  },
  methods: {
    addSubmit () {
      let user = firebase.auth().currentUser

      // add number
      if (this.number) {
        this.feedback = null

        if (this.submits.length < 1) {
          console.log('submits is empty')
        } else {
          this.lastSubmitted = this.submits[0]
        }

        // calculate the difference in days between last and second submitted with momentJS.
        let a = moment(this.number.timestamp)
        let b = moment(this.lastSubmitted.timestamp)
        let diffDays = a.diff(b, 'days')

        // calculate the difference in days between last and second submitted.
        let diffStat = Math.abs(this.number - this.lastSubmitted.number)
        this.usage = (diffStat / diffDays).toFixed(2)

        // find the user record and the update the users number
        db.collection('users').where('user_id', '==', user.uid).get()
          .then(snapshot => {
            snapshot.forEach((doc) => {
              // update user record in firestore
              console.log(doc)
              db.collection('users').doc(doc.id).update({
                number: this.number,
                timestamp: Date.now(),
                usage: this.usage
              })
            })
          }).then(() => {
            this.$router.push({name: 'Submits'})
          }).catch(err => {
            console.log(err)
          })
      } else {
        this.feedback = 'You must enter a number to submit a new number.'
      }

      //   // add to database
      //   db.collection('submits').add({
      //     number: this.number,
      //     timestamp: Date.now(),
      //     usage: this.usage
      //   }).then(() => {
      //     this.$router.push({name: 'Submits'})
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // } else {
      //   this.feedback = 'You must enter a number to submit a new number.'
      // }
    }
  },
  created () {
    // fetch data from the firestore
    db.collection('submits').orderBy('timestamp', 'desc').get()
      .then(snaptshot => {
        snaptshot.forEach(doc => {
          let submit = doc.data()
          submit.id = doc.id
          this.submits.push(submit)
        })
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   /* label underline focus color */
  input[type=number]:not(.browser-default):focus:not([readonly]) {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }

   .text-centered {
     text-align: center;
   }
</style>
