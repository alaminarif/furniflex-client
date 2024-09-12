// import { useState } from "react";
import SingleProductCard from "./SingleProductCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  // const [products, setProducts] = useState([]);

  //custom hooks for effitient search

  const url = `https://furniflex-server.onrender.com/products`;
  const { data: products, isPending, refetch } = useQuery({ queryKey: ["products"], queryFn: () => fetch(url).then((res) => res.json()) });

  if (isPending) {
    return <LoadingSpinner />;
  }
  // const handleDeleteProduct = (id) => {
  //   // setProducts(products.filter((product) => product._id !== id));
  // };

  return (
    <div>
      01
      <div className="my-16 flex flex-wrap gap-4">
        {products?.map((product) => (
          <SingleProductCard key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Products;
