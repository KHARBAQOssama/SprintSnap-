const express = require("express");
const notificationControllerInstance = require("../controllers/notification.controller");
const { requireAuth } = require("../middlewares");
const router = express.Router();

router.get("/", requireAuth, notificationControllerInstance.getAll);

module.exports = router;
