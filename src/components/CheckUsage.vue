<template>
  <div class="check-usage">
    <h1 v-if="increasePerDay > 0 ">Water use per day is {{increasePerDay}}(M&#179;)</h1>
    <p >last submitted {{lastSubmitted}}</p>
    <p >second last submitted {{secondLastSubmitted}}</p>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Checkusage',
  data () {
    return {
      // all submits (from firestore)
      submits: [],
      // last submitted numbers
      lastSubmitted: [],
      secondLastSubmitted: [],
      // average use day
      increasePerDay: 0
    }
  },
  methods: {
    checkUsage (submits) {
      console.log(this.submits)
      if (this.submits.length < 1) {
        console.log('submits is empty')
      } else {
        this.lastSubmitted = this.submits[0]
        this.secondLastSubmitted = this.submits[1]
      }
    }
  },
  created () {
    db.collection('submits').orderBy('timestamp', 'desc').get()
      .then(snaptshot => {
        snaptshot.forEach(doc => {
          let submit = doc.data()
          submit.id = doc.id
          this.submits.push(submit)
        })
      }).then(submits => {
        this.checkUsage(submits)
      })
  }
}

// checkDifference () {
//   // define secondLastSubmittedNumber
//   if (this.submittedNumbers.length <= 1) {
//     this.secondLastSubmittedNumber.push(
//       {
//         number: 0,
//         timestamp: moment()
//       }
//     )
//   } else {
//     // empty array
//     this.secondLastSubmittedNumber = []
//     // populate array with secondLastSubmittedNumber
//     this.secondLastSubmittedNumber.push(
//       {
//         number: this.submittedNumbers[this.submittedNumbers.length - 2].number,
//         timestamp: this.submittedNumbers[this.submittedNumbers.length - 2].timestamp
//       }
//     )
//   }
//   console.log('second last submitted number ' + this.secondLastSubmittedNumber[0].number)

//   var a = this.lastSubmittedNumber[0].timestamp
//   // var b = this.secondLastSubmittedNumber[0].timestamp
//   var b = '2018-05-02T20:19:40.928Z'
//   let diffDays = a.diff(b, 'days')
//   console.log('difference in days between last and second submitted is ' + diffDays)
//   let diffStat = Math.abs(this.lastSubmittedNumber[0].number - this.secondLastSubmittedNumber[0].number)
//   console.log('the differene is stats is ' + diffStat)
//   this.checkIncrease(diffDays, diffStat)
// },
// checkIncrease (diffDays, diffStat) {
//   // average use 2p each year = 93 m3
//   // average use 2p each day = 0.25 m3
//   this.increasePerDay = diffStat / diffDays
//   this.increasePerDay.toFixed(2)
//   console.log('increase per day is ' + this.increasePerDay)
// }
// }

</script>

<style>
</style>
