<template>
    <div class="home">
      <h1>home</h1>
      <div v-for="submit in submits" :key="index">
        <ul class="collection">
          <li v-for="submit in submits" :key="index" class="collection-item">
            <i class="material-icons circle">insert_chart</i>
            <span>ID: {{ submit.id }}</span>
            <p>Watermeterstand: {{ submit.number }}</p>
            {{ submit.timestamp }}
           </li>
        </ul>
      </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'index',
  data () {
    return {
      submits: []
    }
  },
  created () {
    // fetch data from the firestore
    db.collection('submits').get()
      .then(snaptshot => {
        snaptshot.forEach(doc => {
          let submit = doc.data()
          submit.id = doc.id
          this.submits.push(submit)
        })
      })
  }
}
</script>

<style>

</style>
