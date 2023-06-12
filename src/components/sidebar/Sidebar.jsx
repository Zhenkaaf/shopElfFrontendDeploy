import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, resetShop } from "./../../store/shopSlice";
import { clearProducts, fetchProducts } from "./../../store/productSlice";
import { clearPrice, clearOrderList } from "../../store/cartSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops.shops);
  const isChooseOtherShopDisabled = useSelector((state) => {
    return state.shops.isChooseOtherShopDisabled;
  });

  const handleShopSelect = (shopName) => {
    dispatch(selectShop(shopName));
    dispatch(fetchProducts(shopName));
  };

  const handleReset = () => {
    dispatch(resetShop());
    dispatch(clearProducts());
    dispatch(clearPrice());
    dispatch(clearOrderList());
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
