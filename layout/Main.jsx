import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className={`relative ${noHeaderFooter ? "" : " mx-auto"} `}>
      {noHeaderFooter || <Navbar></Navbar>}
      <div>
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
