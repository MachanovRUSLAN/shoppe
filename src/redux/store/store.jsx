import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../addSlice/index";

export const store = configureStore({
  reducer: {
    counter: productReducer,
  },
});
