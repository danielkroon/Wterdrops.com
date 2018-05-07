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
import moment from 'moment'
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
          timestamp: moment()
        }
      )
      this.newNumber = ''

      if (this.lastSubmittedNumber.length > 1) {
        this.lastSubmittedNumber[0].push(
          {
            number: this.submittedNumbers.slice(-1)[0].number,
            timestamp: this.submittedNumbers.slice(-1)[0].timestamp
          }
        )
      } else {
        // empty array
        this.lastSubmittedNumber = []
        // populate array with new lastSubmittedNumber
        this.lastSubmittedNumber.push(
          {
            number: this.submittedNumbers.slice(-1)[0].number,
            timestamp: this.submittedNumbers.slice(-1)[0].timestamp
          }
        )
      }
      console.log('last submitted number ' + this.lastSubmittedNumber[0].number)
      this.checkDifference()
    },
    checkDifference () {
      // define secondLastSubmittedNumber
      if (this.submittedNumbers.length <= 1) {
        this.secondLastSubmittedNumber.push(
          {
            number: 0,
            timestamp: moment()
          }
        )
      } else {
        // empty array
        this.secondLastSubmittedNumber = []
        // populate array with secondLastSubmittedNumber
        this.secondLastSubmittedNumber.push(
          {
            number: this.submittedNumbers[this.submittedNumbers.length - 2].number,
            timestamp: this.submittedNumbers[this.submittedNumbers.length - 2].timestamp
          }
        )
      }
      console.log('second last submitted number ' + this.secondLastSubmittedNumber[0].number)

      var a = this.lastSubmittedNumber[0].timestamp
      var b = this.secondLastSubmittedNumber[0].timestamp
      // var b = '2018-04-02T20:19:40.928Z'
      let diffDays = a.diff(b, 'days')
      console.log('difference in days between last and second submitted is ' + diffDays)

      let diffStat = Math.abs(this.lastSubmittedNumber - this.secondLastSubmittedNumber)
      console.log('the differene is stats is ' + diffStat)

      if (diffStat > 10) {
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
