import api from "../../src/api";

const getNotifications = async () => {
  const response = await api.get("/notification");
  return response.data.notifications;
};

const notificationService = {
  getNotifications,
};

export default notificationService;
