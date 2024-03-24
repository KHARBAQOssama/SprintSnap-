const Activity = require("../models/activity.model");
const ActivityService = require("../services/activity.service");

class ActivityController {
  service;
  constructor(Service) {
    this.service = Service;
  }
  getAll = async (req,res) => {
    const activities = await this.service.getAll(req.user._id);
    return res.status(200).json(activities);
  };
}
const service = new ActivityService(Activity);
const activityControllerInstance = new ActivityController(service);

module.exports = activityControllerInstance;
