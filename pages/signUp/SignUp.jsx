import svg from "../../src/assets/login-svg.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthContext from "../../src/provider/AuthContext";
import useAxiosPublic from "../../src/Hooks/useAxiosPublic";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { MdOutlineHome } from "react-icons/md";

const SignUp = () => {
  const navigate = useNavigate();
  const axios = useAxiosPublic();
  const [errMessage, setErrorMessage] = useState("");
  const {
    createUser,
    loading,
    setUser,
    setLoading,
    googleLogin,
    facebookLogin,
    githubLogin,
    auth,
    googleProvider,
  } = useContext(AuthContext);

  // functions

  const createDBUser = (user) => {
    axios
      .post("/user", user)
      .then((response) => {
        console.log("userDb", response);
        if (response?.data?.acknowledged === true) {
          navigate("/");
          setLoading(false);
        } else {
          setErrorMessage("user Already axixt");
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const setToken = (email) => {
    axios
      .get(`/jwt?email=${email}`)
      .then(async (response) => {
        console.log("token", response);
        if (response.status === 200) {
          localStorage.setItem("token", response?.data?.token);
          await createDBUser({ email: email });
        }
      })
      .catch((err) => {
        console.log("token err", err);
        alert("Error set token.");
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;
        setUser(user);
        setToken(user?.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "(" + error.message.split("/")[1];
        setErrorMessage(errorMessage);
        setLoading(false);
      });
  };

  const handleGoogleLogin = (event) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name;
        setUser(user);
        setToken(user?.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = "(" + error.message.split("/")[1];
        setErrorMessage(errorMessage);
        setLoading(false);
      });
  };

  const handleFacebookLogin = (event) => {
    facebookLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
      });
  };

  const handleGithubLogin = (event) => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
      });
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  place-items-center bg-texture bg-cover drop-shadow-lg min-h-screen">
        <div className="w-8/12 mx-auto">
          <h3 className="text-3xl text-center font-bold mb-10">Sign Up</h3>
          <form onSubmit={handleSignUp}>
            {/* Name */}
            <div>
              <label className="leading-8" htmlFor="name">
                Name
              </label>{" "}
              <br />
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name."
                className="p-2 bg-white w-full"
              />
            </div>

            {/* Email */}
            <div className="mt-2">
              <label className="leading-8" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                required
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email."
                className="p-2 bg-white w-full"
              />
            </div>

            {/* password */}
            <div className="mt-4">
              <label className="leading-8" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                type="password"
                required
                id="password"
                name="password"
                placeholder="Enter your password."
                className="p-2 bg-white w-full"
              />
            </div>

            {errMessage && <p className="text-sm text-red-500">{errMessage}</p>}

            <button
              type="submit"
              className={`text-white bg-[#D1A054] w-full  py-4 font-semibold rounded mt-10`}
            >
              {loading ? (
                <span className="loading loading-spinner text-primary"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center mt-2">
            <Link
              to={"/login"}
              className={"text-blue-500 cursor-pointer font-semibold"}
            >
              Already registered? Go to log in
            </Link>{" "}
            <br /> <span>Or sign up with</span>
          </p>

          {/* icon */}
          <div className=" flex gap-4 justify-center items-center mt-8 text-2xl">
            {/* <button
            onClick={handleGoogleLogin}
            className="border-2 rounded-full border-gray-700 text-gray-700 hover:text-gray-900 hover:border-gray-900 p-2"
          >
            <FaGoogle />
          </button> */}
            {/* <button
            onClick={handleFacebookLogin}
            className="border-2 rounded-full border-gray-700 text-gray-700 hover:text-gray-900 hover:border-gray-900 p-2"
          >
            <FaFacebookF />
          </button>
          <button
            onClick={handleGithubLogin}
            className="border-2 rounded-full border-gray-700 text-gray-700 hover:text-gray-900 hover:border-gray-900 p-2"
          >
            <FaGithub />
          </button> */}
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={svg} alt="SVG" />
        </div>
      </div>

      <Link to={'/'} className="absolute top-3 left-3 px-2 py-1 hover:bg-black/10 duration-300 rounded-lg cursor-pointer"><MdOutlineHome className="text-3xl"/></Link>
    </div>
  );
};

export default SignUp;
