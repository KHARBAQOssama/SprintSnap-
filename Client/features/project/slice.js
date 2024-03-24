import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "./service";
import {
  Pending,
  changeTaskStatusFulfilled,
  createProjectFulfilled,
  createProjectRejected,
  createTaskFulfilled,
  createTaskRejected,
  deleteProjectFulfilled,
  deleteProjectRejected,
  getAllFulfilled,
  getAllRejected,
  getProjectFulfilled,
  getProjectRejected,
  updateProjectFulfilled,
  updateProjectRejected,
} from "./cases";

const initialState = {
  projects: [],
  activeProject: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  status: null,
  isDeleted : false,
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
export const createTask = createAsyncThunk(
  "project/createTask",
  async (data, thunkAPI) => {
    try {
      const response = await projectService.createTask(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
export const changeTaskStatus = createAsyncThunk(
  "project/changeTaskStatus",
  async (data, thunkAPI) => {
    try {
      const response = await projectService.changeTaskStatus(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const updateProject = createAsyncThunk(
  "project/updateProject",
  async (data, thunkAPI) => {
    try {
      const response = await projectService.updateProject(data);
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
export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (data, thunkAPI) => {
    try {
      const response = await projectService.deleteProject(data);
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
      state.isDeleted = false;
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
      .addCase(updateProject.fulfilled, (state, action) => {
        updateProjectFulfilled(state, action);
      })
      .addCase(updateProject.rejected, (state, action) => {
        updateProjectRejected(state, action);
      })
      .addCase(getProject.fulfilled, (state, action) => {
        getProjectFulfilled(state, action);
      })
      .addCase(getProject.rejected, (state, action) => {
        getProjectRejected(state, action);
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        deleteProjectFulfilled(state, action);
      })
      .addCase(deleteProject.rejected, (state, action) => {
        deleteProjectRejected(state, action);
      })
      .addCase(createTask.fulfilled, (state, action) => {
        createTaskFulfilled(state, action);
      })
      .addCase(createTask.rejected, (state, action) => {
        createTaskRejected(state, action);
      })
      .addCase(changeTaskStatus.fulfilled, (state, action) => {
        changeTaskStatusFulfilled(state, action);
      });
  },
});

export const { reset } = projectSlice.actions;
export default projectSlice.reducer;
