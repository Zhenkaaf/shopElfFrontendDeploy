import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imgBody}>
        <img
          src="https://roll-club.kh.ua/wp-content/uploads/2021/06/pizza.jpg"
          alt="Product"
          className={styles.productCard__image}
        />
      </div>

      <h3 className={styles.productCard__title}>Название товара</h3>
      <p className={styles.productCard__price}>$99.99</p>
      <button className={styles.productCard__button}>Добавить в корзину</button>
    </div>
  );
};
export default ProductCard;
