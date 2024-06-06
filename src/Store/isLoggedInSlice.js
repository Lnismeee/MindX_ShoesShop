import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("register", async (values) => {
  // Add an async arrow function here
  try {
    const response = await axios.post(
      "https://ss3-services.onrender.com/mindx_ss3_2/user/register",
      values,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const tokenize = createAsyncThunk("tokenize", async (values) => {
  try {
    const response = await axios.post(
      "https://ss3-services.onrender.com/mindx_ss3_2/user/tokenize",
      values,
    );
    // console.log(typeof response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserInfo = createAsyncThunk("getUserInfo", async (values) => {
  try {
    const response = await axios.get(
      "https://ss3-services.onrender.com/mindx_ss3_2/user/getUser",
      {
        headers: {
          Authorization: `Bearer ${values}`,
        },
      },
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    isLoggedIn: false,
    signUpStatus: "",
    signInStatus: "",
    username: "",
    email: "",
    phone_number: "",
    accessToken: "",
  },
  reducers: {
    checkLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    Logout: (state) => {
      // console.log("Logging out!");
      localStorage.removeItem("accessToken");
      state.isLoggedIn = false;
      state.username = "";
      state.email = "";
      state.phone_number = "";
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    // this is for register
    builder.addCase(register.fulfilled, (state, action) => {
      // state.username = action.payload.username;
      // state.email = action.payload.email;
      // state.phone_number = action.payload.phone_number;
      state.signUpStatus = "success";
      // state.isLoggedIn = true;
      console.log("Register successfully!");
    });
    builder.addCase(register.pending, (state) => {
      state.signUpStatus = "pending";
      console.log("Register pending!");
    });
    builder.addCase(register.rejected, (state) => {
      state.signUpStatus = "failed";
      console.log(state.signUpStatus);
    });

    // this is for tokenizing
    builder.addCase(tokenize.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      console.log(state.isLoggedIn);
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", state.accessToken);
      console.log(state.accessToken);
      console.log("tokenize successfully!");
    });
    builder.addCase(tokenize.pending, (state) => {
      state.signInStatus = "pending";
      console.log("tokenize pending!");
    });
    builder.addCase(tokenize.rejected, (state) => {
      state.signInStatus = "failed";
      console.log("tokenize failed!");
    });

    // this is for getting user's info
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
      state.isLoggedIn = true;
      state.signInStatus = "success";
      console.log("get user's info successfully!");
    });
    builder.addCase(getUserInfo.pending, (state) => {
      console.log("get user's info pending!");
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.signInStatus = "failed";
      console.log("get user's info failed!");
    });
  },
});

export const { checkLoggedIn, Logout } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
