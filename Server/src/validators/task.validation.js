const { body } = require("express-validator");

module.exports = {
  create: [
    body("name").isString().notEmpty(),
    body("description").isString().notEmpty(),
    body("project").notEmpty(),
    body("images").isArray(),
    body("files").isArray(),
    body("status").isString(),
  ],
  //   update: [
  //     body("name").optional().isString().notEmpty(),
  //     body("description").optional().isString().notEmpty(),
  //     body("cover").optional().isString(),
  //     body("icon").isString(),
  //   ],
};
