import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import getStripe from "./getStripe";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51P9AbBCYsAvQyhDS6xE2IT0FuTF3WvtfUvTvC9H2uMWNQGOlm7B2iOzxj5n44pwlCFK18xBJBLNlQFQ97z5lEYis00dLKWLioh"
);

export default function Payment() {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret:
  //     "sk_test_51P9AbBCYsAvQyhDS6tx3mlPgp0fYJshoewE1iBeXDUEp8Ku03COai9iP1KpJ5GdSwui3RAD7i35T5IxASnG52OER00Uct9o5ei",
  // };

  // return (
  //   <Elements stripe={stripePromise} options={options}>
  //     <CheckoutForm />
  //   </Elements>
  // );
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1P9vYlCYsAvQyhDSwxjNMAIu",
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: "customer@email.com",
    });
    console.warn(error.message);
  }

  return <button onClick={handleCheckout}>Checkout</button>;
}
