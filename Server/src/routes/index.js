const express = require("express");
const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const projectRouter = require('./project.router')
const teamRouter = require('./team.router')
const invitationRouter = require('./invitation.router')
const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/team', teamRouter);
router.use('/invitation', invitationRouter);
router.use('/project', projectRouter);

module.exports = router;
