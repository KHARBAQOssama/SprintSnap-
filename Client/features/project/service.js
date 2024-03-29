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
  // console.log(response);
  return response.data;
};
const deleteProject = async (data) => {
  const response = await api.delete(`/project/${data}`);
  return response.data;
};
const deleteTask = async (data) => {
  const response = await api.delete(`/task/${data}`);
  return response.data;
};
const createTask = async (data) => {
  const response = await api.post("/task", data);
  return response.data;
};
const changeTaskStatus = async (data) => {
  const response = await api.patch(`/task/status/${data.id}`, {
    status: data.status,
  });
  return response.data;
};
const projectService = {
  getAll,
  createProject,
  getProject,
  updateProject,
  createTask,
  changeTaskStatus,
  deleteProject,
  deleteTask
};

export default projectService;
