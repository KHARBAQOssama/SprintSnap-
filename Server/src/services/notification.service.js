const Notification = require("../models/notification.model");

class NotificationService {
  model;
  constructor(NotificationModel) {
    this.model = NotificationModel;
  }
  index = async (filterOptions) => {};
  getAll = async (ownerId) => {
    try {
      const notifications = await this.model
        .find({ to: ownerId })
        .populate({
          path: "to",
          model: "User",
        })
        .populate({
          path: "project",
          model: "Project",
        })
        .populate({
          path: "by",
          model: "User",
        });

      return notifications;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  create = async (data) => {
    try {
      const newNotification = await this.model.create(data);
      const contextPopulate = {
        path: "context",
        model: newNotification.type == "Task" ? "Task" : "Invitation",
      };
      const notification = await this.model
        .findById(newNotification._id)
        .populate({
          path: "to",
          model: "User",
          select: "first_name last_name _id email cover icon",
        })
        .populate({
          path: "project",
          model: "Project",
        })
        .populate({
          path: "by",
          model: "User",
          select: "first_name last_name _id email cover icon",
        })
        .populate(contextPopulate);
      return notification;
    } catch (error) {
      console.log(error);
    }
  };
}
const serviceInstance = new NotificationService(Notification);
module.exports = serviceInstance;
