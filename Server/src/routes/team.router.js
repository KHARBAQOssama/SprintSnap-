const express = require('express');
const teamControllerInstance = require('../controllers/team.controller');
const { requireAuth } = require('../middlewares');
const router = express.Router();


module.exports = router