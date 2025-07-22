import type { JSX } from "react";
import { AppProvider } from "./providers";
import { AppRoutes } from "./routes";

export default function App(): JSX.Element {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
