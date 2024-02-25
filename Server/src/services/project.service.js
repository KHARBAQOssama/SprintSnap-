class ProjectService {
  model;
  constructor(ProjectModel) {
    this.model = ProjectModel;
  }
  index = async (filterOptions) => {};
  create = async (data) => {
    try {
      const newProject = await this.model.create(data);
      return newProject;
    } catch (error) {
      console.log(error);
    }
  };
  update = async (id,data) => {
    try {
      let project = await this.model.findUnique({where:{_id : id}});
      project = {...project,...data};
      await project.save();
      return project;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProjectService;
