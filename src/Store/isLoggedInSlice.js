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
    console.log(error.response.data);
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
    console.log(error.response);
    return error.response.data;
  }
});

export const refreshToken = createAsyncThunk(
  "refreshToken",
  async (values, { rejectWithValue }) => {
    try {
      const value = {
        headers: {
          Authorization: `Bearer ${values}`,
        },
      };
      const response = await axios.get(
        "https://ss3-services.onrender.com/mindx_ss3_2/user/refreshToken",
        value,
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (values, { rejectWithValue }) => {
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
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    isLoggedIn: false, // this is for checking if the user is logged in then it will change the icon of the login Navlink
    signUpStatus: "", // this is for checking if the user is signing up to render the loading screen
    signInStatus: "", // this is for checking if the user is signing in (when tokenizing) to render the loading screen
    userId: "",
    username: "",
    email: "",
    phone_number: "",
    accessToken: "",
    refreshToken: "",
  },
  reducers: {
    checkLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    Logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.isLoggedIn = false;
      state.userId = "";
      state.username = "";
      state.email = "";
      state.phone_number = "";
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    // this is for register
    builder.addCase(register.fulfilled, (state) => {
      state.signUpStatus = "success";
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
      if (action.payload === "Mật khẩu không đúng") {
        state.signInStatus = "wrong password";
        console.log("tokenize failed!");
        return;
      }
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", state.accessToken);
      localStorage.setItem("refreshToken", state.refreshToken);
      console.log(state.isLoggedIn);
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
      state.userId = action.payload.userId;
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
    builder.addCase(getUserInfo.rejected, (state, action) => {
      if (action.payload === "jwt expired") {
        state.signInStatus = "jwt expired";
        console.log("get user info but jwt expired!");
        return;
      } else {
        state.signInStatus = "failed";
      }
      console.log("get user's info failed!");
    });

    // this is for refreshing token
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      console.log("Refresh token successfully!");
      state.signInStatus = "refresh token successfully!";
      state.accessToken = action.payload;
      console.log(state.accessToken);
    });
  },
});

export const { checkLoggedIn, Logout } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
