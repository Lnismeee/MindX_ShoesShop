import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products_slice.js";
import isLoggedInReducer from "./isLoggedInSlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    isLoggedIn: isLoggedInReducer,
  },
});

export default store;
