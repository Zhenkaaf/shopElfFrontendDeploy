import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, resetShop } from "./../../store/shopSlice";
import { clearProducts, fetchProducts } from "./../../store/productSlice";
import axios from "axios";

const Sidebar = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops.shops);
  const pro = useSelector((state) => state.products.products);
  console.log("pro", pro);
  const isChooseOtherShopDisabled = useSelector((state) => {
    return state.shops.isChooseOtherShopDisabled;
  });

  const handleShopSelect = (shopName) => {
    console.log("work");
    dispatch(selectShop(shopName));
    dispatch(fetchProducts(shopName));
  };

  const handleReset = () => {
    dispatch(resetShop());
    dispatch(clearProducts());
  };

  const testFn = async () => {
    console.log("testFnWork");
    try {
      /* const response = await axios.get("http://localhost:8001/pizzas"); */
      const response = await axios.get(
        "https://wicked-kit-slug.cyclic.app/pizzas"
      );
      const posts = response.data;
      console.log("pizzas", posts); // Ваши данные о постах
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.sidebar}>
      <h2>Shops:</h2>
      <div className={styles.shops}>
        {shops.map((shop) => (
          <button
            key={shop.name}
            onClick={() => handleShopSelect(shop.name)}
            className={`${styles.shops__item} ${
              shop.isActiveShop ? styles.selectedShop : ""
            }`}
            disabled={shop.disabled}
          >
            {shop.name}
          </button>
        ))}
      </div>
      <button onClick={testFn}>TESTGET</button>
      <button
        onClick={handleReset}
        disabled={isChooseOtherShopDisabled}
      >
        Choose other shop
      </button>
    </div>
  );
};
export default Sidebar;
