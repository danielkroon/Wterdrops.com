<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"> </div>
        <div class="column is-half">
          <div class="box">
            <div class="columns">
              <div class="column is-6">
                <figure class="image is-square">
                  <img src="@/assets/watermeter.svg">
                </figure>
              </div>
              <div class="column is-6">
                <p class="title" style="margin-top: 6px">
                  Submit meter reading
                </p>
                <p class="subtitle" style="margin-top: 1px">
                  Enter all the digits which are before the comma on your water meter.
                </p>
                <div class="field">
                  <div class="control">
                    <p class="control">
                      <a>
                        <router-link :to="{ name: 'Faq' }">
                          Where is my meter located?
                        </router-link>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <p>
              <strong>Select a number (M&#179;)</strong>
            </p>
            <form @submit.prevent="addSubmit">
              <b-field :message="feedback" :type="type">
                <b-input placeholder="1234" icon="counter" type="number" v-model.number="number" required>
                </b-input>
              </b-field>
              <b-field label="Select a date">
                <b-datepicker placeholder="Click to select..." icon="calendar-today" v-model="timestamp" required>
                </b-datepicker>
              </b-field>
              <button type="submit" class="button is-primary is-fullwidth">Submit</button>
            </form>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import db from '@/firebase/init'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'AddSubmit',
  metaInfo: {
    // specify a metaInfo.title, this title will be used
    title: 'Add',
    // all titles will be injected into this template
    titleTemplate: '%s | Wterdrops.com'
  },
  // data function avails data to the template
  data () {
    return {
      feedback: null,
      // data to calculate usage
      previousSubmits: [],
      lastSubmitted: null,
      // submit data
      number: 0,
      timestamp: null,
      usage: 0,
      // current user
      user: null,
      type: null
    }
  },
  methods: {
    addSubmit () {
      // add number
      if (this.number) {
        this.feedback = null

        if (this.previousSubmits.length < 1) {
          this.usage = 0.278
        } else {
          this.lastSubmitted = this.previousSubmits[0]

          // format timestamp of last submitted to UTC format
          this.timestamp = moment.utc(this.timestamp).format()

          // calculate the difference in days between last and second submitted with momentJS.
          let a = moment(this.timestamp)
          let b = moment(this.lastSubmitted.timestamp)
          let diffDays = a.diff(b, 'days')

          // calculate the difference in days between last and second submitted.
          let diffStat = Math.abs(this.number - this.lastSubmitted.number)
          this.usage = (diffStat / diffDays).toFixed(2)
          parseFloat(this.usage)
        }

        // add submit to submits collection in firestore
        db.collection('submits').add({
          user: this.user,
          number: this.number,
          timestamp: moment.utc(this.timestamp).format(),
          usage: this.usage
        })
          .then(() => {
            db.collection('users').where('user_id', '==', this.user).get()
              .then(snapshot => {
                snapshot.forEach((doc) => {
                  // update user record in firestore
                  db.collection('users').doc(doc.id).update({
                    usage: this.usage
                  })
                })
              })
          })
          .then(() => {
            this.$router.push({ name: 'Dashboard' })
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
          this.user = doc.data().user_id
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
            })
          })
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* label underline focus color */
input[type="number"]:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

.text-centered {
  text-align: center;
}
</style>
