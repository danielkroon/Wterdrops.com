<template>
  <div class="submits">
    <h1>submits</h1>
    <div class="row">
      <div class="col s8 offset-s2">
        <div class="submit" v-for="submit in submits" :key="submit.id" >
          <ul class="collection">
            <li class="collection-item">
              <i class="material-icons circle delete" @click="deleteSubmit(submit.id)">delete</i>
              <span><b>ID: </b>{{ submit.id }}</span>
              <p><b>Watermeterstand: </b>{{ submit.number }}</p>
              {{ submit.timestamp }}
              <p><b>Gemiddelde gebruik: </b> {{submit.usage}}</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'submits',
  data () {
    return {
      submits: []
    }
  },
  methods: {
    deleteSubmit (id) {
      // delete doc from firestore
      db.collection('submits').doc(id).delete()
        .then(() => {
          this.submits = this.submits.filter(submit => {
            return submit.id !== id
          })
        })
    }
  },
  created () {
    // fetch data from the firestore
    db.collection('submits').orderBy('timestamp', 'desc').get()
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
   .delete {
    position: absolute;
    cursor: pointer;
    top: 4px;
    right: 4px;
    font-size: 1.4em;
  }
</style>
