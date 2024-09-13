import { IoCartOutline } from "react-icons/io5";

import useCart from "../../Hooks/useCart";

const AddToCart = () => {
  const { cart } = useCart();

  return (
    <div className="relative mr-5">
      <IoCartOutline className="text-2xl" />
      <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-700 rounded-full text-xs">
        {cart?.length}
      </span>
    </div>
  );
};

export default AddToCart;
