<script>
import { defineComponent } from 'vue';
import Vue3Paystack from '@/vue3-paystack.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3Paystack
  }
});
</script>

<template>
  <div id="app">
    <vue3-paystack />
  </div>
</template>
