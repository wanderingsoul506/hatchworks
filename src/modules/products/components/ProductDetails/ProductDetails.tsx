import { useNavigate } from "react-router-dom";
import type { Product } from "../../types";
import { renderStars } from "../../utils";
import styles from "./ProductDetails.module.css";
import { useCart } from "../../../../context";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailProps) {
  const { cart, addToCart, removeFromCart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const stars = renderStars(product.rating.rate);

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.detailContainer}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.rating}>
          <span>{stars}</span>
          <span>({product.rating.count} reviews)</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.controls}>
          {quantity > 0 ? (
            <>
              <button
                onClick={handleRemoveFromCart}
                aria-label="Remove from cart"
              >
                −
              </button>
              <span className={styles.quantity}>Quantity: {quantity}</span>
              <button onClick={handleAddToCart} aria-label="Add to cart">
                +
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart}>Add to Cart</button>
          )}
        </div>
        <div className={styles.controls}>
          <button className={styles.button} onClick={handleBackClick}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
