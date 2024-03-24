const express = require("express");
const taskControllerInstance = require("../controllers/task.controller");
const { requireAuth, validationFailed } = require("../middlewares");
const taskValidation = require("../validators/task.validation");
const { canDelete } = require("../policies/task.policies");
const router = express.Router();

router.post(
  "/",
  requireAuth,
  taskValidation.create,
  validationFailed,
  taskControllerInstance.create
);
router.patch("/status/:id", requireAuth, taskControllerInstance.changeStatus);
router.delete("/:id", requireAuth, canDelete, taskControllerInstance.delete);

module.exports = router;
