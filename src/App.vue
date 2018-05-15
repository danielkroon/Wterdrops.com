<template>
  <div>
    <navbar />
    <submit-number />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import SubmitNumber from './components/SubmitNumber'

export default {
  components: {
    // Add a reference to the submitNumber component in the components property
    SubmitNumber,
    Navbar
  }
}
</script>

<style>
</style>
