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

      const projects = await this.model
        .find(
          {
            $or: [{ owner: ownerId }, { team: { $in: teamIds } }],
          },
          "_id name icon description"
        )
        .populate({
          path: "team",
          model: "Team",
          populate: {
            path: "members",
            model: "User",
            select: "-password -refreshToken",
          },
        });

      return projects;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  getOne = async (_id) => {
    try {
      // const teams = await Team.find({ members: ownerId }, "_id");
      // const teamIds = teams.map((team) => team._id);

      const projects = await this.model.findById(_id).populate({
        path: "team",
        model: "Team",
        populate: {
          path: "members",
          model: "User",
          select: "-password -refreshToken",
        },
      });

      return projects;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  create = async (data) => {
    try {
      const newProject = await this.model.create(data);
      const project = await this.model.findById(newProject._id).populate({
        path: "team",
        model: "Team",
        populate: {
          path: "members",
          model: "User",
          select: "-password -refreshToken",
        },
      });
      return project;
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
