import { useEffect, useRef } from "react";
import { useCart } from "../../context";

import styles from "./CartPopup.module.css";

interface CartPopupProps {
  onClose: () => void;
}

export default function CartPopup({ onClose }: CartPopupProps) {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        const isCartButton = (event.target as HTMLElement)?.closest(
          ".cart-button"
        );
        if (!isCartButton) {
          onClose();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={styles.cartPopup}
      role="dialog"
      aria-modal="true"
      ref={popupRef}
    >
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartItems}>
            {cart.map(({ id, title, quantity, image, price }) => (
              <li key={id} className={styles.cartItem}>
                <img src={image} alt={title} className={styles.cartItemImage} />
                <div className={styles.cartItemInfo}>
                  <span className={styles.cartItemTitle}>{title}</span>
                  <span className={styles.cartItemQuantity}>× {quantity}</span>
                  <span className={styles.cartItemSubtotal}>
                    ${(price * quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.cartTotal}>
            <strong>Total:</strong> ${total.toFixed(2)}
          </div>

          <div className={styles.cartActions}>
            <button
              type="button"
              onClick={clearCart}
              className={styles.cartClear}
            >
              Clear Cart
            </button>
            <button
              type="button"
              onClick={() => alert("Coming soon...?")}
              className={styles.cartCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
