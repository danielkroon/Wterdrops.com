<template>
  <div class="check-usage">
    <div>The average water use per day in an 2 person household is {{averageUse}}(M&#179;)</div>
    <div v-if="increasePerDay > 0 ">Your household is using {{increasePerDay}}(M&#179;) water per day.</div>
    <div v-if="increasePerDay > averageUse">That is too much. Try using less water the coming days.</div>
    <div v-else>You are doing a great job! Keep it up :)</div>
    <p >last submitted {{lastSubmitted}}</p>
    <p >second last submitted {{secondLastSubmitted}}</p>
    <div><chartjs-line :datalabel="'water use'" :labels="labels" :data="dataset" :bind="true"></chartjs-line></div>
  </div>
</template>

<script>
import moment from 'moment'
import db from '@/firebase/init'

export default {
  name: 'Checkusage',
  data () {
    return {
      // all submits (from firestore)
      submits: [],
      // last submitted number
      lastSubmitted: null,
      secondLastSubmitted: null,
      // average use day
      increasePerDay: null,
      averageUse: 0.25,
      // charts
      labels: [],
      dataset: [65, 59, 80, 81, 56, 55, 40]
    }
  },
  methods: {
    checkUsage (submits) {
      if (this.submits.length < 1) {
        console.log('submits is empty')
      } else {
        this.lastSubmitted = this.submits[0]
        this.secondLastSubmitted = this.submits[1]
      }
      // calculate the difference in days between last and second submitted with momentJS.
      let a = moment(this.lastSubmitted.timestamp)
      let b = moment(this.secondLastSubmitted.timestamp)
      let diffDays = a.diff(b, 'days')
      // calculate the difference in days between last and second submitted.
      let diffStat = Math.abs(this.lastSubmitted.number - this.secondLastSubmitted.number)
      this.checkIncrease(diffDays, diffStat)
    },
    checkIncrease (diffDays, diffStat) {
      this.increasePerDay = diffStat / diffDays
      // number is rounded if necessary.
      this.increasePerDay.toFixed(2)
      this.addChartLabels()
    },
    addChartLabels () {
      for (let submit of Object.values(this.submits)) {
        this.labels.push(submit.timestamp)
        console.log(this.dataset)
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
</script>

<style>
</style>
