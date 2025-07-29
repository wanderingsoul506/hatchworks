import * as React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import { CartProvider, ThemeProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
