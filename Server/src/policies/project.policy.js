const Project = require("../models/project.model");
const canEdit = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if(!project)       return res.status(404).json({ message: "project not found" });
    if (project.owner == req.user._id) {
      next();
    } else {
      return res.status(403).json({ message: "can not edit this project" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error occurs while updating" ,error });
  }
};

const canDelete = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if(!project)       return res.status(404).json({ message: "project not found" });
    if (project.owner == req.user._id) {
      next();
    } else {
      return res.status(403).json({ message: "can not delete this project" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error occurs while deleting" ,error });
  }
};

module.exports = { canEdit , canDelete};
