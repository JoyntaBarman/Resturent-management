import { useContext, useEffect } from 'react';
import CartItem from '../../src/components/cart/CartItem';
import useCart from '../../src/Hooks/useCart';
import AuthContext, { CartContext } from '../../src/provider/AuthContext';
import Checkout from './Checkout';

const Cart = () => {
  const { setTotal, setShipingCost } = useContext(CartContext);
  const { cart } = useCart();

  useEffect(() => {
    if(cart.length){
      setShipingCost(2);
    }

      const totalPrice = cart.reduce((sum, item) => {
        return sum + item?.price;
      }, 0);

      setTotal(totalPrice)


  }, [cart]);

  return (
    <main>
      <div className="min-h-screen mt-20 md:mx-10 mx-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {cart.length > 0 && (
          <div className="lg:col-span-3">
            <h3 className="shadow py-4 px-4">
              Select all item ({cart.length} item)
            </h3>
            <div className="mt-5 flex flex-col gap-2">
              {cart.map((item, index) => (
                <CartItem key={index} item={item}></CartItem>
              ))}
            </div>
          </div>
        )}

        {cart?.length <= 0 && (
          <div className="lg:col-span-3 relative">
            <h3 className="text-5xl text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Empty Cart!
            </h3>
          </div>
        )}
        <div>
          <Checkout />
        </div>
      </div>
    </main>
  );
};

export default Cart;
