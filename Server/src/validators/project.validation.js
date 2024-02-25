const { body } = require("express-validator");

module.exports = {
  create: [
    body("name").isString().notEmpty(),
    body("description").isString().notEmpty(),
    body("task_status").isArray(2),
    body("cover").optional().isString(),
  ],
  update: [
    body("name").optional().isString().notEmpty(),
    body("description").optional().isString().notEmpty(),
    body("task_status").optional().isArray(2).notEmpty(),
    body("cover").optional().isString(),
  ],
};
