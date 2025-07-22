import { useProducts } from "../../hooks";
import { ProductGrid } from "../../components";

export default function ProductListPage() {
  const { data } = useProducts();

  return <ProductGrid products={data?.data || []} />;
}
