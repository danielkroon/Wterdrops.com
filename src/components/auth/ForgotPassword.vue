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
                        <b-field label="Email">
                            <b-input
                                type="email"
                                v-model="resetEmail"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
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

// const ModalForm = {
//   props: ['resetEmail'],
//   template: `
//             // <form @submit.prevent="sendResetMail">
//             //     <div class="modal-card" style="width: auto">
//             //         <header class="modal-card-head">
//             //             <p class="modal-card-title">Forgot password?</p>
//             //         </header>
//             //         <section class="modal-card-body">
//             //             <b-field label="Email">
//             //                 <b-input
//             //                     type="email"
//             //                     :value="resetEmail"
//             //                     placeholder="Your email"
//             //                     required>
//             //                 </b-input>
//             //             </b-field>

//             //         </section>
//             //         <footer class="modal-card-foot">
//             //             <button class="button" type="button" @click="$parent.close()">Close</button>
//             //             <button class="button is-primary">Reset</button>
//             //         </footer>
//             //     </div>
//             // </form>
//         `
// }

export default {
//   components: {
//     ModalForm
//   },
  data () {
    return {
      isComponentModalActive: false,
      resetEmail: '',
      feedback: null
    }
  },
  methods: {
    sendResetMail () {
      debugger
      var auth = firebase.auth()
      var emailAddress = this.resetEmail

      auth.sendPasswordResetEmail(emailAddress).then(function () {
        // Email sent.
        console.log('email send')
      }).catch(function (error) {
        // An error happened.
        this.feedback = error.message
        console.log(error.message)
      })
    }
  }
}
</script>
