import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order';
import ContactUs from '../pages/ContactUs/ContactUs';
import Login from '../pages/Login/Login';
import SignUp from '../pages/signUp/SignUp';
import Cart from '../pages/cart/Cart';
import NotFoundPage from '../pages/NotFoundPage.jsx/NotFoundPage';
import Payment from '../pages/payment/Payment';
import Dashboard from '../layout/Dashboard';
import CheckAdmin from '../src/components/checkPrivateRoute/CheckAdmin';
import DashbordNotFoundPage from '../pages/dashboard/dashboardPages/DashbordNotFoundPage';
import DashboardHome from '../pages/dashboard/dashboardPages/DashboardHome';
import DashboardUsers from '../pages/dashboard/dashboardPages/DashboardUsers';
import CheckUser from '../src/components/checkPrivateRoute/CheckUser';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
      },
      {
        path: '/order',
        element: <Order></Order>,
        // loader : async () => useMenu(),
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/cart',
        element: (
          <CheckUser>
            <Cart />
          </CheckUser>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/payment',
        element: <Payment/>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <CheckAdmin><Dashboard/></CheckAdmin>,
    children: [
      {
        path: 'home',
        element: <DashboardHome/>
      },
      {
        path: 'user',
        element: <DashboardUsers/>
      },
      {
        path: '*',
        element: <DashbordNotFoundPage/>
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },

]);
