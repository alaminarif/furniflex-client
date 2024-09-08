import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import GoogleLogin from "../components/auth/GoogleLogin";
import { auth } from "../lib/firebase.config";

import loginImage from "../assets/login.png";
import loginLogo from "../assets/login-logo.png";

export default function Login() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [user, loading] = useAuthState(auth);
  // console.log(user);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // const data = { email, password };
    signInWithEmailAndPassword(email, password).then((data) => {
      console.log(data?.user?.email);
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://furniflex-server.onrender.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  const handleForgetPassword = () => {
    console.log("reset pass");
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2">
        <div className="flex justify-center  h-screen items-center">
          <form onSubmit={handleSubmit} className="bg-neutral p-4 rounded-sm w-9/12">
            <h1 className="text-2xl font-bold mt-10"> Welcome Back!</h1>
            <p className="mb-4">Enter your Credentials to access your account</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label fle justify-end">
                <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer  justify-start">
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                <span className="label-text ml-3">I agree to the Terms & Policy</span>
              </label>
            </div>

            <div className="form-control mt-6 m-4">
              <input className="btn btn-accent" type="submit" value="Login" />
            </div>

            <div className="flex w-full flex-col">
              <div className="divider">or </div>
            </div>

            <div className=" ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <GoogleLogin />

                {/* <button className="btn btn-outline">FacebookLogin</button> */}
              </div>
            </div>

            <p className="text-center">
              Don&apos;t have any account ?{" "}
              <Link to={"/register"} className="text-primary">
                Register
              </Link>
            </p>
          </form>
        </div>

        <div
          className="bg-no-repeat bg-cover bg-center h-screen "
          style={{
            background: `url(${loginImage})`,
          }}
        >
          <div className=" flex flex-col items-center justify-center h-screen">
            <div className="">
              <img src={loginLogo} alt="" />
            </div>

            <div className="">
              <p className=" text-primary mx-auto w-8/12">
                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
return (
    <div className="hero min-h-screen">
      <div className="hero-content grid lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>

              <p className="text-center">
                Don&apos;t have any account ?{" "}
                <Link to={"/register"} className="text-orange-500">
                  Register
                </Link>
              </p>
            </form>
            <div className="  w-full ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <GoogleLogin />
                {/* <FacebookLogin /> 
  //             </div>
  //           </div>
  //         </div>
  //       </div>

        <div
          className="bg-no-repeat bg-cover bg-center h-screen "
          style={{
            background: `url(${loginImage})`,
          }}
        >
          <div className=" grid place-content-center">
            <div className="">
              <img src={loginLogo} alt="" />
            </div>

            <div className="">
              <p className=" text-primary w-48">
                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
              </p>
            </div>
          </div>
        </div>
      </div>
  //   </div>
  // );

*/
