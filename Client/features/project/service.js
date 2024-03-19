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
const updateProject = async (data) => {
  const response = await api.patch(`/project/${data._id}`, data);
  return response.data;
};
const getProject = async (data) => {
  const response = await api.get(`/project/${data}`, data);
  console.log(response);
  return response.data;
};
const createTask = async (data) => {
  const response = await api.post("/task", data);
  return response.data;
};
const projectService = {
  getAll,
  createProject,
  getProject,
  updateProject,
  createTask,
};

export default projectService;
