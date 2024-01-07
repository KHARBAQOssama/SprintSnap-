const userService = require("../services/user.service");

async function registerUser(req, res) {
    // return res.json(req.body)
  const { first_name, last_name, email, password } = req.body;

  try {
    const user = await userService.registerUser(
      first_name,
      last_name,
      email,
      password
    );
    res.status(201).json({ message : "user registered successfully!", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { registerUser };
