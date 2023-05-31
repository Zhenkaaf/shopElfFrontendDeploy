import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitOrderToDB = createAsyncThunk(
  "cart/submitOrderToDB",
  async (orderData, thunkAPI) => {
    console.log("thunkGO");
    try {
      const response = await axios.post(
        "https://wicked-kit-slug.cyclic.app/neworder",
        orderData
      );
      console.log("Order placed:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    orderList: [],
    totalPrice: 0,
    clientData: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.orderList.find(
        (item) => item._id === product._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        /*  existingProduct.price += existingProduct.price; */
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
      /*  product.price += product.price; */
      state.totalPrice += product.price;
    },

    decreaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.orderList.find((item) => item._id === productId);
      if (product.quantity > 1) {
        product.quantity -= 1;
        /*  product.price -= product.price; */
        state.totalPrice -= product.price;
      }
    },

    clearPrice: (state) => {
      state.totalPrice = 0;
    },

    clearOrderList: (state) => {
      state.orderList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrderToDB.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitOrderToDB.fulfilled, (state, action) => {
        state.loading = false;
        // Дополнительные действия после успешной отправки заказа
        state.orderList = [];
        state.totalPrice = 0;
        state.clientData = {
          name: "",
          email: "",
          phone: "",
          address: "",
        };
      })
      .addCase(submitOrderToDB.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // Дополнительные действия при возникновении ошибки
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
} = cartSlice.actions;

export default cartSlice.reducer;
