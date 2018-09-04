<template>
    <fab :actions="fabActions"
       @add="add"
  ></fab>
</template>

<script>
import fab from 'vue-fab'

export default {
  components: {
    fab
  },
  data () {
    return {
      bgColor: '#fff',
      position: 'top-right',
      fabActions: [
        {
          name: 'add',
          icon: 'add'
        }
      ]
    }
  },
  methods: {
    add () {
      this.$router.push({ name: 'AddSubmit' })
    }
  }
}
</script>
