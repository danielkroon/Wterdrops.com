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
.body {
  background-color: #eee;
}
</style>
