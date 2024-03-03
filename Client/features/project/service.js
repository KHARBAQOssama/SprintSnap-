import api from "../../src/api";

const getAll = async () => {
  try {
    const response = await api.get("/project");
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const projectService = {
  getAll,
};

export default projectService;
