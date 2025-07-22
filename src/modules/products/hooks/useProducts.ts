import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api";

const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

export default useProducts;
