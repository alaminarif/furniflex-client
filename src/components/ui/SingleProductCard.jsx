/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { IoCartOutline } from "react-icons/io5";
import { auth } from "../../lib/firebase.config";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import userCart from "../../hooks/userCart";

// eslint-disable-next-line react/prop-types
const SingleProductCard = ({ product }) => {
  // const token = localStorage.getItem("token");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = userCart();

  const { _id, name, price, description, discount, discountOff, img } = product;

  // const handleDelete = async () => {
  //   await fetch(`http://localhost:5000/products/${_id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-type": "application/json",
  //       authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       toast.success("Product Deleted");
  //       refetch();
  //     });
  // };
  const handleAddToCard = () => {
    if (user && user.email) {
      //

      const cartItem = {
        productId: _id,
        emai: user.email,
        name,
        img,
        price,
      };

      axios.post("http://localhost:5000/carts/create-cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("added to your cart");
        }
      });
    } else {
      Swal.fire({
        title: "Your are not Logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          //
          navigate("/login", { state: { from: location } });
          refetch();
        }
      });
    }
  };

  return (
    <div className="card w-[277px] h-[484px] shadow-sm">
      <figure>
        <img src={img} alt="products" />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="">
          <span className="text-xl font-semibold"> ${price}</span> <del className="mx-2"> ${discount}</del> <span className="">{discountOff}</span>{" "}
        </p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCard} className="btn w-full bg-accent text-white">
            <div className="flex">
              {" "}
              <span className="mr-2">
                {" "}
                <IoCartOutline />
              </span>
              <span>Add to Cart</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
