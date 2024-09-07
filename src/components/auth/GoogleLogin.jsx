import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLoging = () => {
    signInWithGoogle().then((data) => {
      console.log(data?.user?.email);
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://furniflex-server.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
            console.log(data?.token);
          });
      }
    });
  };

  return (
    <div>
      <button onClick={handleGoogleLoging} className=" px-5 py-3 bg-yellow-500 text-white w-full rounded-lg">
        Google Login
      </button>
    </div>
  );
}
