<template>
  <div>
    <navbar />
    <index />
  </div>
</template>

<script>
import Index from '@/components/Index'
import Navbar from '@/components/Navbar'

export default {
  components: {
    // Add a reference to the submitNumber component in the components property
    Index,
    Navbar
  }
}
</script>

<style>
</style>
