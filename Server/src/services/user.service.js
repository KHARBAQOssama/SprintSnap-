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
  saveRefreshToken = async (userId, refreshToken) => {
    try {
      await this.model.updateOne(
        { _id: userId },
        { $set: { refreshToken: refreshToken } }
      );
      return true;
    } catch (error) {
      throw new Error("Refresh token did not save.");
    }
  };
  verifyEmail = async (email) => {
    try {
      await this.model.updateOne({ email }, { $set: { verified: true } });
      return true;
    } catch (error) {
      throw new Error("something went wrong verifying  your email");
    }
  };
  updatePassword = async (password, email) => {
    try {
      let user = await this.getUserByEmail(email);
      user.password = password;
      await user.save();
    } catch (error) {
      console.log(error);
      throw new Error("something went wrong updating your password");
    }
  };
}

module.exports = UserService;
