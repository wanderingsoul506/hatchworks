import { useProducts } from "../../hooks";
import { ProductGrid } from "../../components";
import { useMemo, useState } from "react";
import { Searchbar, Sidebar } from "../../../../components";
import { useDebouncedValue } from "../../../../hooks";

import styles from "./ProductListPage.module.css";

export default function ProductListPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [debouncedSearch] = useDebouncedValue(searchQuery, 1000);

  const { data } = useProducts();

  const allProducts = useMemo(() => data?.data || [], [data?.data]);

  const categories = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.category));
    return Array.from(set);
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesCategory = activeCategory
        ? p.category === activeCategory
        : true;
      const matchesSearch = p.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, debouncedSearch, allProducts]);

  return (
    <div>
      <Searchbar query={searchQuery} onChange={setSearchQuery} />
      <div className={styles.container}>
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className={styles.grid}>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
