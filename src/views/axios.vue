<template>
  <h3>axios</h3>
  <p>name: {{ info.login }}</p>
  <img :src="info.avatar_url" alt="" />
</template>

<script>
import { defineComponent } from 'vue';

import server from '../utils/server';

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
    getData() {
      server
        .get('/users/hi-senmin')
        .then((res) => {
          console.log('res: ', res);
          this.info = res?.data || {};
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    }
  }
});
</script>

<style></style>
