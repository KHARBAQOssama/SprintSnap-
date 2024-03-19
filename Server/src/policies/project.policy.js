const Project = require("../models/project.model");
const canEdit = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.owner == req.user._id) {
      next();
    } else {
      console.log('er');
      return res.status(403).json({ message: "can not edit this project" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { canEdit };
