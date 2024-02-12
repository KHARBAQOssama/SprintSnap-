const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const projectSchema = new mongoose.Schema({});

const Project = mongoose.model("Project", projectSchema);
module.exports = User;
