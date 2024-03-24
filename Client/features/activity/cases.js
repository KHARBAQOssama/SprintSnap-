export const Pending = (state) => {
  state.isLoading = true;
};
export const getAllFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.activities = action.payload;
  console.log(action.payload);
};
export const getAllRejected = (state, action) => {
  if (action.payload.status == 401) {
    state.status = action.payload.status;
  } else {
    state.message = action.payload.data.message;
  }
  state.isLoading = false;
  state.isError = true;
  state.activities = [];
};