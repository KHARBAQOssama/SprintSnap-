class TeamService {
  model;
  constructor(Model) {
    this.model = Model;
  }
  create = async (teamMemberId) => {
    try {
      const newTeam = new this.model({
        members: [teamMemberId],
      });

      const createdTeam = await newTeam.save();

      return createdTeam;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = TeamService;
