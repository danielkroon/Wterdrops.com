<template>
  <div>
    <submit-number></submit-number>
  </div>
</template>

<script>
import SubmitNumber from './components/SubmitNumber'

export default {
  components: {
    // Add a reference to the submitNumber component in the components property
    SubmitNumber
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
