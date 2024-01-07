const User = require("../models/user.model");

async function registerUser(first_name, last_name, email, password) {
  try {
    const user = new User({ first_name, last_name, email, password });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { registerUser };
