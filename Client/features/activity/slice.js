import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import activityService from "./service";
import { Pending, getAllFulfilled, getAllRejected } from "./cases";

const initialState = {
  activities: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAll = createAsyncThunk(
  "activity/getAll",
  async (a = null, thunkAPI) => {
    try {
      const response = await activityService.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const activitySlice = createSlice({
  name: "activity",
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
      .addCase(getAll.pending, (state) => {
        Pending(state);
      })
      .addCase(getAll.fulfilled, (state, action) => {
        getAllFulfilled(state, action);
      })
      .addCase(getAll.rejected, (state, action) => {
        getAllRejected(state, action);
      });
  },
});

export const { reset } = activitySlice.actions;
export default activitySlice.reducer;
