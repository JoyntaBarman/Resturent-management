import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCheckAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const axios = useAxiosSecure();

  useEffect(() => {
    axios
      .get('/isAdmin')
      .then((res) => setIsAdmin(res?.data?.admin))
      // .catch((err) => alert(err.message));
  }, []);
  return isAdmin;
};

export default useCheckAdmin;
