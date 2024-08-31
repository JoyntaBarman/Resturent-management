import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../provider/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response?.status;

      // if (status === 401 || status === 403) {
      //   await logout();
      //   navigate('/login');
      // }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
