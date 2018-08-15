<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">
          <div class="box">
            <h1 class="title">Login</h1>
            <form @submit.prevent="login">
              <b-field label="Email" message="feedback">
                <b-input placeholder="Email" icon="email" type="email" v-model="email">
                </b-input>
              </b-field>
              <b-field label="Password">
                <b-input placeholder="Password" type="password" icon="textbox-password" password-reveal v-model="password">
                </b-input>
              </b-field>
              <button type="submit" class="button is-primary is-fullwidth">Login</button>
              <div class="field">
                <div class="control">
                  <p class="control has-text-centered"><a href="/">
                                                  Forgot password?
                                              </a></p>
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





  <!-- <div class="login container">
            <form @submit.prevent="login" class="card-panel">
              <h2 class="center">Login</h2>
              <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
              </div>
              <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
              </div>
              <div class="field">
                <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                <button class="btn blue lighten-1">Login</button>
              </div>
            </form>
          </div> -->
</template>

<script>
  import firebase from "firebase";
  export default {
    name: "login",
    data() {
      return {
        email: null,
        password: null,
        feedback: null
      };
    },
    methods: {
      login() {
        if (this.email && this.password) {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              console.log(cred.user);
              this.$router.push({
                name: "Dashboard"
              });
            })
            .catch(err => {
              this.feedback = err.message;
            });
          this.feedback = null;
        } else {
          this.feedback = "Please fill in both fields.";
        }
      }
    }
  };
</script>

<style>
  .login {
    max-width: 400px;
    margin-top: 60px;
  }
</style>
