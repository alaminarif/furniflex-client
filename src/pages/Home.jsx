import { Link } from "react-router-dom";
import Products from "../components/ui/Products";

const Home = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1200px] mx-auto">
      <div className="col-span-3  min-h-full ">
        <div className="flex flex-col">
          <Link>Side chair</Link>
          <Link>Rocking chair</Link>
          <Link>Lounge chair</Link>
        </div>
      </div>
      <div className="col-span-9">
        <Products />
      </div>
    </div>
  );
};

export default Home;
