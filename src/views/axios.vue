<template>
  <h3>axios</h3>
</template>

<script>
import { defineComponent } from 'vue'

import server from  '../utils/axios'
export default defineComponent({
  name: 'axios',
  setup(){
      server
        .get('/users/XPoet')
        .then((res) => {
          console.log('res: ', res)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
  }
})
</script>

<style>

</style>