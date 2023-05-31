import { useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const selectedShopName = useSelector((state) => state.shops.selectedShopName);
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  return (
    <div className={styles.products}>
      {isLoading ? (
        <div className={styles.empty}>Loading...</div>
      ) : (
        <div>
          {selectedShopName ? (
            <div className={styles.products__body}>
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>Choose the shop !!!</div>
          )}
        </div>
      )}
    </div>
  );
};
export default Products;
