import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./service";
import { Pending, getAllFulfilled, getAllRejected } from "./cases";

const initialState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getAll = createAsyncThunk("project/getAll", async () => {
  try {
    return await projectService.getAll();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const projectSlice = createSlice({
  name: "project",
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
        console.log(action);
        getAllRejected(state, action);
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
