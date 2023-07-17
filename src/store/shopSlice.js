import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shops",
  initialState: {
    shops: [
      { isActiveShop: false, name: "donny", disabled: false },
      { isActiveShop: false, name: "pizzas", disabled: false },
      { isActiveShop: false, name: "sushi", disabled: false },
    ],
    isChooseOtherShopDisabled: true,
    selectedShopName: null,
  },
  reducers: {
    selectShop: (state, action) => {
      const selectedShopName = action.payload;
      state.shops.forEach((shop) => {
        shop.isActiveShop = shop.name === selectedShopName;
        shop.disabled = shop.isActiveShop ? false : true;
      });
      state.isChooseOtherShopDisabled = false;
      state.selectedShopName = selectedShopName;
    },
    resetShop: (state) => {
      state.shops.forEach((shop) => {
        shop.isActiveShop = false;
        shop.disabled = false;
      });
      state.isChooseOtherShopDisabled = true;
      state.selectedShopName = null;
    },
  },
});
export const { selectShop, resetShop } = shopSlice.actions;

export default shopSlice.reducer;
