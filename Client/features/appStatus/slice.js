import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingProject: false,
  addingTask: false,
  showingTask: false,
  updatingProject: false,
  modalOpen: false,
  taskToShow: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.addingProject = false;
      state.addingTask = false;
      state.updatingProject = false;
      state.taskToShow = null;
      state.showingTask = false;
      state.modalOpen = false;
    },
    addProject: (state) => {
      closeModal();
      state.modalOpen = true;
      state.addingProject = true;
    },
    updateProject: (state) => {
      closeModal();
      state.modalOpen = true;
      state.updatingProject = true;
    },
    addTask: (state) => {
      closeModal();
      state.modalOpen = true;
      state.addingTask = true;
    },
    addTaskToShow: (state, action) => {
      closeModal();
      console.log(action.payload);
      state.modalOpen = true;
      state.showingTask = true;
      state.taskToShow = action.payload;
    },
  },
});

export const { closeModal, addProject, updateProject, addTask, addTaskToShow } =
  projectSlice.actions;
export default projectSlice.reducer;
