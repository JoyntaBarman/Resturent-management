import { useState } from 'react';
import app from '../fairbase/fairbase.config';
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import CartProvider from './CartProvider';
import Swal from 'sweetalert2';

const auth = getAuth(app);
auth.useDeviceLanguage();

const AuthProvider = ({ children }) => {
  // Stats
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Fairbase function
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    signInWithRedirect(auth, googleProvider);
    console.log('google');
    return getRedirectResult(auth);
  };

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {

        setUser(null);
        setLoading(false);
        localStorage.removeItem('token');
        // refetch();
      })
      .catch((error) => {
        if (error) {
          Swal.fire('Please! Try again to log out');
        }
      });
  };

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });

  const authInfo = {
    createUser,
    logIn,
    logOut,
    loading,
    setLoading,
    user,
    setUser,
    googleLogin,
    facebookLogin,
    githubLogin,
    auth,
    googleProvider,

  };

  return (
    <AuthContext.Provider value={authInfo}>
      <CartProvider>{children}</CartProvider>
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
