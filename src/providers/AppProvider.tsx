import * as React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { reactQuery } from "../lib";

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <React.StrictMode>
      <QueryClientProvider client={reactQuery.queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default AppProvider;
