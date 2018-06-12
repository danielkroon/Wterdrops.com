<template>
<div class="cards">
  <div class="row no-margin ">
    <div class="col s6">
      <div class="card blue darken-2">
        <div class="card-content white-text">
          <span class="card-title">1234 (M&#179;)</span>
          <p>Similar Households</p>
        </div>
      </div>
    </div>
    <div class="col s6">
      <div class="card blue darken-2">
        <div class="card-content white-text">
          <span class="card-title">{{ submits[0].usage }} (M&#179;)</span>
          <p>Your Household</p>
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
  margin: 20px 20px 30px 20px;
  box-shadow: 0 4px 70px -18px #707070;
  padding: 10px;
}

.no-margin {
  margin: 0px;
}
</style>
