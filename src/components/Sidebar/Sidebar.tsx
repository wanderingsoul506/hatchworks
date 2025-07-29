import styles from "./Sidebar.module.css";

interface SidebarProps {
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  onSelectCategory,
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h3>Categories</h3>
      <ul>
        <li
          className={!activeCategory ? styles.active : ""}
          onClick={() => onSelectCategory(null)}
        >
          All
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={activeCategory === cat ? styles.active : ""}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
