import { Navigate } from "react-router-dom";

import { ProductRouter } from "../modules/products";
import { AppMainLayout } from "../components";

export const publicRoutes = [
  {
    path: "/",
    element: <AppMainLayout />,
    children: [
      {
        path: "products/*",
        element: <ProductRouter />,
      },
      {
        path: "",
        element: <Navigate replace to="/products" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="." />,
  },
];
