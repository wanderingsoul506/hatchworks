import { axiosStore } from "../../../lib";
import type { Product } from "../types";

const getProducts = async (): Promise<{ data: Product[] }> => {
  return axiosStore.get(`/products`);
};

export default getProducts;
