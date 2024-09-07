import { Link } from "react-router-dom";
import Products from "../components/ui/Products";

const Home = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1200px] mx-auto">
      <div className=" grid col-span-3 rows-span col-gap-6 col-4">
        <Link>Side chair</Link>
        <Link>Rocking chair</Link>
        <Link>Lounge chair</Link>
      </div>
      <div className=" grid col-span-9">
        <Products />
      </div>
    </div>
  );
};

export default Home;
