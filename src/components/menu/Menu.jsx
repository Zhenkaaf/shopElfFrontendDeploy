import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <Link
              to="/"
              className={styles.menu__link}
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
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
