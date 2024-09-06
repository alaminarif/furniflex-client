/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCard = ({ product }) => {
  // const token = localStorage.getItem("token");

  const { _id, name, price, description, discount, discountOff, img } = product;
  console.log(_id);

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

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
          <button className="btn w-full bg-accent text-white">
            <Link to={`/products/${_id}`} className="flex">
              {" "}
              <span className="mr-2">
                {" "}
                <IoCartOutline />
              </span>
              <span>Add to Cart</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
