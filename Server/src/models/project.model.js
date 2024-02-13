const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["ToDo", "InProgress", "Done"],
    default: "ToDo",
  },
  task_status: [{ type: String }],
  deleted: { type: Boolean, default: "false" },
  cover: { type: String },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
