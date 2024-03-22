const { validationResult } = require("express-validator");
const requireAuth = require("./auth/requireAuth");
const validationFailed = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  requireAuth,
  validationFailed,
};