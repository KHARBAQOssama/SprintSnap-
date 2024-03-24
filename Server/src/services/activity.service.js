class ActivityService {
  model;
  constructor(Model) {
    this.model = Model;
  }
  getAll = async (userId) => {
    try {
      const activities = await this.model
        .find({ to: userId })
        .sort({ createdAt: -1 })
        .populate({
          path: "project",
          model: "Project",
        })
        .populate({
          path: "by",
          model: "User",
        });
      return activities;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = ActivityService;
