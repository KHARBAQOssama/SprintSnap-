const express = require("express");
const ProjectController = require("../controllers/project.controller");
const ProjectService = require("../services/project.service");
const ProjectModel = require("../models/project.model");
const { projectValidation } = require("../validators");
const { requireAuth } = require("../middlewares");
const router = express.Router();

let projectModel = new ProjectModel();
let projectService = new ProjectService(projectModel);
let projectController = new ProjectController(projectService);

router.post("/", projectValidation.create, projectController.create);

module.exports = router;
