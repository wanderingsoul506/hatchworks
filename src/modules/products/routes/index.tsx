import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductDetailsPage from "./ProductDetailsPage";

function ProductRouter() {
  return (
    <Routes>
      <Route element={<ProductListPage />} path="/" />
      <Route element={<ProductDetailsPage />} path=":productId" />
    </Routes>
  );
}

export default ProductRouter;
