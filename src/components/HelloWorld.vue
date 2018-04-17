<template>
  <div id="app">
   <ul>
    <li v-for="number in inputNumbers" :key="number.id">
       {{ number }}
     </li>
   </ul>
   <input 
      v-model="newNumber"
      @keyup.enter="addNumber"
      placeholder="Add number"
      />
  </div>
</template>

<script>
export default {
  el: '#app',
  data: {
    newNumber: '',
    inputNumbers: [
      '1',
      '2'
    ]
  },
  methods: {
  addNumber() {
    debugger
    this.inputNumbers.push(this.newNumber)
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
