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
  getByProject = async (project) => {
    return await this.model.find({ project });
  };
}

module.exports = InvitationService;
