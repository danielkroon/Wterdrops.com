<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"> </div>
        <div class="column is-half">
          <div class="box">
            <h1 class="title">Signup</h1>
            <form @submit.prevent="signup">
              <b-field label="Email" :message="feedback" :type="type">
                <b-input placeholder="Email" icon="email" type="email" v-model="email">
                </b-input>
              </b-field>
              <b-field label="Password" :message="feedback" :type="type">
                <b-input placeholder="Password" icon="textbox-password" type="password" password-reveal v-model="password">
                </b-input>
              </b-field>
              <b-field label="Alias" :message="feedback" :type="type">
                <b-input placeholder="Alias" icon="account" type="text" v-model="alias" required>
                </b-input>
              </b-field>
              <b-field label="Household size">
                <b-select placeholder="Select household size" v-model="household" required>
                  <option v-for="option in household" :value="option.value" :key="option.value">
                    {{ option }}
                  </option>
                </b-select>
              </b-field>
              <button type="submit" class="button is-primary is-fullwidth">Signup</button>
            </form>
          </div>
        </div>

        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      household: [1, 2, 3, 4, 'More than 4'],
      alias: null,
      feedback: null,
      slug: null,
      type: null
    }
  },
  methods: {
    signup () {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = 'This alias already exists'
          } else {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  household: this.household,
                  user_id: cred.user.uid
                })
              }).then(() => {
                this.$router.push({ name: 'Dashboard' })
              })
              .catch(err => {
                console.log(err)
                this.feedback = err.message
              })
            this.feedback = 'This alias is free to use'
          }
        })
        console.log(this.slug)
      } else {
        this.feedback = 'You must enter all fields'
      }
    }
  }
}
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}

.signup h2 {
  font-size: 2.4em;
}

.signup .field {
  margin: 0 0 16px 0;
}
</style>
