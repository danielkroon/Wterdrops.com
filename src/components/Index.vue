<template>
  <div id="app">
    <h1 v-if="increasePerDay > 0 ">Water use per day is {{increasePerDay}}(M&#179;)</h1>
    <div class="row">
      <form class="col s12" @submit.prevent="submitForm">
        <div class="row">
          <div class="input-field col s6">
            Please fill in an number:
            <input id="numberInput" class="validate" v-model.number="newNumber" type="number" placeholder="1234" required/>
            <label for="numberInput"></label>
          </div>
        </div>
        <button class="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
   <ul>
    <li v-for="number in submittedNumbers" :key="number.id">
       {{ number }}
     </li>
   </ul>
  </div>
</template>

<script type= "text/javascript">
import moment from 'moment'

export default {
  name: 'app',
  // data function avails data to the template
  data () {
    return {
      // create newNumber array
      newNumber: {},
      // store numbers the user filled in.
      submittedNumbers: [],
      // last submitted numbers
      lastSubmittedNumber: [],
      secondLastSubmittedNumber: [],
      // average use day
      increasePerDay: [],
      averugeUse2p: 0.25
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
      // var b = this.secondLastSubmittedNumber[0].timestamp
      var b = '2018-05-02T20:19:40.928Z'
      let diffDays = a.diff(b, 'days')
      console.log('difference in days between last and second submitted is ' + diffDays)
      let diffStat = Math.abs(this.lastSubmittedNumber[0].number - this.secondLastSubmittedNumber[0].number)
      console.log('the differene is stats is ' + diffStat)
      this.checkIncrease(diffDays, diffStat)
    },
    checkIncrease (diffDays, diffStat) {
      // average use 2p each year = 93 m3
      // average use 2p each day = 0.25 m3
      this.increasePerDay = diffStat / diffDays
      this.increasePerDay.toFixed(2)
      console.log('increase per day is ' + this.increasePerDay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
