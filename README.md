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

## Usage With A custom button, you can fully customize the look of the pay button

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

<slot>
        <button
          style="
            line-height: 100%;
            text-decoration: none;
            display: block;
            max-width: 100%;
            mso-padding-alt: 0px;
            background-color: #f95738;
            border-radius: 6px;
            color: #fff;
            font-size: 18px;
            padding-top: 19px;
            padding-bottom: 19px;
            text-align: center;
            width: 100%;
            padding: 19px 0px 19px 0px;
          "
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
        </slot>
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
