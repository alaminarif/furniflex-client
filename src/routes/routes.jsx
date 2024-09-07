import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "../layouts/DashboardLayout";
import ErrorPage from "../pages/ErrorPage";
import Categories from "../pages/Categories";
import Custom from "../pages/Custom";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import { userPaths } from "./user.route";
import Register from "../pages/Register";
import Products from "../components/ui/Products";
import Carts from "../components/ui/Carts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/custom",
        element: <Custom />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/carts",
        element: <Carts />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: userPaths,
  },
]);
