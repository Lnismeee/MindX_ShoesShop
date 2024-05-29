import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products_slice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
