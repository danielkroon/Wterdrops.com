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
      feedback: null,
      // data to calculate usage
      previousSubmits: [],
      lastSubmitted: null,
      increasePerDay: null,
      // submit data
      number: 0,
      timestamp: null,
      usage: 0,
      // current user
      user: null
    }
  },
  methods: {
    addSubmit () {
      // add number
      if (this.number) {
        this.feedback = null

        if (this.previousSubmits.length < 1) {
          console.log('usage is 0')
          this.usage = 0
        } else {
          this.lastSubmitted = this.previousSubmits[0]

          // calculate the difference in days between last and second submitted with momentJS.
          let a = moment(this.number.timestamp)
          let b = moment(this.lastSubmitted.timestamp)
          let diffDays = a.diff(b, 'days')

          // calculate the difference in days between last and second submitted.
          let diffStat = Math.abs(this.number - this.lastSubmitted.number)
          this.usage = (diffStat / diffDays).toFixed(2)
        }

        // add submit to submits collection in firestore
        db.collection('submits').add({
          user: this.user,
          number: this.number,
          timestamp: Date.now(),
          usage: this.usage
        })
          .then(() => {
            this.$router.push({name: 'Submits'})
          }).catch(err => {
            console.log(err)
          })
      } else {
        this.feedback = 'You must enter a number to submit a new number.'
      }
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
          console.log(this.user)
        })
      })
      .then(() => {
        // fetch the user previous submits from the firestore
        db.collection('submits').where('user', '==', this.user).get()
          .then(snapshot => {
            // console.log(snapshot)
            snapshot.forEach(doc => {
              let submit = doc.data()
              submit.id = doc.id
              submit.timestamp = moment(doc.data().timestamp).format('lll')
              this.previousSubmits.push(submit)
              console.log(this.previousSubmits)
            })
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
