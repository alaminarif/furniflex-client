import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";

import { useEffect } from "react";
import { auth } from "../lib/firebase.config";
import loginImage from "../assets/login.png";
import loginLogo from "../assets/login-logo.png";

export default function Register() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(email, password).then((data) => {
      //

      console.log(data);
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: name,
        };

        console.log(userInfo);

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

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2">
        <div className="flex justify-center  h-screen items-center">
          <form onSubmit={handleSubmit} className="bg-neutral p-4 rounded-sm w-9/12">
            <h1 className="text-2xl font-bold mt-10"> Welcome Back!</h1>
            <p className="mb-4">Enter your Credentials to access your account</p>

            <div className=" flex gap-4">
              <div className="form-control w-full">
                {" "}
                <label className="label">
                  <span className="label-text">First Name</span>{" "}
                </label>
                <input type="name" placeholder="first Name" className="input input-bordered" name="firstName" required />{" "}
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="email" placeholder="Last Name" name="lastName" className="input input-bordered" required />
              </div>
            </div>

            <div className="form-control w-full">
              {" "}
              <label className="label">
                <span className="label-text">Name</span>{" "}
              </label>
              <input type="email" placeholder="email" className="input input-bordered" name="email" required />{" "}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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
              <Link to={"/login"} className="text-primary">
                Login
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
  // return (
  //   <div className="hero min-h-screen bg-base-200">
  //     <div className="hero-content grid grid-cols-2 w-full mx-auto">
  //       <div className="text-center lg:text-left">
  //         <h1 className="text-5xl font-bold">Register now!</h1>
  //         <p className="py-6">
  //           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
  //           id nisi.
  //         </p>
  //       </div>
  //       <div className=" card shadow-2xl bg-base-100 max-w-lg">
  //         <form onSubmit={handleSubmit} className="card-body  ">
  //
  //           <div className="form-control">
  //             <label className="label">
  //               <span className="label-text">Email</span>
  //             </label>
  //             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
  //           </div>
  //           <div className="form-control">
  //             <label className="label">
  //               <span className="label-text">Password</span>
  //             </label>
  //             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
  //           </div>
  //           <div className="form-control mt-2">
  //             <button className="btn btn-primary">Register</button>
  //             <p className="text-center">
  //               Already have an account ?{" "}
  //               <Link to={"/login"} className="text-orange-500">
  //                 Login
  //               </Link>
  //             </p>
  //           </div>
  //         </form>
  //         <div className="  w-full ">
  //           <div className="flex flex-col gap-2 mx-7 mb-7">
  //             <GoogleLogin />
  //             {/* <FacebookLogin /> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
