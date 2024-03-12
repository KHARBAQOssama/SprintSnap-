const express = require("express");
const invitationControllerInstance = require("../controllers/invitation.controller");
const { requireAuth } = require("../middlewares");
const router = express.Router();

router.post(
  "/",
  requireAuth,
  invitationControllerInstance.create
);

module.exports = router;
