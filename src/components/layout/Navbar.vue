<template>
    <div class="navbar">
        <nav class="nav-extend blue darken-2">
            <div class="nav-content">
                <router-link to="/">
                    <span class="nav-title">Waterstats</span>
                </router-link>
                <ul class="right hide-on-small-and-down">
                    <li v-if="user">
                        <a href="" class="waves-effect waves-light btn  blue lighten-1">
                            <router-link :to="{ name: 'AddSubmit' }">
                                 Add
                            </router-link>
                        </a>
                    </li>
                    <li v-if="!user">
                      <router-link :to="{ name: 'Signup' }">
                            Signup
                      </router-link>
                    </li>
                    <li v-if="!user">
                      <router-link :to="{ name: 'Login' }">
                            Login
                      </router-link>
                    </li>
                    <li v-if="user">
                      <a>{{ user.email }}</a>
                    </li>
                    <li v-if="user">
                      <a @click="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'

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

<style>
.navbar .nav-title {
    padding: 0px 0px 0px 10px;
}
</style>
