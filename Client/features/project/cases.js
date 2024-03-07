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
  const project = {
    _id: action.payload.project._id,
    icon: action.payload.project.icon,
    name: action.payload.project.name,
  };
  const projects = [...state.projects, project]
  state.projects = projects
  state.isLoading = false;
  state.isSuccess = true;
  toast.success(action.payload.message)
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
