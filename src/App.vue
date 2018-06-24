<template>
  <div class="body">
    <navbar />
    <router-view />
    <Foot />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Foot from '@/components/layout/Foot'

export default {
  components: {
    Navbar,
    Foot
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

.body {
  background-color: #eee;
  font-family: 'Lato', Arial, Helvetica, sans-serif
}
</style>
