import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import svg from "../../src/assets/login-svg.svg";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../src/provider/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAxiosPublic from "../../src/Hooks/useAxiosPublic";
import { MdOutlineHome } from "react-icons/md";

const Login = () => {
  const axios = useAxiosPublic();
  const [disableLogin, setDisableLogin] = useState(true);
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const { logIn, loading, setLoading, setUser, auth } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const setToken = (email) => {
    axios
      .get(`/jwt?email=${email}`)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
        }
      })
      .catch((err) => {
        console.log("token err");
      });
  };

  // Functions
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setLoading(false);
        setErrorMessage("");
        setToken(userCredential?.user?.email);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error?.code?.split("/")[1]);
        setLoading(false);
        console.log(error);
      });

    setDisableLogin(true);
  };

  const handleCaptcha = () => {
    const value = captchaRef.current.value;
    validateCaptcha(value) ? setDisableLogin(false) : setDisableLogin(true);
    captchaRef.current.value = "";
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  place-items-center bg-texture bg-cover drop-shadow-lg min-h-screen py-4">
        <div className="hidden lg:block">
          <img src={svg} alt="SVG" />
        </div>
        <div className="w-8/12 mx-auto overflow-hidden">
          <h3 className="text-3xl text-center font-bold text-black mb-10">
            Login
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email."
                className="p-2 bg-white w-full"
              />
            </div>

            {/* Password */}
            <div className="mt-4">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password."
                className="p-2 bg-white w-full"
              />
            </div>

            {/* captcha */}
            <div className="mt-4">
              <LoadCanvasTemplate reloadText={"Reload"} />
            </div>

            {/* captcha */}
            <div className="mt-4">
              <input
                onBlur={handleCaptcha}
                ref={captchaRef}
                type="text"
                id="captcha"
                placeholder="captcha."
                className="p-2 bg-white w-full"
              />
            </div>

            <button
              type="submit"
              disabled={disableLogin}
              className={` mt-5 px-4 py-2 rounded-sm font-semibold  text-white ${
                disableLogin ? "bg-gray-600" : "bg-yellow-600"
              }`}
            >
              {loading ? (
                <span className="loading loading-spinner text-primary"></span>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-center mt-5 font-semibold">
              Go to <Link to={"/signup"} className="text-blue-600 hover:underline duration-300"> Sign Up</Link>
            </p>
            <p className="text-center text-xs mt-2 font-semibold text-red-500">
              {errorMessage ? errorMessage : ""}
            </p>
          </form>
        </div>
      </div>

      <Link
        to={"/"}
        className="absolute top-3 left-3 px-2 py-1 hover:bg-black/10 duration-300 rounded-lg cursor-pointer"
      >
        <MdOutlineHome className="text-3xl" />
      </Link>
    </div>
  );
};

export default Login;
