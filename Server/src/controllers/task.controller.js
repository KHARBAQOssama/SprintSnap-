const { userSocketMap } = require("../config/socket.config");
const Project = require("../models/project.model");
const TaskServiceInstance = require("../services/task.Service");
const { storeFileGetPath, storeImageGetPath } = require("../utils/tools");
const notificationControllerInstance = require("./notification.controller");

class TaskController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  create = async (req, res) => {
    try {
      const files = await Promise.all(
        req.body.files.map(async (file) => {
          return await storeFileGetPath(file.base64);
        })
      );
      const images = await Promise.all(
        req.body.images.map(async (image) => {
          return await storeImageGetPath(image);
        })
      );
      const data = {
        ...req.body,
        by: req.user._id,
        images,
        files,
        assigned_to: req.body.assigned_to.map((item) => item._id),
      };

      const task = await this.service.create(data);
      if (task) {
        try {
          const project = await Project.findOneAndUpdate(
            { _id: req.body.project },
            { $push: { tasks: task._id } },
            { new: true, runValidators: true }
          );
        } catch (error) {
          console.log(error);
        }
      }
      return res
        .status(201)
        .json({ message: "task created successfully", task });
    } catch (error) {
      console.log(error);
    }
  };

  changeStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const task = await this.service.changeStatus(id, status);
      if (task) {
        const project = await Project.findById(task.project).populate({
          path: "team",
          model: "Team",
        });

        notificationControllerInstance.create(
          {
            to: project.team.members,
            by: req.user._id,
            project: task.project,
            action: "ChangeStatus",
            type: "Activity",
          },
          req
        );
      }
      return res
        .status(201)
        .json({ message: "task updated successfully", task });
    } catch (error) {
      console.log(error);
    }
  };
  delete = async (req, res) => {
    const { id } = req.params;
    try {
      await this.service.delete(id);
      return res.status(200).json({ message: "task deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "something went wrong", error });
    }
  };
}

const TaskControllerInstance = new TaskController(TaskServiceInstance);

module.exports = TaskControllerInstance;
