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
            deleted: false,
          },
          "_id name icon description tasks cover createdAt"
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
      const projects = await this.model
        .findOne({
          _id: _id,
          deleted: false,
        })
        .populate({
          path: "team",
          model: "Team",
          populate: {
            path: "members",
            model: "User",
            select: "first_name last_name _id",
          },
        })
        .populate({
          path: "tasks",
          model: "Task",
          populate: {
            path: "assigned_to",
            model: "User",
            select: "first_name last_name _id",
          },
          select: "-__v ",
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
  update = async (data) => {
    try {
      let project = await this.model.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      return await this.getOne(project._id);
    } catch (error) {
      console.log(error);
    }
  };
  delete = async (_id) => {
    try {
      let project = await this.model.findByIdAndUpdate(
        _id,
        { deleted: true },
        {
          new: true,
        }
      );
      return await this.getOne(project._id);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProjectService;
