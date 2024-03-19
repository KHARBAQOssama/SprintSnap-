const { userSocketMap } = require("../config/socket.config");
const notificationServiceInstance = require("../services/notification.service");

class NotificationController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  getAll = async (req, res) => {
    try {
      const notifications = await this.service.getAll(req.user._id);
      return res.status(200).json({ notifications });
    } catch (error) {}
  };
  create = async (data, req) => {
    try {
      const notification = await this.service.create(data);
      if (notification) {
        if (userSocketMap.has(notification.to[0]._id.toString())) {
          const socketId = userSocketMap.get(notification.to[0]._id.toString());
          const io = req.app.get("socketIo");
          
          let sent = io.to(socketId).emit("notification", notification);
          console.log('sent',sent, notification);
        }
      }
      return notification;
    } catch (error) {}
  };
}

const notificationControllerInstance = new NotificationController(
  notificationServiceInstance
);

module.exports = notificationControllerInstance;
