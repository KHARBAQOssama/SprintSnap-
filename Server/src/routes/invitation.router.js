const express = require("express");
const invitationControllerInstance = require("../controllers/invitation.controller");
const { requireAuth } = require("../middlewares");
const router = express.Router();

router.post("/", requireAuth, invitationControllerInstance.create);
router.get("/:invitation", requireAuth, invitationControllerInstance.getOne);
router.post(
  "/:invitation/confirm",
  requireAuth,
  invitationControllerInstance.confirm
);

module.exports = router;
