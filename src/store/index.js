import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    shops: shopReducer,
    products: productReducer,
  },
});

export default store;
