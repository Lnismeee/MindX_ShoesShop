import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./producs_slice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
