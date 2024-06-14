import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const orderProduct = createAsyncThunk(
  "cart/orderProduct",
  async (values) => {
    try {
      console.log(values);
      const body = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        items: values.items,
      };
      const accessToken = values.accessToken;
      const response = await axios.post(
        "https://ss3-services.onrender.com/mindx_ss3_2/universal/ordering",
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  cart: [],
  status: null,
};

const cartChecker = createSlice({
  name: "cartChecker",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length === 0) {
        state.cart = [...state.cart, action.payload];
        return;
      }
      const item = state.cart.find((item) => item.id === action.payload.id);
      console.log(item);
      if (item) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeById: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.cart = [];
    },
    updateCart: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
    },
    setOrderStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(orderProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.cart = [];
      })
      .addCase(orderProduct.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addToCart, removeById, removeAll, updateCart, setOrderStatus } =
  cartChecker.actions;

export default cartChecker.reducer;
