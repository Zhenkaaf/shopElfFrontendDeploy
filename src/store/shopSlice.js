import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shops",
  initialState: {
    shops: [
      { isActiveShop: false, shopId: 1, name: "Mc Donny", disabled: false },
      { isActiveShop: false, shopId: 2, name: "Pizza", disabled: false },
      { isActiveShop: false, shopId: 3, name: "Sushi", disabled: false },
    ],
    isChooseOtherShopDisabled: true,
    selectedShopId: null,
  },
  reducers: {
    selectShop: (state, action) => {
      const selectedShopId = action.payload;
      state.shops.forEach((shop) => {
        shop.isActiveShop = shop.shopId === selectedShopId;
        shop.disabled = shop.isActiveShop ? false : true;
        state.isChooseOtherShopDisabled = false;
        state.selectedShopId = selectedShopId;
      });
    },
    resetShop: (state) => {
      state.shops.forEach((shop) => {
        shop.isActiveShop = false;
        shop.disabled = false;
        state.isChooseOtherShopDisabled = true;
        state.selectedShopId = null;
      });
    },
  },
});
export const { selectShop, resetShop } = shopSlice.actions;

export default shopSlice.reducer;
