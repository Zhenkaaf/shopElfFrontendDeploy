import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitOrderToDB = createAsyncThunk(
  "cart/submitOrderToDB",
  async (orderData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://wicked-kit-slug.cyclic.app/neworder",
        orderData
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orderList: [],
    totalPrice: 0,
    loading: false,
    error: null,
    yourOrderDB: null,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.orderList.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.orderList.push({ ...product, quantity: 1 });
      }
      state.totalPrice += product.price;
    },

    deleteProduct: (state, action) => {
      const { productId } = action.payload;
      const index = state.orderList.findIndex((item) => item._id === productId);
      if (index !== -1) {
        const deletedProduct = state.orderList[index];
        state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
        state.orderList.splice(index, 1);
      }
    },

    increaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.orderList.find((item) => item._id === productId);
      product.quantity += 1;

      state.totalPrice += product.price;
    },

    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.orderList.find((item) => item._id === productId);
      if (product.quantity > 1) {
        product.quantity -= 1;
        state.totalPrice -= product.price;
      }
    },

    clearPrice: (state) => {
      state.totalPrice = 0;
    },

    clearOrderList: (state) => {
      state.orderList = [];
    },

    clearYourOrderDB: (state) => {
      if (state.yourOrderDB === null) {
        return;
      }
      state.yourOrderDB = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrderToDB.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitOrderToDB.fulfilled, (state, action) => {
        state.yourOrderDB = action.payload;
        state.loading = false;

        state.orderList = [];
        state.totalPrice = 0;
      })
      .addCase(submitOrderToDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {
  addProduct,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  clearPrice,
  clearOrderList,
  clearYourOrderDB,
} = cartSlice.actions;

export default cartSlice.reducer;
