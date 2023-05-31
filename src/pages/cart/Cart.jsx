import styles from "./Cart.module.css";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  clearPrice,
  clearOrderList,
  submitOrderToDB,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef } from "react";

const Cart = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");

  const orderList = useSelector((state) => state.cart.orderList);
  console.log(orderList);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity({ productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({ productId }));
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct({ productId }));
  };

  const handleSubmitOrderData = () => {
    const orderData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      totalPrice: total,
      products: orderList.map((product) => {
        return {
          name: product.name,
          quantity: product.quantity,
        };
      }),
    };

    dispatch(submitOrderToDB(orderData));

    console.log("User Info:", orderData);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    /* dispatch(clearOrderList());
    dispatch(clearPrice()); */
  };

  return (
    <div className={styles.cart}>
      <div className={styles.form}>
        <form className={styles.form__container}>
          <div className={styles.form__field}>
            <label
              htmlFor="name"
              className={styles.form__label}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className={styles.form__input}
              ref={nameRef}
            />
          </div>

          <div className={styles.form__field}>
            <label
              htmlFor="email"
              className={styles.form__label}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className={styles.form__input}
              ref={emailRef}
            />
          </div>

          <div className={styles.form__field}>
            <label
              htmlFor="phone"
              className={styles.form__label}
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className={styles.form__input}
              ref={phoneRef}
            />
          </div>

          <div className={styles.form__field}>
            <label
              htmlFor="address"
              className={styles.form__label}
            >
              Adress:
            </label>
            <input
              type="text"
              id="address"
              className={styles.form__input}
              ref={addressRef}
            />
          </div>
        </form>
      </div>

      <div className={styles.orderList}>
        <h2 className={styles.orderList__title}>Shopping Cart</h2>
        {orderList.length === 0 ? (
          <p className={styles.emptyCart}>Your cart is empty.</p>
        ) : (
          <div>
            <ul className={styles.productList}>
              {orderList.map((product) => (
                <li
                  key={product._id}
                  className={styles.productItem}
                >
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productPrice}>
                      Price: {product.price} $
                    </p>
                    <div className={styles.quantityActions}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => handleDecreaseQuantity(product._id)}
                      >
                        -
                      </button>
                      <span className={styles.quantity}>
                        {product.quantity}
                      </span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => handleIncreaseQuantity(product._id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <div>Total price: {total} $</div>
              <button
                className={styles.form__button}
                onClick={handleSubmitOrderData}
              >
                SUBMIT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
