<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    // Add a reference to the submitNumber component in the components property
    Navbar
  }
}
</script>

<style>
</style>
