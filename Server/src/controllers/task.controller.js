const { userSocketMap } = require("../config/socket.config");
const Project = require("../models/project.model");
const TaskServiceInstance = require("../services/task.Service");
const { storeFileGetPath, storeImageGetPath } = require("../utils/tools");

class TaskController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  //   getAll = async (req, res) => {
  //     try {
  //       const Tasks = await this.service.getAll(req.user._id);
  //       return res.status(200).json({ Tasks });
  //     } catch (error) {}
  //   };
  create = async (req, res) => {
    try {
      // const { files } = req.body;
      // const getFilePaths = await Promise.all(
      //   files.map(async (file) => {
      //     return await storeFileGetPath(file);
      //   })
      // );
      // console.log(getFilePaths);
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
        .status(200)
        .json({ message: "task created successfully", task });
      //   if (task) {
      //     if (userSocketMap.has(task.to[0]._id.toString())) {
      //       const socketId = userSocketMap.get(task.to[0]._id.toString());
      //       const io = req.app.get("socketIo");

      //       let sent = io.to(socketId).emit("task", task);
      //       console.log("sent", sent, task);
      //     }
      //   }
      return res
        .status(201)
        .json({ message: "task created successfully", task });
    } catch (error) {}
  };
}

const TaskControllerInstance = new TaskController(TaskServiceInstance);

module.exports = TaskControllerInstance;
