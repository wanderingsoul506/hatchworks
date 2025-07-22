import { useState } from "react";
import { useProducts } from "../../hooks";
import { ProductGrid } from "../../components";

export default function ProductListPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data } = useProducts({
    limit,
    page,
  });

  return <ProductGrid products={data?.data || []} />;
}
