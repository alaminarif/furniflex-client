const SingleCart = ({ item }) => {
  const { _id, name, price, img } = item;
  return (
    <div>
      <div className=" shadow-sm flex mb-4">
        <div className="">
          <span className="text-3xl font-bold">-</span>
          <span className="mx-2">1</span>
          <span className="text-3xl font-bold">+</span>
        </div>

        <figure className="w-48">
          <img src={img} alt="products" />
        </figure>
        <div className="mr-2 flex">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className=" flex  justify-end  ">
            <span className="text-xl font-semibold"> X </span>
            <span className="text-xl font-semibold"> ${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
