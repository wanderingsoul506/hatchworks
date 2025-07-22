import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";

function ProductRouter() {
  return (
    <Routes>
      <Route element={<ProductListPage />} path="/" />
    </Routes>
  );
}

export default ProductRouter;
