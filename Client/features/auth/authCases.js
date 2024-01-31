export const registerPending = (state) =>{
    state.isLoading = true;
}
export const registerFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.user = action.payload.user;
};
export const registerRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload.message;
  state.user = null;
};