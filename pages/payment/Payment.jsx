import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useContext, useEffect } from "react";
import AuthContext from "../../src/provider/AuthContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);
  const option = {
    mode: "payment",
    amount: 120,
    currency: "usd",
    appearance: {},
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="h-screen px-4 relative mt-10">
      <div className="w-5/6 lg:w-1/2 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Elements stripe={stripePromise} options={option}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
