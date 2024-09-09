import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase.config";
import logo from "../../assets/logo.png";
import ProfileLogin from "../../assets/profile-login.png";

import { IoCartOutline } from "react-icons/io5";
import userCart from "../../hooks/userCart";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [cart] = userCart();

  console.log(cart);

  const handleLogout = async () => {
    await signOut();
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/produts"}>Produts</Link>
            </li>

            <li>
              <Link to={"/categories"}>Categories</Link>
            </li>

            <li>
              <Link to={"/custom"}>Cusmtom</Link>
            </li>

            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>

            {/* <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li> */}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Produts</Link>
          </li>

          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>

          <li>
            <Link to={"/custom"}>Custom</Link>
          </li>

          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user?.email ? (
          <div className="navbar-end flex gap-4">
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Registration
            </Link>
          </div>
        ) : (
          <>
            {/* <div className="dropdown">
            <div tabIndex={0} className="text-black">
              Click
            </div> */}

            <div className="navbar-end flex gap-4">
              <Link to="/carts" className="flex text-2xl">
                {" "}
                <IoCartOutline />
                <div className="badge bagde-primary">{cart.length}</div>
              </Link>
              <div className=" dropdown dropdown-end ">
                <div className=" text-neutral-content rounded-full w-8" tabIndex={0}>
                  <img src={user.photoURL ? user.photoURL : ProfileLogin} className="w-12 rounded-full" alt="" />
                  {/* <span>{user?.displayName ? user.displayName.slice(0, 2) : "a"}</span> */}
                </div>

                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow text-primary bg-neutral">
                  <div className="card-body ">
                    <span className="text-black mx-auto">accounts</span>
                    <hr />
                    <div>
                      <Link to={"/dashboard/home"} className=" text-black">
                        Dashboard Home
                      </Link>
                    </div>
                    <div>
                      <button className="text-black " onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
