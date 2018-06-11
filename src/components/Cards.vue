<template>
<div class="cards">
  <div class="row">
    <div class="col s6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Similar Households</span>
          <p>1234</p>
        </div>
      </div>
    </div>
    <div class="col s6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Your Household</span>
          <p>{{ submits[0].usage }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: [
    'submits'
  ],
  data () {
    return {

    }
  }
}
</script>

<style>
.cards {
  margin: 20px 20px 0 20px;
}
</style>
