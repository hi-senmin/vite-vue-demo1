<template>
  <div class="test-container page-container">
    <div class="page-title">{{ str }}</div>
    <div class="page-title">{{ str2 }}</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import tinyDemo1 from '@senmin/tiny-test-demo1';

export default defineComponent({
  name: 'Test',
  components: {},
  setup() {
    const count = ref(0);
    const str = 'sda ads da dwq';
    const str2 = tinyDemo1(str);
    const increment = () => {
      count.value += 1;
    };

    return { count, increment, str, str2 };
  }
});
</script>

<style lang="scss"></style>
