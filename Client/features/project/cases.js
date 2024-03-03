export const Pending = (state) => {
  state.isLoading = true;
};
export const getAllFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.projects = action.payload.projects;
};
export const getAllRejected = (state, action) => {
  state.message = action.payload;
  state.isLoading = false;
  state.isError = true;
  state.projects = [];
};
