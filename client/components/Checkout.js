// import React from 'react'
// import axios from 'axios'
// import StripeCheckout from 'react-stripe-checkout'
// import { keyPublishable } from '../../secrets'

// const PAYMENT_SERVER_URL = 'http://localhost:8080'
// const CURRENCY = 'USD'
// const dollarsToCents = amount => amount * 100
// const successPayment = data => {
//   alert('Payment was successfully processed')
// }
// const errorPayment = data => {
//   alert('An error occurred with the processing of payment information')
// }

// const onToken = (amount, description) => token =>
//   //may need to define custom axios here rather than use sendOrder
//   axios
//     .post(PAYMENT_SERVER_URL, {
//       description,
//       source: token.id,
//       currency: CURRENCY,
//       amount: dollarsToCents(amount)
//     })
//     .then(successPayment)
//     .catch(errorPayment)

// const Checkout = (amount, description, cart) => {
//   console.log(cart)
//   return (
//     <div>
//       <p style={{ margin: '15px', color: 'red' }}>
//         TEST =>
//         <span style={{ margin: '10px' }}>
//           <StripeCheckout
//             name={name}
//             amount={dollarsToCents(amount)}
//             //token={onToken(amount, description)}
//             currency={CURRENCY}
//             stripeKey={keyPublishable}
//           />
//         </span>
//       </p>
//     </div>
//   )
// }

// export default Checkout

{
  /* <button type="button" onClick={() => sendOrder(cart.id, 1)}>
{' '}
{/* 1 = 'processing'*/
}
//Complete Purchase
{
  /*</button> */
}

//{ sendOrder, cart }

import React, { Component } from 'react'

export const Checkout = ({ sendOrder, cart }) => {
  console.log(cart, sendOrder)
  return (
    <form
      onClick={() => this.props.deleteCartItem(orderId, item.product.id)}
      method="POST"
    >
      <script
        src="https://checkout.stripe.com/checkout.js"
        className="stripe-button"
        data-key="pk_test_Wc2O142qV1TRGR76S53Trrcm"
        data-amount="999"
        data-name="Demo Site"
        data-description="Example charge"
        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
        data-locale="auto"
      />
    </form>
  )
}

{
  /* <p style={{ margin: '15px', color: 'red' }}>
TEST =>
<span style={{ margin: '10px' }}>
  <button type="button" onClick={() => sendOrder(cart.id, 1)}>
    {' '}
    {/* 1 = 'processing'*/
}
//Complete Purchase
//   </button>
// </span>
// </p>
