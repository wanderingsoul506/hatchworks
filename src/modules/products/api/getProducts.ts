import { axiosStore } from "../../../lib";
import type { Product, GetProductsPayload } from "../types";

const getProducts = async ({
  page,
  limit,
}: GetProductsPayload): Promise<Product[]> => {
  return axiosStore.get(`/products`, {
    params: {
      page,
      limit,
    },
  });
};

export default getProducts;
