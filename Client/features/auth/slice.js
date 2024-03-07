import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./service";
import {
  Pending,
  demandVerificationFulfilled,
  loginFulfilled,
  loginRejected,
  logoutFulfilled,
  registerFulfilled,
  registerRejected,
  resetPasswordFulfilled,
  resetPasswordRejected,
} from "./cases";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: localStorage.getItem("user") ? true : false,
  isError: false,
  isSuccess: false,
  logoutSuccess: false,
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

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const demandVerification = createAsyncThunk(
  "auth/demandverification",
  async (user, thunkAPI) => {
    try {
      return await authService.demandVerification(user);
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

export const resetPassword = createAsyncThunk(
  "auth/password/reset",
  async (data) => {
    await authService.resetPassword(data);
  }
);

export const unauthorized = createAsyncThunk("auth/unauthorized", async () => {

  return true;
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
      state.logoutSuccess = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        Pending(state);
      })
      .addCase(register.fulfilled, (state, action) =>
        registerFulfilled(state, action)
      )
      .addCase(register.rejected, (state, action) =>
        registerRejected(state, action)
      )
      .addCase(login.pending, (state) => {
        Pending(state);
      })
      .addCase(login.fulfilled, (state, action) =>
        loginFulfilled(state, action)
      )
      .addCase(login.rejected, (state, action) => loginRejected(state, action))
      .addCase(logout.fulfilled, (state) => logoutFulfilled(state))
      .addCase(demandVerification.fulfilled, (state) =>
        demandVerificationFulfilled(state)
      )
      .addCase(resetPassword.fulfilled, (state, action) =>
        resetPasswordFulfilled(state, action)
      )
      .addCase(resetPassword.rejected, (state, action) => {
        resetPasswordRejected(state, action);
      })
      .addCase(unauthorized.fulfilled, (state, action) => {
        localStorage.removeItem("user");
        reset();
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
