import { useContext } from "react";
import { CartContext } from "../../src/provider/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const stripePK = import.meta.env.VITE_STRIPE_PK;
  const navigate = useNavigate();
  const { total, shipingCost } = useContext(CartContext);

  // Checkout function
  const handleCheckout = (totalPrice) => {};

  return (
    <div className=" flex flex-col gap-5">
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-2xl border-b border-gray-500 py-2">
          Checkout Summary
        </h3>
        <p className="text-base border-b border-gray-500 border-dashed py-3 px-2 flex items-center justify-between gap-2">
          <span>Subtotal</span>
          <span>{total} $</span>
        </p>
        <p className="text-base border-b border-gray-500 border-dashed py-3 px-2 flex items-center justify-between gap-2">
          <span>Shiping</span>
          <span>{shipingCost} $</span>
        </p>
        <p className="text-base border-b border-gray-500 border-dashed py-3 px-2 flex items-center justify-between gap-2">
          <span>Total</span>
          <span>{shipingCost + total} $</span>
        </p>
        <p className="text-base border-b border-gray-500 border-dashed py-3 px-2 flex items-center justify-between gap-2">
          <span>Payable Total</span>
          <span>{shipingCost + total} $</span>
        </p>
        <br />
      </div>
      {/* checkout button */}
      <form action="http://localhost:3000/checkout" method="POST">
        <button
          type="submit"
          onClick={() => handleCheckout(shipingCost + total)}
          className="px-5 py-3 bg-black text-white rounded"
        >
          Checkout Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
