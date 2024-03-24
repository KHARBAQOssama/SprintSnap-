const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    to: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    action: {
      type: String,
      enum: ["AddTask", "UpdateTask", "ChangeStatus", "DeleteTask"],
    },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
