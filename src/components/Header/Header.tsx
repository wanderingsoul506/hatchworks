import { useState } from "react";
import { useCart } from "../../context";
import ThemeToggleButton from "../ThemeToggleButton";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import CartPopup from "../CartPopup";

export default function Header() {
  const { cart } = useCart();

  const [isCartOpen, setCartOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    setCartOpen((open) => !open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Amazing</Link>
      </div>
      <div className={styles.headerButtonContainer}>
        <ThemeToggleButton />
        <div className={styles.cartButtonWrapper}>
          <button
            aria-label="View cart"
            className="icon-button cart-button"
            type="button"
            onClick={handleCartClick}
          >
            🛒
          </button>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}

          {isCartOpen && <CartPopup onClose={() => setCartOpen(false)} />}
        </div>
      </div>
    </header>
  );
}
