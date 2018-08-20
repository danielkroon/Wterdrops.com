<template>
<div class="cards">
  <div class="col m6 s12">
    <div class="card">
      <div class="card-content">
        <div>Usage in similar households</div>
        <div class="card-value">{{ similarHousehold }} (M&#179;)</div>
      </div>
    </div>
  </div>
  <div class="col m6 s12">
    <div class="card">
      <div class="card-content">
        <div>Usage in your household</div>
        <div class="card-value" v-if="userDataProp.usage >= 0">{{ userDataProp.usage }} (M&#179;)</div>
        <div class="card-value" v-else>No data to display.
          <a href="" class="waves-effect waves-light btn  blue lighten-1">
              <router-link :to="{ name: 'AddSubmit' }">
                    Add data
              </router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    userDataProp: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      similarHousehold: 0
    }
  },
  methods: {
    checkSimilarHousehold () {
      let household = this.userDataProp.household

      if (household === 1) {
        // 1-person households use 52,000 litres per year.
        this.similarHousehold = 0.146
      } else if (household === 2) {
        // 2-person households use 99,000 litres per year
        this.similarHousehold = 0.278
      } else if (household === 3) {
        // 3-person households use 145,000 litres per year
        this.similarHousehold = 0.407
      } else if (household === 4 || 'More than 4') {
        // 4-person households use 191,000 litres per year
        this.similarHousehold = 0.537
      } else {
        this.similarHousehold = 'Please add your household size in My Account.'
      }
    }
  },
  updated () {
    this.checkSimilarHousehold()
  }
}
</script>

<style>
.card-value {
  font-size: 26px;
  font-weight: 300;
}
</style>
