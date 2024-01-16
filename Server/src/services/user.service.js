class UserService {
  user;
  model;
  constructor(UserModel, Model) {
    this.user = UserModel;
    this.model = Model;
  }
  registerUser = async (first_name, last_name, email, password) => {
    try {
      const user = new this.model({
        first_name,
        last_name,
        email,
        password,
      });
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  };
  getUserByEmail = async (email) => {
    try {
      const user = await this.model.findOne({
        email,
      });
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
