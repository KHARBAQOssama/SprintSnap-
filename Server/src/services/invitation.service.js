const teamControllerInstance = require("../controllers/team.controller");

class InvitationService {
  model;
  constructor(Model) {
    this.model = Model;
  }
  create = async (InvitInfo) => {
    try {
      const newInvitation = new this.model(InvitInfo);
      const createdInvitation = await newInvitation.save();
      return createdInvitation;
    } catch (error) {
      throw error;
    }
  };
  getInvitation = async (searchParams) => {
    return await this.model.findOne({
      $and: [{ user: searchParams.user }, { project: searchParams.project }],
    });
  };
  getById = async (id) => {
    return await this.model
      .findById(id)
      .populate({
        path: "user",
        model: "User",
        select: "-password -refreshToken -__v ",
      })
      .populate({
        path: "by",
        model: "User",
        select: "-password -refreshToken -__v ",
      })
      .populate({
        path: "project",
        model: "Project",
        select: "-description -task_status -status -team -deleted -__v ",
      });
  };
  confirm = async (id) => {
    try {
      const invitation = await this.model.findById(id).populate({
        path: "project",
        model: "Project",
        populate: {
          path: "team",
          model: "Team",
        },
      });
      if (!invitation) {
        throw new Error("Invitation not found");
      }
      const team = await teamControllerInstance.insertOne(
        invitation.project.team,
        invitation.user
      );
      await this.model.findByIdAndDelete(id);
      return team;
    } catch (error) {
      throw error;
    }
  };
  getByProject = async (project) => {
    return await this.model.find({ project });
  };
}

module.exports = InvitationService;
