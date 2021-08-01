<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Home" />
</template>

<script>
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
export default defineComponent({
  name: 'home',
  components: {
    HelloWorld
  }
})
</script>

<style lang="scss">

</style>