import { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../provider/AuthContext';
import { Navigate } from 'react-router-dom';

const CheckUser = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-screen relative">
        <span className="loading loading-spinner loading-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={'/login'} />;
  }
};

CheckUser.propTypes = {
  children: PropTypes.node,
};

export default CheckUser;
