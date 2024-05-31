import { createSlice } from "@reduxjs/toolkit";



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
        
      } else {
        state.cart.push(action.payload);
        
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
