import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    shops: shopReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
