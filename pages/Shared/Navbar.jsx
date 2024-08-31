import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../src/provider/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import AddToCart from "../../src/components/addToCart/AddToCart";
import useCart from "../../src/Hooks/useCart";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const { refetch } = useCart();

  function handleTheme() {
    function toggleTheme(currentTheme) {
      const initiatTheme = currentTheme === "light" ? "Dark" : "light";
      document.documentElement.setAttribute("data-theme", initiatTheme);
      return initiatTheme;
    }

    setTheme(toggleTheme);
  }

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        refetch();
        Swal.fire({
          title: "Log Out!",
          text: "you are Loged out.",
          icon: "success",
        });
      }
    });
  };

  const navLink = (
    <>
      <li>
        <Link className="active:text-white" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order"}>order</Link>
      </li>
      <li>
        <Link to={"/contactus"}>Contact Us</Link>
      </li>

      <li>
        <Link to={"/dashboard/home"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        {" "}
        <button
          onClick={handleTheme}
          className="hover:bg-black/50 text-white/80 hover:text-white px-3 py-2 rounded-lg duration-300"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar bg-background.4 text-white fixed top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-500"
            >
              {navLink}
            </ul>
          </div>
          <a href="/" className="cursor-pointer text-xl">
            BISTRO-BOSS
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex items-center">
          <Link to={"/cart"}>
            <AddToCart />
          </Link>
          {user?.email ? (
            <>
              <button onClick={handleLogOut} className="font-semibold mr-2">
                {" "}
                Sign Out
              </button>
              <FaRegUserCircle className="text-3xl mr-2" />
            </>
          ) : (
            <Link className="btn ml-4" to={"/signup"}>
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
