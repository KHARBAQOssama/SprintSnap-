const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    to: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    context: { type: mongoose.Schema.Types.ObjectId },
    type: {
      type: String,
      enum: ["Invitation", "Task"],
    },
    by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
