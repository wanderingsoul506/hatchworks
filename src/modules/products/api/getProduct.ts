import { axiosStore } from "../../../lib";
import type { Product } from "../types";

const getProduct = (id: number): Promise<{ data: Product }> =>
  axiosStore.get(`/products/${id}`);

export default getProduct;
