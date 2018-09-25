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
                <b-input placeholder="Email" icon="email" type="email" v-model="email" required>
                </b-input>
              </b-field>
              <b-field label="Password" :message="feedback" :type="type">
                <b-input placeholder="Password" icon="textbox-password" type="password" password-reveal v-model="password" required>
                </b-input>
              </b-field>
              <b-field label="Alias" :message="feedback" :type="type">
                <b-input placeholder="Alias" icon="account" type="text" v-model="alias" required>
                </b-input>
              </b-field>
              <b-field label="Household size">
                <b-input placeholder="Household size" icon="counter" type="number" v-model.number="household" required>
                </b-input>
              </b-field>
              <button type="submit" class="button is-primary is-fullwidth">Signup</button>
            </form>
            <div class="terms-signup">
              <p>When you continue, you agree to our
                <a>
                  <router-link :to="{ name: 'Terms' }">
                    Terms of Service.
                  </router-link>
                </a>
              </p>
              <p>We will manage information about you as described in our
                <a>
                  <router-link :to="{ name: 'Terms' }">
                    Privacy policy.
                  </router-link>
                </a>
                and
                 <a>
                  <router-link :to="{ name: 'Cookie' }">
                    Cookie policy.
                  </router-link>
                </a>
              </p>
              </div>
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
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'Signup',
  metaInfo: {
    // specify a metaInfo.title, this title will be used
    title: 'Signup',
    // all titles will be injected into this template
    titleTemplate: '%s | Wterdrops.com'
  },
  data () {
    return {
      email: null,
      password: null,
      household: null,
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
          }
        })
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

.terms-signup {
  margin-top: 15px;
}
</style>
