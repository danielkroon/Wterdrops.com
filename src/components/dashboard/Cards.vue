<template>
<div class="cards">
  <div class="row no-margin ">
    <div class="col s6">
      <div class="card blue darken-2">
        <div class="card-content white-text">
          <p>Usage in similar households</p>
          <span class="card-title">{{ similarHousehold }} (M&#179;)</span>
        </div>
      </div>
    </div>
    <div class="col s6">
      <div class="card blue darken-2">
        <div class="card-content white-text">
           <p>Usage in your household</p>
          <span class="card-title" v-if="userDataProp.usage >= 0">{{ userDataProp.usage }} (M&#179;)</span>
          <span class="card-title" v-else>No data to display.
            <a href="" class="waves-effect waves-light btn  blue lighten-1">
                <router-link :to="{ name: 'AddSubmit' }">
                      Add data
                </router-link>
            </a>
          </span>
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
      } else if (household >= 4) {
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
.cards {
  margin: 20px 20px 30px 20px;
  box-shadow: 0 4px 70px -18px #707070;
  padding: 10px;
}

.no-margin {
  margin: 0px;
}

a {
  color: white;
}
</style>
