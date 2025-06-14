<script>
import { defineComponent } from "vue";
import Vue3Paystack from "@/vue3-paystack.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    Vue3Paystack,
  },
});
</script>

<template>
  <div id="app">
    <vue3-paystack buttonText="Hello Paynow">
      <slot>
        <img
          style="width: 40px"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        />
        VuePaystack with slot
      </slot>
    </vue3-paystack>
    <br />
    <vue3-paystack>
      <slot>
        <button
          style="
            line-height: 100%;
            text-decoration: none;
            display: block;
            max-width: 100%;
            mso-padding-alt: 0px;
            background-color: #3eaf7c;
            border-radius: 6px;
            color: #fff;
            font-size: 18px;
            padding-top: 19px;
            padding-bottom: 19px;
            text-align: center;
            width: 100%;
            padding: 19px 0px 19px 0px;
          "
          target="_blank"
        >
          <span
            style="
              max-width: 100%;
              display: inline-block;
              line-height: 120%;
              mso-padding-alt: 0px;
              mso-text-raise: 14.25px;
            "
            >Pay</span
          >
        </button>
      </slot> </vue3-paystack
    ><br /><br />
    <vue3-paystack buttonText="Vue Paystack without slot" /><br /><br />
    <vue3-paystack />
  </div>
</template>
