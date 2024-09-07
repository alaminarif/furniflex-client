/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase.config";

const userCart = () => {
  const [user] = useAuthState(auth);
  const { data: cart = [], refetch } = useQuery({
    // queryKey: ["cart", user.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/carts?email=${user?.email} `);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default userCart;
