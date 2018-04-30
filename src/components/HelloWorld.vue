<template>
  <div id="app">
   <ul>
    <li v-for="number in inputNumbers" :key="number.id">
       {{ number }}
     </li>
   </ul>

   <form @submit.prevent="submitForm">
     <div>
       <label for="numberInput"></label>
       <input id="numberInput" v-model.number="newNumber" type="number" placeholder="Add number" required/>
     </div>
     <button type="submit">Submit</button>
   </form>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      // newNumber: {},
      // store numbers the user filled in.
      inputNumbers: [
        {
          number: 0,
          timestamp: ''
        },
        {
          number: 0,
          timestamp: ''
        }
      ]
    }
  },
  methods: {
    submitForm () {
      this.inputNumbers.push(
        {
          newNumber: this.newNumber,
          timestamp: new Date()
        }
      )
      this.newNumber = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
