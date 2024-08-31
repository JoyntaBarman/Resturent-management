import { useContext, useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { CartContext } from '../../provider/AuthContext';
import { RiDeleteBin5Line } from 'react-icons/ri';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';

const CartItem = ({ item: withoutQuantity }) => {
  const item = {...withoutQuantity, quanitity: 1};
  const [orderItem, setOrderItem] = useState(1);
  const { setTotal } = useContext(CartContext);
  const axios = useAxiosSecure();
  const { refetch, cart } = useCart();

  const convertToNumber = (num) => {
    const number = parseFloat(parseFloat(num).toFixed(2));
    return number;
  };

  const decrease = () => {
    setOrderItem((prev) => {
      if (prev > 1) {
        setTotal((prevTotal) =>
          convertToNumber(prevTotal - parseFloat(item?.price))
        );
        return prev - 1;
      }
      return prev;
    });
  };

  const increase = () => {
    setOrderItem((prev) => {
      if (prev < 100) {
        setTotal((prevTotal) =>
          convertToNumber(prevTotal + parseFloat(item?.price))
        );
        return prev + 1;
      }
      return prev;
    });
  };


  const deleteItem = (item) => {
    const id = item?._id;

    axios
      .delete(`/cart/${id}`)
      .then((res) => {
        if (res?.data?.acknowledged) {
          Swal.fire('Deleted ' + item?.name);
          refetch();
          console.log(cart);
        }
      })
      .catch((err) => {
        Swal.fire('Does not delete cart item!');
      });
  };

  useEffect(() => {
    return ()=> {
      setOrderItem(1)
    };
  }, [cart]);

  return (
    <div
      className={`flex gap-4 justify-between items-center py-5 bg-gray-100  md:px-5`}
    >
      <img
        src={item?.image}
        alt={item?.category}
        className="w-20 h-20 object-cover"
      />
      <div className="w-1/3">
        <h3 className="md:text-xl text-base font-medium">{item?.name}</h3>
        <p className="text-xl text-gray-400">{item?.category}</p>
      </div>
      <div className="flex gap-4 items-center ">
        <button
          onClick={decrease}
          className="md:py-2 py-1 md:px-3 px-1 rounded text-2xl bg-gray-200"
        >
          -
        </button>
        {orderItem}
        <button
          onClick={increase}
          className="md:py-2 py-1 md:px-3 px-1 rounded text-2xl bg-gray-200"
        >
          +
        </button>
      </div>
      <p className="w-16">${item?.price}</p>
      <RiDeleteBin5Line
        onClick={() => deleteItem(item)}
        size={24}
        className="w-10 hover:text-red-500 duration-300 cursor-pointer"
      />
    </div>
  );
};

CartItem.propTypes = {
  item: PropsTypes.object,
};

export default CartItem;
