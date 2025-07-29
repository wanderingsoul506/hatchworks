import styles from "./SearchBar.module.css";

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
