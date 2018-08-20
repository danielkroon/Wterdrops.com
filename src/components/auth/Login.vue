<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">
          <div class="box">
            <h1 class="title">Login</h1>
            <form @submit.prevent="login">
              <b-field label="Email" :message="feedback" :type="type">
                <b-input placeholder="Email" icon="email" type="email" v-model="email">
                </b-input>
              </b-field>
              <b-field label="Password" :message="feedback" :type="type">
                <b-input placeholder="Password" type="password" icon="textbox-password" password-reveal v-model="password">
                </b-input>
              </b-field>
              <button type="submit" class="button is-primary is-fullwidth">Login</button>
              <div class="field">
                <div class="control">
                  <p class="control has-text-centered">
                    <a href="/">
                      Forgot password?
                    </a>
                  </p>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <p class="control has-text-centered">
                    Don't have an account?
                    <a href="/register">
                      <router-link :to="{ name: 'Signup' }">
                        Signup
                      </router-link>
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null,
      type: null
    }
  },
  methods: {
    login () {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user)
            this.$router.push({
              name: 'Dashboard'
            })
          })
          .catch(err => {
            this.feedback = err.message
          })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields.'
        this.type = 'is-danger'
      }
    }
  }
}
</script>

<style>
.login {
  max-width: 400px;
  margin-top: 60px;
}
</style>
