const express = require("express");
const ProjectController = require("../controllers/project.controller");
const ProjectService = require("../services/project.service");
const ProjectModel = require("../models/project.model");
const { projectValidation } = require("../validators");
const { requireAuth, validationFailed } = require("../middlewares");
const projectPolicies = require("../policies/project.policy");
const router = express.Router();
let projectService = new ProjectService(ProjectModel);
let projectController = new ProjectController(projectService);

router.get("/", requireAuth, projectController.getAll);
router.post(
  "/",
  requireAuth,
  projectValidation.create,
  validationFailed,
  projectController.create
);

router.get(
  "/:id",
  requireAuth,
  projectController.getOne
);
router.patch(
  "/:projectId",
  requireAuth,
  projectPolicies.canEdit,
  projectValidation.update,
  validationFailed,
  projectController.update
);

module.exports = router;
