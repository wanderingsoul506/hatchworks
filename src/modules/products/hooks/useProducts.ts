import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api";
import type { GetProductsPayload } from "../types";

const useProducts = (payload: GetProductsPayload) =>
  useQuery({
    queryKey: ["products", payload],
    queryFn: () => getProducts(payload),
  });

export default useProducts;
