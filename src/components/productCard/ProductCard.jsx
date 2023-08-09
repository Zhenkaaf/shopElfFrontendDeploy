import { addProduct } from "../../store/cartSlice";
import s from "./ProductCard.module.css";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product }));
  };

  return (
    <div className={s.productCard}>
      <div className={s.productCard__imgContainer}>
        <img
          src={product.imgUrl}
          alt="Product-photo"
          className={s.productCard__image}
        />
      </div>
      <p className={s.productCard__price}>
        Price: <strong>{product.price}</strong> $
      </p>
      <h3 className={s.productCard__title}>{product.name}</h3>

      <button
        className={s.productCard__button}
        onClick={handleAddToCart}
      >
        add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
