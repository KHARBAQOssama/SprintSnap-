const { validationResult } = require("express-validator");

class ProjectController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const projectBody = { ...req.body, owner: req.user._id };
      const project = await this.service.create(projectBody);
      return res.status(201).json({ message: "project created successfully",project });
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
  update = async (req,res)=>{}
}

module.exports = ProjectController;
