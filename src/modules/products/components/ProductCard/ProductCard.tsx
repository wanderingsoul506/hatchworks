import { renderStars } from "../../utils";
import type { Product } from "../../types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product: { title, image, price, rating },
}: ProductCardProps) {
  const stars = renderStars(rating.rate);
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <p className={styles.price}>${price.toFixed(2)}</p>
          <div className={styles.stars}>{stars}</div>
        </div>
      </div>
    </div>
  );
}
