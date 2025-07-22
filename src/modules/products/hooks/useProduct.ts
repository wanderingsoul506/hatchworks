import { useQuery } from "@tanstack/react-query";

import { getProduct } from "../api";

const useProduct = (id: number) =>
  useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });

export default useProduct;
