require("dotenv").config();
const jwt = require("jsonwebtoken");
const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_REFRESH,
    { expiresIn: "7d" }
  );
  return refreshToken;
};

module.exports = {
  generateRefreshToken,
};
