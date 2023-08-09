import s from "./cartItem.module.css";
const CartItem = ({
  product,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleDeleteProduct,
}) => {
  return (
    <div
      key={product._id}
      className={s.item}
    >
      <div className={s.item__body}>
        <div className={s.item__imgContainer}>
          <img
            src={product.imgUrl}
            alt={product.name}
            className={s.item__img}
          />
        </div>
        <div className={s.item__details}>
          <h3 className={s.item__title}>{product.name}</h3>

          <div className={s.item__options}>
            <p className={s.item__price}>Price: {product.price} $</p>
            <div>
              <button
                className={s.item__qntBtn}
                onClick={() => handleDecreaseQuantity(product._id)}
              >
                -
              </button>
              <span className={s.item__quantity}>{product.quantity}</span>
              <button
                className={s.item__qntBtn}
                onClick={() => handleIncreaseQuantity(product._id)}
              >
                +
              </button>
            </div>

            <button
              className={s.item__delBtn}
              onClick={() => handleDeleteProduct(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
