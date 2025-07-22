import { Navigate } from "react-router-dom";

import { BeerRouter } from "../modules/beers";
import { AppMainLayout } from "../components";

export const publicRoutes = [
  {
    path: "/",
    element: <AppMainLayout />,
    children: [
      {
        path: "beers/*",
        element: <BeerRouter />,
      },
      {
        path: "",
        element: <Navigate replace to="/beers" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="." />,
  },
];
