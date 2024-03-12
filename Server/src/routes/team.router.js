const express = require('express');
const teamControllerInstance = require('../controllers/team.controller');
const { requireAuth } = require('../middlewares');
const router = express.Router();

router.post('/:id/invite', requireAuth, teamControllerInstance.inviteToCollaboration)

module.exports = router