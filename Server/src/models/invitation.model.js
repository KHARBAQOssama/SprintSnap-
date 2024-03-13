const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  role: {
    type: String,
    enum: ["Administrator", "Lead", "Contributor", "Viewer"],
    default: "Contributor",
  },
  by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Invitation = mongoose.model("Invitation", invitationSchema);
module.exports = Invitation;
