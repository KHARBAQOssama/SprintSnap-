const express = require("express");
const { requireAuth } = require("../middlewares");
const activityControllerInstance = require("../controllers/activity.controller");
const router = express.Router();

router.get("/", requireAuth, activityControllerInstance.getAll);


module.exports = router;
