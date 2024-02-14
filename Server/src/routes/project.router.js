const express = require("express");
const ProjectController = require("../controllers/project.controller");
const ProjectService = require("../services/project.service");
const ProjectModel = require("../models/project.model");
const { projectValidation } = require("../validators");
const { requireAuth } = require("../middlewares");
const router = express.Router();

let projectService = new ProjectService(ProjectModel);
let projectController = new ProjectController(projectService);

router.post("/", requireAuth,projectValidation.create, projectController.create);
router.post("/", requireAuth,projectValidation.update, projectController.update);

module.exports = router;
