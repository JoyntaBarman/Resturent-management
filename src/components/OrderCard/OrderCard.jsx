import { useContext } from "react";
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
import PropTypes from "prop-types";
import AuthContext from "../../provider/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const OrderCard = ({ item }) => {
  // const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const axios = useAxiosSecure();
  const { refetch } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    if (user) {
      const userCart = { productId: id, quantity: 1 };
      axios
        .post("/cart", userCart)
        .then((res) => {
          if (res?.data?.acknowledged) {
            refetch();
            Swal.fire("Add to cart successfully.");
          } else {
            Swal.fire("Already added product to cart!");
          }
        })
        .catch((err) => {
          if (err) {
            Swal.fire("Add to cart unsuccessfull.");
          }
        });
    } else {
      Swal.fire({
        title: "You are not loged in!",
        text: "First you have to login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={item?.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item?.name}</h2>
        <p>{item?.recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(item?._id)}
            className="btn bg-gray-100 text-blue-600"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  item: PropTypes.object,
};

export default OrderCard;
