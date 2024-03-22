const Project = require("../models/project.model");
const canEdit = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    console.log(project);
    if(!project)       return res.status(404).json({ message: "project not found" });
    if (project.owner == req.user._id) {
      next();
    } else {
      return res.status(403).json({ message: "can not edit this project" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { canEdit };
