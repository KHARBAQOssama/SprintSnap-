const express = require("express");
const taskControllerInstance = require("../controllers/task.controller");
const { requireAuth, validationFailed } = require("../middlewares");
const taskValidation = require("../validators/task.validation");
const router = express.Router();

router.post(
  "/",
  requireAuth,
  taskValidation.create,
  validationFailed,
  taskControllerInstance.create
);

module.exports = router;
