import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
  const [menu, setMenu] = useState([]);

  // const baseURL = import.meta.env.VITE_BASE_URL;
  const axiospublic = useAxiosPublic();

  useEffect(() => {
    axiospublic.get('menu').then((res) => setMenu(res.data));
  }, []);

  return [menu];
};

export default useMenu;
