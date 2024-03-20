const { body } = require("express-validator");

module.exports = [
  body("first_name").isString().notEmpty(), 
  body("last_name").isString().notEmpty(),
  body("email").isEmail().notEmpty().withMessage("Email is required"),
  body("password").isString().notEmpty(),
  body("password_confirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
  body("phone_number").optional().isString(),
  body("image").optional().isString(),
];

