const { validationResult } = require("express-validator");

class UserController {
  service;
  constructor(UserService) {
    this.service = UserService;
  }
  registerUser = async (req, res) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
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
      res.status(201).json({ message: "user registered successfully!", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = UserController;
