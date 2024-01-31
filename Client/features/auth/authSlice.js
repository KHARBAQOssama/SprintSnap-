import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import {
  registerFulfilled,
  registerPending,
  registerRejected,
} from "./authCases";

const userFormLocalStorage = localStorage.getItem("user");
const user = userFormLocalStorage ? JSON.parse(localStorage.getItem("user")) : null;
const initialState = {
  user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => registerPending(state))
      .addCase(register.fulfilled, (state, action) =>
        registerFulfilled(state, action)
      )
      .addCase(register.rejected, (state, action) =>
        registerRejected(state, action)
      );
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
