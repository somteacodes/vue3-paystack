<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "Vue3Paystack", // vue component name
  props: {
    // styles
    buttonClass: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "Pay Now",
    },
    // payment operations

    publicKey: {
      type: String,
      requird: true,
    }, //required
    email: {
      type: String,
      required: true,
    }, //required
    firstname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      required: true,
    }, //required
    reference: {
      type: String,
      required: true,
    }, //required
    currency: {
      type: String,
      default: "NGN",
    },
    onSuccess: {
      type: Function,
      default: function (response) {
        console.log(response);
      },
    },
    onCancel: {
      type: Function,
      default: function () {
        console.log("payment closed");
      },
    },
    channels: {
      type: Array,
      default: function () {
        return ["card", "bank", "ussd", "qr", "mobile_money"];
      },
    },
    metadata: {
      type: Object,
      default: function () {
        return {};
      },
    },
    label: {
      type: String,
      default: "",
    },
  },
  async created() {
    this.mountScript().then(() => {
      this.hasScriptLoaded = true;
    });
  },
  data() {
    return {
      hasScriptLoaded: false,
      errorMessage: "",
    };
  },
  methods: {
    async mountScript() {
      return new Promise((res, rej) => {
        const script = document.createElement("script");
        //  add script source
        script.setAttribute("src", "https://js.paystack.co/v2/inline.js");
        script.setAttribute("type", "text/javascript");
        document.head.appendChild(script);
        // check if script is ready
        script.onload = () => res();
        script.onerror = () => rej();
      });
    },
    validateProps() {
      // Check for missing required props
      if (!this.publicKey) return "Paystack Public key prop is missing.";
      if (!this.email) return "Paying customer email prop is missing.";
      if (!this.amount) return "Amount prop is missing.";
      if (!this.reference) return "Reference prop is missing.";
      return ""; // No errors
    },
    payWithPaystack() {
      this.errorMessage = this.validateProps();
      if (this.errorMessage) {
        // Prevent payment if there's an error
        return;
      }
      //  options
      const paymentOptions = {
        // general options

        key: this.publicKey, //required
        email: this.email, //required
        amount: this.amount, //required
        reference: this.reference, //required
        currency: this.currency,
        channels: this.channels,
        metadata: this.metadata,
        label: this.label,
        firstname: this.firstname,
        lastname: this.lastname,
        onSuccess: (response) => {
          this.onSuccess(response);
        },
        onCancel: () => {
          this.onCancel();
        },
        // onBankTransferConfirmationPending: function(response) {
        //   this.onBankTransferConfirmationPending(response);
        // },
        // single split payments
        //subaccount:this.subaccount,  //required for single split
        //transaction_charge:this.transaction_charge,
        //bearer:this.bearer,
        // multi-split payments
        //split_code:this.split_code, //required for multi-split
        // subscriptionss
        // plan: this.plan, //required for subscriptions
        // quantity: this.quantity,
      };

      const paystack = new window.PaystackPop();
      paystack.newTransaction(paymentOptions);
    },
  },
});
</script>

<template>
  <div>
    <div @click="payWithPaystack" v-bind="$attrs">
      <slot>
        <!-- Fallback button if no slot is provided -->
        <button :disabled="!hasScriptLoaded" :class="buttonClass">
          {{ buttonText }}
        </button>
      </slot>
    </div>
    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
  </div>
</template>

 
<style scoped>
.paystack-container {
  position: relative;
  display: inline-block;
}

.error-text {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
