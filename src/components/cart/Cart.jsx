import s from "./Cart.module.css";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import OrderFromDB from "../orderFromDB/OrderFromDB";
import CartItem from "../cartItem/CartItem";

const Cart = ({ handleSubmitOrderData }) => {
  const orderList = useSelector((state) => state.cart.orderList);
  const total = useSelector((state) => state.cart.totalPrice);
  const loading = useSelector((state) => state.cart.loading);
  const yourOrderFromDB = useSelector((state) => state.cart.yourOrderDB);
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

  return (
    <div className={s.cart}>
      {loading ? (
        <div className={s.processing}>Your order is processing...</div>
      ) : yourOrderFromDB ? (
        <OrderFromDB />
      ) : (
        <div className={s.cart__container}>
          <div className={s.cart__body}>
            {orderList.length === 0 ? (
              <p className={s.cart__empty}>Your cart is empty.</p>
            ) : (
              <div>
                <ul className={`${s.cart__list} ${s.items}`}>
                  {orderList.map((product) => (
                    <CartItem
                      product={product}
                      handleDecreaseQuantity={handleDecreaseQuantity}
                      handleIncreaseQuantity={handleIncreaseQuantity}
                      handleDeleteProduct={handleDeleteProduct}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {loading || orderList.length === 0 ? null : (
        <div className={s.cart__totals}>
          <div className={s.cart__price}>Total price: {total} $</div>
          <button
            className={s.cart__button}
            onClick={handleSubmitOrderData}
          >
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
