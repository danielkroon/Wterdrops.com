<template>
  <div class="index">
    <chartusage />
    <cards />
  </div>
</template>

<script>
import Chartusage from '@/components/ChartUsage'
import Cards from '@/components/Cards'

export default {
  name: 'Index',
  components: {
    Chartusage,
    Cards
  },
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
