import api from "../../src/api";

const getAll = async () => {
  const response = await api.get("/activity");
  return response.data;
};
const activityService = {
  getAll,
};

export default activityService;
