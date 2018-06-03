<template>
  <div>
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    // Add a reference to the AddSubmit component in the components property
    Navbar,
    Footer
  }
}
</script>

<style>
</style>
