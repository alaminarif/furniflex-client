import { useState } from "react";

import SingleProductCard from "../components/ui/SingleProductCard";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useQuery } from "react-query";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const [search] = useState("");

  //custom hooks for effitient search

  const url = `http://localhost:5000/products?search=${search}`;
  const { data: products, isPending, refetch } = useQuery({ queryKey: ["products"], queryFn: () => fetch(url).then((res) => res.json()) });

  // useEffect(() => {
  //   // Fetch products based on the search query
  //   fetch(`http://localhost:5000/products?search=${search}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, [search]);

  if (isPending) {
    return <LoadingSpinner />;
  }
  // const handleDeleteProduct = (id) => {
  //   // setProducts(products.filter((product) => product._id !== id));
  // };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Products</h1>

      <div className="my-16 flex flex-wrap gap-4">
        {products?.map((product) => (
          <SingleProductCard key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Products;
