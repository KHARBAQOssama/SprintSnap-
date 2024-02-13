class ProjectService {
  project;
  constructor(ProjectModel) {
    this.project = ProjectModel;
  }
  index = async (filterOptions) => {};
  create = async (data) => {
    
    try {
        const newProject = await this.project.create(data);
        return newProject;
    } catch (error) {
        
    }

  };
}

module.exports = ProjectService;