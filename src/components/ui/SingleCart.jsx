/* eslint-disable react/prop-types */
import toast from "react-hot-toast";

const SingleCart = ({ item, refetch }) => {
  const { _id, name, price, img } = item;

  const handleDelete = async () => {
    await fetch(`https://furniflex-server.onrender.com/carts/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Cart Remove Successfully");
        refetch();
      });
  };

  const handleAddCart = () => {
    console.log("first");
  };
  return (
    <div>
      <div className=" shadow-sm flex mb-4 p-3 rounded-lg bg-neutral">
        <div className="">
          <span onClick={handleAddCart} className="text-3xl font-bold">
            -
          </span>
          <span className="mx-2">1</span>
          <span className="text-3xl font-bold">+</span>
        </div>

        <figure className="w-48">
          <img src={img} alt="products" />
        </figure>
        <div className="mr-2 flex w-full justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="  flex flex-col justify-between">
            <button onClick={handleDelete} className="text-xl btn font-semibold ml-3">
              {" "}
              X{" "}
            </button>
            <p className="text-xl font-semibold"> ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
