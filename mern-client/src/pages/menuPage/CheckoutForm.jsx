import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {FaPaypal} from 'react-icons/fa'
import React from "react";

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {};
  return (
    <div className="flex flex-col md:flex-row justify-start items-start gap-8">
      <div className="md:w-2/6 w-full space-y-3">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p className="text-sm">Total Price: {price}</p>
        <p className="text-sm">Total Items: {cart.length}</p>
      </div>
      <div className="md:w-4/6 w-full space-y-5 card bg-base-100 max-w-sm shrink-0 shadow-2xl px-4 py-8">
        <h4 className="text-lg font-semibold">Process your payment!</h4>
        <h5 className="font-medium">Credit/Debit Card</h5>
        {/* stripe form */}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            className="btn btn-md mt-5 bg-violet-600 w-full text-white"
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        {/* paypal */}
        <div className="mt-5 text-center">
            <hr />
            <button
            type="submit"
            className="btn btn-md mt-5 bg-yellow-600 text-white"
            disabled={!stripe}
          >
            <FaPaypal/> Pay with Paypal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
