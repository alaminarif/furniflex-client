import userCart from "../../hooks/userCart";
import SingleCart from "./SingleCart";

const Carts = () => {
  const [cart] = userCart();

  return (
    <div className=" max-w-[1200px] mx-auto">
      <div className="grid grid-cols-12 ml-6">
        <div className=" col-span-8">
          <h1>An overview of your order</h1>
          {cart?.map((item) => (
            <SingleCart key={item._id} item={item}></SingleCart>
          ))}
        </div>
        <div className="col-span-4 bg-primary min-h-full">
          <div className="">Oder details</div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
