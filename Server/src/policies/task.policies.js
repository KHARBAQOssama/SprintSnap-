const Task = require("../models/project.model");
const canCreate = async (req, res, next) => {
  try {
    const project = await Task.findById(req.params.id);
    if (project.owner == req.user._id) {
      next();
    } else {
      console.log("er");
      return res.status(403).json({ message: "can not edit this project" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { canCreate };
