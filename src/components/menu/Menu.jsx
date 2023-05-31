import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearYourOrderDB } from "../../store/cartSlice";

const Menu = () => {
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link
              to="/"
              className={styles.menu__link}
              onClick={() => dispatch(clearYourOrderDB())}
            >
              Shop
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link
              to="cart"
              className={styles.menu__link}
            >
              Shopping Cart
            </Link>
          </li>
          <li className={styles.menu__itemPrice}>
            <span className={styles.menu__linkPrice}>
              Total price: {total} $
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
