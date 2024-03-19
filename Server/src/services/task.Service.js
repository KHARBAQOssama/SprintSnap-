const Task = require("../models/task.model");

class TaskService {
  model;
  constructor(TaskModel) {
    this.model = TaskModel;
  }
  create = async (data) => {
    try {
      const newTask = await this.model.create(data);

      const task = await this.model.findById(newTask._id).populate({
        path: "assigned_to",
        model: "User",
        select: "first_name last_name _id",
      });
      return task;
    } catch (error) {
      console.log(error);
    }
  };
}
const serviceInstance = new TaskService(Task);
module.exports = serviceInstance;
