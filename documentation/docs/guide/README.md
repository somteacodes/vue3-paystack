# Guide

vue3-paystack allows you to accept payments in your vue application created with vue 3.
The component is easily customisable.

## Installation

### NPM

```npm
npm i vue3-paystack
```

## Usage

```javascript
import paystack from "vue3-paystack";
```

## component sample

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
                :onCanel="onCancelledPayment"
              ></paystack>
</template>
 <script>
import paystack from "vue3-paystack";
import { nanoid } from "nanoid"; //if using nanoid

export default {
  components: {
    paystack,
  },
  data() {
    return{
        publicKey:'pk_test_0000',
        amount:1000 //Expressed in lowest demonitation
        email:'somteacodes@gmail.com'
    }
  },

  // computed
  computed: {
    reference: function() {
        // if using nanoid to generate randomRef
        // comment this out if not using nano id
      return nanoid(15);

    //   you can use plain JS to generate random ref ID, just uncomment this section if you
    /*
        let randomRef = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 15; i++ )
          text += characters.charAt(Math.floor(Math.random() * characters.length));

        return randomRef;

        */
    },
  },
  // methods
  methods: {

    onSuccessfulPayment: function(response) {
      console.log(response);
    },
    onCancelledPayment: function() {
      console.log("Payment cancelled by user");
    },
  },
};
</script>

```

## Props

| Name                   | Type       | Description                                                  | Default                                                                 |
| ---------------------- | ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `buttonClass`          | `String`   | CSS class names for the button, to style the component       | `""`                                                                    |
| `buttonText`           | `String`   | Displayed text for the button                                | `"Pay Now"`                                                             |
| `publicKey` _required_ | `String`   | Public key from your paystack API                            |                                                                         |
| `email` _required_     | `String`   | required                                                     |                                                                         |
| `amount` _required_    | `Number`   | required                                                     |                                                                         |
| `reference` _required_ | `String`   | a randomly generated code, made up of characters and numbers |                                                                         |
| `currency`             | `String`   | required                                                     | `"NGN"`                                                                 |
| `onSuccess`            | `Function` |                                                              | `function() { console.log(response); }`                                 |
| `onCancel`             | `Function` |                                                              | `function() { console.log("payment closed"); }`                         |
| `channels`             | `Array`    |                                                              | `function() { return ["card", "bank", "ussd", "qr", "mobile_money"]; }` |
| `metadata`             | `Object`   |                                                              | `function() { return {}; }`                                             |
| `label`                | `String`   |                                                              | `""`                                                                    |

<!-- ## Data

| Name              | Type      | Description | Initial value |
| ----------------- | --------- | ----------- | ------------- |
| `hasScriptLoaded` | `boolean` |             | `false`       |

## Methods

### mountScript()

**Syntax**

```typescript
async mountScript(): Promise<unknown>
```

### payWithPaystack()

**Syntax**

```typescript
payWithPaystack(): void
``` -->

## Other Considerations
This is not an official plugin from [paystack](https://paystack.com/).

You should defintely check out the official [paystack](https://paystack.com/developers) documentation for more information
