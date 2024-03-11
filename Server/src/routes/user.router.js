const express = require("express");
const UserController = require("../controllers/user.controller");
const UserService = require("../services/user.service");
const UserModel = require("../models/user.model");
const { registerValidation, loginValidation } = require("../validators");
const { requireAuth, validationFailed } = require("../middlewares");
const router = express.Router();

let userModel = new UserModel();
let userService = new UserService(userModel, UserModel);
let userController = new UserController(userService);

router.get(
  "/getbyemail/:email",
  requireAuth,
  userController.getByEmail
);


module.exports = router;
