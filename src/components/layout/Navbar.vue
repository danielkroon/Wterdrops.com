<template>
  <nav class="navbar is-transparant has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="Wterdrops">
        </router-link>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link :to="{ name: 'Faq' }">
            FAQ
          </router-link>
        </a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control" v-if="!user">
            <a class="button">
              <router-link :to="{ name: 'Login' }">
                Login
              </router-link>
            </a>
          </p>
          <p class="control" v-if="!user">
            <a class="button white-text is-primary">
              <router-link :to="{ name: 'Signup' }">
                Signup
              </router-link>
            </a>
          </p>
          <p class="control" v-if="user">
            <a class="button  white-text is-primary">
              <router-link :to="{ name: 'Dashboard' }">
                Dashboard
              </router-link>
            </a>
          </p>
          <a class="button" v-if="user">
            <a @click="logout">Logout</a>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'Navbar',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' })
      })
    }
  },
  created () {
    // let user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }
}
</script>

<style lang="scss">
.white-text {
  // ugly but Bulma requires me to do this
  color: #fff !important;
  a {
    color: #fff !important;
  }
}

.has-shadow {
  box-shadow: 0 2px 0 0 #f5f5f5;
}
</style>
