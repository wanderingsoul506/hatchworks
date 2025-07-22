import type { Product } from "../../types";
import { renderStars } from "../../utils";
import styles from "./ProductDetails.module.css";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetails({
  product: { title, image, price, rating, category, description },
}: ProductDetailProps) {
  const stars = renderStars(rating.rate);

  return (
    <div className={styles.detailContainer}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.info}>
        <h2>{title}</h2>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.rating}>
          <span>{stars}</span>
          <span>({rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
}
