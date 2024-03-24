import api from "../../src/api";

const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  console.log(response);
  if (response.status == 201) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response.data;
};
const login = async (userData) => {
  const response = await api.post("/auth/login", userData);
  console.log(response);
  if (response.status == 201) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response.data;
};

const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

const resetPassword = async (data) => {
  const response = await api.post("/auth/password/reset", data);
  return response.data;
};

const demandVerification = async () => {
  const response = await api.post("/auth/email/demandverification");
  console.log(response);
  return response.data;
};
const authService = {
  register,
  logout,
  login,
  demandVerification,
  resetPassword,
};

export default authService;
