import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
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
                        return { ...item, quantity: item.quantity + action.payload.quantity };
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
    },
});

export const { addToCart, removeById, removeAll, updateCart } = cartChecker.actions;

export default cartChecker.reducer;