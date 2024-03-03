export const Pending = (state) => {
  state.isLoading = true;
};
export const registerFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.user = action.payload.user;
  state.message = action.payload.message;
};
export const loginFulfilled = (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.message = action.payload;
  state.user = action.payload.user;
  console.log(action.payload);
  localStorage.setItem("user", JSON.stringify(action.payload.user));
};
export const registerRejected = (state, action) => {
  state.message = action.payload;
  state.isLoading = false;
  state.isError = true;
  state.user = null;
};
export const loginRejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
  state.user = null;
};
export const logoutFulfilled = (state) => {
  state.logoutSuccess = true;
  state.user = null;
};
export const demandVerificationFulfilled = (state) => {
  state.isSuccess = true;
};
export const resetPasswordFulfilled = (state, action) => {
  state.isSuccess = true;
  state.message = action.payload;
};
export const resetPasswordRejected = (state, action) => {
  state.isError = true;
  state.message = "something went wrong, try again";
};
