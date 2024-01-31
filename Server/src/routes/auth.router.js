const express = require("express");
const UserController = require("../controllers/user.controller");
const AuthController = require("../controllers/auth.controller");
const UserService = require("../services/user.service");
const UserModel = require("../models/user.model");
const { registerValidation, loginValidation } = require("../validators");
const { requireAuth } = require("../middlewares");
const router = express.Router();



let userModel = new UserModel();
let userService = new UserService(userModel, UserModel);
let userController = new UserController(userService);
let authController = new AuthController(userService);



router.post("/register", registerValidation, userController.registerUser);
router.post("/login", loginValidation, authController.login);
router.post("/logout", requireAuth, authController.logout);
router.post("/password/reset", authController.resetPassword);
router.post("/password/forget", authController.forgetPassword);
router.post("/email/verify", authController.verifyEmail);
router.post("/email/demandverification", requireAuth, authController.sendEmailVerification)

module.exports = router;
