const { validationResult } = require("express-validator");
const emailSender = require("../utils/emailSender");
const { generateEmailValidationMessage } = require("../utils/emailGenerators");

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

      emailSender(generateEmailValidationMessage(email));
      res.status(201).json({
        message:
          "user registered successfully! check your email to verify your account",
        user: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          verified: user.verified,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = UserController;
