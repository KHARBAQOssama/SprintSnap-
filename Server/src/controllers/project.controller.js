const { validationResult } = require("express-validator");
const teamControllerInstance = require("./team.controller");
const { default: mongoose } = require("mongoose");
const InvitationService = require("../services/invitation.service");
const Invitation = require("../models/invitation.model");

class ProjectController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  getAll = async (req, res) => {
    try {
      const projects = await this.service.getAll(req.user._id);
      return res.status(201).json({ projects });
    } catch (error) {}
  };
  getOne = async (req, res) => {
    try {
      let project = await this.service.getOne(req.params.id);
      const invitationService = new InvitationService(Invitation);
      const invitations = await invitationService.getByProject(project._id);

      project = { ...project._doc, invitations };
      return res.status(201).json({ project });
    } catch (error) {
      console.log(error);
    }
  };
  create = async (req, res) => {
    const team = await teamControllerInstance.create(req);
    try {
      const projectBody = { ...req.body, owner: req.user._id, team: team._id };
      const project = await this.service.create(projectBody);
      return res
        .status(201)
        .json({ message: "project created successfully", project });
    } catch (error) {}
  };

  addTeamMembers = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
    } catch (error) {}
  };
  update = async (req, res) => {
    try {
      const project = await this.service.update(req.body);
      console.log(project);
      return res
        .status(200)
        .json({ message: "project updated successfully", project });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProjectController;
