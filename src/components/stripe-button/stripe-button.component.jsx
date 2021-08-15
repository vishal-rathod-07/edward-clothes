import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JOc98SHZSCqrDfqhaGUBC3fEujKJZ01o0MZTRNDcQPGX8u4jD1cxvMb5OivVSrgvp0h9U5pm9h55L87BO4poGJX00muWrLVSO";
  const onTokenReceived = (token) => {
    console.log(token);
    alert(
      "Success! Your payment was received.\n\nHere's the token we created for you: " +
        token.id
    );
  };
  return (
    <StripeCheckout
      label='Pay with Card'
      name='Edward Clothes Ltd.'
      billingAddress
      shippingAddress
      image='https://raw.githubusercontent.com/vishal-rathod-07/edward-clothes/f0a355e697da2e94e096f1465297aab5b91582f3/src/assets/crown.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay with Card'
      token={onTokenReceived}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
