// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const authenticate = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/api/v1/seller/auth", userData);
      return response.data; // Assume this includes the token and user info
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const completeAuth = createAsyncThunk(
  "auth/completeAuth",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post(
        "/api/v1/seller/auth/complete",
        userData
      );
      const data = response.data;
      if (response.status === 200) {
        // Assuming you will manage the token purely through Redux now
        localStorage.setItem("token", data.token);
        return { ...data, phone: userData.phone };
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  token: null, // Changed to null initially; will be set upon login
  status: "idle",
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      // Reset state upon logout
      localStorage.removeItem("token")
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Set user and token upon successful login
        state.user = action.payload.phone;
        state.token = action.payload.token;
        state.isAuthenticated = true; // Set isAuthenticated to true upon login
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.message : null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
