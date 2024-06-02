import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
        toast.success(`Successfully added product!`);
      } else {
        state.cart.push(action.payload);
        toast.success(`Successfully added product!`);
      }
    },
    incrementQty: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQty: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, incrementQty, decrementQty, removeFromCart } =
  productSlice.actions;
export default productSlice.reducer;
