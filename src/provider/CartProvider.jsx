import { useState } from 'react';
import { CartContext } from './AuthContext';
import PropsTypes from 'prop-types';

const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [shipingCost, setShipingCost] = useState(0);
  const [order, setOrder] = useState([]);

  const userCart = {
    total,
    totalItem,
    shipingCost,
    order,
    setTotal,
    setTotalItem,
    setShipingCost,
    setOrder
  };

  return (
    <CartContext.Provider value={userCart}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropsTypes.node,
};

export default CartProvider;
