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
    console.log(req.body);
    return res.json({ ms: "received" });
  };
}

module.exports = ProjectController;
