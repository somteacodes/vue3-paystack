# Vue3-Paystack

vue3-paystack allows you to accept payments in your vue application created with vue 3.
The component is easily customisable.

### NPM
```npm
npm i vue3-paystack
```
## Usage
```javascript
<template>
     <paystack
        buttonClass="'button-class btn btn-primary'"
        buttonText="Pay Online"
        :publicKey="publicKey"
        :email="email"
        :amount="amount"
        :reference="reference"
        :onSuccess="onSuccessfulPayment"
        :onCancel="onCancelledPayment">
    </paystack>
</template>

 <script>
import paystack from "vue3-paystack";

export default {
  components: {
    paystack,
  },
}
  </script>
 
```

## Documentation
A more detailed guide can be found [here](https://vue3paystack.netlify.app/)

## Want to say thanks?
If this has been helpful, kindly share the link to other and a star on the github repo would be helpful too


## License
Licensed under MIT License. [Click](https://github.com/somteacodes/vue3-paystack/blob/master/LICENSE.md) for details.