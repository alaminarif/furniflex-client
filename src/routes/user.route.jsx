import Dashboard from "../pages/Dashboard";
import CreateProduct from "../pages/dashboard/CreateProduct";

export const userPaths = [
  {
    path: "home",
    element: <Dashboard />,
  },
  {
    path: "products/create-product",
    element: <CreateProduct />,
  },
];
