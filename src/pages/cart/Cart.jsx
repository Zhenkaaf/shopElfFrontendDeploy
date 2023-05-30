import OrderList from "../../components/orderList/OrderList";
import UserInfo from "../../components/userInfo/UserInfo";
import styles from "./Cart.module.css";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <UserInfo />
      <OrderList />
    </div>
  );
};
export default Cart;
