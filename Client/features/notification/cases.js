export const Pending = (state) => {
  state.isLoading = true;
};
export const getAllFulfilled = (state, action) => {
  state.isLoading = false;
  state.notifications = action.payload;
  // console.log(action);
};
export const getAllRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
};
