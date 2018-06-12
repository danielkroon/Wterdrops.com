<template>
  <div class="check-usage">
    <div class="row">
      <div class="col s12">
        <div class="chart">
          <chartjs-line
            :fill="true"
            :datalabel="'My consumption'"
            :labels="labels"
            :data="dataset"
            :bordercolor="'#1976D2'"
            :backgroundcolor="'rgba(25,118,210, 0.5)'"
            :pointborderwidth="mywidth"
            :pointbordercolor="mypointbordercolor"
            :pointhoverborderwidth="hoverwidth"
            :pointhoverbackgroundcolor="hoverbackgroundcolor"
            :pointhoverbordercolor="hoverbordercolor"
            :bind="true">
          </chartjs-line>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chartusage',
  data () {
    return {
      // all submits (from firestore)
      submits: [],
      // last submit
      myUsage: null,
      avargeUsage: null,
      // chart data
      labels: [],
      dataset: [],
      // hover point
      mywidth: 3,
      mypointbordercolor: '#1976D2',
      hoverwidth: 3,
      hoverbackgroundcolor: '#636b6f',
      hoverbordercolor: '#ffd663'
    }
  },
  methods: {
    addChartLabels () {
      for (let submit of Object.values(this.submits)) {
        this.labels.push(submit.timestamp)
      }
    },
    addChartdataset () {
      for (let submit of Object.values(this.submits)) {
        this.dataset.push(submit.usage)
      }
    },
    addUsage () {
      this.myUsage = this.submits[0].usage
      // this.avargeUsage = submits.
    }
  },
  created () {
    db.collection('submits').orderBy('timestamp', 'desc').get()
      .then(snaptshot => {
        snaptshot.forEach(doc => {
          let submit = doc.data()
          submit.id = doc.id
          submit.timestamp = moment(doc.data().timestamp).format('L')
          this.submits.push(submit)
        })
      }).then(submits => {
        this.addChartLabels()
        this.addChartdataset()
        this.addUsage()
      })
  }
}
</script>

<style>
.check-usage {
  margin: 20px 20px 30px 20px;
  box-shadow: 0 4px 70px -18px #707070;
  padding: 10px;
}

.chart {
  padding: 10px;
}
</style>
