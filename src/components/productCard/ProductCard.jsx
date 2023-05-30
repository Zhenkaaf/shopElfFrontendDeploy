import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imgBody}>
        <img
          src={product.imgUrl}
          alt="Product"
          className={styles.productCard__image}
        />
      </div>

      <h3 className={styles.productCard__title}>{product.name}</h3>
      <p className={styles.productCard__price}>{product.price} $</p>
      <button className={styles.productCard__button}>add to Cart</button>
    </div>
  );
};
export default ProductCard;
