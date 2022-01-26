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
        amount:1000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
        email:'somteacodes@gmail.com',
        firstname:'Somtea', //optional field remember to pass as a prop of firstname if needed
        lastname:'Codes' //optional field remember to pass as a prop of lastname if needed
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
| `email` _required_     | `String`   | required                                                     |  
| `firstname`             | `String`   |      | First name to be stored in your receipts|
| `lastname`             | `String`   |      | Last name to be stored in your receipts|
| `amount` _required_    | `Number`   | required                                                     |                                                                         |
| `reference` _required_ | `String`   | a randomly generated code, made up of characters and numbers |                                                                         |
| `currency`             | `String`   | required                                                     | `"NGN"`                                                                 |
| `onSuccess`            | `Function` |                                                              | `function() { console.log(response); }`                                 |
| `onCancel`             | `Function` |                                                              | `function() { console.log("payment closed"); }`                         |
| `channels`             | `Array`    |                                                              | `function() { return ["card", "bank", "ussd", "qr", "mobile_money"]; }` |
| `metadata`             | `Object`   |                                                              | `{   "custom_fields":[{"display_name":"Cart Items",  "variable_name":"Invoice ID", "value":209}] }`                                             |
| `label`                | `String`   |                                                              | `""`                                                                    |

## Metadata (optional)
The metadata prop is a good way to add additional information to information stored in your records.
The meta data is of a JSON type and it has a reserved objecy key called `custom_fields`, that when used correctly displays nicely in your stored receipts. 

Custom fields have 3 keys: `display_name`, `variable_name` and `value`. 
The display name will be the title for the value when displaying it on your receipts

An example is
```
"metadata":{
   "custom_fields":[
    {
      "display_name":"Country",
      "variable_name":"country_name",
      "value":"Nigeria"
    },
    {
      "display_name":"Cart Items",
      "variable_name":"cart_items",
      "value":"3 bananas, 12 mangoes"
    }
  ]
}

```
Custom fields used can be seen in your paystack dashboard
![Image](/images/metadata.png)


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
