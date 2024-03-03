const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");

module.exports = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized: Missing token" });
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      const user = await User.findById(req.cookies.userId);
      jwt.verify(
        user.refreshToken,
        process.env.JWT_SECRET,
        async (err, user) => {
          if (err) {
            user.refreshToken = null;
            user.save();
            return res
              .status(403)
              .json({ message: "Forbidden: Invalid token" });
          }
          console.log("hello");
          const token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: 900,
          });

          res.cookie("accessToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
          });
          req.user = user;
        }
      );
    }

    req.user = user;
    next();
  });
};
