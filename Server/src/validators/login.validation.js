const { body } = require("express-validator");

module.exports = [
  body("email").isEmail().notEmpty().withMessage("Email is required"),
  body("password").isString().notEmpty(),
];
