import { useRef } from "react";
import s from "./checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { submitOrderToDB } from "../../store/cartSlice";
import Cart from "../../components/cart/Cart";

const Checkout = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");

  const orderList = useSelector((state) => state.cart.orderList);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleSubmitOrderData = () => {
    if (phoneRef.current.value.trim() === "") {
      alert("Please enter your phone number!!!");
      return;
    }
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

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
  };

  return (
    <div className={s.checkout}>
      <div className={s.checkout__left}>
        <div className={s.map}>
          <div className={s.map__container}>
            <div className={s.map__body}>map in progress</div>
          </div>
        </div>
        <div className={s.form}>
          <div className={s.form__container}>
            <form className={s.form__body}>
              <h2 className={s.form__title}>Your contact details</h2>
              <div className={s.form__topRow}>
                <div className={s.form__field}>
                  <label
                    htmlFor="address"
                    className={s.form__label}
                  >
                    Adress
                  </label>
                  <input
                    type="text"
                    id="address"
                    className={s.form__input}
                    ref={addressRef}
                  />
                </div>
                <div className={s.form__field}>
                  <label
                    htmlFor="email"
                    className={s.form__label}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={s.form__input}
                    ref={emailRef}
                  />
                </div>
              </div>
              <div className={s.form__bottomRow}>
                <div
                  className={`${s.form__field} ${s.form__field_bottom} ${s.form__field_name}`}
                >
                  <label
                    htmlFor="name"
                    className={s.form__label}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={s.form__input}
                    ref={nameRef}
                  />
                </div>

                <div className={`${s.form__field} ${s.form__field_bottom}`}>
                  <label
                    htmlFor="phone"
                    className={s.form__label}
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={s.form__input}
                    ref={phoneRef}
                  />
                </div>
              </div>

              {/* <button
                className={s.form__button}
                onClick={handleSubmitOrderData}
              >
                SUBMIT
              </button> */}
            </form>
          </div>
        </div>
      </div>
      <div className={s.checkout__right}>
        <Cart handleSubmitOrderData={handleSubmitOrderData} />
      </div>
    </div>
  );
};
export default Checkout;
