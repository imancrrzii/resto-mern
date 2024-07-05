import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const [cart] = useCart();
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  // console.log(cart)
  // calculate total price
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total
  const totalPrice = parseFloat(
    cartSubtotal.toFixed(2)
  );
//   console.log(cartTotal)
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
