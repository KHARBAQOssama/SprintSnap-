const Team = require("../models/team.model");

class ProjectService {
  model;
  constructor(ProjectModel) {
    this.model = ProjectModel;
  }
  index = async (filterOptions) => {};
  getAll = async (ownerId) => {
    try {
      const teams = await Team.find({ members: ownerId }, "_id");
      const teamIds = teams.map((team) => team._id);

      const projects = await this.model.find(
        {
          $or: [{ owner: ownerId }, { team: { $in: teamIds } }],
        },
        "name icon description"
      );

      return projects;
    } catch (error) {
      throw error;
    }
  };
  create = async (data) => {
    try {
      const newProject = await this.model.create(data);
      return newProject;
    } catch (error) {
      console.log(error);
    }
  };
  update = async (id, data) => {
    try {
      let project = await this.model.findUnique({ where: { _id: id } });
      project = { ...project, ...data };
      await project.save();
      return project;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProjectService;
