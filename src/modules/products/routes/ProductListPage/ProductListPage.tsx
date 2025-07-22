import { useState } from "react";
import { useProducts } from "../../hooks";

export default function ProductListPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError, isFetching } = useProducts({
    limit,
    page,
  });

  return <div>Product List</div>;
}
