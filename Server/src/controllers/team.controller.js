const Team = require("../models/team.model");
const TeamService = require("../services/team.service");

class TeamController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  create = async (req) => {
    const team = await this.service.create(req.user._id);
    return team ;
  };
}
const service = new TeamService(Team);
const teamControllerInstance = new TeamController(service);

module.exports = teamControllerInstance