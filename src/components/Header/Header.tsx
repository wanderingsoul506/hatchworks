import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">🛍️ My Store</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
