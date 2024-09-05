import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Custom from "../pages/Custom";
import Blog from "../pages/Blog";

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
    ],
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);
