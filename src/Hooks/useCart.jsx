import { useContext } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AuthContext from '../provider/AuthContext';

const useCart = () => {
  const { user } = useContext(AuthContext);

  const axios = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      const res = await axios.get('/cart');
      return res.data;
    },
  });

  return {cart, refetch};
};

export default useCart;
