import { Routes, Route } from "react-router-dom";
import BeerListPage from "./BeerListPage";

function BeerRouter() {
  return (
    <Routes>
      <Route element={<BeerListPage />} path="/" />
    </Routes>
  );
}

export default BeerRouter;
