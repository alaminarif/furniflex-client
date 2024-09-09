import userCart from "../../hooks/userCart";
import LoadingSpinner from "../shared/LoadingSpinner";
import SingleCart from "./SingleCart";

const Carts = () => {
  const [cart, refetch, isPending] = userCart();

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className=" max-w-[1200px] mx-auto">
      <div className="grid gap-16  grid-cols-12 ml-6">
        <div className=" col-span-9 ">
          <h1 className="text-2xl font-bold my-7">An overview of your order</h1>
          {cart?.map((item) => (
            <SingleCart key={item._id} item={item} refetch={refetch}></SingleCart>
          ))}
        </div>
        <div className="col-span-3  min-h-full">
          <div className="">
            <h1 className="text-2xl font-bold my-7">Oder details</h1>

            <ul className="bg-neutral p-6 rounded-lg">
              <div className="flex justify-between">
                <li>Subtotal</li>
                <li>410</li>
              </div>

              <div className="flex justify-between">
                <li>Shipping</li>
                <li>690</li>
              </div>

              <div className="flex justify-between">
                <li>Estimated TAx</li>
                <li>0</li>
              </div>

              <div className="flex justify-between text-xl font-semibold">
                <li>Total</li>
                <li>1620</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
