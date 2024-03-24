const express = require("express");
const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const projectRouter = require("./project.router");
const notificationRouter = require("./notification.router");
const teamRouter = require("./team.router");
const invitationRouter = require("./invitation.router");
const taskRouter = require("./task.router");
const activityRouter = require("./activity.router");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/team", teamRouter);
router.use("/invitation", invitationRouter);
router.use("/project", projectRouter);
router.use("/notification", notificationRouter);
router.use("/task", taskRouter);
router.use("/activity", activityRouter);

module.exports = router;
