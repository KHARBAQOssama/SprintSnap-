const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: Text,
    required: true,
  },
  cover: {
    type: String,
  },
  from: {
    type: date,
    required: true,
  },
  phone_number: {
    type: String,
  },
  image: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  refreshToken: { type: String },
});

userSchema.methods.hashPassword = async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
};

userSchema.pre("save", async function (next) {
  await this.hashPassword(next);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
