import { useDispatch } from "react-redux";
import api from "../../src/api";
import { unauthorized } from "../auth/slice";

const getAll = async () => {
  const response = await api.get("/project");
  return response.data.projects;
};
const createProject = async (data) => {
  const response = await api.post("/project", data);
  return response.data;
};

const projectService = {
  getAll,
  createProject,
};

export default projectService;
