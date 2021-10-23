# Vue3Paystack

## Props

| Name                   | Type       | Description        | Default                                                                               |
| ---------------------- | ---------- | ------------------ | ------------------------------------------------------------------------------------- |
| `button-class`         | `String`   | styles             | `""`                                                                                  |
| `button-text`          | `String`   |                    | `""`                                                                                  |
| `public-key`           | `String`   | payment operations |                                                                                       |
| `email` *required*     | `String`   | required           |                                                                                       |
| `amount` *required*    | `Number`   | required           |                                                                                       |
| `reference` *required* | `String`   | required           |                                                                                       |
| `currency`             | `String`   | required           | `"NGN"`                                                                               |
| `on-success`           | `Function` |                    | `function() {         console.log(response);       }`                                 |
| `on-cancel`            | `Function` |                    | `function() {         console.log("payment closed");       }`                         |
| `channels`             | `Array`    |                    | `function() {         return ["card", "bank", "ussd", "qr", "mobile_money"];       }` |
| `metadata`             | `Object`   |                    | `function() {         return {};       }`                                             |
| `label`                | `String`   |                    | `""`                                                                                  |

## Data

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
```

