import * as React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

import "./styles/global.css";
import { ThemeProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
