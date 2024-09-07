const SingleCart = ({ item }) => {
  const { _id, name, price, img } = item;
  return (
    <div>
      <div className=" shadow-sm flex mb-4 p-3 rounded-lg bg-neutral">
        <div className="">
          <span className="text-3xl font-bold">-</span>
          <span className="mx-2">1</span>
          <span className="text-3xl font-bold">+</span>
        </div>

        <figure className="w-48">
          <img src={img} alt="products" />
        </figure>
        <div className="mr-2 flex w-full justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="  flex flex-col justify-between">
            <p className="text-xl font-semibold ml-3"> X </p>
            <p className="text-xl font-semibold"> ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
