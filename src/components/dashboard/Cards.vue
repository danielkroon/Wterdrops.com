<template>
  <div class="columns is-multiline">
    <div class="column">
      <div class="box notification is-primary">
        <div class="heading">
          Usage in similar households
        </div>
        <div class="title">
          {{ similarHousehold }} (M&#179;)
        </div>
      </div>
    </div>
    <div class="column">
      <div class="box notification is-primary">
        <div class="heading">
          Usage in your household
        </div>
        <div class="title" v-if="userDataProp.usage >= 0">
          {{ userDataProp.usage }} (M&#179;)
        </div>
        <div v-else>
          <div class="title">
            No data to display.
          </div>
          <a class="no-text-decoration button">
            <router-link :to="{ name: 'AddSubmit' }">
              Add data
            </router-link>
          </a>
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

<style lang="scss">
.no-text-decoration {
  a {
    text-decoration: none !important;
  }
}
</style>
