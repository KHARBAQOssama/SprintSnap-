import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationService from "./service";
import { getAllFulfilled, getAllRejected } from "./cases";

const initialState = {
  notifications: [],
  isLoading: false,
  isError: false,
};

export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async (user, thunkAPI) => {
    try {
      return await notificationService.getNotifications();
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

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.notifications = [];
    },
    setNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.fulfilled, (state, action) =>
        getAllFulfilled(state, action)
      )
      .addCase(getNotifications.rejected, (state, action) =>
        getAllRejected(state, action)
      );
  },
});

export const { reset, setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
