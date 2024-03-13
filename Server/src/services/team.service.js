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
  insertOne = async (teamId, newMemberId) => {
    try {
      const team = await this.model.findById(teamId);
      if (!team) {
        throw new Error("Team not found");
      }
      team.members.push(newMemberId);
      await team.save();
      return team;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = TeamService;
