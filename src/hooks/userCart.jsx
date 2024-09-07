/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase.config";

const userCart = () => {
  const [user] = useAuthState(auth);
  const {
    data: cart = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(`https://furniflex-server.onrender.com/carts?email=${user?.email} `);
      return res.data;
    },
  });
  return [cart, refetch, isPending];
};
export default userCart;
