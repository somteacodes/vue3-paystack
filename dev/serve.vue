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
    <vue3-paystack>
      <slot>
        <img
          style="width: 40px;"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
        VuePaystack with slot
      </slot>
    </vue3-paystack><br /><br />
    <vue3-paystack buttonText="Vue Paystack without slot" /><br /><br />
    <vue3-paystack />
  </div>
</template>
