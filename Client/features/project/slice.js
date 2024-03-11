import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./service";
import { Pending, createProjectFulfilled, createProjectRejected, getAllFulfilled, getAllRejected, getProjectFulfilled, getProjectRejected } from "./cases";


const initialState = {
  projects: [],
  activeProject : null,
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
export const getProject = createAsyncThunk(
  "project/getProject",
  async (data, thunkAPI) => {
    try {
      const response = await projectService.getProject(data);
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
      })
      .addCase(getProject.fulfilled, (state, action) => {
        getProjectFulfilled(state, action);
      })
      .addCase(getProject.rejected, (state, action) => {
        getProjectRejected(state, action);
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
