import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1200px] mx-auto">
      <div className=" grid col-span-3 col-gap-6 text-xl bg-primary col-4 w-full ">
        <Link>Side chair</Link>
        <Link>Rocking chair</Link>
        <Link>Lounge chair</Link>
      </div>
      <div className=" grid col-span-9 text-xl bg-secondary">
        <Products />
      </div>
    </div>
  );
};

export default Home;
