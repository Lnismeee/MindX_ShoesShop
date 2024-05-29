import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get("https://ss3-services.onrender.com/mindx_ss3_2/universal/fetchproducts");
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}
);

export const getProductById = createAsyncThunk("products/getProductById", async (id) => {
    try {
        const response = await axios.get(`https://ss3-services.onrender.com/mindx_ss3_2/universal/fetchproducts/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(getProductById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(getProductById.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export default productsSlice.reducer;