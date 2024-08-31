import { useContext, useEffect, useState } from 'react';
import PropType from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import AuthContext from '../../provider/AuthContext';

const CheckAdmin = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const { user } = useContext(AuthContext);
  const axios = useAxiosSecure();

  const checkAdminStatus = async () => {
    await axios.get('/isadmin').then((res) => setAdmin(res?.data?.admin));
  };

  useEffect(() => {
    checkAdminStatus();
  }, [admin]);

  if (admin === null) {
    // Show loading state while checking admin status
    if (!user) {
      alert('You must loged in.');
      return <Navigate to={'/login'}/>
    } else {
      return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
          Loading...
        </div>
      );
    }
  }

  if (admin && user) {
    return <div>{children}</div>;
  } else {
    alert('Only admin can access this page!');
    return <Navigate to={'/'}></Navigate>;
  }
};

CheckAdmin.propTypes = {
  children: PropType.node,
};

export default CheckAdmin;
