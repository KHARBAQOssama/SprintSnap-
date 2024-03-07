import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./service";
import { Pending, getAllFulfilled, getAllRejected } from "./cases";
import { useDispatch } from "react-redux";

const initialState = {
  projects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  status: null,
};

export const getAll = createAsyncThunk(
  "project/getAll",
  async (a = null, thunkAPI) => {
    try {
      const response = await projectService.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
export const createProject = createAsyncThunk(
  "project/createProject",
  async (data, thunkAPI) => {
    try {
      const response = await projectService.createProject(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.status = null;
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
      })
      .addCase(createProject.pending, (state) => {
        Pending(state);
      })
      .addCase(createProject.fulfilled, (state, action) => {
        createProjectFulfilled(state, action);
      })
      .addCase(createProject.rejected, (state, action) => {
        createProjectRejected(state, action);
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
