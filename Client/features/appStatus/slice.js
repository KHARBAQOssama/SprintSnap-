import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingProject: false,
  modalOpen: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.addingProject = false;
      state.modalOpen = false;
    },
    addProject: (state) => {
      closeModal();
      state.modalOpen = true;
      state.addingProject = true;
    },
  },
});

export const { closeModal, addProject } = projectSlice.actions;
export default projectSlice.reducer;
