import { toast } from "react-toastify";

export const Pending = (state) => {
  state.isLoading = true;
};
export const getAllFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.projects = action.payload;
};
export const getAllRejected = (state, action) => {
  if (action.payload.status == 401) {
    state.status = action.payload.status;
  } else {
    state.message = action.payload.data.message;
  }
  state.isLoading = false;
  state.isError = true;
  state.projects = [];
};
export const createProjectFulfilled = (state, action) => {
  console.log(action);
  const projects = [...state.projects, action.payload.project];
  state.projects = projects;
  state.isLoading = false;
  state.isSuccess = true;
  toast.success(action.payload.message);
};
export const createProjectRejected = (state, action) => {
  if (action.payload.status == 401) {
    state.status = action.payload.status;
  } else {
    state.message = action.payload.data.message;
  }
  state.isLoading = false;
  state.isError = true;
};
export const createTaskFulfilled = (state, action) => {
  console.log(action.payload.task);
  if (state.activeProject.tasks) {
    state.activeProject.tasks.push(action.payload.task);
  } else {
    state.activeProject.tasks = [action.payload.task];
  }
  state.isLoading = false;
  state.isSuccess = true;
  toast.success(action.payload.message);
};
export const createTaskRejected = (state, action) => {
  console.log(action);
};
export const changeTaskStatusFulfilled = (state, action) => {
  console.log(action.payload.task);
  for (let i = 0; i < state.activeProject.tasks.length; i++) {
    if (state.activeProject.tasks[i]._id === action.payload.task._id) {
      state.activeProject.tasks[i] = action.payload.task;
      break;
    }
  }
  // if (state.activeProject.tasks) {
  //   state.activeProject.tasks.push(action.payload.task);
  // } else {
  //   state.activeProject.tasks = [action.payload.task];
  // }
  // state.isLoading = false;
  // state.isSuccess = true;
  // toast.success(action.payload.message);
};
export const changeTaskStatusRejected = (state, action) => {
  console.log(action);
};
export const updateProjectFulfilled = (state, action) => {
  console.log(action);
  const projects = state.projects.map((project) => {
    if (project._id == action.payload.project._id)
      return action.payload.project;
    else return project;
  });
  state.activeProject = action.payload.project;
  state.projects = projects;
  state.isLoading = false;
  state.isSuccess = true;
  toast.success(action.payload.message);
};
export const updateProjectRejected = (state, action) => {
  if (action.payload.status == 401) {
    state.status = action.payload.status;
  } else {
    state.message = action.payload.data.message;
  }
  state.isLoading = false;
  state.isError = true;
};
export const getProjectFulfilled = (state, action) => {
  state.activeProject = action.payload.project;
  state.isLoading = false;
  state.isSuccess = true;
};
export const getProjectRejected = (state, action) => {
  console.log(action);
  if (action.payload.status == 401) {
    console.log("hello");
    state.status = action.payload.status;
  } else {
    state.message = action.payload.data.message;
  }
  state.isLoading = false;
  state.isError = true;
};
