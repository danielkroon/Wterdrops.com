<template>
  <div id="app">
    <div class="row">
      <form class="col s12" @submit.prevent="addSubmit">
        <div class="row">
          <div class="input-field col s6  offset-m3">
            Vul je watermeterstand(M&#179;) in:
            <input id="numberInput" class="validate" v-model.number="number" type="number" placeholder="1234"/>
            <label for="numberInput"></label>
          </div>
        </div>
        <div class="row">
          <div class="col s5 offset-m4">
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
          </div>
        <div class="col s3  offset-m5">
          <button class="btn waves-effect waves-light blue lighten-1" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddSubmit',
  // data function avails data to the template
  data () {
    return {
      // // create number array
      number: null,
      timestamp: '',
      feedback: null,
      slug: null
    }
  },
  methods: {
    addSubmit () {
      if (this.number) {
        this.feedback = null
        // create a slug
        this.timestamp = moment().format('lll')
        this.slug = slugify(this.timestamp, {
          replacement: '-',
          remove: /[$*_+~.,()'"!\-:@]/g,
          lower: true
        })
        db.collection('submits').add({
          number: this.number,
          timestamp: this.timestamp,
          slug: this.slug
        }).then(() => {
          this.$router.push({name: 'Submits'})
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a number to submit a new number.'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   /* label underline focus color */
  input[type=number]:not(.browser-default):focus:not([readonly]) {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }

   .text-centered {
     text-align: center;
   }
</style>
