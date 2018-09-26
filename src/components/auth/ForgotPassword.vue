<template>
  <section>
    <a @click="isComponentModalActive = true">
      Forgot Password?
    </a>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <form @submit.prevent="sendResetMail">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Forgot password?</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Email" :message="feedback">
              <b-input type="email" v-model="resetEmail" placeholder="Your email" required>
              </b-input>
            </b-field>

          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="closeResetMailModal()">Close</button>
            <button class="button is-primary">Reset</button>
          </footer>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  data () {
    return {
      isComponentModalActive: false,
      resetEmail: '',
      feedback: null
    }
  },
  methods: {
    sendResetMail () {
      var auth = firebase.auth()
      var emailAddress = this.resetEmail

      auth.sendPasswordResetEmail(emailAddress).then(() => {
        // Email sent.
        this.sendResetSucces()
      }).catch(err => {
        // Email wasn't sent.
        console.log(this.feedback)
        this.feedback = err.message
      })
    },
    sendResetSucces () {
      this.isComponentModalActive = false

      this.$toast.open({
        message: 'Success! Check your inbox!',
        type: 'is-success',
        duration: 5000
      })
      this.feedback = null
    },
    closeResetMailModal () {
      this.resetEmail = ''
      this.feedback = null
      this.isComponentModalActive = false
    }
  }
}
</script>
