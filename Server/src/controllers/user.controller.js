const { validationResult } = require("express-validator");
const emailSender = require("../utils/emailSender");
const { generateEmailValidationMessage } = require("../utils/emailGenerators");
const { generateRefreshToken } = require("../utils/generators");
const jwt = require("jsonwebtoken");

class UserController {
  service;
  constructor(UserService) {
    this.service = UserService;
  }
  registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { first_name, last_name, email, password } = req.body;
    try {
      const existingUser = await this.service.getUserByEmail(email);
      if (existingUser)
        return res
          .status(409)
          .json({ message: "This email is already taken!" });
      const user = await this.service.registerUser(
        first_name,
        last_name,
        email,
        password
      );
      const payload = {
        _id: user._id,
        email: user.email,
        verified: false,
      };

      const refreshToken = generateRefreshToken(user);
      await this.service.saveRefreshToken(user._id, refreshToken);

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 900,
      });

      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });
      res.cookie("userId", user._id, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 604800000,
      });
      emailSender(generateEmailValidationMessage(email));
      res.status(201).json({
        message:
          "user registered successfully! check your email to verify your account",
        user: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          _id: user._id,
          verified: user.verified,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  getByEmail = async (req, res) => {
    const result = await this.service.getUserByEmail(req.params.email);
    if (result) {
      delete result.password;
      delete result.refreshToken;
    }
    return res.status(200).json({ user: result });
  };
}

module.exports = UserController;
