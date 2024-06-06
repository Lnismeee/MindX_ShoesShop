import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products_slice.js";
import cartCheckerReducer from "./cartChecker.js";
import isLoggedInReducer from "./isLoggedInSlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    isLoggedIn: isLoggedInReducer,
    cartChecker: cartCheckerReducer,
  },
});

export default store;
