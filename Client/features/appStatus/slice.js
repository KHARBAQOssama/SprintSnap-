import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingProject: false,
  addingTask: false,
  updatingProject: false,
  modalOpen: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.addingProject = false;
      state.addingTask= false;
      state.updatingProject = false;
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
  },
});

export const { closeModal, addProject, updateProject, addTask } = projectSlice.actions;
export default projectSlice.reducer;
