import { addProduct } from "../../store/cartSlice";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product }));
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imgBody}>
        <img
          src={product.imgUrl}
          alt="Product"
          className={styles.productCard__image}
        />
      </div>
      <p className={styles.productCard__price}>{product.price} $</p>
      <h3 className={styles.productCard__title}>{product.name}</h3>

      <button
        className={styles.productCard__button}
        onClick={handleAddToCart}
      >
        add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
