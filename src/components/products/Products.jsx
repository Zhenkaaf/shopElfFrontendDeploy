import { useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const selectedShopId = useSelector((state) => state.shops.selectedShopId);
  console.log(selectedShopId);

  return (
    <div className={styles.products}>
      {selectedShopId ? (
        <div className={styles.products__body}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      ) : (
        <div className={styles.empty}>Choose the shop !!!</div>
      )}
    </div>
  );
};
export default Products;
