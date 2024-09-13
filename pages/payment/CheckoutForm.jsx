import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import useAxiosPublic from '../../src/Hooks/useAxiosPublic';

const CheckoutForm = ({cart}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axios = useAxiosPublic();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
    }

    const res = (await axios.post('/checkout', {body: cart})).data;
    console.log('checkout', res)

    const { client_secret: clientSecret} = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: 'skjfa',
      confirmParams: {
        return_url: 'https://google.com',
      },
    });

    if (error) {
      console.log('payment Error', error);
      setErrorMessage(error.message);
    } else {
      alert('payment compleat successfully.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="px-10 py-3 bg-blue-600 font-bold text-xl rounded text-white"
      >
        pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
