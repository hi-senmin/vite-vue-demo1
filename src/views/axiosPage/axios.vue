<template>
  <h3>axios</h3>
  <p>name: {{ info.login }}</p>
  <img :src="info.avatar_url" alt="" />
</template>

<script>
import { defineComponent } from 'vue';
import { getUsrInfo } from './modules';

export default defineComponent({
  name: 'axios',
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      getUsrInfo({ a: 1, b: 2 }, { toast: false });
    }
  }
});
</script>

<style></style>
