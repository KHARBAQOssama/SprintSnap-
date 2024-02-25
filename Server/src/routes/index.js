const express = require("express");
const authRouter = require('./auth.router')
const projectRouter = require('./project.router')
const router = express.Router();

router.use('/auth', authRouter);
router.use('/project', projectRouter);

module.exports = router;
