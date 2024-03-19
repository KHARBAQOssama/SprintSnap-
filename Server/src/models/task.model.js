const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    assigned_to: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    status: { type: String, default: "" },
    deleted: { type: Boolean, default: "false" },
    images: [{ type: String }],
    files: [{ type: String }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
