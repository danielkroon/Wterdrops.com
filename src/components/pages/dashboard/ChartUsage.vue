<template>
  <div class="columns is-multiline">
    <div class="column">
      <div class="box notification">
        <div class="heading">
          Recent submitted water meter readings
        </div>
        <div class="title">
          Submits
        </div>
        <div class="chartjs">
          <chartjs-line :fill="true" :datalabel="'My household usage'" :labels="labels" :data="dataset" :bordercolor="'#42A2FF'" :backgroundcolor="'rgba(66,162,255, 0.5)'" :pointborderwidth="mywidth" :pointbordercolor="mypointbordercolor" :pointhoverborderwidth="hoverwidth" :pointhoverbackgroundcolor="hoverbackgroundcolor" :pointhoverbordercolor="hoverbordercolor" :bind="true"   :options="{responsive: false, maintainAspectRatio: false}"
  :height="90">
          </chartjs-line>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Chartusage',
  props: {
    userSubmitsProp: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
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
      for (let submit of Object.values(this.userSubmitsProp)) {
        this.labels.push(submit.timestamp)
      }
    },
    addChartdataset () {
      for (let submit of Object.values(this.userSubmitsProp)) {
        this.dataset.push(submit.usage)
      }
    },
    formatChartData () {
      // sort previousSubmits array by date descending
      this.userSubmitsProp.sort((a, b) => {
        a = new Date(a.timestamp)
        b = new Date(b.timestamp)
        return a - b
      })
    }
  },
  mounted () {
    this.formatChartData()
    this.addChartLabels()
    this.addChartdataset()
  }
}
</script>

<style>
</style>
