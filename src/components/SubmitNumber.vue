<template>
  <div id="app">
   <form @submit.prevent="submitForm">
     <div>
       <label for="numberInput"></label>
       <input id="numberInput" v-model.number="newNumber" type="number" placeholder="Add number" required/>
     </div>
     <button type="submit">Submit</button>
   </form>

   <ul>
    <li v-for="number in submittedNumbers" :key="number.id">
       {{ number }}
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      // create newNumber array
      newNumber: {},
      // store numbers the user filled in.
      submittedNumbers: [],
      // last submitted numbers
      lastSubmittedNumber: [],
      secondLastSubmittedNumber: []
    }
  },
  methods: {
    submitForm () {
      this.submittedNumbers.push(
        {
          number: this.newNumber,
          timestamp: new Date()
        }
      )
      this.newNumber = ''

      this.lastSubmittedNumber = this.submittedNumbers.slice(-1)[0].number
      this.checkDifference()
    },
    checkDifference () {
      console.log('last submitted number ' + this.lastSubmittedNumber)
      debugger
      if (this.submittedNumbers.length <= 1) {
        this.secondLastSubmittedNumber.push(0)
      } else {
        this.secondLastSubmittedNumber = this.submittedNumbers[this.submittedNumbers.length - 2].number
      }

      console.log('second last submitted number ' + this.secondLastSubmittedNumber)

      let difference = Math.abs(this.lastSubmittedNumber - this.secondLastSubmittedNumber)

      console.log('the differene is ' + difference)

      if (difference > 10) {
        console.log('you are using to much')
      } else {
        console.log('great job')
      }
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
