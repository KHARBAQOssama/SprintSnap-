const { validationResult } = require("express-validator");
const emailSender = require("../utils/emailSender");
const bcrypt = require("bcryptjs");
const {
  generateResetPasswordMessage,
  generateEmailValidationMessage,
} = require("../utils/emailGenerators");
const jwt = require("jsonwebtoken");
const { generateRefreshToken } = require("../utils/generators");
const UserService = require("../services/user.service");

const tokensGenerator = () => {};
class AuthController {
  service;
  constructor(UserService) {
    this.service = UserService;
  }
  login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const existingUser = await this.service.getUserByEmail(email);
      if (!existingUser)
        return res.status(400).json({ message: "The email is incorrect!" });
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!passwordMatch) {
        return res.status(400).json({ message: "Password is not correct" });
      }
      const payload = {
        _id: existingUser._id,
        email: existingUser.email,
        verified: existingUser.verified,
      };

      const refreshToken = generateRefreshToken(existingUser);
      await this.service.saveRefreshToken(existingUser._id, refreshToken);

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });

      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });
      res.cookie("userId", existingUser._id, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 604800000,
      });
      return res.status(200).json({
        user: {
          email: existingUser.email,
          first_name: existingUser.first_name,
          last_name: existingUser.last_name,
          _id: existingUser._id,
          verified: existingUser.verified,
        },
      });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  logout = async (req, res) => {
    res.cookie("accessToken", "");
    res.cookie("refreshToken", "");
    return res.status(200).json({ message: "logged out" });
  };

  forgetPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    try {
      const existingUser = await this.service.getUserByEmail(email);
      if (!existingUser)
        return res.status(400).json({ message: "The email is incorrect!" });

      emailSender(generateResetPasswordMessage(email));

      return res.status(200).json({ message: "we have sent an email" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  resetPassword = async (req, res) => {
    const { password, password_confirmation, token } = req.body;
    try {
      if (password != password_confirmation)
        return res.status(400).json({ message: "passwords do not match" });
      const { email } = jwt.verify(token, process.env.JWT_SECRET);
      await this.service.updatePassword(password, email);

      return res.status(200).json({ message: "password has been updated" });
    } catch (error) {
      return res.status(500).json({ message: "Invalid Token" });
    }
  };

  sendEmailVerification = async (req, res) => {
    const { email } = req.user;
    try {
      const user = await this.service.getUserByEmail(email);
      if (user.verified)
        return res
          .status(400)
          .json({ message: "this email is already verified" });

      await emailSender(generateEmailValidationMessage(email));
      return res
        .status(200)
        .json({ message: "we have sent a verification token to your email" });
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  };
  verifyEmail = async (req, res) => {
    const { token } = req.body;
    try {
      const { email } = jwt.verify(token, process.env.JWT_SECRET);
      await this.service.verifyEmail(email);
      return res
        .status(200)
        .json({ message: "your email has been verified successfully" });
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  };
}

module.exports = AuthController;
