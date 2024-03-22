const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");

module.exports = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Forbidden" });
  }
  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    const userId = req.cookies.userId;
    if (!userId) {
      return res.status(401).json({ message: "Forbidden" });
    }

    try {
      const user = await User.findById(userId, "refreshToken");
      if (!user || !user.refreshToken) {
        return res.status(401).json({ message: "Forbidden" });
      }
      const decodedRefreshToken = jwt.verify(
        user.refreshToken,
        process.env.JWT_REFRESH
      );
      req.user = decodedRefreshToken;
      const newAccessToken = jwt.sign(
        {
          _id: decodedRefreshToken._id,
          email: decodedRefreshToken.email,
          verified: user.verified,
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });
      return next();
    } catch (err) {
      return res.status(401).json({ message: "Forbidden", err });
    }
  }
};
