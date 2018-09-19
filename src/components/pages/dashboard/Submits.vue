<template>
<div class="columns is-multiline">
    <div class="column">
      <div class="box notification">
  <section>
    <b-field grouped group-multiline>
      <div class="control">
        <button class="button field is-danger" @click="deleteSubmit(checkedRows)">
          <b-icon icon="close"></b-icon>
          <span>Delete checked</span>
        </button>
      </div>

      <b-select v-model="perPage" :disabled="!isPaginated">
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="15">15 per page</option>
        <option value="20">20 per page</option>
      </b-select>
      <div class="control">
        <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
      </div>
      <div class="control is-flex">
        <b-switch v-model="isPaginated">Paginated</b-switch>
      </div>
      <div class="control is-flex">
        <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
      </div>
    </b-field>

    <b-table :data="previousSubmits" :paginated="isPaginated" :per-page="perPage" :current-page.sync="currentPage" :pagination-simple="isPaginationSimple" :checked-rows.sync="checkedRows" :is-row-checkable="(row) => row.id !== 3" checkable>

      <template slot-scope="props">
        <b-table-column field="number" label="Meter reading" sortable numeric centered>
          {{ props.row.number }}
        </b-table-column>

        <b-table-column field="usage" label="Average use" sortable numeric centered>
          {{ props.row.usage }}
        </b-table-column>

        <b-table-column field="timestamp" label="Date" sortable centered>
          <span class="tag is-success">
            {{ props.row.timestamp }}
          </span>
        </b-table-column>

      </template>
      <template slot="bottom-left">
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </b-table>
  </section>
      </div>
       </div>
        </div>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'submits',
  data () {
    return {
      previousSubmits: [],
      checkedRows: [],
      isPaginated: true,
      isPaginationSimple: false,
      currentPage: 1,
      perPage: 5
    }
  },
  methods: {
    deleteSubmit (checkedRows) {
      // make a array with the ID's of the checkec rows
      let checkedIDs = checkedRows.map(a => a.id)

      // delete doc from firestore
      checkedIDs.forEach(id => {
        db.collection('submits').doc(id).delete()
          .then(() => {
            this.previousSubmits = this.previousSubmits.filter(submit => {
              return submit.id !== id
            })
          })
      })
    }
  },
  created () {
    let ref = db.collection('users')

    // get current user
    ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data()
          this.user = doc.data().user_id
        })
      })
      .then(() => {
        // fetch the user previous submits from the firestore
        db.collection('submits').where('user', '==', this.user).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              let submit = doc.data()
              submit.id = doc.id
              submit.timestamp = moment(doc.data().timestamp).format('lll')
              this.previousSubmits.push(submit)

              // sort previousSubmits array by date
              this.previousSubmits.sort((a, b) => {
                a = new Date(a.timestamp)
                b = new Date(b.timestamp)
                return b - a
              })
            })
          })
      })
  }
}
</script>

<style>
</style>
