import React from "react";

import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";

export function AppRoutes() {
  const element = useRoutes(publicRoutes);

  return <React.Fragment>{element}</React.Fragment>;
}
